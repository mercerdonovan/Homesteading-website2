import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Plan your visit to Heritage Harvest Homestead in Crossville, Tennessee. Directions, lodging, and what to expect.",
};

const lodgingOptions = [
  {
    name: "Farmhouse Guest Rooms",
    capacity: "Up to 4 guests",
    description:
      "Three private rooms in the main farmhouse, each simply furnished with handmade quilts and access to shared bathrooms. Breakfast is included.",
    price: "From $85/night",
    image: "https://placehold.co/600x400/EDE5D8/5C4D3C",
  },
  {
    name: "The Cabin",
    capacity: "Up to 6 guests",
    description:
      "A detached single-room cabin with a loft, kitchenette, and private bathroom. Ideal for a small family or couple seeking more privacy.",
    price: "From $145/night",
    image: "https://placehold.co/600x400/2C5016/FAF7F2",
  },
  {
    name: "Tent / RV Sites",
    capacity: "2 sites available",
    description:
      "Flat, shaded sites with water and electric hookups. Shared restroom and shower facilities nearby. A peaceful, no-frills option.",
    price: "From $35/night",
    image: "https://placehold.co/600x400/1A3009/EDE5D8",
  },
];

const faq = [
  {
    q: "When can I visit?",
    a: "We host programs and guests primarily from April through October. Off-season visits can be arranged by contacting us directly.",
  },
  {
    q: "Can I come just to look around?",
    a: "We're not set up as a public attraction, but if you're genuinely interested in our programs or community, we'd love to have you reach out and arrange a visit.",
  },
  {
    q: "Is the property accessible?",
    a: "The farmhouse and main workshop areas are accessible. Some field areas involve uneven terrain. Contact us if you have specific accessibility needs.",
  },
  {
    q: "Are pets allowed?",
    a: "We have working animals on the property. Well-behaved dogs are welcome with advance notice, but must remain leashed when near the farm animals.",
  },
  {
    q: "What should I bring?",
    a: "Sturdy footwear, clothes you don't mind getting dirty, a hat, and sunscreen if you're visiting in summer. For overnight stays, we provide linens and towels.",
  },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Come See Us"
        title="Plan Your Visit"
        subtitle="We're located in the Cumberland Plateau of Tennessee, about 1.5 hours west of Knoxville."
      />

      {/* Location + map */}
      <Section className="bg-stone">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
              Find Us
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Getting Here
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-earth">
              <p>
                Heritage Harvest Homestead is located on 40 acres of farmland in
                Cumberland County, Tennessee, roughly 10 miles outside of Crossville.
                The property sits at around 1,800 feet elevation, giving it a temperate
                climate with four distinct seasons.
              </p>
              <address className="not-italic">
                <p className="font-semibold text-foreground">Address</p>
                <p>12400 Heritage Way</p>
                <p>Crossville, TN 38571</p>
              </address>
              <div>
                <p className="font-semibold text-foreground">From Nashville (2 hrs)</p>
                <p>Take I-40 East to Exit 317 (Crossville), then follow US-127 N for 8 miles. Turn right on Heritage Way — look for our wooden sign.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">From Knoxville (1.5 hrs)</p>
                <p>Take I-40 West to Exit 317 (Crossville), same directions from there.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">From Chattanooga (1.5 hrs)</p>
                <p>Take US-127 N through Pikeville and Crossville, then follow the signs.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Ask for Directions</Button>
              <Button href="/register" variant="outline">Register for a Program</Button>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-dark">
            <Image
              src="https://placehold.co/700x700/EDE5D8/2C5016"
              alt="Map to Heritage Harvest Homestead"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-forest-dark/60">
              <p className="font-heading text-xl font-bold text-cream">12400 Heritage Way</p>
              <p className="mt-1 text-sm text-cream/70">Crossville, TN 38571</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-forest-dark transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* What to expect */}
      <section className="bg-forest-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber">
              The Experience
            </p>
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              What to Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🌄",
                title: "Slower Days",
                body: "There's no WiFi in the farmhouse, and we like it that way. Days start early, move with purpose, and end with good rest.",
              },
              {
                icon: "🍽",
                title: "Simple, Wholesome Meals",
                body: "Meals are plant-based and made from scratch, often using produce from our own garden. We observe the Sabbath—Saturday is a day of rest.",
              },
              {
                icon: "🌿",
                title: "Working Farm",
                body: "This is an active farm, not a museum. Animals, noise, mud, and occasional unexpected challenges are all part of the experience.",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Welcome",
                body: "Children are a natural part of life here. Well-behaved kids of all ages are welcome to participate and explore.",
              },
              {
                icon: "✝",
                title: "Faith Context",
                body: "We are a faith-based ministry. Devotions are offered each morning and are optional. We respect guests of all backgrounds.",
              },
              {
                icon: "📵",
                title: "Unplugged by Design",
                body: "We ask guests to be present during program hours. Phone use during instruction time is discouraged out of respect for others.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-forest-light/20 bg-forest/30 p-6">
                <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
                <h3 className="mt-4 font-heading text-xl font-bold text-cream">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lodging */}
      <Section className="bg-stone-dark">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
            Stay With Us
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Lodging Options
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-earth">
            Lodging is separate from program enrollment. Contact us to check availability and book.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {lodgingOptions.map((opt) => (
            <div key={opt.name} className="overflow-hidden rounded-2xl bg-cream shadow-sm">
              <div className="relative h-52 w-full">
                <Image src={opt.image} alt={opt.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-xl font-bold text-foreground">{opt.name}</h3>
                  <span className="whitespace-nowrap text-sm font-semibold text-forest">{opt.price}</span>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-earth-light">{opt.capacity}</p>
                <p className="mt-3 text-sm leading-relaxed text-earth">{opt.description}</p>
                <Button href="/contact" variant="outline" fullWidth className="mt-5">
                  Check Availability
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
              Before You Come
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Common Questions
            </h2>
          </div>
          <div className="divide-y divide-stone-darker rounded-2xl bg-stone shadow-sm">
            {faq.map(({ q, a }) => (
              <div key={q} className="px-6 py-5">
                <p className="font-heading text-base font-semibold text-foreground">{q}</p>
                <p className="mt-2 text-sm leading-relaxed text-earth">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
            Ready to Visit?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/75">
            Reach out to check availability, ask a question, or register for a program. We&apos;d love to have you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="amber" size="lg">Get in Touch</Button>
            <Button href="/register" size="lg"
              className="border border-cream/40 bg-transparent text-cream hover:bg-cream/10">
              Register for a Program
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
