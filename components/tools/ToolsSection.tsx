import { Wrench } from "lucide-react";
import { toolGroups } from "@/data/tools";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const accentMap: Record<string, { title: string; chip: string; dot: string }> = {
  "Equipment & Stations": {
    title: "text-brand",
    chip: "border-line hover:border-brand/50",
    dot: "bg-brand",
  },
  "Storage & Stock Control": {
    title: "text-brand-2",
    chip: "border-line hover:border-brand-2/50",
    dot: "bg-brand-2",
  },
  "Prep & Presentation Tools": {
    title: "text-emerald-400",
    chip: "border-line hover:border-emerald-400/50",
    dot: "bg-emerald-400",
  },
};

export function ToolsSection() {
  return (
    <section id="tools" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kitchen Toolkit"
          title="The equipment I work with"
          description="The stations, storage systems and prep tools I operate every service."
        />

        <Reveal className="mt-12 grid gap-5 md:grid-cols-3">
          {toolGroups.map((group) => {
            const accent =
              accentMap[group.category] ?? accentMap["Equipment & Stations"];
            return (
              <div key={group.category} className="card-hover glass flex h-full flex-col rounded-2xl p-6">
                <p className={cn("flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]", accent.title)}>
                  <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                  {group.category}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((tool) => (
                    <li key={tool.name}>
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border bg-fill-weak px-3.5 py-2 text-sm font-medium text-fg transition-colors",
                          accent.chip,
                        )}
                      >
                        <span className={cn("h-1.5 w-1.5 rounded-full", accent.dot)} aria-hidden="true" />
                        {tool.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}