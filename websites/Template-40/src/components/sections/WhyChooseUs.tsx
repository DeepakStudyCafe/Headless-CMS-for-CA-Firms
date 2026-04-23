import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Users, Clock, Lock, Sparkles, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: Users, title: "Experienced CAs", text: "A team of qualified Chartered Accountants with deep industry expertise." },
  { icon: Clock, title: "Timely Delivery", text: "Strict adherence to deadlines for filings, audits, and reporting." },
  { icon: Lock, title: "Total Confidentiality", text: "Your data and financials handled with bank-grade security and discretion." },
  { icon: Sparkles, title: "Tailored Solutions", text: "Customized strategies built around your business and personal goals." },
  { icon: Globe, title: "PAN-India Reach", text: "Serving clients across India with a fully digital, paperless workflow." },
  { icon: CheckCircle2, title: "ICAI Compliance", text: "100% adherence to ICAI standards and statutory regulations." },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".why-item",
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(".why-image",
        { scale: 0.92, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1, ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="why-image relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="Financial planning and analysis at ABC & Associates"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-gradient-primary text-primary-foreground rounded-2xl p-6 shadow-elegant">
            <div className="text-4xl font-display font-bold">25+</div>
            <div className="text-xs uppercase tracking-wider opacity-90">Years of Trust</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Why choose us</div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Partnership that goes <span className="text-gradient-maroon">beyond numbers.</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            We combine technical excellence with genuine care — building long-term relationships rooted in trust, transparency, and measurable results.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="why-item flex gap-4">
                <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <r.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-charcoal mb-1">{r.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{r.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
