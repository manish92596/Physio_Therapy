import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PhoneOff, Users, CalendarX, Bell, Phone, Calendar, CheckCircle, MessageCircle } from 'lucide-react';

const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    { icon: PhoneOff, text: 'Missed calls after hours cost you patients' },
    { icon: Users, text: 'Front desk overwhelmed with routine inquiries' },
    { icon: CalendarX, text: 'No-shows drain your clinic revenue' },
    { icon: Bell, text: 'Manual appointment reminders waste staff time' },
  ];

  const solutions = [
    { icon: Phone, text: '24/7 call answering — never miss a patient' },
    { icon: Calendar, text: 'Automated booking frees your team' },
    { icon: CheckCircle, text: 'Smart confirmations reduce no-shows by 60%' },
    { icon: MessageCircle, text: 'AI handles FAQs about insurance, services & more' },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-white" data-testid="problem-solution-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-terracotta mb-4">The Challenge</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight mb-4">
            The Problem with Traditional Front Desks
          </h2>
          <p className="text-charcoal/50 text-lg max-w-2xl mx-auto font-light">
            Your front desk can only handle so much. Physiocare.Ai picks up where they leave off.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-sage/50 rounded-3xl p-8 md:p-10"
            data-testid="problems-card"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center">
                <PhoneOff className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">Without Physiocare.Ai</h3>
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
                  <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <p className="text-charcoal/70 font-light pt-2">{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-teal rounded-3xl p-8 md:p-10 text-white"
            data-testid="solutions-card"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-2xl text-white">With Physiocare.Ai</h3>
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
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white/90 font-light pt-2">{solution.text}</p>
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
