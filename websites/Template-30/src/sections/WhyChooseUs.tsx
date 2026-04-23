import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BadgeIndianRupee, Zap, Users, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  { icon: Award, title: "Expert Chartered Accountants", desc: "A team of qualified CAs with decades of combined experience." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "No hidden fees — clear, upfront pricing for every engagement." },
  { icon: Zap, title: "Fast Compliance", desc: "Quick turnaround on filings, audits and statutory deadlines." },
  { icon: Users, title: "Trusted by Businesses", desc: "500+ companies across sectors trust us with their finances." },
  { icon: Headphones, title: "Dedicated Support", desc: "A dedicated relationship manager for every client, always." },
];

export function WhyChooseUs() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-item", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Precision, integrity & <span className="text-gradient-primary">expertise</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            We bring more than just numbers to the table — we bring strategic insight, unwavering
            ethics and a genuine commitment to your long-term success.
          </p>

          <div className="mt-10 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="why-item flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <p.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{p.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-hero opacity-15 blur-3xl rounded-3xl" />
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
            alt="Team of chartered accountants reviewing reports"
            className="relative rounded-3xl shadow-elegant w-full h-[540px] object-cover border border-border"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
