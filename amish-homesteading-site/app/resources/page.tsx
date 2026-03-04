"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Tabs from "@/components/Tabs";
import { ResourceCard } from "@/components/Card";
import Section from "@/components/Section";

const ALL = "All";

const resources = [
  {
    title: "Beginner's Guide to Soil Health",
    category: "Farming",
    description:
      "Understand soil composition, pH, and how to build organic matter over one growing season. A practical starting point for new gardeners.",
    type: "article" as const,
  },
  {
    title: "Water-Bath Canning: Step by Step",
    category: "Preservation",
    description:
      "A clear, safety-first walkthrough of the water-bath canning process for jams, pickles, and tomatoes. Includes processing times.",
    type: "download" as const,
  },
  {
    title: "Introduction to Timber Framing",
    category: "Construction",
    description:
      "Joseph Beiler walks through the basics of timber-frame joinery and introduces the tools you'll need to get started.",
    type: "video" as const,
  },
  {
    title: "Seasonal Planting Calendar (Tennessee)",
    category: "Farming",
    description:
      "A printable month-by-month planting guide tailored to the Cumberland Plateau climate zone. Covers 30+ common crops.",
    type: "download" as const,
  },
  {
    title: "Simple Scratch Cooking: Fundamentals",
    category: "Homemaking",
    description:
      "Ruth Beiler's introduction to cooking from whole ingredients—no shortcuts, no processed foods. Great for complete beginners.",
    type: "video" as const,
  },
  {
    title: "Fermentation Basics: Sauerkraut & More",
    category: "Preservation",
    description:
      "Everything you need to start fermenting vegetables at home, including safety guidelines and common troubleshooting.",
    type: "article" as const,
  },
  {
    title: "The Adventist Home & Healthful Living",
    category: "Faith & Living",
    description:
      "Reflections on how Adventist principles of health and simplicity connect to the homesteading lifestyle. Audio format.",
    type: "audio" as const,
  },
  {
    title: "Sewing Machine Basics: Threading & Tension",
    category: "Sewing",
    description:
      "A short video covering the fundamentals of threading your machine and diagnosing tension problems. Suitable for any machine.",
    type: "video" as const,
  },
  {
    title: "Pressure Canning Safety Guide",
    category: "Preservation",
    description:
      "A downloadable PDF covering pressure canning safety, dial gauge testing, and USDA-approved processing times.",
    type: "download" as const,
  },
  {
    title: "Building a Cold Frame: Plans & Tips",
    category: "Construction",
    description:
      "Step-by-step guide and printable plans for building a simple cold frame to extend your growing season by 6–8 weeks.",
    type: "download" as const,
  },
  {
    title: "Homemaking Rhythms: Creating a Weekly Routine",
    category: "Homemaking",
    description:
      "How to design a realistic home rhythm that keeps the household running without burning you out. Practical and principle-based.",
    type: "article" as const,
  },
  {
    title: "Sabbath & Simplicity: A Conversation",
    category: "Faith & Living",
    description:
      "Joseph and Ruth discuss how the Sabbath principle has shaped their approach to homesteading, time, and rest.",
    type: "audio" as const,
  },
];

const categories = [ALL, ...Array.from(new Set(resources.map((r) => r.category)))];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState(ALL);
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    const matchesTab = activeTab === ALL || r.category === activeTab;
    const matchesSearch =
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <PageHero
        eyebrow="Library"
        title="Resources & Media"
        subtitle="Free guides, videos, audio reflections, and downloads from the Heritage Harvest team."
      />

      <section className="bg-stone py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search + Filter */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="relative flex-1">
              <label htmlFor="resource-search" className="sr-only">
                Search resources
              </label>
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-earth-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                id="resource-search"
                type="search"
                placeholder="Search resources…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border-2 border-stone-darker bg-cream py-3 pl-12 pr-4 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none"
              />
            </div>
            <div>
              <Tabs tabs={categories} activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>

          {/* Results */}
          <div className="mt-10">
            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <p className="font-heading text-xl font-semibold text-earth">No resources found</p>
                <p className="mt-2 text-sm text-earth-light">
                  Try a different search term or category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((r) => (
                  <ResourceCard
                    key={r.title}
                    title={r.title}
                    category={r.category}
                    description={r.description}
                    type={r.type}
                  />
                ))}
              </div>
            )}
          </div>

          <p className="mt-8 text-center text-sm text-earth">
            Showing {filtered.length} of {resources.length} resources
          </p>
        </div>
      </section>

      {/* CTA */}
      <Section className="bg-forest-dark">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber">
            Want to Learn in Person?
          </p>
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
            Resources Are Just the Beginning
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/75">
            Our guides and videos will get you started, but nothing replaces
            hands-on instruction on the farm. Browse our programs and enroll for
            a session.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-3.5 text-lg font-semibold text-forest-dark transition-colors duration-150 hover:bg-amber-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 active:opacity-90"
            >
              Browse Programs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-8 py-3.5 text-lg font-semibold text-cream transition-colors duration-150 hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream active:opacity-80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
