import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Shield, CheckCircle, Clock, Zap, ArrowDown } from 'lucide-react';

const WaveformAnimation = () => {
  const bars = 28;
  
  return (
    <div className="flex items-end justify-center gap-1 md:gap-1.5 h-40 md:h-56">
      {[...Array(bars)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 md:w-2.5 rounded-full"
          style={{
            background: i % 4 === 0 ? '#2B6165' : i % 4 === 1 ? '#E07A5F' : i % 4 === 2 ? '#829379' : '#45898F',
          }}
          animate={{
            height: [
              `${15 + Math.random() * 25}%`,
              `${45 + Math.random() * 55}%`,
              `${15 + Math.random() * 25}%`,
            ],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.04,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const trustBadges = [
    { icon: Shield, text: 'HIPAA Compliant' },
    { icon: CheckCircle, text: 'Works with Jane, WebPT & more' },
    { icon: Zap, text: 'No code setup' },
    { icon: Clock, text: 'Live in 48 hrs' },
  ];

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 px-4 overflow-hidden" data-testid="hero-section">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-sage/60 via-sage/30 to-transparent rounded-bl-[120px] -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-terracotta mb-4">AI-Powered Voice Agent</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-charcoal leading-[1.05] tracking-tight font-light mb-6" data-testid="hero-headline">
              Your PT Clinic Never Misses a Call Again
            </h1>
            <p className="text-charcoal/60 text-lg md:text-xl leading-relaxed mb-8 font-light" data-testid="hero-subheadline">
              Physiocare.Ai handles appointment booking, confirmations, cancellations, and patient FAQs — automatically, in real-time, 24/7.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-teal hover:bg-teal-light text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                onClick={() => window.open('https://calendly.com', '_blank')}
                data-testid="hero-cta-demo"
              >
                Book a Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-charcoal/20 text-charcoal hover:bg-charcoal/5 rounded-full px-8 py-6 text-lg group transition-all duration-300"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="hero-cta-learn"
              >
                See How It Works
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
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
                  className="flex items-center gap-2 text-sm text-charcoal/60"
                >
                  <badge.icon className="w-4 h-4 text-teal" />
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
            <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-12 shadow-[0_4px_24px_rgba(18,28,26,0.06)] border border-charcoal/5">
              {/* Phone mockup header */}
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-3 h-3 rounded-full bg-terracotta animate-pulse" />
                <span className="text-sm text-charcoal/50 font-medium">Physiocare.Ai is listening...</span>
              </div>
              
              {/* Waveform */}
              <WaveformAnimation />
              
              {/* Call info */}
              <div className="mt-8 text-center">
                <p className="text-charcoal font-medium text-lg">Incoming call from patient</p>
                <p className="text-charcoal/50 text-sm">Scheduling physical therapy session...</p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-teal text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              24/7 Active
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-terracotta-light text-charcoal px-4 py-2 rounded-full text-sm font-medium shadow-lg"
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
