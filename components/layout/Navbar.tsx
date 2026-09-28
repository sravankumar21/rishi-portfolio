"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  ChefHat,
  GraduationCap,
  Home,
  Languages,
  Mail,
  Menu,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/useActiveSection";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Expertise", icon: Sparkles },
  { id: "tools", label: "Toolkit", icon: Wrench },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "languages", label: "Languages", icon: Languages },
  { id: "projects", label: "Creations", icon: ChefHat },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

function Brand() {
  return (
    <a href="#home" className="group flex items-center gap-3 rounded-full">
      <span className="glow-brand flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2/70 text-sm font-bold text-white">
        {profile.initials}
      </span>
      <span className="hidden font-display text-sm font-semibold tracking-tight text-fg sm:block">
        {profile.firstName} {profile.lastName}
      </span>
    </a>
  );
}

function DesktopRail({ active }: { active: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <nav
      aria-label="Primary"
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 xl:block"
    >
      <ul className="glass-strong flex flex-col justify-center gap-0.5 rounded-full p-1.5 shadow-lg shadow-black/30">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                aria-label={item.label}
                title={item.label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-fill-hover ring-1 ring-line-strong"
                    transition={
                      reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }
                    }
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    isActive ? "text-brand" : "text-muted group-hover:text-fg",
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={isActive ? 2.2 : 1.8} />
                </span>

                <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-elevated px-2.5 py-1 text-[11px] font-medium text-fg opacity-0 shadow-lg shadow-black/20 transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const handleSelect = () => setOpen(false);

  return (
    <>
      {/* Top bar — used below xl (side rail takes over on desktop) */}
      <header className="fixed inset-x-0 top-0 z-50 xl:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Brand />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-fg"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
              <motion.nav
                id="mobile-nav"
                aria-label="Mobile"
                className="glass-strong fixed inset-x-3 top-20 z-50 rounded-3xl p-4 xl:hidden"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: -12, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 380, damping: 30 },
                  },
                }}
              >
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = active === item.id;
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={handleSelect}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                            isActive ? "bg-fill-hover text-fg" : "text-muted hover:bg-fill-soft hover:text-fg",
                          )}
                        >
                          <Icon className="h-4 w-4 text-brand" />
                          {item.label}
                          {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand" />}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="#contact"
                  onClick={handleSelect}
                  className="mt-3 flex items-center justify-center rounded-2xl bg-brand px-4 py-3 text-sm font-semibold text-white"
                >
                  Let&apos;s talk
                </a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Fixed theme toggle for desktop (right top) */}
      <div className="fixed right-4 top-4 z-50 hidden xl:block">
        <ThemeToggle />
      </div>

      <DesktopRail active={active} />
    </>
  );
}