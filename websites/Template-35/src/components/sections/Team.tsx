import { Linkedin, Mail } from "lucide-react";

const team = [
  { name: "Rajesh Mehra, FCA", role: "Founding Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
  { name: "Anita Sharma, CA", role: "Head of Audit & Assurance", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { name: "Vikram Iyer, CA", role: "Tax & Advisory Partner", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Priya Nair, CA", role: "GST & Compliance Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" },
];

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Our Team</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Meet the <span className="text-gold">experts</span> behind your success
          </h2>
          <div className="fancy-divider mx-auto mt-6" />
          <p className="mt-5 text-muted-foreground">
            A team of seasoned chartered accountants and finance professionals, ready to guide you.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="reveal group">
              <div className="relative rounded-2xl overflow-hidden shadow-card bg-card">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full glass grid place-items-center text-white hover:bg-gold transition">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Email" className="h-9 w-9 rounded-full glass grid place-items-center text-white hover:bg-gold transition">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg">{m.name}</h3>
                <p className="text-sm text-gold mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
