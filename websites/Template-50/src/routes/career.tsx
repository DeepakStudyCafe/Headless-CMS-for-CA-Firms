import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { useFadeIn } from "@/hooks/useFadeIn";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — ABC & Associates" },
      { name: "description", content: "Join a partner-led, deliberately small chartered accountancy practice." },
      { property: "og:title", content: "Career — ABC & Associates" },
      { property: "og:description", content: "Quiet rigour. Senior mentorship. Long horizons." },
    ],
  }),
  component: CareerPage,
});

const roles = [
  { t: "Chartered Accountant — Audit", loc: "Bengaluru", type: "Full-time", exp: "2–4 yrs PQE", d: "Lead statutory and internal audit engagements for mid-market clients. Reports directly to the founding partner." },
  { t: "Tax Manager", loc: "Bengaluru", type: "Full-time", exp: "3–6 yrs PQE", d: "Drive direct tax planning, compliance and litigation across a portfolio of corporate and HNI clients." },
  { t: "Articled Assistant", loc: "Bengaluru", type: "Articleship", exp: "Cleared CA Inter", d: "Three-year articleship rotating across audit, tax and advisory under partner supervision." },
  { t: "Semi-Qualified Associate", loc: "Bengaluru", type: "Full-time", exp: "1–3 yrs", d: "Support managers across compliance, GST and corporate filings. Pathway to qualification supported." },
];

const benefits = [
  { t: "Direct partner mentorship", d: "No grey-suited intermediary. Work with partners from day one." },
  { t: "CA finals support", d: "Paid study leave, mock tests and senior-led coaching." },
  { t: "Reading stipend", d: "Annual budget for professional reading, courses and conferences." },
  { t: "Sabbatical eligible", d: "After five years — paid time to rest, travel or teach." },
  { t: "Hybrid by trust", d: "Outcome-led work arrangements, never time-clocked." },
  { t: "Quality over hours", d: "We have no productivity dashboards, only craft reviews." },
];

function CareerPage() {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <PageShell>
      <div ref={ref}>
        <PageHeader
          eyebrow="Practice & people"
          title="Build a career, not a CV."
          subtitle="We hire slowly, retain quietly, and promote on judgement rather than tenure. If you would rather grow within a small firm than disappear inside a large one, write to us."
        />

        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6 text-lg text-navy/80 leading-relaxed" data-fade>
            <p>
              Our professionals work directly with partners from day one. There is no shadow team,
              no template engagement. Files are small and intimate, clients are met in person,
              and judgement is something we expect early.
            </p>
            <p>
              In return we offer mentorship that lasts beyond the firm, exposure across disciplines,
              and a culture that prizes craft over hours.
            </p>
            <blockquote className="font-display text-3xl text-blue italic border-l-4 border-blue pl-6 mt-8">
              "We hire the curious. We keep the considered."
            </blockquote>
          </div>

          <aside className="md:col-span-5 rounded-3xl bg-gradient-to-br from-navy to-blue text-cream-soft p-8 md:p-10 shadow-card relative overflow-hidden" data-fade>
            <div className="blob bg-blue-light/40 w-[300px] h-[300px] -top-24 -right-12" />
            <div className="relative">
              <p className="eyebrow !text-blue-light mb-5">What we offer</p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((b) => (
                  <div key={b.t} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-cream-soft/15 flex items-center justify-center text-cream-soft flex-shrink-0">✓</span>
                    <div>
                      <p className="font-display text-lg text-cream-soft">{b.t}</p>
                      <p className="text-sm text-cream/70 leading-snug">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* Roles */}
        <section className="bg-gradient-to-b from-cream-soft to-background py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div data-fade>
                <p className="eyebrow mb-4">Open roles</p>
                <h2 className="font-display text-4xl md:text-5xl text-navy">Currently inviting applications.</h2>
              </div>
              <Link to="/contact" className="btn-ghost self-start md:self-end" data-fade>Contact HR <span aria-hidden>→</span></Link>
            </div>

            <div className="grid gap-4">
              {roles.map((r) => (
                <article
                  key={r.t}
                  data-fade
                  className="group rounded-2xl bg-cream-soft border border-border p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-0.5"
                >
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    <h3 className="md:col-span-4 font-display text-2xl text-navy">{r.t}</h3>
                    <p className="md:col-span-2 text-xs uppercase tracking-widest text-blue font-mono">{r.loc}</p>
                    <p className="md:col-span-2 text-sm text-navy/70">{r.type}</p>
                    <p className="md:col-span-3 text-sm text-navy/70">{r.exp}</p>
                    <button className="md:col-span-1 text-right text-blue font-medium group-hover:text-navy transition">Apply →</button>
                  </div>
                  <p className="text-sm text-navy/65 leading-relaxed mt-4 md:pl-0">{r.d}</p>
                </article>
              ))}
            </div>

            <p className="mt-10 text-sm italic text-navy/65" data-fade>
              Don't see the role you imagined? Write to <span className="text-blue font-medium">careers@abcassociates.in</span> — we read every letter.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
