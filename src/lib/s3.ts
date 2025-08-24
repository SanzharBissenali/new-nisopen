import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

export function checkAWSConfig() {
  const requiredVars = ['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AWS_REGION', 'AWS_S3_BUCKET'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    throw new Error(`Missing AWS environment variables: ${missing.join(', ')}. Please check your .env.local file.`);
  }
}

let s3Client: S3Client;

try {
  checkAWSConfig();
  s3Client = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });
} catch (error) {
  console.error('AWS S3 configuration error:', error);
  // Create a dummy client to prevent import errors
  s3Client = {} as S3Client;
}

export interface FileMetadata {
  subject: string;
  grade: string;
  quarter: string;
  week: string;
  type: 'presentations' | 'homework' | 'readings';
  originalName: string;
  mimeType: string;
}

export function generateS3Key(metadata: FileMetadata): string {
  const { subject, grade, quarter, week, type, originalName } = metadata;
  const fileExtension = originalName.split('.').pop();
  const cleanFileName = originalName.replace(/[^a-zA-Z0-9.-]/g, '_');
  const uniqueId = uuidv4().substring(0, 8);
  
  return `${subject.toLowerCase()}/${grade}/quarter-${quarter}/week-${week}/${type}/${uniqueId}_${cleanFileName}`;
}

export async function generatePresignedUploadUrl(metadata: FileMetadata): Promise<{ uploadUrl: string; fileKey: string; publicUrl: string }> {
  checkAWSConfig();
  
  const fileKey = generateS3Key(metadata);
  
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: fileKey,
    ContentType: metadata.mimeType,
  });

  const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // 1 hour
  
  const publicUrl = process.env.AWS_CLOUDFRONT_URL 
    ? `${process.env.AWS_CLOUDFRONT_URL}/${fileKey}`
    : `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;

  return {
    uploadUrl,
    fileKey,
    publicUrl,
  };
}

export async function deleteS3File(fileKey: string): Promise<void> {
  checkAWSConfig();
  
  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: fileKey,
  });

  await s3Client.send(command);
}

export async function listS3Files(prefix?: string): Promise<Array<{ key: string; size: number; lastModified: Date }>> {
  checkAWSConfig();
  
  const command = new ListObjectsV2Command({
    Bucket: process.env.AWS_S3_BUCKET!,
    Prefix: prefix,
  });

  const response = await s3Client.send(command);
  
  return (response.Contents || []).map(object => ({
    key: object.Key!,
    size: object.Size || 0,
    lastModified: object.LastModified || new Date(),
  }));
}

export { s3Client };