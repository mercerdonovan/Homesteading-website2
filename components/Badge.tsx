type BadgeVariant = "forest" | "amber" | "barn" | "stone" | "earth";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  forest: "bg-forest/10 text-forest",
  amber: "bg-amber/10 text-amber",
  barn: "bg-barn/10 text-barn",
  stone: "bg-stone-dark text-earth",
  earth: "bg-earth/10 text-earth",
};

export default function Badge({
  children,
  variant = "forest",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
