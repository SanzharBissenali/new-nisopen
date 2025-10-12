import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isValidSubject, getAvailableSubjects } from "@/lib/subjects";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
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

    const page = await prisma.page.findUnique({
      where: { id },
    });

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    // Check permissions: owner, admin, or subject-specific teacher
    const canEdit = session.user.role === "ADMIN" || 
                   page.authorId === session.user.id ||
                   (session.user.subject && page.subject === session.user.subject);

    if (!canEdit) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Check if slug already exists (excluding current page)
    if (slug !== page.slug) {
      const existingPage = await prisma.page.findUnique({
        where: { slug },
      });

      if (existingPage) {
        return NextResponse.json({ error: "A page with this slug already exists" }, { status: 400 });
      }
    }

    // Auto-set subject for subject-specific teachers
    let pageSubject = subject;
    if (session.user.subject && session.user.role !== "ADMIN") {
      pageSubject = session.user.subject;
    }

    const updatedPage = await prisma.page.update({
      where: { id },
      data: {
        title,
        slug,
        content,
        subject: pageSubject,
        grade,
        quarter,
        published,
      },
    });

    return NextResponse.json(updatedPage);
  } catch (error) {
    console.error("Error updating page:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const page = await prisma.page.findUnique({
      where: { id },
    });

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    // Check permissions: owner, admin, or subject-specific teacher
    const canEdit = session.user.role === "ADMIN" || 
                   page.authorId === session.user.id ||
                   (session.user.subject && page.subject === session.user.subject);

    if (!canEdit) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await prisma.page.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting page:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}