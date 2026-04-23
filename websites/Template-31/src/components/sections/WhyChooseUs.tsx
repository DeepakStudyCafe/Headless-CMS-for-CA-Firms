import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { GraduationCap, BadgeIndianRupee, Zap, Shield, Headphones } from "lucide-react";

const points = [
  { icon: GraduationCap, title: "Experienced Chartered Accountants", desc: "A senior partnership of ICAI fellows with decades of cross-industry expertise." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "No surprises, no hidden fees — every engagement begins with a clear scope and price." },
  { icon: Zap, title: "Fast Compliance", desc: "Deadlines are sacred. Our workflow systems keep you ahead of every filing." },
  { icon: Shield, title: "Trusted by Businesses", desc: "From listed companies to bootstrapped startups, our clientele speaks for our standards." },
  { icon: Headphones, title: "Dedicated Client Support", desc: "A named relationship partner for every client — reachable, responsive, accountable." },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, [
    { selector: ".why-item", x: -30, stagger: 0.1 },
    { selector: ".why-visual", scale: 0.92, duration: 1 },
  ]);

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="why-visual order-2 lg:order-1 relative">
          <div className="aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-gradient-maroon rounded-[2.5rem] shadow-elegant" />
            <div className="absolute inset-4 bg-gradient-luxe rounded-[2rem] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-display text-7xl lg:text-8xl text-gradient-gold font-bold">98%</p>
                <p className="mt-3 text-lg lg:text-xl font-display text-primary">Client retention rate</p>
                <p className="mt-2 text-sm text-muted-foreground">Across 25 years of practice</p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                  Currently serving 1,200+ clients
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-gold shadow-gold opacity-80 blur-sm" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            <span className="inline-block h-px w-10 bg-[var(--gold)] align-middle mr-3" />
            Why Choose Us
          </p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            The difference is in the <span className="text-gradient-gold italic">detail</span>.
          </h2>

          <ul className="mt-12 space-y-7">
            {points.map((p) => (
              <li key={p.title} className="why-item flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <p.icon className="w-5 h-5 text-[var(--maroon-deep)]" />
                </div>
                <div>
                  <h3 className="font-display text-xl lg:text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-sm lg:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
