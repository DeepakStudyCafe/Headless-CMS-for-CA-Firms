import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    k: "01",
    t: "Partner-led expertise",
    d: "Every engagement is led by a partner with at least fifteen years of practice. You speak with the person doing the thinking, not the person taking the brief.",
  },
  {
    k: "02",
    t: "Radical transparency",
    d: "Fixed-fee proposals, scope letters in plain English and quarterly reviews of the relationship. You will never be surprised by an invoice.",
  },
  {
    k: "03",
    t: "Timely, every time",
    d: "Filings, audits, board packs — delivered to the day, often ahead. We hold ourselves to the same calendar discipline we expect of our clients.",
  },
  {
    k: "04",
    t: "Client-first by design",
    d: "Small portfolios per partner, deep institutional memory and a single point of accountability. Your business is known here, not processed.",
  },
];

export function WhyUs() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-why-item]", {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-28 md:py-40 bg-ink text-background overflow-hidden">
      <div
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-32 self-start">
            <div className="text-[11px] tracking-[0.3em] uppercase text-background/50">
              (03) — Why ABC
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-background leading-[1.05]">
              Four habits we've never compromised on.
            </h2>
            <p className="mt-6 text-background/65 leading-relaxed max-w-sm">
              The things that distinguish a good firm from a forgettable one
              are rarely glamorous. They are habits — repeated quietly,
              everyday, for two decades.
            </p>
          </div>

          <ol className="col-span-12 md:col-span-7 md:col-start-6 relative space-y-12 border-l border-background/15 pl-8 md:pl-12">
            {points.map((p) => (
              <li key={p.k} data-why-item className="relative">
                <span className="absolute -left-[42px] md:-left-[54px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-ink" />
                <div className="font-display text-sm text-primary tracking-[0.3em]">{p.k}</div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl text-background">{p.t}</h3>
                <p className="mt-3 text-background/65 leading-relaxed max-w-xl">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
