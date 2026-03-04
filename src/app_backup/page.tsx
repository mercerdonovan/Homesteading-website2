import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import { ProgramCard } from "@/components/Card";
import Button from "@/components/Button";
import { programs } from "@/lib/programs";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] bg-forest-dark flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1600x900/1A3009/3D6B22"
            alt="Heritage Harvest Homestead"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/30 to-forest-dark/80" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              Faith · Land · Family
            </p>
            <h1 className="font-heading text-5xl font-bold leading-tight text-cream sm:text-6xl lg:text-7xl">
              Rooted in Faith,<br />
              <span className="text-amber">Grown by Hand.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
              An Adventist homesteading ministry offering hands-on programs in
              farming, homemaking, construction, sewing, and food preservation.
              Come learn. Come rest. Come home to the land.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/programs" variant="amber" size="lg">
                Explore Our Programs
              </Button>
              <Button href="/about" variant="outline" size="lg"
                className="border-cream/50 text-cream hover:border-cream hover:bg-cream/10">
                Our Story
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cream/40">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-amber py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-sm font-semibold uppercase tracking-widest text-forest-dark">
            {["Simplicity", "Stewardship", "Community", "Faith", "Wholeness"].map((v) => (
              <li key={v} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-forest-dark/40" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programs section */}
      <Section className="bg-stone">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Hands-On Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-earth">
            From field to kitchen to workshop, every program is designed to build
            lasting skills grounded in simplicity and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-12 text-center">
          <Button href="/programs" variant="outline" size="lg">
            View All Programs
          </Button>
        </div>
      </Section>

      {/* Story snippet */}
      <section className="bg-forest-dark py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber">
                Our Journey
              </p>
              <h2 className="font-heading text-4xl font-bold text-cream sm:text-5xl">
                From Amish Roots<br />to Adventist Faith
              </h2>
              <p className="mt-6 text-base leading-relaxed text-cream/75">
                We were raised in an Old Order Amish community—no electricity, no
                shortcuts, just the rhythm of seasons and the weight of honest work.
                When we came to Adventism, we didn&apos;t leave those values behind. We
                brought them with us.
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream/75">
                Heritage Harvest Homestead exists to share what we know: that simple
                living is not deprivation—it is freedom. That knowing how to grow,
                preserve, build, and make is a gift worth passing on.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="amber">
                  Read Our Full Story
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://placehold.co/800x600/2C5016/FAF7F2"
                alt="Heritage Harvest Homestead family and farm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Numbers / Impact */}
      <Section className="bg-stone-dark">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
            Our Impact
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            A Growing Community
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { value: "5+", label: "Hands-On Programs" },
            { value: "200+", label: "Families Served" },
            { value: "40 ac.", label: "Working Farmland" },
            { value: "12 yrs", label: "Sharing These Skills" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-heading text-4xl font-bold text-forest sm:text-5xl">{value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-earth">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <svg className="mx-auto mb-6 h-10 w-10 text-amber" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote>
            <p className="font-heading text-2xl font-semibold leading-relaxed text-foreground sm:text-3xl">
              &ldquo;I came for a canning workshop and left with something I
              didn&apos;t expect—a sense of purpose. These aren&apos;t just skills.
              They&apos;re a way of being in the world.&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-earth">
            — Sarah M., Nashville, TN
          </p>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="bg-barn py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
                Support Our Mission
              </p>
              <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
                Help Us Keep the Land Going
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-cream/75">
                Your gift helps cover program costs, maintain the homestead, and
                offer need-based scholarships for families who want to attend.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/donate" variant="amber" size="lg">
                Give Today
              </Button>
              <Button href="/programs" size="lg"
                className="border border-cream/40 bg-transparent text-cream hover:bg-cream/10">
                See Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <Section className="bg-stone">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src="https://placehold.co/800x450/2C5016/FAF7F2"
              alt="Heritage Harvest Homestead property"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
              Plan Your Visit
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              You&apos;re Welcome Here
            </h2>
            <p className="mt-4 text-base leading-relaxed text-earth">
              Located in the rolling hills of Crossville, Tennessee. Come for a
              weekend workshop, a family retreat, or just to walk the land and
              breathe slower for a while.
            </p>
            <div className="mt-4 space-y-2 text-sm text-earth">
              <p><span className="font-semibold text-foreground">Address:</span> 12400 Heritage Way, Crossville, TN 38571</p>
              <p><span className="font-semibold text-foreground">Phone:</span> (931) 555-0142</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/visit">Plan Your Visit</Button>
              <Button href="/contact" variant="ghost">Contact Us</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
