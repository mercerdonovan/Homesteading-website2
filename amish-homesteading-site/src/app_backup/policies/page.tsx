import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Policies",
  description: "Heritage Harvest Homestead policies: weather, refunds, terms of service, and privacy.",
};

const policyPages = [
  {
    href: "/policies/weather",
    title: "Weather Policy",
    description:
      "How we handle sessions affected by severe weather, including our rescheduling and refund procedures.",
    icon: "🌦",
    updated: "January 2025",
  },
  {
    href: "/policies/refunds",
    title: "Refunds & Cancellations",
    description:
      "Our policies for cancellations, transfers, no-shows, and how to request a refund or credit.",
    icon: "↩",
    updated: "January 2025",
  },
  {
    href: "/policies/terms",
    title: "Terms of Service",
    description:
      "The terms governing participation in Heritage Harvest programs, use of our property, and our services.",
    icon: "📋",
    updated: "January 2025",
  },
  {
    href: "/policies/privacy",
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect your personal information when you use our website or register for programs.",
    icon: "🔒",
    updated: "January 2025",
  },
];

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Policies & Guidelines"
        subtitle="Clear, plain-language policies that govern programs, registration, and your privacy."
      />

      <Section className="bg-stone">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-center text-base leading-relaxed text-earth">
            We try to keep our policies simple and human. If you have a question not
            answered here, please{" "}
            <Link href="/contact" className="font-semibold text-forest underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest">
              reach out
            </Link>
            —we&apos;re happy to clarify anything.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {policyPages.map(({ href, title, description, icon, updated }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-2xl bg-cream p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
              >
                <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
                <h2 className="mt-4 font-heading text-xl font-bold text-foreground group-hover:text-forest transition-colors duration-150">
                  {title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-earth">{description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-earth-light">Updated {updated}</span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-forest transition-opacity group-hover:opacity-70">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
