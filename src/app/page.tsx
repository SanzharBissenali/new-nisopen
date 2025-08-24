import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SearchForm } from "@/components/search-form";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const pages = await prisma.page.findMany({
    where: { published: true },
    include: { author: { select: { name: true, email: true } } },
    orderBy: { updatedAt: "desc" },
    take: 10,
  });

  const subjects = [...new Set(pages.map(page => page.subject).filter(Boolean))];
  const grades = [...new Set(pages.map(page => page.grade).filter(Boolean))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            nisOpen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Открытый, доступный и удобный! Здесь вы можете смотреть все презентации и домашние задания для ваших уроков!
          </p>
          
          <div className="flex justify-center">
            <SearchForm />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Поиск по предмету</h2>
            <div className="space-y-2">
              {subjects.length > 0 ? (
                subjects.map((subject) => (
                  <Link
                    key={subject}
                    href={`/subject/${encodeURIComponent(subject!)}`}
                    className="block p-3 bg-muted rounded-md hover:bg-muted/80 transition-colors"
                  >
                    {subject}
                  </Link>
                ))
              ) : (
                <p className="text-muted-foreground">Такого предмета пока нет</p>
              )}
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Поиск по классу</h2>
            <div className="space-y-2">
              {grades.length > 0 ? (
                grades.map((grade) => (
                  <Link
                    key={grade}
                    href={`/grade/${encodeURIComponent(grade!)}`}
                    className="block p-3 bg-muted rounded-md hover:bg-muted/80 transition-colors"
                  >
                    Grade {grade}
                  </Link>
                ))
              ) : (
                <p className="text-muted-foreground">No grades available yet</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Недавно загруженные материалы</h2>
          {pages.length > 0 ? (
            <div className="space-y-4">
              {pages.map((page) => (
                <div key={page.id} className="border-b border-border pb-4 last:border-b-0">
                  <Link
                    href={`/page/${page.slug}`}
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    {page.title}
                  </Link>
                  <div className="text-sm text-muted-foreground mt-1">
                    {page.subject && <span>Subject: {page.subject}</span>}
                    {page.grade && <span className="ml-4">Grade: {page.grade}</span>}
                    {page.quarter && <span className="ml-4">Quarter: {page.quarter}</span>}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    By {page.author.name || page.author.email} • Updated {new Date(page.updatedAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No materials available yet. Teachers can sign in to add content.</p>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
