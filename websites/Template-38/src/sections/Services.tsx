import {
  Calculator, Receipt, ShieldCheck, Building2, Briefcase, ScrollText, ArrowUpRight,
} from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const services = [
  { icon: Calculator, title: "Tax Planning", desc: "Strategic direct & indirect tax planning to minimise liability and maximise compliance year-round." },
  { icon: Receipt, title: "GST Services", desc: "End-to-end GST registration, filing, reconciliation and advisory tailored to your business." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal, tax and management audits delivered with rigour, independence and clarity." },
  { icon: Building2, title: "Company Registration", desc: "Seamless incorporation of Pvt Ltd, LLP, OPC and Section 8 companies — paperwork done right." },
  { icon: Briefcase, title: "Business Consulting", desc: "CFO advisory, financial modelling, valuations and growth strategy from seasoned professionals." },
  { icon: ScrollText, title: "Compliance Services", desc: "ROC, MCA, labour and regulatory compliance — kept current so you can focus on growing." },
];

export default function Services() {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} id="services" className="py-24 lg:py-32 bg-[color:var(--cream-deep)]/40">
      <div className="container-x">
        <div className="max-w-3xl">
          <span data-reveal className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            What We Do
          </span>
          <h2 data-reveal className="mt-4 text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Comprehensive financial services, <span className="italic text-primary">crafted for you</span>.
          </h2>
          <p data-reveal className="mt-5 text-muted-foreground leading-relaxed">
            From day-to-day compliance to long-term strategic planning, our six core practice areas
            cover every dimension of your financial life.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              data-reveal
              className="card-elev rounded-2xl p-8 group cursor-pointer"
            >
              <div className="h-14 w-14 rounded-xl bg-[color:var(--cream)] border border-border inline-flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
