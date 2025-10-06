# nisOpen - Educational Platform

A modern Next.js 15 educational platform for sharing presentations, homework, and readings. Features AWS S3 file storage, organized content management, and role-based access for teachers and students.

## Features

- 🔐 **Authentication System** - Secure login with NextAuth.js for teachers and students
- 📁 **AWS S3 File Storage** - Organized file uploads with structured folder hierarchy
- ✏️ **Rich Content Editor** - Create and edit pages with TipTap markdown editor
- 🔍 **Search Functionality** - Find materials across subjects and grades
- 👥 **User Management** - Admin panel for managing users and content
- 📱 **Responsive Design** - Works on all devices with Tailwind CSS
- 🌙 **Dark/Light Theme** - Theme toggle with persistent user preferences
- 📚 **Grade Organization** - Support for grades 7-12, quarters 1-4, weeks 1-10

## Quick Start

### 1. Clone and Install
```bash
git clone https://github.com/SanzharBissenali/new-nisopen.git
cd new-nisopen
npm install
```

### 2. Environment Setup
```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your credentials (see Configuration section below)
```

### 3. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# For development (SQLite)
npx prisma db push

# Seed with initial data
npm run db:seed
```

### 4. Start Development
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Configuration

### Required Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database (SQLite for dev, PostgreSQL for production)
DATABASE_URL="file:./dev.db"

# NextAuth.js (generate a secure random string)
NEXTAUTH_SECRET="your-nextauth-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# AWS S3 Configuration (Required for file uploads)
AWS_ACCESS_KEY_ID="your-aws-access-key-here"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key-here"
AWS_REGION="us-east-1"
AWS_S3_BUCKET="your-s3-bucket-name"
AWS_CLOUDFRONT_URL=""
```

### AWS S3 Setup

1. **Create AWS Account** and S3 bucket
2. **Create IAM User** with S3 permissions:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "s3:GetObject",
           "s3:PutObject",
           "s3:DeleteObject"
         ],
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```
3. **Configure CORS** on your S3 bucket:
   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
       "AllowedOrigins": ["http://localhost:3000", "https://your-domain.com"],
       "ExposeHeaders": []
     }
   ]
   ```

## Demo Accounts

After running the seed script, you can use these accounts:

**Administrator:**
- Email: `admin@nisopen.com`
- Password: `admin123`

**Teacher:**
- Email: `teacher@nisopen.com`
- Password: `teacher123`

## How It Works

### For Teachers:
1. **Sign In** - Use your credentials to access the dashboard
2. **Upload Files** - Drag and drop educational materials to get permanent links
3. **Create Content** - Use the page editor to create lessons with embedded file links
4. **Organize** - Categorize by subject, grade, and quarter
5. **Publish** - Make content visible to students

### For Students:
1. **Browse** - Navigate by subject or grade level
2. **Search** - Find specific materials using the search function
3. **Access** - View and download educational content freely

### For Administrators:
1. **User Management** - Add/remove teachers and manage accounts
2. **Content Moderation** - Review and manage all published content
3. **System Overview** - Monitor platform usage and statistics

## File Organization

Files are organized in S3 with the following structure:
```
s3://your-bucket/
└── subject/
    └── grade/
        └── quarter/
            └── week/
                └── type/
                    └── filename
```

**Example**: `Mathematics/10/2/5/presentations/algebra-lesson.pdf`

- **Subjects**: Mathematics, Physics, Chemistry, etc.
- **Grades**: 7, 8, 9, 10, 11, 12
- **Quarters**: 1, 2, 3, 4
- **Weeks**: 1-10
- **Types**: presentations, homework, readings

## Development

### Project Structure
```
src/
├── app/                 # Next.js app router pages
│   ├── api/            # API routes (auth, files, S3)
│   ├── dashboard/      # Teacher dashboard
│   ├── grade/          # Grade-specific pages
│   └── subject/        # Subject browsing
├── components/          # Reusable React components
│   ├── s3-file-upload.tsx  # File upload component
│   ├── theme-provider.tsx  # Theme management
│   └── navigation.tsx      # Main navigation
├── lib/                 # Utility functions
│   ├── s3.ts           # AWS S3 integration
│   ├── auth.ts         # NextAuth configuration
│   └── prisma.ts       # Database client
└── types/               # TypeScript definitions

scripts/
├── seed.ts             # Database seeding
└── bulk-import-s3-files.ts  # S3 file import utility
```

### Available Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run typecheck    # TypeScript check (if available)
npm run db:seed      # Seed database with sample data

# Database commands
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes
npx prisma studio    # Open Prisma Studio
```

### Key Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and development experience
- **Prisma** - Database ORM with SQLite/PostgreSQL
- **NextAuth.js** - Authentication with credentials provider
- **Tailwind CSS** - Utility-first CSS framework
- **TipTap** - Rich text editor for content creation
- **AWS S3** - File storage with presigned URLs
- **Shadcn/ui** - UI component library

## Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub** (this repository)
2. **Connect to Vercel**:
   - Import repository at [Vercel](https://vercel.com/new)
   - Choose "nisopen" project
3. **Configure Environment Variables** in Vercel dashboard:
   ```env
   DATABASE_URL=postgresql://... (Vercel Postgres)
   NEXTAUTH_SECRET=your-production-secret
   NEXTAUTH_URL=https://your-app.vercel.app
   AWS_ACCESS_KEY_ID=your-aws-key
   AWS_SECRET_ACCESS_KEY=your-aws-secret
   AWS_REGION=us-east-1
   AWS_S3_BUCKET=your-bucket-name
   ```
4. **Database Setup**:
   - Create Vercel Postgres database
   - Update DATABASE_URL
   - Run `npx prisma db push` in Vercel deployment
5. **Deploy** - Vercel will automatically deploy on push

### Manual Deployment

For other platforms, ensure:
- Node.js 18+ environment
- PostgreSQL database for production
- All environment variables configured
- Run build process: `npm run build`

## License

This project is open source and available under the MIT License.
