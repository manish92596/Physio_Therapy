import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/button';
import { Shield, CheckCircle, Clock, Zap } from 'lucide-react';

const WaveformAnimation = ({ isActive }) => {
  const bars = 24;
  
  return (
    <div className="flex items-end justify-center gap-1 h-32 md:h-48">
      {[...Array(bars)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 md:w-2 rounded-full"
          style={{
            background: i % 3 === 0 ? '#00AEEF' : i % 3 === 1 ? '#0A1128' : '#E6F8F5',
          }}
          animate={isActive ? {
            height: [
              `${20 + Math.random() * 30}%`,
              `${50 + Math.random() * 50}%`,
              `${20 + Math.random() * 30}%`,
            ],
          } : { height: '20%' }}
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [isWaveformActive, setIsWaveformActive] = useState(true);

  const trustBadges = [
    { icon: Shield, text: 'HIPAA Compliant' },
    { icon: CheckCircle, text: 'Works with Dentrix, Eaglesoft & more' },
    { icon: Zap, text: 'No code setup' },
    { icon: Clock, text: 'Live in 48 hrs' },
  ];

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 px-4 overflow-hidden" data-testid="hero-section">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mint-green/30 rounded-bl-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6" data-testid="hero-headline">
              Your Dental Clinic Never Misses a Call Again
            </h1>
            <p className="text-navy/70 text-lg md:text-xl leading-relaxed mb-8" data-testid="hero-subheadline">
              DentaLine AI handles appointment booking, confirmations, cancellations, and patient FAQs — automatically, in real-time, 24/7.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white rounded-full px-8 py-6 text-lg btn-primary"
                onClick={() => window.open('https://calendly.com', '_blank')}
                data-testid="hero-cta-demo"
              >
                Book a Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy/5 rounded-full px-8 py-6 text-lg btn-secondary"
                onClick={() => setIsWaveformActive(!isWaveformActive)}
                data-testid="hero-cta-hear"
              >
                {isWaveformActive ? 'Pause Animation' : 'Hear It in Action'}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 md:gap-6" data-testid="trust-badges">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-navy/70"
                >
                  <badge.icon className="w-4 h-4 text-dental-blue" />
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Waveform Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              {/* Phone mockup header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-dental-blue animate-pulse" />
                <span className="text-sm text-navy/60 font-medium">DentaLine AI is listening...</span>
              </div>
              
              {/* Waveform */}
              <WaveformAnimation isActive={isWaveformActive} />
              
              {/* Call info */}
              <div className="mt-6 text-center">
                <p className="text-navy font-medium">Incoming call from patient</p>
                <p className="text-navy/60 text-sm">Booking appointment for cleaning...</p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-dental-blue text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              24/7 Active
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-mint-green text-navy px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              98% Satisfaction
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
