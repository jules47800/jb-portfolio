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
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {tPage("title")}
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          {tPage("intro")}
        </p>
        
        <div className="bg-card rounded-lg p-8 border">
          <h2 className="text-2xl font-bold mb-4">Jules Bursens</h2>
          <p className="text-muted-foreground mb-4">21 ans - Bordeaux (33800)</p>
          <p className="text-muted-foreground mb-4">jules47800@gmail.com</p>
          <p className="text-muted-foreground">07 68 99 50 76</p>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href={`/${locale}/contact`}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}