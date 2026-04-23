import { Award, BadgeIndianRupee, Zap, Building, Headphones } from "lucide-react";

const points = [
  { icon: Award, title: "Experienced Chartered Accountants", desc: "Decades of combined expertise across industries and jurisdictions." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "No hidden fees — clear, upfront pricing for every engagement." },
  { icon: Zap, title: "Fast Compliance", desc: "Tech-enabled workflows that deliver speed without sacrificing accuracy." },
  { icon: Building, title: "Trusted by Businesses", desc: "Long-standing relationships with startups, SMEs and enterprises." },
  { icon: Headphones, title: "Dedicated Client Support", desc: "A relationship manager assigned to every client, always reachable." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div className="reveal lg:sticky lg:top-32">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            The trusted <span className="text-gold">CA partner</span> for ambitious businesses
          </h2>
          <div className="fancy-divider mt-6" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We combine technical mastery with a genuinely consultative approach — helping you make
            sharper financial decisions, stay compliant and grow with confidence.
          </p>
          <div className="mt-8 inline-flex items-center gap-4 p-4 rounded-2xl glass shadow-soft">
            <div className="h-12 w-12 rounded-xl gradient-gold grid place-items-center text-white font-bold">A+</div>
            <div>
              <div className="text-sm font-semibold">Independently rated</div>
              <div className="text-xs text-muted-foreground">Top-tier CA firm in client satisfaction</div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal flex gap-5 p-6 rounded-2xl bg-card border border-border/70 shadow-card hover:shadow-gold transition-shadow duration-500"
            >
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/20 grid place-items-center">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl text-gold/80 font-bold">0{i + 1}</span>
                  <h3 className="text-lg font-bold">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
