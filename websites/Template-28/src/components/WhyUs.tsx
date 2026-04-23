import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { t: "Partner-led engagement", d: "Every mandate is supervised personally by a partner — not delegated downstream." },
  { t: "Sector specialisation", d: "Dedicated teams for fintech, manufacturing, real estate, NGOs and global Indians." },
  { t: "Technology-first workflow", d: "Cloud accounting, secure portals and dashboards keep you in control, always." },
  { t: "Discreet & confidential", d: "Bank-grade data handling for HNIs, family offices and listed enterprises." },
  { t: "Pan-India presence", d: "Offices and associate firms across 14 cities for seamless on-ground execution." },
  { t: "Transparent pricing", d: "Clear scopes, fixed-fee engagements wherever possible. No surprises." },
];

export function WhyUs() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-why]", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-28 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_50%_at_20%_10%,color-mix(in_oklab,var(--gold)_40%,transparent)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">◆ Why ABC</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            Six reasons firms trust us with their <em className="gradient-text-gold not-italic">most sensitive numbers.</em>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden ring-1 ring-white/10">
          {features.map((f, i) => (
            <div
              key={f.t}
              data-why
              className="bg-primary p-8 hover:bg-foreground transition-colors duration-500 group"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-gold text-lg">0{i + 1}</span>
                <span className="h-px flex-1 bg-white/20" />
              </div>
              <h3 className="font-display text-xl mt-5">{f.t}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
