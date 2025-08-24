import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cleanMathPageContent = `
<div style="margin-bottom: 2rem; text-align: center;">
  <h1 style="margin-bottom: 1rem; font-size: 2.5rem; font-weight: 700; color: #1e293b;">Mathematics - Grade 12, Quarter 1</h1>
  <p style="color: #64748b; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Advanced mathematical concepts including calculus, statistics, and analytical geometry</p>
</div>

<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem; margin-bottom: 3rem;">
  <h2 style="text-align: center; margin-bottom: 0.5rem; font-size: 1.8rem; color: #1e293b;">Course Overview</h2>
  <p style="text-align: center; color: #64748b; margin-bottom: 2rem;">Navigate through weekly topics and track your progress</p>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
    
    <!-- Week 1 Card -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: #10b981; color: #ffffff; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; font-size: 0.9rem;">Week 1</span>
        <span style="color: #64748b; font-size: 0.85rem;">5 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.2rem;">Introduction to Limits</h3>
      <ul style="color: #64748b; margin-bottom: 1.5rem; padding-left: 1rem; font-size: 0.9rem; line-height: 1.5;">
        <li>Understanding mathematical limits</li>
        <li>Algebraic limit calculations</li>
        <li>Limit theorems and applications</li>
      </ul>
      <a href="#week-1" style="color: #10b981; text-decoration: none; font-weight: 500; font-size: 0.9rem;">View Week 1 →</a>
    </div>

    <!-- Week 2 Card -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: #10b981; color: #ffffff; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; font-size: 0.9rem;">Week 2</span>
        <span style="color: #64748b; font-size: 0.85rem;">6 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.2rem;">Continuity and Discontinuity</h3>
      <ul style="color: #64748b; margin-bottom: 1.5rem; padding-left: 1rem; font-size: 0.9rem; line-height: 1.5;">
        <li>Continuity at a point and interval</li>
        <li>Types of discontinuities</li>
        <li>Intermediate Value Theorem</li>
      </ul>
      <a href="#week-2" style="color: #10b981; text-decoration: none; font-weight: 500; font-size: 0.9rem;">View Week 2 →</a>
    </div>

    <!-- Week 3 Card -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: #10b981; color: #ffffff; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; font-size: 0.9rem;">Week 3</span>
        <span style="color: #64748b; font-size: 0.85rem;">7 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.2rem;">Introduction to Derivatives</h3>
      <ul style="color: #64748b; margin-bottom: 1.5rem; padding-left: 1rem; font-size: 0.9rem; line-height: 1.5;">
        <li>Derivative as a limit</li>
        <li>Rate of change interpretation</li>
        <li>Basic derivative calculations</li>
      </ul>
      <a href="#week-3" style="color: #10b981; text-decoration: none; font-weight: 500; font-size: 0.9rem;">View Week 3 →</a>
    </div>

    <!-- Week 4 Card -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: #10b981; color: #ffffff; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; font-size: 0.9rem;">Week 4</span>
        <span style="color: #64748b; font-size: 0.85rem;">8 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.2rem;">Derivative Rules & Techniques</h3>
      <ul style="color: #64748b; margin-bottom: 1.5rem; padding-left: 1rem; font-size: 0.9rem; line-height: 1.5;">
        <li>Power, product, quotient rules</li>
        <li>Chain rule mastery</li>
        <li>Trigonometric derivatives</li>
      </ul>
      <a href="#week-4" style="color: #10b981; text-decoration: none; font-weight: 500; font-size: 0.9rem;">View Week 4 →</a>
    </div>

    <!-- Week 5 Card -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: #10b981; color: #ffffff; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; font-size: 0.9rem;">Week 5</span>
        <span style="color: #64748b; font-size: 0.85rem;">6 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.2rem;">Applications of Derivatives</h3>
      <ul style="color: #64748b; margin-bottom: 1.5rem; padding-left: 1rem; font-size: 0.9rem; line-height: 1.5;">
        <li>Optimization problems</li>
        <li>Related rates</li>
        <li>Critical points analysis</li>
      </ul>
      <a href="#week-5" style="color: #10b981; text-decoration: none; font-weight: 500; font-size: 0.9rem;">View Week 5 →</a>
    </div>

    <!-- Week 6 Card -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: #10b981; color: #ffffff; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; font-size: 0.9rem;">Week 6</span>
        <span style="color: #64748b; font-size: 0.85rem;">5 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.2rem;">Curve Sketching & Analysis</h3>
      <ul style="color: #64748b; margin-bottom: 1.5rem; padding-left: 1rem; font-size: 0.9rem; line-height: 1.5;">
        <li>First and second derivative tests</li>
        <li>Concavity and inflection points</li>
        <li>Complete curve analysis</li>
      </ul>
      <a href="#week-6" style="color: #10b981; text-decoration: none; font-weight: 500; font-size: 0.9rem;">View Week 6 →</a>
    </div>

    <!-- Week 7-8 Card -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s;" 
         onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.1)'" 
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="background: #10b981; color: #ffffff; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; font-size: 0.9rem;">Week 7-8</span>
        <span style="color: #64748b; font-size: 0.85rem;">4 resources</span>
      </div>
      <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.2rem;">Review & Assessment</h3>
      <ul style="color: #64748b; margin-bottom: 1.5rem; padding-left: 1rem; font-size: 0.9rem; line-height: 1.5;">
        <li>Comprehensive review</li>
        <li>Quarter final exam</li>
        <li>Preparation for Q2</li>
      </ul>
      <a href="#week-7" style="color: #10b981; text-decoration: none; font-weight: 500; font-size: 0.9rem;">View Week 7-8 →</a>
    </div>

  </div>
</div>

<!-- Quick Navigation -->
<div style="background: #f1f5f9; border-radius: 8px; padding: 1.5rem; margin-bottom: 3rem; border: 1px solid #e2e8f0;">
  <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.2rem;">📋 Quick Navigation</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.75rem;">
    <a href="#week-1" style="color: #10b981; text-decoration: none; padding: 0.75rem; border-radius: 6px; background: #ffffff; display: block; text-align: center; border: 1px solid #e2e8f0; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#ecfdf5'; this.style.borderColor='#10b981'" onmouseout="this.style.backgroundColor='#ffffff'; this.style.borderColor='#e2e8f0'">Week 1: Limits</a>
    <a href="#week-2" style="color: #10b981; text-decoration: none; padding: 0.75rem; border-radius: 6px; background: #ffffff; display: block; text-align: center; border: 1px solid #e2e8f0; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#ecfdf5'; this.style.borderColor='#10b981'" onmouseout="this.style.backgroundColor='#ffffff'; this.style.borderColor='#e2e8f0'">Week 2: Continuity</a>
    <a href="#week-3" style="color: #10b981; text-decoration: none; padding: 0.75rem; border-radius: 6px; background: #ffffff; display: block; text-align: center; border: 1px solid #e2e8f0; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#ecfdf5'; this.style.borderColor='#10b981'" onmouseout="this.style.backgroundColor='#ffffff'; this.style.borderColor='#e2e8f0'">Week 3: Derivatives</a>
    <a href="#week-4" style="color: #10b981; text-decoration: none; padding: 0.75rem; border-radius: 6px; background: #ffffff; display: block; text-align: center; border: 1px solid #e2e8f0; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#ecfdf5'; this.style.borderColor='#10b981'" onmouseout="this.style.backgroundColor='#ffffff'; this.style.borderColor='#e2e8f0'">Week 4: Rules</a>
    <a href="#week-5" style="color: #10b981; text-decoration: none; padding: 0.75rem; border-radius: 6px; background: #ffffff; display: block; text-align: center; border: 1px solid #e2e8f0; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#ecfdf5'; this.style.borderColor='#10b981'" onmouseout="this.style.backgroundColor='#ffffff'; this.style.borderColor='#e2e8f0'">Week 5: Applications</a>
    <a href="#week-6" style="color: #10b981; text-decoration: none; padding: 0.75rem; border-radius: 6px; background: #ffffff; display: block; text-align: center; border: 1px solid #e2e8f0; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#ecfdf5'; this.style.borderColor='#10b981'" onmouseout="this.style.backgroundColor='#ffffff'; this.style.borderColor='#e2e8f0'">Week 6: Analysis</a>
    <a href="#week-7" style="color: #10b981; text-decoration: none; padding: 0.75rem; border-radius: 6px; background: #ffffff; display: block; text-align: center; border: 1px solid #e2e8f0; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#ecfdf5'; this.style.borderColor='#10b981'" onmouseout="this.style.backgroundColor='#ffffff'; this.style.borderColor='#e2e8f0'">Week 7-8: Review</a>
    <a href="#assessment" style="color: #10b981; text-decoration: none; padding: 0.75rem; border-radius: 6px; background: #ffffff; display: block; text-align: center; border: 1px solid #e2e8f0; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#ecfdf5'; this.style.borderColor='#10b981'" onmouseout="this.style.backgroundColor='#ffffff'; this.style.borderColor='#e2e8f0'">Assessment Summary</a>
  </div>
</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<!-- Detailed Weekly Content -->

<div id="week-1" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 1: Introduction to Limits</h2>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
<h3 style="color: #10b981; margin-bottom: 1rem;">📖 Learning Objectives</h3>
<ul style="color: #475569; line-height: 1.6;">
  <li>Understand the concept of mathematical limits</li>
  <li>Calculate limits using algebraic methods</li>
  <li>Apply limit theorems to solve problems</li>
</ul>
</div>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Week 1 - Introduction to Limits.pdf</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Limit Theorems and Examples.pptx</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Homework 1 - Basic Limits.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Quiz 1 - Limit Calculations.docx</a> <span style="color: #64748b; font-size: 0.9rem;">(Wednesday)</span></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 2.1-2.3: "Limits and Continuity"</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Supplementary Reading - Real-world Applications.pdf</a></li>
</ul>
</div>

</div>

<hr style="margin: 2.5rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-2" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 2: Continuity and Discontinuity</h2>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
<h3 style="color: #10b981; margin-bottom: 1rem;">📖 Learning Objectives</h3>
<ul style="color: #475569; line-height: 1.6;">
  <li>Define continuity at a point and on an interval</li>
  <li>Identify types of discontinuities</li>
  <li>Use the Intermediate Value Theorem</li>
</ul>
</div>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Week 2 - Continuity Concepts.pdf</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Types of Discontinuities.pptx</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Homework 2 - Continuity Problems.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Lab Assignment - Graphing Functions.docx</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 2.4-2.6: "Continuity and IVT"</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Article - Continuity in Engineering.pdf</a></li>
</ul>
</div>

</div>

<hr style="margin: 2.5rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-3" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 3: Introduction to Derivatives</h2>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
<h3 style="color: #10b981; margin-bottom: 1rem;">📖 Learning Objectives</h3>
<ul style="color: #475569; line-height: 1.6;">
  <li>Understand the derivative as a limit</li>
  <li>Calculate derivatives using the definition</li>
  <li>Interpret derivatives as rates of change</li>
</ul>
</div>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Week 3 - Derivative Definition.pdf</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Geometric Interpretation.pptx</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Homework 3 - Basic Derivatives.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Quiz 2 - Derivative Calculations.docx</a> <span style="color: #64748b; font-size: 0.9rem;">(Wednesday)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Project - Real-world Rate Problems.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Next Monday)</span></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 3.1-3.2: "The Derivative"</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Historical Context - Newton vs Leibniz.pdf</a></li>
</ul>
</div>

</div>

<hr style="margin: 2.5rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-4" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 4: Derivative Rules and Techniques</h2>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
<h3 style="color: #10b981; margin-bottom: 1rem;">📖 Learning Objectives</h3>
<ul style="color: #475569; line-height: 1.6;">
  <li>Apply power, product, and quotient rules</li>
  <li>Use chain rule for composite functions</li>
  <li>Find derivatives of trigonometric functions</li>
</ul>
</div>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Week 4 - Derivative Rules.pdf</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Chain Rule Mastery.pptx</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Trigonometric Derivatives.pdf</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Homework 4 - Derivative Rules Practice.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Take-home Test - Advanced Derivatives.docx</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Monday)</span></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 3.3-3.6: "Differentiation Rules"</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Advanced Techniques - Implicit Differentiation.pdf</a></li>
</ul>
</div>

</div>

<hr style="margin: 2.5rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-5" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 5: Applications of Derivatives</h2>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
<h3 style="color: #10b981; margin-bottom: 1rem;">📖 Learning Objectives</h3>
<ul style="color: #475569; line-height: 1.6;">
  <li>Find critical points and classify extrema</li>
  <li>Solve optimization problems</li>
  <li>Analyze related rates problems</li>
</ul>
</div>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Week 5 - Optimization Problems.pdf</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Related Rates Applications.pptx</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Homework 5 - Optimization and Related Rates.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Quiz 3 - Applications of Derivatives.docx</a> <span style="color: #64748b; font-size: 0.9rem;">(Wednesday)</span></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 4.1-4.3: "Applications of Differentiation"</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Case Studies - Optimization in Business.pdf</a></li>
</ul>
</div>

</div>

<hr style="margin: 2.5rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-6" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 6: Curve Sketching and Analysis</h2>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
<h3 style="color: #10b981; margin-bottom: 1rem;">📖 Learning Objectives</h3>
<ul style="color: #475569; line-height: 1.6;">
  <li>Use first and second derivatives for curve analysis</li>
  <li>Identify concavity and inflection points</li>
  <li>Sketch graphs using calculus techniques</li>
</ul>
</div>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Presentations</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Week 6 - Curve Sketching.pdf</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">First and Second Derivative Tests.pptx</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Homework & Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Homework 6 - Curve Analysis.pdf</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Friday)</span></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Graphing Project - Function Analysis.docx</a> <span style="color: #64748b; font-size: 0.9rem;">(Due: Next Wednesday)</span></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Reading Assignments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Textbook Chapter 4.4-4.5: "Curve Sketching"</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Graphing Technology - When and How to Use.pdf</a></li>
</ul>
</div>

</div>

<hr style="margin: 2.5rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="week-7" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📅 Week 7-8: Review and Quarter Assessment</h2>

<div style="background: #f8fafc; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0;">
<h3 style="color: #10b981; margin-bottom: 1rem;">📖 Learning Objectives</h3>
<ul style="color: #475569; line-height: 1.6;">
  <li>Synthesize all quarter 1 concepts</li>
  <li>Demonstrate mastery through comprehensive assessment</li>
  <li>Prepare for quarter 2 topics</li>
</ul>
</div>

<h3 style="color: #1e293b; margin: 2rem 0 1rem 0;">📚 Materials & Resources</h3>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📑 Review Materials</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Quarter 1 Review Guide.pdf</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Practice Problems - Comprehensive Review.pdf</a></li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Formula Sheet - Derivatives and Applications.pdf</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📝 Assessments</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li><a href="#" style="color: #10b981; text-decoration: none;">Practice Exam - Quarter 1.pdf</a></li>
  <li><strong>Quarter 1 Final Exam</strong> (Date: TBA)</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Reflection Essay - Learning Journey.docx</a></li>
</ul>
</div>

<div style="margin: 1.5rem 0;">
<h4 style="color: #10b981; margin-bottom: 0.75rem; font-size: 1.1rem;">📖 Preparatory Reading</h4>
<ul style="color: #475569; line-height: 1.8; margin-left: 1rem;">
  <li>Preview: Textbook Chapter 5.1: "Introduction to Integration"</li>
  <li><a href="#" style="color: #10b981; text-decoration: none;">Looking Ahead - Integral Calculus Overview.pdf</a></li>
</ul>
</div>

</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<div id="assessment" style="scroll-margin-top: 120px;">
<h2 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">📋 Assessment Summary</h2>

<div style="background: #ffffff; border-radius: 8px; padding: 1.5rem; margin: 1rem 0; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f8fafc;">
      <th style="border: 1px solid #e2e8f0; padding: 12px; text-align: left; color: #1e293b;">Assessment Type</th>
      <th style="border: 1px solid #e2e8f0; padding: 12px; text-align: left; color: #1e293b;">Points</th>
      <th style="border: 1px solid #e2e8f0; padding: 12px; text-align: left; color: #1e293b;">Percentage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">Weekly Homework (6 sets)</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">120 pts</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">30%</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">Quizzes (3)</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">90 pts</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">22.5%</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">Projects/Labs</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">60 pts</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">15%</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">Take-home Test</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">50 pts</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">12.5%</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">Quarter Final Exam</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">80 pts</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; color: #475569;">20%</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600; color: #1e293b;">Total</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600; color: #1e293b;">400 pts</td>
      <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: 600; color: #1e293b;">100%</td>
    </tr>
  </tbody>
</table>
</div>
</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: #e2e8f0;">

<div style="background: #f1f5f9; border-radius: 8px; padding: 1.5rem; border: 1px solid #e2e8f0;">
<h2 style="color: #1e293b; margin-bottom: 1rem;">📞 Contact & Office Hours</h2>
<p style="color: #475569; line-height: 1.6;"><strong>Teacher:</strong> Ms. Johnson<br>
<strong>Email:</strong> teacher@nisopen.com<br>
<strong>Office Hours:</strong> Monday-Wednesday 3:30-4:30 PM, Room 205<br>
<strong>Help Sessions:</strong> Thursdays 3:30-5:00 PM (Math Lab)</p>

<blockquote style="border-left: 4px solid #10b981; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #64748b;">
<p>"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding." - William Paul Thurston</p>
</blockquote>
</div>
`;

async function createFinalCleanMathPage() {
  try {
    // Find the teacher user
    const teacher = await prisma.user.findUnique({
      where: { email: "teacher@nisopen.com" },
    });

    if (!teacher) {
      console.error("Teacher user not found");
      return;
    }

    // Delete the previous final math page
    await prisma.page.deleteMany({
      where: { slug: "math-12-quarter-1-final" },
    });

    console.log("Deleted previous final math page");

    // Create the clean final math page
    const mathPage = await prisma.page.create({
      data: {
        title: "Mathematics - Grade 12, Quarter 1",
        slug: "math-12-quarter-1-clean",
        content: cleanMathPageContent,
        subject: "Mathematics",
        grade: "12",
        quarter: "1",
        published: true,
        authorId: teacher.id,
      },
    });

    console.log("Created clean final math page:", mathPage.title);
    console.log("Slug:", mathPage.slug);
    console.log("View at: http://localhost:3000/page/math-12-quarter-1-clean");
    
  } catch (error) {
    console.error("Error creating clean final math page:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createFinalCleanMathPage();