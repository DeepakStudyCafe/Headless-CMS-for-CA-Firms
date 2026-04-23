import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { n: "Aarav Mehta", r: "Managing Partner, FCA", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { n: "Priya Sharma", r: "Partner — Tax & Advisory", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" },
  { n: "Rahul Iyer", r: "Partner — Audit", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80" },
  { n: "Sana Kapoor", r: "Partner — International Tax", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
];

export function Team() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-member]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={root} className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-gold">◆</span> Leadership
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            People you can put a <em className="gradient-text-gold not-italic">name and face to.</em>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m) => (
            <article key={m.n} data-member className="group text-center">
              <div className="relative mx-auto h-52 w-52 rounded-full overflow-hidden ring-1 ring-border shadow-luxe">
                <img src={m.img} alt={m.n} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6 gap-3">
                  {["in", "tw", "@"].map((s) => (
                    <span key={s} className="h-9 w-9 grid place-items-center rounded-full bg-card text-primary text-xs font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-display text-xl mt-6">{m.n}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.r}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
