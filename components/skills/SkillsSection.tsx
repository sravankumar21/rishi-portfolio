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

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 2) * 0.07}>
              <div className="card-surface flex h-full flex-col rounded-2xl p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold text-fg">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-faint">{category.blurb}</p>

                <ul className="mt-5 grid gap-x-8 gap-y-2.5 border-t border-line pt-5 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className={cn(
                        "text-sm leading-snug",
                        skill.featured ? "text-fg" : "text-muted",
                      )}
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Primary strengths */}
        <Reveal delay={0.1} className="mt-5">
          <div className="card-surface rounded-2xl p-6 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand">
              Signature strengths
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              Garde manger and cold kitchen production, paired with fine-dining
              plating - extended into fruit and vegetable carving for guest events
              and banquet production at volume, all run to HACCP food-safety
              standards.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
