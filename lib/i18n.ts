export const locales = ["fr", "en"] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export function isLocale(input: string | undefined | null): input is Locale {
  return !!input && (locales as readonly string[]).includes(input);
}


