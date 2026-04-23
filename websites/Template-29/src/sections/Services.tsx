import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Calculator, FileSearch, Landmark, Scale, ShieldCheck, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { icon: FileSearch, title: "Audit & Assurance", desc: "Statutory, internal and forensic audits with measured rigor and clear reporting." },
  { icon: Calculator, title: "Direct & Indirect Tax", desc: "End-to-end tax planning, GST, transfer pricing and litigation support." },
  { icon: TrendingUp, title: "Advisory", desc: "Strategic CFO services, valuations, M&A and capital structuring." },
  { icon: ShieldCheck, title: "Risk & Compliance", desc: "ESG, internal controls, SOX and regulatory compliance frameworks." },
  { icon: Landmark, title: "Corporate Law", desc: "Company law, FEMA, RBI and SEBI advisory delivered with precision." },
  { icon: Scale, title: "Outsourcing", desc: "Bookkeeping, payroll and finance operations — calm, accurate and on time." },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-head", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 30, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
      });
      gsap.from(".svc-card", {
        scrollTrigger: { trigger: ".svc-grid", start: "top 80%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="svc-head text-xs uppercase tracking-[0.25em] text-[var(--gold)]">— Services</div>
          <h2 className="svc-head mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            A full spectrum of <span className="italic gold-text">financial expertise</span>.
          </h2>
          <p className="svc-head mt-5 text-lg text-muted-foreground">
            From audit to advisory, every engagement is led by partners who care about the outcome.
          </p>
        </div>

        <div className="svc-grid mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article key={s.title} className="svc-card group card-luxe p-8 relative overflow-hidden">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-[var(--gold)]" />
              </div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gold-soft)] to-[var(--cream)] ring-gold">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-border via-[var(--gold)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
