import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isValidSubject, getAvailableSubjects } from "@/lib/subjects";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Build query based on user role and subject
    interface WhereClause {
      OR?: Array<{ authorId: string } | { subject: string }>;
      authorId?: string;
    }
    let whereClause: WhereClause = {};

    if (session.user.role === "ADMIN") {
      // Admin can see all pages
      whereClause = {};
    } else if (session.user.subject) {
      // Subject-specific teacher can see:
      // 1. Their own pages
      // 2. Pages with their subject
      whereClause = {
        OR: [
          { authorId: session.user.id },
          { subject: session.user.subject }
        ]
      };
    } else {
      // General teacher can see only their own pages
      whereClause = { authorId: session.user.id };
    }

    const pages = await prisma.page.findMany({
      where: whereClause,
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(pages);
  } catch (error) {
    console.error("Error fetching pages:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, slug, content, subject, grade, quarter, published } = await request.json();

    if (!title || !slug) {
      return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
    }

    // Validate subject
    if (subject && !isValidSubject(subject)) {
      return NextResponse.json({ error: "Invalid subject selected" }, { status: 400 });
    }

    // Check if user can create pages with this subject
    const availableSubjects = getAvailableSubjects(session.user.subject, session.user.role);
    if (subject && !availableSubjects.includes(subject as typeof availableSubjects[number])) {
      return NextResponse.json({ error: "You are not authorized to create pages for this subject" }, { status: 403 });
    }

    // Check if slug already exists
    const existingPage = await prisma.page.findUnique({
      where: { slug },
    });

    if (existingPage) {
      return NextResponse.json({ error: "A page with this slug already exists" }, { status: 400 });
    }

    // Auto-set subject for subject-specific teachers
    let pageSubject = subject;
    if (session.user.subject && session.user.role !== "ADMIN") {
      pageSubject = session.user.subject;
    }

    const page = await prisma.page.create({
      data: {
        title,
        slug,
        content,
        subject: pageSubject,
        grade,
        quarter,
        published,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(page);
  } catch (error) {
    console.error("Error creating page:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}