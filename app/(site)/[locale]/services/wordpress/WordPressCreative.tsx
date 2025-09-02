"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface WordPressCreativeProps {
  locale: string;
  translations: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      secondaryCta: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
}

export function WordPressCreative({ locale, translations }: WordPressCreativeProps) {
  const [currentFont, setCurrentFont] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const fonts = [
    "font-serif",
    "font-sans font-bold", 
    "font-mono",
    "font-serif italic",
    "font-sans font-light"
  ];

  const fontNames = [
    "Élégant & Raffiné",
    "Moderne & Audacieux", 
    "Créatif & Original",
    "Classique & Italique",
    "Minimaliste & Léger"
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentFont((prev) => (prev + 1) % fonts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlay, fonts.length]);

  const handleFontHover = (index: number) => {
    setIsAutoPlay(false);
    setCurrentFont(index);
  };

  const handleFontLeave = () => {
    // Reprendre l'autoplay après 3 secondes d'inactivité
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 3000);
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section - Typography Showcase */}
      <section className="min-h-screen relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center space-y-12">
            
            {/* Dynamic Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Votre Vision, Notre Expertise
              </div>
              
              <h1 className={`transition-all duration-1000 ${fonts[currentFont]} text-6xl md:text-8xl lg:text-9xl font-bold leading-none`}>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Word
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent -mt-4">
                  Press
                </span>
              </h1>
              
              <div className="text-lg text-muted-foreground">
                Style actuel: <span className="font-bold text-primary">{fontNames[currentFont]}</span>
              </div>
            </motion.div>

            {/* Typography Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16"
            >
              {fonts.map((font, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onMouseEnter={() => handleFontHover(index)}
                  onMouseLeave={handleFontLeave}
                >
                  <div className={`${font} p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 dark:hover:bg-black/40 relative overflow-hidden`}>
                    <div className="text-4xl font-bold mb-2 group-hover:opacity-0 group-hover:scale-75 transition-all duration-300">Aa</div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <div className="text-3xl font-bold text-primary mb-1">WordPress</div>
                      <div className="text-xs text-primary/70">Aperçu</div>
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">{fontNames[index]}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            >
              <Link
                href={`/${locale}/contact`}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span className="group-hover:animate-pulse">{translations.hero.cta}</span>
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
              >
                {translations.hero.secondaryCta}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Typography Playground */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="font-serif text-purple-600">Votre</span>{" "}
              <span className="font-sans text-blue-600">Marque</span>{" "}
              <span className="font-mono text-green-600">Mérite</span>{" "}
              <span className="font-serif italic text-pink-600">L&apos;Exception</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Typography Examples */}
            <div className="space-y-8">
              <div className="p-8 bg-white dark:bg-black/40 rounded-3xl shadow-xl">
                <h3 className="font-serif text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Prestige & Raffinement
                </h3>
                <p className="font-serif text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Donnez à votre marque l&apos;élégance qu&apos;elle mérite avec des designs intemporels.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl shadow-xl">
                <h3 className="font-sans text-4xl font-black mb-4">
                  IMPACT & MODERNITÉ
                </h3>
                <p className="font-sans text-lg opacity-90 leading-relaxed">
                  Captivez votre audience avec des designs qui font sensation.
                </p>
              </div>

              <div className="p-8 bg-black dark:bg-white text-white dark:text-black rounded-3xl shadow-xl">
                <h3 className="font-mono text-3xl font-bold mb-4">
                  Innovation & Créativité
                </h3>
                <p className="font-mono text-sm opacity-80 leading-relaxed">
                  Démarquez-vous avec des concepts uniques et originaux.
                </p>
              </div>
            </div>

            {/* Right: Interactive Demo */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-black/40 p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Ce Que Vous Obtenez</h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2 transition-all duration-500 hover:scale-110 cursor-pointer">
                      ✨
                    </div>
                    <div className="text-lg font-semibold">Résultat Garanti</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-950/40 dark:to-red-900/40 rounded-xl text-center">
                      <div className="text-2xl mb-2">💫</div>
                      <div className="font-bold">Wow Effect</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-950/40 dark:to-green-900/40 rounded-xl text-center">
                      <div className="text-2xl mb-2">📱</div>
                      <div className="font-bold">Parfait sur Mobile</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-950/40 dark:to-blue-900/40 rounded-xl text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="font-bold">Convertit Plus</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-950/40 dark:to-purple-900/40 rounded-xl text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-bold">Ultra Rapide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Layouts Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950/20 dark:via-orange-950/20 dark:to-red-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-8">
              <span className="inline-block transform rotate-3 text-yellow-600">Designs</span>{" "}
              <span className="inline-block transform -rotate-2 text-orange-600">Qui</span>{" "}
              <span className="inline-block transform rotate-1 text-red-600">Marquent</span>
            </h2>
          </div>

          {/* Masonry-like Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            
            {/* Card 1 - Tall */}
            <motion.div 
              style={{ y }}
              className="bg-white dark:bg-black/40 p-8 rounded-3xl shadow-xl row-span-2 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-950/40 dark:to-purple-900/40"
            >
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold mb-4">Sortez du Lot</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Votre site ne ressemblera à aucun autre. Promis.
              </p>
              <div className="space-y-3">
                <div className="h-2 bg-purple-300 rounded-full w-full"></div>
                <div className="h-2 bg-purple-400 rounded-full w-3/4"></div>
                <div className="h-2 bg-purple-500 rounded-full w-1/2"></div>
              </div>
            </motion.div>

            {/* Card 2 - Wide */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
              className="bg-white dark:bg-black/40 p-8 rounded-3xl shadow-xl md:col-span-2 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-950/40 dark:to-green-950/40"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🎯</div>
                <h3 className="text-2xl font-bold">Engagez Vos Visiteurs</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="h-20 bg-blue-200 dark:bg-blue-800/40 rounded-xl"></div>
                <div className="h-20 bg-green-200 dark:bg-green-800/40 rounded-xl"></div>
                <div className="h-20 bg-yellow-200 dark:bg-yellow-800/40 rounded-xl"></div>
              </div>
            </motion.div>

            {/* Card 3 - Square */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
              className="bg-white dark:bg-black/40 p-8 rounded-3xl shadow-xl aspect-square bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-950/40 dark:to-red-950/40 flex flex-col justify-center"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">💫</div>
                <h3 className="text-xl font-bold">Ça Bouge !</h3>
              </div>
            </motion.div>

            {/* Card 4 - Wide */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 20]) }}
              className="bg-white dark:bg-black/40 p-8 rounded-3xl shadow-xl md:col-span-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/40 dark:to-purple-950/40"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4">Vos Couleurs, Votre Identité</h3>
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 bg-red-400 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
                <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Nous créons la palette parfaite qui reflète votre personnalité.
              </p>
            </motion.div>

            {/* Card 5 - Tall */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -20]) }}
              className="bg-white dark:bg-black/40 p-8 rounded-3xl shadow-xl row-span-2 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-950/40 dark:to-blue-950/40"
            >
              <div className="text-4xl mb-4">🎛️</div>
              <h3 className="text-2xl font-bold mb-4">100% Sur Mesure</h3>
              <div className="space-y-4">
                <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="text-sm font-semibold">En-tête</div>
                  <div className="text-xs text-gray-500">À votre image</div>
                </div>
                <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="text-sm font-semibold">Contenu</div>
                  <div className="text-xs text-gray-500">Comme vous voulez</div>
                </div>
                <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="text-sm font-semibold">Pied de page</div>
                  <div className="text-xs text-gray-500">Entièrement libre</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Creative */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-7xl font-black leading-none">
              <span className="font-serif">Prêt</span>{" "}
              <span className="font-sans italic">à</span>{" "}
              <span className="font-mono">Créer</span>{" "}
              <span className="font-serif">?</span>
            </h2>
            
            <p className="text-2xl font-light max-w-3xl mx-auto opacity-90">
              {translations.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${locale}/contact`}
                className="group px-12 py-6 bg-white text-purple-600 rounded-full font-black text-xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                <span className="group-hover:animate-bounce inline-block">🚀</span>{" "}
                {translations.cta.button}
              </Link>
              
              <div className="text-center">
                <div className="text-sm opacity-75">Ou découvrez nos</div>
                <Link
                  href={`/${locale}/projects`}
                  className="text-xl font-bold underline hover:no-underline transition-all duration-300"
                >
                  Réalisations Créatives
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
