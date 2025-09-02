import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import ContactForm from "./components/ContactForm";
import {getTranslations} from "next-intl/server";
import {identity} from "@/content/data/cv";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.contact"});
  return {title: t("title")};
}

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "pages.contact"});
  return (
    <Container>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <Section>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Vous avez un projet en tête ? Discutons-en ensemble et trouvons la solution qui vous correspond
            </p>
          </div>
        </Section>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Section>
            <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-8 border border-border/50 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Démarrons votre projet</h2>
              <ContactForm />
            </div>
          </Section>

          {/* Contact Info & FAQ */}
          <Section>
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-8 border border-border/50 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Contact direct
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <a href={`mailto:${identity.email}`} className="text-primary hover:underline font-medium">
                    {identity.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <a href={`tel:${identity.phone}`} className="text-green-600 hover:underline font-medium">
                    {identity.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-muted-foreground">{identity.location}</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-3xl p-8 border border-green-200/50 dark:border-green-800/50 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400">Réponse rapide</h3>
              </div>
              <p className="text-green-700 dark:text-green-300 leading-relaxed">
                Je m'engage à répondre à votre message sous <strong>24h maximum</strong>. 
                Pour les demandes urgentes, n'hésitez pas à m'appeler directement.
              </p>
            </div>

            {/* Process */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/50">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">Comment ça se passe ?</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">1</div>
                  <div>
                    <div className="font-semibold text-blue-700 dark:text-blue-300">Échange initial</div>
                    <div className="text-blue-600 dark:text-blue-400 text-sm">Compréhension de vos besoins et objectifs</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">2</div>
                  <div>
                    <div className="font-semibold text-blue-700 dark:text-blue-300">Devis personnalisé</div>
                    <div className="text-blue-600 dark:text-blue-400 text-sm">Proposition détaillée et transparente</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">3</div>
                  <div>
                    <div className="font-semibold text-blue-700 dark:text-blue-300">Réalisation</div>
                    <div className="text-blue-600 dark:text-blue-400 text-sm">Développement avec suivi régulier</div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </Container>
  );
}


