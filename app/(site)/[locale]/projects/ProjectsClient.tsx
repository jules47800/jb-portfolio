"use client";
import {useState} from "react";
import {ProjectCard} from "@/components/cards/ProjectCard";
import {Reveal} from "@/components/ui/Reveal";

interface Project {
  slug: string;
  title: string;
  tags?: string[];
  cover?: string;
  summary?: string;
}

interface ProjectsClientProps {
  projects: Project[];
}

const filters = [
  { id: "all", label: "Tous les projets", color: "bg-primary/10 text-primary" },
  { id: "WordPress", label: "WordPress", color: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300" },
  { id: "Réservation", label: "Réservations", color: "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300" },
  { id: "Figma", label: "UX Design", color: "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300" },
  { id: "SEO", label: "SEO", color: "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300" },
];

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => 
        project.tags?.some(tag => tag.includes(activeFilter))
      );

  return (
    <>
      {/* Filters */}
      <div className="mb-12">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? filter.color + " shadow-lg scale-105"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={0.1 * index}>
            <ProjectCard {...project} showSummaryOverlay={true} />
          </Reveal>
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <Reveal>
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
            <p className="text-muted-foreground">
              Essayez un autre filtre pour découvrir d&apos;autres réalisations
            </p>
          </div>
        </Reveal>
      )}

      {/* Stats Section */}
      {activeFilter === "all" && (
        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Projets réalisés</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border/50">
              <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border/50">
              <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Technologies maîtrisées</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border/50">
              <div className="text-2xl font-bold text-orange-600 mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Année de création</div>
            </div>
          </div>
        </Reveal>
      )}
    </>
  );
}
