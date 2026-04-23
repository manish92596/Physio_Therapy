import { useEffect } from "react";
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

const CONTACT_EMAIL = "info@techladder.ai";

const policySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'TechLadder AI ("TechLadder.ai", "we", "our", "us") respects your privacy and is committed to protecting personal information. This Privacy Policy explains how we collect, use, process, and safeguard information when you access our website and use our AI-powered voice automation services.',
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We may collect business contact information (such as email address and phone number), voice recordings, transcripts, call metadata, usage data, analytics data, and technical information such as IP address and browser details.",
    ],
  },
  {
    title: "3. Voice & Call Data",
    paragraphs: [
      "When customers deploy AI agents, we may process voice recordings, transcripts, timestamps, sentiment data, and interaction logs. We act as a Data Processor on behalf of enterprise customers who are the Data Fiduciaries.",
    ],
  },
  {
    title: "4. Purpose of Processing",
    paragraphs: [
      "We process data to operate voice AI systems, provide analytics, maintain system reliability, enhance performance, comply with legal requirements, and support enterprise customers.",
    ],
  },
  {
    title: "5. Legal Basis (DPDP Act 2023)",
    paragraphs: [
      "In accordance with the Digital Personal Data Protection Act, 2023, customers deploying our platform act as Data Fiduciaries. TechLadder AI processes data only under lawful instructions and contractual agreements.",
    ],
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "We implement enterprise-grade safeguards including encryption in transit and at rest, access controls, monitoring systems, and infrastructure security controls aligned with industry standards.",
    ],
  },
  {
    title: "7. Data Sharing",
    paragraphs: [
      "We may engage trusted infrastructure providers, telephony partners, and analytics services under strict confidentiality obligations. We do not sell personal data.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "Data retention is configurable by customers. Upon termination of services, data will be deleted or returned as contractually agreed.",
    ],
  },
  {
    title: "9. Your Rights",
    paragraphs: [
      "Depending on jurisdiction, individuals may have rights to access, correct, or delete personal data. Requests may be directed to info@techladder.ai.",
    ],
  },
  {
    title: "10. Changes to Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Updates will be reflected with a revised effective date.",
    ],
  },
  {
    title: "11. Contact",
    paragraphs: [
      "For questions, contact: info@techladder.ai",
    ],
  },
];

const renderParagraph = (text) => {
  if (!text.includes(CONTACT_EMAIL)) {
    return text;
  }

  const [before, after] = text.split(CONTACT_EMAIL);

  return (
    <>
      {before}
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="font-medium text-teal transition-colors hover:text-teal-light"
      >
        {CONTACT_EMAIL}
      </a>
      {after}
    </>
  );
};

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />

      <main className="pt-20 md:pt-24">
        <section className="relative overflow-hidden border-b border-charcoal/10 bg-[linear-gradient(180deg,#FFFDF9_0%,#F7F8F6_100%)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-8 h-44 w-44 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
            <div className="absolute right-8 top-20 h-24 w-24 rounded-full bg-terracotta/10 blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 md:py-28">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/90 text-teal shadow-lg ring-1 ring-charcoal/10">
              <Shield className="h-8 w-8" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">
              TechLadder.ai
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-charcoal md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-lg text-charcoal/70 md:text-xl">
              Effective Date: 11 February 2026
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="rounded-[2rem] border border-charcoal/10 bg-white/95 p-6 shadow-[0_24px_80px_rgba(18,28,26,0.08)] md:p-10">
              <div className="space-y-10">
                {policySections.map((section) => (
                  <section
                    key={section.title}
                    className="border-b border-charcoal/10 pb-8 last:border-b-0 last:pb-0"
                  >
                    <h2 className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-8 text-charcoal/80 md:text-lg">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{renderParagraph(paragraph)}</p>
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

export default PrivacyPolicyPage;
