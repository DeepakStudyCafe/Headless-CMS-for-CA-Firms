import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Cpu, Workflow, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
  { icon: Heart, title: "Client-focused approach", desc: "Every relationship is treated as a long-term partnership, not a transaction." },
  { icon: Cpu, title: "Modern tools & systems", desc: "Cloud-first audit tech, real-time dashboards and AI-assisted reviews." },
  { icon: Users, title: "Experienced team", desc: "Senior partners stay involved from kickoff through final delivery." },
  { icon: Workflow, title: "Efficient workflow", desc: "Streamlined processes that respect your time and your business calendar." },
];

const SHOTS = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", label: "Open studio", tag: "Workspace" },
  { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80", label: "Strategy huddles", tag: "Collaboration" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80", label: "Partner reviews", tag: "Advisory" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80", label: "Client meetings", tag: "Trust" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gal-head", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 30, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
      });
      gsap.from(".gal-feature", {
        scrollTrigger: { trigger: ".gal-features", start: "top 85%" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
      });
      gsap.from(".gal-shot", {
        scrollTrigger: { trigger: ".gal-grid", start: "top 80%" },
        scale: 0.95, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10"
           style={{ background: "linear-gradient(180deg, var(--background), oklch(0.96 0.012 80))" }} />
      <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.92 0.08 80), transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="gal-head text-xs uppercase tracking-[0.25em] text-[var(--gold)]">— Inside the practice</div>
            <h2 className="gal-head mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              A modern firm with <span className="italic gold-text">old-world craft</span>.
            </h2>
          </div>
          <p className="gal-head lg:col-span-5 text-lg text-muted-foreground">
            Step inside the studio where decades of experience meet contemporary tooling — and every
            engagement is led by a partner who knows your name.
          </p>
        </div>

        {/* Split layout: feature image + highlights */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="gal-shot lg:col-span-7 relative group rounded-[2rem] overflow-hidden border border-border bg-card shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
              alt="ABC & Associates office environment"
              loading="lazy"
              className="aspect-[16/11] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">— Studio</div>
              <div className="mt-2 font-display text-2xl sm:text-3xl">Where numbers meet nuance.</div>
            </div>
          </div>

          <div className="gal-features lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="gal-feature card-luxe p-6 flex gap-4 items-start">
                <div className="shrink-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-[var(--gold-soft)] to-[var(--cream)] ring-gold flex items-center justify-center">
                  <h.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg">{h.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mosaic */}
        <div className="gal-grid grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SHOTS.map((s) => (
            <figure key={s.src} className="gal-shot group relative overflow-hidden rounded-3xl border border-border bg-card aspect-[3/4]">
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-90" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">{s.tag}</div>
                <div className="mt-1 font-display text-lg leading-tight">{s.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
