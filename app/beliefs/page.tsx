import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Our Beliefs",
  description:
    "Heritage Harvest Homestead is rooted in Seventh-day Adventist faith. Learn what we believe and how it shapes our life and ministry.",
};

const beliefs = [
  {
    number: "01",
    title: "Scripture as Foundation",
    body: "We hold the Bible as the inspired Word of God and the final authority for faith and practice. Our programs, our diet, our rhythm of life—all of it flows from Scripture.",
  },
  {
    number: "02",
    title: "Seventh-day Sabbath",
    body: "We observe the Sabbath from sundown Friday to sundown Saturday. During Sabbath, no programs are scheduled—it is a day of rest, worship, and restoration. Guests are welcome to share it with us.",
  },
  {
    number: "03",
    title: "Wholistic Health",
    body: "We believe the body is a temple. Our diet is plant-based, our lifestyle is active, and we abstain from alcohol, tobacco, and recreational substances. These are not rules we follow reluctantly—they are gifts we are grateful for.",
  },
  {
    number: "04",
    title: "The Hope of Christ's Return",
    body: "The Second Coming of Jesus is the anchor of our hope. Everything we do—the land, the programs, the community—is set against the backdrop of that expectation. We live as stewards, not owners.",
  },
  {
    number: "05",
    title: "Family and Community",
    body: "We believe God designed human beings for community. The homesteading life reinforces this: skills pass between generations, work is shared, and neighbors matter.",
  },
  {
    number: "06",
    title: "Creation Care",
    body: "The earth is the Lord's. We practice sustainable farming not merely for pragmatic reasons, but because we believe in our responsibility to care for what God made.",
  },
  {
    number: "07",
    title: "Service Without Compulsion",
    body: "Our faith motivates us to serve, but we do not pressure guests to share our beliefs. All are welcome here. Programs are open to people of every background and faith tradition.",
  },
];

const adventistLinks = [
  { label: "28 Fundamental Beliefs", href: "https://www.adventist.org/beliefs/" },
  { label: "Adventist.org", href: "https://www.adventist.org/" },
  { label: "Health & Lifestyle", href: "https://www.adventist.org/lifestyle/" },
];

export default function BeliefsPage() {
  return (
    <>
      <PageHero
        eyebrow="Faith & Values"
        title="What We Believe"
        subtitle="Our Adventist faith is not a footnote to our homesteading—it is the soil everything else grows in."
      />

      {/* Intro */}
      <Section className="bg-stone">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Faith That Shapes Everything
          </h2>
          <p className="mt-4 text-base leading-relaxed text-earth">
            We came to Adventism from an Old Order Amish background. When we did, we
            didn&apos;t abandon what we&apos;d learned—we found that much of what we
            already practiced was confirmed by Adventist principles. The plant-based diet,
            the Sabbath rest, the suspicion of busyness and excess—it all fit.
          </p>
          <p className="mt-4 text-base leading-relaxed text-earth">
            What we share here is not exhaustive theology. It&apos;s a window into how faith
            concretely shapes what we do at Heritage Harvest every day.
          </p>
        </div>
      </Section>

      {/* Belief cards */}
      <section className="bg-forest-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {beliefs.map(({ number, title, body }) => (
              <div
                key={number}
                className="flex flex-col rounded-2xl border border-forest-light/20 bg-forest/30 p-7"
              >
                <span className="font-heading text-4xl font-bold text-amber/30">{number}</span>
                <h3 className="mt-4 font-heading text-xl font-bold text-cream">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality note */}
      <Section className="bg-stone-dark">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-cream p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-forest">A Note to All Visitors</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl">
              All Are Welcome Here
            </h2>
            <p className="mt-4 text-base leading-relaxed text-earth">
              We are an Adventist ministry, and we don&apos;t hide that. Our morning devotions
              are optional but open. Our Sabbath is observed but not imposed. Our dietary
              standards are maintained in the kitchen, but we won&apos;t preach at your table.
            </p>
            <p className="mt-4 text-base leading-relaxed text-earth">
              People of every faith—and no faith—have come through our programs, learned
              something valuable, and left as friends. You are welcome as you are.
            </p>
          </div>
        </div>
      </Section>

      {/* Link to Adventist resources */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
            Learn More
          </p>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Want to Learn About Adventism?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-earth">
            We&apos;re happy to answer questions personally, or you can explore the official
            Seventh-day Adventist resources below.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {adventistLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-forest px-5 py-2.5 text-sm font-semibold text-forest transition-colors duration-150 hover:bg-forest hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 active:opacity-90"
              >
                {label} ↗
              </a>
            ))}
          </div>
          <div className="mt-10 border-t border-stone-darker pt-10">
            <Button href="/contact">Talk to Us Directly</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
