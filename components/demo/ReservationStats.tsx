"use client";

import React, { useState } from "react";
import { Calendar, TrendingUp, Users, Clock, AlertCircle, CheckCircle, BarChart3, PieChart } from "lucide-react";

interface StatCard {
  label: string;
  value: string | number;
  color?: string;
  trend?: string;
  icon?: React.ReactNode;
}

const kpiData: StatCard[] = [
  { label: "Total réservations", value: "128", icon: <Calendar className="w-5 h-5" />, color: "text-primary" },
  { label: "Taux d&apos;occupation moyen", value: "56.6%", icon: <BarChart3 className="w-5 h-5" />, color: "text-green-600" },
  { label: "Taux de No-Show", value: "2.3%", icon: <AlertCircle className="w-5 h-5" />, color: "text-red-600" },
  { label: "Jours moyens entre visites", value: "8.3", icon: <Clock className="w-5 h-5" />, color: "text-blue-600" },
  { label: "Taux de rétention (30j)", value: "0%", icon: <TrendingUp className="w-5 h-5" />, color: "text-orange-600" }
];

const occupancyData = [
  { date: "3 août 2025", rate: 0, color: "text-gray-500" },
  { date: "5 août 2025", rate: 88, color: "text-green-600" },
  { date: "6 août 2025", rate: 68, color: "text-orange-500" },
  { date: "7 août 2025", rate: 92, color: "text-green-600" },
  { date: "8 août 2025", rate: 72, color: "text-orange-500" },
  { date: "9 août 2025", rate: 147, color: "text-green-600" }
];

const weekdayData = [
  { day: "Mardi", reservations: 28, avgSize: 3.2 },
  { day: "Mercredi", reservations: 27, avgSize: 3.0 },
  { day: "Jeudi", reservations: 25, avgSize: 3.4 },
  { day: "Vendredi", reservations: 20, avgSize: 2.9 },
  { day: "Samedi", reservations: 29, avgSize: 2.9 }
];

const groupSizeData = [
  { size: "1", count: 1 },
  { size: "2", count: 71 },
  { size: "3", count: 15 },
  { size: "4", count: 39 },
  { size: "5", count: 3 },
  { size: "6", count: 3 },
  { size: "7", count: 2 },
  { size: "8", count: 3 },
  { size: "9", count: 1 }
];

const sourceData = [
  { source: "Site Web", count: 86, percentage: 67.2 },
  { source: "Manuelle (Admin)", count: 42, percentage: 32.8 }
];

export function ReservationStats() {
  const [selectedPeriod, setSelectedPeriod] = useState("last_30_days");
  const [isVisible, setIsVisible] = useState(false);

  const maxGroupSize = Math.max(...groupSizeData.map(g => g.count));
  const maxWeekday = Math.max(...weekdayData.map(w => w.reservations));

  // Animation d&apos;apparition
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Header avec sélecteur de période */}
      <div className="bg-white dark:bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Statistiques Avancées</h3>
            <p className="text-muted-foreground">Analyse détaillée des performances du système de réservation</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
            >
              <option value="last_7_days">7 derniers jours</option>
              <option value="last_30_days">30 derniers jours</option>
              <option value="last_90_days">90 derniers jours</option>
              <option value="this_year">Cette année</option>
            </select>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Données en temps réel
            </div>
          </div>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-white dark:bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-muted/50 ${kpi.color}`}>
                {kpi.icon}
              </div>
            </div>
            <div className="space-y-1">
              <div className={`text-2xl font-bold ${kpi.color}`}>
                {kpi.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {kpi.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Taux d&apos;occupation */}
      <div className="bg-white dark:bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
        <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Taux d&apos;Occupation (30 derniers jours)
        </h4>
        
        <div className="space-y-4">
          {occupancyData.map((day, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
              <div className="font-medium text-foreground">{day.date}</div>
              <div className="flex items-center gap-4">
                <div className="w-32 bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      day.rate >= 80 ? 'bg-green-500' : 
                      day.rate >= 50 ? 'bg-orange-500' : 
                      day.rate > 0 ? 'bg-red-500' : 'bg-gray-400'
                    }`}
                    style={{ width: `${Math.min(day.rate, 100)}%` }}
                  />
                </div>
                <div className={`font-semibold min-w-[60px] text-right ${day.color}`}>
                  {day.rate}%
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Moyenne (jours avec réservations)</span>
              <span className="font-bold text-primary text-lg">93.4%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid pour les graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Répartition par jour */}
        <div className="bg-white dark:bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
          <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Répartition par Jour de la Semaine
          </h4>
          
          <div className="space-y-4">
            {weekdayData.map((day, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{day.day}</span>
                  <span className="text-muted-foreground">{day.reservations} réservations</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500"
                      style={{ width: `${(day.reservations / maxWeekday) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground min-w-[40px]">
                    {day.avgSize} pers.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Taille des groupes */}
        <div className="bg-white dark:bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
          <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Répartition par Taille de Groupe
          </h4>
          
          <div className="space-y-3">
            {groupSizeData.map((group, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 text-center font-medium text-foreground">
                  {group.size} pers.
                </div>
                <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-500"
                    style={{ width: `${(group.count / maxGroupSize) * 100}%` }}
                  />
                </div>
                <div className="w-8 text-right text-sm font-semibold text-foreground">
                  {group.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sources et Résumé */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Source des réservations */}
        <div className="bg-white dark:bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
          <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-primary" />
            Source des Réservations
          </h4>
          
          <div className="space-y-4">
            {sourceData.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{source.source}</span>
                  <span className="text-sm text-muted-foreground">{source.percentage}%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        index === 0 ? 'bg-primary' : 'bg-secondary'
                      }`}
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-foreground min-w-[30px]">
                    {source.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Résumé */}
        <div className="bg-white dark:bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
          <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Résumé de Performance
          </h4>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div>
                <div className="font-medium text-green-800 dark:text-green-200">Total réservations</div>
                <div className="text-sm text-green-600 dark:text-green-400">30 derniers jours</div>
              </div>
              <div className="text-2xl font-bold text-green-600">128</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div>
                <div className="font-medium text-blue-800 dark:text-blue-200">Taux d&apos;occupation</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Performance moyenne</div>
              </div>
              <div className="text-2xl font-bold text-blue-600">56.6%</div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <div>
                <div className="font-medium text-orange-800 dark:text-orange-200">No-Show</div>
                <div className="text-sm text-orange-600 dark:text-orange-400">3 réservations non honorées</div>
              </div>
              <div className="text-2xl font-bold text-orange-600">2.3%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer avec informations */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-semibold text-foreground">Système de Gestion Le Margo</div>
            <div className="text-sm text-muted-foreground">
              Dashboard analytics développé sur-mesure pour optimiser les réservations
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Dernière mise à jour : il y a 5 min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
