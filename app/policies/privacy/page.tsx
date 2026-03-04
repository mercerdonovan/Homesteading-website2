import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Heritage Harvest Homestead collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Privacy Policy"
        subtitle="Updated January 2025"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies", href: "/policies" },
          { label: "Privacy", href: "/policies/privacy" },
        ]}
      />

      <Section className="bg-stone">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8 rounded-2xl bg-cream p-8 shadow-sm sm:p-12">

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">1. Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Heritage Harvest Homestead (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
                This policy explains what personal information we collect, why we collect it,
                how we use it, and your rights regarding that information.
              </p>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We do not sell your information. We are not an advertising company. We are a
                small faith-based homesteading ministry, and we treat your data accordingly.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">2. Information We Collect</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We collect information when you:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li><strong>Register for a program:</strong> name, email address, phone number, group size, dietary needs.</li>
                <li><strong>Contact us:</strong> name, email, and the contents of your message.</li>
                <li><strong>Make a donation:</strong> name, email, and donation amount. Payment processing information is handled by our payment processor and never stored on our servers.</li>
                <li><strong>Browse the website:</strong> standard server logs (IP address, browser type, pages visited) via our hosting provider.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We use the information we collect to:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li>Confirm and manage your program enrollment.</li>
                <li>Respond to your questions and requests.</li>
                <li>Send you information about upcoming programs or events (you can opt out at any time).</li>
                <li>Process donations and send tax receipts.</li>
                <li>Improve our website and services.</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We do not use your information for targeted advertising, and we do not share it with
                third-party marketing companies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">4. Information Sharing</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We share your information only in the following limited circumstances:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li><strong>Service providers:</strong> We may share information with email and payment service providers who help us operate the ministry. These providers are contractually obligated to protect your data.</li>
                <li><strong>Legal requirements:</strong> We will disclose information if required by law or to protect the safety of our guests and staff.</li>
                <li><strong>With your consent:</strong> For example, if you opt into a mailing list or agree to a testimonial.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">5. Data Retention</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We retain your information for as long as necessary to provide our services and
                comply with our legal obligations. Enrollment records are kept for 5 years for
                accounting and safety purposes. You may request deletion of your data at any time
                (see Section 7).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">6. Security</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We use reasonable technical and organizational measures to protect your personal
                information. However, no system is perfectly secure. We encourage you to use
                strong passwords and contact us immediately if you believe your information has
                been compromised.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">7. Your Rights</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                You have the right to:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li>Request a copy of the personal information we hold about you.</li>
                <li>Correct inaccurate information.</li>
                <li>Request deletion of your data.</li>
                <li>Opt out of any communications at any time by replying &ldquo;unsubscribe&rdquo; to any email or contacting us directly.</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-earth">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:hello@heritageharvesthomestead.org" className="font-semibold text-forest underline-offset-2 hover:underline">
                  hello@heritageharvesthomestead.org
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">8. Children&apos;s Privacy</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Our website is not directed to children under 13. We do not knowingly collect
                personal information from children under 13 without parental consent. If you
                believe we have inadvertently collected such information, please contact us
                immediately.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">9. Changes to This Policy</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We may update this privacy policy from time to time. The revision date at the top
                of the page will reflect the most recent update. We encourage you to review this
                page periodically.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">10. Contact</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Questions about this policy or our data practices:{" "}
                <a href="mailto:hello@heritageharvesthomestead.org" className="font-semibold text-forest underline-offset-2 hover:underline">
                  hello@heritageharvesthomestead.org
                </a>
              </p>
            </div>

          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/policies">Back to All Policies</Button>
            <Button href="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
