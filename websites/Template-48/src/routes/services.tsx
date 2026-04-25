import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Scale, FileText, TrendingUp, Building2, Calculator, Globe2, Users } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      { name: "description", content: "Audit, direct tax, GST, corporate law, virtual CFO and risk advisory from ABC & Associates." },
      { property: "og:title", content: "Practice areas — ABC & Associates" },
      { property: "og:description", content: "Eight disciplines built around the long arc of a business." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, internal, tax and concurrent audits delivered with rigour and clear, narrative reporting that owners can act on." },
  { icon: Calculator, title: "Direct Taxation", desc: "Income-tax planning, return filings, scrutiny representation and litigation support across the assessment lifecycle." },
  { icon: FileText, title: "GST & Indirect Tax", desc: "Registrations, monthly compliance, annual returns, GST audits, refund claims and end-to-end indirect tax advisory." },
  { icon: Building2, title: "Corporate & Secretarial", desc: "Company and LLP formation, ROC filings, board advisory, FEMA filings and compliance under the Companies Act." },
  { icon: TrendingUp, title: "Virtual CFO", desc: "Outsourced finance leadership for growth-stage companies — MIS, cash flow, fundraising support and board reporting." },
  { icon: Scale, title: "Risk & Internal Controls", desc: "SOX-style internal control reviews, SOP design, fraud risk assessment and process audits scaled to your business." },
  { icon: Globe2, title: "International Tax & TP", desc: "Cross-border structuring, transfer pricing documentation, DTAA advisory and expatriate tax services." },
  { icon: Users, title: "Family Office & Estate", desc: "Succession planning, family constitutions, private trust structuring and inter-generational wealth advisory." },
];

function ServicesPage() {
  useReveal();
  return (
    <div className="pt-32 lg:pt-40">
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6 reveal-up">— Practice areas</p>
        <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[1.05] max-w-4xl text-balance reveal-up">
          Eight disciplines, woven into one continuous conversation.
        </h1>
        <p className="mt-8 max-w-2xl text-foreground/75 leading-relaxed reveal-up">
          Each engagement is partner-led. We size our scope to your stage — from a first-time
          founder to a listed mid-cap with a multi-state operation.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group grid lg:grid-cols-12 gap-6 lg:gap-12 px-6 lg:px-10 py-12 lg:py-16 border-b border-border hover:bg-secondary/40 transition-colors reveal-up"
            >
              <div className="lg:col-span-1 font-display text-3xl text-accent">0{i + 1}</div>
              <div className="lg:col-span-3 flex items-start gap-4">
                <s.icon size={28} className="text-accent shrink-0 mt-1" />
                <h2 className="font-display text-3xl text-primary leading-tight">{s.title}</h2>
              </div>
              <p className="lg:col-span-6 lg:col-start-6 text-foreground/75 leading-relaxed">
                {s.desc}
              </p>
              <div className="lg:col-span-2 flex lg:justify-end items-start text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent transition">
                Speak to a partner →
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
