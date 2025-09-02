import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import {getTranslations} from "next-intl/server";
import {listMDX} from "@/lib/mdx";
import Link from "next/link";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.blog"});
  return {title: t("title")};
}

export default async function BlogPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.blog"});
  const posts = listMDX("content/blog");
  
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Conseils SEO, performance web et bonnes pratiques pour WordPress
            </p>
          </div>
        </Section>

        {/* Articles Grid */}
        <Section>
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Articles en préparation</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {t("soon")}
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.slug} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6">
                    <div className="mb-4">
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        <Link href={`/${locale}/blog/${post.slug}`} className="after:absolute after:inset-0">
                          {post.title}
                        </Link>
                      </h2>
                      {post.summary && (
                        <p className="text-muted-foreground leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Lecture 3-5 min</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Section>

        {/* Newsletter CTA */}
        <Section>
          <div className="text-center bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Restons connectés</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Recevez mes derniers articles et conseils SEO directement par email
            </p>
            <Link href={`/${locale}/contact`} className="inline-flex h-12 items-center rounded-2xl bg-primary px-8 text-white hover:bg-primary/90 transition-colors font-medium">
              Me contacter
            </Link>
          </div>
        </Section>
      </div>
    </Container>
  );
}


