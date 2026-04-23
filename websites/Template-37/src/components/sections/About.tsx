import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years of Experience", value: 20 },
  { label: "Clients Served", value: 1500 },
  { label: "Projects Completed", value: 3200 },
  { label: "Team Members", value: 45 },
];

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
      onUpdate: () => setN(Math.floor(obj.v)),
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [to]);
  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gradient-gold">
      {n.toLocaleString()}+
    </div>
  );
}

export default function About() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-fade",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        },
      );
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="about-fade relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-10 blur-3xl rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
            alt="Our team of chartered accountants"
            className="relative rounded-3xl shadow-elegant w-full object-cover h-[520px]"
            loading="lazy"
          />
        </div>
        <div>
          <div className="about-fade text-xs uppercase tracking-[0.3em] text-primary mb-3">About Our Firm</div>
          <h2 className="about-fade text-4xl md:text-5xl font-bold leading-tight mb-6">
            Two decades of <span className="text-gradient-gold">financial excellence</span>
          </h2>
          <p className="about-fade text-muted-foreground leading-relaxed mb-5">
            We are a premier chartered accountancy firm dedicated to delivering
            tailored financial, tax, and advisory solutions. Our partners combine
            deep regulatory expertise with a modern, technology-driven approach —
            helping businesses grow with confidence and clarity.
          </p>
          <p className="about-fade text-muted-foreground leading-relaxed mb-10">
            From startups to established enterprises, we treat every client
            relationship as a long-term partnership built on trust, integrity,
            and measurable results.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="about-fade glass-card rounded-2xl p-6">
                <Counter to={s.value} />
                <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
