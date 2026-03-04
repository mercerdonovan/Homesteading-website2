"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Stepper from "@/components/Stepper";
import Button from "@/components/Button";
import { programs } from "@/lib/programs";

const STEPS = ["Program", "Your Info", "Party Size", "Review"];

type FormData = {
  program: string;
  dates: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  specialNeeds: string;
  howHeard: string;
  notes: string;
};

const INITIAL: FormData = {
  program: "",
  dates: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  adults: 1,
  children: 0,
  specialNeeds: "",
  howHeard: "",
  notes: "",
};

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const selectedProgram = programs.find((p) => p.slug === form.program);

  const canNext = (): boolean => {
    if (step === 0) return !!form.program;
    if (step === 1)
      return !!form.firstName && !!form.lastName && !!form.email;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="Enrollment" title="Request Received" />
        <section className="bg-stone py-20">
          <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-forest/10">
              <svg className="h-10 w-10 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Thank You, {form.firstName}!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-earth">
              We&apos;ve received your enrollment request for{" "}
              <strong>{selectedProgram?.title}</strong>. We&apos;ll be in touch within
              1–2 business days to confirm your spot and provide next steps.
            </p>
            <p className="mt-3 text-sm text-earth/70">
              A copy of this request has been sent to <strong>{form.email}</strong>.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href="/programs">Browse More Programs</Button>
              <Button href="/" variant="ghost">Back to Home</Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Enroll"
        title="Register for a Program"
        subtitle="Complete the steps below. No payment is collected yet—we'll reach out to confirm your spot."
      />

      <section className="bg-stone py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          {/* Stepper */}
          <Stepper steps={STEPS} currentStep={step} />

          <div className="mt-10 rounded-2xl bg-cream p-6 shadow-sm sm:p-10">
            {/* Step 0: Choose program */}
            {step === 0 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Choose a Program
                </h2>
                <p className="mt-2 text-sm text-earth">
                  Select the program you&apos;d like to attend, then choose a session.
                </p>
                <div className="mt-6 space-y-3">
                  {programs.map((p) => (
                    <label
                      key={p.slug}
                      className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-colors duration-150 ${
                        form.program === p.slug
                          ? "border-forest bg-forest/5"
                          : "border-stone-darker hover:border-stone-darker hover:bg-stone-dark/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="program"
                        value={p.slug}
                        checked={form.program === p.slug}
                        onChange={() => update("program", p.slug)}
                        className="sr-only"
                      />
                      <div
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                          form.program === p.slug
                            ? "border-forest bg-forest"
                            : "border-stone-darker"
                        }`}
                      >
                        {form.program === p.slug && (
                          <div className="h-2 w-2 rounded-full bg-cream" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{p.title}</p>
                        <p className="mt-0.5 text-sm text-earth">{p.summary}</p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-forest">
                          {p.duration} · {p.season}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>

                {form.program && (
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-foreground" htmlFor="dates">
                      Preferred Session / Dates
                    </label>
                    <input
                      id="dates"
                      type="text"
                      placeholder="e.g. May 2026, any weekend in June, flexible"
                      value={form.dates}
                      onChange={(e) => update("dates", e.target.value)}
                      className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none"
                    />
                    <p className="mt-2 text-xs text-earth">
                      Exact dates are confirmed by us after enrollment. Just give us a general idea.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 1: Your info */}
            {step === 1 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Your Information</h2>
                <p className="mt-2 text-sm text-earth">
                  We&apos;ll use this to confirm your enrollment and send you details.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-foreground" htmlFor="firstName">
                        First Name <span className="text-barn">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground" htmlFor="lastName">
                        Last Name <span className="text-barn">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground" htmlFor="email">
                      Email Address <span className="text-barn">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground" htmlFor="phone">
                      Phone Number <span className="text-earth-light">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground" htmlFor="howHeard">
                      How did you hear about us? <span className="text-earth-light">(optional)</span>
                    </label>
                    <select
                      id="howHeard"
                      value={form.howHeard}
                      onChange={(e) => update("howHeard", e.target.value)}
                      className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                    >
                      <option value="">Select one</option>
                      <option>A friend or family member</option>
                      <option>Search engine</option>
                      <option>Social media</option>
                      <option>Church community</option>
                      <option>Adventist publication</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Party size */}
            {step === 2 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Your Group
                </h2>
                <p className="mt-2 text-sm text-earth">
                  Let us know how many adults and children will be attending.
                </p>
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground" htmlFor="adults">
                      Number of Adults
                    </label>
                    <input
                      id="adults"
                      type="number"
                      min={1}
                      max={10}
                      value={form.adults}
                      onChange={(e) => update("adults", Number(e.target.value))}
                      className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground" htmlFor="children">
                      Number of Children
                    </label>
                    <input
                      id="children"
                      type="number"
                      min={0}
                      max={10}
                      value={form.children}
                      onChange={(e) => update("children", Number(e.target.value))}
                      className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                    />
                    <p className="mt-1 text-xs text-earth">Children ages 8+ may participate in most programs with a parent.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground" htmlFor="specialNeeds">
                      Dietary restrictions or accessibility needs{" "}
                      <span className="text-earth-light">(optional)</span>
                    </label>
                    <textarea
                      id="specialNeeds"
                      rows={3}
                      value={form.specialNeeds}
                      onChange={(e) => update("specialNeeds", e.target.value)}
                      placeholder="e.g. gluten-free, wheelchair user, dairy allergy..."
                      className="mt-2 w-full resize-none rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Review Your Request
                </h2>
                <p className="mt-2 text-sm text-earth">
                  Please confirm the details below before submitting.
                </p>
                <div className="mt-6 divide-y divide-stone-darker rounded-xl border-2 border-stone-darker overflow-hidden">
                  {[
                    { label: "Program", value: selectedProgram?.title },
                    { label: "Preferred Dates", value: form.dates || "Flexible" },
                    { label: "Name", value: `${form.firstName} ${form.lastName}` },
                    { label: "Email", value: form.email },
                    { label: "Phone", value: form.phone || "Not provided" },
                    {
                      label: "Group",
                      value: `${form.adults} adult${form.adults !== 1 ? "s" : ""}${
                        form.children ? `, ${form.children} child${form.children !== 1 ? "ren" : ""}` : ""
                      }`,
                    },
                    {
                      label: "Special Needs",
                      value: form.specialNeeds || "None",
                    },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-4 px-5 py-4 text-sm">
                      <span className="font-semibold text-earth-light">{label}</span>
                      <span className="text-right text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-foreground" htmlFor="notes">
                    Anything else we should know? <span className="text-earth-light">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    className="mt-2 w-full resize-none rounded-xl border-2 border-stone-darker bg-stone px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                  />
                </div>
                <p className="mt-4 rounded-xl bg-amber/10 px-4 py-3 text-sm text-earth">
                  <strong>No payment is due now.</strong> We&apos;ll confirm your spot by email, then send
                  next steps and payment information.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex justify-between gap-4">
              {step > 0 ? (
                <Button
                  variant="ghost"
                  onClick={() => setStep((s) => s - 1)}
                >
                  ← Back
                </Button>
              ) : (
                <div />
              )}
              {step < STEPS.length - 1 ? (
                <Button
                  variant="primary"
                  disabled={!canNext()}
                  onClick={() => setStep((s) => s + 1)}
                >
                  Continue →
                </Button>
              ) : (
                <Button variant="amber" onClick={handleSubmit}>
                  Submit Request
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
