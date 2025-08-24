import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { prisma } from "@/lib/prisma";

export default async function PageView({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await prisma.page.findUnique({
    where: { slug: slug, published: true },
    include: { author: { select: { name: true, email: true } } },
  });

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{page.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            {page.subject && (
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Subject: {page.subject}
              </span>
            )}
            {page.grade && (
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Grade: {page.grade}
              </span>
            )}
            {page.quarter && (
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                Quarter: {page.quarter}
              </span>
            )}
            <span>
              By {page.author.name || page.author.email}
            </span>
            <span>
              Updated {new Date(page.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border">
          <div 
            className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content || "" }}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}