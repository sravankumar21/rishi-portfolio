"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Tag,
  X,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function FeaturedCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card-hover glass group relative flex w-full flex-col overflow-hidden rounded-2xl text-left md:flex-row"
    >
      {project.image ? (
        <div className="relative h-52 w-full shrink-0 overflow-hidden md:h-auto md:w-2/5">
            <Image
              src={project.image}
              alt={`${project.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/60 md:bg-gradient-to-r md:from-transparent md:to-surface" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-brand">
          <ChefHat className="h-3.5 w-3.5" />
          {project.tagline}
        </div>
        <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">{project.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-fill-weak px-2.5 py-1 text-[11px] font-medium text-muted"
            >
              {tech}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            See the craft
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
  onRestoreFocus,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
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
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
      onRestoreFocus?.();
    };
  }, [onClose, onPrev, onNext, onRestoreFocus]);

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
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 48, scale: 0.98 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 48, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative h-48 w-full shrink-0 bg-canvas sm:h-56">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand/20 to-brand-2/10">
              <ChefHat className="h-14 w-14 text-brand/60" />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-7 sm:p-9">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand">
              {project.tagline}
            </p>
            <h3
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-semibold text-fg sm:text-3xl"
            >
              {project.name}
            </h3>
          </div>

          {project.craft ? (
            <div className="flex gap-3.5 rounded-2xl border border-line bg-fill-weak p-5">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-brand-2" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-2">
                  Why it matters
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.craft}</p>
              </div>
            </div>
          ) : null}

          <div>
            <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.15em] text-faint">
              What I do
            </h4>
            <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm text-muted">
                <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
                {feature}
              </li>
            ))}
          </ul>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-faint">
              <Tag className="h-3.5 w-3.5" />
              Discipline
            </span>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-fill-weak px-2.5 py-1 text-[11px] font-medium text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="glass absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-fill-hover"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="absolute bottom-4 right-4 hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-fg"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-fg"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const visible = useMemo(() => projects, []);
  const featured = visible.filter((p) => p.image);

  const openProject = (project: Project) => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setActiveIndex(projects.findIndex((p) => p.name === project.name));
  };

  const goTo = useCallback((dir: 1 | -1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + dir + projects.length) % projects.length;
    });
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);
  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section id="projects" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Signature Creations"
          title="The craft behind the plate"
          description="Four areas of my kitchen craft — from live event showpieces to high-volume banquet production. Select any card to read more."
        />

        <div className="mt-14 space-y-6">
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
            onPrev={() => goTo(-1)}
            onNext={() => goTo(1)}
            onRestoreFocus={() => lastFocusedRef.current?.focus()}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}