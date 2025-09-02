"use client";
import {useRef} from "react";

export function MagneticButton({children, className = "", href}: {children: React.ReactNode; className?: string; href: string}) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`;
    el.style.transition = "transform 0.1s ease-out";
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translate(0, 0)`;
    el.style.transition = "transform 0.4s ease-out";
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </a>
  );
}


