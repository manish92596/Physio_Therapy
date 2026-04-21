import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Stethoscope, Activity, HeartPulse, CalendarCheck, Clipboard, UserCheck } from 'lucide-react';

const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const integrations = [
    { name: 'Jane App', icon: Stethoscope, color: '#2B6165' },
    { name: 'WebPT', icon: Activity, color: '#E07A5F' },
    { name: 'Clinicient', icon: HeartPulse, color: '#829379' },
    { name: 'SPRY PT', icon: CalendarCheck, color: '#45898F' },
    { name: 'PtEverywhere', icon: Clipboard, color: '#2B6165' },
    { name: 'Noterro', icon: UserCheck, color: '#E07A5F' },
    { name: 'SimplePractice', icon: Stethoscope, color: '#829379' },
    { name: 'PhysiTrack', icon: Activity, color: '#45898F' },
  ];

  return (
    <section ref={ref} id="integrations" className="py-20 md:py-24 px-4 bg-sage border-y border-charcoal/5" data-testid="integrations-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-terracotta mb-4">Integrations</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight mb-4">
            Connects with Your Tools
          </h2>
          <p className="text-charcoal/50 text-lg max-w-2xl mx-auto font-light">
            Seamlessly integrates with the practice management software your clinic already uses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Marquee
            speed={35}
            gradient={true}
            gradientColor="#EDF0E9"
            gradientWidth={80}
            pauseOnHover={true}
          >
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <div
                  key={index}
                  className="mx-6 flex items-center justify-center"
                  data-testid={`integration-logo-${index}`}
                >
                  <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-charcoal/5 flex items-center gap-3 hover:shadow-md transition-all duration-300">
                    <IconComponent 
                      className="w-6 h-6"
                      style={{ color: integration.color }}
                    />
                    <span 
                      className="font-semibold text-lg"
                      style={{ color: integration.color }}
                    >
                      {integration.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-charcoal/40 text-sm font-light">
            + 20 more integrations available. Don't see yours? <a href="#faq" className="text-teal hover:underline">Contact us</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
