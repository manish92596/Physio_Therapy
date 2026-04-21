import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Calendar, Bell, HelpCircle, Link, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Phone,
      title: '24/7 Call Answering',
      description: 'Never miss a patient call again. Your AI assistant answers every call, day or night, weekends and holidays.',
    },
    {
      icon: Calendar,
      title: 'Automated Appointment Booking',
      description: 'Patients book, reschedule, or cancel PT sessions through natural conversation — no hold times.',
    },
    {
      icon: Bell,
      title: 'Smart Reminders & Confirmations',
      description: 'Reduce no-shows by 60% with personalized reminders via call, text, or email.',
    },
    {
      icon: HelpCircle,
      title: 'Patient FAQ Handling',
      description: 'Instantly answer questions about treatments, insurance coverage, clinic hours, and directions.',
    },
    {
      icon: Link,
      title: 'PMS Integration',
      description: 'Seamlessly connects with Jane App, WebPT, Clinicient, SPRY PT, and 20+ other practice systems.',
    },
    {
      icon: Shield,
      title: 'HIPAA-Compliant & Secure',
      description: 'Enterprise-grade security with full HIPAA compliance. Patient data is encrypted and protected.',
    },
  ];

  return (
    <section ref={ref} id="features" className="py-24 md:py-32 px-4 bg-white" data-testid="features-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-terracotta mb-4">Features</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight mb-4">
            Everything You Need to Automate Patient Calls
          </h2>
          <p className="text-charcoal/50 text-lg max-w-2xl mx-auto font-light">
            Powerful features designed specifically for physical therapy practices.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-charcoal/5 shadow-[0_4px_24px_rgba(18,28,26,0.04)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              data-testid={`feature-card-${index}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-sage flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal/50 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
