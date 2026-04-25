import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "CA Anil Bhatia",
    role: "Managing Partner",
    bio: "Audit & Assurance leader with 22+ years across listed companies and Big 4 mandates.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    name: "CA Bhavna Mehra",
    role: "Partner — Direct Tax",
    bio: "Specialist in international taxation, transfer pricing and high-value individual tax matters.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  },
  {
    name: "CA Chetan Rao",
    role: "Partner — GST & Indirect Tax",
    bio: "Leads GST advisory, refunds and litigation; former indirect tax lead at a multinational FMCG firm.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Priya Nair",
    role: "Senior Tax Consultant",
    bio: "Personal taxation, capital gains and NRI advisory expert with a calm, client-first approach.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
  },
  {
    name: "Rohit Verma",
    role: "Business Advisor",
    bio: "Virtual CFO services for D2C, SaaS and manufacturing clients across India and the GCC.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Sneha Iyer",
    role: "Compliance Manager",
    bio: "ROC, FEMA and secretarial compliance specialist with a meticulous eye for detail.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80",
  },
];

export function Team() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section id="team" ref={ref as never} className="py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div data-reveal className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
              Meet The Team
            </div>
            <h2 data-reveal className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Senior people. <span className="italic text-gradient-gold">Senior attention.</span>
            </h2>
          </div>
          <p data-reveal className="max-w-md text-muted-foreground">
            Every engagement is led by a partner — never delegated entirely to
            juniors. That's the ABC promise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m) => (
            <div
              key={m.name}
              data-reveal
              className="group rounded-3xl overflow-hidden bg-background border border-border hover:border-gold hover:shadow-[var(--shadow-elegant)] transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                <div className="text-sm text-gold font-medium mt-1">{m.role}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
                <div className="flex gap-3 mt-5">
                  <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-secondary hover:bg-gold hover:text-foreground transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#contact" aria-label="Email" className="p-2 rounded-full bg-secondary hover:bg-gold hover:text-foreground transition-colors">
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