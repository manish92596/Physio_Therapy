import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { value: '1,800+', label: 'clinics served' },
    { value: '97%', label: 'patient satisfaction' },
    { value: '$980K', label: 'recovered in missed appointments' },
  ];

  const testimonials = [
    {
      name: 'Dr. Michael Chen, DPT',
      location: 'Los Angeles, CA',
      clinic: 'Pacific Physical Therapy',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
      quote: 'Physiocare.Ai saved us 35+ hours a week on phone calls. Our therapists can focus on patient care instead of administrative work.',
      rating: 5,
    },
    {
      name: 'Dr. Amanda Foster, PT',
      location: 'Chicago, IL',
      clinic: 'Lakeview Rehab Center',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
      quote: "No-shows dropped by 55% in the first month. The AI reminders are personalized and patients actually respond to them.",
      rating: 5,
    },
    {
      name: 'Dr. James Rodriguez, DPT',
      location: 'Houston, TX',
      clinic: 'Summit Sports Medicine',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face',
      quote: 'Patients love booking at any hour. We capture every after-hours call now instead of losing them to competitors.',
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-sage/30" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto">
        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-3xl mx-auto"
          data-testid="metrics"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-teal mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="text-charcoal/50 text-sm md:text-base font-light">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-terracotta mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight mb-4">
            Trusted by PT Clinics Across America
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(18,28,26,0.04)] border border-charcoal/5"
              data-testid={`testimonial-card-${index}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/70 mb-6 leading-relaxed font-light">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-charcoal/50">{testimonial.clinic}</div>
                  <div className="text-xs text-charcoal/40">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
