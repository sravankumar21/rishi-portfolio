import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_32px_-12px_rgba(139,124,248,0.7)] hover:bg-brand/90 hover:shadow-[0_10px_40px_-10px_rgba(139,124,248,0.85)] active:scale-[0.98]",
  outline:
    "border border-line-strong text-fg hover:border-brand/60 hover:bg-fill-soft active:scale-[0.98]",
  ghost: "text-muted hover:text-fg hover:bg-fill-soft",
};

const sizes: Record<"md" | "lg", string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

function base(variant: ButtonVariant, size: "md" | "lg", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    variants[variant],
    sizes[size],
    className,
  );
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a href={href} {...externalProps} className={base(variant, size, className)}>
      {children}
    </a>
  );
}

interface ButtonProps extends ButtonBaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
}

export function Button({
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={base(variant, size, className)}
      {...rest}
    >
      {children}
    </button>
  );
}