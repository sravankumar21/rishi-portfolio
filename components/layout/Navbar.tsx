"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/useActiveSection";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Expertise" },
  { id: "tools", label: "Toolkit" },
  { id: "education", label: "Education" },
  { id: "languages", label: "Languages" },
  { id: "projects", label: "Creations" },
  { id: "contact", label: "Contact" },
] as const;

function Brand() {
  return (
    <a href="#home" className="group flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2/70 text-sm font-bold text-white">
        {profile.initials}
      </span>
      <span className="font-display text-sm font-semibold tracking-tight text-fg sm:block">
        {profile.firstName} {profile.lastName}
      </span>
    </a>
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-line bg-elevated">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Brand />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative block px-2.5 py-1.5 text-sm font-medium transition-colors",
                        isActive
                          ? "text-brand after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-px after:bg-brand"
                          : "text-muted hover:text-fg",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-on-brand transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Let&apos;s talk
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
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
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={handleSelect}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "block rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-fill-soft text-brand"
                            : "text-muted hover:bg-fill-soft hover:text-fg",
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a
                href="#contact"
                onClick={handleSelect}
                className="mt-3 flex items-center justify-center rounded-2xl bg-brand px-4 py-3 text-sm font-semibold text-on-brand"
              >
                Let&apos;s talk
              </a>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
