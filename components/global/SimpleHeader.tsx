"use client";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {usePathname} from "next/navigation";

export function SimpleHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

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

        {/* Language Switcher with Flags */}
        <div className="flex items-center gap-2">
          <Link
            href={pathname.replace(/^\/[a-z]{2}/, '/fr')}
            className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              locale === 'fr' 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground border border-transparent'
            }`}
            title="Français"
          >
            <div className="w-5 h-4 rounded-sm overflow-hidden shadow-sm">
              <div className="w-full h-full bg-gradient-to-r from-blue-600 via-white to-red-600 flex">
                <div className="w-1/3 bg-blue-600"></div>
                <div className="w-1/3 bg-white"></div>
                <div className="w-1/3 bg-red-600"></div>
              </div>
            </div>
            <span className="text-xs font-medium hidden sm:block">FR</span>
          </Link>
          
          <Link
            href={pathname.replace(/^\/[a-z]{2}/, '/en')}
            className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              locale === 'en' 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground border border-transparent'
            }`}
            title="English"
          >
            <div className="w-5 h-4 rounded-sm overflow-hidden shadow-sm">
              <div className="w-full h-full bg-blue-800 relative">
                {/* Union Jack pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-white"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-white"></div>
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-white"></div>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2"></div>
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2"></div>
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-red-600 transform -translate-y-1/2"></div>
                  <div className="absolute top-0 left-1/2 w-1 h-full bg-red-600 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
            <span className="text-xs font-medium hidden sm:block">EN</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
