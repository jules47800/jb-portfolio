import Link from "next/link";
import {useTranslations} from "next-intl";
import {useLocale} from "next-intl";
import {identity} from "@/content/data/cv";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  return (
    <footer className="border-t border-border/50 mt-20 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Jules Bursens</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Freelance développeur web à Bordeaux. Création de sites WordPress et solutions de réservation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${identity.email}`} className="text-sm hover:text-primary transition-colors">
                  {identity.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${identity.phone}`} className="text-sm hover:text-primary transition-colors">
                  {identity.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-muted-foreground">{identity.location}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <div className="space-y-3">
              <Link href={`/${locale}/services/wordpress`} className="block text-sm hover:text-primary transition-colors">
                WordPress sur-mesure
              </Link>
              <Link href={`/${locale}/services/restaurant-reservation`} className="block text-sm hover:text-primary transition-colors">
                Réservations restaurant
              </Link>
              <Link href={`/${locale}/services`} className="block text-sm hover:text-primary transition-colors">
                Tous les services
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href={`/${locale}/about`} className="text-sm hover:text-primary transition-colors">
                À propos
              </Link>
              <Link href={`/${locale}/projects`} className="text-sm hover:text-primary transition-colors">
                Projets
              </Link>
              <Link href={`/${locale}/blog`} className="text-sm hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href={`/${locale}/contact`} className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/portfolio.pdf" className="text-sm hover:text-primary transition-colors">
                {t("pdf")}
              </Link>
              <Link href={`/${locale}/legal`} className="text-sm hover:text-primary transition-colors">
                {t("legal")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jules Bursens. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Fait avec ❤️ à Bordeaux</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Disponible pour nouveaux projets</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


