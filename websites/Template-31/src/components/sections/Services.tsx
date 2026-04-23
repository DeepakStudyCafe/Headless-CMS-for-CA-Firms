import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { Calculator, Receipt, ShieldCheck, Building2, Briefcase, FileCheck, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Bespoke strategies that minimise liability while maximising long-term wealth preservation." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, filing, reconciliation and advisory under one elegant roof." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal and forensic audits delivered with rigour, clarity and absolute discretion." },
  { icon: Building2, title: "Company Registration", desc: "From private limited to LLP and Section 8 — incorporation handled with white-glove precision." },
  { icon: Briefcase, title: "Business Consulting", desc: "Strategic CFO-level guidance to scale revenue, optimise structure and unlock new markets." },
  { icon: FileCheck, title: "Compliance Services", desc: "ROC, TDS, PF, ESI and labour law compliance — keeping your enterprise pristine, always." },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, [
    { selector: ".svc-head > *", y: 24, stagger: 0.08 },
    { selector: ".svc-card", y: 40, stagger: 0.08 },
  ]);

  return (
    <section ref={ref} id="services" className="py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxe pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-8 relative">
        <div className="svc-head text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold ornament">Our Services</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            A complete <span className="text-gradient-gold italic">suite</span> of financial expertise
          </h2>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground">
            Every engagement is delivered with the same uncompromising standard — because your numbers deserve nothing less.
          </p>
        </div>

        <div className="svc-grid mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="svc-card group relative bg-card rounded-3xl p-8 border border-border/70 hover:border-[var(--gold)]/60 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-25 blur-2xl transition-opacity duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-maroon flex items-center justify-center shadow-elegant group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl lg:text-3xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm lg:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                  Learn more <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
