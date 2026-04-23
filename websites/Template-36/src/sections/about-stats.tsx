import { motion } from "framer-motion";

const STATS = [
  { value: "25+", label: "Years in practice" },
  { value: "12", label: "Partners & associates" },
  { value: "9", label: "Industries served" },
  { value: "98%", label: "Client retention" },
];

export function AboutStats() {
  return (
    <section id="about" className="relative bg-primary py-28 text-primary-foreground lg:py-36">
      <div className="absolute inset-0 grain opacity-[0.06] pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-soft-accent"
        >
          About the firm
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 font-display text-[36px] font-semibold leading-[1.15] tracking-tight sm:text-[48px] lg:text-[56px]"
        >
          Trusted advisors to founders,
          families and the firms they build.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-[15px] leading-[1.8] text-primary-foreground/75"
        >
          Founded in 1999, ABC &amp; Associates was built on a single conviction —
          that good accounting is, ultimately, good counsel. We bring the same
          curiosity to a first-time founder's books as we do to the audit of a
          listed enterprise.
        </motion.p>
      </div>

      <div className="mx-auto mt-20 max-w-[1100px] px-6">
        <div className="grid grid-cols-2 border-t border-primary-foreground/15 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`px-6 py-10 text-center ${
                i !== 0 ? "lg:border-l lg:border-primary-foreground/15" : ""
              } ${i % 2 !== 0 ? "border-l border-primary-foreground/15 lg:border-l" : ""}`}
            >
              <p className="font-display text-[34px] font-semibold tracking-tight text-primary-foreground sm:text-[42px]">
                {s.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-primary-foreground/65">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
