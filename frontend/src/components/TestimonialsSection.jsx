import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { value: '2,400+', label: 'clinics served' },
    { value: '98%', label: 'patient satisfaction' },
    { value: '$1.2M', label: 'recovered in missed appointments' },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Kim',
      location: 'Seattle, WA',
      clinic: 'Evergreen Dental Care',
      image: 'https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwyfHxkZW50aXN0JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzc1ODgyMzUwfDA&ixlib=rb-4.1.0&q=85&w=200&h=200&fit=crop',
      quote: 'DentaLine AI saved us 40+ hours a week on phone calls. Our front desk can finally focus on patients in the office.',
      rating: 5,
    },
    {
      name: 'Dr. Marcus Rivera',
      location: 'Toronto, ON',
      clinic: 'Bloor Street Dental',
      image: 'https://images.unsplash.com/photo-1674775372058-c4c8813c6611?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzc1ODgyMzUwfDA&ixlib=rb-4.1.0&q=85&w=200&h=200&fit=crop',
      quote: "No-shows dropped by 58% in the first month. The ROI was immediate — we're recovering thousands in lost revenue.",
      rating: 5,
    },
    {
      name: 'Dr. Priya Nair',
      location: 'Dallas, TX',
      clinic: 'Uptown Family Dentistry',
      image: 'https://images.unsplash.com/photo-1670191247079-f9713ae06dcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwzfHxkZW50aXN0JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzc1ODgyMzUwfDA&ixlib=rb-4.1.0&q=85&w=200&h=200&fit=crop',
      quote: 'Patients love that they can book at any hour. We went from missing 30% of after-hours calls to capturing every single one.',
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-ivory" data-testid="testimonials-section">
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
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-dental-blue mb-1">
                {metric.value}
              </div>
              <div className="text-navy/60 text-sm md:text-base">
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
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Trusted by Dental Clinics Across North America
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
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              data-testid={`testimonial-card-${index}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-dental-blue text-dental-blue" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-navy/80 mb-6 leading-relaxed">
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
                  <div className="font-medium text-navy">{testimonial.name}</div>
                  <div className="text-sm text-navy/60">{testimonial.clinic}</div>
                  <div className="text-xs text-navy/40">{testimonial.location}</div>
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
