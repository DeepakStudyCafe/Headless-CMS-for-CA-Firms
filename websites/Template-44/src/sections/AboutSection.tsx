import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="relative py-32 lg:py-40 px-6 lg:px-10 overflow-hidden">
      {/* Decorative giant numeral */}
      <div className="absolute -top-10 right-0 font-display text-[260px] lg:text-[400px] leading-none text-forest-3/5 select-none pointer-events-none">
        02
      </div>

      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5 lg:pt-32 relative">
          <div className="about-reveal flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-forest-3 mb-8">
            <span className="h-px w-10 bg-forest-3" />
            About the Firm
          </div>
          <h2 className="about-reveal font-display text-[36px] md:text-[52px] leading-[1.08] text-forest-1 text-balance">
            A quiet practice, built on twenty‑seven years of careful work.
          </h2>
          <div className="about-reveal mt-8 space-y-5 text-ink-soft leading-relaxed">
            <p>
              ABC &amp; Associates was founded in 1998 with a simple conviction — that financial work, done well, is an act of trust. Three decades later, we remain a deliberately small partnership, looking after a curated portfolio of founders, family businesses, and listed companies across India.
            </p>
            <p>
              We are not the largest firm you'll meet. We are the firm that picks up the phone, reads the fine print, and stays with you long after the season ends.
            </p>
          </div>

          <div className="about-reveal mt-10 grid grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <div className="font-display text-3xl text-forest-3">27</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-ink-soft mt-2">Years in practice</div>
            </div>
            <div>
              <div className="font-display text-3xl text-forest-3">12</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-ink-soft mt-2">Senior partners</div>
            </div>
          </div>
        </div>

        {/* Floating card layout */}
        <div className="lg:col-span-7 relative min-h-[520px] lg:min-h-[680px]">
          <div className="about-reveal absolute top-0 right-0 w-[78%] h-[78%]">
            <img
              src={aboutImg}
              alt="Hands writing in ledger"
              width={1200}
              height={1400}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="about-reveal absolute bottom-0 left-0 w-[58%] aspect-[4/5] bg-cream border border-border p-7 shadow-2xl shadow-forest-1/10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-forest-3">Our credo</p>
              <p className="font-display text-2xl md:text-3xl mt-4 text-forest-1 leading-snug">
                "Discretion, accuracy, and a long memory."
              </p>
            </div>
            <div>
              <p className="text-sm text-ink-soft">— R. Bhattacharya, Senior Partner</p>
              <div className="editorial-rule h-px mt-4" />
            </div>
          </div>
          <div className="about-reveal absolute -bottom-6 right-10 hidden md:flex items-center gap-3 bg-forest-2 text-cream px-5 py-3">
            <span className="h-2 w-2 rounded-full bg-forest-4" />
            <span className="text-[11px] tracking-[0.25em] uppercase">ICAI Member Firm</span>
          </div>
        </div>
      </div>
    </section>
  );
}
