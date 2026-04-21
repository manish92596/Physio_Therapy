import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 px-4" data-testid="cta-section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-charcoal rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl -z-0" />
          
          <div className="relative z-10">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight font-light">
              Ready to Stop Missing Calls?
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
              Join 1,800+ physical therapy clinics trusting Physiocare.Ai to handle their patient communications.
            </p>
            
            <Button
              size="lg"
              className="bg-terracotta hover:bg-terracotta-light text-white rounded-full px-8 py-6 text-lg group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              onClick={() => window.open('https://calendly.com', '_blank')}
              data-testid="cta-demo-btn"
            >
              Book Your Free Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-white/40 text-sm mt-6 font-light">
              No credit card required · 14-day free trial · Setup in 48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
