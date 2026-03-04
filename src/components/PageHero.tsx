import Link from "next/link";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ eyebrow, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-forest-dark py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-cream/50">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <Link
                  href={crumb.href}
                  className="transition-colors duration-150 hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
