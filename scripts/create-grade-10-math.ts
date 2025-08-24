import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const grade10MathContent = `
<div style="margin-bottom: 2rem; text-align: center;">
  <h1 style="margin-bottom: 1rem; font-size: 2.5rem; font-weight: 700; color: #1e293b;">Mathematics - Grade 10, Quarter 1</h1>
  <p style="color: #64748b; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Algebra and Functions</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 1</h3>
    <p style="color: #475569; font-size: 0.9rem;">Linear Equations</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 2</h3>
    <p style="color: #475569; font-size: 0.9rem;">Quadratic Functions</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 3</h3>
    <p style="color: #475569; font-size: 0.9rem;">Polynomials</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 4</h3>
    <p style="color: #475569; font-size: 0.9rem;">Factoring</p>
  </div>
</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-1">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 1: Linear Equations</h2>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Solving Linear Equations.pdf</li>
  <li>Graphing Linear Functions.pptx</li>
  <li>Systems of Linear Equations.pdf</li>
</ul>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Homework 1 - Linear Equation Practice.pdf</li>
  <li>Quiz 1 - Graphing Lines.docx</li>
</ul>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 2.1-2.3: "Linear Functions"</li>
</ul>

</div>
`;

async function createGrade10Math() {
  try {
    // Find the teacher user
    const teacher = await prisma.user.findUnique({
      where: { email: "teacher@nisopen.com" },
    });

    if (!teacher) {
      console.error("Teacher user not found");
      return;
    }

    // Create the grade 10 math page
    const page = await prisma.page.create({
      data: {
        title: "Mathematics - Grade 10, Quarter 1",
        slug: "mathematics-10-quarter-1",
        content: grade10MathContent,
        subject: "Mathematics",
        grade: "10",
        quarter: "1",
        published: true,
        authorId: teacher.id,
      },
    });

    console.log("Created Grade 10 Math page:", page.title);
    console.log("View at: http://localhost:3000/page/mathematics-10-quarter-1");
    
  } catch (error) {
    console.error("Error creating Grade 10 Math page:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createGrade10Math();