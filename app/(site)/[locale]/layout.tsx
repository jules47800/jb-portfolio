import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import type {ReactNode} from "react";
import type {Locale} from "@/lib/i18n";
import {isLocale, locales} from "@/lib/i18n";
import "@/app/globals.css";
import {Header} from "@/components/global/Header";
import {Footer} from "@/components/global/Footer";
import {ThemeProvider} from "@/components/global/ThemeProvider";
import {SEOProvider} from "@/components/global/SEOProvider";

export function generateStaticParams() {
  return Array.from(locales).map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;
  const messages = await getMessages({locale});

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <SEOProvider />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


