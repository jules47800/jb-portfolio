import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {WordPressCreative} from "./WordPressCreative";

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: "services.wordpress.seo"});
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function WordPressServicePage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: "services.wordpress"});
  
  const translations = {
    hero: {
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      cta: t("hero.cta"),
      secondaryCta: t("hero.secondaryCta")
    },
    cta: {
      title: t("cta.title"),
      subtitle: t("cta.subtitle"),
      button: t("cta.button")
    }
  };

  return <WordPressCreative locale={params.locale} translations={translations} />;
}


