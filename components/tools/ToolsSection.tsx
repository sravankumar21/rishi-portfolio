import { toolGroups } from "@/data/tools";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ToolsSection() {
  return (
    <section id="tools" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kitchen Toolkit"
          title="The equipment I work with"
          description="The stations, storage systems and prep tools I operate every service."
        />

        <Reveal className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {toolGroups.map((group) => (
            <div key={group.category} className="border-t border-line pt-6">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.24em] text-brand">
                {group.category}
              </h3>
              <ul className="mt-5 grid gap-x-6 gap-y-2.5">
                {group.items.map((tool) => (
                  <li key={tool.name} className="text-sm leading-snug text-muted">
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
