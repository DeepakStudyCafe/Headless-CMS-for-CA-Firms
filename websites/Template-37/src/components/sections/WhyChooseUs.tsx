import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  { t: "Expert Chartered Accountants", d: "ICAI-certified partners with decades of cumulative experience." },
  { t: "Transparent Pricing", d: "Clear, upfront fee structures — no hidden charges, ever." },
  { t: "Fast Compliance", d: "Timely filings and proactive deadline management." },
  { t: "Trusted by Businesses", d: "Serving 1500+ clients across industries with proven results." },
  { t: "Dedicated Support", d: "Personalized client managers available year-round." },
];

export default function WhyChooseUs() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-item",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        },
      );
      gsap.fromTo(
        ".why-img",
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        },
      );
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Why Choose Us</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            The advantage of <span className="text-gradient-gold">trusted expertise</span>
          </h2>
          <ul className="space-y-6">
            {points.map((p) => (
              <li key={p.t} className="why-item flex gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-semibold">{p.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="why-img relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-15 blur-3xl rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=1000&q=80"
            alt="Premium financial advisory"
            className="relative rounded-3xl shadow-elegant w-full h-[540px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
