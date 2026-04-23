import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-anim", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out",
      });
      gsap.from(".counter", {
        scrollTrigger: { trigger: ".counters", start: "top 80%" },
        textContent: 0,
        duration: 2,
        snap: { textContent: 1 },
        stagger: 0.15,
        ease: "power2.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text left */}
          <div>
            <div className="about-anim text-xs uppercase tracking-[0.25em] text-[var(--gold)] mb-5">
              — About the firm
            </div>
            <h2 className="about-anim font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              A quiet practice built on <span className="italic gold-text">trust</span>, judgment and craft.
            </h2>
            <p className="about-anim mt-6 text-lg text-muted-foreground max-w-xl">
              For over two decades, ABC &amp; Associates has advised businesses across India and abroad —
              blending technical mastery with a deeply personal approach to every engagement.
            </p>
            <ul className="about-anim mt-8 space-y-3">
              {[
                "ICAI-registered partners with global exposure",
                "Sector specialists across SaaS, manufacturing & finance",
                "Long-term advisors, not transactional accountants",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-foreground/85">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image right with framed card */}
          <div className="about-anim relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--gold-soft)] to-transparent blur-2xl opacity-60" />
            <div className="relative rounded-[2rem] overflow-hidden ring-gold border border-border bg-card">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="ABC & Associates team"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 sm:-left-10 rounded-2xl bg-card border border-border shadow-xl p-5 w-56">
              <div className="font-display text-3xl gold-text">26+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Years guiding businesses</div>
            </div>
          </div>
        </div>

        {/* Counters */}
        <div className="counters mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: 1200, suf: "+", l: "Active clients" },
            { n: 48, suf: "", l: "Specialists" },
            { n: 14, suf: "", l: "Industries served" },
            { n: 26, suf: "+", l: "Years of trust" },
          ].map((c) => (
            <div key={c.l} className="rounded-3xl border border-border p-8 text-center bg-card">
              <div className="font-display text-5xl">
                <span className="counter">{c.n}</span>
                <span className="gold-text">{c.suf}</span>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{c.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
