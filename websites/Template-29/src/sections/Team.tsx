import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Mail, Twitter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  { name: "Aarav Mehta", role: "Managing Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
  { name: "Priya Nair", role: "Head of Tax", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" },
  { name: "Rohan Kapoor", role: "Audit Partner", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" },
  { name: "Sara Iyer", role: "Advisory Lead", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80" },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 50, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={ref} className="relative py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">— Our partners</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Senior people, <span className="italic gold-text">personally</span> involved.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold underline decoration-[var(--gold)] underline-offset-8 hover:opacity-80">
            Meet the full team →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m) => (
            <div key={m.name} className="team-card group relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-card">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {[Linkedin, Twitter, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full glass border border-white/30 text-white hover:bg-[var(--gold)] hover:text-primary transition-colors">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-4 px-1">
                <h3 className="font-display text-xl">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
