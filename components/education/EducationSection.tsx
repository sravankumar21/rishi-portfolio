import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function EducationSection() {
  return (
    <section id="education" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title="Formal hospitality training"
          description="A professional qualification in hotel management and catering science, alongside multi-departmental training on the floor."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {education.map((edu, index) => (
            <Reveal key={edu.institution} delay={index * 0.08}>
              <div className="card-hover glass relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-6">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/10 blur-2xl"
                />
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand/30 to-brand-2/20 text-brand">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  {edu.badge ? (
                    <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brand ring-1 ring-brand/40">
                      {edu.badge}
                    </span>
                  ) : null}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-lg font-semibold text-fg">{edu.degree}</h3>
                  <p className="text-sm text-muted">{edu.field}</p>
                  <p className="text-xs text-faint">{edu.shortInstitution}</p>
                </div>

                <div className="flex items-center justify-between gap-2 border-t border-line pt-4">
                  <span className="font-mono text-xs text-muted">{edu.period}</span>
                  <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand">
                    {edu.score}
                  </span>
                </div>

                <ul className="space-y-1.5">
                  {edu.highlights.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted">
                      <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}