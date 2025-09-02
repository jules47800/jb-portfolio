"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BarChart3, Calendar, Users, Settings, Bell, FileText, TrendingUp, Clock } from "lucide-react";
import { ReservationDemo } from "./ReservationDemo";
import { ReservationStats } from "./ReservationStats";

interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  color: string;
  features: string[];
}

export function ReservationCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const slides: CarouselSlide[] = [
    {
      id: "dashboard",
      title: "Dashboard Analytics",
      subtitle: "Visualisez vos performances en temps réel",
      icon: <BarChart3 className="w-8 h-8" />,
      component: <ReservationStats />,
      color: "from-blue-500 to-purple-600",
      features: [
        "KPIs en temps réel",
        "Graphiques interactifs", 
        "Analyse des tendances",
        "Prévisions intelligentes"
      ]
    },
    {
      id: "management",
      title: "Gestion des Réservations",
      subtitle: "Interface complète pour gérer toutes vos réservations",
      icon: <Calendar className="w-8 h-8" />,
      component: <ReservationDemo />,
      color: "from-green-500 to-emerald-600",
      features: [
        "Filtrage avancé",
        "Actions en un clic",
        "Recherche intelligente",
        "Statuts en temps réel"
      ]
    },
    {
      id: "customers",
      title: "Gestion Clientèle",
      subtitle: "Base de données clients complète avec historique",
      icon: <Users className="w-8 h-8" />,
      component: (
        <div className="bg-white dark:bg-card rounded-2xl border border-border/50 shadow-sm p-8 h-full flex flex-col justify-center">
          <div className="text-center space-y-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-950/20 dark:to-orange-900/20 rounded-full flex items-center justify-center">
              <Users className="w-16 h-16 text-orange-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Base de Données Clients</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Gérez vos clients, consultez leur historique de réservations, préférences et statistiques de fidélité. 
                Système CRM intégré avec segmentation automatique et suivi personnalisé.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-xl p-6 border border-orange-200/50">
                <div className="text-3xl font-bold text-orange-600 mb-2">1,247</div>
                <div className="text-sm font-medium text-foreground">Clients actifs</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-xl p-6 border border-green-200/50">
                <div className="text-3xl font-bold text-green-600 mb-2">4.8/5</div>
                <div className="text-sm font-medium text-foreground">Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-xl p-6 border border-blue-200/50">
                <div className="text-3xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-sm font-medium text-foreground">Fidélisation</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-xl p-6 border border-purple-200/50">
                <div className="text-3xl font-bold text-purple-600 mb-2">2.3x</div>
                <div className="text-sm font-medium text-foreground">Visites/mois</div>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-foreground font-medium">Profils clients détaillés</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-foreground font-medium">Historique complet des visites</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-foreground font-medium">Préférences alimentaires</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-foreground font-medium">Programme de fidélité</span>
              </div>
            </div>
          </div>
        </div>
      ),
      color: "from-orange-500 to-red-600",
      features: [
        "Profils clients détaillés",
        "Historique complet",
        "Préférences sauvegardées",
        "Programme de fidélité"
      ]
    },
    {
      id: "notifications",
      title: "Notifications & Rappels",
      subtitle: "Système automatisé de communication client",
      icon: <Bell className="w-8 h-8" />,
      component: (
        <div className="bg-white dark:bg-card rounded-2xl border border-border/50 shadow-sm p-8 h-full flex flex-col justify-center">
          <div className="text-center space-y-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-950/20 dark:to-purple-900/20 rounded-full flex items-center justify-center relative">
              <Bell className="w-16 h-16 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">3</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Notifications Automatisées</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Confirmations, rappels et follow-ups automatiques par SMS et email pour optimiser votre service client. 
                Réduisez les no-shows de 60% et augmentez la satisfaction.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>
                
                <div className="space-y-8">
                  {/* Confirmation */}
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center border-4 border-green-500 relative z-10">
                      <span className="text-green-600 font-bold text-sm">1</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-xl p-6 border border-green-200/50">
                      <h4 className="text-xl font-bold text-foreground mb-2">Confirmation instantanée</h4>
                      <p className="text-muted-foreground mb-3">SMS + Email envoyés immédiatement après la réservation</p>
                      <div className="text-sm text-green-600 font-medium">✓ Taux de confirmation: 98%</div>
                    </div>
                  </div>
                  
                  {/* Reminder */}
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/20 rounded-full flex items-center justify-center border-4 border-blue-500 relative z-10">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-xl p-6 border border-blue-200/50">
                      <h4 className="text-xl font-bold text-foreground mb-2">Rappel 24h avant</h4>
                      <p className="text-muted-foreground mb-3">Rappel personnalisé avec possibilité de modification</p>
                      <div className="text-sm text-blue-600 font-medium">✓ Réduction no-shows: 60%</div>
                    </div>
                  </div>
                  
                  {/* Follow-up */}
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-950/20 rounded-full flex items-center justify-center border-4 border-orange-500 relative z-10">
                      <span className="text-orange-600 font-bold text-sm">3</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-xl p-6 border border-orange-200/50">
                      <h4 className="text-xl font-bold text-foreground mb-2">Follow-up satisfaction</h4>
                      <p className="text-muted-foreground mb-3">Enquête de satisfaction et invitation à revenir</p>
                      <div className="text-sm text-orange-600 font-medium">✓ Taux de retour: +45%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      color: "from-purple-500 to-pink-600",
      features: [
        "SMS automatiques",
        "Emails personnalisés",
        "Rappels intelligents",
        "Enquêtes de satisfaction"
      ]
    },
    {
      id: "reports",
      title: "Rapports & Exports",
      subtitle: "Générez des rapports détaillés pour votre gestion",
      icon: <FileText className="w-8 h-8" />,
      component: (
        <div className="bg-white dark:bg-card rounded-2xl border border-border/50 shadow-sm p-8 h-full flex flex-col justify-center">
          <div className="text-center space-y-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-950/20 dark:to-indigo-900/20 rounded-full flex items-center justify-center">
              <FileText className="w-16 h-16 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Rapports Personnalisés</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Exportez vos données, générez des rapports financiers et analysez vos performances sur mesure. 
                Tableaux de bord automatisés et exports programmables.
              </p>
            </div>
            
            {/* Report Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group cursor-pointer">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-2xl hover:scale-105 transition-all duration-300 border border-blue-200/50 hover:border-blue-300">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-3">Financier</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Chiffre d'affaires</li>
                    <li>• Ticket moyen</li>
                    <li>• Évolution mensuelle</li>
                    <li>• Prévisions</li>
                  </ul>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-2xl hover:scale-105 transition-all duration-300 border border-green-200/50 hover:border-green-300">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-3">Clientèle</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Profils clients</li>
                    <li>• Segmentation</li>
                    <li>• Fidélisation</li>
                    <li>• Satisfaction</li>
                  </ul>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-2xl hover:scale-105 transition-all duration-300 border border-purple-200/50 hover:border-purple-300">
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-3">Activité</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Taux d'occupation</li>
                    <li>• Heures de pointe</li>
                    <li>• Jours populaires</li>
                    <li>• Performance équipe</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl font-bold text-foreground mb-6">Formats d'export disponibles</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-950/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xs">XLS</span>
                  </div>
                  <span className="text-foreground font-medium">Excel</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-950/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xs">PDF</span>
                  </div>
                  <span className="text-foreground font-medium">PDF</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">CSV</span>
                  </div>
                  <span className="text-foreground font-medium">CSV</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-950/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xs">API</span>
                  </div>
                  <span className="text-foreground font-medium">API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      color: "from-indigo-500 to-blue-600",
      features: [
        "Exports Excel/PDF",
        "Rapports financiers",
        "Analyses personnalisées",
        "Planification automatique"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Système Complet de Réservation
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez toutes les fonctionnalités de notre solution professionnelle pour restaurants
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-gradient-to-br from-background via-muted/5 to-background rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
        
        {/* Slide Header */}
        <div className={`bg-gradient-to-r ${slides[currentSlide].color} p-8 text-white relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  {slides[currentSlide].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h3>
                  <p className="text-white/90 text-lg">{slides[currentSlide].subtitle}</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {slides[currentSlide].features.map((feature, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="p-8">
          <div className="transition-all duration-500 ease-in-out min-h-[600px] max-h-[800px] overflow-y-auto">
            {slides[currentSlide].component}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all duration-200 group"
        >
          <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all duration-200 group"
        >
          <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary text-primary-foreground shadow-lg scale-110' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-3 px-4 py-3">
              <div className={`p-2 rounded-lg transition-colors ${
                index === currentSlide 
                  ? 'bg-white/20' 
                  : 'bg-background/50 group-hover:bg-background/80'
              }`}>
                {slide.icon}
              </div>
              <div className="text-left hidden sm:block">
                <div className="font-semibold text-sm">{slide.title}</div>
                <div className={`text-xs ${
                  index === currentSlide 
                    ? 'text-primary-foreground/80' 
                    : 'text-muted-foreground'
                }`}>
                  {slide.features.length} fonctionnalités
                </div>
              </div>
            </div>
            
            {/* Active indicator */}
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 max-w-md mx-auto">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>Fonctionnalité {currentSlide + 1} sur {slides.length}</span>
          <span>{Math.round(((currentSlide + 1) / slides.length) * 100)}%</span>
        </div>
        <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${slides[currentSlide].color} transition-all duration-500 ease-out`}
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
