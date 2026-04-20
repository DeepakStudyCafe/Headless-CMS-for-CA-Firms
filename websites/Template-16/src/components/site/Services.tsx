import { motion } from "framer-motion";
import {
  Calculator,
  Receipt,
  ClipboardCheck,
  Building2,
  Briefcase,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { TiltCard } from "./TiltCard";

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic personal & corporate tax structuring to legally minimise liability." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, filing, reconciliation and advisory." },
  { icon: ClipboardCheck, title: "Audit & Assurance", desc: "Statutory, internal and management audits with actionable insights." },
  { icon: Building2, title: "Company Registration", desc: "Pvt Ltd, LLP, OPC and partnership setup with full compliance." },
  { icon: Briefcase, title: "Business Consulting", desc: "CFO advisory, financial modelling and growth strategy." },
  { icon: ShieldCheck, title: "Compliance Services", desc: "ROC, MCA, TDS and labour-law compliance handled end-to-end." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* ambient gradients */}
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Comprehensive <span className="text-gradient">financial expertise</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From day-to-day compliance to high-stakes advisory — one trusted partner for every
            financial need.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            >
              <TiltCard className="group relative h-full">
                <div
                  className="gradient-border relative h-full glass-strong rounded-3xl p-7 shadow-card overflow-hidden transition-shadow duration-500 hover:shadow-glow"
                >
                  {/* spotlight follow cursor */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(400px circle at var(--mx) var(--my), oklch(0.82 0.14 230 / 0.18), transparent 50%)",
                    }}
                  />
                  <div className="relative">
                    <div className="relative h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-soft group-hover:shadow-glow group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                      <s.icon className="h-7 w-7" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-60 blur-lg -z-10 transition-opacity" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
