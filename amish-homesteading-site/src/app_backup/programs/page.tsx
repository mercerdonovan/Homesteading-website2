import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import { ProgramCard } from "@/components/Card";
import Button from "@/components/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Hands-on programs in farming, homemaking, construction, sewing, and food preservation at Heritage Harvest Homestead.",
};

const faqs = [
  {
    q: "Do I need prior experience?",
    a: "No experience is required. All of our programs are designed to meet you where you are. Beginners are not just welcome—they're who we most love to teach.",
  },
  {
    q: "Are programs family-friendly?",
    a: "Absolutely. Many of our sessions are structured to welcome children alongside adults. We believe skills pass best when families learn together.",
  },
  {
    q: "What's included with enrollment?",
    a: "Program fees cover instruction, materials for the session, and shared meals during multi-day programs. Lodging options are available separately through our Visit page.",
  },
  {
    q: "Can I take more than one program?",
    a: "Yes, and many guests do. We offer discounted bundles for those who enroll in two or more programs during a single visit.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Teach"
        title="Our Programs"
        subtitle="Every program is taught by people who have spent decades living these skills—not learning them from a book."
      />

      {/* Intro */}
      <Section className="bg-stone">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
            The Philosophy
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Skills Taught by People Who Live Them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-earth">
            We don&apos;t teach from curriculum packets. We teach from decades of doing.
            Every program at Heritage Harvest is led by someone who has planted these
            crops, built these structures, sewn these garments, and preserved these
            foods—season after season.
          </p>
        </div>

        {/* Program grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard
              key={p.slug}
              title={p.title}
              description={p.summary}
              duration={p.duration}
              slug={p.slug}
              imageUrl={p.image}
              category={p.season}
            />
          ))}
        </div>
      </Section>

      {/* How it works */}
      <section className="bg-forest-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber">
              The Experience
            </p>
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              How a Program Works
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Choose a Program", body: "Browse the options and pick the skill set you want to build. Read the detail page to understand what each session covers." },
              { step: "02", title: "Register Online", body: "Complete the multi-step enrollment form. No payment is processed yet—you'll receive a confirmation with next steps." },
              { step: "03", title: "Arrive & Learn", body: "Show up, bring your curiosity, and get your hands dirty. Meals and orientation are included on day one." },
              { step: "04", title: "Take It Home", body: "You'll leave with written notes, practiced skills, and—for many programs—something you made with your own hands." },
            ].map(({ step, title, body }) => (
              <div key={step} className="rounded-2xl border border-forest-light/20 bg-forest/30 p-8">
                <span className="font-heading text-5xl font-bold text-amber/30">{step}</span>
                <h3 className="mt-4 font-heading text-xl font-bold text-cream">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section className="bg-stone-dark">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
              Common Questions
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-stone-darker rounded-2xl bg-cream shadow-sm">
            {faqs.map(({ q, a }) => (
              <div key={q} className="px-6 py-6">
                <p className="font-heading text-base font-semibold text-foreground sm:text-lg">{q}</p>
                <p className="mt-3 text-base leading-relaxed text-earth">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-amber py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-forest-dark sm:text-4xl">
            Ready to Enroll?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-forest-dark/75">
            Choose a program above or go straight to enrollment to get started.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/register" size="lg"
              className="bg-forest-dark text-cream hover:bg-forest active:opacity-90">
              Enroll Now
            </Button>
            <Button href="/contact" variant="outline" size="lg"
              className="border-forest-dark/40 text-forest-dark hover:border-forest-dark hover:bg-forest-dark/10">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
