import { Linkedin, Mail } from "lucide-react";

const team = [
  { name: "Rajesh Sharma", role: "Founder & Senior Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
  { name: "Priya Mehta", role: "Tax Advisory Head", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { name: "Arjun Kapoor", role: "Audit Partner", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80" },
  { name: "Neha Verma", role: "GST & Compliance Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-pink font-semibold uppercase tracking-[0.2em] text-xs">Our Experts</span>
          <h2 className="text-4xl md:text-5xl text-navy font-bold mt-3 mb-4">Meet the leadership</h2>
          <p className="text-muted-foreground">A team of qualified CAs committed to your financial success.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {team.map((m) => (
            <div key={m.name} className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-pink-light">
                <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-navy text-lg">{m.name}</h3>
                <p className="text-pink text-sm font-medium mb-3">{m.role}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-pink-light flex items-center justify-center text-navy hover:bg-pink hover:text-white transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-pink-light flex items-center justify-center text-navy hover:bg-pink hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
