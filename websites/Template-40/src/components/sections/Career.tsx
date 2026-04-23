import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Sparkles, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Career() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".career-fade",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12,
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const perks = [
    { icon: GraduationCap, title: "Continuous Learning", text: "ICAI CPE programs, in-house training, and exposure to diverse industries." },
    { icon: Sparkles, title: "Growth-Driven Culture", text: "Mentorship, ownership, and a clear path to partnership for top talent." },
    { icon: Briefcase, title: "Diverse Engagements", text: "Work with startups, MNCs, and family businesses across sectors." },
  ];

  return (
    <section id="career" ref={ref} className="py-24 lg:py-32 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="career-fade text-xs font-semibold tracking-[0.25em] uppercase opacity-80 mb-4">Careers</div>
            <h2 className="career-fade text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build a career that counts.
            </h2>
            <p className="career-fade opacity-90 text-lg mb-8 leading-relaxed">
              Join a team of ambitious Chartered Accountants and finance professionals shaping the future of advisory.
              We invest in our people — and they invest in our clients' success.
            </p>
            <a href="#contact" className="career-fade inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-foreground text-primary font-semibold hover:bg-cream transition-smooth shadow-elegant">
              View Open Positions <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4">
            {perks.map((p) => (
              <div key={p.title} className="career-fade flex gap-5 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15 hover:bg-primary-foreground/15 transition-smooth">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
