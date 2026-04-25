import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { useGsapReveal } from "@/hooks/useGsap";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — ABC & Associates" },
      { name: "description", content: "Meet the partners and senior chartered accountants leading ABC & Associates." },
      { property: "og:title", content: "Our Team — ABC & Associates" },
      { property: "og:description", content: "ICAI fellows with deep specialisations across tax, audit and advisory." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { img: t1, name: "Anand Bhatia", role: "Founding Partner", spec: "Direct Tax · International Tax", bio: "Twenty-eight years across PwC and family-office advisory. Leads the firm's tax controversy practice." },
  { img: t2, name: "Bhavna Chandra", role: "Partner — Audit", spec: "Statutory Audit · IFRS", bio: "Former Deloitte audit director with deep experience in listed manufacturing and consumer companies." },
  { img: t3, name: "Chetan Desai", role: "Partner — GST", spec: "Indirect Tax · Litigation", bio: "Argues GST matters at appellate tribunals across India. Co-author of two CCH commentaries." },
  { img: t4, name: "Divya Iyer", role: "Partner — Advisory", spec: "Valuations · Transactions", bio: "Leads the firm's M&A and valuation practice. Previously with EY-Parthenon's deal team." },
];

function TeamPage() {
  useGsapReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Team"
        title="The partners behind every engagement."
        intro="Four ICAI fellows. Eighty cumulative years of practice. Every engagement is led by one of them — never below."
      />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-24">
            {team.map((m, i) => (
              <article
                key={m.name}
                data-reveal
                className={`group relative ${i % 2 === 1 ? "md:translate-y-24" : ""}`}
              >
                <div className="relative overflow-hidden rounded-t-[180px] rounded-b-md aspect-[3/4] bg-gradient-wine">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-sm leading-relaxed">{m.bio}</p>
                  </div>
                </div>
                <div className="mt-6 px-2">
                  <h3 className="font-display text-3xl text-ink">{m.name}</h3>
                  <p className="text-wine text-sm uppercase tracking-[0.2em] mt-1">{m.role}</p>
                  <p className="text-ink/60 text-sm mt-2">{m.spec}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
