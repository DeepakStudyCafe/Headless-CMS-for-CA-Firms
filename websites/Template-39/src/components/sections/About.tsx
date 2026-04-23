import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about-ca.jpg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1500, suffix: "+", label: "Happy Clients" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 3500, suffix: "+", label: "Projects Delivered" },
  { value: 35, suffix: "+", label: "Expert Team" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = Number(el.dataset.value || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => { el.textContent = Math.floor(obj.v).toLocaleString(); },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={aboutImg} alt="About ABC Associates" loading="lazy" width={1280} height={960} className="rounded-2xl shadow-elegant w-full" />
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-pink text-white px-6 py-5 rounded-2xl shadow-pink hidden sm:block">
            <div className="text-4xl font-display font-bold">20+</div>
            <div className="text-xs tracking-widest uppercase">Years of Excellence</div>
          </div>
        </div>

        <div>
          <span className="text-pink font-semibold uppercase tracking-[0.2em] text-xs">About the Firm</span>
          <h2 className="text-4xl md:text-5xl text-navy font-bold mt-3 mb-6">
            Building trust through transparent financial expertise
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            Founded by a team of qualified Chartered Accountants, ABC & Associates is a full-service
            firm offering tax, audit, advisory, and compliance solutions to startups, SMEs, and
            multinational corporations across India.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            We blend traditional accounting discipline with modern technology to give our clients
            actionable insights, accurate reporting, and long-term financial confidence.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-pink pl-4">
                <div className="text-3xl md:text-4xl font-display font-bold text-navy">
                  <span className="counter" data-value={s.value}>0</span>
                  <span className="text-pink">{s.suffix}</span>
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
