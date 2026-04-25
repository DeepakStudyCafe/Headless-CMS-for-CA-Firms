import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { useFadeIn } from "@/hooks/useFadeIn";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      { name: "description", content: "Audit, taxation, advisory, compliance, risk and forensic services from a modern boutique CA practice." },
      { property: "og:title", content: "Services — ABC & Associates" },
      { property: "og:description", content: "Sixteen disciplines, one standard. Senior-led across audit, tax and advisory." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    label: "Assurance",
    headline: "Audit, with the lights on.",
    items: [
      { t: "Statutory Audit", d: "Independent audit of financial statements under the Companies Act and applicable standards." },
      { t: "Internal Audit", d: "Risk-based reviews of operations, controls and governance — calibrated to your stage." },
      { t: "Tax Audit", d: "Section 44AB audits with disciplined documentation and timely reporting." },
      { t: "Bank & Concurrent Audit", d: "Empanelled audits across public and private sector banks." },
    ],
  },
  {
    label: "Taxation",
    headline: "Tax, in plain language.",
    items: [
      { t: "Direct Tax Advisory", d: "Year-round planning for individuals, partnerships, LLPs and corporates." },
      { t: "GST Compliance", d: "Returns, reconciliations, refunds and end-to-end indirect tax stewardship." },
      { t: "International Tax", d: "Cross-border structuring, DTAA, transfer pricing and FEMA compliance." },
      { t: "Tax Litigation", d: "Representation before assessing officers, CIT(A), ITAT and writ courts." },
    ],
  },
  {
    label: "Advisory",
    headline: "Counsel before transaction.",
    items: [
      { t: "Business Valuation", d: "Valuations for transactions, ESOPs, regulatory and family settlement purposes." },
      { t: "Transaction Support", d: "Buy-side and sell-side due diligence, structuring and negotiation support." },
      { t: "Virtual CFO", d: "Senior finance leadership on retainer, for founders not yet ready for a full team." },
      { t: "Family Office", d: "Multi-generational wealth structuring, succession and trust administration." },
    ],
  },
  {
    label: "Compliance & Risk",
    headline: "Quiet vigilance, modern systems.",
    items: [
      { t: "ROC & Secretarial", d: "Companies Act filings, board governance support and annual compliance calendars." },
      { t: "Internal Controls (IFC)", d: "Design, documentation and testing of internal financial controls." },
      { t: "Forensic Reviews", d: "Discreet investigations into fraud, leakage and governance lapses." },
      { t: "Startup Compliance", d: "DPIIT, Angel Tax, ESOP and fundraise-stage advisory for founders." },
    ],
  },
];

function ServicesPage() {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <PageShell>
      <div ref={ref}>
        <PageHeader
          eyebrow="Our practice"
          title="Sixteen disciplines, one standard."
          subtitle="Each service is delivered by a partner who knows your file personally, supported by a small and deliberate team."
        />

        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 space-y-20">
          {groups.map((g, gi) => (
            <div key={g.label} data-fade>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <p className="eyebrow mb-3">0{gi + 1} · {g.label}</p>
                  <h2 className="font-display text-3xl md:text-5xl text-navy leading-tight max-w-2xl">{g.headline}</h2>
                </div>
                <div className="h-px flex-1 md:ml-10 bg-gradient-to-r from-blue/40 to-transparent self-end mb-3 hidden md:block" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {g.items.map((it, i) => (
                  <article
                    key={it.t}
                    className="group relative rounded-2xl bg-cream-soft border border-border p-7 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  >
                    <span className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-navy to-blue group-hover:h-full transition-all duration-500" />
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <p className="font-mono text-xs text-blue mb-2 tracking-widest">0{i + 1}</p>
                        <h3 className="font-display text-2xl text-navy mb-3">{it.t}</h3>
                        <p className="text-navy/70 leading-relaxed text-sm">{it.d}</p>
                      </div>
                      <span className="w-10 h-10 rounded-full bg-blue/10 group-hover:bg-blue group-hover:text-cream-soft text-blue flex items-center justify-center transition-all duration-500 flex-shrink-0">→</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-blue p-10 md:p-14 text-cream-soft" data-fade>
            <div className="blob bg-blue-light/40 w-[360px] h-[360px] -top-24 -right-12" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="font-display text-3xl md:text-5xl leading-tight">Need something not on this list?</h3>
                <p className="mt-4 text-cream/75 max-w-xl leading-relaxed">If your need is bespoke, we are very likely the right kind of firm to call. Send us a line.</p>
              </div>
              <div className="lg:col-span-4 lg:justify-end flex">
                <Link to="/contact" className="btn-outline">Talk to a partner →</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
