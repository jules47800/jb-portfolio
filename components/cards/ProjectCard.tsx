"use client";
import Link from "next/link";
import {motion, useMotionValue, useSpring} from "framer-motion";
import Image from "next/image";

export function ProjectCard({slug, title, tags, cover, summary, showSummaryOverlay = false}: {
  slug: string; 
  title: string; 
  tags?: string[]; 
  cover?: string;
  summary?: string;
  showSummaryOverlay?: boolean;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rx = useSpring(rotateX, {stiffness: 200, damping: 20, mass: 0.5});
  const ry = useSpring(rotateY, {stiffness: 200, damping: 20, mass: 0.5});

  function onMove(e: React.MouseEvent) {
    const target = e.currentTarget as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;
    rotateY.set(percentX * 6);
    rotateX.set(-percentY * 6);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <Link href={`./projects/${slug}`} className="block">
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{rotateX: rx, rotateY: ry, transformPerspective: 900}}
        className="group rounded-2xl border overflow-hidden hover:shadow-xl transition-shadow will-change-transform relative"
      >
        {cover ? (
          <div className="aspect-video overflow-hidden relative">
            <Image src={cover} alt="" width={1280} height={720} className="h-full w-full object-cover" />
            {/* Summary overlay - only on image area and follows 3D transform */}
            {showSummaryOverlay && summary && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                <p className="text-white text-sm leading-relaxed">
                  {summary}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-[#E6F4FF] to-[#F8FBFF] dark:from-slate-800 dark:to-slate-900 relative" aria-hidden>
            {/* Tooltip-style overlay for projects without covers */}
            {showSummaryOverlay && summary && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 max-w-xs">
                <p className="leading-relaxed">{summary}</p>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
              </div>
            )}
          </div>
        )}
        <div className="p-4">
          <h3 className="font-medium">{title}</h3>
          {tags?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full bg-accent px-2 py-0.5 text-xs">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>
    </Link>
  );
}


