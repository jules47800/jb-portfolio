"use client";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl border bg-muted animate-pulse" />
    );
  }

  return (
    <button
      aria-label={isDark ? "Passer au mode clair" : "Passer au mode sombre"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative h-9 w-9 rounded-xl border border-border hover:border-primary/20 bg-background hover:bg-muted/50 transition-all duration-200 flex items-center justify-center overflow-hidden"
    >
      {/* Sun Icon */}
      <svg
        className={`absolute w-4 h-4 transition-all duration-300 ${
          isDark 
            ? 'rotate-90 scale-0 opacity-0' 
            : 'rotate-0 scale-100 opacity-100'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      {/* Moon Icon */}
      <svg
        className={`absolute w-4 h-4 transition-all duration-300 ${
          isDark 
            ? 'rotate-0 scale-100 opacity-100' 
            : '-rotate-90 scale-0 opacity-0'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
    </button>
  );
}


