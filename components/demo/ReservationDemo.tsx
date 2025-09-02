"use client";

import React, { useState, useMemo } from "react";
import { Calendar, Clock, Users, Phone, Mail, Search, Filter, Edit, X, Trash2, AlertCircle } from "lucide-react";

interface Reservation {
  id: number;
  date: string;
  time: string;
  people: number;
  customer: {
    name: string;
    email?: string;
    phone: string;
  };
  status: "pending" | "confirmed" | "cancelled" | "no-show" | "completed";
  notes?: string;
  isAdminReservation?: boolean;
}

const mockReservations: Reservation[] = [
  {
    id: 306,
    date: "2025-09-09",
    time: "19:00",
    people: 2,
    customer: { name: "Christina Adams", email: "cadams3931591@live.co.uk", phone: "+33 6 30 21 35 95" },
    status: "confirmed",
    notes: "Huile de Colza - pas allergie, mais intolérance!"
  },
  {
    id: 351,
    date: "2025-09-10",
    time: "19:30",
    people: 2,
    customer: { name: "Moens", email: "chantalmoens30@icloud.com", phone: "+33 6 74 02 03 91" },
    status: "confirmed"
  },
  {
    id: 318,
    date: "2025-09-10",
    time: "20:00",
    people: 2,
    customer: { name: "Androve", phone: "0676559964" },
    status: "confirmed",
    notes: "Mamie qui arrive 45 minutes avant 🤤",
    isAdminReservation: true
  },
  {
    id: 346,
    date: "2025-09-11",
    time: "19:00",
    people: 2,
    customer: { name: "Befort Christine", email: "nutzbonnie@me.com", phone: "+33 5 53 40 65 41" },
    status: "confirmed",
    notes: "1 personne sans viande"
  },
  {
    id: 350,
    date: "2025-09-12",
    time: "19:00",
    people: 3,
    customer: { name: "Martin", phone: "0648376382" },
    status: "confirmed",
    notes: "Résa au tél en août",
    isAdminReservation: true
  },
  {
    id: 352,
    date: "2025-09-12",
    time: "19:30",
    people: 2,
    customer: { name: "Jennifer Russell", email: "jenniferrussellprivate@gmail.com", phone: "07974535130" },
    status: "confirmed",
    notes: "One person does not eat red meat but eats chicken and fish"
  }
];

