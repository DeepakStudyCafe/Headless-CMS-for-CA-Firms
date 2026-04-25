import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-ca.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title span", { y: 60, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.2")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .from(".hero-image", { scale: 1.08, opacity: 0, duration: 1.2 }, "-=0.8")
        .from(".hero-blob", { scale: 0, opacity: 0, duration: 1, stagger: 0.15 }, "-=1");

      gsap.to(".hero-blob-1", {
        y: 30, x: 20, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(".hero-blob-2", {
        y: -30, x: -20, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative blobs */}
      <div className="hero-blob hero-blob-1 absolute top-32 -left-20 w-80 h-80 rounded-full opacity-40 blur-3xl"
           style={{ background: "var(--gold-soft)" }} />
      <div className="hero-blob hero-blob-2 absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-30 blur-3xl"
           style={{ background: "var(--beige)" }} />
      <div className="hero-blob absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-gold" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium uppercase tracking-widest text-foreground/70 mb-8">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Chartered Accountants · Est. 2008
          </div>

          <h1 className="hero-title font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6">
            <span className="block">Trusted Chartered</span>
            <span className="block">Accountant Services</span>
            <span className="block">for <span className="text-gradient-gold italic">Modern Businesses</span></span>
          </h1>

          <p className="hero-sub text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            From precise tax planning and statutory audits to GST compliance and
            strategic business advisory — ABC &amp; Associates partners with founders,
            corporates and high-net-worth individuals to keep finances sharp,
            compliant and future-ready.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#query")}
              className="hero-cta group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-gold)] transition-all"
            >
              Get Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="hero-cta inline-flex items-center gap-2 px-7 py-4 rounded-full border border-foreground/20 hover:border-gold hover:bg-secondary font-medium transition-all"
            >
              Explore Services
            </button>
          </div>

          <div className="hero-cta mt-12 flex items-center gap-8">
            <div>
              <div className="font-display text-3xl font-semibold">15+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Years</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl font-semibold">800+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Clients</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl font-semibold">12</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Experts</div>
            </div>
          </div>
        </div>

        <div className="hero-image relative">
          <div className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
               style={{ background: "var(--gradient-gold)" }} />
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-gold/30">
            <img
              src={heroImg}
              alt="Senior chartered accountant reviewing financial statements"
              width={1024}
              height={1280}
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-[var(--shadow-soft)] max-w-[220px]">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">ICAI Member Firm</div>
            <div className="font-display text-lg font-semibold leading-tight">
              Audit · Tax · Advisory
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}