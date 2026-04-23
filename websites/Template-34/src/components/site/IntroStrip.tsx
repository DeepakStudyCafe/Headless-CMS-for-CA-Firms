import { motion } from "framer-motion";

const stats = [
  { value: "850+", label: "Clients served" },
  { value: "₹4,200 Cr", label: "Audited turnover" },
  { value: "12", label: "Cities engaged" },
  { value: "20+", label: "Years in practice" },
];

export function IntroStrip() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="container-editorial py-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl text-heading text-center max-w-3xl mx-auto"
        >
          Trusted by growing businesses across India.
        </motion.p>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-y-8 gap-x-10 text-center md:text-left">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-1 min-w-[160px] flex items-baseline gap-3 justify-center md:justify-start"
            >
              <span className="font-display text-3xl md:text-4xl text-primary">
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-body">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
