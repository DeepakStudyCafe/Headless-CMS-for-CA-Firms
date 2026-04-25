import { useReveal } from "@/hooks/useReveal";

const POINTS = [
  {
    k: "Expertise that compounds",
    d: "Twenty-seven years of working across manufacturing, SaaS, retail and real estate means we recognise patterns long before they become problems on your balance sheet.",
  },
  {
    k: "Radical transparency",
    d: "Flat-fee engagements where possible, honest scoping where not. You see the working, the timesheet, and the partner who signs the report.",
  },
  {
    k: "Delivered on the calendar",
    d: "Statutory deadlines aren't suggestions. Our internal SLAs run two weeks ahead of every regulatory due date — every quarter, without exception.",
  },
  {
    k: "Clients before checklists",
    d: "We meet founders on Sundays before a board meeting and CFOs at 11pm before a filing. The work matters; so do the people doing it with you.",
  },
];

export function WhyUs() {
  const ref = useReveal();
  return (
    <section ref={ref as never} className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div data-reveal className="text-xs tracking-[0.3em] uppercase text-[var(--forest)] mb-5">
            ◇ Why Choose Us
          </div>
          <h2 data-reveal className="font-display text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05]">
            The standard we
            <span className="italic text-[var(--moss)]"> hold </span>
            ourselves to.
          </h2>
          <p data-reveal className="mt-6 text-[var(--ink)]/70">
            Four commitments, written down twenty years ago, still pinned above every
            partner's desk.
          </p>
        </div>

        <div className="lg:col-span-8 relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--moss)] via-[var(--sage)] to-transparent" />
          <ul className="space-y-12">
            {POINTS.map((p, i) => (
              <li key={p.k} data-reveal className="relative pl-12">
                <span className="absolute left-0 top-1 h-6 w-6 rounded-full bg-[var(--cream)] border-2 border-[var(--moss)] grid place-items-center text-[10px] font-display text-[var(--forest)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-[var(--ink)]">{p.k}</h3>
                <p className="mt-3 text-[var(--ink)]/70 leading-relaxed max-w-xl">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
