import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ArrowUpRight } from "lucide-react";

const ROLES = [
  { title: "Audit Manager", location: "New Delhi", type: "Full‑time", years: "5–8 yrs", desc: "Lead statutory and internal audit engagements for listed and mid‑cap clients across manufacturing, pharma, and services." },
  { title: "Senior Associate — Direct Tax", location: "New Delhi", type: "Full‑time", years: "3–5 yrs", desc: "Handle corporate and individual tax filings, assessments, and represent clients before assessing officers and CIT(A)." },
  { title: "GST Specialist", location: "Gurugram", type: "Full‑time", years: "2–4 yrs", desc: "Own GST compliance for multi‑state clients — returns, refunds, audits, and advisory on classification and ITC." },
  { title: "Article Trainee (CA)", location: "New Delhi", type: "Articleship", years: "—", desc: "Three‑year ICAI articleship with rotation across audit, tax, and advisory desks. Mentored directly by partners." },
];

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — ABC & Associates" },
      { name: "description", content: "Open roles for chartered accountants, articles, and tax specialists at ABC & Associates, New Delhi." },
      { property: "og:title", content: "Careers at ABC & Associates" },
      { property: "og:description", content: "Join a partner-led practice that values craft, character, and a long view." },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Career"
        title="Build a craft, not just a CV."
        subtitle="We hire slowly, we keep our people, and we still teach the way our founder was taught."
      />
      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <p className="lg:col-span-6 lg:col-start-4 font-display text-2xl md:text-3xl text-forest-1 leading-snug text-balance">
              "We have had associates stay with us for fifteen years. They didn't stay because of the salary. They stayed because the work was interesting and the partners answered every question."
            </p>
          </div>

          <div className="space-y-1 border-t border-border">
            {ROLES.map((r, i) => (
              <article key={r.title} className="group grid md:grid-cols-12 gap-6 items-center py-8 border-b border-border hover:bg-sand/40 transition-colors px-2 -mx-2">
                <div className="md:col-span-1 font-mono text-xs text-ink-soft">0{i + 1}</div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl text-forest-1 group-hover:text-forest-3 transition-colors">{r.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] tracking-[0.2em] uppercase text-ink-soft">
                    <span>{r.location}</span><span>·</span><span>{r.type}</span><span>·</span><span>{r.years}</span>
                  </div>
                </div>
                <p className="md:col-span-5 text-ink-soft text-[15px] leading-relaxed">{r.desc}</p>
                <div className="md:col-span-2 md:text-right">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-forest-3 border-b border-forest-3 pb-1">
                    Apply <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              ["Mentorship", "Every joiner is paired with a partner for the first eighteen months."],
              ["Study support", "Paid leave and fee reimbursement for CA finals, DISA, and international certifications."],
              ["Wellbeing", "Five‑day week outside filing season. Unhurried lunches. A practice that values rest."],
            ].map(([h, b]) => (
              <div key={h} className="border-t border-forest-3 pt-6">
                <div className="text-[11px] tracking-[0.3em] uppercase text-forest-3 mb-3">{h}</div>
                <p className="text-ink-soft leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
