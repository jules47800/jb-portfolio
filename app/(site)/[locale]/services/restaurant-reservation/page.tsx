import type {Metadata} from "next";
import Link from "next/link";
import {getTranslations} from "next-intl/server";
import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import {ReservationCarousel} from "@/components/demo/ReservationCarousel";


export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: "services.restaurant.seo"});
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RestaurantReservationServicePage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: "services.restaurant"});
  return (
    <main>
      <Section>
        <Container>
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{t("hero.title")}</h1>
            <p className="text-base md:text-lg text-muted-foreground">{t("hero.subtitle")}</p>
            <div className="flex items-center justify-center gap-3">
              <Link href={`/${params.locale}/contact`} className="inline-flex h-10 items-center rounded-2xl bg-[#007DBC] px-5 text-white hover:bg-[#0067A0]">{t("hero.cta")}</Link>
              <Link href={`/${params.locale}/projects`} className="inline-flex h-10 items-center rounded-2xl border px-5">{t("hero.secondaryCta")}</Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Interactive Demo Carousel - Moved to top */}
      <Section>
        <Container>
          <ReservationCarousel />
          
          {/* Link to project case study */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/20 hover:border-primary/30 transition-colors">
              <div className="text-muted-foreground">
                <div className="font-semibold text-foreground mb-1">Découvrez l&apos;étude de cas complète</div>
                <div className="text-sm">Implémentation réelle pour le restaurant Le Margo</div>
              </div>
              <Link
                href={`/${params.locale}/projects/le-margo`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Voir le projet Le Margo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Fonctionnalités Avancées
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez tous les outils qui font de notre solution la référence pour les restaurants
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/10 dark:to-blue-900/20 p-8 hover:border-blue-300/50 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 dark:bg-blue-950/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                  {t("features.item1.title")}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("features.item1.desc")}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/10 dark:to-green-900/20 p-8 hover:border-green-300/50 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-4 right-4 w-12 h-12 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-green-600 transition-colors">
                  {t("features.item2.title")}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("features.item2.desc")}
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <span>En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/10 dark:to-purple-900/20 p-8 hover:border-purple-300/50 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-4 right-4 w-12 h-12 bg-purple-100 dark:bg-purple-950/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-purple-600 transition-colors">
                  {t("features.item3.title")}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("features.item3.desc")}
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span>En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-orange-50/50 to-orange-100/30 dark:from-orange-950/10 dark:to-orange-900/20 p-8 hover:border-orange-300/50 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-4 right-4 w-12 h-12 bg-orange-100 dark:bg-orange-950/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-orange-600 transition-colors">
                  {t("features.item4.title")}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("features.item4.desc")}
                </p>
                <div className="flex items-center text-orange-600 font-medium">
                  <span>En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Comment Ça Marche
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un processus simple et efficace pour intégrer notre solution à votre restaurant
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="group text-center relative">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl border border-border/50 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-300/50">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors">
                    {t("process.step1.title")}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("process.step1.desc")}
                  </p>
                  <div className="mt-6 inline-flex items-center text-blue-600 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Étape 1 complète
                  </div>
                </div>
              </div>

              <div className="group text-center relative">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl border border-border/50 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-green-300/50">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-green-600 transition-colors">
                    {t("process.step2.title")}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("process.step2.desc")}
                  </p>
                  <div className="mt-6 inline-flex items-center text-green-600 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Configuration
                  </div>
                </div>
              </div>

              <div className="group text-center relative">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl border border-border/50 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-purple-300/50">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-purple-600 transition-colors">
                    {t("process.step3.title")}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("process.step3.desc")}
                  </p>
                  <div className="mt-6 inline-flex items-center text-purple-600 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Lancement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tarification Transparente
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choisissez la formule qui correspond parfaitement aux besoins de votre restaurant
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {["starter", "pro"].map((key, index) => (
              <div key={key} className={`group relative overflow-hidden rounded-2xl border-2 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                key === "pro" 
                  ? "border-primary bg-gradient-to-br from-primary/5 to-accent/10 shadow-lg" 
                  : "border-border/50 bg-white dark:bg-card hover:border-primary/30"
              }`}>
                {key === "pro" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      RECOMMANDÉ
                    </div>
                  </div>
                )}
                
                <div className="text-center space-y-6">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                    key === "pro" 
                      ? "bg-gradient-to-br from-primary to-accent" 
                      : "bg-gradient-to-br from-muted to-muted/50"
                  }`}>
                    <span className={`text-2xl font-bold ${key === "pro" ? "text-white" : "text-foreground"}`}>
                      {index + 1}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className={`text-3xl font-bold mb-2 ${
                      key === "pro" ? "text-primary" : "text-foreground"
                    }`}>
                      {t(`pricing.plans.${key}.name`)}
                    </h3>
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {t(`pricing.plans.${key}.price`)}
                    </div>
                    <p className="text-muted-foreground">par mois</p>
                  </div>
                  
                  <div className="space-y-4">
                    {t.raw(`pricing.plans.${key}.features`).map((f: string) => (
                      <div key={f} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          key === "pro" ? "bg-primary" : "bg-green-500"
                        }`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-foreground font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                    key === "pro"
                      ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:scale-105"
                      : "bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg"
                  }`}>
                    {key === "pro" ? "Commencer Maintenant" : "Essayer Gratuitement"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-muted/20 to-muted/10 rounded-2xl border border-border/50">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">Garantie 30 jours</div>
                <div className="text-muted-foreground">Satisfait ou remboursé, sans condition</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Questions Fréquentes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Toutes les réponses aux questions que vous vous posez sur notre solution
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {t.raw("faq.items").map((item: {q: string; a: string}, index: number) => (
              <div key={item.q} className="group bg-white dark:bg-card rounded-2xl border border-border/50 p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.q}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-muted/30 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground mb-2">Une autre question ?</div>
                <p className="text-lg text-muted-foreground mb-4">
                  Notre équipe est là pour vous accompagner dans votre projet
                </p>
                <Link 
                  href={`/${params.locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-bold"
                >
                  Nous contacter
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-primary p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {t("cta.title")}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  {t("cta.subtitle")}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href={`/${params.locale}/contact`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t("cta.button")}
                </Link>
                
                <Link 
                  href={`/${params.locale}/projects/le-margo`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Voir l&apos;étude de cas
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">30 jours</div>
                  <div className="text-white/80">Garantie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-white/80">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">0€</div>
                  <div className="text-white/80">Installation</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}


