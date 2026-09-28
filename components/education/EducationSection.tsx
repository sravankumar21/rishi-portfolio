import { BadgeCheck, GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function EducationSection() {
  return (
    <section id="education" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="Education"
          title="Formal hospitality training"
          description="A professional qualification in hotel management and catering science, completed alongside multi-departmental training on the floor."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-6">
          {education.map((edu, index) => (
            <Reveal key={edu.institution} delay={index * 0.08}>
              <article className="card-hover glass relative overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-12 sm:py-12">
                {/* soft ambient glows */}
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-2/10 blur-3xl"
                />

                <div className="relative">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand-2/20 text-brand ring-1 ring-brand/30">
                    <GraduationCap className="h-8 w-8" aria-hidden="true" />
                  </span>

                  {edu.badge ? (
                    <span
                      className={
                        edu.completed
                          ? "mt-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-400 ring-1 ring-emerald-400/30"
                          : "mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand ring-1 ring-brand/40"
                      }
                    >
                      {edu.completed ? (
                        <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : null}
                      {edu.badge}
                    </span>
                  ) : null}

                  <p className="mt-6 font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-brand">
                    {edu.institution}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold text-fg sm:text-3xl">
                    {edu.degree}
                  </h3>

                  {edu.field ? (
                    <p className="mt-2 text-base text-muted">{edu.field}</p>
                  ) : null}

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-line pt-6">
                    {edu.period ? (
                      <span className="font-mono text-xs text-muted">{edu.period}</span>
                    ) : null}
                    {edu.score ? (
                      <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
                        {edu.score}
                      </span>
                    ) : null}
                  </div>

                  {edu.highlights.length > 0 ? (
                    <ul className="mx-auto mt-8 max-w-xl space-y-3 text-left">
                      {edu.highlights.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
