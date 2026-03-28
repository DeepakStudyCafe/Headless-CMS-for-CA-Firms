import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wordReveal } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

const HeroBanner = ({ data }: { data?: any }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const tc = data?.textContent || {};
  const DEFAULT_SLIDES = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920",
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1920",
  ];
  const heroSlides = (tc.slides || []).length > 0
    ? tc.slides.map((s: any) => typeof s === 'string' ? s : (s.img || s.image || ''))
    : DEFAULT_SLIDES;
  const marqueeText = tc.ticker || "Tax Planning • GST Filing • Audit & Assurance • Company Registration • Financial Advisory • Business Compliance • FEMA Consulting • ";
  const label = tc.label || 'Chartered Accountants — Est. 2005';
  const subheading = tc.subheading || 'Empowering businesses with strategic financial solutions, regulatory compliance, and trusted advisory services.';
  const cta = tc.cta || 'Explore Services';
  const secondaryCta = tc.secondaryCta || 'Our Approach →';

  const headingLine1 = tc.line1 || "Precision. Trust.";
  const headingLine2 = tc.line2 || "Financial Excellence.";
  const line1Words = headingLine1.split(' ');
  const line2Words = headingLine2.split(' ');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative w-full">
      {/* Hero */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* BG Slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 ken-burns bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide]})` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/[0.88] via-ink/50 to-bronze/30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,14,23,0.6) 100%)" }} />

        {/* Decorative gold rings */}
        <div className="absolute top-20 right-[10%] w-24 h-24 border border-gold/10 rounded-full" style={{ animation: "float-rotate 90s linear infinite" }} />
        <div className="absolute top-40 right-[15%] w-16 h-16 border border-gold/10 rounded-full" style={{ animation: "float-rotate 60s linear infinite reverse" }} />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-[900px] mx-auto">
          {/* Micro label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-gold" />
            <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase">
              {label}
            </span>
            <span className="w-12 h-[1px] bg-gold" />
          </motion.div>

          {/* Heading */}
          <h1 className="mb-6">
            <span className="block">
              {line1Words.map((word, i) => (
                <span key={word + i} className="inline-block overflow-hidden mr-4">
                  <motion.span
                    className="inline-block font-display text-5xl sm:text-7xl lg:text-[88px] font-light italic text-cream leading-none"
                    custom={i}
                    variants={wordReveal}
                    initial="hidden"
                    animate="visible"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="block mt-2">
              {line2Words.map((word, i) => (
                <span key={word + i} className="inline-block overflow-hidden mr-4">
                  <motion.span
                    className="inline-block font-display text-5xl sm:text-7xl lg:text-[88px] font-semibold text-cream leading-none"
                    custom={i + line1Words.length}
                    variants={wordReveal}
                    initial="hidden"
                    animate="visible"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="font-body text-lg text-mist max-w-[520px] mb-10"
          >
            {subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="shimmer-btn px-8 py-3.5 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.03] active:scale-[0.97] transition-transform"
            >
              {cta}
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 font-body text-sm font-medium text-cream border border-cream/30 rounded-sm hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all duration-300 active:scale-[0.97]"
            >
              {secondaryCta}
            </a>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
          {heroSlides.map((_, i) => (
            <div key={i} className="w-16 h-[2px] bg-cream/20 overflow-hidden rounded-full">
              {i === currentSlide && <div className="h-full bg-gold progress-animate" />}
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="font-mono-label text-[10px] text-mist tracking-[2px]">SCROLL</span>
          <ChevronDown size={16} className="text-mist bounce-indicator" />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="bg-gold h-12 flex items-center overflow-hidden">
        <div className="marquee-track whitespace-nowrap flex">
          <span className="font-body text-[13px] text-primary-foreground tracking-[2px] uppercase px-2">
            {marqueeText}{marqueeText}
          </span>
          <span className="font-body text-[13px] text-primary-foreground tracking-[2px] uppercase px-2">
            {marqueeText}{marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
