import { Reveal } from "@/components/Reveal";
import { Linkedin, Mail } from "lucide-react";

const team = [
  { name: "Rajesh Mehta, FCA", role: "Managing Partner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Anita Sharma, ACA", role: "Tax & Advisory Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Vikram Iyer, FCA", role: "Audit Partner", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80" },
  { name: "Priya Nair, ACA", role: "GST & Compliance Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
];

export function Team() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Our People</p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold text-charcoal">
            The minds behind your <span className="text-gradient">numbers</span>
          </h2>
          <p className="mt-5 text-soft-gray text-lg">
            A multidisciplinary team of chartered accountants, tax experts and advisors.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group relative rounded-3xl overflow-hidden bg-white shadow-soft card-lift">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-display font-semibold text-lg">{m.name}</h3>
                  <p className="text-xs text-white/75">{m.role}</p>
                  <div className="mt-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <a href="#" className="h-8 w-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center hover:bg-primary"><Linkedin size={14} /></a>
                    <a href="#" className="h-8 w-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center hover:bg-primary"><Mail size={14} /></a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
