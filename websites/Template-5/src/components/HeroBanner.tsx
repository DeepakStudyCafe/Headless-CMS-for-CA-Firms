import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-[0.3em]">
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}


export default function HeroBanner({ data }: { data?: any }) {
  const [index, setIndex] = useState(0);

  // Use CMS provided slides if available
  const slides = data?.textContent?.slides || [];
  const marqueeItems = data?.textContent?.marquee || [];

  if (!slides || slides.length === 0) {
    return null;
  }

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, slides.length]);

  const slide = slides[index];

  return (
    <section id="home" className="relative w-full overflow-hidden bg-charcoal">
      {/* Main hero */}
      <div className="relative h-svh">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {/* Multi-layered gradient overlay */}
            <div className="absolute inset-0 z-10" style={{
              background: "linear-gradient(135deg, rgba(28,28,30,0.85) 0%, rgba(28,28,30,0.4) 50%, rgba(28,28,30,0.2) 100%)"
            }} />
            <div className="absolute inset-0 z-10" style={{
              background: "linear-gradient(to top, rgba(212,175,55,0.08) 0%, transparent 30%)"
            }} />
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover kenburns"
            />
          </motion.div>
        </AnimatePresence>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
          <svg className="absolute top-[15%] left-[10%] w-40 h-40 opacity-[0.06]" viewBox="0 0 160 160" style={{ animation: "spin 60s linear infinite" }}>
            <circle cx="80" cy="80" r="70" stroke="#D4AF37" strokeWidth="1" fill="none" />
          </svg>
          <svg className="absolute bottom-[25%] right-[8%] w-60 h-60 opacity-[0.05]" viewBox="0 0 200 200" style={{ animation: "spin 80s linear infinite reverse" }}>
            <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="60" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
          </svg>
          <svg className="absolute top-[40%] right-[30%] w-24 h-24 opacity-[0.04]" viewBox="0 0 100 100" style={{ animation: "spin 45s linear infinite" }}>
            <rect x="10" y="10" width="80" height="80" stroke="#D4AF37" strokeWidth="0.5" fill="none" transform="rotate(45 50 50)" />
          </svg>
        </div>

        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.span
            key={`label-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-6"
          >
            ✦&nbsp;&nbsp;{slide.label}&nbsp;&nbsp;✦
          </motion.span>

          <h1
            key={`h1-${index}`}
            className="font-display text-5xl md:text-7xl lg:text-[96px] text-white max-w-5xl leading-[1.05] tracking-tight"
          >
            <WordReveal text={slide.title} delay={0.3} />
          </h1>

          <motion.p
            key={`sub-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-sans text-white/50 mt-6 text-base md:text-lg max-w-xl tracking-wide"
          >
            {slide.subtitle}
          </motion.p>

          <motion.div
            key={`btns-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <a
              href="#services"
              className="shimmer-btn px-10 py-4 text-charcoal font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
            >
              {data?.textContent?.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="border border-gold/50 text-gold px-10 py-4 font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-gold hover:text-charcoal transition-all duration-300 backdrop-blur-sm"
            >
              {data?.textContent?.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Slide indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {slides.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === index ? "bg-gold w-8 h-3" : "bg-white/30 hover:bg-white/50 w-3 h-3"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Marquee ticker */}
      {marqueeItems.length > 0 && (
        <div className="bg-charcoal border-t border-gold/20 py-3 overflow-hidden">
          <div className="marquee-scroll flex w-max">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item: any, i: number) => (
              <span key={i} className="flex items-center gap-4 px-4">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold/70 whitespace-nowrap">{item}</span>
                <span className="text-gold/30">◆</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
