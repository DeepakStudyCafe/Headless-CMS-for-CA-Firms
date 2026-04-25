import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calculator,
  ScrollText,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Globe2,
  Building2,
  FileSearch,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Calculator,
    title: "Direct Taxation",
    desc: "Income-tax planning, return filing, assessments and litigation support for individuals, partnerships and corporates — calibrated to minimise risk and maximise legitimate efficiency.",
  },
  {
    icon: ScrollText,
    title: "GST & Indirect Tax",
    desc: "End-to-end GST compliance, refunds, audits and representation. We handle complex inter-state and export structures with the same care we give a single quarterly return.",
  },
  {
    icon: ShieldCheck,
    title: "Statutory & Internal Audit",
    desc: "Independent audits under the Companies Act, internal control reviews and risk-based assurance — delivered with a sceptical eye and a constructive report.",
  },
  {
    icon: Briefcase,
    title: "Corporate Advisory",
    desc: "Entity structuring, ROC compliance, secretarial support, and ongoing board-level advice for promoter-led companies and venture-backed startups alike.",
  },
  {
    icon: TrendingUp,
    title: "Virtual CFO",
    desc: "MIS dashboards, cash-flow forecasting, fundraising readiness and finance-function leadership — outsourced to senior CAs who think like operators.",
  },
  {
    icon: Globe2,
    title: "FEMA & Cross-Border",
    desc: "Inbound and outbound investment structuring, ECB compliance, transfer pricing studies and RBI representation for businesses with international footprint.",
  },
  {
    icon: Building2,
    title: "Transaction Advisory",
    desc: "Due diligence, valuation, M&A structuring and post-deal integration support — a steady hand at the table when the stakes are highest.",
  },
  {
    icon: FileSearch,
    title: "Forensic & Investigative",
    desc: "Confidential investigations, fraud risk assessments and forensic audits, conducted with discretion and produced to evidentiary standards.",
  },
];

export function Services() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-svc-card]", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={root}
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--cream) 60%, var(--background)) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              (02) — Services
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-balance max-w-3xl">
              A full studio of <span className="italic">finance, audit</span>{" "}
              and advisory under one roof.
            </h2>
          </div>
          <p className="text-foreground/70 max-w-sm">
            Eight senior practice areas, led by partners, with the patience to
            tailor each engagement to the business in front of us.
          </p>
        </div>

        {/* Staggered overlapping grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const offsets = [
              "md:col-span-5 md:translate-y-0",
              "md:col-span-7 md:translate-y-10",
              "md:col-span-7 md:-translate-y-6",
              "md:col-span-5 md:translate-y-4",
              "md:col-span-4 md:translate-y-2",
              "md:col-span-4 md:-translate-y-4",
              "md:col-span-4 md:translate-y-8",
              "md:col-span-12 md:translate-y-0",
            ];
            return (
              <article
                key={s.title}
                data-svc-card
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(30,41,59,0.25)] ${offsets[i]}`}
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-sky/40 grid place-items-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="font-display text-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl md:text-[28px]">{s.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed text-[15px]">
                  {s.desc}
                </p>
                <div
                  className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                  style={{ background: "radial-gradient(circle, var(--sky), transparent 70%)" }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
