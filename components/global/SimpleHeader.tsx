"use client";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {usePathname} from "next/navigation";
import {useState, useEffect} from "react";

export function SimpleHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fermer le menu au changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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

        {/* Desktop: Language Switcher + Mobile: Burger + Language */}
        <div className="flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 rounded-lg border border-border hover:border-primary/50 bg-background/80 backdrop-blur flex items-center justify-center transition-all duration-200 hover:bg-muted/50"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className={`absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-b border-border/50 shadow-xl transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <nav className="px-4 py-6 space-y-4">
              <Link 
                href={`/${locale}`}
                className="block px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {t("home")}
              </Link>
              <Link 
                href={`/${locale}/about`}
                className="block px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {t("about")}
              </Link>
              <Link 
                href={`/${locale}/projects`}
                className="block px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {t("projects")}
              </Link>
              <Link 
                href={`/${locale}/services`}
                className="block px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {t("services")}
              </Link>
              <Link 
                href={`/${locale}/contact`}
                className="block px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {t("contact")}
              </Link>
              
              {/* CTA Mobile */}
              <div className="pt-4 border-t border-border/50">
                <Link 
                  href={`/${locale}/contact`}
                  className="block w-full px-4 py-3 bg-primary text-primary-foreground text-center rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200"
                >
                  Démarrer un projet
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
