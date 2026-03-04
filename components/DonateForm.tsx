"use client";

import { useState } from "react";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";

const categories = [
  {
    id: "general",
    label: "General Fund",
    description: "Supports day-to-day operations, facility maintenance, and program staffing.",
    goal: 50000,
    raised: 31400,
  },
  {
    id: "scholarship",
    label: "Scholarship Fund",
    description: "Helps families who couldn't otherwise afford to attend our programs.",
    goal: 20000,
    raised: 14750,
  },
  {
    id: "building",
    label: "Building & Restoration",
    description: "Restoring our historic barn and building new teaching facilities.",
    goal: 80000,
    raised: 22300,
  },
  {
    id: "outreach",
    label: "Community Outreach",
    description: "Funding free workshops and resource distribution in underserved communities.",
    goal: 15000,
    raised: 7800,
  },
];

const amounts = [25, 50, 100, 250, 500, 1000];

export default function DonateForm() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeCategory = categories.find((c) => c.id === selectedCategory)!;
  const progressPct = Math.round((activeCategory.raised / activeCategory.goal) * 100);

  const finalAmount = selectedAmount ?? Number(customAmount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finalAmount || finalAmount <= 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-md rounded-2xl bg-cream p-10 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-3xl">
          ✦
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Thank You</h2>
        <p className="mt-3 text-base leading-relaxed text-earth">
          Your gift of <strong>${finalAmount}</strong> to the{" "}
          <strong>{activeCategory.label}</strong> has been received. This is a
          placeholder — real payment processing will be added in a future phase.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Category selection */}
        <div>
          <h2 className="font-heading text-xl font-bold text-foreground">
            Choose Where Your Gift Goes
          </h2>
          <div className="mt-4 space-y-3">
            {categories.map((cat) => (
              <div key={cat.id}>
                <label
                  className={`block cursor-pointer rounded-xl border-2 p-4 transition-colors duration-150 ${
                    selectedCategory === cat.id
                      ? "border-forest bg-forest/5"
                      : "border-stone-darker hover:bg-stone-dark/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="category"
                      value={cat.id}
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                      className="mt-0.5 accent-forest"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{cat.label}</p>
                      <p className="mt-0.5 text-sm text-earth">{cat.description}</p>
                      {selectedCategory === cat.id && (
                        <div className="mt-3">
                          <ProgressBar
                            value={progressPct}
                            label={`$${cat.raised.toLocaleString()} raised of $${cat.goal.toLocaleString()} goal`}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Amount & form */}
        <div>
          <h2 className="font-heading text-xl font-bold text-foreground">Gift Amount</h2>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {amounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setSelectedAmount(amt);
                  setCustomAmount("");
                }}
                className={`rounded-lg border-2 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-1 active:opacity-80 ${
                  selectedAmount === amt
                    ? "border-forest bg-forest text-cream"
                    : "border-stone-darker text-earth hover:border-forest hover:text-forest"
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
          <div className="mt-3">
            <label htmlFor="customAmount" className="mb-1.5 block text-sm font-medium text-foreground">
              Or enter a custom amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-earth">$</span>
              <input
                id="customAmount"
                type="number"
                min="1"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="w-full rounded-lg border border-stone-darker bg-stone py-2.5 pl-7 pr-4 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                placeholder="Other amount"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={recurring}
                onChange={(e) => setRecurring(e.target.checked)}
                className="h-4 w-4 accent-forest"
              />
              <span className="text-sm text-foreground">
                Make this a monthly recurring gift
              </span>
            </label>
          </div>

          <div className="mt-8 rounded-xl bg-stone p-5">
            <h3 className="font-heading text-lg font-bold text-foreground">Donor Information</h3>
            <p className="mt-1 text-xs text-earth-light">
              Placeholder — payment processing not yet active.
            </p>
            <div className="mt-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="donorFirst" className="mb-1 block text-xs font-medium text-foreground">
                    First Name
                  </label>
                  <input
                    id="donorFirst"
                    type="text"
                    className="w-full rounded-lg border border-stone-darker bg-cream px-3 py-2 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="Ruth"
                  />
                </div>
                <div>
                  <label htmlFor="donorLast" className="mb-1 block text-xs font-medium text-foreground">
                    Last Name
                  </label>
                  <input
                    id="donorLast"
                    type="text"
                    className="w-full rounded-lg border border-stone-darker bg-cream px-3 py-2 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="Hershberger"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="donorEmail" className="mb-1 block text-xs font-medium text-foreground">
                  Email Address
                </label>
                <input
                  id="donorEmail"
                  type="email"
                  className="w-full rounded-lg border border-stone-darker bg-cream px-3 py-2 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                  placeholder="ruth@example.com"
                />
              </div>
              <div className="rounded-lg bg-amber/10 p-3 text-xs text-earth">
                <strong>Payment placeholder:</strong> A real payment form (Stripe or similar) will appear here in Phase 2. Your information above is for demonstration only and is not submitted.
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button
              type="submit"
              variant="amber"
              size="lg"
              fullWidth
              disabled={!finalAmount || finalAmount <= 0}
            >
              Give ${finalAmount > 0 ? finalAmount : "—"}
              {recurring ? "/month" : ""}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
