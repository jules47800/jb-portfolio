import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";

export function SimpleFooter() {
  const locale = useLocale();

  return (
    <footer className="bg-muted/30 border-t border-border/50 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Jules Bursens</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Développeur web freelance à Bordeaux. Sites WordPress sur-mesure et systèmes de réservation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Navigation</h4>
            <div className="space-y-2">
              <Link 
                href={`/${locale}/about`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                À propos
              </Link>
              <Link 
                href={`/${locale}/projects`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projets
              </Link>
              <Link 
                href={`/${locale}/services`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link 
                href={`/${locale}/contact`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Bordeaux, France</p>
              <p>jules47800@gmail.com</p>
              <p>07 68 99 50 76</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Jules Bursens. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
