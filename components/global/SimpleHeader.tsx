import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";

export function SimpleHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href={`/${locale}`}
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          JB
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href={`/${locale}`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("home")}
          </Link>
          <Link 
            href={`/${locale}/about`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("about")}
          </Link>
          <Link 
            href={`/${locale}/projects`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("projects")}
          </Link>
          <Link 
            href={`/${locale}/services`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("services")}
          </Link>
          <Link 
            href={`/${locale}/contact`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("contact")}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <span className="text-sm text-muted-foreground">Menu</span>
        </div>
      </div>
    </header>
  );
}
