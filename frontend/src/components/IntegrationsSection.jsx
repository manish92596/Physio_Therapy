import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';

const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Using text-based logos since we need specific dental software logos
  const integrations = [
    { name: 'Dentrix', color: '#0066CC' },
    { name: 'Eaglesoft', color: '#FF6B00' },
    { name: 'Open Dental', color: '#2E7D32' },
    { name: 'Curve Dental', color: '#7B1FA2' },
    { name: 'Carestack', color: '#00838F' },
    { name: 'Denticon', color: '#C62828' },
    { name: 'tab32', color: '#1565C0' },
    { name: 'Dentimax', color: '#6A1B9A' },
  ];

  return (
    <section ref={ref} id="integrations" className="py-20 md:py-24 px-4 bg-mint-green/50" data-testid="integrations-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Connects with Your Tools
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Seamlessly integrates with the practice management software your clinic already uses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="#E6F8F5"
            gradientWidth={100}
            pauseOnHover={true}
          >
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="mx-8 flex items-center justify-center"
                data-testid={`integration-logo-${index}`}
              >
                <div className="bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 marquee-logo hover:shadow-md transition-all">
                  <span 
                    className="font-bold text-xl tracking-tight"
                    style={{ color: integration.color }}
                  >
                    {integration.name}
                  </span>
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-navy/50 text-sm">
            + 20 more integrations available. Don't see yours? <a href="#faq" className="text-dental-blue hover:underline">Contact us</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
