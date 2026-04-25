import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ScrollText, Calculator, Receipt, ShieldCheck, Building2, Briefcase, LineChart, FileSearch,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { icon: ScrollText, title: "Audit & Assurance", desc: "Statutory, internal, and tax audits conducted with the rigour required of listed and privately‑held companies alike." },
  { icon: Calculator, title: "Direct Taxation", desc: "Personal and corporate income tax planning, filings, assessments, and litigation support across all jurisdictions." },
  { icon: Receipt, title: "GST & Indirect Tax", desc: "End‑to‑end GST registration, returns, refunds, audits, and advisory for multi‑state operations." },
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "ROC filings, FEMA, RBI, and SEBI compliance — kept current so your board never has to ask." },
  { icon: Building2, title: "Company Formation", desc: "Incorporation of private limited, LLP, and one‑person companies, with founder agreements and capital structuring." },
  { icon: Briefcase, title: "Virtual CFO", desc: "Monthly closes, MIS, board reporting, and treasury oversight for growth‑stage companies without a full finance team." },
  { icon: LineChart, title: "Transaction Advisory", desc: "Due diligence, valuations, and deal structuring for fundraises, M&A, and family business succession." },
  { icon: FileSearch, title: "Forensic & Risk", desc: "Investigations, internal control reviews, and fraud risk assessments — handled with absolute confidentiality." },
];

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-head",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".svc-card",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ".svc-grid", start: "top 90%", once: true },
        }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-32 lg:py-40 bg-forest-1 text-cream overflow-hidden grain"
    >
      {/* Soft gradient orbs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--forest-4), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--forest-3), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-2 svc-head">
            <div className="text-[11px] tracking-[0.3em] uppercase text-forest-4">— 03</div>
          </div>
          <div className="lg:col-span-7 svc-head">
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05] text-cream text-balance">
              Eight disciplines, one ledger of trust.
            </h2>
          </div>
          <p className="lg:col-span-3 svc-head text-cream/70 leading-relaxed text-[15px] lg:pt-4">
            Each engagement is led by a partner. Each delivery is reviewed twice. Each conversation is yours alone.
          </p>
        </div>

        {/* Responsive grid — no inner scroll */}
        <div className="svc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="svc-card group relative overflow-hidden rounded-sm bg-cream/[0.04] backdrop-blur-sm border border-cream/10 p-7 lg:p-8 transition-all duration-500 ease-out hover:bg-cream hover:text-forest-1 hover:-translate-y-1.5 hover:border-forest-4/40 hover:shadow-[0_20px_60px_-20px_rgba(31,125,83,0.45)]"
              >
                {/* Subtle glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: "radial-gradient(120% 80% at 0% 0%, color-mix(in oklab, var(--forest-4) 12%, transparent), transparent 60%)" }} />

                <div className="absolute top-5 right-6 font-mono text-[10px] text-cream/40 group-hover:text-forest-3 transition-colors">
                  0{i + 1}
                </div>
                <div className="relative h-12 w-12 flex items-center justify-center rounded-sm border border-cream/20 group-hover:border-forest-3 group-hover:bg-forest-3 group-hover:text-cream transition-all duration-500 mb-10 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={20} strokeWidth={1.4} />
                </div>
                <h3 className="relative font-display text-[22px] leading-tight mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="relative text-[13.5px] leading-relaxed text-cream/70 group-hover:text-ink-soft transition-colors">
                  {s.desc}
                </p>
                <div className="relative mt-7 pt-5 border-t border-cream/10 group-hover:border-forest-3/30 text-[10px] tracking-[0.25em] uppercase flex items-center justify-between">
                  <span>Learn more</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
