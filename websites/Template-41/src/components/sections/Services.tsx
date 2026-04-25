import { useGsapReveal } from "@/hooks/useGsapReveal";
import {
  Calculator, FileText, ShieldCheck, Building2, TrendingUp, Scale, ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Tax Planning & Filing",
    desc: "End-to-end direct tax services covering income tax returns, advance tax, TDS, capital gains and structured tax-saving strategies for individuals and corporates.",
  },
  {
    icon: FileText,
    title: "GST Registration & Returns",
    desc: "GST registrations, monthly and annual return filings, reconciliations, refund claims and representation before GST authorities — fully managed.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    desc: "Statutory, internal, tax, stock and concurrent audits delivered with rigorous documentation and risk-based methodology compliant with ICAI standards.",
  },
  {
    icon: Building2,
    title: "Company Formation",
    desc: "Private Limited, LLP, OPC and partnership incorporations including DSC, DIN, MOA/AOA drafting, ROC filings and post-incorporation compliance setup.",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    desc: "Strategic CFO services, financial modelling, valuations, due diligence and growth advisory tailored to founders, family businesses and SMEs.",
  },
  {
    icon: Scale,
    title: "Compliance & Legal",
    desc: "ROC filings, secretarial compliance, FEMA & RBI advisory, labour law and end-to-end regulatory support so your business stays consistently compliant.",
  },
];

export function Services() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section id="services" ref={ref as never} className="relative py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <div data-reveal className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
            What We Do
          </div>
          <h2 data-reveal className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            A complete suite of <span className="italic text-gradient-gold">financial &amp; compliance</span> services.
          </h2>
          <p data-reveal className="text-muted-foreground text-lg">
            Whether you're starting up, scaling, or restructuring — our specialists
            deliver clear, audit-ready solutions that protect your business and
            unlock growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                data-reveal
                className="group relative p-8 rounded-3xl bg-background border border-border hover:border-gold hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gold-soft group-hover:bg-gold transition-colors">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 group-hover:text-gold transition-colors">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}