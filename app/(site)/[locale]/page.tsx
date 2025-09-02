import {getTranslations} from "next-intl/server";
import {listMDX} from "@/lib/mdx";
import {HomeClient} from "./HomeClient";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "hero"});
  return {title: t("title")};
}

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "hero"});
  const th = await getTranslations({locale, namespace: "home"});
  const projects = listMDX("content/projects").slice(0, 3);
    
  const heroData = {
    title: t("title"),
    subtitle: t("subtitle"),
    ctaProjects: t("ctaProjects"),
    ctaContact: t("ctaContact"),
  };
  
  const testimonialsData = {
    title: th("testimonials.title"),
    items: th.raw("testimonials.items"),
  };

  return (
    <HomeClient 
      heroData={heroData}
      testimonialsData={testimonialsData}
      projects={projects}
      locale={locale}
    />
  );
}


