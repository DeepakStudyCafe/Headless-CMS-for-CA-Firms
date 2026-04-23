import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Rajesh Sharma", role: "Founding Partner, FCA", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Priya Mehta", role: "Tax Advisory Head", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Arjun Verma", role: "Audit Partner, CA", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" },
  { name: "Neha Kapoor", role: "GST & Compliance Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
];

export function Team() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={root} className="py-24 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Team</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground">
            Meet our <span className="text-gradient-primary">expert advisors</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A dedicated team of qualified chartered accountants and finance professionals.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="team-card group bg-card rounded-2xl overflow-hidden border border-border shadow-card-soft card-hover">
              <div className="relative overflow-hidden h-72">
                <img src={m.img} alt={m.name} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary-deep/90 to-transparent flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a href="#" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-primary-deep transition">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-primary-deep transition">
                    <Mail size={16} />
                  </a>
                </div>
              </div>
              <div className="p-5 text-center">
                <h4 className="font-semibold text-foreground">{m.name}</h4>
                <p className="text-sm text-primary mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
