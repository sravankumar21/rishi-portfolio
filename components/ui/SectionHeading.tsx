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
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand">
          {centered ? (
            <span className="h-px w-8 bg-brand/45" aria-hidden="true" />
          ) : null}
          {eyebrow}
          <span className="h-px w-8 bg-brand/45" aria-hidden="true" />
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
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
