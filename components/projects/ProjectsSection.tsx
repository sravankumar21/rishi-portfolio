"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChefHat, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function FeaturedCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card-surface card-hover group flex w-full flex-col overflow-hidden rounded-2xl text-left md:flex-row"
    >
      {project.image ? (
        <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-48 md:h-56 md:w-1/3">
          <Image
            src={project.image}
            alt={`${project.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* Unifies the stock photography to a single warm cast */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-brand/[0.08] mix-blend-soft-light"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-elevated/70 md:to-elevated" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-brand">
          {project.tagline}
        </p>
        <h3 className="font-display text-lg font-semibold text-fg sm:text-xl">
          {project.name}
        </h3>
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
          Read the craft
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
  onRestoreFocus,
}: {
  project: Project;
  onClose: () => void;
  onRestoreFocus?: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
      onRestoreFocus?.();
    };
  }, [onClose, onRestoreFocus]);

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        className="glass-strong relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[4/3] w-full shrink-0 bg-canvas sm:aspect-[16/9]">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-brand/[0.08] mix-blend-soft-light"
              />
            </>
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand/20 to-brand-2/10">
              <ChefHat className="h-14 w-14 text-brand/60" />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface to-transparent" />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-7 sm:p-9">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-brand">
            {project.tagline}
          </p>
          <h3
            id="project-modal-title"
            className="mt-2 font-display text-2xl font-semibold text-fg sm:text-3xl"
          >
            {project.name}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {project.craft}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-elevated/80 text-fg transition-colors hover:bg-fill-hover"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeName, setActiveName] = useState<string | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const featured = projects.filter((p) => p.image);
  const active = projects.find((p) => p.name === activeName) ?? null;

  const openProject = (project: Project) => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setActiveName(project.name);
  };

  const close = useCallback(() => setActiveName(null), []);

  return (
    <section id="projects" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Signature Creations"
          title="The craft behind the plate"
          description="Four areas of my kitchen craft - from live event showpieces to high-volume banquet production. Select any card to read more."
        />

        <div className="mt-12 space-y-4">
          {featured.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06}>
              <FeaturedCard project={project} onOpen={() => openProject(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <ProjectModal
            key={active.name}
            project={active}
            onClose={close}
            onRestoreFocus={() => lastFocusedRef.current?.focus()}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
