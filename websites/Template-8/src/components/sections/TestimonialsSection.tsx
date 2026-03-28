import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = ({ data }: { data?: any }) => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const tc = data?.textContent || {};
  const label = tc.label || 'Testimonials';
  const heading = tc.heading || 'What Our Clients Say';
  const DEFAULT_TESTIMONIALS = [
    { quote: "Their meticulous approach to tax planning saved our company over ₹2 crore in the first year alone.", name: "Vikram Mehta", role: "CEO, TechVista Solutions", stars: 5 },
    { quote: "The team's dedication to compliance and their proactive advisory approach has been invaluable.", name: "Ananya Singh", role: "Founder, GreenLeaf Organics", stars: 5 },
    { quote: "Professional, responsive, and incredibly knowledgeable. Trusted partners for over a decade.", name: "Ravi Kumar", role: "Director, Kumar Industries", stars: 5 },
    { quote: "From GST filing to strategic planning, they handle everything with precision.", name: "Deepika Joshi", role: "MD, Horizon Exports", stars: 5 },
  ];
  const testimonials = (tc.items || DEFAULT_TESTIMONIALS).map((t: any) => ({
    quote: t.quote || t.review || '',
    name: t.name || '',
    role: t.role || t.designation || '',
    stars: Number(t.stars) || 5,
  }));

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), [testimonials.length]);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), [testimonials.length]);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next, active]);

  return (
    <section className="relative py-24 bg-fog overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center mix-blend-multiply"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920)" }}
      />

      <div ref={ref} className="relative max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono-label text-[11px] text-gold-muted tracking-[3px] uppercase">{label}</span>
          <h2 className="font-display text-4xl lg:text-6xl text-ink font-semibold mt-3">{heading}</h2>
        </motion.div>

        {/* Cards */}
        <div className="relative flex items-center justify-center min-h-[300px]">
          {testimonials.map((t, i) => {
            const isActive = i === active;
            const offset = i - active;
            const isVisible = Math.abs(offset) <= 1;
            if (!isVisible) return null;

            return (
              <motion.div
                key={i}
                animate={{
                  scale: isActive ? 1 : 0.88,
                  opacity: isActive ? 1 : 0.45,
                  x: offset * 280,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute w-full max-w-[600px] p-10 lg:p-12 rounded-sm ${
                  isActive
                    ? "bg-ink border-l-4 border-gold shadow-2xl"
                    : "bg-white"
                }`}
                style={{ filter: isActive ? "none" : "blur(1px)" }}
              >
                {/* Quote mark */}
                <svg className="w-12 h-12 mb-4 text-gold/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
                </svg>

                <p className={`font-display text-xl italic leading-relaxed mb-6 ${isActive ? "text-cream" : "text-ink"}`}>
                  "{t.quote}"
                </p>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className={`font-body text-base font-semibold ${isActive ? "text-cream" : "text-ink"}`}>{t.name}</p>
                <p className={`font-body text-sm ${isActive ? "text-mist" : "text-slate"}`}>{t.role}</p>

                {isActive && (
                  <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold/20 overflow-hidden">
                    <div className="h-full bg-gold progress-animate" key={active} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} className="text-gold group-hover:text-primary-foreground" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? "bg-gold scale-125" : "bg-gold/30"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} className="text-gold group-hover:text-primary-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
