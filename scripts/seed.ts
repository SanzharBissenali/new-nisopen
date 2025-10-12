import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { SUBJECTS } from "../src/lib/subjects";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 12);
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@nisopen.com" },
    update: {},
    create: {
      email: "admin@nisopen.com",
      name: "Admin User",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Created admin user:", admin.email);

  // Create sample teacher
  const teacherPassword = await bcrypt.hash("teacher123", 12);
  
  const teacher = await prisma.user.upsert({
    where: { email: "teacher@nisopen.com" },
    update: {},
    create: {
      email: "teacher@nisopen.com",
      name: "Teacher User",
      password: teacherPassword,
      role: "TEACHER",
    },
  });

  console.log("Created teacher user:", teacher.email);

  // Create department teacher accounts
  const departments = [
    { email: "math@nisopen.com", name: "Mathematics Teacher", password: "math2024!", subject: SUBJECTS[0] }, // Mathematics
    { email: "chemistry@nisopen.com", name: "Chemistry Teacher", password: "chem2024!", subject: SUBJECTS[1] }, // Chemistry
    { email: "physics@nisopen.com", name: "Physics Teacher", password: "phys2024!", subject: SUBJECTS[2] }, // Physics
    { email: "biology@nisopen.com", name: "Biology Teacher", password: "bio2024!", subject: SUBJECTS[3] }, // Biology
    { email: "compsci@nisopen.com", name: "Computer Science Teacher", password: "comp2024!", subject: SUBJECTS[4] }, // Computer Science
    { email: "english@nisopen.com", name: "English Teacher", password: "eng2024!", subject: SUBJECTS[5] }, // English
  ];

  for (const dept of departments) {
    const deptPassword = await bcrypt.hash(dept.password, 12);
    const deptTeacher = await prisma.user.upsert({
      where: { email: dept.email },
      update: { subject: dept.subject },
      create: {
        email: dept.email,
        name: dept.name,
        password: deptPassword,
        role: "TEACHER",
        subject: dept.subject,
      },
    });
    console.log("Created department teacher:", deptTeacher.email, "- Subject:", dept.subject);
  }

  // Create a sample page
  const samplePage = await prisma.page.upsert({
    where: { slug: "welcome-to-nis-open" },
    update: {},
    create: {
      title: "Welcome to NIS Open",
      slug: "welcome-to-nis-open",
      content: `
        <h2>About NIS Open</h2>
        <p>Welcome to the NIS Open Educational Platform! This platform provides free and open access to educational materials for high school students.</p>
        
        <h3>Features</h3>
        <ul>
          <li>Upload and share educational materials</li>
          <li>Organize content by subject, grade, and quarter</li>
          <li>Easy content editing with rich text editor</li>
          <li>File management system</li>
        </ul>
        
        <h3>Getting Started</h3>
        <p>Teachers can sign in to upload files and create educational content. Students and visitors can browse materials by subject or grade level.</p>
      `,
      subject: SUBJECTS[6], // General
      grade: "11-12",
      quarter: "All",
      published: true,
      authorId: teacher.id,
    },
  });

  console.log("Created sample page:", samplePage.title);

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });