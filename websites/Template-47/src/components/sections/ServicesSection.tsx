import { Reveal } from "@/components/Reveal";
import {
  FileSearch,
  Receipt,
  Building2,
  Briefcase,
  Scale,
  LineChart,
  Globe,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Audit & Assurance",
    desc: "Statutory, internal and management audits delivered with rigour, conducted by partners who read every working paper.",
  },
  {
    icon: Receipt,
    title: "Direct Taxation",
    desc: "Income tax planning, return filing, assessments and appellate representation across individuals, firms and corporates.",
  },
  {
    icon: Building2,
    title: "GST & Indirect Tax",
    desc: "End-to-end GST compliance, advisory, refunds and litigation support — with monthly reviews built into the engagement.",
  },
  {
    icon: LineChart,
    title: "Virtual CFO",
    desc: "Embedded financial leadership for founder-led businesses — budgets, MIS, cash forecasts and board reporting.",
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    desc: "Transaction support, due diligence, valuations and structuring for funding rounds, acquisitions and exits.",
  },
  {
    icon: Scale,
    title: "Corporate Law & ROC",
    desc: "Company incorporation, secretarial compliance, FEMA filings and compliance with the Companies Act.",
  },
  {
    icon: Globe,
    title: "International Taxation",
    desc: "Cross-border structuring, transfer pricing studies and DTAA advisory for outbound and inbound operations.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    desc: "SOX, internal controls review, fraud investigations and regulatory remediation tailored to your sector.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-28 md:py-36 bg-mist/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <div className="label-eyebrow mb-5">What we do</div>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.1] text-balance">
                Eight disciplines.
                <span className="italic text-ocean"> One steady hand.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Reveal delay={0.15}>
              <p className="text-foreground/70 leading-relaxed text-[15px]">
                Our practice is organised so that every engagement — large or small — is led by a
                partner and supported by a tight, senior team.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Staggered card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article
                className={`group bg-background p-8 md:p-10 h-full transition-all duration-500 hover:bg-primary hover:text-cream relative ${
                  i % 2 === 1 ? "lg:translate-y-8" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="w-12 h-12 flex items-center justify-center bg-mist text-ocean group-hover:bg-brass group-hover:text-primary transition-colors">
                    <s.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-xs text-muted-foreground group-hover:text-cream/50 transition-colors">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl text-primary group-hover:text-cream transition-colors">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70 group-hover:text-cream/75 transition-colors">
                  {s.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brass">
                  Learn more <span aria-hidden>→</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
