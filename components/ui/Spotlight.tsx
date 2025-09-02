"use client";
import {useEffect, useRef, useState} from "react";

export function Spotlight({className = ""}: {className?: string}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({x: 0, y: 0});

  useEffect(() => {
    function onMove(e: MouseEvent) {
      setPos({x: e.clientX, y: e.clientY});
    }
    window.addEventListener("mousemove", onMove, {passive: true});
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed inset-0 -z-10 ${className}`}
      aria-hidden
    >
      <div
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
        }}
        className="absolute h-[400px] w-[400px] rounded-full opacity-40 blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,125,188,0.35)_0%,_transparent_60%)]" />
      </div>
    </div>
  );
}


