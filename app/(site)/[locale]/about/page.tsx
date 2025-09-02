import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.about"});
  return {title: t("title")};
}

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const tPage = await getTranslations({locale, namespace: "pages.about"});
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Recherche alternance
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Disponible freelance
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {tPage("title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            {tPage("intro")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`/${locale}/contact`}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              Candidature alternance
            </a>
            <a 
              href={`/${locale}/services`}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Services freelance
            </a>
            <a 
              href="/portfolio.pdf"
              className="inline-flex items-center px-6 py-3 border-2 border-border hover:border-primary/50 rounded-xl transition-all duration-200 font-medium hover:bg-muted/50 hover:scale-105"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger le CV
            </a>
          </div>
        </div>
      </section>

      {/* Profile Card */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card/50 backdrop-blur border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Chef de projet digital
                </div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Jules Bursens</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">21 ans</p>
                      <p className="text-sm">Bordeaux (33800)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">jules47800@gmail.com</p>
                      <p className="text-sm">Réponse sous 24h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">07 68 99 50 76</p>
                      <p className="text-sm">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Centres d&apos;intérêt</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Basket-ball", "Sports de combat (MMA)", "Musique", "Graphic design"].map((interest, index) => (
                      <span key={index} className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm border border-border/50">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Compétences clés</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>React / Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>WordPress</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>SEO technique</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>UX/UI Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Parcours professionnel</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Stage Webmaster",
                  company: "Crédit Agricole",
                  period: "2024",
                  description: "Gestion de contenu sur CMS interne, optimisation SEO, maintenance, collaboration avec équipes métiers & techniques.",
                  color: "blue"
                },
                {
                  title: "Chef de projet Web Junior", 
                  company: "Kairos Agency",
                  period: "2023",
                  description: "Gestion de projet digital, coordination, suivi clients.",
                  color: "green"
                },
                {
                  title: "Bachelor Chef de Projet Digital",
                  company: "ESD Bordeaux",
                  period: "2022-2025",
                  description: "Formation complète en gestion de projet digital, développement web et stratégie digitale.",
                  color: "purple"
                }
              ].map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className={`relative z-10 w-16 h-16 bg-${item.color}-500/10 border-4 border-${item.color}-500/20 rounded-full flex items-center justify-center`}>
                    <div className={`w-6 h-6 bg-${item.color}-500 rounded-full`}></div>
                  </div>
                  <div className="flex-1 bg-card/30 backdrop-blur border border-border/50 rounded-2xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <span className={`px-3 py-1 bg-${item.color}-500/10 text-${item.color}-600 rounded-full text-sm font-medium`}>
                        {item.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-3">{item.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="px-4 py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compétences techniques</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Développement",
                icon: "💻",
                skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "PHP", "SQL"],
                color: "blue"
              },
              {
                title: "CMS & SEO",
                icon: "🚀",
                skills: ["WordPress", "SEO technique", "GA4", "Search Console", "Screaming Frog"],
                color: "green"
              },
              {
                title: "Design & Gestion",
                icon: "🎨",
                skills: ["Figma", "Canva", "GitHub", "Méthodologie Agile", "Gestion de projet"],
                color: "purple"
              }
            ].map((category, index) => (
              <div key={index} className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${category.color}-500 rounded-full`}></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et créons ensemble une solution qui vous ressemble.
            </p>
            <a 
              href={`/${locale}/contact`}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Démarrons votre projet
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}