import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  contained?: boolean;
  as?: "section" | "div" | "article";
}

export default function Section({
  children,
  contained = true,
  as: Tag = "section",
  className = "",
  ...props
}: SectionProps) {
  return (
    <Tag className={`py-16 sm:py-20 lg:py-24 ${className}`} {...props}>
      {contained ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  );
}
