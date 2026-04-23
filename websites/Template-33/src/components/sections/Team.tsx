import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Mail } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { img: t1, name: "Rohan Mehta", role: "Founding Partner, FCA" },
  { img: t2, name: "Anjali Iyer", role: "Head of Audit & Assurance" },
  { img: t3, name: "Vikram Shah", role: "Senior Tax Advisor" },
  { img: t4, name: "Priya Nair", role: "GST & Compliance Lead" },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".team-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={ref} className="py-24 lg:py-32 bg-cream-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-deep">Our Team</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 leading-tight">
            Meet the <span className="gold-text italic">specialists</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m) => (
            <div key={m.name} className="team-card group relative rounded-3xl overflow-hidden bg-cream shadow-sm hover:shadow-luxe transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" width={768} height={896} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent">
                <h3 className="font-display text-2xl text-white">{m.name}</h3>
                <p className="text-sm text-white/80">{m.role}</p>
                <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <a href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-gold transition" aria-label="LinkedIn"><Linkedin size={16} /></a>
                  <a href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-gold transition" aria-label="Email"><Mail size={16} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
