import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Weather Policy",
  description: "Heritage Harvest Homestead's policy for sessions affected by severe or hazardous weather.",
};

export default function WeatherPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Weather Policy"
        subtitle="Updated January 2025"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies", href: "/policies" },
          { label: "Weather", href: "/policies/weather" },
        ]}
      />

      <Section className="bg-stone">
        <div className="mx-auto max-w-3xl">
          <div className="prose-custom space-y-8 rounded-2xl bg-cream p-8 shadow-sm sm:p-12">

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Heritage Harvest Homestead programs take place primarily outdoors. Farming, construction,
                and many other sessions involve work in open fields, workshops, and unheated structures. We
                believe in working with the weather—not against it—but the safety of our guests is always
                our first priority.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Normal Weather Operation</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We operate sessions in rain, cold, heat, and light wind. Participants should come prepared
                to work outdoors. See our <strong>Visit Us</strong> page for guidance on what to wear and
                bring.
              </p>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Light rain does not cancel sessions. Many of our best farming lessons happen in the rain.
                Mud is part of the experience.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Severe Weather</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                In cases of severe weather—including but not limited to:
              </p>
              <ul className="mt-3 space-y-1 pl-6 text-base text-earth list-disc">
                <li>Tornado watches or warnings</li>
                <li>Severe thunderstorm warnings with lightning</li>
                <li>Flash flood warnings</li>
                <li>Hazardous ice or road conditions</li>
                <li>Extreme heat (heat index above 105°F) or extreme cold (wind chill below 10°F)</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-earth">
                …we will move sessions indoors or pause them entirely until conditions are safe.
                Guests will be notified by email and phone as early as possible—typically by 7:00 am
                on the day of the affected session.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Session Modifications</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                When severe weather affects a session, we will do one or more of the following:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li>Move to indoor instruction in our covered workshop or farmhouse</li>
                <li>Adjust the schedule to cover topics that don&apos;t require outdoor work</li>
                <li>Extend a future session to make up lost time</li>
                <li>Reschedule the session if it cannot be reasonably completed</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Weather Cancellations & Refunds</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                If we cancel a session due to weather and cannot reschedule it within the same calendar year:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li>Guests will receive a <strong>full credit</strong> toward a future session.</li>
                <li>Guests who cannot attend a future session may request a <strong>full refund</strong>.</li>
                <li>Refunds are processed within 10 business days of the request.</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-earth">
                If a session is modified but not cancelled, no refund is issued—but we will always work with
                you to make sure you receive value from your enrollment.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Guest Cancellations Due to Weather</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                If you choose to cancel your attendance due to anticipated weather conditions:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li>More than 7 days before the session: full credit or refund.</li>
                <li>3–7 days before: 50% credit toward a future session.</li>
                <li>Less than 3 days before: no refund, but we&apos;ll work with you to find a makeup option.</li>
              </ul>
              <p className="mt-4 text-sm text-earth-light">
                See our <Link href="/policies/refunds" className="text-forest underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest">Refund &amp; Cancellation Policy</Link> for full details.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Questions?</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                If you have questions about how weather might affect your specific program, please
                contact us before enrolling. We&apos;re happy to advise based on typical conditions for
                that time of year.
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
