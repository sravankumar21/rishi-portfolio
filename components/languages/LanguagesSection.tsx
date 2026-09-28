import { Languages as LanguagesIcon } from "lucide-react";
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

        <Reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((language) => (
            <div key={language.name} className="card-hover glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand/25 to-brand-2/15 text-brand">
                  <LanguagesIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-fg">{language.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-brand">
                    {language.proficiency}
                  </p>
                </div>
              </div>

              <div
                className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-fill-strong"
                role="img"
                aria-label={`${language.name}: ${language.proficiency}`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-brand-2"
                  style={{ width: `${language.level}%` }}
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
