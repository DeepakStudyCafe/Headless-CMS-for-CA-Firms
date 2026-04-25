import { createFileRoute } from "@tanstack/react-router";
import t1 from "../assets/team1.jpg";
import t2 from "../assets/team2.jpg";
import t3 from "../assets/team3.jpg";
import t4 from "../assets/team4.jpg";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — ABC & Associates" },
      { name: "description", content: "Meet the partners and senior associates of ABC & Associates." },
      { property: "og:title", content: "The people behind ABC & Associates" },
      { property: "og:description", content: "Partner-led engagements. Meet the team." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { img: t1, name: "Anil Bhattacharya, FCA", role: "Founding Partner — Audit & Assurance", bio: "Twenty-six years across statutory audit, IFRS conversions and listed-company reporting. Anil leads the firm's assurance practice." },
  { img: t2, name: "Meera Iyer, FCA", role: "Partner — Direct Tax & Litigation", bio: "Appears regularly before ITAT and the High Court. Specialises in corporate tax assessments, search & seizure and reorganisations." },
  { img: t3, name: "Rohan Verma, ACA", role: "Partner — GST & Indirect Tax", bio: "GST since the day it was launched. Builds compliance frameworks for multi-state manufacturing and e-commerce clients." },
  { img: t4, name: "Priya Nair, ACA", role: "Director — Risk & Internal Audit", bio: "Designs internal control and SOP frameworks for family-owned and PE-backed businesses crossing the ₹100-crore mark." },
];

function TeamPage() {
  useReveal();
  return (
    <div className="pt-32 lg:pt-40">
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6 reveal-up">— Our people</p>
        <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[1.05] max-w-4xl text-balance reveal-up">
          Senior partners. On every engagement. Without exception.
        </h1>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20">
          {team.map((p, i) => (
            <div key={p.name} className={`group reveal-up ${i % 2 === 1 ? "lg:mt-24" : ""}`}>
              <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5] shadow-elegant transition-shadow duration-500 group-hover:shadow-lift">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110" loading="lazy" width={800} height={1000} />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-cream">
                  <div className="text-xs uppercase tracking-[0.25em] text-accent">0{i + 1}</div>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="font-display text-2xl text-primary">{p.name}</h2>
                <p className="text-sm text-accent mt-1">{p.role}</p>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
