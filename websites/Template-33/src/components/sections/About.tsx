import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about-office.jpg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1200, suffix: "+", label: "Happy Clients" },
  { value: 3500, suffix: "+", label: "Projects Completed" },
  { value: 32, suffix: "", label: "Expert Team Members" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-img",
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true } });
      gsap.fromTo(".about-text > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true } });

      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = Number(el.dataset.target);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toLocaleString();
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="about-img relative">
          <div className="rounded-[2rem] overflow-hidden shadow-luxe">
            <img src={aboutImg} alt="Modern accounting office" loading="lazy" width={1280} height={1024} className="w-full h-[480px] object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block w-48 h-48 rounded-3xl gold-gradient shadow-luxe -z-10" />
          <div className="absolute -top-6 -left-6 glass rounded-2xl px-5 py-4 shadow-luxe">
            <div className="font-display text-3xl gold-text">A+</div>
            <div className="text-xs uppercase tracking-widest text-ink-soft">Rated Firm</div>
          </div>
        </div>

        <div className="about-text">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-deep">About the Firm</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 mb-6 leading-tight">
            Two decades of <span className="gold-text italic">trusted</span> financial counsel.
          </h2>
          <p className="text-ink-soft leading-relaxed mb-5">
            We are a full-service Chartered Accountancy firm dedicated to helping enterprises, startups, and individuals navigate complex regulatory landscapes with confidence and clarity.
          </p>
          <p className="text-ink-soft leading-relaxed mb-8">
            Our partners combine deep technical expertise with a personal, advisory-led approach — ensuring every engagement delivers measurable financial value.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="p-5 rounded-2xl bg-cream-deep border border-gold/10">
                <div className="flex items-baseline gap-1">
                  <span className="counter font-display text-4xl gold-text" data-target={s.value}>0</span>
                  <span className="font-display text-3xl gold-text">{s.suffix}</span>
                </div>
                <div className="text-sm text-ink-soft mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
