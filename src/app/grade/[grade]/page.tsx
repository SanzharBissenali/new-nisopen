import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { prisma } from "@/lib/prisma";

export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade: gradeParam } = await params;
  const grade = decodeURIComponent(gradeParam);
  
  const pages = await prisma.page.findMany({
    where: { 
      grade: grade,
      published: true 
    },
    include: { author: { select: { name: true, email: true } } },
    orderBy: [
      { subject: "asc" },
      { quarter: "asc" },
      { updatedAt: "desc" }
    ],
  });

  const subjects = [...new Set(pages.map(page => page.subject).filter(Boolean))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Grade {grade}</h1>
          <p className="text-xl text-muted-foreground">
            Educational materials for Grade {grade}
          </p>
        </div>

        {subjects.length > 0 ? (
          <div className="space-y-8">
            {subjects.map((subject) => {
              const subjectPages = pages.filter(page => page.subject === subject);
              return (
                <div key={subject} className="bg-card p-6 rounded-lg border">
                  <h2 className="text-2xl font-semibold mb-4">{subject}</h2>
                  <div className="space-y-4">
                    {subjectPages.map((page) => (
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
              No materials available for Grade {grade} yet.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}