import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl lg:text-6xl text-gold font-semibold">
      {count}{suffix}
    </span>
  );
};

const StatsSection = ({ data }: { data?: any }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const tc = data?.textContent || {};
  const DEFAULT_STATS = [
    { value: 500, suffix: "+", label: "Satisfied Clients", desc: "Trusted by businesses across India" },
    { value: 18, suffix: "+", label: "Years of Expertise", desc: "Delivering excellence since 2005" },
    { value: 12, suffix: "", label: "Expert Professionals", desc: "ICAI certified team members" },
    { value: 98, suffix: "%", label: "Client Retention Rate", desc: "Long-term partnerships built on trust" },
  ];
  const stats = (tc.stats || DEFAULT_STATS).map((s: any) => ({
    value: Number(s.value) || 0,
    suffix: s.suffix || '',
    label: s.label || '',
    desc: s.desc || s.description || '',
  }));

  return (
    <section className="relative py-24 bg-ink overflow-hidden">
      {/* BG texture */}
      <div
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center mix-blend-luminosity"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920)" }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, hsl(37 40% 60%) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div ref={ref} className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-gold/20" : ""
              } py-4`}
            >
              {/* Circular ring */}
              <div className="relative w-28 h-28 mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(37 40% 60% / 0.15)" strokeWidth="2" />
                  {inView && (
                    <motion.circle
                      cx="60" cy="60" r="54" fill="none" stroke="hsl(37 40% 60%)" strokeWidth="2"
                      strokeDasharray={339.29}
                      initial={{ strokeDashoffset: 339.29 }}
                      animate={{ strokeDashoffset: 339.29 * (1 - (stat.value / (stat.suffix === "%" ? 100 : 600))) }}
                      transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  )}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <span className="font-body text-sm text-mist tracking-[1.5px] uppercase mb-1">{stat.label}</span>
              <span className="font-body text-xs text-mist/60">{stat.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
