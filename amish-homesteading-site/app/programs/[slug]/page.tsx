import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import { programs, getProgramBySlug } from "@/lib/programs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.summary,
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const otherPrograms = programs.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-cream/50">
            <Link href="/" className="transition-colors hover:text-cream">Home</Link>
            <span>/</span>
            <Link href="/programs" className="transition-colors hover:text-cream">Programs</Link>
            <span>/</span>
            <span className="text-cream/80">{program.title}</span>
          </nav>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-8 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-20">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="amber">{program.duration}</Badge>
              <Badge variant="forest">{program.season}</Badge>
            </div>
            <h1 className="font-heading text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              {program.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              {program.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/register" variant="amber" size="lg">
                Enroll in This Program
              </Button>
              <Button href="/contact" size="lg"
                className="border border-cream/40 bg-transparent text-cream hover:bg-cream/10">
                Ask a Question
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* What you'll learn + What's included */}
      <Section className="bg-stone">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Topics */}
          <div className="lg:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
              Curriculum
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              What You&apos;ll Learn
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {program.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-forest/15 text-forest">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-earth">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Includes */}
            <div className="rounded-2xl bg-cream p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-foreground">What&apos;s Included</h3>
              <ul className="mt-4 space-y-2">
                {program.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-earth">
                    <span className="mt-0.5 text-amber">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div className="rounded-2xl bg-cream p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-foreground">Schedule</h3>
              <ul className="mt-4 space-y-3">
                {program.schedule.map(({ day, activity }) => (
                  <li key={day}>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-forest">{day}</span>
                    <span className="text-sm text-earth">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Button href="/register" variant="primary" fullWidth size="lg">
              Enroll Now
            </Button>
          </div>
        </div>
      </Section>

      {/* Instructor */}
      <section className="bg-stone-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-forest/10">
              <Image
                src={`https://placehold.co/160x160/EDE5D8/5C4D3C`}
                alt={program.instructor}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest">Your Instructor</p>
              <h3 className="mt-1 font-heading text-xl font-bold text-foreground">{program.instructor}</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-earth">{program.instructorBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section className="bg-stone">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">
              Questions
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Frequently Asked
            </h2>
          </div>
          <Accordion
            items={program.faqs.map((f) => ({
              question: f.question,
              answer: f.answer,
            }))}
          />
          <p className="mt-8 text-center text-sm text-earth">
            Have a question not answered here?{" "}
            <Link href="/contact" className="font-semibold text-forest underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest">
              Contact us
            </Link>
          </p>
        </div>
      </Section>

      {/* Other Programs */}
      <section className="bg-forest-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
              Other Programs
            </h2>
            <Link href="/programs" className="text-sm font-semibold text-amber hover:text-amber-light transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber">
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPrograms.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="group rounded-2xl bg-forest/30 border border-forest-light/20 p-6 transition-colors hover:bg-forest/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <Badge variant="amber" className="mb-4">{p.duration}</Badge>
                <h3 className="font-heading text-xl font-bold text-cream group-hover:text-amber transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{p.summary}</p>
                <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-amber">
                  Learn more
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
