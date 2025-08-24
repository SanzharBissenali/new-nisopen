import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fixGrade1112() {
  try {
    // Check for any pages with grade "11-12"
    const pages1112 = await prisma.page.findMany({
      where: { grade: "11-12" }
    });

    console.log(`Found ${pages1112.length} pages with grade "11-12"`);

    if (pages1112.length > 0) {
      // Update all "11-12" grades to "11"
      const result = await prisma.page.updateMany({
        where: { grade: "11-12" },
        data: { grade: "11" }
      });

      console.log(`✅ Updated ${result.count} pages from grade "11-12" to "11"`);
      
      pages1112.forEach(page => {
        console.log(`- ${page.title} (${page.subject})`);
      });
    } else {
      console.log("✅ No pages with grade '11-12' found - already fixed");
    }

    // Show current grade distribution
    const allPages = await prisma.page.findMany({
      select: { grade: true, title: true, subject: true }
    });

    const gradeStats = allPages.reduce((acc: Record<string, number>, page) => {
      const grade = page.grade || "No Grade";
      acc[grade] = (acc[grade] || 0) + 1;
      return acc;
    }, {});

    console.log("\n📊 Current grade distribution:");
    Object.entries(gradeStats).forEach(([grade, count]) => {
      console.log(`- Grade ${grade}: ${count} pages`);
    });

  } catch (error) {
    console.error("Error fixing grades:", error);
  } finally {
    await prisma.$disconnect();
  }
}

fixGrade1112();