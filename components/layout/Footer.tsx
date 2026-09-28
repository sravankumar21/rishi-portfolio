import { Heart } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/social";

/** Site credit — edit here to change who designed the portfolio. */
const DESIGNER = {
  name: "Sravan Kumar",
  href: "https://github.com/sravankumar21/",
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-14 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>
              © {year} {profile.name}.
            </span>
            <Heart className="h-3.5 w-3.5 text-brand" aria-label="care" />
          </div>
          <p className="text-xs text-faint">
            Designed by{" "}
            <a
              href={DESIGNER.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted transition-colors hover:text-brand"
            >
              {DESIGNER.name}
            </a>
          </p>
        </div>
        {socials.length > 0 ? (
          <nav aria-label="Social" className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-4 py-1.5 text-xs font-medium text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                {social.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </footer>
  );
}
