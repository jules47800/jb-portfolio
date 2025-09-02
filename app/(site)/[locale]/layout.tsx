import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import type {ReactNode} from "react";
import type {Locale} from "@/lib/i18n";
import {isLocale, locales} from "@/lib/i18n";
import "@/app/globals.css";

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
          <div className="min-h-screen bg-background text-foreground">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}