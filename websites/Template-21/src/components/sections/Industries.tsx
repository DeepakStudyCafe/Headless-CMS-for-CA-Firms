import { motion } from "framer-motion";

const industries = [
  { name: "Financial Services", count: "48 clients" },
  { name: "Manufacturing", count: "62 clients" },
  { name: "Real Estate & Infra", count: "31 clients" },
  { name: "Technology & SaaS", count: "54 clients" },
  { name: "Healthcare", count: "27 clients" },
  { name: "Retail & FMCG", count: "39 clients" },
  { name: "Education", count: "22 clients" },
  { name: "Family Offices", count: "37 clients" },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid grid-cols-12 gap-8 mb-14 md:mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">— Sectors of focus</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-[1.1] tracking-tight">
              Industries we know<br />
              <span className="italic font-light text-secondary">from the inside.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <p className="text-secondary text-base leading-relaxed">
              We deliberately keep our practice narrow — deep familiarity with a
              sector's language, regulators and rhythms compounds over time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="bg-background p-6 md:p-7 group hover:bg-surface transition-colors cursor-default"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display italic text-xs text-subtext">0{i + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-border group-hover:bg-accent transition-colors" />
              </div>
              <div className="font-display text-lg md:text-xl text-primary tracking-tight leading-snug">
                {ind.name}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-subtext mt-2">
                {ind.count}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
