import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";

const openings = [
  { title: "Senior Audit Associate", location: "Mumbai", type: "Full-time", desc: "Lead statutory audit engagements for mid-market clients." },
  { title: "Tax Consultant", location: "Bengaluru", type: "Full-time", desc: "Advise on direct & indirect tax planning and litigation." },
  { title: "Article Trainee (CA)", location: "Mumbai", type: "Internship", desc: "3-year articleship with multi-domain exposure." },
  { title: "GST Manager", location: "Delhi NCR", type: "Full-time", desc: "Own GST advisory, returns and litigation portfolios." },
];

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — Premier CA Firm" },
      { name: "description", content: "Build your career with a leading chartered accountancy firm." },
      { property: "og:title", content: "Careers — Premier CA Firm" },
      { property: "og:description", content: "Open roles at our firm." },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Careers" title="Build your career with us" subtitle="Where ambition meets craft — join a team that invests in you." />
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="space-y-4">
            {openings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <div className="group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl bg-white border border-border p-6 lg:p-7 card-lift">
                  <div className="flex gap-4 items-start">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal">{o.title}</h3>
                      <p className="text-sm text-soft-gray mt-1">{o.desc}</p>
                      <div className="mt-2 flex gap-3 text-xs text-soft-gray">
                        <span className="inline-flex items-center gap-1"><MapPin size={12} />{o.location}</span>
                        <span>•</span>
                        <span>{o.type}</span>
                      </div>
                    </div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-1 self-start md:self-center rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-medium text-charcoal hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    Apply <ArrowUpRight size={16} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
