import { PrismaClient } from '@prisma/client';
import { ListObjectsV2Command, HeadObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

// S3 Configuration
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || 'nisopen';

interface ParsedFileInfo {
  subject: string;
  grade: string;
  quarter: string;
  week: string;
  type: 'presentations' | 'homework' | 'readings';
  originalName: string;
  s3Key: string;
}

function parseS3Key(s3Key: string): ParsedFileInfo | null {
  // Expected format: subject/grade/quarter-X/week-Y/type/filename
  const parts = s3Key.split('/');
  
  if (parts.length !== 6) {
    console.warn(`⚠️  Skipping file with invalid path structure: ${s3Key}`);
    return null;
  }

  const [subject, grade, quarterStr, weekStr, type, filename] = parts;
  
  // Extract numbers from quarter-1, week-2 format
  const quarterMatch = quarterStr.match(/quarter-(\d+)/);
  const weekMatch = weekStr.match(/week-(\d+)/);
  
  if (!quarterMatch || !weekMatch) {
    console.warn(`⚠️  Skipping file with invalid quarter/week format: ${s3Key}`);
    return null;
  }

  if (!['presentations', 'homework', 'readings'].includes(type)) {
    console.warn(`⚠️  Skipping file with invalid type: ${type} in ${s3Key}`);
    return null;
  }

  return {
    subject: subject.charAt(0).toUpperCase() + subject.slice(1),
    grade,
    quarter: quarterMatch[1],
    week: weekMatch[1],
    type: type as 'presentations' | 'homework' | 'readings',
    originalName: filename.replace(/^\w+_/, ''), // Remove UUID prefix if exists
    s3Key,
  };
}

async function getFileMetadata(s3Key: string) {
  try {
    const command = new HeadObjectCommand({
      Bucket: BUCKET_NAME,
      Key: s3Key,
    });
    
    const response = await s3Client.send(command);
    return {
      size: response.ContentLength || 0,
      mimeType: response.ContentType || 'application/octet-stream',
      lastModified: response.LastModified || new Date(),
    };
  } catch (error) {
    console.error(`Error getting metadata for ${s3Key}:`, error);
    return {
      size: 0,
      mimeType: 'application/octet-stream',
      lastModified: new Date(),
    };
  }
}

async function getDefaultTeacherId(): Promise<string> {
  // Try to find admin user first
  let user = await prisma.user.findFirst({
    where: { role: 'ADMIN' }
  });

  if (!user) {
    // If no admin, find any teacher
    user = await prisma.user.findFirst({
      where: { role: 'TEACHER' }
    });
  }

  if (!user) {
    // Create a default user if none exists
    console.log('📝 Creating default teacher user for file uploads...');
    user = await prisma.user.create({
      data: {
        id: uuidv4(),
        email: 'bulk-import@nisopen.com',
        name: 'Bulk Import User',
        role: 'TEACHER',
        password: 'not-used', // This user won't login
      }
    });
  }

  return user.id;
}

async function importS3Files() {
  console.log('🚀 Starting S3 bulk import...\n');

  try {
    // Get default teacher ID for file ownership
    const defaultTeacherId = await getDefaultTeacherId();
    console.log(`👤 Using teacher ID: ${defaultTeacherId}\n`);

    // List all objects in the S3 bucket
    const listCommand = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
    });

    const response = await s3Client.send(listCommand);
    const objects = response.Contents || [];

    console.log(`📁 Found ${objects.length} files in S3 bucket\n`);

    let imported = 0;
    let skipped = 0;
    let errors = 0;

    for (const object of objects) {
      const s3Key = object.Key!;
      
      // Skip directories and system files
      if (s3Key.endsWith('/') || s3Key.startsWith('.')) {
        continue;
      }

      try {
        // Parse the S3 key to extract file information
        const fileInfo = parseS3Key(s3Key);
        if (!fileInfo) {
          skipped++;
          continue;
        }

        // Check if file already exists in database
        const existingFile = await prisma.file.findFirst({
          where: { 
            filename: s3Key 
          }
        });

        if (existingFile) {
          console.log(`⏭️  Already exists: ${fileInfo.originalName}`);
          skipped++;
          continue;
        }

        // Get file metadata from S3
        const metadata = await getFileMetadata(s3Key);

        // Create database record
        await prisma.file.create({
          data: {
            id: uuidv4(),
            filename: s3Key,
            originalName: fileInfo.originalName,
            fileUrl: `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`,
            fileSize: metadata.size,
            mimeType: metadata.mimeType,
            uploadedById: defaultTeacherId,
            createdAt: metadata.lastModified,
          }
        });

        console.log(`✅ Imported: ${fileInfo.subject}/${fileInfo.grade}/Q${fileInfo.quarter}/W${fileInfo.week}/${fileInfo.type}/${fileInfo.originalName}`);
        imported++;

      } catch (error) {
        console.error(`❌ Error processing ${s3Key}:`, error);
        errors++;
      }
    }

    console.log(`\n🎉 Bulk import completed!`);
    console.log(`✅ Imported: ${imported} files`);
    console.log(`⏭️  Skipped: ${skipped} files`);
    console.log(`❌ Errors: ${errors} files`);

  } catch (error) {
    console.error('💥 Fatal error during bulk import:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import
importS3Files();