import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { n: "01", t: "Audit & Assurance", d: "Statutory, internal and management audits with sharp insight and disciplined execution." },
  { n: "02", t: "Direct Taxation", d: "Strategic income-tax planning, return filings, and end-to-end litigation support." },
  { n: "03", t: "GST Advisory", d: "Registrations, returns, refunds and complex indirect-tax structuring across sectors." },
  { n: "04", t: "Company Formation", d: "Incorporation of LLPs, Pvt Ltd, OPC and foreign subsidiaries with full ROC compliance." },
  { n: "05", t: "Bookkeeping", d: "Cloud-first accounting, MIS dashboards and CFO-grade reporting for growing businesses." },
  { n: "06", t: "FEMA & RBI", d: "Cross-border transactions, FDI/ODI compliance and advisory for global Indian operations." },
];

export function Services() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-service]", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="relative py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-gold">◆</span> Services
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl max-w-2xl leading-tight">
              A complete spectrum of <em className="gradient-text-gold not-italic">financial expertise.</em>
            </h2>
          </div>
          <a href="#contact" className="text-sm font-medium nav-link self-start lg:self-auto">
            Discuss a mandate →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.n}
              data-service
              className="group relative rounded-[2rem] bg-card ring-1 ring-border p-8 shadow-luxe hover:-translate-y-1 transition-all duration-500 hover:ring-gold overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold/0 group-hover:bg-gold/15 blur-2xl transition duration-700" />
              <div className="font-display text-sm text-gold">{s.n}</div>
              <h3 className="font-display text-2xl mt-4">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                Learn more
                <span className="inline-block transition-transform group-hover:translate-x-1 text-gold">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
