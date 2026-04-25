import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

const ROLES = [
  { t: "Audit Manager", l: "Bengaluru", e: "5–8 yrs", d: "Lead statutory audits for mid-cap manufacturing and SaaS clients. Manage a team of three to five article assistants." },
  { t: "Tax Associate", l: "Mumbai", e: "1–3 yrs", d: "Direct tax compliance, return filings and assessment representation. ICAI qualified or final-year." },
  { t: "GST Specialist", l: "Bengaluru", e: "3–5 yrs", d: "Own GST advisory for retail and FMCG clients. Departmental audit defense experience preferred." },
  { t: "Article Assistant (CA)", l: "Bengaluru / Pune", e: "Fresher", d: "Three-year articleship with rotation across audit, tax and advisory." },
  { t: "Virtual CFO Analyst", l: "Hybrid", e: "2–4 yrs", d: "Build MIS, board decks and cash-flow models for venture-backed D2C brands." },
];

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — ABC & Associates" },
      { name: "description", content: "Open roles for chartered accountants, articles and analysts at a boutique partner-led practice." },
      { property: "og:title", content: "Careers — ABC & Associates" },
      { property: "og:description", content: "Join a boutique CA firm where partners still read every file." },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Build a practice,"
        italic="not a CV."
        intro="We hire slowly, train deeply, and promote from within."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <h2 className="lg:col-span-6 font-display text-4xl lg:text-5xl text-[var(--ink)] leading-tight">
              The kind of place where the
              <span className="italic text-[var(--moss)]"> first three years </span>
              shape the next thirty.
            </h2>
            <p className="lg:col-span-6 lg:pt-3 text-[var(--ink)]/75 leading-relaxed">
              ABC has trained 142 chartered accountants since 1998 — many now sit on
              boards we audit. Our articles attend client meetings from week one,
              draft opinions from month three, and present to partners every
              fortnight. We pay above ICAI minimum and we pay on time.
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {ROLES.map((r) => (
              <li key={r.t} className="grid md:grid-cols-12 gap-4 py-8 group hover:bg-[var(--sage)]/20 -mx-4 px-4 rounded-xl transition-colors">
                <div className="md:col-span-4">
                  <div className="font-display text-2xl text-[var(--ink)]">{r.t}</div>
                  <div className="mt-1 text-xs tracking-[0.2em] uppercase text-[var(--forest)]">
                    {r.l} · {r.e}
                  </div>
                </div>
                <p className="md:col-span-6 text-sm text-[var(--ink)]/75 leading-relaxed">{r.d}</p>
                <div className="md:col-span-2 flex md:justify-end items-center">
                  <a href="mailto:careers@abcassociates.in" className="inline-flex items-center gap-2 text-sm text-[var(--forest)] group-hover:gap-3 transition-all">
                    Apply <span aria-hidden>→</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 lg:p-14 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-display text-3xl lg:text-4xl">
                Don't see your role? Write anyway.
              </h3>
              <p className="mt-3 text-[var(--sage)]/80 max-w-xl">
                We keep an open shortlist for exceptional people. Send a note and a CV
                to careers@abcassociates.in — every email is read by a partner.
              </p>
            </div>
            <a
              href="mailto:careers@abcassociates.in"
              className="lg:col-span-4 lg:justify-self-end inline-flex items-center gap-3 rounded-full bg-[var(--cream)] text-[var(--ink)] px-7 py-3.5 text-sm hover:bg-[var(--sage)] transition-colors"
            >
              Email a partner <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
