import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link2, Settings, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: '01',
      icon: Link2,
      title: 'Connect your practice management software',
      description: 'Seamlessly integrate with Jane App, WebPT, Clinicient, and more. Takes just 5 minutes.',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Customize your AI voice agent',
      description: "Set your clinic's hours, services, and scripts. Train the AI on your specific FAQs and booking rules.",
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Go live — your AI starts working',
      description: 'Your AI answers calls, books PT sessions, sends reminders, and handles patient questions automatically.',
    },
  ];

  return (
    <section ref={ref} id="how-it-works" className="py-24 md:py-32 px-4 bg-cream" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-terracotta mb-4">Simple Setup</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-charcoal/50 text-lg max-w-2xl mx-auto font-light">
            No technical expertise required. Be up and running within 48 hours.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-28 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-teal via-terracotta to-healing-green" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
                data-testid={`step-${index + 1}`}
              >
                {/* Step card */}
                <div className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(18,28,26,0.04)] border border-charcoal/5 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  {/* Number badge */}
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-sage flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-teal" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-charcoal text-white text-sm font-bold flex items-center justify-center font-serif">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-charcoal mb-4">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/50 font-light">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector - visible on mobile between cards */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6 md:hidden">
                    <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
