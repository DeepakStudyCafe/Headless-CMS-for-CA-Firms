import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES, MARQUEE_ITEMS } from "@/lib/constants";

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = HERO_SLIDES[current];

  // Split heading into two lines for editorial effect
  const words = slide.heading.split(" ");
  const mid = Math.ceil(words.length / 2);
  const line1 = words.slice(0, mid).join(" ");
  const line2 = words.slice(mid).join(" ");

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-screen overflow-hidden">
        {/* Background slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center animate-kenburns"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(120deg, rgba(15,25,35,0.9) 0%, rgba(15,25,35,0.55) 50%, rgba(15,25,35,0.35) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Cover Page Content — Split Layout */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left zone — text (55%) */}
              <div className="lg:col-span-7 relative">
                {/* Vertical column rule */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-ca-accent-2/40 hidden lg:block" />
                <div className="lg:pl-8">
                  {/* Issue line */}
                  <motion.span
                    key={`issue-${current}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="font-label text-[10px] text-surface/40 tracking-[4px] mb-4 block"
                  >
                    EST. 2005 · VOLUME XII
                  </motion.span>

                  {/* Pill chip label */}
                  <motion.span
                    key={`pill-${current}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 border border-ca-accent-2/30 mb-6"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ca-accent-2 animate-pulse" />
                    <span className="font-label text-[10px] text-ca-accent-2 tracking-[2px]">INDIA'S TRUSTED CA FIRM</span>
                  </motion.span>

                  {/* H1 — two lines with editorial contrast */}
                  <h1 className="mb-4">
                    <AnimatePresence mode="wait">
                      <motion.div key={current}>
                        {/* Line 1 — normal */}
                        <motion.span
                          initial={{ clipPath: "inset(100% 0 0 0)" }}
                          animate={{ clipPath: "inset(0 0 0 0)" }}
                          exit={{ clipPath: "inset(0 0 100% 0)" }}
                          transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                          className="block font-display text-5xl sm:text-7xl lg:text-[90px] font-bold text-surface leading-[0.95] tracking-tight"
                        >
                          {line1}
                        </motion.span>
                        {/* Line 2 — italic teal */}
                        <motion.span
                          initial={{ clipPath: "inset(100% 0 0 0)" }}
                          animate={{ clipPath: "inset(0 0 0 0)" }}
                          exit={{ clipPath: "inset(0 0 100% 0)" }}
                          transition={{ delay: 0.55, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                          className="block font-display text-5xl sm:text-7xl lg:text-[90px] font-bold italic text-ca-accent-2 leading-[0.95] tracking-tight"
                        >
                          {line2}
                        </motion.span>
                      </motion.div>
                    </AnimatePresence>
                  </h1>

                  {/* Thin 40px teal rule */}
                  <motion.div
                    key={`rule-${current}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="h-[2px] w-10 bg-ca-accent-2 origin-left mb-4"
                  />

                  {/* Stats teaser inline */}
                  <motion.span
                    key={`stats-${current}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75, duration: 0.5 }}
                    className="font-label text-[11px] text-surface/45 tracking-[1.5px] mb-5 block"
                  >
                    500+ Clients · 18 Yrs · 98% Retention
                  </motion.span>

                  <motion.p
                    key={`sub-${current}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-base font-body text-surface/55 mb-6 max-w-md"
                  >
                    {slide.subtext}
                  </motion.p>

                  <motion.div
                    key={`ctas-${current}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <a
                      href="#services"
                      className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 bg-ca-accent text-surface font-body font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-ca-accent/90 active:scale-95"
                    >
                      Explore Services <span>→</span>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 font-body font-semibold text-sm text-surface/70 tracking-wide hover:text-surface transition-colors duration-300"
                    >
                      Watch Our Story <span>→</span>
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Right zone — decorative image frame (45%) */}
              <div className="lg:col-span-5 hidden lg:flex justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="relative"
                >
                  {/* Offset teal frame */}
                  <div className="absolute -bottom-3 -right-3 w-full h-full border-[3px] border-ca-accent-2/50" />
                  <div
                    className="relative w-[340px] h-[420px] bg-cover bg-center editorial-image overflow-hidden"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      transform: "rotate(1.5deg)",
                    }}
                  >
                    {/* Floating badge */}
                    <div className="absolute bottom-4 left-4 bg-surface/95 backdrop-blur-sm px-3 py-2 shadow-lg flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-ca-accent-2 flex items-center justify-center">
                        <svg className="w-3 h-3 text-surface" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-label text-[9px] text-text-main tracking-[1px]">ISO CERTIFIED</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical pill indicators — right edge */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 hidden lg:flex">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-[3px] rounded-full transition-all duration-400 ${
                i === current ? "h-8 bg-ca-accent-2" : "h-3 bg-surface/25"
              }`}
            />
          ))}
        </div>

        {/* Bottom progress line */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="flex-1 h-[2px] bg-surface/10 relative overflow-hidden"
            >
              {i === current && (
                <motion.div
                  key={`prog-${current}`}
                  className="absolute inset-y-0 left-0 bg-ca-accent-2"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Marquee ticker — tighter */}
      <div className="bg-deep py-2 overflow-hidden border-t border-surface/[0.06]">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center mx-3">
              <span className="font-label text-[11px] text-surface/60 tracking-[1px]" style={{ textTransform: 'uppercase' }}>{item}</span>
              <span className="ml-6 text-ca-accent-2/50 text-[8px] inline-block">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
