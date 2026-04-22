import { motion } from "framer-motion";
import aboutImg from "@/assets/about-team.jpg";

const stats = [
  { v: "₹4,200 Cr", l: "Assets advised" },
  { v: "320+", l: "Clients served" },
  { v: "21 yrs", l: "Of practice" },
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-surface/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 grid grid-cols-12 gap-8 md:gap-14 items-center">
        {/* Image with floating badges */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-6 relative"
        >
          <div className="relative">
            <div className="absolute -top-5 -left-5 h-24 w-24 bg-accent-soft/50 rounded-sm" />
            <img
              src={aboutImg}
              alt="ABC & Associates team in conference"
              loading="lazy"
              width={1280}
              height={1536}
              className="relative w-full aspect-[4/5] object-cover rounded-sm shadow-2xl shadow-secondary/15"
            />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 border-2 border-accent rounded-sm" />

            {/* floating stat badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-8 -right-4 md:-right-10 bg-background border border-border rounded-sm px-5 py-4 shadow-xl backdrop-blur"
            >
              <div className="text-[10px] uppercase tracking-widest text-subtext">ICAI Member Firm</div>
              <div className="font-display text-base text-primary mt-1">Reg. No. 010234C</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="absolute bottom-16 -left-4 md:-left-12 bg-primary text-primary-foreground rounded-sm px-5 py-4 shadow-xl"
            >
              <div className="font-display text-3xl">98%</div>
              <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70 mt-1">Client retention</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="col-span-12 md:col-span-6 md:pl-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-5">— The firm</div>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.08] tracking-tight mb-7">
              A practice built on quiet, repeated <span className="italic font-light text-secondary">excellence</span>.
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-5">
              ABC &amp; Associates was founded in 2004 with a simple conviction —
              that financial advice should be honest, slow when it needs to be,
              and unflinchingly accurate.
            </p>
            <p className="text-subtext text-base leading-relaxed mb-10">
              Today, our partners and forty-strong team serve listed companies,
              high-growth start-ups and four generations of family businesses
              across India and the GCC.
            </p>

            <div className="grid grid-cols-3 border-t border-border pt-8 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="font-display text-2xl md:text-3xl text-primary">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-widest text-subtext mt-2">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
