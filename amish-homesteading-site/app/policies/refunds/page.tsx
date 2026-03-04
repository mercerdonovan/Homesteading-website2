import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Refunds & Cancellations",
  description: "Heritage Harvest Homestead's refund and cancellation policy for program enrollment.",
};

export default function RefundsPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Refunds & Cancellations"
        subtitle="Updated January 2025"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies", href: "/policies" },
          { label: "Refunds", href: "/policies/refunds" },
        ]}
      />

      <Section className="bg-stone">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8 rounded-2xl bg-cream p-8 shadow-sm sm:p-12">

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Approach</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We try to be fair and human in how we handle cancellations. Life happens. We
                understand that. At the same time, program preparation involves real costs—
                materials, instructor time, and limited enrollment capacity. The timelines below
                reflect that balance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-earth">
                If something unusual happens in your situation, reach out. We&apos;ll do our best
                to work with you.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Cancellation by Guest</h2>
              <div className="mt-4 overflow-hidden rounded-xl border-2 border-stone-darker">
                {[
                  { timeline: "More than 30 days before", refund: "Full refund or full credit" },
                  { timeline: "8–30 days before", refund: "Full credit toward future session; 50% cash refund" },
                  { timeline: "3–7 days before", refund: "50% credit toward future session; no cash refund" },
                  { timeline: "Less than 3 days before / No-show", refund: "No refund; session credit at our discretion" },
                ].map(({ timeline, refund }, i) => (
                  <div
                    key={timeline}
                    className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between sm:gap-4 ${
                      i < 3 ? "border-b border-stone-darker" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold text-foreground">{timeline}</span>
                    <span className="text-sm text-earth sm:text-right">{refund}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Transfers</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                You may transfer your enrollment to another person at no charge up to 7 days before
                the session. Notify us by email with the new participant&apos;s name and contact info.
              </p>
              <p className="mt-4 text-base leading-relaxed text-earth">
                You may transfer to a different session of the same program once at no charge, subject
                to availability, if requested more than 14 days in advance.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Cancellation by Heritage Harvest</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We reserve the right to cancel or reschedule a program due to low enrollment, instructor
                illness, weather, or other circumstances beyond our control.
              </p>
              <p className="mt-4 text-base leading-relaxed text-earth">
                In these cases, guests will receive:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li>A full refund, or</li>
                <li>A full credit toward a future session, whichever the guest prefers.</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We will notify guests as soon as possible—no later than 5 business days before the
                session, except in cases of emergency.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">How to Request a Refund</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Send an email to{" "}
                <a href="mailto:hello@heritageharvesthomestead.org" className="font-semibold text-forest underline-offset-2 hover:underline">
                  hello@heritageharvesthomestead.org
                </a>{" "}
                with your name, the program name, and your session date. We&apos;ll confirm receipt
                and process the refund within 10 business days.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Credits</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Session credits are valid for 12 months from the date of issuance and apply to any
                program at Heritage Harvest. Credits are non-transferable and have no cash value.
              </p>
            </div>

          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/policies">Back to All Policies</Button>
            <Button href="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
