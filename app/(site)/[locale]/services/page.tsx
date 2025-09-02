import type {Metadata} from "next";
import Link from "next/link";
import {getTranslations} from "next-intl/server";
import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import {ServicesClient} from "./ServicesClient";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "servicesIndex.seo"});
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesIndexPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  
  const servicesData = {
    hero: {
      title: t("servicesIndex.hero.title"),
      subtitle: t("servicesIndex.hero.subtitle"),
    },
    cards: {
      wordpress: {
        title: t("servicesIndex.cards.wordpress.title"),
        desc: t("servicesIndex.cards.wordpress.desc"),
      },
      restaurant: {
        title: t("servicesIndex.cards.restaurant.title"),
        desc: t("servicesIndex.cards.restaurant.desc"),
      },
    },
    cta: {
      view: t("servicesIndex.cta.view"),
      contact: t("servicesIndex.cta.contact"),
    },
    bottomCta: {
      title: t("servicesIndex.bottomCta.title"),
      subtitle: t("servicesIndex.bottomCta.subtitle"),
      button: t("servicesIndex.bottomCta.button"),
    },
  };

  return (
    <Container>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {servicesData.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {servicesData.hero.subtitle}
            </p>
          </div>
        </Section>

        {/* Services Cards */}
        <Section>
          <ServicesClient servicesData={servicesData} locale={locale} />
        </Section>

        {/* Process Section */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comment je travaille</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche méthodique pour des résultats qui dépassent vos attentes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">1. Analyse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compréhension approfondie de vos besoins, objectifs et contraintes techniques
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">2. Conception</h3>
              <p className="text-muted-foreground leading-relaxed">
                Design et architecture technique pensés pour la performance et l&apos;évolutivité
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">3. Livraison</h3>
              <p className="text-muted-foreground leading-relaxed">
                Développement, tests, mise en ligne et formation pour une autonomie complète
              </p>
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section>
          <div className="text-center bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{servicesData.bottomCta.title}</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              {servicesData.bottomCta.subtitle}
            </p>
            <Link 
              href={`/${locale}/contact`} 
              className="inline-flex h-14 items-center rounded-2xl bg-primary px-10 text-white hover:bg-primary/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              {servicesData.bottomCta.button}
            </Link>
          </div>
        </Section>
      </div>
    </Container>
  );
}


