"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import {Container} from "@/components/global/Container";
import {Section} from "@/components/global/Section";
import {Spotlight} from "@/components/ui/Spotlight";
import {Reveal} from "@/components/ui/Reveal";
import {MagneticButton} from "@/components/ui/MagneticButton";
import {ProjectCard} from "@/components/cards/ProjectCard";
import Link from "next/link";

interface HeroData {
  title: string;
  subtitle: string;
  ctaProjects: string;
  ctaContact: string;
}

interface TestimonialsData {
  title: string;
  items: {name: string; role: string; quote: string}[];
}

interface Project {
  slug: string;
  title: string;
  tags?: string[];
  cover?: string;
  summary?: string;
}

interface HomeClientProps {
  heroData: HeroData;
  testimonialsData: TestimonialsData;
  projects: Project[];
  locale: string;
}

export function HomeClient({ heroData, testimonialsData, projects, locale }: HomeClientProps) {
  const {scrollY} = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  
  return (
    <main className="relative overflow-hidden">
      <Spotlight />
      
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <motion.h1 
                style={{y: y1}} 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
              >
                {heroData.title}
              </motion.h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <motion.p 
                style={{y: y2}} 
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
              >
                {heroData.subtitle}
              </motion.p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <MagneticButton href={`/${locale}/projects`} className="group inline-flex h-14 items-center rounded-2xl bg-primary px-8 text-white hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                  <span className="mr-2">{heroData.ctaProjects}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </MagneticButton>
                <MagneticButton href={`/${locale}/contact`} className="inline-flex h-14 items-center rounded-2xl border-2 border-border px-8 hover:bg-muted/50 transition-all duration-300 font-semibold text-lg">
                  {heroData.ctaContact}
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="bg-gradient-to-b from-muted/20 to-background">
        <Container>
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Mes services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Deux expertises complémentaires pour votre présence en ligne
                </p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal delay={0.1}>
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-blue-50/50 dark:to-blue-950/20 p-8 border border-border/50 hover:border-blue-500/20 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">WordPress sur-mesure</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Sites vitrines performants, SEO technique et design responsive. De la conception au déploiement.
                    </p>
                    <Link href={`/${locale}/services/wordpress`} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:underline">
                      En savoir plus
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-green-50/50 dark:to-green-950/20 p-8 border border-border/50 hover:border-green-500/20 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Réservations restaurant</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Système complet de réservation en ligne. Notifications, acomptes et réduction du no-show.
                    </p>
                    <Link href={`/${locale}/services/restaurant-reservation`} className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:underline">
                      En savoir plus
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Projets récents</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Découvrez quelques réalisations qui illustrent mon approche
                </p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <Reveal key={project.slug} delay={0.1 * index}>
                  <ProjectCard {...project} />
                </Reveal>
              ))}
            </div>
            
            <Reveal>
              <div className="text-center">
                <Link href={`/${locale}/projects`} className="inline-flex h-12 items-center rounded-2xl border border-border px-8 hover:bg-muted/50 transition-all duration-300 font-semibold">
                  Voir tous les projets
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{testimonialsData.title}</h2>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonialsData.items.map((item: {name: string; role: string; quote: string}, idx: number) => (
                <Reveal key={item.name} delay={0.1 * idx}>
                  <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-muted/20 p-8 border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <div className="text-4xl text-primary mb-4 opacity-50">"</div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">{item.quote}</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">{item.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-12 border border-primary/20">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discutons ensemble de vos besoins et trouvons la solution qui vous correspond
                </p>
                <MagneticButton href={`/${locale}/contact`} className="inline-flex h-14 items-center rounded-2xl bg-primary px-10 text-white hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                  Demander un devis gratuit
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
