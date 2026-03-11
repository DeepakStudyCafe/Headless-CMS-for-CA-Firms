import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const slides = [
  {
    image: heroSlide1,
    headline: 'Trusted Chartered Accountant Services',
    description: 'Helping businesses manage tax, compliance, and financial growth with precision and integrity.',
    cta: { label: 'Schedule a Consultation', href: '/contact' },
  },
  {
    image: heroSlide2,
    headline: 'Professional Tax & Compliance Solutions',
    description: 'Expert GST, audit, and regulatory compliance services tailored for your business needs.',
    cta: { label: 'Explore Services', href: '/services' },
  },
  {
    image: heroSlide3,
    headline: 'Strategic Financial Advisory for Growth',
    description: 'Helping startups and enterprises scale with confidence through data-driven financial strategies.',
    cta: { label: 'Get Started', href: '/contact' },
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#06142b' }}
    >
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(6,20,60,0.9) 0%, rgba(8,24,56,0.78) 50%, rgba(12,30,72,0.65) 100%)' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-max mx-auto px-4 md:px-8 relative z-10 h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-[hsl(var(--gold))/0.2] text-[hsl(var(--gold))] mb-6">
                Trusted Since 1995
              </span>
              <h1 className="heading-xl text-white mb-6 leading-[1.1] font-serif">
                {slides[current].headline}
              </h1>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed text-center font-sans">
                {slides[current].description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to={slides[current].cta.href}>
                    {slides[current].cta.label} <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows removed intentionally */}

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
