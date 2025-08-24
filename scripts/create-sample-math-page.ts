import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mathPageContent = `
<h1>Mathematics - Grade 12, Quarter 1</h1>

<p><strong>Course Overview:</strong> Advanced mathematical concepts including calculus, statistics, and analytical geometry. This quarter focuses on differential calculus and its applications.</p>

<hr>

<h2>📅 Week 1: Introduction to Limits</h2>

<h3>📖 Learning Objectives</h3>
<ul>
  <li>Understand the concept of mathematical limits</li>
  <li>Calculate limits using algebraic methods</li>
  <li>Apply limit theorems to solve problems</li>
</ul>

<h3>📚 Materials & Resources</h3>

<p><strong>📑 Presentations:</strong></p>
<ul>
  <li><a href="#" target="_blank">Week 1 - Introduction to Limits.pdf</a></li>
  <li><a href="#" target="_blank">Limit Theorems and Examples.pptx</a></li>
</ul>

<p><strong>📝 Homework & Assessments:</strong></p>
<ul>
  <li><a href="#" target="_blank">Homework 1 - Basic Limits.pdf</a> (Due: Friday)</li>
  <li><a href="#" target="_blank">Quiz 1 - Limit Calculations.docx</a> (Wednesday)</li>
</ul>

<p><strong>📖 Reading Assignments:</strong></p>
<ul>
  <li>Textbook Chapter 2.1-2.3: "Limits and Continuity"</li>
  <li><a href="#" target="_blank">Supplementary Reading - Real-world Applications of Limits.pdf</a></li>
</ul>

<hr>

<h2>📅 Week 2: Continuity and Discontinuity</h2>

<h3>📖 Learning Objectives</h3>
<ul>
  <li>Define continuity at a point and on an interval</li>
  <li>Identify types of discontinuities</li>
  <li>Use the Intermediate Value Theorem</li>
</ul>

<h3>📚 Materials & Resources</h3>

<p><strong>📑 Presentations:</strong></p>
<ul>
  <li><a href="#" target="_blank">Week 2 - Continuity Concepts.pdf</a></li>
  <li><a href="#" target="_blank">Types of Discontinuities.pptx</a></li>
</ul>

<p><strong>📝 Homework & Assessments:</strong></p>
<ul>
  <li><a href="#" target="_blank">Homework 2 - Continuity Problems.pdf</a> (Due: Friday)</li>
  <li><a href="#" target="_blank">Lab Assignment - Graphing Discontinuous Functions.docx</a></li>
</ul>

<p><strong>📖 Reading Assignments:</strong></p>
<ul>
  <li>Textbook Chapter 2.4-2.6: "Continuity and IVT"</li>
  <li><a href="#" target="_blank">Article - Continuity in Engineering Applications.pdf</a></li>
</ul>

<hr>

<h2>📅 Week 3: Introduction to Derivatives</h2>

<h3>📖 Learning Objectives</h3>
<ul>
  <li>Understand the derivative as a limit</li>
  <li>Calculate derivatives using the definition</li>
  <li>Interpret derivatives as rates of change</li>
</ul>

<h3>📚 Materials & Resources</h3>

<p><strong>📑 Presentations:</strong></p>
<ul>
  <li><a href="#" target="_blank">Week 3 - Derivative Definition.pdf</a></li>
  <li><a href="#" target="_blank">Geometric Interpretation of Derivatives.pptx</a></li>
</ul>

<p><strong>📝 Homework & Assessments:</strong></p>
<ul>
  <li><a href="#" target="_blank">Homework 3 - Basic Derivatives.pdf</a> (Due: Friday)</li>
  <li><a href="#" target="_blank">Quiz 2 - Derivative Calculations.docx</a> (Wednesday)</li>
  <li><a href="#" target="_blank">Project - Real-world Rate Problems.pdf</a> (Due: Next Monday)</li>
</ul>

<p><strong>📖 Reading Assignments:</strong></p>
<ul>
  <li>Textbook Chapter 3.1-3.2: "The Derivative"</li>
  <li><a href="#" target="_blank">Historical Context - Newton vs Leibniz.pdf</a></li>
</ul>

<hr>

<h2>📅 Week 4: Derivative Rules and Techniques</h2>

<h3>📖 Learning Objectives</h3>
<ul>
  <li>Apply power, product, and quotient rules</li>
  <li>Use chain rule for composite functions</li>
  <li>Find derivatives of trigonometric functions</li>
</ul>

<h3>📚 Materials & Resources</h3>

<p><strong>📑 Presentations:</strong></p>
<ul>
  <li><a href="#" target="_blank">Week 4 - Derivative Rules.pdf</a></li>
  <li><a href="#" target="_blank">Chain Rule Mastery.pptx</a></li>
  <li><a href="#" target="_blank">Trigonometric Derivatives.pdf</a></li>
</ul>

<p><strong>📝 Homework & Assessments:</strong></p>
<ul>
  <li><a href="#" target="_blank">Homework 4 - Derivative Rules Practice.pdf</a> (Due: Friday)</li>
  <li><a href="#" target="_blank">Take-home Test - Advanced Derivatives.docx</a> (Due: Monday)</li>
</ul>

<p><strong>📖 Reading Assignments:</strong></p>
<ul>
  <li>Textbook Chapter 3.3-3.6: "Differentiation Rules"</li>
  <li><a href="#" target="_blank">Advanced Techniques - Implicit Differentiation.pdf</a></li>
</ul>

<hr>

<h2>📅 Week 5: Applications of Derivatives</h2>

<h3>📖 Learning Objectives</h3>
<ul>
  <li>Find critical points and classify extrema</li>
  <li>Solve optimization problems</li>
  <li>Analyze related rates problems</li>
</ul>

<h3>📚 Materials & Resources</h3>

<p><strong>📑 Presentations:</strong></p>
<ul>
  <li><a href="#" target="_blank">Week 5 - Optimization Problems.pdf</a></li>
  <li><a href="#" target="_blank">Related Rates Applications.pptx</a></li>
</ul>

<p><strong>📝 Homework & Assessments:</strong></p>
<ul>
  <li><a href="#" target="_blank">Homework 5 - Optimization and Related Rates.pdf</a> (Due: Friday)</li>
  <li><a href="#" target="_blank">Quiz 3 - Applications of Derivatives.docx</a> (Wednesday)</li>
</ul>

<p><strong>📖 Reading Assignments:</strong></p>
<ul>
  <li>Textbook Chapter 4.1-4.3: "Applications of Differentiation"</li>
  <li><a href="#" target="_blank">Case Studies - Optimization in Business.pdf</a></li>
</ul>

<hr>

<h2>📅 Week 6: Curve Sketching and Analysis</h2>

<h3>📖 Learning Objectives</h3>
<ul>
  <li>Use first and second derivatives for curve analysis</li>
  <li>Identify concavity and inflection points</li>
  <li>Sketch graphs using calculus techniques</li>
</ul>

<h3>📚 Materials & Resources</h3>

<p><strong>📑 Presentations:</strong></p>
<ul>
  <li><a href="#" target="_blank">Week 6 - Curve Sketching.pdf</a></li>
  <li><a href="#" target="_blank">First and Second Derivative Tests.pptx</a></li>
</ul>

<p><strong>📝 Homework & Assessments:</strong></p>
<ul>
  <li><a href="#" target="_blank">Homework 6 - Curve Analysis.pdf</a> (Due: Friday)</li>
  <li><a href="#" target="_blank">Graphing Project - Function Analysis.docx</a> (Due: Next Wednesday)</li>
</ul>

<p><strong>📖 Reading Assignments:</strong></p>
<ul>
  <li>Textbook Chapter 4.4-4.5: "Curve Sketching"</li>
  <li><a href="#" target="_blank">Graphing Technology - When and How to Use.pdf</a></li>
</ul>

<hr>

<h2>📅 Week 7-8: Review and Quarter Assessment</h2>

<h3>📖 Learning Objectives</h3>
<ul>
  <li>Synthesize all quarter 1 concepts</li>
  <li>Demonstrate mastery through comprehensive assessment</li>
  <li>Prepare for quarter 2 topics</li>
</ul>

<h3>📚 Materials & Resources</h3>

<p><strong>📑 Review Materials:</strong></p>
<ul>
  <li><a href="#" target="_blank">Quarter 1 Review Guide.pdf</a></li>
  <li><a href="#" target="_blank">Practice Problems - Comprehensive Review.pdf</a></li>
  <li><a href="#" target="_blank">Formula Sheet - Derivatives and Applications.pdf</a></li>
</ul>

<p><strong>📝 Assessments:</strong></p>
<ul>
  <li><a href="#" target="_blank">Practice Exam - Quarter 1.pdf</a></li>
  <li><strong>Quarter 1 Final Exam</strong> (Date: [To be announced])</li>
  <li><a href="#" target="_blank">Reflection Essay - Learning Journey.docx</a></li>
</ul>

<p><strong>📖 Preparatory Reading:</strong></p>
<ul>
  <li>Preview: Textbook Chapter 5.1: "Introduction to Integration"</li>
  <li><a href="#" target="_blank">Looking Ahead - Integral Calculus Overview.pdf</a></li>
</ul>

<hr>

<h2>📋 Assessment Summary</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <thead>
    <tr style="background-color: var(--muted);">
      <th style="border: 1px solid var(--border); padding: 10px; text-align: left;">Assessment Type</th>
      <th style="border: 1px solid var(--border); padding: 10px; text-align: left;">Points</th>
      <th style="border: 1px solid var(--border); padding: 10px; text-align: left;">Percentage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid var(--border); padding: 10px;">Weekly Homework (6 sets)</td>
      <td style="border: 1px solid var(--border); padding: 10px;">120 pts</td>
      <td style="border: 1px solid var(--border); padding: 10px;">30%</td>
    </tr>
    <tr>
      <td style="border: 1px solid var(--border); padding: 10px;">Quizzes (3)</td>
      <td style="border: 1px solid var(--border); padding: 10px;">90 pts</td>
      <td style="border: 1px solid var(--border); padding: 10px;">22.5%</td>
    </tr>
    <tr>
      <td style="border: 1px solid var(--border); padding: 10px;">Projects/Labs</td>
      <td style="border: 1px solid var(--border); padding: 10px;">60 pts</td>
      <td style="border: 1px solid var(--border); padding: 10px;">15%</td>
    </tr>
    <tr>
      <td style="border: 1px solid var(--border); padding: 10px;">Take-home Test</td>
      <td style="border: 1px solid var(--border); padding: 10px;">50 pts</td>
      <td style="border: 1px solid var(--border); padding: 10px;">12.5%</td>
    </tr>
    <tr>
      <td style="border: 1px solid var(--border); padding: 10px;">Quarter Final Exam</td>
      <td style="border: 1px solid var(--border); padding: 10px;">80 pts</td>
      <td style="border: 1px solid var(--border); padding: 10px;">20%</td>
    </tr>
    <tr style="background-color: var(--muted); font-weight: bold;">
      <td style="border: 1px solid var(--border); padding: 10px;">Total</td>
      <td style="border: 1px solid var(--border); padding: 10px;">400 pts</td>
      <td style="border: 1px solid var(--border); padding: 10px;">100%</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📞 Contact & Office Hours</h2>

<p><strong>Teacher:</strong> [Teacher Name]<br>
<strong>Email:</strong> teacher@nisopen.com<br>
<strong>Office Hours:</strong> Monday-Wednesday 3:30-4:30 PM, Room 205<br>
<strong>Help Sessions:</strong> Thursdays 3:30-5:00 PM (Math Lab)</p>

<blockquote>
<p><em>"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding." - William Paul Thurston</em></p>
</blockquote>

<p><small>Last updated: [Date] | Next quarter preview available in Week 8</small></p>
`;

async function createMathPage() {
  try {
    // Find the teacher user
    const teacher = await prisma.user.findUnique({
      where: { email: "teacher@nisopen.com" },
    });

    if (!teacher) {
      console.error("Teacher user not found");
      return;
    }

    // Create the math page
    const mathPage = await prisma.page.create({
      data: {
        title: "Mathematics - Grade 12, Quarter 1",
        slug: "math-12-quarter-1",
        content: mathPageContent,
        subject: "Mathematics",
        grade: "12",
        quarter: "1",
        published: true,
        authorId: teacher.id,
      },
    });

    console.log("Created math page:", mathPage.title);
    console.log("Slug:", mathPage.slug);
    console.log("View at: http://localhost:3000/page/math-12-quarter-1");
    
  } catch (error) {
    console.error("Error creating math page:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createMathPage();