import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImg from "@/assets/hero-ca.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="ABC Associates office" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* abstract shapes */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-pink/20 blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-pink-soft/30 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 py-24">
        <div className="max-w-3xl text-center mx-auto text-white">
          <span className="hero-anim inline-block px-4 py-1.5 rounded-full bg-pink/20 border border-pink/40 text-sm tracking-wide backdrop-blur mb-6">
            Trusted Chartered Accountants since 2005
          </span>
          <h1 className="hero-anim text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Strategic Finance for{" "}
            <span className="bg-gradient-to-r from-pink-soft to-pink bg-clip-text text-transparent">
              Ambitious Businesses
            </span>
          </h1>
          <p className="hero-anim text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
            ABC & Associates delivers expert tax, audit, and advisory solutions —
            built on integrity, precision, and 20 years of trusted partnership.
          </p>
          <div className="hero-anim flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-pink text-white font-semibold shadow-pink hover:scale-105 transition-transform">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white hover:text-navy transition-colors">
              <PlayCircle className="h-5 w-5" /> Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
