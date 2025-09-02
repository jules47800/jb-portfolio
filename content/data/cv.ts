export const identity = {
  name: "Jules Bursens",
  age: "21 ans",
  location: "Bordeaux (33800)",
  email: "jules47800@gmail.com",
  phone: "07 68 99 50 76",
  interests: ["Basket-ball", "sports de combat (MMA)", "musique", "graphic design"],
} as const;

export const education = [
  {
    title: "Baccalauréat (mention Assez Bien)",
    place: "Lycée Val de Garonne, Marmande",
    period: "2018–2021",
  },
  {
    title: "IUT Informatique",
    place: "La Rochelle",
    period: "2021–2022 (arrêté)",
  },
  {
    title: "Bachelor Chef de Projet Digital (3ᵉ année)",
    place: "ESD Bordeaux",
    period: "2022–2025",
  },
] as const;

export const experiences = [
  {
    title: "Stage Webmaster",
    company: "Crédit Agricole",
    details: "Gestion de contenu sur CMS interne, optimisation SEO, maintenance, collaboration avec équipes métiers & techniques.",
  },
  {
    title: "Chef de projet Web Junior",
    company: "Kairos Agency",
    details: "Gestion de projet digital, coordination, suivi clients.",
  },
  {
    title: "Vendeur bar associatif",
    company: "Soumensac (3 mois)",
    details: "Organisation et gestion d’un bar associatif.",
  },
  {
    title: "Employé restauration",
    company: "McDonald’s (2020–2023)",
    details: "Travail en équipe, gestion caisse, relation client.",
  },
] as const;

export const schoolProjects = [
  {
    title: "Digital Event 2023 — Web App React",
    details: "Application pour drones terrestres (React, API, prototypage).",
  },
  {
    title: "Projet Web Design (Figma)",
    details: "Design system complet + prototypage application mobile.",
  },
  {
    title: "Projet développement / web design",
    details: "Prototypage puis intégration d’un site internet pour une chanteuse.",
  },
  {
    title: "Projet Social Media",
    details: "Stratégie de communication social media (charte éditoriale, planning, analytics).",
  },
] as const;

export const skills = {
  languages: ["HTML", "CSS", "JavaScript", "React", "PHP", "SQL"],
  cms: ["WordPress (thèmes personnalisés, optimisation SEO)"],
  seo: ["GA4", "Search Console", "Ahrefs", "Screaming Frog"],
  designUx: ["Figma", "Canva"],
  project: ["GitHub", "Trello", "Méthodologie Agile"],
  soft: ["relationnel", "rigueur", "autonomie", "travail en équipe"],
} as const;


