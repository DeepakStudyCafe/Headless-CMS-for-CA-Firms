import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { Linkedin, Mail } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

const team = [
  { img: t1, name: "Aarav Mehta, FCA", role: "Managing Partner" },
  { img: t2, name: "Priya Iyer, FCA", role: "Head of Tax Advisory" },
  { img: t3, name: "Rajiv Sharma, FCA", role: "Senior Audit Partner" },
  { img: t4, name: "Ananya Rao, ACA", role: "GST & Compliance Lead" },
];

export function Team() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, [{ selector: ".team-card", y: 40, stagger: 0.1 }]);

  return (
    <section ref={ref} id="team" className="py-24 lg:py-36 bg-gradient-luxe">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold ornament">Our Partners</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Meet the minds behind <span className="text-gradient-gold italic">your numbers</span>
          </h2>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground">
            A senior team that treats your firm's finances with the same rigour they apply to their own.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((m) => (
            <div key={m.name} className="team-card group">
              <div className="relative overflow-hidden rounded-3xl shadow-soft group-hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
                <img src={m.img} alt={m.name} width={768} height={896} loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--maroon-deep)] via-[var(--maroon-deep)]/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-display text-xl lg:text-2xl">{m.name}</h3>
                  <p className="text-xs lg:text-sm text-[var(--gold-soft)] mt-1">{m.role}</p>
                  <div className="flex gap-2 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[var(--gold)] text-[var(--maroon-deep)] flex items-center justify-center hover:scale-110 transition">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#contact" aria-label="Email" className="w-9 h-9 rounded-full bg-[var(--gold)] text-[var(--maroon-deep)] flex items-center justify-center hover:scale-110 transition">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
