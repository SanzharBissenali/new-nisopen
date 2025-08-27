import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card p-8 rounded-lg border">
          <h1 className="text-4xl font-bold text-foreground mb-6">О проекте</h1>
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              nisOpen - это открытая платформа, на которой школьники, учителя и любые желающие могут иметь доступ
              к качественным учебным материалам от НИШ.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Идея</h2>
            <p className="text-muted-foreground mb-6">
              Изначально, идея сайта была в том, чтобы создать альтернативу для Teams, в котором всегда тонна файлов, 
              сложно найти что-то нужное и поэтому чувствуешь себя как будто ищешь иголку в стоге сена. На nisopen.com вы 
              можете находить найти учебные материалы по названию, по предмету, разделу или четверти. Все доступно в несколько 
              нажатий и создано, чтобы облегчить обучения для учеников НИШ Астаны. 
              </p>
              <p className="text-muted-foreground mb-6">
              Походу дела когда мы начали строить веб-сайт и собирать материалы перед нами встал вопрос - сделать сайт доступным 
              только для учеников НИШ или же полностью открытым? Вроде как, вначале он создавался для наших учеников, и поэтому 
              напрашивается ответ, что надо сделать его доступным только наших учеников. Однако когда встал именно этот вопросы, 
              мы поняли, что веб-сайт обладает потенциалом помогать не только ученикам НИШ, но и школьникам в ‘обычных’ школах. 
              Открытые и доступные материалы НИШ помогли бы учителям из других школ в подготовке к урокам, и были бы ценным 
              дополнительным ресурсам в обучении школьников вне зависимости от их школы, и поэтому мы считаем, что сайт должен 
              быть открытым для всех. 
            </p>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Еще Одна Причина</h2>
            <p className="text-muted-foreground mb-6">
              Можно ответить на этот вопрос и с другой стороны - разве НИШ будучи эталоном и лидером в 
              сфере образования не должен показывать пример/помогать другим школам? Если одна из главных целей 
              НИШа была образование и воспитание школьников, которые будут развивать нашу страну, то почему бы не 
              поделиться учебными ресурсами, на которых они учатся? Может на примере лучшего университета в мир - MIT, 
              который сделал общедоступным учебные материалы, записи лекций и многие другие ресурсы, тем самым только 
              укрепив свое имя, НИШ должен последовать тому же принципу? </p>
              
            <p className="text-muted-foreground mb-6">
              В этом и заключается идея нашей платформы. Мы верим, что поделившись своими качественными учебными материалами, 
              НИШ внесет несоизмеримый вклад в развитие казахстанского общества. Именно поэтому материалы могут загружать и 
              использовать все!
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

            {/* <h2 className="text-2xl font-semibold text-foreground mb-4">Technology Stack</h2>
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
            </ul> */}

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