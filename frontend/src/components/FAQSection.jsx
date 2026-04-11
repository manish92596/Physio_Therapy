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
      question: 'Is DentaLine AI HIPAA compliant?',
      answer: 'Yes, absolutely. DentaLine AI is fully HIPAA compliant. All patient data is encrypted in transit and at rest, we maintain BAA agreements, and our infrastructure meets all healthcare security requirements. We conduct regular third-party security audits to ensure compliance.',
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
      answer: 'DentaLine AI is designed to handle most common questions automatically. For complex issues beyond its scope, it seamlessly transfers the call to your staff or takes a detailed message for follow-up. You define the escalation rules.',
    },
    {
      question: 'Does it work after hours and on weekends?',
      answer: 'Yes! That\'s one of the main benefits. DentaLine AI answers calls 24/7, including after hours, weekends, and holidays. Patients can book, reschedule, or get information anytime, even when your office is closed.',
    },
    {
      question: 'What languages does it support?',
      answer: 'DentaLine AI currently supports English and Spanish, with French coming soon. Our AI can detect the caller\'s language preference and respond accordingly. Custom language support is available for Enterprise plans.',
    },
  ];

  return (
    <section ref={ref} id="faq" className="py-20 md:py-32 px-4 bg-white" data-testid="faq-section">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-navy/60 text-lg">
            Everything you need to know about DentaLine AI.
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
                className="bg-ivory rounded-xl px-6 border-none"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-medium text-navy hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy/70 pb-5 leading-relaxed">
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
