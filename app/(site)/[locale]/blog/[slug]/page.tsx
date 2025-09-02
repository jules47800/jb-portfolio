import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import {readMDXFile, listMDX} from "@/lib/mdx";
import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import Link from "next/link";

export async function generateStaticParams() {
  return listMDX("content/blog").map((p) => ({slug: p.slug}));
}

export default async function BlogPost({params}: {params: Promise<{slug: string; locale: string}>}) {
  const {slug, locale} = await params;
  try {
    const {frontmatter, content} = readMDXFile("content/blog", slug);
    return (
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Section>
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href={`/${locale}`} className="hover:text-primary transition-colors">Accueil</Link>
              <span>/</span>
              <Link href={`/${locale}/blog`} className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{frontmatter.title}</span>
            </nav>
          </Section>

          {/* Article Header */}
          <Section>
            <header className="mb-12 text-center">
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {frontmatter.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {frontmatter.title}
              </h1>
              {frontmatter.summary && (
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {frontmatter.summary}
                </p>
              )}
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span>📖 Lecture 3-5 min</span>
                <span>•</span>
                <span>🏷️ SEO & Performance</span>
              </div>
            </header>
          </Section>

          {/* Article Content */}
          <Section>
            <article className="prose prose-lg max-w-none">
              <MDXRemote source={content} />
            </article>
          </Section>

          {/* Article Footer */}
          <Section>
            <div className="border-t border-border/20 pt-8">
              <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 border border-primary/20 text-center">
                <h3 className="text-2xl font-bold mb-4">Cet article vous a été utile ?</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Discutons de votre projet et voyons comment optimiser votre site
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href={`/${locale}/contact`} className="inline-flex h-12 items-center rounded-2xl bg-primary px-8 text-white hover:bg-primary/90 transition-colors font-medium">
                    Demander un devis
                  </Link>
                  <Link href={`/${locale}/blog`} className="inline-flex h-12 items-center rounded-2xl border border-border px-8 hover:bg-muted/50 transition-colors font-medium">
                    Autres articles
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </Container>
    );
  } catch {
    notFound();
  }
}


