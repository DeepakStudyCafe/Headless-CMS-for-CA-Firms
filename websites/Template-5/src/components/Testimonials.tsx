import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionDivider from "./SectionDivider";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, active]);

  return (
    <>
      <SectionDivider to="paper" />
      <section id="testimonials" className="py-20 md:py-28 bg-paper diagonal-stripes overflow-hidden relative noise-texture">
        <div className="relative z-10">
          <SectionHeading label="Client Voices" title="What Our Clients Say" />

          {/* Spotlight Carousel */}
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-4 md:gap-6 min-h-[320px]">
            {TESTIMONIALS.map((t, i) => {
              const isActive = i === active;
              const isPrev = i === (active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
              const isNext = i === (active + 1) % TESTIMONIALS.length;
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={i}
                  layout
                  initial={false}
                  animate={{
                    scale: isActive ? 1.02 : 0.88,
                    opacity: isActive ? 1 : 0.4,
                    x: isPrev ? -20 : isNext ? 20 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`bg-white p-8 md:p-10 flex-shrink-0 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "border-l-4 border-gold shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-[340px] md:w-[480px]"
                      : "border border-gold/10 w-[260px] md:w-[320px] hidden md:block"
                  }`}
                  onClick={() => setActive(i)}
                >
                  <svg width={isActive ? 48 : 32} height={isActive ? 36 : 24} viewBox="0 0 32 24" fill="none" className="mb-4">
                    <path
                      d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 3.2C10.4 4.8 8 8 7.6 12H14v12H0zm18 0V14.4C18 6.4 22.8 1.6 32 0l1.6 3.2C28.4 4.8 26 8 25.6 12H32v12H18z"
                      fill="#D4AF37"
                      opacity={isActive ? "0.4" : "0.2"}
                    />
                  </svg>
                  <p className={`font-accent italic leading-relaxed mb-6 ${
                    isActive ? "text-charcoal text-lg md:text-xl" : "text-warm-gray text-sm"
                  }`}>
                    "{t.text}"
                  </p>
                  {isActive && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center font-sans text-sm font-bold text-gold">
                          {t.initials}
                        </div>
                        <div>
                          <div className="font-sans text-sm font-bold text-charcoal">{t.name}</div>
                          <div className="font-sans text-xs text-warm-gray">{t.designation}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="max-w-xs mx-auto mt-8 flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <div key={i} className="flex-1 h-[2px] bg-gold/10 rounded-full overflow-hidden cursor-pointer" onClick={() => setActive(i)}>
                {i === active && (
                  <motion.div
                    key={`progress-${active}`}
                    className="h-full bg-gold rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
