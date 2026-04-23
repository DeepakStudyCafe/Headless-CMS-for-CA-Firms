import { Reveal } from "@/components/Reveal";
import { Award, BadgeCheck, Zap, Users, HeadphonesIcon } from "lucide-react";

const points = [
  { icon: Award, title: "Expert Chartered Accountants", desc: "ICAI-certified partners with cross-industry experience." },
  { icon: BadgeCheck, title: "Transparent Pricing", desc: "No hidden fees. Clear scope, predictable invoices." },
  { icon: Zap, title: "Fast Compliance", desc: "Cloud workflows ensure deadlines are never missed." },
  { icon: Users, title: "Trusted by Businesses", desc: "500+ companies rely on us across sectors." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "A named relationship manager for every client." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-14">
          <Reveal className="lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Why Choose Us</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold text-charcoal">
              Built for trust. <br />
              <span className="text-gradient">Designed for growth.</span>
            </h2>
            <p className="mt-6 text-soft-gray text-lg leading-relaxed">
              We blend institutional rigor with the agility of a modern firm — so you get
              clarity, speed and a partner that genuinely cares about your numbers.
            </p>
          </Reveal>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl glass p-6 card-lift h-full">
                  <div className="h-11 w-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-charcoal">{p.title}</h3>
                  <p className="mt-2 text-sm text-soft-gray">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
