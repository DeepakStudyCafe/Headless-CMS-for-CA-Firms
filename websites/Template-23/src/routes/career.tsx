import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — ABC & Associates" },
      { name: "description", content: "Train, practise and grow at a partner-led chartered accountancy firm." },
      { property: "og:title", content: "Career — ABC & Associates" },
      { property: "og:description", content: "Quiet work. Loud growth." },
    ],
  }),
  component: Career,
});

const roles = [
  { t: "Audit Manager", l: "Mumbai", e: "5–8 yrs", k: "Statutory + internal audit leadership" },
  { t: "Tax Senior — Direct", l: "Bengaluru", e: "3–5 yrs", k: "Income tax, TP documentation" },
  { t: "GST Associate", l: "Mumbai", e: "1–3 yrs", k: "Compliance + advisory" },
  { t: "Transactions Analyst", l: "Mumbai", e: "2–4 yrs", k: "Diligence, valuations" },
  { t: "Articled Assistant", l: "Multiple", e: "Fresh", k: "3-year articleship" },
];

function Career() {
  return (
    <div className="relative">
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ Career</p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl">
              Quiet work. <br/><span className="text-brand">Loud growth.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
              We hire people who like the work itself — the careful kind. In return, we offer partner mentorship, mandates that matter, and a long runway.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Mentorship", d: "Every junior is paired with a partner from day one." },
              { t: "Mandates", d: "Real responsibility on real files — early." },
              { t: "Standards", d: "Train inside the practice the industry benchmarks against." },
            ].map(c => (
              <Reveal key={c.t}>
                <div className="rounded-xl border border-border bg-surface/40 p-7 transition hover:border-brand/50">
                  <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Open positions</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {roles.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.04}>
                <Link to="/contact" className="grid cursor-pointer grid-cols-12 items-center gap-4 py-6 transition hover:bg-surface/40">
                  <h3 className="col-span-12 font-display text-xl font-medium md:col-span-4">{r.t}</h3>
                  <p className="col-span-6 text-sm text-muted-foreground md:col-span-2">{r.l}</p>
                  <p className="col-span-6 text-sm text-muted-foreground md:col-span-2">{r.e}</p>
                  <p className="col-span-12 text-sm text-foreground/80 md:col-span-3">{r.k}</p>
                  <ArrowUpRight className="col-span-12 h-5 w-5 text-brand md:col-span-1 md:justify-self-end" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
