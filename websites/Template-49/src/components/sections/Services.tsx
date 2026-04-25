import { useReveal } from "@/hooks/useReveal";

const SERVICES = [
  {
    n: "01",
    t: "Audit & Assurance",
    d: "Statutory, internal, tax and management audits engineered to surface insight, not just compliance — for private companies, listed entities and not-for-profits.",
  },
  {
    n: "02",
    t: "Direct Taxation",
    d: "Income-tax planning, return filing, scrutiny representation and litigation support for individuals, partnerships and corporates across India.",
  },
  {
    n: "03",
    t: "GST & Indirect Tax",
    d: "End-to-end GST advisory, return filings, refund claims, departmental audit defense and strategic structuring of supply chains.",
  },
  {
    n: "04",
    t: "Corporate Law & ROC",
    d: "Incorporation, secretarial compliance, FEMA filings, RBI approvals, share allotments and ongoing governance for private and public companies.",
  },
  {
    n: "05",
    t: "Virtual CFO",
    d: "Outsourced finance leadership for founder-led businesses — MIS, cash-flow, board reporting, fundraising and investor relations on a retainer.",
  },
  {
    n: "06",
    t: "Transaction Advisory",
    d: "Due diligence, valuations, deal structuring and post-merger integration for mid-market acquisitions, secondary sales and private placements.",
  },
];

export function Services() {
  const ref = useReveal();
  return (
    <section ref={ref as never} id="services" className="relative py-28 bg-[var(--forest)] text-[var(--cream)] overflow-hidden grain">
      <svg className="absolute -top-px left-0 right-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path d="M0,32 C360,80 720,0 1080,40 C1260,60 1380,40 1440,24 L1440,0 L0,0 Z" fill="var(--cream)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div data-reveal className="text-xs tracking-[0.3em] uppercase text-[var(--sage)] mb-5">
              ◇ Practice Areas
            </div>
            <h2 data-reveal className="font-display text-5xl lg:text-6xl leading-[1.05] text-balance max-w-2xl">
              Six disciplines, one
              <span className="italic text-[var(--sage)]"> partner-led </span>
              standard.
            </h2>
          </div>
          <p data-reveal className="max-w-md text-[var(--sage)]/85 text-base leading-relaxed">
            Whether you need a clean opinion before a board meeting or an architect for a
            cross-border restructuring, our partners stay close to the work.
          </p>
        </div>

        <div className="no-scrollbar overflow-x-auto overflow-y-hidden -mx-6 lg:-mx-10 px-6 lg:px-10 py-16 -my-16 snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-6">
            {SERVICES.map((s, i) => (
              <article
                key={s.n}
                data-reveal
                className={`group relative shrink-0 w-[78vw] sm:w-[420px] snap-start rounded-3xl border border-[var(--moss)]/40 bg-[var(--ink)]/40 backdrop-blur p-8 hover:bg-[var(--ink)]/70 hover:-translate-y-2 transition-all duration-500 ${
                  i % 2 === 1 ? "lg:translate-y-10" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-display text-sm text-[var(--sage)]/70">— {s.n}</span>
                  <ServiceIcon i={i} />
                </div>
                <h3 className="font-display text-3xl leading-tight text-[var(--cream)]">{s.t}</h3>
                <p className="mt-4 text-sm text-[var(--sage)]/80 leading-relaxed">{s.d}</p>
                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--sage)] group-hover:gap-4 transition-all">
                  Learn more <span aria-hidden>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ i }: { i: number }) {
  const paths = [
    <path key="0" d="M4 20V8m6 12V4m6 16v-8m6 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />,
    <path key="1" d="M4 6h16M6 12h12M8 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />,
    <path key="2" d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
    <path key="3" d="M3 7l9-4 9 4-9 4-9-4zm0 5l9 4 9-4M3 17l9 4 9-4" stroke="currentColor" strokeWidth="1.5" />,
    <path key="4" d="M4 4h16v16H4zM4 9h16M9 4v16" stroke="currentColor" strokeWidth="1.5" />,
    <path key="5" d="M3 12c4-9 14-9 18 0M5 12c3 6 11 6 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />,
  ];
  return (
    <span className="h-12 w-12 grid place-items-center rounded-full border border-[var(--moss)]/40 text-[var(--sage)]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">{paths[i % paths.length]}</svg>
    </span>
  );
}
