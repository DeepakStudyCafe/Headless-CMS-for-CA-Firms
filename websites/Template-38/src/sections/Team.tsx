import { Linkedin, Mail } from "lucide-react";
import t1 from "@/assets/team1.jpg";
import t2 from "@/assets/team2.jpg";
import t3 from "@/assets/team3.jpg";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const team = [
  { img: t1, name: "CA Arjun Mehta", role: "Managing Partner" },
  { img: t2, name: "CA Priya Sharma", role: "Head of Audit & Assurance" },
  { img: t3, name: "CA Rohan Iyer", role: "Tax & Advisory Partner" },
];

export default function Team() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section ref={ref} id="team" className="py-24 lg:py-32 bg-[color:var(--cream-deep)]/40">
      <div className="container-x">
        <div className="max-w-3xl">
          <span data-reveal className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Meet The Team
          </span>
          <h2 data-reveal className="mt-4 text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            People behind <span className="italic text-primary">your numbers</span>.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m) => (
            <div key={m.name} data-reveal className="card-elev rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="h-9 w-9 rounded-full bg-white/95 inline-flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-9 w-9 rounded-full bg-white/95 inline-flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl text-foreground">{m.name}</h3>
                <p className="text-sm text-primary mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
