import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — ABC & Associates" },
      { name: "description", content: "Open positions and articleship opportunities at ABC & Associates, a boutique chartered accountancy firm." },
      { property: "og:title", content: "Career — ABC & Associates" },
      { property: "og:description", content: "A small, deliberate practice. A career built on craft." },
    ],
  }),
  component: CareerPage,
});

const ROLES = [
  { title: "Articled Assistant (CA Inter qualified)", type: "Articleship · 3 years", loc: "New Delhi", desc: "Rotational exposure across audit, direct tax and advisory desks under partner mentorship." },
  { title: "Senior Associate — Statutory Audit", type: "Full-time · 4-7 years", loc: "New Delhi", desc: "Lead audit engagements for mid-market manufacturing and BFSI clients, end-to-end." },
  { title: "Manager — Direct Tax & Litigation", type: "Full-time · 5-8 years", loc: "New Delhi", desc: "Drive tax advisory and represent clients before AO, CIT(A) and ITAT alongside the partner." },
  { title: "GST Executive", type: "Full-time · 2-4 years", loc: "New Delhi", desc: "Own monthly GST compliance and reconciliation for a portfolio of growing clients." },
];

function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title={<>Build a career on <em className="italic font-light text-primary">craft</em>.</>}
        intro="A small firm is a different way to grow. Fewer layers between you and the partner. Wider exposure to the work that matters. Shorter feedback loops. We hire deliberately."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl space-y-5">
          {ROLES.map((r, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <article className="group grid gap-6 rounded-3xl border border-border bg-card p-8 transition hover:border-primary/40 hover:shadow-[var(--shadow-card)] sm:grid-cols-12 sm:p-10">
                <div className="sm:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-sm text-primary/60">0{i + 1}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight text-foreground sm:text-3xl">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
                <div className="sm:col-span-3 sm:col-start-9 flex flex-col justify-between gap-4">
                  <div className="space-y-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <p><span className="text-primary">Type</span> · {r.type}</p>
                    <p><span className="text-primary">Location</span> · {r.loc}</p>
                  </div>
                  <a href="mailto:careers@abcassociates.in" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition group-hover:gap-3">
                    Apply <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <div className="mt-10 rounded-3xl bg-secondary/60 p-10 text-center">
              <p className="font-display text-2xl text-foreground">Don't see your role?</p>
              <p className="mt-2 text-sm text-muted-foreground">Write to us anyway. We make room for the right people.</p>
              <a href="mailto:careers@abcassociates.in" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
                careers@abcassociates.in
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
