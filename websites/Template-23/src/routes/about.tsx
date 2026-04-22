import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC & Associates" },
      { name: "description", content: "A 27-year practice serving founders, family offices and institutions with audit, tax and advisory." },
      { property: "og:title", content: "About — ABC & Associates" },
      { property: "og:description", content: "Discretion, rigor, counsel, continuity." },
    ],
  }),
  component: About,
});

const milestones = [
  { y: "1998", t: "Founded in Mumbai by three chartered accountants." },
  { y: "2006", t: "Opened Bengaluru desk; corporate advisory practice begins." },
  { y: "2013", t: "Empanelled with RBI for cooperative bank audits." },
  { y: "2019", t: "Transactions practice; first cross-border M&A diligence." },
  { y: "2024", t: "Family office vertical formalised; 340+ active mandates." },
];

function About() {
  return (
    <div className="relative">
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ About the firm</p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl">
              A practice, <br /> <span className="text-muted-foreground">not a factory.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 sm:px-8">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface to-background">
              <div className="flex h-full flex-col justify-between p-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Charter</p>
                  <p className="mt-3 font-display text-2xl">"Numbers carry weight only when someone stands behind them."</p>
                </div>
                <div>
                  <div className="hairline mb-5" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">Est. 1998 · ICAI Reg. No. 102345W</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="col-span-12 space-y-8 lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                We were founded on a simple discipline — read the numbers carefully, and tell the truth about them.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                ABC & Associates is a chartered accountancy firm built around long engagements, partner-led teams and quiet, decisive work. We serve founders through their first audit, family offices through generational transitions, and listed companies through quarterly cycles that don't forgive shortcuts.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our partners aren't bystanders. Each mandate has a partner whose name is on the file and whose phone you can call. That's the practice we wanted to build — and the one our clients keep coming back to.
              </p>
            </Reveal>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[{k:"27",v:"Years"},{k:"42",v:"Professionals"},{k:"9",v:"Cities"}].map(s => (
                <div key={s.v} className="rounded-lg border border-border bg-surface/40 p-5">
                  <p className="font-display text-3xl font-semibold text-brand-bright">{s.k}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ Lineage</p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">A quiet history.</h2>
          </Reveal>

          <div className="mt-14 grid gap-0">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.05}>
                <div className="grid grid-cols-12 items-center gap-6 border-t border-border py-8 last:border-b">
                  <span className="col-span-3 font-display text-3xl font-semibold text-brand sm:text-4xl">{m.y}</span>
                  <span className="col-span-9 text-base text-foreground sm:text-lg">{m.t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
