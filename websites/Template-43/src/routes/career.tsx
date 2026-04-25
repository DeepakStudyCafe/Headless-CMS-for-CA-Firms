import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { useGsapReveal } from "@/hooks/useGsap";
import { GraduationCap, Users, Sparkles, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — ABC & Associates" },
      { name: "description", content: "Join a senior-led chartered accountancy practice with deep mentorship and real client exposure from year one." },
      { property: "og:title", content: "Careers — ABC & Associates" },
      { property: "og:description", content: "Build a craft, not a career path. Senior-led mentorship from day one." },
    ],
  }),
  component: CareerPage,
});

const roles = [
  { t: "Article Trainee · Audit", loc: "Bengaluru", type: "3-year ICAI articleship" },
  { t: "Qualified CA · Direct Tax", loc: "Mumbai", type: "Full-time" },
  { t: "Manager · GST Litigation", loc: "Bengaluru", type: "Full-time" },
  { t: "Senior Associate · Advisory", loc: "Delhi NCR", type: "Full-time" },
];

function CareerPage() {
  useGsapReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Career"
        title="Build a craft, not a career path."
        intro="We hire slowly and we promote on craft. The work you do here in three years is the work most firms reserve for their tenth."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-10">
          {[
            { i: GraduationCap, t: "Apprenticeship culture", d: "Every new joiner shadows a partner for the first six months. Real engagements, real responsibility." },
            { i: Users, t: "Forty-two, by design", d: "We cap headcount each year. Small enough to know each other; large enough to take on serious work." },
            { i: Sparkles, t: "Examination support", d: "Paid leave, mock series and partner mentorship for every CA Final attempt — until you clear." },
          ].map((b) => (
            <div key={b.t} data-reveal className="bg-white p-10 shadow-soft">
              <div className="h-12 w-12 rounded-full bg-gradient-wine flex items-center justify-center text-white mb-6">
                <b.i size={20} />
              </div>
              <h3 className="font-display text-2xl mb-3">{b.t}</h3>
              <p className="text-ink/70 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display text-4xl md:text-5xl" data-reveal>Open positions</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">Updated weekly</span>
          </div>
          <div className="border-t border-white/15">
            {roles.map((r) => (
              <div data-reveal key={r.t} className="group grid md:grid-cols-12 gap-4 py-8 border-b border-white/15 hover:bg-wine/20 transition-colors px-2 cursor-pointer">
                <div className="md:col-span-6 font-display text-2xl group-hover:text-wine transition-colors">{r.t}</div>
                <div className="md:col-span-3 text-white/70 text-sm self-center">{r.loc}</div>
                <div className="md:col-span-2 text-white/70 text-sm self-center">{r.type}</div>
                <div className="md:col-span-1 flex justify-end self-center">
                  <ArrowUpRight size={22} className="text-white/40 group-hover:text-wine group-hover:rotate-45 transition-all" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contact" className="inline-flex items-center gap-3 border border-white/40 px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-colors">
              Send your CV
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
