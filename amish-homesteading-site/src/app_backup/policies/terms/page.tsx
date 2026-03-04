import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing participation in Heritage Harvest Homestead programs and use of this website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Terms of Service"
        subtitle="Updated January 2025"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies", href: "/policies" },
          { label: "Terms", href: "/policies/terms" },
        ]}
      />

      <Section className="bg-stone">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8 rounded-2xl bg-cream p-8 shadow-sm sm:p-12">

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                By registering for a program, using this website, or visiting Heritage Harvest Homestead,
                you agree to these Terms of Service. If you do not agree, please do not use our services
                or attend our programs.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">2. Program Participation</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Participation in Heritage Harvest programs is voluntary. By enrolling, you agree to:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li>Follow all safety instructions provided by instructors.</li>
                <li>Treat the property, animals, and other participants with respect.</li>
                <li>Accept that some activities involve physical work and inherent risk of minor injury.</li>
                <li>Sign a liability waiver before your first session on-site.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">3. Assumption of Risk</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Homesteading activities—including farming, construction, canning, and related skills—
                involve physical activity and some inherent risk. Heritage Harvest Homestead takes
                reasonable precautions to ensure participant safety, but cannot guarantee that injuries
                will not occur.
              </p>
              <p className="mt-4 text-base leading-relaxed text-earth">
                By participating, you acknowledge and accept these risks on behalf of yourself and any
                minors for whom you are responsible.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">4. Property Rules</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                While on the Heritage Harvest property, guests agree to:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li>Respect the working farm environment and all livestock.</li>
                <li>Stay within designated areas unless instructed otherwise.</li>
                <li>Refrain from bringing alcohol, tobacco, or recreational substances.</li>
                <li>Observe Sabbath quiet (sundown Friday to sundown Saturday).</li>
                <li>Supervise children at all times near animals and equipment.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">5. Photography & Media</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Heritage Harvest may photograph or record program sessions for educational and promotional
                use. By participating, you grant us permission to use images in which you appear.
              </p>
              <p className="mt-4 text-base leading-relaxed text-earth">
                If you do not wish to be photographed, notify us in writing before your session and we
                will accommodate this request.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">6. Website Use</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                This website is for informational and enrollment purposes. You agree not to:
              </p>
              <ul className="mt-3 space-y-2 pl-6 text-base text-earth list-disc">
                <li>Use it for any unlawful purpose.</li>
                <li>Attempt to access restricted areas or interfere with site operation.</li>
                <li>Submit false or misleading information through any form.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">7. Limitation of Liability</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                To the extent permitted by law, Heritage Harvest Homestead is not liable for any
                indirect, incidental, or consequential damages arising from your participation in
                programs or use of this website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">8. Changes to These Terms</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                We may update these terms from time to time. Updated versions will be posted on this
                page with the revision date. Continued use of our services constitutes acceptance of
                the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">9. Contact</h2>
              <p className="mt-4 text-base leading-relaxed text-earth">
                Questions about these terms can be directed to:{" "}
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
