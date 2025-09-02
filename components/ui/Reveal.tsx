"use client";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

export function Reveal({children, delay = 0, className = ""}: {children: React.ReactNode; delay?: number; className?: string}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {amount: 0.2, once: true});
  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, y: 12}}
      animate={inView ? {opacity: 1, y: 0} : {}}
      transition={{delay, duration: 0.5, ease: "easeOut"}}
      className={className}
    >
      {children}
    </motion.div>
  );
}


