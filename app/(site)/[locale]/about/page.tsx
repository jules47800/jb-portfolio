import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import {getTranslations} from "next-intl/server";
import {identity, education, experiences, schoolProjects, skills} from "@/content/data/cv";
import Link from "next/link";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.about"});
  return {title: t("title")};
}

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const tPage = await getTranslations({locale, namespace: "pages.about"});
  const tAbout = await getTranslations({locale, namespace: "about"});
  return (
    <Container>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {tPage("title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {tPage("intro")}
            </p>
          </div>
        </Section>

        {/* Identity Card */}
        <Section>
          <div className="bg-gradient-to-br from-card to-muted/30 rounded-3xl p-8 border border-border/50 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">{tAbout("sections.identity")}</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{identity.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{identity.age} • {identity.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <a href={`mailto:${identity.email}`} className="text-primary hover:underline">{identity.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <a href={`tel:${identity.phone}`} className="text-primary hover:underline">{identity.phone}</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{tAbout("interests")}</h3>
                <div className="flex flex-wrap gap-2">
                  {identity.interests.map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">{tAbout("sections.education")}</h2>
          <div className="space-y-4">
            {education.map((e, index) => (
              <div key={e.title} className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-card to-muted/20 p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">{e.title}</h3>
                    <p className="text-muted-foreground">{e.place}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium shrink-0">
                    {e.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">{tAbout("sections.experience")}</h2>
          <div className="grid gap-6">
            {experiences.map((x, index) => (
              <div key={x.title} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-muted/20 p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-primary">{x.title}</h3>
                    <span className="text-sm font-medium text-muted-foreground shrink-0">{x.company}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{x.details}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">{tAbout("sections.skills")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-blue-50/50 dark:to-blue-950/20 p-6 border border-border/50 hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="font-bold text-lg mb-3 text-blue-600 dark:text-blue-400">Langages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang) => (
                    <span key={lang} className="px-2 py-1 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-green-50/50 dark:to-green-950/20 p-6 border border-border/50 hover:border-green-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">CMS</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cms.map((cms) => (
                    <span key={cms} className="px-2 py-1 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 rounded text-sm font-medium">
                      {cms}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-purple-50/50 dark:to-purple-950/20 p-6 border border-border/50 hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="font-bold text-lg mb-3 text-purple-600 dark:text-purple-400">SEO & Analytics</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.seo.map((seo) => (
                    <span key={seo} className="px-2 py-1 bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 rounded text-sm font-medium">
                      {seo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-orange-50/50 dark:to-orange-950/20 p-6 border border-border/50 hover:border-orange-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-400">Design & UX</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.designUx.map((design) => (
                    <span key={design} className="px-2 py-1 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 rounded text-sm font-medium">
                      {design}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-teal-50/50 dark:to-teal-950/20 p-6 border border-border/50 hover:border-teal-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="font-bold text-lg mb-3 text-teal-600 dark:text-teal-400">Gestion de projet</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.project.map((proj) => (
                    <span key={proj} className="px-2 py-1 bg-teal-100 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 rounded text-sm font-medium">
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-pink-50/50 dark:to-pink-950/20 p-6 border border-border/50 hover:border-pink-500/20 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="font-bold text-lg mb-3 text-pink-600 dark:text-pink-400">Soft skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((soft) => (
                    <span key={soft} className="px-2 py-1 bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 rounded text-sm font-medium">
                      {soft}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* School Projects */}
        <Section>
          <h2 className="text-3xl font-bold mb-8 text-center">{tAbout("sections.school")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {schoolProjects.map((p, index) => (
              <div key={p.title} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-muted/20 p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="font-bold text-lg mb-3 text-primary">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.details}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section>
          <div className="text-center bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Intéressé par mon profil ?</h3>
            <p className="text-muted-foreground mb-6">Discutons de votre projet ensemble</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={`/${locale}/contact`} className="inline-flex h-12 items-center rounded-2xl bg-primary px-8 text-white hover:bg-primary/90 transition-colors font-medium">
                {tAbout("contactCta")}
              </Link>
              <a href="/portfolio.pdf" className="inline-flex h-12 items-center rounded-2xl border border-border px-8 hover:bg-muted/50 transition-colors font-medium">
                {tAbout("cv.button")}
              </a>
            </div>
          </div>
        </Section>
      </div>
    </Container>
  );
}


