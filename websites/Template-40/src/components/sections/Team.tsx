import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "CA Anil Bansal", role: "Founder & Managing Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80" },
  { name: "CA Priya Sharma", role: "Partner — Tax & Advisory", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" },
  { name: "CA Rohan Verma", role: "Partner — Audit & Assurance", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" },
  { name: "CA Neha Kapoor", role: "Head of GST & Compliance", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80" },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".team-card",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={ref} className="py-24 lg:py-32 bg-gradient-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">Our experts</div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Meet the team behind <span className="text-gradient-maroon">your success</span>
          </h2>
          <p className="text-muted-foreground text-lg">Seasoned Chartered Accountants committed to your financial well-being.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="team-card group">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-4 shadow-card">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role} at ABC & Associates`}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                  <div className="flex gap-3">
                    <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg text-charcoal">{m.name}</h3>
              <p className="text-sm text-primary font-medium">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
