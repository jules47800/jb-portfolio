import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: "pages_meta.legal"});
  return {title: t("title")};
}

export default async function LegalPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: "pages_meta.legal"});
  return (
    <Container>
      <Section>
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">{t("title")}</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-sm">
          <p>Éditeur: Jules Bursens — Bordeaux (33800) — jules47800@gmail.com</p>
          <p>Hébergement: à compléter.</p>
        </div>
      </Section>
    </Container>
  );
}

