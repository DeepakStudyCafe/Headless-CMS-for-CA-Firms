import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calculator,
  Receipt,
  ShieldCheck,
  Building2,
  LineChart,
  FileCheck2,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Calculator,
    title: "Tax Planning",
    desc: "End-to-end direct tax strategy across personal, corporate, NRI and capital-gains scenarios — engineered to be efficient, defensible and audit-ready.",
    tag: "01",
  },
  {
    icon: Receipt,
    title: "GST Services",
    desc: "GST registration, returns, reconciliations, refunds, audits and litigation — handled by specialists who live inside the GST portal every single day.",
    tag: "02",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    desc: "Statutory, internal, tax, stock and forensic audits delivered with Big-4 methodology, risk-based sampling and crystal-clear reporting.",
    tag: "03",
  },
  {
    icon: Building2,
    title: "Company Registration",
    desc: "Private Limited, LLP, OPC, Section 8 and foreign-subsidiary incorporation — including DSC, DIN, MOA, AOA, PAN, TAN and bank account setup.",
    tag: "04",
  },
  {
    icon: LineChart,
    title: "Business Consulting",
    desc: "CFO advisory, financial modelling, fundraising, valuations, M&A diligence and operational benchmarking for ambitious founders and family businesses.",
    tag: "05",
  },
  {
    icon: FileCheck2,
    title: "Compliance",
    desc: "ROC filings, FEMA, RBI, SEBI, labour laws, secretarial compliance and ongoing regulatory health-checks — all on a single dashboard.",
    tag: "06",
  },
];

export function Services() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-head",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: root.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        ".svc-card",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ".svc-grid", start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="relative py-24 sm:py-32 bg-[color:var(--mint)]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="svc-head flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--wine)] font-medium">
              What we do
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-light max-w-2xl leading-[1.05]">
              Six practice areas. <span className="italic text-[color:var(--wine)]">One</span> standard of excellence.
            </h2>
          </div>
          <p className="max-w-sm text-[color:var(--ink)]/70 text-sm leading-relaxed">
            From the first GST filing to a billion-rupee transaction, every engagement runs
            through the same disciplined playbook our partners have refined for two decades.
          </p>
        </div>

        <div className="svc-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`svc-card group relative overflow-hidden rounded-3xl bg-[color:var(--cream)] p-8 border border-[color:var(--ink)]/8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] ${
                i % 5 === 0 ? "lg:row-span-2 lg:p-10" : ""
              }`}
            >
              <div
                className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(400px at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--wine) 20%, transparent), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--ink)] text-[color:var(--cream)] group-hover:bg-[color:var(--wine)] transition-colors">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-sm text-[color:var(--ink)]/40">{s.tag}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--ink)]/70 leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--wine)]">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
