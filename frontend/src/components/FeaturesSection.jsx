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
      description: 'Patients book, reschedule, or cancel appointments through natural conversation — no hold times.',
    },
    {
      icon: Bell,
      title: 'Smart Reminders & Confirmations',
      description: 'Reduce no-shows by 60% with personalized reminders via call, text, or email.',
    },
    {
      icon: HelpCircle,
      title: 'Patient FAQ Handling',
      description: 'Instantly answer common questions about services, insurance, hours, and directions.',
    },
    {
      icon: Link,
      title: 'PMS Integration',
      description: 'Seamlessly connects with Dentrix, Eaglesoft, Open Dental, and 20+ other practice management systems.',
    },
    {
      icon: Shield,
      title: 'HIPAA-Compliant & Secure',
      description: 'Enterprise-grade security with full HIPAA compliance. Patient data is encrypted and protected.',
    },
  ];

  return (
    <section ref={ref} id="features" className="py-20 md:py-32 px-4 bg-white" data-testid="features-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Everything You Need to Automate Patient Calls
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Powerful features designed specifically for dental practices.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm feature-card"
              data-testid={`feature-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-mint-green flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-dental-blue" />
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-navy/60 leading-relaxed">
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
