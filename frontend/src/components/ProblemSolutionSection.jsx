import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PhoneOff, Users, CalendarX, Bell, Phone, Calendar, CheckCircle, MessageCircle } from 'lucide-react';

const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    { icon: PhoneOff, text: 'Missed calls after hours cost you patients' },
    { icon: Users, text: 'Front desk staff overwhelmed with routine calls' },
    { icon: CalendarX, text: 'No-shows drain your revenue' },
    { icon: Bell, text: 'Manual reminders are time-consuming' },
  ];

  const solutions = [
    { icon: Phone, text: '24/7 call answering — never miss a patient' },
    { icon: Calendar, text: 'Automated booking frees your staff' },
    { icon: CheckCircle, text: 'Smart confirmations reduce no-shows by 60%' },
    { icon: MessageCircle, text: 'AI handles FAQs instantly' },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-white" data-testid="problem-solution-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            The Problem with Traditional Front Desks
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Your front desk can only handle so much. DentaLine AI picks up where they leave off.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-10"
            data-testid="problems-card"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <PhoneOff className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-serif text-2xl text-navy">Without DentaLine AI</h3>
            </div>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-navy/70">{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-mint-green rounded-3xl p-8 md:p-10"
            data-testid="solutions-card"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-dental-blue/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-dental-blue" />
              </div>
              <h3 className="font-serif text-2xl text-navy">With DentaLine AI</h3>
            </div>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-dental-blue/20 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-4 h-4 text-dental-blue" />
                  </div>
                  <p className="text-navy">{solution.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
