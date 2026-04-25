import { Reveal } from "@/components/Reveal";
import aboutImg from "@/assets/about.jpg";

export function AboutSection() {
  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      {/* Floating brass numeral */}
      <div className="absolute top-16 right-6 md:right-20 font-display text-[12rem] md:text-[18rem] leading-none text-brass/10 select-none pointer-events-none">
        20
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-start">
        {/* Left column — text, offset down */}
        <div className="col-span-12 lg:col-span-6 lg:pt-24">
          <Reveal>
            <div className="label-eyebrow mb-6">About the Practice</div>
            <h2 className="font-display text-4xl md:text-5xl text-primary text-balance leading-[1.1]">
              A boutique firm built on
              <span className="italic text-ocean"> precision, patience</span> and
              long client relationships.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-foreground/75 leading-relaxed text-[15px]">
              ABC &amp; Associates was founded in 2004 with a single intent — to offer the kind of
              attentive, partner-led counsel that founders, family enterprises and mid-market
              companies often outgrow at larger firms. We are deliberately small, deliberately
              senior, and deeply involved in the work we sign our names to.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-foreground/75 leading-relaxed text-[15px]">
              Across audit, taxation, regulation and advisory, our partners have served more than
              420 enterprises spanning manufacturing, technology, healthcare, real estate and
              consumer brands. We measure success not in mandates won, but in clients who have
              stayed with us for a decade or more.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["20+", "Years"],
                ["420+", "Clients"],
                ["12", "Specialists"],
              ].map(([n, l]) => (
                <div key={l} className="border-l border-brass pl-4">
                  <div className="font-display text-3xl text-primary">{n}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right column — layered image + floating card */}
        <div className="col-span-12 lg:col-span-6 relative">
          <Reveal y={40}>
            <div className="relative aspect-[4/5] max-w-[480px] mx-auto lg:ml-auto lg:mr-6">
              <div className="absolute -top-4 -left-4 w-full h-full border border-brass/60" />
              <img
                src={aboutImg}
                alt="Reviewing financial reports"
                className="relative w-full h-full object-cover"
                loading="lazy"
              />
              {/* Floating quote card */}
              <div className="absolute -bottom-10 -left-8 md:-left-16 max-w-[300px] bg-card shadow-xl p-7 border border-border">
                <div className="font-display text-2xl text-brass leading-none">"</div>
                <p className="text-sm text-foreground/80 leading-relaxed mt-2">
                  Sound numbers are quiet. We aim for that quietness — for clients who want clarity,
                  not noise.
                </p>
                <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  — Founding Partner
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
