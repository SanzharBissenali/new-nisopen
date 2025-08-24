import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateExistingGrades() {
  try {
    // Update the existing Math page from "11-12" to "12"
    const mathPage = await prisma.page.findFirst({
      where: { 
        subject: "Mathematics",
        grade: "11-12" 
      }
    });

    if (mathPage) {
      await prisma.page.update({
        where: { id: mathPage.id },
        data: { grade: "12" }
      });
      console.log(`✅ Updated Math page grade from "11-12" to "12"`);
    }

    // Update the Chemistry page from "11" to "11" (already correct, but let's make sure)
    const chemPage = await prisma.page.findFirst({
      where: { 
        subject: "Chemistry",
        grade: "11"
      }
    });

    if (chemPage) {
      console.log(`✅ Chemistry page grade "11" is already correct`);
    }

    console.log("\n✅ All grades updated successfully!");
    
  } catch (error) {
    console.error("Error updating grades:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updateExistingGrades();