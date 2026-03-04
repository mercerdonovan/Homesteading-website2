import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From Old Order Amish roots to Adventist faith — the story behind Heritage Harvest Homestead and why we share these skills.",
};

const timeline = [
  {
    year: "1978",
    title: "Roots in Lancaster County",
    body: "We were born into an Old Order Amish community in Lancaster County, Pennsylvania. No electricity, no motorized equipment. Every skill was passed down by hand.",
  },
  {
    year: "1995",
    title: "Questioning & Seeking",
    body: "After years of study and many quiet conversations, we began to wrestle with deeper questions of faith and Scripture. This season was difficult—and necessary.",
  },
  {
    year: "2001",
    title: "Coming to Adventism",
    body: "We were baptized into the Seventh-day Adventist Church. Our lifestyle didn't change dramatically—but our understanding of why we lived this way became anchored in Scripture.",
  },
  {
    year: "2010",
    title: "Heritage Harvest Homestead Founded",
    body: "We purchased 40 acres in the Cumberland Plateau of Tennessee and began offering programs to families who wanted to learn what we had spent a lifetime living.",
  },
  {
    year: "2018",
    title: "Programs Expanded",
    body: "Growing demand led us to formalize five core programs: Sustainable Farming, Homemaking, Timber & Construction, Textile Arts, and Food Preservation.",
  },
  {
    year: "Today",
    title: "A Growing Community",
    body: "Over 200 families have come through our doors. We're more convinced than ever that these skills—and this pace of life—are needed now more than ever.",
  },
];

const values = [
  {
    title: "Simplicity",
    icon: "🌿",
    body: "Not poverty, but clarity. We choose what we need and release what we don't. Simplicity frees us to be present.",
  },
  {
    title: "Stewardship",
    icon: "🌾",
    body: "The land, the body, the family—these are gifts entrusted to us. We take that trust seriously in everything we do.",
  },
  {
    title: "Community",
    icon: "🤝",
    body: "We were not made to live alone. Programs here are designed to build friendship, accountability, and mutual aid.",
  },
  {
    title: "Faith",
    icon: "✝",
    body: "Our Adventist faith shapes everything—the Sabbath rest, the plant-based diet, the care for the body as a temple.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="From Amish Roots to Adventist Faith"
        subtitle="A story of leaving, learning, and coming home to what matters most."
      />

      {/* Main story */}
      <Section className="bg-stone">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
              Who We Are
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              We Grew Up Without Power—and Gained Something Better
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-earth">
              <p>
                My name is Joseph Beiler, and I was born Amish. My wife, Ruth, was raised
                the same way. We learned to plant, harvest, build, sew, and preserve before
                we learned to drive. We didn&apos;t have a choice—those were just the ways of our
                community.
              </p>
              <p>
                When we eventually came to Seventh-day Adventism, we brought those ways with
                us. Not out of stubbornness—out of conviction. We had seen what the simpler
                life produced: strong families, rooted children, a relationship with the land
                that gave us both humility and confidence.
              </p>
              <p>
                Heritage Harvest Homestead is our attempt to share what we know. Not as a
                museum, and not with nostalgia—but because we believe these skills and this
                pace of life are genuinely good. For the body. For the family. For the soul.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/programs">Explore Programs</Button>
              <Button href="/visit" variant="outline">Plan a Visit</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl col-span-2 sm:col-span-1">
              <Image
                src="https://placehold.co/400x533/2C5016/FAF7F2"
                alt="Joseph and Ruth Beiler"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl col-span-2 sm:col-span-1">
              <Image
                src="https://placehold.co/400x533/1A3009/3D6B22"
                alt="Heritage Harvest Homestead farm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <section className="bg-forest-dark py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber">
              A Journey
            </p>
            <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
              How We Got Here
            </h2>
          </div>

          <ol className="relative border-l border-forest-light/30 pl-8 space-y-10">
            {timeline.map(({ year, title, body }) => (
              <li key={year} className="relative">
                <div className="absolute -left-[2.35rem] flex h-7 w-7 items-center justify-center rounded-full border-2 border-amber bg-forest-dark">
                  <div className="h-2 w-2 rounded-full bg-amber" />
                </div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-amber">
                  {year}
                </span>
                <h3 className="font-heading text-xl font-bold text-cream">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-cream/70">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <Section className="bg-stone-dark">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
            What We Believe
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Values That Guide Everything
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, icon, body }) => (
            <div key={title} className="rounded-2xl bg-cream p-8 shadow-sm">
              <span className="text-3xl" role="img" aria-label={title}>
                {icon}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-earth">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/beliefs" variant="outline">
            Read Our Full Statement of Beliefs
          </Button>
        </div>
      </Section>

      {/* Meet the family */}
      <Section className="bg-cream">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square max-w-sm overflow-hidden rounded-full mx-auto lg:mx-0">
            <Image
              src="https://placehold.co/600x600/EDE5D8/5C4D3C"
              alt="The Beiler family at Heritage Harvest Homestead"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
              The Family
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Meet the Beilers
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-earth">
              <p>
                Joseph and Ruth Beiler operate Heritage Harvest with their four adult
                children—three of whom live and work on the homestead. Together they lead
                programs, maintain the farm, host guests, and continue learning.
              </p>
              <p>
                Ruth leads the Homemaking, Sewing, and Canning programs. Joseph leads
                Farming and Construction. Their daughter Miriam coordinates scheduling and
                guest services.
              </p>
              <p>
                We do not consider ourselves experts with certificates—we are practitioners
                who have spent decades doing these things, making mistakes, and finding what
                works. That&apos;s what we teach.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
            Come Learn With Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/75">
            Whether you&apos;re looking to build skills, reconnect with the land, or simply
            slow down for a weekend—there&apos;s a place for you here.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/programs" variant="amber" size="lg">Browse Programs</Button>
            <Button href="/contact" size="lg"
              className="border border-cream/40 bg-transparent text-cream hover:bg-cream/10">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
