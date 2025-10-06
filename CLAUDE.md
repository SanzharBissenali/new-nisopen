# nisOpen - Educational Platform

## Project Overview
A Next.js 15 educational platform for sharing presentations, homework, and readings. Transitioned from UploadThing to AWS S3 for file storage.

## Tech Stack
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Prisma ORM with SQLite (dev) 
- NextAuth.js for authentication
- AWS S3 for file storage
- TipTap rich text editor

## Key Features
- User authentication (teachers and students)
- File upload with organized S3 structure: `subject/grade/quarter/week/type/`
- Content management for educational materials
- Grade levels: 7, 8, 9, 10, 11, 12
- Quarters: 1-4, Weeks: 1-10
- File types: presentations, homework, readings

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript check (if available)
```

## Database Management
```bash
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes
npx prisma studio    # Open Prisma Studio
```

## Environment Variables
Required in `.env.local`:
- `DATABASE_URL`
- `NEXTAUTH_SECRET` (generate a secure random string)
- `NEXTAUTH_URL` (update with your Vercel URL after deployment)
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY` 
- `AWS_REGION`
- `AWS_S3_BUCKET`

## Deployment Notes
- Ready for Vercel deployment
- Switch to PostgreSQL for production (Vercel Postgres recommended)
- Update NEXTAUTH_URL after getting Vercel domain

## Current Issues Fixed
✅ TipTap SSR hydration error (added `immediatelyRender: false`)
✅ AWS S3 file upload system implemented
✅ CORS configuration for S3 uploads
✅ File renaming functionality for teachers
✅ Limited file display to 5 most recent uploads

## File Organization
- `/src/components/s3-file-upload.tsx` - Main upload component
- `/src/lib/s3.ts` - S3 service integration  
- `/src/app/api/s3/upload/route.ts` - Upload API endpoint
- `/src/app/api/files/[id]/route.ts` - File management API
- `/scripts/` - Database seeding scripts

## Notes
- File uploads use presigned URLs for direct S3 upload
- Files have unique ID prefixes to prevent naming conflicts
- Teachers can rename their uploaded files inline
- S3 bucket: "nisopen" in us-east-1 region