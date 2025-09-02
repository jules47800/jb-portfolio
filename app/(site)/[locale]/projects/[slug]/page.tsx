import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import {readMDXFile, listMDX} from "@/lib/mdx";
import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import Image from "next/image";
import Link from "next/link";
import {EmbedToggle} from "@/components/ui/EmbedToggle";
import {getTranslations} from "next-intl/server";

export async function generateStaticParams() {
  return listMDX("content/projects").map((p) => ({slug: p.slug}));
}

export default async function ProjectPage({params}: {params: Promise<{slug: string; locale: string}>}) {
  const {slug, locale} = await params;
  try {
    const {frontmatter, content} = readMDXFile("content/projects", slug);
    const t = await getTranslations({locale, namespace: "project.embed"});
    return (
      <Container>
        <Section>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {frontmatter.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {frontmatter.summary}
              </p>
            </header>

            {/* KPIs */}
            {frontmatter.kpis?.length ? (
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {frontmatter.kpis.map((k) => (
                    <div key={k.label} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-muted/30 p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{k.value}</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{k.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Cover Image */}
            {frontmatter.cover ? (
              <div className="mb-12 relative overflow-hidden rounded-2xl border border-border/50 shadow-lg">
                <Image 
                  src={frontmatter.cover} 
                  alt={frontmatter.title} 
                  width={1600} 
                  height={900} 
                  className="w-full h-auto object-cover" 
                  priority 
                />
              </div>
            ) : null}

            {/* Live Demo */}
            {frontmatter.links?.live ? (
              <div className="mb-12">
                <EmbedToggle
                  src={frontmatter.links.live}
                  labelClosed={t("show")}
                  labelOpen={t("hide")}
                />
              </div>
            ) : null}

            {/* Figma Prototype */}
            {frontmatter.links?.figma ? (
              <div className="mb-12">
                <EmbedToggle
                  src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(frontmatter.links.figma)}`}
                  labelClosed={t("prototype")}
                  labelOpen={t("hide")}
                />
              </div>
            ) : null}

            {/* Demo Link - Only for Le Margo project */}
            {slug === "le-margo" ? (
              <div className="mb-12">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">Découvrez le Système en Action</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Explorez l'interface d'administration complète et les statistiques avancées développées pour ce projet. 
                      Démonstration interactive avec données réelles.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Link 
                        href={`/${locale}/services/restaurant-reservation`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Voir la Démo Interactive
                      </Link>
                      <div className="text-sm text-muted-foreground">
                        Interface complète • Statistiques • Gestion temps réel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              <MDXRemote source={content} />
            </article>
          </div>
        </Section>
      </Container>
    );
  } catch {
    notFound();
  }
}


