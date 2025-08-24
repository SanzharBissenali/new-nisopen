# Teacher Workflow Demo

## Current Status

**Demo Accounts Available:**
- **Admin**: admin@nisopen.com / admin123
- **Teacher**: teacher@nisopen.com / teacher123

## Teacher Dashboard Features

### 1. File Upload & Management
- **Location**: Dashboard → File Upload & Management tab
- **Supported formats**: PDF, DOCX, PPTX, TXT, PNG, JPG, GIF
- **Max file size**: 16MB for documents, 4MB for images
- **Output**: Permanent CDN URLs for each uploaded file
- **Features**: 
  - Copy-to-clipboard functionality
  - File management dashboard
  - Delete capability
  - Upload progress indicators

### 2. Content Creation
- **Location**: Dashboard → Create & Edit Pages tab
- **Rich text editor**: TipTap with markdown support
- **Metadata fields**: Title, Subject, Grade, Quarter
- **Publishing control**: Draft/Published toggle
- **Live preview**: See content as you type
- **Organize files**: Embed uploaded file links directly

## Workflow Example

1. **Teacher uploads**: "Chemistry_Bonding.pdf" 
2. **System generates**: "https://uploadthing.com/f/abc123def456/Chemistry_Bonding.pdf"
3. **Teacher copies link** and creates new page
4. **Teacher structures content**:
   ```
   # Chemistry - Grade 11, Quarter 2
   
   ## Week 1: Chemical Bonding
   - [Chemistry Bonding Lecture](https://uploadthing.com/f/abc123def456/Chemistry_Bonding.pdf)
   ```
5. **Teacher publishes** → Content is live for students

## File Storage Configuration

**Current Setup**: UploadThing integration ready
**Requirements**: 
- UploadThing API keys needed in `.env.local`
- Alternative: Can switch to DigitalOcean Spaces
- Files stored permanently with CDN delivery

**Demo Mode**: 
- Upload interface works but requires API keys
- File management UI fully functional
- Can simulate workflow with placeholder URLs