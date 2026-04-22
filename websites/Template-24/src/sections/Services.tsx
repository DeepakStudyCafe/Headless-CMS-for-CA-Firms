import { motion } from "framer-motion";
import {
  FileText,
  Receipt,
  ShieldCheck,
  Building2,
  TrendingUp,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Income Tax Filing",
    desc: "Accurate income tax return filing for individuals, HUFs, firms and corporates with year-round tax planning and notice handling.",
  },
  {
    icon: Receipt,
    title: "GST Registration & Filing",
    desc: "End-to-end GST services including registration, monthly returns, reconciliations, refunds and assessment representation.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    desc: "Statutory audits, tax audits, internal audits and management audits conducted with strict adherence to professional standards.",
  },
  {
    icon: Building2,
    title: "Company Incorporation",
    desc: "Hassle-free incorporation of Private Limited, LLP, OPC and Partnership firms with all post-incorporation compliances.",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    desc: "Strategic financial advisory, CFO services, business valuation, projections and funding support for growing enterprises.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Services",
    desc: "ROC filings, TDS returns, payroll compliance, secretarial services and ongoing regulatory adherence for peace of mind.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-deep">Our Services</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
            Comprehensive financial & compliance services.
          </h2>
          <p className="mt-5 text-base md:text-lg text-subink leading-relaxed">
            A full suite of chartered accountancy services tailored to businesses of every size —
            delivered with precision, professionalism and complete confidentiality.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-surface border border-hairline rounded-xl p-7 transition-all hover:border-gold-deep hover:shadow-soft"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-background border border-hairline text-gold-deep">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-subink leading-relaxed">{s.desc}</p>
              <ArrowUpRight
                size={18}
                className="absolute top-7 right-7 text-subink/40 group-hover:text-gold-deep transition-colors"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
