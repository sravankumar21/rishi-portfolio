"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    let stored: Theme = "light";
    try {
      const value = localStorage.getItem("theme");
      stored = value === "dark" ? "dark" : "light";
    } catch {
      /* private mode */
    }
    document.documentElement.dataset.theme = stored;
    // Deferred to avoid cascade renders while syncing from persistence.
    const raf = requestAnimationFrame(() => setTheme(stored));
    return () => cancelAnimationFrame(raf);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode */
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === "light"}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition-colors hover:text-brand ${className}`}
    >
      {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
      <span className="sr-only">Toggle light and dark theme</span>
    </button>
  );
}