import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "20+ years of trusted financial expertise",
  "Qualified Chartered Accountants & specialists",
  "Transparent, fixed-fee pricing structure",
  "Dedicated relationship manager for every client",
  "Cloud-based secure document handling",
  "On-time delivery — guaranteed",
  "Pan-India presence with local expertise",
  "Free initial consultation & advisory",
];

export function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".why-item", {
        x: -20, opacity: 0, stagger: 0.08, duration: 0.6,
        scrollTrigger: { trigger: ".why-grid", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-pink-soft/30">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-pink font-semibold uppercase tracking-[0.2em] text-xs">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl text-navy font-bold mt-3 mb-5">
            The trusted choice for serious businesses
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg">
            We don't just balance books — we build long-term financial partnerships that
            help your business grow with confidence and compliance.
          </p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-navy text-white font-semibold hover:bg-pink transition-colors">
            Schedule a Call
          </a>
        </div>

        <ul className="why-grid grid sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <li key={f} className="why-item flex items-start gap-3 bg-white/70 backdrop-blur p-4 rounded-xl">
              <div className="flex-shrink-0 w-7 h-7 rounded-full gradient-pink flex items-center justify-center mt-0.5">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-navy text-sm font-medium">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
