import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-fade",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const pillars = [
    { icon: Target, title: "Our Mission", text: "To empower businesses with precise financial insights, transparent compliance, and strategic guidance that fuels sustainable growth." },
    { icon: Eye, title: "Our Vision", text: "To be India's most trusted Chartered Accountancy firm — recognized for integrity, innovation, and unwavering client commitment." },
    { icon: Heart, title: "Our Values", text: "Integrity, accuracy, confidentiality, and client-first thinking guide every engagement we undertake." },
  ];

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="about-fade">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">About the firm</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-charcoal mb-6">
              Trusted financial expertise <span className="text-gradient-maroon">built on decades of excellence.</span>
            </h2>
          </div>
          <div className="about-fade space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Founded in 1998, <strong className="text-foreground">ABC &amp; Associates</strong> has grown into a
              respected Chartered Accountancy firm serving startups, SMEs, and enterprises across diverse industries.
              Our team blends deep technical knowledge with a genuine partnership approach.
            </p>
            <p>
              From taxation and audit to advisory and compliance, we deliver end-to-end financial solutions
              that protect your interests, optimize your obligations, and unlock new opportunities for growth.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="about-fade card-lift bg-card rounded-2xl p-8 border border-border shadow-card">
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-5 shadow-soft">
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
