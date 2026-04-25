import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useCountUp } from "@/hooks/useCountUp";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC & Associates" },
      { name: "description", content: "A boutique partner-led chartered accountancy practice in Bengaluru, founded in 2008." },
      { property: "og:title", content: "About — ABC & Associates" },
      { property: "og:description", content: "Senior-led, modern, enduring. The story of ABC & Associates." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "2008", t: "Founded", d: "Established as a two-partner practice with three clients and a single conviction — that great counsel cannot be scaled carelessly." },
  { y: "2013", t: "Audit Practice", d: "Built a dedicated assurance vertical serving listed and unlisted mid-market clients across South India." },
  { y: "2017", t: "Advisory Wing", d: "Launched corporate advisory and valuation services for transactions, fund-raises and family transitions." },
  { y: "2021", t: "Forensic Reviews", d: "Added internal control, risk and forensic capability to support boards and investors." },
  { y: "2024", t: "Family Office Desk", d: "Quietly opened a dedicated desk for multi-generational family wealth and succession." },
];

const values = [
  { k: "Listening first", d: "We open files only after we open ears. Every engagement begins with three meetings before a single number is considered." },
  { k: "Senior attention", d: "Partners stay close to the work — your file is never delegated to a stranger or a junior in another city." },
  { k: "Discretion", d: "Confidentiality is not a clause; it is the climate in which long, durable trust grows quietly." },
  { k: "Long horizons", d: "We measure success not in billable hours but in the decades clients choose to stay with us." },
];

function AboutPage() {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <PageShell>
      <div ref={ref}>
        <PageHeader
          eyebrow="About the practice"
          title="A small firm, intentionally so."
          subtitle="ABC & Associates is a partner-led chartered accountancy practice serving founders, family offices and growing enterprises since 2008."
        />

        {/* Intro */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-start py-24">
          <div className="md:col-span-7 space-y-6 text-lg text-navy/80 leading-relaxed" data-fade>
            <p>
              We began in a single room above a bookshop on Brigade Road, with a worn ledger,
              a borrowed printer, and a belief that financial advice — at its best — is
              indistinguishable from quiet stewardship.
            </p>
            <p>
              Sixteen years on, our practice is larger but unchanged in spirit.
              We remain partner-led, deliberately small, and refreshingly slow to grow.
              We accept fewer engagements than we could, so that the ones we accept receive
              the attention they deserve.
            </p>
            <p>
              Our clients include third-generation manufacturing families, technology founders
              between rounds, NRIs returning home, and boards looking for an honest second opinion.
              They share little in common except a preference for being heard before being advised.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9" data-fade>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={about1} alt="A senior partner at work" className="w-full h-[480px] object-cover" loading="lazy" />
            </div>
            <p className="eyebrow mt-4 text-muted-foreground">A senior partner at work</p>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-gradient-to-br from-navy via-navy-deep to-[oklch(0.40_0.06_232)] text-cream-soft py-20 relative overflow-hidden">
          <div className="blob bg-blue/40 w-[420px] h-[420px] -top-32 -left-24" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <AStat value={16} suffix="+" label="Years of practice" />
            <AStat value={320} suffix="+" label="Engagements" />
            <AStat value={28} suffix="" label="Professionals" />
            <AStat value={96} suffix="%" label="Client retention" />
          </div>
        </section>

        {/* Values - card grid */}
        <section className="py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-12 gap-10 mb-14">
              <p className="eyebrow md:col-span-3" data-fade>What we hold</p>
              <h2 className="md:col-span-9 font-display text-4xl md:text-5xl text-navy leading-tight" data-fade>
                Four convictions that quietly shape every engagement.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={v.k} data-fade className="rounded-3xl bg-cream-soft border border-border p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 group">
                  <p className="font-mono text-xs text-blue tracking-widest mb-4">0{i + 1}</p>
                  <h3 className="font-display text-3xl text-navy mb-3 group-hover:text-blue transition-colors">{v.k}</h3>
                  <p className="text-navy/70 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-gradient-to-b from-cream-soft to-background py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-12 gap-10 mb-12">
              <p className="eyebrow md:col-span-3" data-fade>The years</p>
              <h2 className="md:col-span-9 font-display text-4xl md:text-5xl text-navy" data-fade>
                A practice, traced.
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue/0 via-blue to-blue/0" />
              {milestones.map((m, i) => (
                <div key={m.y} data-fade className={`relative grid md:grid-cols-2 gap-8 mb-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                    <p className="font-display text-5xl text-blue">{m.y}</p>
                    <h3 className="font-display text-2xl text-navy mt-2">{m.t}</h3>
                  </div>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <p className="text-navy/70 leading-relaxed">{m.d}</p>
                  </div>
                  <span className="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue ring-4 ring-cream-soft" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image break + CTA */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-8 py-24">
          <div className="md:col-span-7 rounded-3xl overflow-hidden shadow-card" data-fade>
            <img src={gallery1} alt="Our boardroom" className="w-full h-[460px] object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-4 md:col-start-9 self-center" data-fade>
            <p className="eyebrow mb-3">Our space</p>
            <p className="font-display text-3xl text-navy leading-snug">
              The Bengaluru boardroom — where most engagements quietly begin.
            </p>
            <Link to="/contact" className="btn-ghost mt-8">Visit us <span aria-hidden>→</span></Link>
          </div>
        </section>

        {/* Image showcase */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24" data-fade>
          <div className="rounded-3xl overflow-hidden shadow-elevated">
            <img src={about2} alt="Working session" className="w-full h-[420px] object-cover" loading="lazy" />
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function AStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div>
      <p className="font-display text-5xl md:text-6xl text-cream-soft">
        <span ref={ref}>{v}</span>{suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-widest text-cream/70">{label}</p>
    </div>
  );
}
