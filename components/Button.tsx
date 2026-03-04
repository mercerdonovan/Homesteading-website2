import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "amber";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-light active:bg-forest-dark focus-visible:ring-forest",
  secondary:
    "bg-stone-dark text-forest hover:bg-stone-darker active:opacity-90 focus-visible:ring-stone-darker",
  outline:
    "border-2 border-forest text-forest hover:bg-forest hover:text-cream active:opacity-90 focus-visible:ring-forest",
  ghost:
    "text-forest hover:bg-stone-dark active:opacity-80 focus-visible:ring-forest",
  amber:
    "bg-amber text-forest-dark hover:bg-amber-light active:opacity-90 focus-visible:ring-amber",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
