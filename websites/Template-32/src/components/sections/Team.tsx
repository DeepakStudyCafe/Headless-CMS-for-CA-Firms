import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Rajeev Mehta, FCA", role: "Managing Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80" },
  { name: "Priya Sharma, ACA", role: "Tax & Advisory Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" },
  { name: "Anil Kapoor, FCA", role: "Audit Partner", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
  { name: "Neha Verma, ACA", role: "Compliance Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80" },
];

export function Team() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="team" ref={ref} className="py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Our Team</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the <span className="text-gradient-gold">experts</span></h2>
          <p className="text-muted-foreground">Seasoned professionals dedicated to your financial success.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="team-card group glass rounded-2xl overflow-hidden hover-lift">
              <div className="relative overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <a href="#" className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-gold mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
