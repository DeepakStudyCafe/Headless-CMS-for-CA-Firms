import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Rahul Mehta", role: "Founding Partner, FCA", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Priya Nair", role: "Tax & Advisory Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Arjun Verma", role: "Audit Director", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80" },
  { name: "Sneha Kapoor", role: "Compliance Manager", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
];

export default function Team() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={root} className="py-24 bg-surface/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our Team</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">
            Meet the people behind your numbers
          </h2>
          <p className="mt-4 text-muted-foreground">
            A dedicated team of chartered accountants, advisors and analysts.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="team-card group rounded-2xl overflow-hidden bg-surface border border-border shadow-card lift">
              <div className="relative overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition" />
                <a
                  href="#"
                  className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-surface text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
