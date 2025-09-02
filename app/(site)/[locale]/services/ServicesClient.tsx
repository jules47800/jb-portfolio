"use client";
import Link from "next/link";
import {Reveal} from "@/components/ui/Reveal";

interface ServicesData {
  hero: {
    title: string;
    subtitle: string;
  };
  cards: {
    wordpress: {
      title: string;
      desc: string;
    };
    restaurant: {
      title: string;
      desc: string;
    };
  };
  cta: {
    view: string;
    contact: string;
  };
  bottomCta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

interface ServicesClientProps {
  servicesData: ServicesData;
  locale: string;
}

export function ServicesClient({ servicesData, locale }: ServicesClientProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* WordPress Service */}
      <Reveal delay={0.1}>
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-blue-50/50 dark:to-blue-950/20 p-8 border border-border/50 hover:border-blue-500/20 transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            {/* Content */}
            <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
              {servicesData.cards.wordpress.title}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {servicesData.cards.wordpress.desc}
            </p>
            
            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">SEO technique optimisé</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">Design responsive</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">Performance optimisée</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href={`/${locale}/services/wordpress`} 
                className="inline-flex h-10 items-center justify-center rounded-2xl bg-blue-600 px-5 text-white hover:bg-blue-700 transition-colors font-medium"
              >
                {servicesData.cta.view}
              </Link>
              <Link 
                href={`/${locale}/contact`} 
                className="inline-flex h-10 items-center justify-center rounded-2xl border border-blue-200 dark:border-blue-800 px-5 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors font-medium"
              >
                {servicesData.cta.contact}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
      
      {/* Restaurant Reservation Service */}
      <Reveal delay={0.2}>
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-green-50/50 dark:to-green-950/20 p-8 border border-border/50 hover:border-green-500/20 transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            {/* Content */}
            <h2 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors">
              {servicesData.cards.restaurant.title}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {servicesData.cards.restaurant.desc}
            </p>
            
            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Réduction du no-show</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Notifications automatiques</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Gestion d&apos;acomptes</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href={`/${locale}/services/restaurant-reservation`} 
                className="inline-flex h-10 items-center justify-center rounded-2xl bg-green-600 px-5 text-white hover:bg-green-700 transition-colors font-medium"
              >
                {servicesData.cta.view}
              </Link>
              <Link 
                href={`/${locale}/contact`} 
                className="inline-flex h-10 items-center justify-center rounded-2xl border border-green-200 dark:border-green-800 px-5 hover:bg-green-50 dark:hover:bg-green-950/20 transition-colors font-medium"
              >
                {servicesData.cta.contact}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
