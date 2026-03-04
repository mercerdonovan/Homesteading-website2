"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import Section from "@/components/Section";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission (placeholder — no backend yet)
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <>
      <PageHero
        eyebrow="Reach Out"
        title="Contact Us"
        subtitle="We're real people on a real farm. We read every message and respond within 1–2 business days."
      />

      <Section className="bg-stone">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Form */}
          <div>
            {status === "success" ? (
              <div className="rounded-2xl bg-cream p-10 shadow-sm text-center">
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest/10">
                  <svg className="h-8 w-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Message Sent</h2>
                <p className="mt-3 text-base text-earth">
                  Thanks, <strong>{form.name}</strong>. We&apos;ll be in touch at{" "}
                  <strong>{form.email}</strong> within 1–2 business days.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-8 text-sm font-semibold text-forest underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Send a Message
                </h2>
                <p className="mt-2 text-sm text-earth">
                  Questions about programs, lodging, directions, or anything else—we&apos;re glad to hear from you.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Your Name <span className="text-barn">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-cream px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        Email Address <span className="text-barn">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-cream px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className="mt-2 w-full rounded-xl border-2 border-stone-darker bg-cream px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none"
                    >
                      <option value="">Select a topic (optional)</option>
                      <option>Program question</option>
                      <option>Enrollment / registration</option>
                      <option>Lodging & accommodations</option>
                      <option>Directions & getting here</option>
                      <option>Donation or giving</option>
                      <option>Partnership or ministry inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                      Message <span className="text-barn">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us what's on your mind…"
                      className="mt-2 w-full resize-none rounded-xl border-2 border-stone-darker bg-cream px-4 py-3 text-sm text-foreground placeholder:text-earth-light focus:border-forest focus:outline-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="lg"
                    disabled={!form.name || !form.email || !form.message || status === "submitting"}
                  >
                    {status === "submitting" ? "Sending…" : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-cream p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-foreground">Direct Contact</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-forest/10 text-sm">📞</span>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+19315550142" className="text-earth transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest">
                      (931) 555-0142
                    </a>
                    <p className="mt-0.5 text-xs text-earth-light">Mon–Fri, 8 am–5 pm EST · No calls on Sabbath</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-forest/10 text-sm">✉</span>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:hello@heritageharvesthomestead.org" className="text-earth transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest break-all">
                      hello@heritageharvesthomestead.org
                    </a>
                    <p className="mt-0.5 text-xs text-earth-light">We reply within 1–2 business days</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-forest/10 text-sm">📍</span>
                  <div>
                    <p className="font-semibold text-foreground">Mailing Address</p>
                    <address className="not-italic text-earth">
                      12400 Heritage Way<br />
                      Crossville, TN 38571
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-forest-dark p-8">
              <h3 className="font-heading text-xl font-bold text-cream">Hours & Availability</h3>
              <div className="mt-4 space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "8:00 am – 5:00 pm" },
                  { day: "Saturday (Sabbath)", hours: "Closed — day of rest" },
                  { day: "Sunday", hours: "By appointment" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between gap-4 border-b border-forest-light/20 pb-2 last:border-0">
                    <span className="text-cream/70">{day}</span>
                    <span className="font-semibold text-cream">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-amber/10 border-2 border-amber/20 p-6">
              <p className="text-sm font-semibold text-amber">Ready to enroll?</p>
              <p className="mt-1 text-sm text-earth">
                Don&apos;t wait for a reply—go ahead and submit your registration request and we&apos;ll connect there.
              </p>
              <Button href="/register" variant="primary" className="mt-4">
                Go to Registration →
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
