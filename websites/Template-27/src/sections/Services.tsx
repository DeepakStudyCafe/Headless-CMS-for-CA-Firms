import { Reveal } from "@/components/Reveal";
import {
  Calculator, Receipt, ShieldCheck, Building2, Briefcase, FileCheck2, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic personal & corporate tax structuring to minimise liability and maximise savings." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, returns, reconciliation and refund advisory." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal and management audits delivered with rigor and clarity." },
  { icon: Building2, title: "Company Registration", desc: "Pvt Ltd, LLP, OPC and Section 8 incorporation with seamless documentation." },
  { icon: Briefcase, title: "Business Consulting", desc: "Growth, finance and transformation advisory tailored to your industry." },
  { icon: FileCheck2, title: "Compliance Services", desc: "ROC filings, secretarial compliance and ongoing regulatory support." },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-soft relative">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">What We Do</p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold text-charcoal">
            Comprehensive services, <span className="text-gradient">precisely delivered</span>
          </h2>
          <p className="mt-5 text-soft-gray text-lg">
            From day-to-day compliance to high-stakes advisory — we cover every facet of finance.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative rounded-2xl bg-white border border-border p-7 card-lift h-full overflow-hidden">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/5 group-hover:bg-primary/15 transition-colors" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <s.icon size={26} />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{s.title}</h3>
                  <p className="mt-3 text-sm text-soft-gray leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
