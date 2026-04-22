import { motion } from "framer-motion";
import {
  Calculator, FileText, BookOpen, TrendingUp, Building, Globe,
  Receipt, Scale, PiggyBank, ShieldCheck, Users, BarChart3,
} from "lucide-react";

const services = [
  { icon: Calculator, title: "Direct Tax", desc: "Income tax planning, returns, assessments and litigation support." },
  { icon: Receipt, title: "GST & Indirect Tax", desc: "Registration, returns, audits and advisory across all GST matters." },
  { icon: FileText, title: "Statutory Audit", desc: "Independent audits compliant with ICAI standards and the Companies Act." },
  { icon: BookOpen, title: "Internal Audit", desc: "Risk-based reviews to strengthen controls and operational efficiency." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Strategy, financial modelling and CFO-level guidance for growth." },
  { icon: Building, title: "Company Formation", desc: "Incorporation of Pvt Ltd, LLP, OPC and overseas entity structures." },
  { icon: Globe, title: "FEMA & RBI", desc: "Cross-border compliance, FDI/ODI reporting and FEMA advisory." },
  { icon: Scale, title: "Litigation Support", desc: "Representation before tax authorities, tribunals and appellate forums." },
  { icon: PiggyBank, title: "Wealth Planning", desc: "Estate, succession and personal tax planning for HNIs and families." },
  { icon: ShieldCheck, title: "Risk Advisory", desc: "Enterprise risk, fraud investigation and forensic accounting services." },
  { icon: Users, title: "Payroll & HR", desc: "End-to-end payroll, PF/ESI compliance and labour-law advisory." },
  { icon: BarChart3, title: "Virtual CFO", desc: "Outsourced finance leadership, MIS and investor reporting." },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container-pro relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-soft uppercase">
              Service Catalogue
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl font-semibold leading-tight">
              A full-stack practice for every business need.
            </h2>
          </div>
          <a href="#contact" className="story-link text-sm font-semibold text-accent-soft">
            Request a custom proposal →
          </a>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.04, duration: 0.4 }}
              className="group relative bg-secondary p-6 lg:p-7 hover:bg-primary transition-colors duration-300 cursor-pointer"
            >
              <s.icon className="h-7 w-7 text-accent-soft group-hover:text-accent transition-colors" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                <p className="overflow-hidden text-xs text-white/60 leading-relaxed mt-0 group-hover:mt-2">
                  {s.desc}
                </p>
              </div>
              <div className="absolute bottom-3 right-4 text-[10px] text-white/30 font-mono">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
