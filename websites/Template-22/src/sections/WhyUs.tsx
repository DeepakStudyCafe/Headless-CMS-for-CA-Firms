import { motion } from "framer-motion";
import { Clock, Lock, HeartHandshake, Lightbulb, Globe, Gem } from "lucide-react";

const items = [
  { icon: Gem, title: "Premium Care", desc: "Every client gets unhurried, partner-level attention." },
  { icon: Lock, title: "Confidentiality", desc: "Discretion is our default — your data stays yours." },
  { icon: Clock, title: "On Time, Always", desc: "Filings, audits and reports — never late, never rushed." },
  { icon: HeartHandshake, title: "Long Relationships", desc: "We grow with our clients across decades, not deals." },
  { icon: Lightbulb, title: "Modern Thinking", desc: "Cloud books, automation, real-time dashboards." },
  { icon: Globe, title: "Global Lens", desc: "Cross-border tax, FEMA, transfer pricing — all covered." },
];

export function WhyUs() {
  return (
    <section className="bg-section py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-secondary">04 — Why us</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground">
            Quiet excellence, <em className="text-primary not-italic">consistently delivered</em>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-3">
                <it.icon size={22} className="text-primary" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-foreground">{it.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-9 border-l border-border ml-2.5 pl-6">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
