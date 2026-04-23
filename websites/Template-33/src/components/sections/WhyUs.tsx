import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BadgeIndianRupee, Zap, Users, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  { icon: Award, title: "Experienced Chartered Accountants", desc: "Senior partners averaging 18+ years across audit, tax & advisory." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "Clear, fixed-fee engagements — no hidden surprises, ever." },
  { icon: Zap, title: "Fast Compliance", desc: "Deadline-driven workflows with proactive reminder systems." },
  { icon: Users, title: "Trusted by Businesses", desc: "From startups to listed enterprises — 1,200+ active clients." },
  { icon: Headphones, title: "Dedicated Client Support", desc: "A relationship partner assigned to every engagement." },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".why-item",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true } });
      gsap.fromTo(".why-side",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-deep">Why Choose Us</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 mb-10 leading-tight">
            Precision. Integrity. <span className="gold-text italic">Partnership.</span>
          </h2>

          <ul className="space-y-5">
            {points.map((p) => (
              <li key={p.title} className="why-item flex gap-5 p-5 rounded-2xl hover:bg-cream-deep transition-colors">
                <div className="shrink-0 w-12 h-12 rounded-xl glass border-gold/30 flex items-center justify-center text-gold-deep">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink">{p.title}</h3>
                  <p className="text-sm text-ink-soft mt-1">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="why-side relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full gold-gradient blur-3xl opacity-30" />
            <div className="relative h-full rounded-[2.5rem] glass shadow-luxe p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold-deep">Our Promise</div>
                <h3 className="font-display text-4xl mt-4 leading-tight">
                  "Your numbers, <span className="gold-text italic">our craft.</span>"
                </h3>
              </div>
              <p className="text-ink-soft leading-relaxed">
                Every ledger we touch, every return we file — we treat as our own. That's the standard we set, and the trust we've earned.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gold/20">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white font-display text-xl">M</div>
                <div>
                  <div className="font-semibold text-ink">Mehul Agarwal, FCA</div>
                  <div className="text-xs text-ink-soft">Managing Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
