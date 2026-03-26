import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";
import { Section } from "@/lib/api";

const STAT_LABELS = ["CLIENTS SERVED", "YEARS IN PRACTICE", "EXPERT ADVISORS", "CLIENT RETENTION"];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-6xl sm:text-7xl font-bold text-ca-accent-2 leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
      {count}
      {suffix && <span className="text-2xl sm:text-3xl text-gold ml-0.5">{suffix}</span>}
    </span>
  );
};

const StatsSection = ({ data }: { data?: Section }) => {
  const rawStats = (data?.textContent?.stats as any[]) || STATS;
  const stats = rawStats.map((stat: any) => {
    const rawNumber = stat?.number ?? stat?.value ?? 0;
    const numberFromString = typeof rawNumber === "string" ? parseInt(rawNumber.replace(/[^\d]/g, ""), 10) : Number(rawNumber);
    return {
      label: stat?.label || "",
      number: Number.isFinite(numberFromString) ? numberFromString : 0,
      suffix: stat?.suffix || (typeof rawNumber === "string" && rawNumber.includes("+") ? "+" : ""),
    };
  });
  const heading = data?.textContent?.heading || "Trusted across industries";
  const image = data?.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80";

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-deep/[0.92]" />

      {/* Decorative background text */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display italic text-[80px] sm:text-[100px] text-surface/[0.04] leading-none pointer-events-none select-none whitespace-nowrap">
        {heading}
      </span>

      <div className="relative z-10 container mx-auto px-6">
        {/* Folio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          <span className="folio text-surface/30">02 <span className="inline-block h-px bg-surface/20" style={{ width: 24, verticalAlign: 'middle', marginLeft: 8 }} /></span>
        </motion.div>

        {/* Teal ruled line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-[1px] bg-ca-accent-2/30 origin-left mb-10"
        />

        {/* Stats row — horizontal band, no boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-0">
          {stats.map((stat, i) => (
            <motion.div
              key={`${stat.label || "stat"}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`flex flex-col items-center text-center px-6 ${
                i < stats.length - 1 ? "lg:border-r lg:border-surface/[0.1]" : ""
              }`}
            >
              <span className="font-label text-[10px] text-ca-accent-2/70 tracking-[2px] mb-2">
                {STAT_LABELS[i]}
              </span>
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <span className="font-label text-[11px] text-surface/40 tracking-[2px] mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
