import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { generatePresignedUploadUrl, FileMetadata, checkAWSConfig } from "@/lib/s3";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    // Check AWS configuration first
    try {
      checkAWSConfig();
    } catch (configError) {
      console.error("AWS configuration error:", configError);
      return NextResponse.json({ 
        error: "AWS S3 not configured. Please check your environment variables.",
        details: configError instanceof Error ? configError.message : "Unknown configuration error"
      }, { status: 500 });
    }

    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { fileName, fileType, subject, grade, quarter, week, type } = body;

    if (!fileName || !fileType || !subject || !grade || !quarter || !week || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const metadata: FileMetadata = {
      subject,
      grade,
      quarter,
      week,
      type,
      originalName: fileName,
      mimeType: fileType,
    };

    const { uploadUrl, fileKey, publicUrl } = await generatePresignedUploadUrl(metadata);

    // Store file metadata in database
    const fileRecord = await prisma.file.create({
      data: {
        filename: fileKey,
        originalName: fileName,
        fileUrl: publicUrl,
        fileSize: 0, // Will be updated after upload
        mimeType: fileType,
        uploadedById: session.user.id,
      },
    });

    return NextResponse.json({
      uploadUrl,
      fileKey,
      publicUrl,
      fileId: fileRecord.id,
    });
  } catch (error) {
    console.error("Upload preparation error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ 
      error: "Failed to prepare upload",
      details: errorMessage 
    }, { status: 500 });
  }
}