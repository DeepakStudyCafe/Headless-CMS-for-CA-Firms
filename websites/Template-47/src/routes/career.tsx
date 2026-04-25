import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

const openings = [
  {
    role: "Audit Manager",
    type: "Full-time · Mumbai",
    desc: "Lead statutory and internal audit engagements for listed and mid-market clients. CA with 4–6 years of post-qualification experience.",
  },
  {
    role: "Tax Associate",
    type: "Full-time · Mumbai",
    desc: "Support direct tax compliance, assessments and advisory across corporate and individual clients. CA fresher or 1–2 years experience.",
  },
  {
    role: "Article Trainee",
    type: "Articleship · Mumbai",
    desc: "Three-year articleship with rotation across audit, tax, GST and advisory. CA Intermediate cleared.",
  },
  {
    role: "Virtual CFO Associate",
    type: "Full-time · Hybrid",
    desc: "Build MIS, cash forecasts and board packs for early-stage and growth-stage clients. CA + 2–4 years of industry or consulting experience.",
  },
];

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — ABC & Associates" },
      {
        name: "description",
        content:
          "Build your career at ABC & Associates. Open positions in audit, taxation, virtual CFO and articleship across our Mumbai practice.",
      },
      { property: "og:title", content: "Careers at ABC & Associates" },
      {
        property: "og:description",
        content: "Senior mentorship. Substantive work. A practice that invests in its people.",
      },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={<>Build a career, <em className="italic text-ocean">not just a CV.</em></>}
        intro="We hire fewer people than we could and invest more in each one. Expect senior mentorship, substantive work and an unhurried path to partnership."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <div className="label-eyebrow mb-4">Open Positions</div>
                <h2 className="font-display text-3xl md:text-4xl text-primary leading-[1.1]">
                  Currently hiring across four roles.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="border-t border-border">
            {openings.map((o, i) => (
              <Reveal key={o.role} delay={i * 0.05}>
                <article className="group grid grid-cols-12 gap-6 items-start py-10 border-b border-border hover:bg-mist/30 transition-colors px-2">
                  <div className="col-span-12 md:col-span-1 font-display text-2xl text-brass">
                    0{i + 1}
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="font-display text-2xl text-primary">{o.role}</h3>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mt-2">{o.type}</div>
                  </div>
                  <div className="col-span-12 md:col-span-5 text-sm text-foreground/70 leading-relaxed">
                    {o.desc}
                  </div>
                  <div className="col-span-12 md:col-span-1 md:text-right">
                    <a href="mailto:careers@abcassociates.in" className="text-sm text-ocean hover:text-primary transition-colors inline-flex items-center gap-1">
                      Apply →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 bg-mist/40 p-10 md:p-14 border border-border">
              <div className="font-display text-2xl text-primary">Don't see your role?</div>
              <p className="mt-3 text-foreground/70 text-sm max-w-xl">
                We're always interested in meeting strong CAs and finance professionals. Send us a note
                and a CV — we'll respond within a week.
              </p>
              <a
                href="mailto:careers@abcassociates.in"
                className="mt-6 inline-flex bg-primary text-cream px-7 py-3.5 text-sm hover:bg-ocean transition-colors"
              >
                careers@abcassociates.in →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
