"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";

const categories = [
  {
    id: "general",
    label: "General Fund",
    description: "Supports day-to-day operations, farm maintenance, and program delivery.",
    icon: "🌿",
  },
  {
    id: "scholarship",
    label: "Scholarship Fund",
    description: "Helps families with financial need attend programs at reduced or no cost.",
    icon: "🎓",
  },
  {
    id: "infrastructure",
    label: "Farm & Infrastructure",
    description: "Funds equipment, fencing, outbuildings, and land improvements.",
    icon: "🏡",
  },
  {
    id: "resources",
    label: "Resources & Media",
    description: "Supports the creation of free guides, videos, and teaching materials.",
    icon: "📚",
  },
];

const amounts = [25, 50, 100, 250, 500];

const goals = [
  {
    label: "New Greenhouse",
    current: 4200,
    goal: 8000,
    description: "A year-round growing facility to extend our farming program into winter months.",
  },
  {
    label: "Scholarship Fund 2026",
    current: 1850,
    goal: 5000,
    description: "Covering 10 families who applied for need-based assistance this year.",
  },
];

export default function DonatePage() {
  const [category, setCategory] = useState("general");
  const [amount, setAmount] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  const effectiveAmount = amount ?? (custom ? Number(custom) : null);

  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Support the Homestead"
        subtitle="Your generosity keeps programs running, families learning, and the land thriving."
      />

      <section className="bg-stone py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Donation form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Make a Gift
              </h2>
              <p className="mt-2 text-sm text-earth">
                All donations are used directly for the ministry. Heritage Harvest is a registered
                501(c)(3) nonprofit organization. <span className="font-semibold">No payment is processed on this form yet</span>—we&apos;ll reach out to complete your gift securely.
              </p>

              {/* Frequency */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-foreground">Frequency</p>
                <div className="flex rounded-xl border-2 border-stone-darker overflow-hidden">
                  {(["once", "monthly"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`flex-1 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-inset ${
                        frequency === f
                          ? "bg-forest text-cream"
                          : "bg-transparent text-earth hover:bg-stone-dark"
                      }`}
                    >
                      {f === "once" ? "One-Time" : "Monthly"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-foreground">Amount</p>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => { setAmount(a); setCustom(""); }}
                      className={`rounded-xl border-2 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest active:opacity-80 ${
                        amount === a && !custom
                          ? "border-forest bg-forest text-cream"
                          : "border-stone-darker text-earth hover:border-forest/50"
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                </div>
                <div className="mt-3">
                  <label htmlFor="custom-amount" className="sr-only">Custom amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-earth">$</span>
                    <input
                      id="custom-amount"
                      type="number"
                      min={1}
                      placeholder="Custom amount"
                      value={custom}
                      onFocus={() => setAmount(null)}
                      onChange={(e) => setCustom(e.target.value)}
                      className={`w-full rounded-xl border-2 py-3 pl-8 pr-4 text-sm text-foreground focus:outline-none ${
                        custom
                          ? "border-forest bg-stone"
                          : "border-stone-darker bg-stone focus:border-forest"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-foreground">Direct My Gift To</p>
                <div className="space-y-3">
                  {categories.map((c) => (
                    <label
                      key={c.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors duration-150 ${
                        category === c.id
                          ? "border-forest bg-forest/5"
                          : "border-stone-darker hover:border-forest/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={c.id}
                        checked={category === c.id}
                        onChange={() => setCategory(c.id)}
                        className="sr-only"
                      />
                      <div
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                          category === c.id ? "border-forest bg-forest" : "border-stone-darker"
                        }`}
                      >
                        {category === c.id && <div className="h-2 w-2 rounded-full bg-cream" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span aria-hidden>{c.icon}</span>
                          <span className="text-sm font-semibold text-foreground">{c.label}</span>
                        </div>
                        <p className="mt-1 text-xs text-earth">{c.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8">
                <Button
                  variant="amber"
                  fullWidth
                  size="lg"
                  disabled={!effectiveAmount || effectiveAmount <= 0}
                >
                  {effectiveAmount && effectiveAmount > 0
                    ? `Give $${effectiveAmount}${frequency === "monthly" ? "/mo" : ""} →`
                    : "Select an Amount to Continue"}
                </Button>
                <p className="mt-3 text-center text-xs text-earth">
                  Secure placeholder — payment processing coming soon.
                </p>
              </div>
            </div>

            {/* Right: Goals + Trust */}
            <div className="space-y-8">
              {/* Current Goals */}
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Current Fundraising Goals
                </h3>
                <p className="mt-1 text-sm text-earth">
                  These are the projects we&apos;re actively raising funds for right now.
                </p>
                <div className="mt-6 space-y-6">
                  {goals.map((g) => (
                    <div key={g.label} className="rounded-2xl bg-cream p-6 shadow-sm">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-heading text-lg font-bold text-foreground">{g.label}</h4>
                        <span className="text-sm font-semibold text-forest whitespace-nowrap">
                          ${g.current.toLocaleString()} / ${g.goal.toLocaleString()}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-earth">{g.description}</p>
                      <div className="mt-4">
                        <ProgressBar value={Math.round((g.current / g.goal) * 100)} showPercentage={false} />
                        <p className="mt-1.5 text-xs text-earth-light">
                          {Math.round((g.current / g.goal) * 100)}% funded
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="rounded-2xl border-2 border-stone-darker bg-cream p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Why Give to Heritage Harvest?
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "501(c)(3) registered nonprofit — gifts are tax-deductible",
                    "100% of program donations go to operations, not overhead",
                    "Scholarship fund ensures access regardless of income",
                    "Annual financial report shared with donors",
                    "No recurring charge until you confirm by phone or email",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-earth">
                      <span className="mt-0.5 flex-shrink-0 text-forest">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <blockquote className="rounded-2xl bg-forest-dark p-6">
                <p className="font-heading text-lg font-semibold italic text-cream">
                  &ldquo;Every dollar given here translates directly to families
                  learning something that will serve them for life. We don&apos;t
                  take that lightly.&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium text-amber">
                  — Joseph Beiler, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
