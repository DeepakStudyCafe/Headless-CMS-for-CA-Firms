import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import t1 from "@/assets/team1.jpg";
import t2 from "@/assets/team2.jpg";
import t3 from "@/assets/team3.jpg";

const TEAM = [
  { img: t1, name: "Rajat Bhattacharya", role: "Founding Partner", bio: "ICAI rank holder (1996). Leads audit and assurance practice across listed clients in manufacturing and pharma." },
  { img: t2, name: "Aanya Mehta", role: "Partner — Taxation", bio: "Two decades of direct tax litigation. Represented matters before ITAT and High Courts in Delhi and Mumbai." },
  { img: t3, name: "Vikram Iyer", role: "Partner — Advisory", bio: "Heads the Virtual CFO and transaction advisory desk for venture‑backed and family‑run businesses." },
];

export function TeamSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tm-head", {
        y: 30, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".tm-card", {
        y: 60, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 65%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="team" className="relative py-32 lg:py-40 px-6 lg:px-10 bg-sand/60">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-2 tm-head text-[11px] tracking-[0.3em] uppercase text-forest-3">— 05</div>
          <h2 className="lg:col-span-7 tm-head font-display text-[36px] md:text-[56px] leading-[1.05] text-forest-1 text-balance">
            The people who sign your reports.
          </h2>
          <p className="lg:col-span-3 tm-head text-ink-soft text-[15px] leading-relaxed lg:pt-4">
            A small bench of partners and senior managers — chosen for craft, kept for character.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              className={`tm-card group ${i === 1 ? "md:translate-y-12" : ""} ${i === 2 ? "md:translate-y-4" : ""}`}
            >
              <div className="relative overflow-hidden bg-forest-2 aspect-[4/5]">
                <img
                  src={m.img}
                  alt={m.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-1/70 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-cream/70">
                  0{i + 1}
                </div>
              </div>
              <div className="pt-6">
                <div className="text-[10px] tracking-[0.3em] uppercase text-forest-3 mb-2">{m.role}</div>
                <h3 className="font-display text-2xl text-forest-1">{m.name}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{m.bio}</p>
                <div className="editorial-rule h-px mt-5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
