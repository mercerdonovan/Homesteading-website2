"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/programs", label: "Programs" },
  { href: "/resources", label: "Resources" },
  { href: "/beliefs", label: "Beliefs" },
  { href: "/visit", label: "Visit Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-forest text-cream transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-heading text-xl font-bold tracking-wide text-cream">
            Heritage Harvest
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber">
            Homestead
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
          {navLinks.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-1 focus-visible:ring-offset-forest ${
                  isActive
                    ? "bg-forest-light text-cream"
                    : "text-cream/80 hover:bg-forest-light hover:text-cream active:bg-forest-dark"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/donate"
            className="rounded-full bg-amber px-5 py-2 text-sm font-semibold text-forest-dark transition-colors duration-150 hover:bg-amber-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-forest active:opacity-90"
          >
            Donate
          </Link>
          <Link
            href="/register"
            className="rounded-full border border-cream/40 px-5 py-2 text-sm font-semibold text-cream transition-colors duration-150 hover:border-cream hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream active:opacity-80"
          >
            Enroll
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex items-center justify-center rounded p-2 text-cream transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber active:opacity-70 lg:hidden"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="border-t border-forest-light/40 bg-forest-dark px-4 pb-6 pt-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`block rounded px-4 py-3 text-base font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber ${
                  isActive
                    ? "bg-forest text-cream"
                    : "text-cream/80 hover:bg-forest hover:text-cream active:opacity-80"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="mt-4 flex flex-col gap-2 border-t border-forest-light/30 pt-4">
            <Link
              href="/donate"
              className="rounded-full bg-amber px-5 py-3 text-center text-base font-semibold text-forest-dark transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber active:opacity-80"
            >
              Donate
            </Link>
            <Link
              href="/register"
              className="rounded-full border border-cream/40 px-5 py-3 text-center text-base font-semibold text-cream transition-colors duration-150 hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream active:opacity-80"
            >
              Enroll in a Program
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
