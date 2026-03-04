import Link from "next/link";

const programLinks = [
  { href: "/programs/farming", label: "Sustainable Farming" },
  { href: "/programs/homemaking", label: "Traditional Homemaking" },
  { href: "/programs/construction", label: "Timber & Construction" },
  { href: "/programs/sewing", label: "Textile Arts & Sewing" },
  { href: "/programs/canning", label: "Food Preservation" },
];

const siteLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/beliefs", label: "Our Beliefs" },
  { href: "/resources", label: "Resources" },
  { href: "/visit", label: "Plan Your Visit" },
  { href: "/contact", label: "Contact Us" },
  { href: "/donate", label: "Donate" },
];

const policyLinks = [
  { href: "/policies", label: "All Policies" },
  { href: "/policies/weather", label: "Weather Policy" },
  { href: "/policies/refunds", label: "Refunds & Cancellations" },
  { href: "/policies/terms", label: "Terms of Service" },
  { href: "/policies/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-heading text-xl font-bold text-cream">Heritage Harvest</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber">
                Homestead
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Rooted in faith. Grown by hand. We invite families to reconnect
              with the land, with each other, and with God through the timeless
              arts of simple living.
            </p>
            <address className="mt-4 not-italic">
              <p className="text-sm text-cream/60">
                12400 Heritage Way
                <br />
                Crossville, TN 38571
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="tel:+19315550142"
                  className="text-cream/60 transition-colors duration-150 hover:text-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                >
                  (931) 555-0142
                </a>
              </p>
              <p className="mt-1 text-sm">
                <a
                  href="mailto:hello@heritageharvesthomestead.org"
                  className="text-cream/60 transition-colors duration-150 hover:text-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                >
                  hello@heritageharvesthomestead.org
                </a>
              </p>
            </address>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber">
              Programs
            </h3>
            <ul className="space-y-2">
              {programLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/70 transition-colors duration-150 hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber">
              Navigate
            </h3>
            <ul className="space-y-2">
              {siteLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/70 transition-colors duration-150 hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber">
              Policies
            </h3>
            <ul className="space-y-2">
              {policyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/70 transition-colors duration-150 hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p className="text-cream/40">
              &copy; {new Date().getFullYear()} Heritage Harvest Homestead. All
              rights reserved.
            </p>
            <p className="text-xs text-cream/30">A faith-based homesteading ministry</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
