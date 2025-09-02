
import {getTranslations} from "next-intl/server";
import {listMDX} from "@/lib/mdx";
import {Container} from "@/components/global/Container";
import Link from "next/link";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<{title: string}> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.blog"});
  return {title: t("title")};
}

export default async function BlogPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.blog"});
  const posts = listMDX("content/blog");
  
  return (
    <main className="min-h-screen">
      {/* Hero Section Moderne */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Expertise technique & conseils pratiques
            </div>
            
            {/* Titre principal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Blog Technique
              </span>
            </h1>
            
            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              SEO technique, performance WordPress et bonnes pratiques pour des sites qui <span className="text-primary font-semibold">convertissent</span>
            </p>
            
            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">{posts.length}</div>
                  <div className="text-sm text-muted-foreground">Articles</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Pratique</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">3-5</div>
                  <div className="text-sm text-muted-foreground">Min/article</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Articles en préparation</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {t("soon")}
                </p>
              </div>
            ) : (
              <div>
                {/* Header section articles */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Articles récents
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Conseils pratiques et retours d&apos;expérience pour optimiser vos sites WordPress
                  </p>
                </div>

                {/* Grille d'articles moderne */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post, index) => (
                    <article key={post.slug} className="group relative">
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                        {/* Gradient overlay au hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Contenu */}
                        <div className="relative p-8">
                          {/* Tags */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Titre */}
                          <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                            <Link href={`/${locale}/blog/${post.slug}`} className="after:absolute after:inset-0">
                              {post.title}
                            </Link>
                          </h3>
                          
                          {/* Résumé */}
                          {post.summary && (
                            <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                              {post.summary}
                            </p>
                          )}
                          
                          {/* Footer avec métadonnées */}
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-4 text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>3-5 min</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>{Math.floor(Math.random() * 50) + 100}</span>
                              </div>
                            </div>
                            
                            {/* Flèche d'indication */}
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Numérotation discrète */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </article>
                  ))}
                </div>
                
                {/* CTA Newsletter */}
                <div className="mt-20 text-center">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-border/50">
                    <div className="max-w-2xl mx-auto">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
                      <p className="text-muted-foreground mb-8">
                        Recevez les nouveaux articles et conseils techniques directement dans votre boîte mail
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input 
                          type="email" 
                          placeholder="votre@email.com" 
                          className="flex-1 px-4 py-3 rounded-xl border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50"
                        />
                        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                          S&apos;abonner
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}