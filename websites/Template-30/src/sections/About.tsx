import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 1200, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Team Members" },
];

export function About() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = Number(el.dataset.value || "0");
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate() {
              el.innerText = Math.round(Number(el.innerText)).toLocaleString();
            },
          }
        );
      });

      gsap.from(".about-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="about-reveal relative">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl" />
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80"
            alt="Financial planning illustration"
            className="relative rounded-3xl shadow-elegant w-full h-[480px] object-cover border border-border"
            loading="lazy"
          />
        </div>

        <div>
          <span className="about-reveal text-sm font-semibold text-primary uppercase tracking-wider">
            About Our Firm
          </span>
          <h2 className="about-reveal mt-3 text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Trusted financial partners for{" "}
            <span className="text-gradient-primary">forward-thinking</span> businesses
          </h2>
          <p className="about-reveal mt-5 text-muted-foreground leading-relaxed">
            ABC & Associates is a full-service Chartered Accountant firm dedicated to helping
            individuals and enterprises navigate complex financial landscapes. With deep expertise
            across taxation, audit, and advisory, we combine industry insight with personalised service.
          </p>

          <div className="about-reveal mt-10 grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-card border border-border rounded-2xl p-5 shadow-card-soft"
              >
                <div className="flex items-baseline gap-1">
                  <span
                    className="counter text-3xl lg:text-4xl font-bold text-primary-deep"
                    data-value={s.value}
                  >
                    0
                  </span>
                  <span className="text-2xl font-bold text-primary">{s.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
