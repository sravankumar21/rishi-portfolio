export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,var(--hero-radial-a)_0%,var(--base)_55%)]" />

      {/* Ambient orbs */}
      <div className="absolute -left-32 top-[-6rem] h-[34rem] w-[34rem] rounded-full bg-brand/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute -right-24 top-[24rem] h-[30rem] w-[30rem] rounded-full bg-brand-2/12 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute left-1/2 top-[70rem] h-[32rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: "4s" }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[var(--bg-grid-opacity)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      />

      {/* Film grain */}
      <div className="noise absolute inset-0" />
    </div>
  );
}