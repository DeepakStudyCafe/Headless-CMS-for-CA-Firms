import { Reveal } from "@/components/Reveal";

const points = [
  {
    n: "01",
    title: "Partner-led expertise",
    body: "Every engagement is signed off by a partner. You speak to the people doing the work — not a rotating account team.",
  },
  {
    n: "02",
    title: "Transparent fees",
    body: "Scope, deliverables and fees are agreed in writing before we begin. No surprise invoices, no padded hours.",
  },
  {
    n: "03",
    title: "On-time, every time",
    body: "We track every statutory and internal deadline on a centralised calendar so nothing slips. Filings are filed early.",
  },
  {
    n: "04",
    title: "Client-first counsel",
    body: "Our advice is driven by what's right for your business — not what's most lucrative for the firm. It's why clients stay.",
  },
];

export function WhyUsSection() {
  return (
    <section className="relative py-28 md:py-40 bg-primary text-cream overflow-hidden">
      <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-12 gap-10 mb-20">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <div className="label-eyebrow mb-5">Why ABC</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">
                Four reasons clients
                <span className="italic text-brass"> stay with us.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal delay={0.1}>
              <p className="text-cream/70 leading-relaxed text-[15px]">
                The qualities that mattered when we opened our doors in 2004 are the same qualities
                we cultivate today. They are not slogans — they are the operating principles of the
                practice.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-cream/15" />
          <div className="space-y-16 md:space-y-24">
            {points.map((p, i) => (
              <Reveal key={p.n} y={36}>
                <div
                  className={`relative grid grid-cols-12 gap-6 md:gap-10 items-start ${
                    i % 2 === 1 ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-brass rounded-full ring-4 ring-primary" />

                  <div className="col-span-12 md:col-span-5 md:col-start-1 pl-16 md:pl-0 md:pr-12 md:text-right [direction:ltr]">
                    <div className="font-display text-5xl text-brass/80">{p.n}</div>
                  </div>
                  <div className="col-span-12 md:col-span-6 md:col-start-7 pl-16 md:pl-12 [direction:ltr]">
                    <h3 className="font-display text-2xl md:text-3xl text-cream">{p.title}</h3>
                    <p className="mt-3 text-cream/70 leading-relaxed text-[15px] max-w-md">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
