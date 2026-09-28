import { Sparkles } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="Core expertise"
          description="Hands-on capability across hot and cold production, presentation and the kitchen discipline that keeps a service safe and consistent."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 2) * 0.07}>
              <div className="card-hover glass flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-sm",
                      index % 2 === 0
                        ? "from-brand/30 to-brand-2/20 text-brand-2"
                        : "from-brand-2/25 to-brand/20 text-brand",
                    )}
                  >
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-fg">
                      {category.title}
                    </h3>
                    <p className="text-xs text-faint">{category.blurb}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                        skill.featured
                          ? "border border-brand/40 bg-brand/10 text-fg"
                          : "border border-line bg-fill-weak text-muted",
                      )}
                    >
                      {skill.featured && (
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Primary stack strip */}
          <Reveal
            delay={0.1}
            className="sm:col-span-2"
          >
            <div className="glass relative overflow-hidden rounded-2xl p-6">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
              />
              <p className="text-sm text-muted">
                <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
                  Signature strengths
                </span>
                My strongest work is in{" "}
                <span className="text-fg">garde manger</span> and{" "}
                <span className="text-fg">cold kitchen production</span>, paired with{" "}
                <span className="text-fg">fine-dining plating</span> — extended into{" "}
                <span className="text-fg">fruit and vegetable carving</span> for guest
                events and <span className="text-fg">banquet production</span> at volume,
                all run to <span className="text-fg">HACCP</span> food-safety standards.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}