import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const pages = await prisma.page.findMany({
      where: { authorId: session.user.id },
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(pages);
  } catch (error) {
    console.error("Error fetching pages:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, slug, content, subject, grade, quarter, published } = await request.json();

    if (!title || !slug) {
      return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
    }

    // Check if slug already exists
    const existingPage = await prisma.page.findUnique({
      where: { slug },
    });

    if (existingPage) {
      return NextResponse.json({ error: "A page with this slug already exists" }, { status: 400 });
    }

    const page = await prisma.page.create({
      data: {
        title,
        slug,
        content,
        subject,
        grade,
        quarter,
        published,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(page);
  } catch (error) {
    console.error("Error creating page:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}