import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { useFadeIn } from "@/hooks/useFadeIn";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — ABC & Associates" },
      { name: "description", content: "Meet the partners and senior professionals at ABC & Associates." },
      { property: "og:title", content: "Team — ABC & Associates" },
      { property: "og:description", content: "Partner-led, senior-attentive. The people behind every engagement." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { img: t1, name: "Arvind Bhat", role: "Founding Partner", bio: "FCA, with twenty-six years across audit, tax and family advisory. Leads the assurance practice and chairs internal quality reviews." },
  { img: t2, name: "Bhavana Chandra", role: "Partner — Tax", bio: "FCA, LLB. Heads direct and international tax. Empanelled before ITAT and Karnataka High Court for tax litigation." },
  { img: t3, name: "Chetan Deshpande", role: "Partner — Advisory", bio: "FCA, CFA. Leads valuation, transactions and the virtual CFO practice for founder-led firms across India." },
  { img: t4, name: "Divya Acharya", role: "Director — Risk & Forensic", bio: "FCA, CISA. Builds internal control frameworks and leads sensitive forensic engagements for boards and investors." },
];

function TeamPage() {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <PageShell>
      <div ref={ref}>
        <PageHeader
          eyebrow="The people"
          title="Partners who stay on the file."
          subtitle="Our practice is led by four partners and supported by a deliberately small bench of qualified professionals."
        />

        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((m) => (
              <article key={m.name} data-fade className="group relative rounded-3xl overflow-hidden shadow-card cursor-pointer bg-navy">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <p className="eyebrow !text-blue-light mb-3">{m.role}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-cream-soft mb-3">{m.name}</h3>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-out">
                    <div className="h-px w-12 bg-blue-light mb-4" />
                    <p className="text-sm text-cream/85 leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bench card */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-navy via-navy-deep to-blue p-10 md:p-14 text-cream-soft text-center relative overflow-hidden" data-fade>
            <div className="blob bg-blue-light/30 w-[360px] h-[360px] -top-24 -left-12" />
            <div className="relative">
              <p className="eyebrow !text-blue-light mb-4">And a bench of</p>
              <p className="font-display text-3xl md:text-5xl">
                24 qualified professionals — articled clerks, semi-qualifieds and managers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
