import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: 'Is Physiocare.Ai HIPAA compliant?',
      answer: 'Yes, absolutely. Physiocare.Ai is fully HIPAA compliant. All patient data is encrypted in transit and at rest, we maintain BAA agreements, and our infrastructure meets all healthcare security requirements. We conduct regular third-party security audits to ensure compliance.',
    },
    {
      question: 'How long does setup take?',
      answer: 'Most clinics are live within 48 hours. Our onboarding team handles the PMS integration and initial configuration. You just need to review and customize your AI scripts, and you\'re ready to go. Enterprise clients with complex requirements may take up to 1 week.',
    },
    {
      question: 'Can I customize what the AI says?',
      answer: 'Yes! You have full control over your AI\'s scripts, tone, and responses. You can customize greetings, appointment booking flows, FAQ answers, and more. Our team helps you set up scripts that match your clinic\'s voice and policies.',
    },
    {
      question: 'What happens if a patient has a complex question?',
      answer: 'Physiocare.Ai is designed to handle most common questions automatically. For complex clinical issues beyond its scope, it seamlessly transfers the call to your staff or takes a detailed message for follow-up. You define the escalation rules.',
    },
    {
      question: 'Does it work after hours and on weekends?',
      answer: 'Yes! That\'s one of the main benefits. Physiocare.Ai answers calls 24/7, including after hours, weekends, and holidays. Patients can book PT sessions, reschedule, or get information anytime, even when your clinic is closed.',
    },
    {
      question: 'What languages does it support?',
      answer: 'Physiocare.Ai currently supports English and Spanish, with additional languages coming soon. Our AI can detect the caller\'s language preference and respond accordingly. Custom language support is available for Enterprise plans.',
    },
  ];

  return (
    <section ref={ref} id="faq" className="py-24 md:py-32 px-4 bg-white" data-testid="faq-section">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-terracotta mb-4">FAQ</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-charcoal/50 text-lg font-light">
            Everything you need to know about Physiocare.Ai.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-sage/50 rounded-2xl px-6 border-none"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-medium text-charcoal hover:no-underline py-5 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/60 pb-5 leading-relaxed font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
