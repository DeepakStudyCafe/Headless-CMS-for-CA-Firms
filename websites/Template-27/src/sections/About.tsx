import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-hero opacity-10 blur-3xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80"
                alt="Financial advisory illustration"
                className="relative rounded-3xl shadow-elegant w-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-soft hidden md:block">
                <p className="text-xs text-soft-gray">Trusted Since</p>
                <p className="text-3xl font-display font-semibold text-primary">2004</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">About the Firm</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold text-charcoal">
              Two decades of <span className="text-gradient">precision</span> in finance & advisory
            </h2>
            <p className="mt-6 text-soft-gray leading-relaxed text-lg">
              We are a full-service chartered accountancy practice trusted by founders, family
              businesses and enterprises. Our team blends deep technical expertise with
              modern tools to deliver clarity, compliance and confidence — every quarter.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "ICAI certified partners with cross-industry experience",
                "Cloud-first workflows for secure, real-time collaboration",
                "Proactive advisory — not just compliance",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-charcoal/80">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { v: 20, s: "+", l: "Years Experience" },
                { v: 500, s: "+", l: "Clients Served" },
                { v: 1200, s: "+", l: "Projects" },
                { v: 25, s: "+", l: "Team Members" },
              ].map((c) => (
                <div key={c.l} className="rounded-2xl bg-white/60 border border-border p-5 card-lift">
                  <p className="text-3xl font-semibold font-display text-primary">
                    <Counter to={c.v} suffix={c.s} />
                  </p>
                  <p className="text-xs text-soft-gray mt-2">{c.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
