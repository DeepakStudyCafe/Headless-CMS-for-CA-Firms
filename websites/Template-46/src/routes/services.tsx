import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      { name: "description", content: "Audit & assurance, direct tax, GST, corporate advisory, bookkeeping and FEMA services from a boutique chartered accountancy firm." },
      { property: "og:title", content: "Services — ABC & Associates" },
      { property: "og:description", content: "Six practice areas, one team behind every file." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    no: "01", title: "Audit & Assurance", glyph: "✦",
    desc: "Statutory and internal audits performed with a forensic eye and a quiet, methodical hand.",
    items: ["Statutory audit under Companies Act", "Internal & management audit", "Tax audit u/s 44AB", "Stock & concurrent audit", "IFC & SOX-style controls testing"],
  },
  {
    no: "02", title: "Direct Taxation", glyph: "❖",
    desc: "Income-tax planning, returns, representation and advisory for individuals and enterprises.",
    items: ["Income-tax return filing", "Tax planning & restructuring", "Representation before AO/CIT(A)/ITAT", "TDS compliance & advisory", "Capital gains & estate planning"],
  },
  {
    no: "03", title: "GST & Indirect Tax", glyph: "✤",
    desc: "End-to-end GST compliance, audits, refunds and litigation support.",
    items: ["GST registration & returns", "GST audit & reconciliation", "Refund applications", "Show-cause & litigation support", "E-invoicing & e-way bill setup"],
  },
  {
    no: "04", title: "Corporate Advisory", glyph: "✺",
    desc: "Entity structuring, ROC filings, transactions and CFO-level guidance.",
    items: ["Company / LLP incorporation", "ROC & secretarial compliance", "M&A & due diligence", "Valuations under Rule 11UA", "Virtual CFO services"],
  },
  {
    no: "05", title: "Bookkeeping & MIS", glyph: "✶",
    desc: "Cloud-based bookkeeping with monthly MIS dashboards.",
    items: ["Tally / Zoho / QuickBooks setup", "Monthly bookkeeping", "Payroll processing", "Management dashboards", "Budgeting & cash-flow forecasts"],
  },
  {
    no: "06", title: "FEMA & Cross-border", glyph: "❀",
    desc: "FEMA compliance, transfer pricing and ODI/FDI structuring.",
    items: ["FDI & ODI reporting", "Transfer pricing study", "Form 15CA/15CB", "ECB & external commercial borrowings", "Branch & liaison office setup"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>Six disciplines, <em className="italic font-light text-primary">one team</em> behind the file.</>}
        intro="From routine compliance to high-stakes advisory, every engagement is led by a partner and read end-to-end before sign-off."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.05}>
              <article className="group grid gap-8 rounded-3xl border border-border/70 bg-card p-8 transition hover:border-primary/40 hover:shadow-[var(--shadow-card)] sm:p-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-sm text-primary/60">{s.no}</span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-2xl text-primary/60">{s.glyph}</span>
                  </div>
                  <h2 className="mt-6 font-display text-3xl leading-tight text-foreground sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
