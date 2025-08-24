import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const demoChemistryContent = `
<div style="margin-bottom: 2rem; text-align: center;">
  <h1 style="margin-bottom: 1rem; font-size: 2.5rem; font-weight: 700; color: #1e293b;">Chemistry - Grade 11, Quarter 2</h1>
  <p style="color: #64748b; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Chemical bonding, molecular structure, and reaction mechanisms</p>
</div>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
  <h2 style="color: #10b981; margin-bottom: 1rem;">📋 How This Content Was Created</h2>
  <ol style="color: #475569; line-height: 1.8; padding-left: 1rem;">
    <li>Teacher logged in to Dashboard</li>
    <li>Went to "File Upload & Management" tab</li>
    <li>Uploaded PDF files, PowerPoint presentations, and homework sheets</li>
    <li>Copied the generated permanent URLs for each file</li>
    <li>Switched to "Create & Edit Pages" tab</li>
    <li>Created this page with title, subject, grade, and quarter information</li>
    <li>Used the rich text editor to structure content by weeks</li>
    <li>Pasted file URLs as links in the appropriate sections</li>
    <li>Clicked "Save" and marked as "Published"</li>
  </ol>
</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-1" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 1: Chemical Bonding Fundamentals</h2>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
<h3 style="color: #10b981; margin-bottom: 1rem;">📖 Learning Objectives</h3>
<ul style="color: #475569; line-height: 1.6;">
  <li>Distinguish between ionic, covalent, and metallic bonding</li>
  <li>Predict bond types based on electronegativity differences</li>
  <li>Draw Lewis structures for simple molecules</li>
</ul>
</div>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Introduction to Chemical Bonding.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Uploaded via Dashboard)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Ionic vs Covalent Bonding.pptx</a> <span style="color: #64748b; font-size: 0.9rem;">(Uploaded via Dashboard)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Lewis Structures Tutorial.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Uploaded via Dashboard)</span></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Homework 1 - Bonding Types Practice.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Friday) - Uploaded via Dashboard</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Quiz 1 - Electronegativity.docx</a> <span style="color: #64748b; font-size: 0.9rem;">(Wednesday) - Uploaded via Dashboard</span></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 8.1-8.3: "Chemical Bonding Basics"</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Supplementary Reading - Bonding in Real Materials.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Uploaded via Dashboard)</span></li>
</ul>
</div>

</div>

<hr style="margin: 2.5rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-2" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 2: Molecular Geometry</h2>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
<h3 style="color: #10b981; margin-bottom: 1rem;">📖 Learning Objectives</h3>
<ul style="color: #475569; line-height: 1.6;">
  <li>Apply VSEPR theory to predict molecular shapes</li>
  <li>Understand relationship between molecular geometry and polarity</li>
  <li>Build 3D molecular models</li>
</ul>
</div>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">VSEPR Theory and Molecular Shapes.pptx</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">3D Molecular Modeling Tutorial.pdf</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Homework 2 - Molecular Geometry Practice.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Lab Activity - Building Molecular Models.docx</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 9.1-9.2: "Molecular Geometry and Polarity"</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Research Article - Molecular Shapes in Drug Design.pdf</a></li>
</ul>
</div>

</div>

<hr style="margin: 2.5rem 0; border: none; height: 1px; background: #e2e8f0;">

<div style="background: #ecfdf5; border-radius: 8px; padding: 2rem; margin: 2rem 0; border: 1px solid #10b981;">
<h2 style="color: #065f46; margin-bottom: 1rem;">🎯 Teacher Workflow Summary</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 1rem;">

<div style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid #a7f3d0;">
<h3 style="color: #10b981; font-size: 1rem; margin-bottom: 0.5rem;">Step 1: Upload Files</h3>
<p style="color: #475569; font-size: 0.9rem; line-height: 1.5;">Use Dashboard → File Upload tab to upload PDFs, PowerPoints, and documents. Get permanent URLs instantly.</p>
</div>

<div style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid #a7f3d0;">
<h3 style="color: #10b981; font-size: 1rem; margin-bottom: 0.5rem;">Step 2: Create Content</h3>
<p style="color: #475569; font-size: 0.9rem; line-height: 1.5;">Switch to Create & Edit Pages tab. Add title, subject, grade, and organize content by weeks.</p>
</div>

<div style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid #a7f3d0;">
<h3 style="color: #10b981; font-size: 1rem; margin-bottom: 0.5rem;">Step 3: Link Materials</h3>
<p style="color: #475569; font-size: 0.9rem; line-height: 1.5;">Copy file URLs and paste them as links in your content. Organize by presentations, homework, and readings.</p>
</div>

<div style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid #a7f3d0;">
<h3 style="color: #10b981; font-size: 1rem; margin-bottom: 0.5rem;">Step 4: Publish</h3>
<p style="color: #475569; font-size: 0.9rem; line-height: 1.5;">Save and mark as "Published" to make content visible to students. Content appears on homepage and in search.</p>
</div>

</div>

<div style="margin-top: 1.5rem; padding: 1rem; background: #ffffff; border-radius: 8px; border: 1px solid #a7f3d0;">
<p style="color: #065f46; font-weight: 600; margin-bottom: 0.5rem;">🔑 Key Benefits:</p>
<ul style="color: #475569; font-size: 0.9rem; line-height: 1.6; margin-left: 1rem;">
<li><strong>Simple workflow:</strong> Upload once, use everywhere</li>
<li><strong>Permanent links:</strong> Files never break or move</li>
<li><strong>Full control:</strong> Teachers manage their own content</li>
<li><strong>Rich formatting:</strong> Professional-looking pages</li>
<li><strong>Instant updates:</strong> Changes appear immediately</li>
</ul>
</div>

</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<div style="background: #f1f5f9; border-radius: 8px; padding: 1.5rem; border: 1px solid #e2e8f0;">
<h2 style="color: #1e293b; margin-bottom: 1rem;">📞 Teacher Support</h2>
<p style="color: #475569; line-height: 1.6;"><strong>Need help with the platform?</strong><br>
Contact IT Support or use the Dashboard help section for step-by-step tutorials.</p>
</div>
`;

async function createDemoChemistryPage() {
  try {
    // Find the teacher user
    const teacher = await prisma.user.findUnique({
      where: { email: "teacher@nisopen.com" },
    });

    if (!teacher) {
      console.error("Teacher user not found");
      return;
    }

    // Create the demo chemistry page
    const chemPage = await prisma.page.create({
      data: {
        title: "Chemistry - Grade 11, Quarter 2 (Demo)",
        slug: "chemistry-11-quarter-2-demo",
        content: demoChemistryContent,
        subject: "Chemistry",
        grade: "11",
        quarter: "2",
        published: true,
        authorId: teacher.id,
      },
    });

    console.log("Created demo chemistry page:", chemPage.title);
    console.log("Slug:", chemPage.slug);
    console.log("View at: http://localhost:3000/page/chemistry-11-quarter-2-demo");
    
  } catch (error) {
    console.error("Error creating demo chemistry page:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createDemoChemistryPage();