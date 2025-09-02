import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import WordPressCreative from "./WordPressCreative";

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: "services.wordpress.seo"});
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function WordPressServicePage({params}: {params: {locale: string}}) {
  return <WordPressCreative />;
}


