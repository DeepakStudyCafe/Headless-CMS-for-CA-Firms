import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1500, suffix: "+", label: "Clients Served" },
  { value: 3200, suffix: "+", label: "Projects Completed" },
  { value: 40, suffix: "+", label: "Team Members" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-left > *", {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".about-image", {
        opacity: 0, x: -40, duration: 1,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      stats.forEach((s, i) => {
        const el = document.querySelector(`#stat-${i}`);
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: s.value, duration: 2, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => { el.textContent = Math.floor(obj.val).toLocaleString() + s.suffix; },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 bg-section relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="about-image relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/15 to-transparent rounded-3xl blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&q=80"
            alt="Our team at work"
            className="relative rounded-3xl w-full h-[480px] object-cover"
            loading="lazy"
          />
        </div>

        <div className="about-left space-y-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">About Our Firm</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building financial confidence with <span className="text-gradient-gold">integrity</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We are a full-service Chartered Accountancy firm delivering audit, tax, advisory and compliance services to corporates, SMEs and high-net-worth individuals across India. Our partner-led approach combines decades of regulatory expertise with modern, technology-driven processes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every engagement is grounded in transparency, precision and an unwavering commitment to your long-term success.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            {stats.map((s, i) => (
              <div key={s.label} className="glass rounded-2xl p-5">
                <div id={`stat-${i}`} className="text-3xl md:text-4xl font-bold text-gradient-gold">0{s.suffix}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
