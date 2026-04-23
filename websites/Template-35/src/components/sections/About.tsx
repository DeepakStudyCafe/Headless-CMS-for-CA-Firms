import { Counter } from "@/components/Counter";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1200, suffix: "+", label: "Happy Clients" },
  { value: 3500, suffix: "+", label: "Projects Completed" },
  { value: 40, suffix: "+", label: "Expert Team Members" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="absolute -top-6 -left-6 h-24 w-24 border-2 border-gold/40 rounded-2xl" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 gradient-gold opacity-15 rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80"
              alt="Our chartered accountant team in a meeting"
              loading="lazy"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">About Our Firm</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Building financial confidence with <span className="text-gold">integrity</span> & expertise
          </h2>
          <div className="fancy-divider mt-6" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            For over two decades, our firm has partnered with startups, SMEs and large enterprises
            to deliver world-class accounting, audit, taxation and advisory services. Our approach
            combines technical excellence with personalised attention.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Personalised service backed by deep technical expertise",
              "End-to-end compliance and advisory under one roof",
              "Technology-driven processes for accuracy and speed",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-card p-5 shadow-card border border-border/60">
                <div className="text-3xl font-bold text-gold font-display">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
