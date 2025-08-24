# NIS Open Educational Platform

A modern, configurable educational materials platform built with Next.js, where teachers can upload files, create content, and students can access materials easily.

## Features

- 🔐 **Authentication System** - Secure login for teachers and administrators
- 📁 **File Upload & Management** - Upload educational materials with permanent links
- ✏️ **Rich Content Editor** - Create and edit pages with TipTap markdown editor
- 🔍 **Search Functionality** - Find materials across subjects and grades
- 👥 **User Management** - Admin panel for managing users and content
- 📱 **Responsive Design** - Works on all devices
- 🌐 **Multi-language Support** - English and Kazakh/Russian text

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Database
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed with initial data
npm run db:seed
```

### 3. Configure Environment
Update `.env.local` with your settings:
```env
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
UPLOADTHING_SECRET=your-uploadthing-secret
UPLOADTHING_APP_ID=your-uploadthing-app-id
```

### 4. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

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

## File Storage

The platform supports file uploads through UploadThing, which provides:
- Permanent, CDN-backed URLs
- Automatic file optimization
- Support for various file types (PDF, DOC, images, etc.)
- Built-in security and validation

To configure file storage:
1. Create an account at [UploadThing](https://uploadthing.com)
2. Get your API keys
3. Update the environment variables

## Database

The application uses SQLite for development (easy setup) and can be configured for PostgreSQL in production. The database schema includes:

- **Users** - Authentication and role management
- **Pages** - Educational content with metadata
- **Files** - Uploaded file references

## Development

### Project Structure
```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
├── lib/                 # Utility functions and configurations
└── types/               # TypeScript type definitions

prisma/
├── schema.prisma        # Database schema
└── migrations/          # Database migration files
```

### Key Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Prisma** - Database ORM and migrations
- **NextAuth.js** - Authentication solution
- **TailwindCSS** - Utility-first CSS framework
- **TipTap** - Rich text editor
- **UploadThing** - File upload service

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Set up a PostgreSQL database (Vercel Postgres recommended)
5. Update the database URL in Prisma schema

## License

This project is open source and available under the MIT License.
