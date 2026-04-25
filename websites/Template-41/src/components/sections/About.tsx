import { useGsapReveal } from "@/hooks/useGsapReveal";
import aboutImg from "@/assets/about-office.jpg";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "800+", label: "Happy Clients" },
  { value: "1,200+", label: "Projects Completed" },
  { value: "12", label: "Expert Team Members" },
];

export function About() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section id="about" ref={ref as never} className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div data-reveal className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-gold-soft -z-10" />
          <img
            src={aboutImg}
            alt="ABC & Associates office interior"
            width={1024}
            height={1024}
            loading="lazy"
            className="rounded-3xl shadow-[var(--shadow-elegant)] w-full h-[520px] object-cover"
          />
          <div className="absolute -bottom-8 -right-4 glass rounded-2xl p-6 shadow-[var(--shadow-soft)] max-w-[260px]">
            <div className="font-display text-4xl font-semibold text-gradient-gold">A+</div>
            <div className="text-sm text-muted-foreground mt-1">
              Highest client retention rating among regional CA firms
            </div>
          </div>
        </div>

        <div>
          <div data-reveal className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
            About the Firm
          </div>
          <h2 data-reveal className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            A practice built on <span className="italic text-gradient-gold">precision</span>, integrity and quiet expertise.
          </h2>
          <p data-reveal className="text-muted-foreground leading-relaxed mb-5">
            Founded in 2008, <strong className="text-foreground">ABC &amp; Associates</strong> is a
            full-service Chartered Accountancy firm serving startups, mid-market
            companies, listed enterprises and private clients across India. Our
            partners bring over five decades of combined experience across
            statutory audit, direct and indirect taxation, FEMA, transfer pricing
            and corporate advisory.
          </p>
          <p data-reveal className="text-muted-foreground leading-relaxed mb-10">
            We work as a long-term financial partner rather than a transactional
            service provider — pairing deep technical expertise with a calm,
            response-driven approach our clients have trusted for more than a
            decade.
          </p>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                data-reveal
                className="p-6 rounded-2xl bg-secondary border border-border hover:border-gold transition-colors"
              >
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold">
                  {s.value}
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