import {
  Calculator,
  Receipt,
  ClipboardCheck,
  Building2,
  Briefcase,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic tax advisory and planning to optimise your liabilities legally and efficiently." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, filing, reconciliation, audits and litigation support." },
  { icon: ClipboardCheck, title: "Audit & Assurance", desc: "Statutory, internal and management audits with insightful, actionable reporting." },
  { icon: Building2, title: "Company Registration", desc: "Hassle-free incorporation of Pvt Ltd, LLP, OPC and other entity types." },
  { icon: Briefcase, title: "Business Consulting", desc: "CFO services, financial planning and strategic advisory for sustainable growth." },
  { icon: ShieldCheck, title: "Compliance Services", desc: "ROC filings, TDS, payroll and ongoing regulatory compliance management." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Comprehensive <span className="text-gold">financial solutions</span>
          </h2>
          <div className="fancy-divider mx-auto mt-6" />
          <p className="mt-5 text-muted-foreground">
            From taxation to advisory, we deliver a complete suite of CA services to support
            every stage of your financial journey.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="reveal group relative bg-card rounded-2xl p-8 border border-border/70 shadow-card card-lift overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-32 w-32 gradient-gold opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
              <div className="relative">
                <div className="h-14 w-14 rounded-xl gradient-gold grid place-items-center shadow-gold">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
