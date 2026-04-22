import { motion } from "framer-motion";
import { Award, Users, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Award, label: "Years of Experience", value: "15+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: ShieldCheck, label: "Compliance Cases", value: "1.2k" },
  { icon: Sparkles, label: "Trust Rating", value: "4.9/5" },
];

export function Highlights() {
  return (
    <section className="relative -mt-6 md:-mt-10 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-2xl border border-border bg-card px-6 py-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow"
          >
            <it.icon className="text-primary" size={22} strokeWidth={1.5} />
            <div className="mt-5 font-display text-3xl text-foreground">{it.value}</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1.5">
              {it.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
