import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mathQuarters = [
  {
    title: "Mathematics - Grade 12, Quarter 1",
    slug: "mathematics-12-quarter-1",
    subject: "Mathematics",
    grade: "12",
    quarter: "1",
    content: `
<div style="margin-bottom: 2rem; text-align: center;">
  <h1 style="margin-bottom: 1rem; font-size: 2.5rem; font-weight: 700; color: #1e293b;">Mathematics - Grade 12, Quarter 1</h1>
  <p style="color: #64748b; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Calculus and Advanced Functions</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 1</h3>
    <p style="color: #475569; font-size: 0.9rem;">Limits and Continuity</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 2</h3>
    <p style="color: #475569; font-size: 0.9rem;">Derivatives Introduction</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 3</h3>
    <p style="color: #475569; font-size: 0.9rem;">Differentiation Rules</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 4</h3>
    <p style="color: #475569; font-size: 0.9rem;">Applications of Derivatives</p>
  </div>
</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-1" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 1: Limits and Continuity</h2>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Introduction to Limits.pdf</li>
  <li>Continuity and Discontinuity.pptx</li>
  <li>Limit Laws and Theorems.pdf</li>
</ul>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Homework 1 - Basic Limits Practice.pdf</li>
  <li>Quiz 1 - Limit Evaluation.docx</li>
</ul>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 1.1-1.3: "Introduction to Limits"</li>
  <li>Supplementary Reading - Historical Development of Calculus.pdf</li>
</ul>

</div>

<hr style="margin: 2.5rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-2" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 2: Derivatives Introduction</h2>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Definition of Derivative.pdf</li>
  <li>Geometric Interpretation.pptx</li>
</ul>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Homework 2 - Derivative Definition Practice.pdf</li>
</ul>

</div>
`
  },
  {
    title: "Mathematics - Grade 12, Quarter 2",
    slug: "mathematics-12-quarter-2",
    subject: "Mathematics",
    grade: "12",
    quarter: "2",
    content: `
<div style="margin-bottom: 2rem; text-align: center;">
  <h1 style="margin-bottom: 1rem; font-size: 2.5rem; font-weight: 700; color: #1e293b;">Mathematics - Grade 12, Quarter 2</h1>
  <p style="color: #64748b; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Integration and Applications</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 1</h3>
    <p style="color: #475569; font-size: 0.9rem;">Antiderivatives</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 2</h3>
    <p style="color: #475569; font-size: 0.9rem;">Definite Integrals</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 3</h3>
    <p style="color: #475569; font-size: 0.9rem;">Integration Techniques</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 4</h3>
    <p style="color: #475569; font-size: 0.9rem;">Applications of Integration</p>
  </div>
</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-1">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 1: Antiderivatives</h2>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Introduction to Antiderivatives.pdf</li>
  <li>Basic Integration Rules.pptx</li>
</ul>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Homework 1 - Basic Integration Practice.pdf</li>
</ul>

</div>
`
  },
  {
    title: "Mathematics - Grade 12, Quarter 3", 
    slug: "mathematics-12-quarter-3",
    subject: "Mathematics",
    grade: "12", 
    quarter: "3",
    content: `
<div style="margin-bottom: 2rem; text-align: center;">
  <h1 style="margin-bottom: 1rem; font-size: 2.5rem; font-weight: 700; color: #1e293b;">Mathematics - Grade 12, Quarter 3</h1>
  <p style="color: #64748b; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Sequences, Series, and Probability</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 1</h3>
    <p style="color: #475569; font-size: 0.9rem;">Sequences</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 2</h3>
    <p style="color: #475569; font-size: 0.9rem;">Infinite Series</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 3</h3>
    <p style="color: #475569; font-size: 0.9rem;">Probability Theory</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 4</h3>
    <p style="color: #475569; font-size: 0.9rem;">Statistics Applications</p>
  </div>
</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-1">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 1: Sequences</h2>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Arithmetic and Geometric Sequences.pdf</li>
  <li>Sequence Convergence.pptx</li>
</ul>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Homework 1 - Sequence Problems.pdf</li>
</ul>

</div>
`
  },
  {
    title: "Mathematics - Grade 12, Quarter 4",
    slug: "mathematics-12-quarter-4", 
    subject: "Mathematics",
    grade: "12",
    quarter: "4",
    content: `
<div style="margin-bottom: 2rem; text-align: center;">
  <h1 style="margin-bottom: 1rem; font-size: 2.5rem; font-weight: 700; color: #1e293b;">Mathematics - Grade 12, Quarter 4</h1>
  <p style="color: #64748b; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Review and Advanced Topics</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 1</h3>
    <p style="color: #475569; font-size: 0.9rem;">Comprehensive Review</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 2</h3>
    <p style="color: #475569; font-size: 0.9rem;">Advanced Applications</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 3</h3>
    <p style="color: #475569; font-size: 0.9rem;">Final Exam Prep</p>
  </div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.1rem;">Week 4</h3>
    <p style="color: #475569; font-size: 0.9rem;">Final Assessments</p>
  </div>
</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-1">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 1: Comprehensive Review</h2>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Year Review - Calculus Summary.pdf</li>
  <li>Key Concepts and Formulas.pptx</li>
</ul>

<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Review Problem Set.pdf</li>
  <li>Practice Final Exam.docx</li>
</ul>

</div>
`
  }
];

async function createMathQuarters() {
  try {
    // Find the teacher user
    const teacher = await prisma.user.findUnique({
      where: { email: "teacher@nisopen.com" },
    });

    if (!teacher) {
      console.error("Teacher user not found");
      return;
    }

    for (const mathData of mathQuarters) {
      const page = await prisma.page.create({
        data: {
          ...mathData,
          published: true,
          authorId: teacher.id,
        },
      });
      console.log(`Created: ${page.title}`);
    }

    console.log("\n✅ All Mathematics quarter pages created successfully!");
    console.log("View them at:");
    mathQuarters.forEach(quarter => {
      console.log(`- http://localhost:3000/page/${quarter.slug}`);
    });
    
  } catch (error) {
    console.error("Error creating Mathematics quarters:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createMathQuarters();