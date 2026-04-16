import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  light?: boolean;
}

export default function SectionHeading({ label, title, light = false }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center mb-16 relative">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold inline-block mb-3"
      >
        ✦ {label} ✦
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-display text-4xl md:text-5xl lg:text-6xl mt-2 leading-tight ${light ? "text-white" : "text-charcoal"}`}
      >
        {title}
      </motion.h2>
      {/* Animated reveal line */}
      <div className="mt-6 flex justify-center">
        <div
          className={`h-[2px] bg-gold ${isInView ? "reveal-line" : ""}`}
          style={{ width: isInView ? 80 : 0 }}
        />
      </div>
    </div>
  );
}
