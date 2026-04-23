import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 18, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 1200, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Team Members" },
];

export default function About() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-anim", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });

      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = Number(el.dataset.target || "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => { el.textContent = Math.floor(obj.val).toString(); },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="about-anim relative">
          <div className="absolute -inset-4 gradient-primary opacity-10 rounded-[2rem] blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1100&q=80"
            alt="Our team collaborating"
            loading="lazy"
            className="relative rounded-[2rem] shadow-soft border border-border w-full h-[480px] object-cover"
          />
        </div>

        <div>
          <span className="about-anim inline-block text-xs font-semibold tracking-wider uppercase text-primary">About the Firm</span>
          <h2 className="about-anim mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">
            Precision-driven advisory for ambitious businesses
          </h2>
          <p className="about-anim mt-5 text-muted-foreground leading-relaxed">
            ABC & Associates is a full-service Chartered Accountancy firm built on
            two decades of trust. We blend deep regulatory expertise with modern,
            tech-enabled workflows — helping startups, SMEs and enterprises stay
            compliant, efficient and ready to scale.
          </p>

          <div className="about-anim mt-10 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-surface border border-border p-5 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-primary flex items-baseline">
                  <span className="counter" data-target={s.value}>0</span>
                  <span>{s.suffix}</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
