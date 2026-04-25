import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import t1 from "../assets/team1.jpg";
import t2 from "../assets/team2.jpg";
import t3 from "../assets/team3.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — ABC & Associates" },
      { name: "description", content: "Meet the partners and senior associates of ABC & Associates — a boutique team of chartered accountants and advisors." },
      { property: "og:title", content: "Team — ABC & Associates" },
      { property: "og:description", content: "A boutique team of chartered accountants and advisors." },
    ],
  }),
  component: TeamPage,
});

const MEMBERS = [
  { name: "CA Anil Bhatia", role: "Founding Partner · Audit & Assurance", img: t1, bio: "Anil leads the firm's statutory audit practice and has signed off on more than 400 audits across manufacturing, BFSI and infrastructure clients." },
  { name: "CA Meera Kapoor", role: "Partner · Direct Tax & Litigation", img: t2, bio: "Meera heads the direct-tax desk and represents clients before the AO, CIT(A) and ITAT. She has advised on cross-border restructurings for 15+ years." },
  { name: "CA Chetan Sharma", role: "Founding Partner · Advisory & FEMA", img: t3, bio: "Chetan oversees the firm's advisory and FEMA practice, with deep experience in ODI, FDI and transfer pricing for India-focused groups." },
  { name: "CA Riya Gandhi", role: "Partner · GST & Indirect Tax", img: t2, bio: "Riya runs the indirect-tax practice, with notable wins in GST refund and classification disputes for retail and SaaS clients." },
  { name: "CA Karan Mehta", role: "Partner · Virtual CFO Practice", img: t1, bio: "Karan leads the firm's CFO services and supports founders through fundraising, MIS design and board reporting." },
  { name: "CA Nishant Roy", role: "Senior Associate · Internal Audit", img: t3, bio: "Nishant designs internal control frameworks and runs concurrent audits for our larger institutional clients." },
];

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title={<>The people who <em className="italic font-light text-primary">read the file</em>.</>}
        intro="Five partners, twenty-odd associates. Small enough that a partner can answer your call. Large enough to handle what matters."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.map((m, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <article className={`group ${i % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-12"}`}>
                  <div className="relative overflow-hidden rounded-sm">
                    <img
                      src={m.img}
                      alt={m.name}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl text-foreground">{m.name}</h3>
                    <span className="font-display text-xs text-primary/60">0{i + 1}</span>
                  </div>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-primary">{m.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
