# AWS S3 Setup Instructions

## 1. Create AWS Account
- Sign up at [aws.amazon.com](https://aws.amazon.com)
- Complete account verification

## 2. Create S3 Bucket ✅ (Done: bucket name "nisopen")
1. Go to S3 console
2. Click "Create bucket"  
3. Bucket name: `nisopen` ✅
4. Select region (e.g., `us-east-1`)
5. **Block Public Access**: UNCHECK "Block all public access" ✅
6. Acknowledge the warning about public access
7. Create bucket

## 3. Configure S3 CORS for Browser Uploads (CRITICAL!)
1. Select your bucket
2. Go to "Permissions" tab  
3. Scroll down to "Cross-origin resource sharing (CORS)"
4. Click "Edit" and paste this CORS configuration:

```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "PUT",
            "POST"
        ],
        "AllowedOrigins": [
            "http://localhost:3000",
            "http://localhost:3001",
            "https://your-domain.com"
        ],
        "ExposeHeaders": [
            "ETag"
        ]
    }
]
```

5. Click "Save changes"

## 4. Configure Bucket for Public Read Access
1. Stay in "Permissions" tab
2. Edit "Bucket policy"
4. Add this policy (for bucket "nisopen"):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::nisopen/*"
        }
    ]
}
```

## 4. Create IAM User for File Uploads
1. Go to IAM console
2. Click "Users" → "Add users"
3. Username: `nisopen-uploader`
4. Select "Programmatic access"
5. Click "Next: Permissions"
6. Click "Attach policies directly"
7. Create custom policy with this JSON (for bucket "nisopen"):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:DeleteObject", 
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::nisopen",
                "arn:aws:s3:::nisopen/*"
            ]
        }
    ]
}
```

8. Complete user creation
9. **SAVE** the Access Key ID and Secret Access Key

## 5. Environment Variables
Copy `.env.example` to `.env.local` and fill in:

```env
AWS_ACCESS_KEY_ID="your-access-key-id"
AWS_SECRET_ACCESS_KEY="your-secret-access-key"
AWS_REGION="us-east-1"
AWS_S3_BUCKET="nisopen"
AWS_CLOUDFRONT_URL="" # Optional, for CDN
```

## 6. Optional: CloudFront CDN
1. Go to CloudFront console
2. Create distribution
3. Origin domain: your S3 bucket
4. Origin path: leave empty
5. Create distribution
6. Copy distribution domain name
7. Add to `AWS_CLOUDFRONT_URL` in `.env.local`

## File Structure Created
Files will be organized as:
```
s3://your-bucket/
├── mathematics/
│   ├── grade-10/
│   │   ├── quarter-1/
│   │   │   ├── week-1/
│   │   │   │   ├── presentations/
│   │   │   │   ├── homework/
│   │   │   │   └── readings/
```

## Manual File Management
- Use AWS S3 console to browse/manage files
- Files maintain original names with unique prefixes
- Organized in logical folder structure
- Direct download links available