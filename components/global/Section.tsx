import type {ReactNode} from "react";

export function Section({children, className = ""}: {children: ReactNode; className?: string}) {
  return <section className={`py-12 md:py-16 ${className}`}>{children}</section>;
}


