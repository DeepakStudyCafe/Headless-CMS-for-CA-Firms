import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BadgeIndianRupee, Zap, Users, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: Award, title: "Expert Chartered Accountants", desc: "Senior partners with 20+ years of cross-industry expertise." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "Clear, upfront engagement fees — no surprises, ever." },
  { icon: Zap, title: "Fast Compliance", desc: "Tech-enabled workflows ensuring timely filings and zero penalties." },
  { icon: Users, title: "Trusted by Businesses", desc: "1500+ clients from startups to listed corporations." },
  { icon: Headphones, title: "Dedicated Support", desc: "A named relationship partner for every engagement." },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-item", {
        opacity: 0, x: -30, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="py-28 bg-section">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Why Choose Us</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            A partner you can <span className="text-gradient-gold">rely on</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We blend deep technical knowledge with personal attention — the boutique experience your business deserves, backed by enterprise-grade rigour.
          </p>
        </div>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.title} className="why-item group glass rounded-xl p-5 flex gap-4 items-start hover:border-gold/40 transition">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-gold/20 to-transparent border border-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <it.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
