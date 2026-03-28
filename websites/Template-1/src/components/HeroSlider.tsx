import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/lib/api';

const HeroSlider = ({ data }: { data?: any }) => {
  const [current, setCurrent] = useState(0);

  let slides: any[] = [];
  
  if (data?.textContent) {
    const tc = data.textContent;
    const ctaLabel = tc.cta || 'Get Started';

    if (Array.isArray(tc.slides) && tc.slides.length > 0) {
      slides = tc.slides.map((s: any) => ({
        image: s.img ? getImageUrl(s.img) : '',
        headline: s.title || '',
        description: s.subtitle || '',
        cta: { label: ctaLabel, href: '/contact' },
      })).filter((s: any) => s.image || s.headline);
    } else if (tc.heading) {
      slides = [{
        image: data.imageUrl ? getImageUrl(data.imageUrl) : '',
        headline: tc.heading,
        description: tc.subheading || '',
        cta: { label: ctaLabel, href: '/contact' },
      }];
    }
  }

  const next = useCallback(() => {
    if (slides.length > 0) {
      setCurrent((prev) => (prev + 1) % slides.length);
    }
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, slides.length]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#06142b' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {slides[current].image && (
            <img src={slides[current].image} alt={slides[current].headline} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,20,60,0.9) 0%, rgba(8,24,56,0.78) 50%, rgba(12,30,72,0.65) 100%)' }} />
        </motion.div>
      </AnimatePresence>

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
              <h1 className="heading-xl text-white mb-6 leading-[1.1] font-serif">{slides[current].headline}</h1>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed text-center font-sans">{slides[current].description}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to={slides[current].cta?.href || '/contact'}>{slides[current].cta?.label || 'Get Started'} <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSlider;
