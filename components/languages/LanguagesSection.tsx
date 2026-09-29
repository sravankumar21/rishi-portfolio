import { languages } from "@/data/languages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function LanguagesSection() {
  return (
    <section id="languages" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Languages"
          title="Guest-facing communication"
          description="Languages I use on the floor, in the brigade and with suppliers."
        />

        <Reveal className="mt-14 grid gap-x-12 gap-y-8 sm:grid-cols-3">
          {languages.map((language) => (
            <div key={language.name} className="border-t border-line pt-5">
              <p className="font-display text-xl font-semibold text-fg">
                {language.name}
              </p>
              <p className="mt-1.5 text-sm text-muted">{language.proficiency}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
