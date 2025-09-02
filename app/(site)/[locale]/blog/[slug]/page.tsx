import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import {readMDXFile, listMDX} from "@/lib/mdx";
import {Container} from "@/components/global/Container";
import Link from "next/link";
import { CodeBlock, Demo, Metric, BeforeAfter, Tip, PerformanceGauge, Schema } from "@/components/blog/MDXComponents";

export async function generateStaticParams() {
  return listMDX("content/blog").map((p) => ({slug: p.slug}));
}

export default async function BlogPost({params}: {params: Promise<{slug: string; locale: string}>}) {
  const {slug, locale} = await params;
  try {
    const {frontmatter, content} = readMDXFile("content/blog", slug);
    
    // Composants MDX personnalisés
    const components = {
      CodeBlock,
      Demo,
      Metric,
      BeforeAfter,
      Tip,
      PerformanceGauge,
      Schema,
      // Styles pour les éléments markdown standards
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          {children}
        </h2>
      ),
      h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
          {children}
        </h3>
      ),
      p: ({ children }: { children: React.ReactNode }) => (
        <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
          {children}
        </p>
      ),
      ul: ({ children }: { children: React.ReactNode }) => (
        <ul className="space-y-2 mb-6 text-muted-foreground">
          {children}
        </ul>
      ),
      li: ({ children }: { children: React.ReactNode }) => (
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <span>{children}</span>
        </li>
      ),
      code: ({ children }: { children: React.ReactNode }) => (
        <code className="bg-muted px-2 py-1 rounded-md text-sm font-mono text-primary">
          {children}
        </code>
      ),
      blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
          <div className="text-primary italic">{children}</div>
        </blockquote>
      )
    };
    
    return (
      <main className="min-h-screen">
        {/* Hero Article */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb moderne */}
              <nav className="flex items-center gap-2 text-sm mb-12">
                <Link href={`/${locale}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Accueil
                </Link>
                <span className="text-muted-foreground">/</span>
                <Link href={`/${locale}/blog`} className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                <span className="text-muted-foreground">/</span>
                <span className="text-foreground font-medium">{frontmatter.title}</span>
              </nav>
              
              {/* Header article */}
              <header className="text-center">
                {/* Tags */}
                {frontmatter.tags && frontmatter.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {frontmatter.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Titre */}
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    {frontmatter.title}
                  </span>
                </h1>
                
                {/* Résumé */}
                {frontmatter.summary && (
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                    {frontmatter.summary}
                  </p>
                )}
                
                {/* Métadonnées */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>3-5 min de lecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Guide pratique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span>Niveau {(frontmatter as {level?: string}).level || 'Intermédiaire'}</span>
                  </div>
                </div>
              </header>
            </div>
          </Container>
        </section>

        {/* Contenu article */}
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <MDXRemote source={content} components={components} />
              </article>
            </div>
          </Container>
        </section>

        {/* Footer article */}
        <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* CTA principal */}
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-12 border border-primary/20 text-center mb-12">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Besoin d'aide pour votre projet ?</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Je vous accompagne dans l'optimisation de votre site WordPress. Audit gratuit, conseils personnalisés et mise en œuvre technique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Discuter de votre projet
                  </Link>
                  <Link href={`/${locale}/services/wordpress`} className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-xl font-semibold hover:bg-muted/50 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Voir mes services
                  </Link>
                </div>
              </div>
              
              {/* Navigation articles */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/blog`} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-card border border-border rounded-xl hover:bg-muted/50 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span>Tous les articles</span>
                </Link>
                <Link href={`/${locale}/services`} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-card border border-border rounded-xl hover:bg-muted/50 transition-colors">
                  <span>Mes services</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    );
  } catch {
    notFound();
  }
}


