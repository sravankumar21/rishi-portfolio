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

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 2) * 0.07}>
              <div className="h-full border-t border-line pt-6">
                <h3 className="font-display text-lg font-semibold text-fg">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm text-faint">{category.blurb}</p>

                <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
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
        <Reveal delay={0.1} className="mt-14">
          <div className="border-t border-line pt-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand">
              Signature strengths
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              My strongest work is in{" "}
              <span className="font-display text-lg text-fg">garde manger</span> and{" "}
              <span className="font-display text-lg text-fg">cold kitchen production</span>,
              paired with{" "}
              <span className="font-display text-lg text-fg">fine-dining plating</span> —
              extended into{" "}
              <span className="font-display text-lg text-fg">fruit and vegetable carving</span>{" "}
              for guest events and{" "}
              <span className="font-display text-lg text-fg">banquet production</span> at
              volume, all run to{" "}
              <span className="font-display text-lg text-fg">HACCP</span> food-safety
              standards.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
