import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card p-8 rounded-lg border">
          <h1 className="text-4xl font-bold text-foreground mb-6">About the Project</h1>
          
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              NIS Open Educational Platform is an open-source initiative designed to make high school educational materials accessible to everyone.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              We believe that quality education should be accessible to all students, regardless of their background or location. 
              This platform serves as a centralized repository where teachers can upload and organize educational materials, 
              and students can easily access them from anywhere in the world.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li><strong>Open Access:</strong> All materials are freely available to everyone</li>
              <li><strong>Teacher-Friendly:</strong> Simple upload and content management system</li>
              <li><strong>Organized Content:</strong> Materials organized by subject, grade, and quarter</li>
              <li><strong>Search Functionality:</strong> Powerful search to find specific content</li>
              <li><strong>Responsive Design:</strong> Works seamlessly on all devices</li>
              <li><strong>Multilingual Support:</strong> Content in multiple languages welcome</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4">How It Works</h2>
            <div className="bg-muted p-6 rounded-lg mb-6">
              <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                <li><strong>Teachers</strong> sign in and upload their educational materials (PDFs, presentations, assignments)</li>
                <li><strong>Content</strong> is organized by subject, grade level, and academic quarter</li>
                <li><strong>Students and educators worldwide</strong> can browse and access all materials for free</li>
                <li><strong>Search functionality</strong> helps users quickly find specific topics or resources</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Technology Stack</h2>
            <p className="text-muted-foreground mb-4">
              Built with modern web technologies to ensure reliability and performance:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
              <li>Next.js 15 - React framework for production</li>
              <li>TypeScript - Type-safe JavaScript</li>
              <li>Prisma - Database ORM and management</li>
              <li>NextAuth.js - Secure authentication</li>
              <li>Tailwind CSS - Utility-first CSS framework</li>
              <li>AWS S3 - File storage and CDN</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Contributing</h2>
            <p className="text-muted-foreground mb-6">
              This is a community-driven project. Teachers are encouraged to contribute their educational materials, 
              and developers can contribute to the platform&apos;s development. Together, we can build a comprehensive 
              educational resource that benefits students worldwide.
            </p>

            <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2">Open Source & Free Forever</h3>
              <p className="text-sm text-muted-foreground">
                This platform is committed to remaining free and open source. All code is available for review, 
                contribution, and adaptation to serve educational communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}