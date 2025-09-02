"use client";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu";
import {useLocale} from "next-intl";
import {LocaleSwitcher} from "./LocaleSwitcher";
import {ThemeToggle} from "./ThemeToggle";
import {useState, useEffect} from "react";

function NavLink({href, children}: {href: string; children: React.ReactNode}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className="px-3 py-2 rounded-xl hover:bg-muted/50 transition-colors duration-200 font-medium">
        <Link href={href}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function MobileNavLink({href, children, onClick}: {href: string; children: React.ReactNode; onClick: () => void}) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href={`/${locale}`} 
          className="font-bold text-lg hover:text-primary transition-colors duration-200"
        >
          Jules Bursens
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavLink href={`/${locale}`}>{t("home")}</NavLink>
              <NavLink href={`/${locale}/services`}>{t("services")}</NavLink>
              <NavLink href={`/${locale}/about`}>{t("about")}</NavLink>
              <NavLink href={`/${locale}/projects`}>{t("projects")}</NavLink>
              <NavLink href={`/${locale}/blog`}>{t("blog")}</NavLink>
              <NavLink href={`/${locale}/contact`}>{t("contact")}</NavLink>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="h-6 w-px bg-border mx-2"></div>
          <LocaleSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl hover:bg-muted/50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" 
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur border-b border-border/50 z-50 lg:hidden">
            <nav className="px-4 py-6 space-y-2">
              <MobileNavLink href={`/${locale}`} onClick={() => setIsOpen(false)}>
                {t("home")}
              </MobileNavLink>
              <MobileNavLink href={`/${locale}/services`} onClick={() => setIsOpen(false)}>
                {t("services")}
              </MobileNavLink>
              <MobileNavLink href={`/${locale}/about`} onClick={() => setIsOpen(false)}>
                {t("about")}
              </MobileNavLink>
              <MobileNavLink href={`/${locale}/projects`} onClick={() => setIsOpen(false)}>
                {t("projects")}
              </MobileNavLink>
              <MobileNavLink href={`/${locale}/blog`} onClick={() => setIsOpen(false)}>
                {t("blog")}
              </MobileNavLink>
              <MobileNavLink href={`/${locale}/contact`} onClick={() => setIsOpen(false)}>
                {t("contact")}
              </MobileNavLink>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}


