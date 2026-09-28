import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-fill-weak px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}