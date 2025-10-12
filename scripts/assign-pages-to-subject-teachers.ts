import { PrismaClient } from "@prisma/client";
import { SUBJECTS } from "../src/lib/subjects";

const prisma = new PrismaClient();

async function assignPagesToSubjectTeachers() {
  console.log("Assigning pages to appropriate subject teachers...");
  
  for (const subject of SUBJECTS) {
    if (subject === "General") continue; // Skip General - can be owned by anyone
    
    // Find the teacher for this subject
    const subjectTeacher = await prisma.user.findFirst({
      where: { 
        subject: subject,
        role: "TEACHER"
      }
    });

    if (!subjectTeacher) {
      console.log(`No teacher found for subject: ${subject}`);
      continue;
    }

    // Transfer all pages of this subject to the subject teacher
    const result = await prisma.page.updateMany({
      where: {
        subject: subject
      },
      data: {
        authorId: subjectTeacher.id
      }
    });

    if (result.count > 0) {
      console.log(`✅ Assigned ${result.count} ${subject} pages to ${subjectTeacher.email}`);
    } else {
      console.log(`ℹ️  No ${subject} pages found to assign`);
    }
  }

  // Show final state
  console.log("\nFinal page ownership by subject:");
  const pagesBySubject = await prisma.page.groupBy({
    by: ['subject'],
    _count: { id: true }
  });

  for (const group of pagesBySubject) {
    const samplePage = await prisma.page.findFirst({
      where: { subject: group.subject },
      include: { author: { select: { email: true, subject: true } } }
    });
    
    console.log(`${group.subject}: ${group._count.id} pages (owned by ${samplePage?.author.email})`);
  }

  await prisma.$disconnect();
}

assignPagesToSubjectTeachers().catch(console.error);