import { motion } from "framer-motion";
import {
  Calculator,
  ShieldCheck,
  FileText,
  TrendingUp,
  Building2,
  Scale,
  Landmark,
  Globe2,
} from "lucide-react";

const SERVICES = [
  { icon: Calculator, title: "Audit & Assurance", desc: "Statutory, internal, tax and concurrent audits across regulated industries." },
  { icon: ShieldCheck, title: "Direct Taxation", desc: "Corporate and personal tax planning, return filing and scrutiny support." },
  { icon: FileText, title: "GST Advisory", desc: "Registration, returns, refunds, audits and litigation handling end-to-end." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Financial modelling, valuation and CFO-on-call services for growing firms." },
  { icon: Building2, title: "Company Formation", desc: "Incorporation, ROC compliance, structuring and FEMA matters." },
  { icon: Scale, title: "Litigation Support", desc: "Representation before tribunals, appellate authorities and courts." },
  { icon: Landmark, title: "NRI Services", desc: "Repatriation, DTAA, property and tax compliance for non-resident clients." },
  { icon: Globe2, title: "Cross-border Tax", desc: "Transfer pricing, international structuring and treaty advisory." },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
              Practice areas
            </p>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[44px]">
              Eight disciplines, one
              <br className="hidden sm:block" /> standard of care.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14.5px] leading-[1.7] text-muted-foreground">
            Hover any practice to see how we approach the engagement. Every
            mandate is staffed by a partner and a senior associate from day one.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 border border-border">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative bg-background p-8 transition-colors duration-300 hover:bg-[color-mix(in_oklab,var(--color-soft-accent)_10%,var(--color-background))]"
            >
              <span className="absolute right-6 top-6 text-[10px] font-medium tracking-[0.2em] text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="mt-7 font-display text-[17px] font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <div className="mt-3 grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="text-[13.5px] leading-[1.7] text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
