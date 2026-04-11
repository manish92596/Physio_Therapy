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
      description: 'Seamlessly integrate with Dentrix, Eaglesoft, Open Dental, and more. Takes just 5 minutes.',
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
      description: 'Your AI answers calls, books appointments, sends reminders, and handles patient questions automatically.',
    },
  ];

  return (
    <section ref={ref} id="how-it-works" className="py-20 md:py-32 px-4 bg-ivory" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            No technical expertise required. Be up and running within 48 hours.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-dental-blue via-mint-green to-dental-blue" />

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
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center">
                  {/* Number badge */}
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-mint-green flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-dental-blue" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-navy mb-4">
                    {step.title}
                  </h3>
                  <p className="text-navy/60">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector - visible on mobile between cards */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden">
                    <svg className="w-6 h-6 text-dental-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
