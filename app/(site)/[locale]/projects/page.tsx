import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import {getTranslations} from "next-intl/server";
import {listMDX} from "@/lib/mdx";
import {ProjectsClient} from "./ProjectsClient";
import Link from "next/link";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.projects"});
  return {title: t("title")};
}

export default async function ProjectsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.projects"});
  const projects = listMDX("content/projects");
  
  return (
    <Container>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Découvrez mes réalisations récentes alliant créativité, performance technique et résultats mesurables
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                WordPress
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                Réservations
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                UX Design
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                SEO
              </span>
            </div>
          </div>
        </Section>

        {/* Projects Grid */}
        <Section>
          <ProjectsClient projects={projects} />
        </Section>

        {/* CTA Section */}
        <Section>
          <div className="text-center bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Un projet en tête ?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Que ce soit pour un site vitrine, une solution de réservation ou un prototype UX, discutons de votre vision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={`/${locale}/contact`} className="inline-flex h-12 items-center rounded-2xl bg-primary px-8 text-white hover:bg-primary/90 transition-colors font-semibold">
                Démarrer un projet
              </Link>
              <Link href={`/${locale}/services`} className="inline-flex h-12 items-center rounded-2xl border border-border px-8 hover:bg-muted/50 transition-colors font-semibold">
                Voir mes services
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </Container>
  );
}


