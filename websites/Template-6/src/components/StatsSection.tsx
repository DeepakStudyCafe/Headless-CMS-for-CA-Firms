import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/constants";

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = performance.now();
    const step = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      <span className="text-amber2-bright font-heading font-bold text-[28px]">{suffix}</span>
    </span>
  );
};

const Sparkline = () => {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const points = "0,18 10,12 20,16 30,8 40,14 50,4 60,10";

  return (
    <svg ref={ref} width="60" height="24" viewBox="0 0 60 24" className="mt-2">
      <polyline
        points={points}
        fill="none"
        stroke="#E08C2E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 120,
          strokeDashoffset: inView ? 0 : 120,
          transition: "stroke-dashoffset 1s ease-out",
        }}
      />
    </svg>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-[6%]" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-amber2 tracking-[2px] uppercase block mb-3"
          >
            // OUR_NUMBERS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-charcoal-deep leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            A Track Record That Speaks
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-px w-[60px] bg-amber2 mt-4 origin-left"
          />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative group p-8 transition-all duration-[350ms] cursor-default overflow-hidden"
              style={{
                borderRight: i < 3 ? "1px solid rgba(224,140,46,0.25)" : "none",
              }}
            >
              {/* Background number */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-extrabold text-[100px] pointer-events-none select-none transition-colors duration-[350ms]"
                style={{ color: "rgba(44,44,44,0.03)" }}
              >
                {stat.bg}
              </span>

              {/* Hover dark bg */}
              <div className="absolute inset-0 bg-charcoal-deep opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] -z-0 group-hover:shadow-[0_0_40px_rgba(224,140,46,0.12)] group-hover:border group-hover:border-amber2/30" />

              <div className="relative z-10">
                <span className="font-mono text-[10px] tracking-[2px] uppercase block mb-4 transition-colors duration-[350ms] text-charcoal-mid/45 group-hover:text-linen/60">
                  {stat.label}
                </span>
                <span
                  className="font-heading font-extrabold italic block transition-colors duration-[350ms] text-amber2 group-hover:text-amber2-bright"
                  style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <p className="font-body font-light text-[13px] mt-2 transition-colors duration-[350ms] text-charcoal-mid/55 group-hover:text-linen/50">
                  Verified & Growing
                </p>
                <Sparkline />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-10 pt-4 border-t border-amber2/20">
          <span className="font-mono text-[11px] text-charcoal-light/50 tracking-wider">
            LIVE DATA · UPDATED FY 2023–24
          </span>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
