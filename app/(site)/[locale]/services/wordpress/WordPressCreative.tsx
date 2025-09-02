"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function WordPressCreative() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Font animation state
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  
  const fonts = [
    "font-serif font-light",
    "font-sans font-bold",
    "font-mono font-medium",
    "font-serif font-black italic",
    "font-sans font-thin",
    "font-mono font-extrabold"
  ];

  const fontNames = [
    "Élégant & Raffiné",
    "Moderne & Impactant", 
    "Technique & Précis",
    "Créatif & Artistique",
    "Minimaliste & Épuré",
    "Bold & Expressif"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [fonts.length]);

  return (
    <main ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Designs WordPress sur-mesure
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              Votre site WordPress
              <br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                créatif & performant
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Des designs uniques qui captivent, des fonctionnalités qui convertissent. 
              Votre identité visuelle mérite plus qu'un template.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Voir mes créations
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Discuter de votre projet
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Font Showcase */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              La typographie qui <span className="text-primary">fait la différence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque police raconte une histoire. Voyez comment je peux transformer votre message avec le bon style.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-card rounded-3xl p-12 shadow-xl border border-border/50">
              <div className="text-center">
                <div className="mb-8">
                  <div className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-1000 ${fonts[currentFontIndex]}`}>
                    Votre Marque
                  </div>
                  <div className="text-lg text-muted-foreground">
                    Style actuel : <span className="font-medium text-foreground">{fontNames[currentFontIndex]}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  {fonts.map((font, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                        index === currentFontIndex 
                          ? 'bg-primary/10 border-2 border-primary/20' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                      onClick={() => setCurrentFontIndex(index)}
                    >
                      <div className={`text-lg font-bold mb-2 ${font}`}>
                        Aa
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {fontNames[index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950/20 dark:via-gray-950/20 dark:to-zinc-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Exemples de designs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Des designs qui <span className="text-primary">marquent les esprits</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque projet est unique. Voici quelques exemples de styles que je peux créer pour votre marque.
            </p>
          </div>

          {/* Clean Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Style Élégant */}
            <div className="group bg-white dark:bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Style Élégant</h3>
                <p className="text-muted-foreground text-sm">Parfait pour les marques premium</p>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl">
                  <div className="font-serif text-lg font-semibold text-purple-800 dark:text-purple-200">Sophistication</div>
                  <div className="font-serif text-sm text-purple-600 dark:text-purple-300">Typographies raffinées, espaces généreux</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  ✨ Idéal pour : Restaurants gastronomiques, cabinets d&apos;avocats, boutiques de luxe
                </div>
              </div>
            </div>

            {/* Style Moderne */}
            <div className="group bg-white dark:bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Style Moderne</h3>
                <p className="text-muted-foreground text-sm">Pour les entreprises innovantes</p>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl">
                  <div className="font-sans text-lg font-bold text-blue-800 dark:text-blue-200">IMPACT VISUEL</div>
                  <div className="font-sans text-sm text-blue-600 dark:text-blue-300">Couleurs vives, formes géométriques</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  🚀 Idéal pour : Startups, agences digitales, services tech
                </div>
              </div>
            </div>

            {/* Style Créatif */}
            <div className="group bg-white dark:bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Style Créatif</h3>
                <p className="text-muted-foreground text-sm">Pour se démarquer complètement</p>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl">
                  <div className="font-mono text-lg font-bold text-green-800 dark:text-green-200">originalité++</div>
                  <div className="font-mono text-sm text-green-600 dark:text-green-300">Concepts uniques, animations custom</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  🎨 Idéal pour : Artistes, agences créatives, marques disruptives
                </div>
              </div>
            </div>

            {/* Style Minimaliste */}
            <div className="group bg-white dark:bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Style Minimaliste</h3>
                <p className="text-muted-foreground text-sm">L&apos;essentiel, rien de plus</p>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 rounded-xl">
                  <div className="font-light text-lg text-gray-800 dark:text-gray-200">Épuré</div>
                  <div className="font-light text-sm text-gray-600 dark:text-gray-300">Blanc, typographie claire, focus contenu</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  ⚡ Idéal pour : Consultants, architectes, portfolios professionnels
                </div>
              </div>
            </div>

            {/* Style Coloré */}
            <div className="group bg-white dark:bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Style Énergique</h3>
                <p className="text-muted-foreground text-sm">Pour captiver l&apos;attention</p>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl">
                  <div className="font-bold text-lg text-orange-800 dark:text-orange-200">DYNAMIQUE</div>
                  <div className="font-medium text-sm text-orange-600 dark:text-orange-300">Couleurs vives, contrastes marqués</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  🔥 Idéal pour : Salles de sport, événementiel, marques jeunes
                </div>
              </div>
            </div>

            {/* Style Corporate */}
            <div className="group bg-white dark:bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Style Corporate</h3>
                <p className="text-muted-foreground text-sm">Professionnel et rassurant</p>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl">
                  <div className="font-semibold text-lg text-indigo-800 dark:text-indigo-200">Confiance</div>
                  <div className="font-medium text-sm text-indigo-600 dark:text-indigo-300">Codes établis, navigation claire</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  🏢 Idéal pour : Banques, assurances, grandes entreprises
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Chaque design est adapté à votre secteur et vos objectifs
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ces exemples donnent un aperçu des possibilités. Votre site sera entièrement personnalisé selon votre identité de marque.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}