import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function About() {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div data-reveal className="relative">
          <div className="absolute -inset-4 bg-[color:var(--brand-soft)]/30 rounded-2xl -rotate-2" />
          <img
            src={aboutImg}
            alt="ABC & Associates team"
            className="relative rounded-2xl w-full object-cover aspect-[4/5] shadow-[var(--shadow-elev)]"
            loading="lazy"
          />
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-[color:var(--ink)] text-white p-6 rounded-2xl shadow-[var(--shadow-elev)] max-w-[220px]">
            <div className="font-display text-4xl text-[color:var(--cream)]">25+</div>
            <div className="text-sm mt-1 text-white/80">years of trusted financial expertise</div>
          </div>
        </div>

        <div>
          <span data-reveal className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            About Our Firm
          </span>
          <h2 data-reveal className="mt-4 text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Numbers tell stories. <br />
            <span className="italic text-primary">We help you write yours.</span>
          </h2>
          <p data-reveal className="mt-6 text-muted-foreground leading-relaxed">
            ABC &amp; Associates is a full-service chartered accountancy firm built on integrity,
            precision and an unwavering commitment to our clients. For over two decades, we have
            partnered with entrepreneurs, growing enterprises and multinational organisations to
            simplify complexity and unlock sustainable growth.
          </p>

          <div data-reveal className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border card-elev">
              <h3 className="font-display text-xl text-foreground">Our Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                To deliver clarity, compliance and strategic financial insight that empowers our
                clients to make confident decisions.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border card-elev">
              <h3 className="font-display text-xl text-foreground">Our Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                To be the most trusted financial partner for ambitious businesses — known for
                integrity, expertise and lasting relationships.
              </p>
            </div>
          </div>

          <ul data-reveal className="mt-8 space-y-3">
            {[
              "Certified ICAI professionals with sector-specific expertise",
              "End-to-end accounting, taxation and advisory under one roof",
              "Proactive, technology-driven and personalised approach",
            ].map((p) => (
              <li key={p} className="flex gap-3 text-sm text-foreground/90">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
