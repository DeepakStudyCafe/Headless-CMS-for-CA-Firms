import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Rajesh Mehta", role: "Founder & Senior Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Anita Sharma", role: "Tax & Audit Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Vikram Iyer", role: "Compliance Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" },
  { name: "Priya Kapoor", role: "Advisory & Consulting", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
];

export default function Team() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        },
      );
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={root} className="relative py-28 bg-gradient-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Team</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet our <span className="text-gradient-gold">expert partners</span>
          </h2>
          <p className="text-muted-foreground">
            Seasoned professionals committed to your financial growth and compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="team-card group glass-card gold-border-glow rounded-2xl overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-gradient-gold text-primary-foreground">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-gradient-gold text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold group-hover:text-primary transition">{m.name}</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
