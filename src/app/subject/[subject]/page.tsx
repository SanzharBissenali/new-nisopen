import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { prisma } from "@/lib/prisma";

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: subjectParam } = await params;
  const subject = decodeURIComponent(subjectParam);
  
  const pages = await prisma.page.findMany({
    where: { 
      subject: subject,
      published: true 
    },
    include: { author: { select: { name: true, email: true } } },
    orderBy: [
      { grade: "asc" },
      { quarter: "asc" },
      { updatedAt: "desc" }
    ],
  });

  const grades = [...new Set(pages.map(page => page.grade).filter(Boolean))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{subject}</h1>
          <p className="text-xl text-muted-foreground">
            Educational materials for {subject}
          </p>
        </div>

        {grades.length > 0 ? (
          <div className="space-y-8">
            {grades.map((grade) => {
              const gradePages = pages.filter(page => page.grade === grade);
              return (
                <div key={grade} className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-semibold mb-4">Grade {grade}</h2>
                  <div className="space-y-4">
                    {gradePages.map((page) => (
                      <div key={page.id} className="border-b border-border pb-4 last:border-b-0">
                        <Link
                          href={`/page/${page.slug}`}
                          className="text-lg font-medium text-primary hover:underline"
                        >
                          {page.title}
                        </Link>
                        <div className="text-sm text-muted-foreground mt-1">
                          {page.quarter && <span>Quarter: {page.quarter}</span>}
                          <span className="ml-4">
                            By {page.author.name || page.author.email}
                          </span>
                          <span className="ml-4">
                            Updated {new Date(page.updatedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-card p-8 rounded-lg border text-center">
            <p className="text-muted-foreground">
              No materials available for {subject} yet.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}