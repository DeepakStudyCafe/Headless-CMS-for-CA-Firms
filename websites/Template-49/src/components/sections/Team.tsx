import t1 from "@/assets/team1.jpg";
import t2 from "@/assets/team2.jpg";
import t3 from "@/assets/team3.jpg";
import t4 from "@/assets/team4.jpg";
import { useReveal } from "@/hooks/useReveal";

const TEAM = [
  { img: t1, name: "Arjun Bhat", role: "Managing Partner", bio: "FCA · ACCA. Leads audit & assurance practice. Twenty-one years across listed manufacturing and SaaS." },
  { img: t2, name: "Priya Menon", role: "Partner — Taxation", bio: "FCA, LLM (Tax). Heads direct tax and transfer pricing. Frequent contributor to ICAI journals." },
  { img: t3, name: "Ramesh Iyer", role: "Senior Partner", bio: "Founding partner. Practising since 1998. Specialises in family-business succession and Section 8 compliance." },
  { img: t4, name: "Sneha Kulkarni", role: "Director — Advisory", bio: "CA, MBA (ISB). Runs the Virtual CFO practice for venture-funded D2C and B2B brands." },
];

export function Team({ compact = false }: { compact?: boolean }) {
  const ref = useReveal();
  return (
    <section ref={ref as never} className="relative py-28 bg-[var(--sage)]/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {!compact && (
          <div className="grid lg:grid-cols-12 mb-16 gap-8">
            <div className="lg:col-span-7">
              <div data-reveal className="text-xs tracking-[0.3em] uppercase text-[var(--forest)] mb-5">◇ The Partners</div>
              <h2 data-reveal className="font-display text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05]">
                Senior people,<br />
                <span className="italic text-[var(--moss)]">on every</span> file.
              </h2>
            </div>
            <p data-reveal className="lg:col-span-5 self-end text-[var(--ink)]/75">
              No engagement at ABC moves without a partner reading it first. These are
              the people who'll pick up your call.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              data-reveal
              className={`group ${i % 2 === 1 ? "lg:translate-y-12" : ""}`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)]">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[var(--ink)]/90 to-transparent">
                  <div className="text-[var(--sage)] text-[10px] tracking-[0.25em] uppercase">{m.role}</div>
                  <div className="font-display text-2xl text-[var(--cream)]">{m.name}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-[var(--ink)]/75 leading-relaxed">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
