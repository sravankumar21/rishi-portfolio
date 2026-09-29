"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Briefcase, ChevronDown, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface ExpCardProps {
  exp: (typeof experiences)[number];
  index: number;
}

function ExpCard({ exp, index }: ExpCardProps) {
  const [open, setOpen] = useState(index === 0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="group relative pl-14 sm:pl-44">
      {/* Marker */}
      <div className="absolute left-[21px] top-7 sm:left-[145px]">
        <span
          className={cn(
            "relative flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 transition-colors",
            open || exp.current
              ? "border-brand bg-brand shadow-brand"
              : "border-line-strong bg-canvas group-hover:border-brand/60",
          )}
        >
          {exp.current && (
            <span className="absolute inline-flex h-3.5 w-3.5 animate-ping rounded-full bg-brand opacity-40" />
          )}
        </span>
      </div>

      {/* Time rail label */}
      <div className="absolute left-0 top-8 hidden w-32 -translate-y-1/2 text-right sm:block">
        <p className="text-xs tabular-nums text-muted">{exp.period}</p>
      </div>

      <div
        className={cn(
          "card-surface card-hover rounded-2xl",
          open && "border-line-strong",
        )}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full flex-col gap-2 p-5 text-left sm:p-6"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/30 to-brand-2/20 text-brand">
                <Briefcase className="h-4 w-4" />
              </span>
              <div>
                <p className="flex items-center gap-2 font-display text-base font-semibold text-fg">
                  {exp.role}
                  {exp.current && (
                    <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-400/30">
                      Current
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted">
                  {exp.company} · <span className="text-faint">{exp.type}</span>
                </p>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-faint transition-transform duration-300",
                open && "rotate-180 text-brand",
              )}
            />
          </div>

          <p className="flex flex-wrap items-center gap-x-4 gap-y-1 pl-[46px] text-xs text-faint">
            <span className="tabular-nums sm:hidden">{exp.period}</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {exp.location}
            </span>
          </p>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={reduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-5 border-t border-line px-5 pb-6 pt-5 sm:px-6">
                <p className="text-sm leading-relaxed text-muted">{exp.summary}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted">
                      <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-fill-weak px-2.5 py-1 text-[11px] font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career"
          title="Professional kitchen experience"
          description="Luxury 5-star hotel and international resort kitchens in the UAE and India, plus multi-departmental hospitality training."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* timeline rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[28px] top-2 w-px overflow-hidden sm:left-[152px]"
          >
            <span className="block h-full w-px bg-line" />
            <motion.span
              className="absolute inset-x-0 top-0 block w-px bg-gradient-to-b from-brand via-brand/60 to-transparent"
              initial={reduceMotion ? { height: "100%" } : { height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Reveal key={exp.role + exp.company} delay={index * 0.05}>
                <ExpCard exp={exp} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}