"use client";

import { useState } from "react";
import Stepper from "@/components/Stepper";
import Button from "@/components/Button";

const steps = ["Choose Program", "Your Information", "Schedule & Stay", "Review"];

const programOptions = [
  { slug: "farming", title: "Sustainable Farming", duration: "5 Days", price: "$695" },
  { slug: "homemaking", title: "Traditional Homemaking", duration: "3 Days", price: "$395" },
  { slug: "construction", title: "Timber & Construction", duration: "7 Days", price: "$895" },
  { slug: "sewing", title: "Textile Arts & Sewing", duration: "4 Days", price: "$495" },
  { slug: "canning", title: "Food Preservation & Canning", duration: "2 Days", price: "$245" },
];

const sessionsByProgram: Record<string, string[]> = {
  farming: ["April 14–18, 2026", "August 10–14, 2026", "October 5–9, 2026"],
  homemaking: ["May 8–10, 2026", "September 11–13, 2026"],
  construction: ["June 1–7, 2026", "September 7–13, 2026"],
  sewing: ["April 28 – May 1, 2026", "August 24–27, 2026"],
  canning: ["July 17–18, 2026", "September 19–20, 2026"],
};

export default function RegisterForm() {
  const [step, setStep] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [accommodation, setAccommodation] = useState("none");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    adults: "1",
    children: "0",
    dietary: "",
    notes: "",
  });

  const canProceedStep0 = selectedProgram !== "";
  const canProceedStep1 =
    form.firstName && form.lastName && form.email && form.phone;
  const canProceedStep2 = selectedSession !== "";

  const selectedProgramData = programOptions.find((p) => p.slug === selectedProgram);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl bg-cream p-10 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-3xl">
          ✓
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Enrollment Request Received
        </h2>
        <p className="mt-3 text-base leading-relaxed text-earth">
          Thank you, {form.firstName}. Your enrollment request for{" "}
          <strong>{selectedProgramData?.title}</strong> ({selectedSession}) has been submitted.
          We'll review your information and reach out within 2–3 business days to confirm your
          spot and discuss payment arrangements.
        </p>
        <div className="mt-8">
          <Button href="/programs" variant="primary">
            Explore More Programs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Stepper steps={steps} currentStep={step} />

      <form onSubmit={handleSubmit} noValidate>
        <div className="mt-8 rounded-2xl bg-cream p-6 shadow-sm sm:p-8">
          {/* Step 0: Choose Program */}
          {step === 0 && (
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Choose a Program</h2>
              <p className="mt-2 text-sm text-earth">Select the program you'd like to enroll in.</p>
              <div className="mt-6 space-y-3">
                {programOptions.map((prog) => (
                  <label
                    key={prog.slug}
                    className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-colors duration-150 ${
                      selectedProgram === prog.slug
                        ? "border-forest bg-forest/5"
                        : "border-stone-darker hover:border-stone-darker hover:bg-stone-dark/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="program"
                      value={prog.slug}
                      checked={selectedProgram === prog.slug}
                      onChange={() => {
                        setSelectedProgram(prog.slug);
                        setSelectedSession("");
                      }}
                      className="mt-0.5 accent-forest"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{prog.title}</p>
                      <p className="text-sm text-earth">{prog.duration}</p>
                    </div>
                    <span className="text-sm font-bold text-forest">{prog.price}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Your Information</h2>
              <p className="mt-2 text-sm text-earth">Tell us about yourself so we can prepare for your arrival.</p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-foreground">
                    First Name <span className="text-barn">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="Martha"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-foreground">
                    Last Name <span className="text-barn">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="Yoder"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email Address <span className="text-barn">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="martha@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone Number <span className="text-barn">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="(615) 555-0100"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-foreground">
                    Street Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="123 Country Road"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-foreground">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="Nashville"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="mb-1.5 block text-sm font-medium text-foreground">
                    State
                  </label>
                  <input
                    id="state"
                    type="text"
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="TN"
                  />
                </div>
                <div>
                  <label htmlFor="adults" className="mb-1.5 block text-sm font-medium text-foreground">
                    Adults Enrolling
                  </label>
                  <select
                    id="adults"
                    value={form.adults}
                    onChange={(e) => setForm({ ...form, adults: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                  >
                    {["1", "2", "3", "4"].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="children" className="mb-1.5 block text-sm font-medium text-foreground">
                    Children Attending
                  </label>
                  <select
                    id="children"
                    value={form.children}
                    onChange={(e) => setForm({ ...form, children: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                  >
                    {["0", "1", "2", "3", "4", "5"].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="dietary" className="mb-1.5 block text-sm font-medium text-foreground">
                    Dietary Restrictions or Allergies
                  </label>
                  <input
                    id="dietary"
                    type="text"
                    value={form.dietary}
                    onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                    className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                    placeholder="Gluten-free, nut allergy, etc. (leave blank if none)"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Schedule & Stay */}
          {step === 2 && (
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Schedule & Stay</h2>
              <p className="mt-2 text-sm text-earth">
                Choose your session date and overnight accommodation preference.
              </p>

              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-foreground">
                  Available Sessions for {selectedProgramData?.title}
                </p>
                <div className="space-y-3">
                  {(sessionsByProgram[selectedProgram] ?? []).map((session) => (
                    <label
                      key={session}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-colors duration-150 ${
                        selectedSession === session
                          ? "border-forest bg-forest/5"
                          : "border-stone-darker hover:bg-stone-dark/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="session"
                        value={session}
                        checked={selectedSession === session}
                        onChange={() => setSelectedSession(session)}
                        className="accent-forest"
                      />
                      <span className="font-medium text-foreground">{session}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-foreground">Overnight Accommodation</p>
                <div className="space-y-3">
                  {[
                    { value: "none", label: "No accommodation needed — I'll commute daily" },
                    { value: "camping", label: "Primitive camping on-site (bring your own tent, free)" },
                    { value: "cabin", label: "Shared cabin bunk ($35/night per person)" },
                    { value: "private", label: "Private cabin room ($85/night)" },
                  ].map(({ value, label }) => (
                    <label
                      key={value}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-colors duration-150 ${
                        accommodation === value
                          ? "border-forest bg-forest/5"
                          : "border-stone-darker hover:bg-stone-dark/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="accommodation"
                        value={value}
                        checked={accommodation === value}
                        onChange={() => setAccommodation(value)}
                        className="accent-forest"
                      />
                      <span className="text-sm text-foreground">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-foreground">
                  Questions or Special Requests
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full rounded-lg border border-stone-darker bg-stone px-4 py-2.5 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                  placeholder="Any questions or things we should know before you arrive..."
                />
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Review Your Enrollment</h2>
              <p className="mt-2 text-sm text-earth">
                Please review your information before submitting. No payment is collected at this step—we'll follow up within 2–3 business days.
              </p>
              <div className="mt-6 space-y-4 rounded-xl bg-stone p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-earth-light">Program</p>
                    <p className="mt-0.5 font-semibold text-foreground">{selectedProgramData?.title}</p>
                  </div>
                  <div>
                    <p className="font-medium text-earth-light">Session</p>
                    <p className="mt-0.5 font-semibold text-foreground">{selectedSession}</p>
                  </div>
                  <div>
                    <p className="font-medium text-earth-light">Name</p>
                    <p className="mt-0.5 font-semibold text-foreground">
                      {form.firstName} {form.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-earth-light">Email</p>
                    <p className="mt-0.5 font-semibold text-foreground">{form.email}</p>
                  </div>
                  <div>
                    <p className="font-medium text-earth-light">Phone</p>
                    <p className="mt-0.5 font-semibold text-foreground">{form.phone}</p>
                  </div>
                  <div>
                    <p className="font-medium text-earth-light">Participants</p>
                    <p className="mt-0.5 font-semibold text-foreground">
                      {form.adults} adult{Number(form.adults) !== 1 ? "s" : ""}
                      {Number(form.children) > 0
                        ? `, ${form.children} child${Number(form.children) !== 1 ? "ren" : ""}`
                        : ""}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-earth-light">Accommodation</p>
                    <p className="mt-0.5 font-semibold text-foreground capitalize">
                      {accommodation === "none" ? "Commuting daily" : accommodation}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-earth-light">Program Cost</p>
                    <p className="mt-0.5 font-semibold text-forest">
                      {selectedProgramData?.price}
                    </p>
                  </div>
                </div>
                {form.notes && (
                  <div className="border-t border-stone-darker pt-4 text-sm">
                    <p className="font-medium text-earth-light">Notes</p>
                    <p className="mt-0.5 text-foreground">{form.notes}</p>
                  </div>
                )}
              </div>
              <p className="mt-4 text-xs text-earth-light">
                By submitting this form, you agree to our{" "}
                <a href="/policies/terms" className="underline hover:text-forest">Terms of Service</a>{" "}
                and{" "}
                <a href="/policies/refunds" className="underline hover:text-forest">Refund Policy</a>.
                Payment details will be sent via email after we confirm availability.
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setStep((s) => s - 1)}
            className={step === 0 ? "invisible" : ""}
          >
            ← Back
          </Button>
          {step < steps.length - 1 ? (
            <Button
              type="button"
              variant="primary"
              onClick={() => setStep((s) => s + 1)}
              disabled={
                (step === 0 && !canProceedStep0) ||
                (step === 1 && !canProceedStep1) ||
                (step === 2 && !canProceedStep2)
              }
            >
              Continue →
            </Button>
          ) : (
            <Button type="submit" variant="amber" size="lg">
              Submit Enrollment Request
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
