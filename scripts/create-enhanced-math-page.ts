import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const enhancedMathPageContent = `
<div style="margin-bottom: 2rem;">
  <h1 style="text-align: center; margin-bottom: 1rem;">Mathematics - Grade 12, Quarter 1</h1>
  <p style="text-align: center; color: var(--muted-foreground); font-size: 1.1rem;">Advanced mathematical concepts including calculus, statistics, and analytical geometry</p>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 2rem; margin-bottom: 3rem;">
  <h2 style="text-align: center; margin-bottom: 0.5rem; color: var(--foreground);">Course Overview</h2>
  <p style="text-align: center; color: var(--muted-foreground); margin-bottom: 2rem;">Navigate through weekly topics and track your progress</p>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
    
    <!-- Week 1 Card -->
    <div style="background: var(--background); border: 2px solid var(--primary); border-radius: 12px; padding: 1.5rem; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: var(--primary); color: var(--primary-foreground); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">Week 1</span>
        <span style="color: var(--muted-foreground); font-size: 0.9rem;">5 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: var(--foreground);">Introduction to Limits</h3>
      <ul style="color: var(--muted-foreground); margin-bottom: 1.5rem; padding-left: 1rem;">
        <li>Understanding mathematical limits</li>
        <li>Algebraic limit calculations</li>
        <li>Limit theorems and applications</li>
      </ul>
      <a href="#week-1" style="color: var(--primary); text-decoration: none; font-weight: 500;">View Week 1 →</a>
    </div>

    <!-- Week 2 Card -->
    <div style="background: var(--background); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: var(--primary); color: var(--primary-foreground); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">Week 2</span>
        <span style="color: var(--muted-foreground); font-size: 0.9rem;">6 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: var(--foreground);">Continuity and Discontinuity</h3>
      <ul style="color: var(--muted-foreground); margin-bottom: 1.5rem; padding-left: 1rem;">
        <li>Continuity at a point and interval</li>
        <li>Types of discontinuities</li>
        <li>Intermediate Value Theorem</li>
      </ul>
      <a href="#week-2" style="color: var(--primary); text-decoration: none; font-weight: 500;">View Week 2 →</a>
    </div>

    <!-- Week 3 Card -->
    <div style="background: var(--background); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: var(--primary); color: var(--primary-foreground); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">Week 3</span>
        <span style="color: var(--muted-foreground); font-size: 0.9rem;">7 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: var(--foreground);">Introduction to Derivatives</h3>
      <ul style="color: var(--muted-foreground); margin-bottom: 1.5rem; padding-left: 1rem;">
        <li>Derivative as a limit</li>
        <li>Rate of change interpretation</li>
        <li>Basic derivative calculations</li>
      </ul>
      <a href="#week-3" style="color: var(--primary); text-decoration: none; font-weight: 500;">View Week 3 →</a>
    </div>

    <!-- Week 4 Card -->
    <div style="background: var(--background); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: var(--primary); color: var(--primary-foreground); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">Week 4</span>
        <span style="color: var(--muted-foreground); font-size: 0.9rem;">8 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: var(--foreground);">Derivative Rules & Techniques</h3>
      <ul style="color: var(--muted-foreground); margin-bottom: 1.5rem; padding-left: 1rem;">
        <li>Power, product, quotient rules</li>
        <li>Chain rule mastery</li>
        <li>Trigonometric derivatives</li>
      </ul>
      <a href="#week-4" style="color: var(--primary); text-decoration: none; font-weight: 500;">View Week 4 →</a>
    </div>

    <!-- Week 5 Card -->
    <div style="background: var(--background); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: var(--primary); color: var(--primary-foreground); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">Week 5</span>
        <span style="color: var(--muted-foreground); font-size: 0.9rem;">6 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: var(--foreground);">Applications of Derivatives</h3>
      <ul style="color: var(--muted-foreground); margin-bottom: 1.5rem; padding-left: 1rem;">
        <li>Optimization problems</li>
        <li>Related rates</li>
        <li>Critical points analysis</li>
      </ul>
      <a href="#week-5" style="color: var(--primary); text-decoration: none; font-weight: 500;">View Week 5 →</a>
    </div>

    <!-- Week 6 Card -->
    <div style="background: var(--background); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: var(--primary); color: var(--primary-foreground); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">Week 6</span>
        <span style="color: var(--muted-foreground); font-size: 0.9rem;">5 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: var(--foreground);">Curve Sketching & Analysis</h3>
      <ul style="color: var(--muted-foreground); margin-bottom: 1.5rem; padding-left: 1rem;">
        <li>First and second derivative tests</li>
        <li>Concavity and inflection points</li>
        <li>Complete curve analysis</li>
      </ul>
      <a href="#week-6" style="color: var(--primary); text-decoration: none; font-weight: 500;">View Week 6 →</a>
    </div>

    <!-- Week 7-8 Card -->
    <div style="background: var(--background); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: var(--primary); color: var(--primary-foreground); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">Week 7-8</span>
        <span style="color: var(--muted-foreground); font-size: 0.9rem;">4 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: var(--foreground);">Review & Assessment</h3>
      <ul style="color: var(--muted-foreground); margin-bottom: 1.5rem; padding-left: 1rem;">
        <li>Comprehensive review</li>
        <li>Quarter final exam</li>
        <li>Preparation for Q2</li>
      </ul>
      <a href="#week-7" style="color: var(--primary); text-decoration: none; font-weight: 500;">View Week 7-8 →</a>
    </div>

  </div>
</div>

<!-- Quick Navigation -->
<div style="background: var(--muted); border-radius: 8px; padding: 1.5rem; margin-bottom: 3rem;">
  <h3 style="margin-bottom: 1rem;">📋 Quick Navigation</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem;">
    <a href="#week-1" style="color: var(--primary); text-decoration: none; padding: 0.5rem; border-radius: 4px; background: var(--background); display: block; text-align: center;">Week 1: Limits</a>
    <a href="#week-2" style="color: var(--primary); text-decoration: none; padding: 0.5rem; border-radius: 4px; background: var(--background); display: block; text-align: center;">Week 2: Continuity</a>
    <a href="#week-3" style="color: var(--primary); text-decoration: none; padding: 0.5rem; border-radius: 4px; background: var(--background); display: block; text-align: center;">Week 3: Derivatives</a>
    <a href="#week-4" style="color: var(--primary); text-decoration: none; padding: 0.5rem; border-radius: 4px; background: var(--background); display: block; text-align: center;">Week 4: Rules</a>
    <a href="#week-5" style="color: var(--primary); text-decoration: none; padding: 0.5rem; border-radius: 4px; background: var(--background); display: block; text-align: center;">Week 5: Applications</a>
    <a href="#week-6" style="color: var(--primary); text-decoration: none; padding: 0.5rem; border-radius: 4px; background: var(--background); display: block; text-align: center;">Week 6: Analysis</a>
    <a href="#week-7" style="color: var(--primary); text-decoration: none; padding: 0.5rem; border-radius: 4px; background: var(--background); display: block; text-align: center;">Week 7-8: Review</a>
    <a href="#assessment" style="color: var(--primary); text-decoration: none; padding: 0.5rem; border-radius: 4px; background: var(--background); display: block; text-align: center;">Assessment Summary</a>
  </div>
</div>

<hr style="margin: 3rem 0;">

<!-- Detailed Weekly Content -->

<div id="week-1" style="scroll-margin-top: 100px;">
<h2>📅 Week 1: Introduction to Limits</h2>

<div style="background: var(--card); border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
<h3>📖 Learning Objectives</h3>
<ul>
  <li>Understand the concept of mathematical limits</li>
  <li>Calculate limits using algebraic methods</li>
  <li>Apply limit theorems to solve problems</li>
</ul>
</div>

<h3>📚 Materials & Resources</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0;">

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📑 Presentations</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Week 1 - Introduction to Limits.pdf</a></li>
  <li><a href="#" style="color: var(--primary);">Limit Theorems and Examples.pptx</a></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📝 Homework & Assessments</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Homework 1 - Basic Limits.pdf</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: var(--primary);">Quiz 1 - Limit Calculations.docx</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Wednesday)</span></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📖 Reading Assignments</h4>
<ul>
  <li>Textbook Chapter 2.1-2.3: "Limits and Continuity"</li>
  <li><a href="#" style="color: var(--primary);">Supplementary Reading - Real-world Applications.pdf</a></li>
</ul>
</div>

</div>
</div>

<hr style="margin: 2rem 0;">

<div id="week-2" style="scroll-margin-top: 100px;">
<h2>📅 Week 2: Continuity and Discontinuity</h2>

<div style="background: var(--card); border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
<h3>📖 Learning Objectives</h3>
<ul>
  <li>Define continuity at a point and on an interval</li>
  <li>Identify types of discontinuities</li>
  <li>Use the Intermediate Value Theorem</li>
</ul>
</div>

<h3>📚 Materials & Resources</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0;">

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📑 Presentations</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Week 2 - Continuity Concepts.pdf</a></li>
  <li><a href="#" style="color: var(--primary);">Types of Discontinuities.pptx</a></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📝 Homework & Assessments</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Homework 2 - Continuity Problems.pdf</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: var(--primary);">Lab Assignment - Graphing Functions.docx</a></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📖 Reading Assignments</h4>
<ul>
  <li>Textbook Chapter 2.4-2.6: "Continuity and IVT"</li>
  <li><a href="#" style="color: var(--primary);">Article - Continuity in Engineering.pdf</a></li>
</ul>
</div>

</div>
</div>

<hr style="margin: 2rem 0;">

<div id="week-3" style="scroll-margin-top: 100px;">
<h2>📅 Week 3: Introduction to Derivatives</h2>

<div style="background: var(--card); border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
<h3>📖 Learning Objectives</h3>
<ul>
  <li>Understand the derivative as a limit</li>
  <li>Calculate derivatives using the definition</li>
  <li>Interpret derivatives as rates of change</li>
</ul>
</div>

<h3>📚 Materials & Resources</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0;">

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📑 Presentations</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Week 3 - Derivative Definition.pdf</a></li>
  <li><a href="#" style="color: var(--primary);">Geometric Interpretation.pptx</a></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📝 Homework & Assessments</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Homework 3 - Basic Derivatives.pdf</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: var(--primary);">Quiz 2 - Derivative Calculations.docx</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Wednesday)</span></li>
  <li><a href="#" style="color: var(--primary);">Project - Real-world Rate Problems.pdf</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Due: Next Monday)</span></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📖 Reading Assignments</h4>
<ul>
  <li>Textbook Chapter 3.1-3.2: "The Derivative"</li>
  <li><a href="#" style="color: var(--primary);">Historical Context - Newton vs Leibniz.pdf</a></li>
</ul>
</div>

</div>
</div>

<hr style="margin: 2rem 0;">

<div id="week-4" style="scroll-margin-top: 100px;">
<h2>📅 Week 4: Derivative Rules and Techniques</h2>

<div style="background: var(--card); border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
<h3>📖 Learning Objectives</h3>
<ul>
  <li>Apply power, product, and quotient rules</li>
  <li>Use chain rule for composite functions</li>
  <li>Find derivatives of trigonometric functions</li>
</ul>
</div>

<h3>📚 Materials & Resources</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0;">

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📑 Presentations</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Week 4 - Derivative Rules.pdf</a></li>
  <li><a href="#" style="color: var(--primary);">Chain Rule Mastery.pptx</a></li>
  <li><a href="#" style="color: var(--primary);">Trigonometric Derivatives.pdf</a></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📝 Homework & Assessments</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Homework 4 - Derivative Rules Practice.pdf</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: var(--primary);">Take-home Test - Advanced Derivatives.docx</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Due: Monday)</span></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📖 Reading Assignments</h4>
<ul>
  <li>Textbook Chapter 3.3-3.6: "Differentiation Rules"</li>
  <li><a href="#" style="color: var(--primary);">Advanced Techniques - Implicit Differentiation.pdf</a></li>
</ul>
</div>

</div>
</div>

<hr style="margin: 2rem 0;">

<div id="week-5" style="scroll-margin-top: 100px;">
<h2>📅 Week 5: Applications of Derivatives</h2>

<div style="background: var(--card); border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
<h3>📖 Learning Objectives</h3>
<ul>
  <li>Find critical points and classify extrema</li>
  <li>Solve optimization problems</li>
  <li>Analyze related rates problems</li>
</ul>
</div>

<h3>📚 Materials & Resources</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0;">

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📑 Presentations</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Week 5 - Optimization Problems.pdf</a></li>
  <li><a href="#" style="color: var(--primary);">Related Rates Applications.pptx</a></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📝 Homework & Assessments</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Homework 5 - Optimization and Related Rates.pdf</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: var(--primary);">Quiz 3 - Applications of Derivatives.docx</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Wednesday)</span></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📖 Reading Assignments</h4>
<ul>
  <li>Textbook Chapter 4.1-4.3: "Applications of Differentiation"</li>
  <li><a href="#" style="color: var(--primary);">Case Studies - Optimization in Business.pdf</a></li>
</ul>
</div>

</div>
</div>

<hr style="margin: 2rem 0;">

<div id="week-6" style="scroll-margin-top: 100px;">
<h2>📅 Week 6: Curve Sketching and Analysis</h2>

<div style="background: var(--card); border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
<h3>📖 Learning Objectives</h3>
<ul>
  <li>Use first and second derivatives for curve analysis</li>
  <li>Identify concavity and inflection points</li>
  <li>Sketch graphs using calculus techniques</li>
</ul>
</div>

<h3>📚 Materials & Resources</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0;">

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📑 Presentations</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Week 6 - Curve Sketching.pdf</a></li>
  <li><a href="#" style="color: var(--primary);">First and Second Derivative Tests.pptx</a></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📝 Homework & Assessments</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Homework 6 - Curve Analysis.pdf</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: var(--primary);">Graphing Project - Function Analysis.docx</a> <span style="color: var(--muted-foreground); font-size: 0.9rem;">(Due: Next Wednesday)</span></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📖 Reading Assignments</h4>
<ul>
  <li>Textbook Chapter 4.4-4.5: "Curve Sketching"</li>
  <li><a href="#" style="color: var(--primary);">Graphing Technology - When and How to Use.pdf</a></li>
</ul>
</div>

</div>
</div>

<hr style="margin: 2rem 0;">

<div id="week-7" style="scroll-margin-top: 100px;">
<h2>📅 Week 7-8: Review and Quarter Assessment</h2>

<div style="background: var(--card); border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
<h3>📖 Learning Objectives</h3>
<ul>
  <li>Synthesize all quarter 1 concepts</li>
  <li>Demonstrate mastery through comprehensive assessment</li>
  <li>Prepare for quarter 2 topics</li>
</ul>
</div>

<h3>📚 Materials & Resources</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1rem 0;">

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📑 Review Materials</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Quarter 1 Review Guide.pdf</a></li>
  <li><a href="#" style="color: var(--primary);">Practice Problems - Comprehensive Review.pdf</a></li>
  <li><a href="#" style="color: var(--primary);">Formula Sheet - Derivatives and Applications.pdf</a></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📝 Assessments</h4>
<ul>
  <li><a href="#" style="color: var(--primary);">Practice Exam - Quarter 1.pdf</a></li>
  <li><strong>Quarter 1 Final Exam</strong> (Date: TBA)</li>
  <li><a href="#" style="color: var(--primary);">Reflection Essay - Learning Journey.docx</a></li>
</ul>
</div>

<div style="background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem;">
<h4 style="color: var(--primary); margin-bottom: 1rem;">📖 Preparatory Reading</h4>
<ul>
  <li>Preview: Textbook Chapter 5.1: "Introduction to Integration"</li>
  <li><a href="#" style="color: var(--primary);">Looking Ahead - Integral Calculus Overview.pdf</a></li>
</ul>
</div>

</div>
</div>

<hr style="margin: 3rem 0;">

<div id="assessment" style="scroll-margin-top: 100px;">
<h2>📋 Assessment Summary</h2>

<div style="background: var(--card); border-radius: 8px; padding: 1.5rem; margin: 1rem 0;">
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: var(--muted);">
      <th style="border: 1px solid var(--border); padding: 12px; text-align: left;">Assessment Type</th>
      <th style="border: 1px solid var(--border); padding: 12px; text-align: left;">Points</th>
      <th style="border: 1px solid var(--border); padding: 12px; text-align: left;">Percentage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid var(--border); padding: 12px;">Weekly Homework (6 sets)</td>
      <td style="border: 1px solid var(--border); padding: 12px;">120 pts</td>
      <td style="border: 1px solid var(--border); padding: 12px;">30%</td>
    </tr>
    <tr>
      <td style="border: 1px solid var(--border); padding: 12px;">Quizzes (3)</td>
      <td style="border: 1px solid var(--border); padding: 12px;">90 pts</td>
      <td style="border: 1px solid var(--border); padding: 12px;">22.5%</td>
    </tr>
    <tr>
      <td style="border: 1px solid var(--border); padding: 12px;">Projects/Labs</td>
      <td style="border: 1px solid var(--border); padding: 12px;">60 pts</td>
      <td style="border: 1px solid var(--border); padding: 12px;">15%</td>
    </tr>
    <tr>
      <td style="border: 1px solid var(--border); padding: 12px;">Take-home Test</td>
      <td style="border: 1px solid var(--border); padding: 12px;">50 pts</td>
      <td style="border: 1px solid var(--border); padding: 12px;">12.5%</td>
    </tr>
    <tr>
      <td style="border: 1px solid var(--border); padding: 12px;">Quarter Final Exam</td>
      <td style="border: 1px solid var(--border); padding: 12px;">80 pts</td>
      <td style="border: 1px solid var(--border); padding: 12px;">20%</td>
    </tr>
    <tr style="background-color: var(--muted); font-weight: bold;">
      <td style="border: 1px solid var(--border); padding: 12px;">Total</td>
      <td style="border: 1px solid var(--border); padding: 12px;">400 pts</td>
      <td style="border: 1px solid var(--border); padding: 12px;">100%</td>
    </tr>
  </tbody>
</table>
</div>
</div>

<hr style="margin: 3rem 0;">

<div style="background: var(--muted); border-radius: 8px; padding: 1.5rem;">
<h2>📞 Contact & Office Hours</h2>
<p><strong>Teacher:</strong> Ms. Johnson<br>
<strong>Email:</strong> teacher@nisopen.com<br>
<strong>Office Hours:</strong> Monday-Wednesday 3:30-4:30 PM, Room 205<br>
<strong>Help Sessions:</strong> Thursdays 3:30-5:00 PM (Math Lab)</p>

<blockquote style="border-left: 4px solid var(--primary); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
<p>"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding." - William Paul Thurston</p>
</blockquote>
</div>
`;

async function createEnhancedMathPage() {
  try {
    // Find the teacher user
    const teacher = await prisma.user.findUnique({
      where: { email: "teacher@nisopen.com" },
    });

    if (!teacher) {
      console.error("Teacher user not found");
      return;
    }

    // Delete the old page if it exists
    await prisma.page.deleteMany({
      where: { slug: "math-12-quarter-1-enhanced" },
    });

    // Create the enhanced math page
    const mathPage = await prisma.page.create({
      data: {
        title: "Mathematics - Grade 12, Quarter 1 (Enhanced)",
        slug: "math-12-quarter-1-enhanced",
        content: enhancedMathPageContent,
        subject: "Mathematics",
        grade: "12",
        quarter: "1",
        published: true,
        authorId: teacher.id,
      },
    });

    console.log("Created enhanced math page:", mathPage.title);
    console.log("Slug:", mathPage.slug);
    console.log("View at: http://localhost:3000/page/math-12-quarter-1-enhanced");
    
  } catch (error) {
    console.error("Error creating enhanced math page:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createEnhancedMathPage();