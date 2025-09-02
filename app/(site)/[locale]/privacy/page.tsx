import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: "pages_meta.privacy"});
  return {title: t("title")};
}

export default async function PrivacyPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: "pages_meta.privacy"});
  return (
    <Container>
      <Section>
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">{t("title")}</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-sm">
          <p>Données personnelles: ce site ne collecte pas d’informations sensibles. Formulaire de contact: données utilisées uniquement pour répondre.</p>
          <p>Cookies: à compléter selon l’outil d’analyse.</p>
        </div>
      </Section>
    </Container>
  );
}

