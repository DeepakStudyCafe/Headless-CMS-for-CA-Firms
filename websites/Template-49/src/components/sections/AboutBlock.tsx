import aboutImg from "@/assets/about.jpg";
import { useReveal } from "@/hooks/useReveal";

export function AboutBlock() {
  const ref = useReveal();
  return (
    <section ref={ref as never} className="relative py-32 overflow-hidden">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--sage)]/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div data-reveal className="text-xs tracking-[0.3em] uppercase text-[var(--forest)] mb-6">
            ◇ The Practice
          </div>
          <h2 data-reveal className="font-display text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05]">
            A boutique firm,<br />
            <span className="italic text-[var(--moss)]">deeply</span> involved in
            every engagement.
          </h2>

          <div data-reveal className="relative mt-10 -ml-4 lg:-ml-8 w-[88%]">
            <img
              src={aboutImg}
              alt="Quiet workspace"
              className="rounded-3xl shadow-2xl shadow-[var(--forest)]/20 object-cover w-full aspect-[4/5]"
              loading="lazy"
              width={1200}
              height={1400}
            />
            <div className="absolute -bottom-6 -right-6 bg-[var(--ink)] text-[var(--cream)] rounded-2xl px-6 py-5 max-w-[220px]">
              <div className="font-display text-3xl">A+</div>
              <div className="text-[11px] tracking-widest uppercase text-[var(--sage)]/80 mt-1">
                Peer-reviewed by ICAI
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-12 space-y-10">
          <p data-reveal className="text-xl lg:text-2xl font-display text-[var(--ink)]/85 leading-relaxed text-balance">
            Founded in 1998, ABC &amp; Associates began as a two-partner desk above a
            tea-shop in Basavanagudi. Today we serve over 480 clients across India and
            the Gulf — yet our philosophy hasn't shifted: read the numbers slowly,
            understand the business deeply, and advise plainly.
          </p>

          <div data-reveal className="hairline" />

          <p data-reveal className="text-base text-[var(--ink)]/70 leading-relaxed">
            We are a multi-disciplinary team of chartered accountants, company
            secretaries and financial analysts. We handle statutory audits for
            mid-cap manufacturers, design tax-efficient structures for first-time
            founders, and act as the outsourced finance function for fast-moving
            consumer brands. Each engagement is led by a partner — not a junior with
            a checklist.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { k: "1998", v: "Year established in Bengaluru" },
              { k: "₹14,000 Cr", v: "Audited turnover under management" },
              { k: "6 Cities", v: "Bengaluru · Mumbai · Dubai · Hyd · Pune · Kochi" },
              { k: "ICAI · ACCA", v: "Dual-credentialed senior partners" },
            ].map((item) => (
              <div
                key={item.k}
                data-reveal
                className="rounded-2xl border border-border bg-card p-6 hover:border-[var(--moss)] transition-colors"
              >
                <div className="font-display text-2xl text-[var(--forest)]">{item.k}</div>
                <div className="mt-1 text-sm text-[var(--ink)]/70">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
