import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small practices',
      monthlyPrice: 199,
      features: [
        'Up to 500 calls/month',
        'Basic appointment booking',
        'SMS reminders',
        '1 PMS integration',
        'Email support',
        'Business hours coverage',
      ],
      highlighted: false,
    },
    {
      name: 'Growth',
      description: 'Most popular for growing clinics',
      monthlyPrice: 399,
      features: [
        'Up to 2,000 calls/month',
        'Advanced booking & rescheduling',
        'SMS + Email reminders',
        'Unlimited PMS integrations',
        'Priority phone support',
        '24/7 coverage',
        'Custom AI scripts',
        'Analytics dashboard',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For multi-location practices',
      monthlyPrice: 799,
      features: [
        'Unlimited calls',
        'All Growth features',
        'Multi-location support',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Advanced analytics & reporting',
        'White-glove onboarding',
      ],
      highlighted: false,
    },
  ];

  const getPrice = (monthlyPrice) => {
    if (isAnnual) {
      return Math.round(monthlyPrice * 0.8);
    }
    return monthlyPrice;
  };

  return (
    <section ref={ref} id="pricing" className="py-20 md:py-32 px-4 bg-white" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto mb-8">
            Choose the plan that fits your practice. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4" data-testid="billing-toggle">
            <span className={`text-sm ${!isAnnual ? 'text-navy font-medium' : 'text-navy/60'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              data-testid="billing-switch"
            />
            <span className={`text-sm ${isAnnual ? 'text-navy font-medium' : 'text-navy/60'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-xs bg-dental-blue text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`rounded-2xl p-6 md:p-8 ${
                plan.highlighted
                  ? 'bg-navy text-white scale-105 shadow-xl'
                  : 'bg-white border border-gray-200'
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.highlighted && (
                <div className="text-dental-blue text-sm font-medium mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className={`font-serif text-2xl mb-2 ${plan.highlighted ? 'text-white' : 'text-navy'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/70' : 'text-navy/60'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`font-serif text-4xl ${plan.highlighted ? 'text-white' : 'text-navy'}`}>
                  ${getPrice(plan.monthlyPrice)}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-navy/60'}`}>
                  /month
                </span>
              </div>

              <Button
                className={`w-full rounded-full mb-6 ${
                  plan.highlighted
                    ? 'bg-dental-blue hover:bg-dental-blue/90 text-white'
                    : 'bg-navy hover:bg-navy/90 text-white'
                }`}
                onClick={() => window.open('https://calendly.com', '_blank')}
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
              >
                Start Free Trial
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      plan.highlighted ? 'text-dental-blue' : 'text-dental-blue'
                    }`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-navy/70'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
