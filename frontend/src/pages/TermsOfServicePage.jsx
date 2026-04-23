import { useEffect } from "react";
import { Scale } from "lucide-react";
import Navbar from "@/components/Navbar";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using TechLadder AI services, including website, APIs, voice automation systems, and related platforms, you agree to these Terms of Service.",
    ],
  },
  {
    title: "2. Services",
    paragraphs: [
      "TechLadder AI provides AI-powered voice agents, telephony infrastructure, analytics dashboards, APIs, and automation services.",
    ],
  },
  {
    title: "3. Customer Responsibilities",
    paragraphs: [
      "Customers must ensure lawful data collection, obtain required call recording consent, and comply with applicable Indian laws including the Digital Personal Data Protection Act, 2023 and IT Act, 2000.",
    ],
  },
  {
    title: "4. Data Processing",
    paragraphs: [
      "When using our Services, customers act as Data Fiduciaries and TechLadder AI acts as Data Processor.",
    ],
  },
  {
    title: "5. Prohibited Use",
    paragraphs: [
      "The Services may not be used for unlawful robocalling, harassment, impersonation, fraud, political misinformation, or illegal surveillance.",
    ],
  },
  {
    title: "6. Fees & Payment",
    paragraphs: [
      "Fees are defined in applicable order forms or contracts. Non-payment may result in suspension.",
    ],
  },
  {
    title: "7. Intellectual Property",
    paragraphs: [
      "TechLadder AI retains ownership of platform software, AI systems, and infrastructure. Customers retain ownership of their data.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, TechLadder AI shall not be liable for indirect damages or losses exceeding the fees paid in the preceding 12 months.",
    ],
  },
  {
    title: "9. Indemnification",
    paragraphs: [
      "Customers agree to indemnify TechLadder AI against claims arising from misuse of services or regulatory non-compliance.",
    ],
  },
  {
    title: "10. Termination",
    paragraphs: [
      "Either party may terminate as per contractual terms. Upon termination, access will be revoked and data handled per agreement.",
    ],
  },
  {
    title: "11. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of India. Jurisdiction shall lie with courts in India.",
    ],
  },
];

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />

      <main className="pt-16 md:pt-20">
        <section className="relative overflow-hidden border-b border-charcoal/10 bg-[linear-gradient(180deg,#FFFDF9_0%,#F7F8F6_100%)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-8 h-44 w-44 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
            <div className="absolute right-8 top-20 h-24 w-24 rounded-full bg-terracotta/10 blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8 md:py-16">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/90 text-teal shadow-lg ring-1 ring-charcoal/10">
              <Scale className="h-8 w-8" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">
              TechLadder.ai
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-charcoal md:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-5 text-lg text-charcoal/70 md:text-xl">
              Effective Date: 11 February 2026
            </p>
          </div>
        </section>

        <section className="-mt-8 pb-16 pt-4 md:-mt-12 md:pb-24 md:pt-6">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="rounded-[2rem] border border-charcoal/10 bg-white/95 p-6 shadow-[0_24px_80px_rgba(18,28,26,0.08)] md:p-10">
              <div className="space-y-10">
                {termsSections.map((section) => (
                  <section
                    key={section.title}
                    className="border-b border-charcoal/10 pb-8 last:border-b-0 last:pb-0"
                  >
                    <h2 className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-8 text-charcoal/80 md:text-lg">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center gap-4 border-t border-charcoal/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="text-sm uppercase tracking-[0.2em] text-charcoal/50">
                  Need to go back?
                </p>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-light"
                >
                  Back to home
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
