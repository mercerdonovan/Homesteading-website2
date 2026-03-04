import { HTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ children, hover = false, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-cream shadow-sm ${
        hover ? "transition-transform duration-200 hover:-translate-y-1 hover:shadow-md" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  slug: string;
  imageUrl?: string;
  category?: string;
}

export function ProgramCard({
  title,
  description,
  duration,
  slug,
  imageUrl,
  category,
}: ProgramCardProps) {
  return (
    <Link href={`/programs/${slug}`} className="group block focus-visible:outline-none">
      <Card hover className="overflow-hidden focus-within:ring-2 focus-within:ring-forest focus-within:ring-offset-2">
        <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-stone-dark">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-forest/10">
              <span className="text-5xl">🌿</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest">
              {duration}
            </span>
            {category && (
              <span className="rounded-full bg-forest/10 px-2 py-0.5 text-xs font-medium text-forest">
                {category}
              </span>
            )}
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground transition-colors duration-150 group-hover:text-forest">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-earth line-clamp-3">{description}</p>
          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-forest">
            <span>Learn more</span>
            <svg
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Card>
    </Link>
  );
}

interface ResourceCardProps {
  title: string;
  category: string;
  description: string;
  type: "video" | "article" | "download" | "audio";
}

const typeIcons: Record<ResourceCardProps["type"], string> = {
  video: "▶",
  article: "📄",
  download: "⬇",
  audio: "🎵",
};

export function ResourceCard({ title, category, description, type }: ResourceCardProps) {
  return (
    <Card hover className="flex flex-col p-6">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest/10 text-base">
          {typeIcons[type]}
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-forest">
          {category}
        </span>
      </div>
      <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-earth">{description}</p>
      <button className="mt-4 flex items-center gap-1 rounded text-sm font-semibold text-forest transition-colors duration-150 hover:text-forest-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 active:opacity-80">
        <span>Access Resource</span>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </Card>
  );
}