const statusConfig = {
  pending: { label: "En attente", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  confirmed: { label: "Confirmé", color: "bg-green-100 text-green-800 border-green-200" },
  cancelled: { label: "Annulé", color: "bg-red-100 text-red-800 border-red-200" },
  "no-show": { label: "No-Show", color: "bg-orange-100 text-orange-800 border-orange-200" },
  completed: { label: "Terminée", color: "bg-blue-100 text-blue-800 border-blue-200" }
};

export function ReservationDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [reservations, setReservations] = useState(mockReservations);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredReservations = useMemo(() => {
    return reservations.filter(reservation => {
      const matchesSearch = !searchTerm || 
        reservation.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservation.customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservation.customer.phone.includes(searchTerm) ||
        reservation.id.toString().includes(searchTerm);
      
      const matchesDate = !dateFilter || reservation.date === dateFilter;
      const matchesStatus = !statusFilter || reservation.status === statusFilter;
      
      return matchesSearch && matchesDate && matchesStatus;
    });
  }, [reservations, searchTerm, dateFilter, statusFilter]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = date.toLocaleDateString('fr-FR', { weekday: 'short' });
    const dateFormatted = date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return { day, date: dateFormatted };
  };

  const handleStatusChange = (id: number, newStatus: Reservation['status']) => {
    setReservations(prev => 
      prev.map(res => res.id === id ? { ...res, status: newStatus } : res)
    );
  };

  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer définitivement cette réservation?')) {
      setReservations(prev => prev.filter(res => res.id !== id));
    }
  };

  return (
    <div className={`bg-white dark:bg-card rounded-2xl border border-border/50 shadow-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Header */}
      <div className="p-6 border-b border-border/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            Liste des réservations
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Démo interactive
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 border-b border-border/10 bg-gradient-to-r from-muted/20 to-muted/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">Recherche</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="search"
                placeholder="Nom, email, téléphone, ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Date</label>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-3 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Statut</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background transition-colors"
            >
              <option value="">Tous les statuts</option>
              <option value="pending">En attente</option>
              <option value="confirmed">Confirmé</option>
              <option value="cancelled">Annulé</option>
              <option value="no-show">No-Show</option>
              <option value="completed">Terminée</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {filteredReservations.length} réservation{filteredReservations.length > 1 ? 's' : ''} trouvée{filteredReservations.length > 1 ? 's' : ''}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium">
            <Filter className="w-4 h-4" />
            Appliquer les filtres
          </button>
        </div>
      </div>

      {/* Reservations List */}
      <div className="p-6">
        <div className="space-y-4">
          {filteredReservations.map((reservation, _) => {
            const { day, date } = formatDate(reservation.date);
            const statusStyle = statusConfig[reservation.status];
            
            return (
              <div 
                key={reservation.id} 
                className={`p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-200 hover:shadow-md ${
                  reservation.isAdminReservation ? 'bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/20' : 'bg-background'
                }`}
              >
                {/* Mobile/Desktop Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                  
                  {/* ID & Date */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col space-y-1">
                      <div className="text-xs font-medium text-muted-foreground">ID #{reservation.id}</div>
                      <div className="font-semibold text-foreground">{date}</div>
                      <div className="text-xs text-muted-foreground uppercase">{day}</div>
                    </div>
                  </div>
                  
                  {/* Time & People */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground">{reservation.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-foreground">{reservation.people} pers.</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Customer Info */}
                  <div className="lg:col-span-3">
                    <div className="space-y-2">
                      <div className="font-semibold text-foreground">{reservation.customer.name}</div>
                      {reservation.customer.email && (
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-3 h-3 text-muted-foreground" />
                          <a href={`mailto:${reservation.customer.email}`} className="text-muted-foreground hover:text-primary transition-colors truncate">
                            {reservation.customer.email}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-3 h-3 text-muted-foreground" />
                        <a href={`tel:${reservation.customer.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {reservation.customer.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status */}
                  <div className="lg:col-span-2">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${statusStyle.color}`}>
                      {statusStyle.label}
                    </span>
                  </div>
                  
                  {/* Notes */}
                  <div className="lg:col-span-2">
                    {reservation.notes ? (
                      <div className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
                        <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{reservation.notes}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">Aucune note</span>
                    )}
                  </div>
                  
                  {/* Actions */}
                  <div className="lg:col-span-1">
                    <div className="flex lg:flex-col gap-2">
                      <button 
                        className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      </button>
                      
                      {reservation.status === "confirmed" && (
                        <button 
                          onClick={() => handleStatusChange(reservation.id, "no-show")}
                          className="p-2 hover:bg-orange-100 dark:hover:bg-orange-950/20 rounded-lg transition-colors group"
                          title="Marquer comme No-Show"
                        >
                          <AlertCircle className="w-4 h-4 text-orange-600" />
                        </button>
                      )}
                      
                      <button 
                        onClick={() => handleStatusChange(reservation.id, "cancelled")}
                        className="p-2 hover:bg-red-100 dark:hover:bg-red-950/20 rounded-lg transition-colors group"
                        title="Annuler"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                      
                      <button 
                        onClick={() => handleDelete(reservation.id)}
                        className="p-2 hover:bg-red-100 dark:hover:bg-red-950/20 rounded-lg transition-colors group"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {filteredReservations.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted/50 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Aucune réservation trouvée</h4>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-border/10 bg-gradient-to-r from-muted/10 to-muted/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">
              {filteredReservations.length} réservation{filteredReservations.length > 1 ? 's' : ''} affichée{filteredReservations.length > 1 ? 's' : ''}
            </span>
            <div className="w-px h-4 bg-border"></div>
            <span className="text-muted-foreground">Total: {mockReservations.length}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">Système Le Margo</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Temps réel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
