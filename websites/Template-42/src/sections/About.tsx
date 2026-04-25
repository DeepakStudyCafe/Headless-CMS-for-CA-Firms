import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-about-reveal]", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="relative py-28 md:py-40 overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute -top-32 -right-40 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--sky), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          {/* Label */}
          <div className="col-span-12 md:col-span-3" data-about-reveal>
            <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              (01) — The Practice
            </div>
            <div className="mt-4 font-display italic text-primary text-lg">A quiet kind of expertise.</div>
          </div>

          {/* Headline */}
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2
              data-about-reveal
              className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-balance"
            >
              We are a chartered accountancy firm built on{" "}
              <span className="italic">precision</span>, plain speaking and a
              long view of our clients' lives.
            </h2>
          </div>

          {/* Offset image card */}
          <div className="col-span-12 md:col-span-5 md:col-start-1 md:row-start-3 relative" data-about-reveal>
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-30px_rgba(30,41,59,0.25)] -mt-6 md:translate-y-12">
              <img src={aboutImg} alt="ABC & Associates workspace" className="w-full h-[480px] object-cover" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/60 to-transparent">
                <div className="text-background/90 font-display text-xl">Mumbai · Bengaluru · Pune</div>
                <div className="text-background/70 text-xs mt-1 tracking-widest uppercase">
                  Head office — Nariman Point
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-cream border border-border px-5 py-4 shadow-lg">
              <div className="font-display text-2xl">22 yrs</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">in practice</div>
            </div>
          </div>

          {/* Body text */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:row-start-3 space-y-6" data-about-reveal>
            <p className="text-foreground/75 leading-relaxed">
              Founded in 2003 by a small group of CAs frustrated by the
              transactional nature of the profession, ABC &amp; Associates has
              grown into a multi-disciplinary practice serving more than
              four hundred businesses across India and the GCC. We work the way
              the best advisors have always worked — patiently, in confidence,
              and close to the people who run the business.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              Our partners lead every engagement personally. There are no
              account executives, no hand-offs — just senior chartered
              accountants who know your books, your filings and your goals
              well enough to anticipate the next quarter as carefully as the
              last.
            </p>

            <div className="grid grid-cols-2 gap-5 pt-4">
              {[
                ["ICAI registered", "Firm Reg. No. 014729W"],
                ["Peer reviewed", "Quality assured practice"],
                ["Multi-disciplinary", "CA, CS, lawyers, analysts"],
                ["Tech-forward", "Cloud accounting native"],
              ].map(([t, s]) => (
                <div key={t} className="border-l-2 border-primary pl-4">
                  <div className="font-display text-base">{t}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
