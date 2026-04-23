import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-about-anim]", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      gsap.from("[data-counter]", {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        stagger: 0.15,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const counters = [
    { n: 20, s: "+", label: "Years experience" },
    { n: 1200, s: "+", label: "Happy clients" },
    { n: 45, s: "", label: "Specialists" },
    { n: 12, s: "", label: "Industry verticals" },
  ];

  return (
    <section id="about" ref={root} className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text first, image right */}
        <div data-about-anim>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-gold">◆</span> About the firm
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
            A modern practice rooted in <em className="gradient-text-gold not-italic">old-world rigour.</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            For two decades ABC & Associates has partnered with founders, family offices and
            mid-market enterprises across India. We blend deep technical expertise with
            a service philosophy that is calm, considered and deeply personal.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {counters.map((c) => (
              <div
                key={c.label}
                data-about-anim
                className="rounded-3xl bg-card ring-1 ring-border p-6 shadow-luxe"
              >
                <div className="flex items-baseline gap-1">
                  <span data-counter className="font-display text-4xl">
                    {c.n}
                  </span>
                  <span className="font-display text-2xl text-gold">{c.s}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{c.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div data-about-anim className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/20 via-transparent to-primary/10 blur-2xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden ring-1 ring-border shadow-luxe aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
              alt="ABC & Associates team meeting"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl glass p-5 ring-1 ring-white/40">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Our promise</div>
              <div className="font-display text-xl mt-1">Advice that compounds, like trust.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
