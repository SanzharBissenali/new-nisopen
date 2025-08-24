import { Suspense } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { prisma } from "@/lib/prisma";
import { SearchForm } from "@/components/search-form";

async function SearchResults({ query }: { query: string }) {
  if (!query) {
    return (
      <div className="text-center text-muted-foreground">
        Enter a search term to find educational materials.
      </div>
    );
  }

  const pages = await prisma.page.findMany({
    where: {
      published: true,
      OR: [
        { title: { contains: query } },
        { content: { contains: query } },
        { subject: { contains: query } },
      ],
    },
    include: { author: { select: { name: true, email: true } } },
    orderBy: { updatedAt: "desc" },
  });

  if (pages.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No materials found for &quot;{query}&quot;. Try a different search term.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Search Results for &quot;{query}&quot; ({pages.length})
      </h2>
      
      <div className="space-y-4">
        {pages.map((page) => (
          <div key={page.id} className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow">
            <Link
              href={`/page/${page.slug}`}
              className="text-xl font-semibold text-primary hover:underline"
            >
              {page.title}
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
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
            
            {page.content && (
              <div className="mt-3 text-muted-foreground text-sm">
                {page.content.replace(/<[^>]*>/g, "").substring(0, 200)}...
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Search</h1>
          <p className="text-xl text-muted-foreground">
            Find educational materials across all subjects and grades
          </p>
        </div>

        <SearchForm initialQuery={query} />

        <div className="mt-8">
          <Suspense fallback={<div>Searching...</div>}>
            <SearchResults query={query} />
          </Suspense>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}