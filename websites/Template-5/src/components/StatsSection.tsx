import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl lg:text-[80px] text-gold leading-none">
      {count}{suffix}
    </span>
  );
}

function CircularProgress({ value, maxValue, isInView }: { value: number; maxValue: number; isInView: boolean }) {
  const percentage = (value / maxValue) * 100;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isInView ? circumference - (percentage / 100) * circumference : circumference;

  return (
    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r={radius} stroke="rgba(212,175,55,0.1)" strokeWidth="2" fill="none" />
      <circle
        cx="60" cy="60" r={radius}
        stroke="#D4AF37"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: "stroke-dashoffset 2s ease-out" }}
      />
    </svg>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section ref={sectionRef} id="stats" className="bg-charcoal py-20 md:py-28 relative overflow-hidden gold-grain">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      {/* Gold top line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 relative z-10">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className={`flex flex-col items-center text-center relative group ${
              i < STATS.length - 1 ? "md:border-r-0" : ""
            }`}
          >
            {/* Circular progress ring */}
            <div className="relative w-[120px] h-[120px] flex items-center justify-center mb-4">
              <CircularProgress value={stat.value} maxValue={stat.value <= 100 ? 100 : 600} isInView={isInView} />
              <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
            </div>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/50 mt-2">
              {stat.label}
            </span>

            {/* Glow divider */}
            {i < STATS.length - 1 && (
              <div className="hidden md:block absolute right-0 top-[15%] h-[70%] glow-divider" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
