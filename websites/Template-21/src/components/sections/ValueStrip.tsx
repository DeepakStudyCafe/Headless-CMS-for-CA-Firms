import { motion } from "framer-motion";

const values = [
  "Trusted Advisory",
  "Financial Clarity",
  "Compliance Expertise",
  "Discreet Counsel",
];

export function ValueStrip() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-6 py-8 md:py-10">
          {values.map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-display italic text-accent text-sm">0{i + 1}</span>
                <span className="font-display text-xl md:text-2xl text-primary tracking-tight">{v}</span>
              </div>
              {i < values.length - 1 && (
                <span className="hidden md:block h-6 w-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
