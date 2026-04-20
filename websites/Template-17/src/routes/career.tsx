import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — ABC & Associates" },
      { name: "description", content: "Build your career at ABC & Associates. Explore current openings for Chartered Accountants, articleship and audit professionals." },
      { property: "og:title", content: "Careers at ABC & Associates" },
      { property: "og:description", content: "Open roles for CAs, articles and audit/tax professionals." },
    ],
  }),
  component: CareerPage,
});

const jobs = [
  { title: "Chartered Accountant — Audit", location: "Mumbai", type: "Full-time" },
  { title: "Tax Manager — Direct Tax", location: "Mumbai / Pune", type: "Full-time" },
  { title: "Article Assistant", location: "Mumbai", type: "Articleship" },
  { title: "GST Executive", location: "Remote", type: "Full-time" },
];

function CareerPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Career</p>
            <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Build your career with us</h1>
            <p className="mt-4 text-base text-subtle">We hire ambitious professionals who want to grow alongside great clients and great mentors.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-4">
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.05}>
                <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-secondary hover:shadow-md sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{j.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-subtle">
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {j.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {j.type}</span>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button variant="outline" className="border-border">
                      Apply Now <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 rounded-xl border border-border bg-muted p-8 text-center">
              <h3 className="font-display text-xl font-semibold text-foreground">Don't see a role that fits?</h3>
              <p className="mt-2 text-sm text-subtle">Send us your CV — we're always open to meeting talented professionals.</p>
              <Link to="/contact" className="mt-5 inline-flex">
                <Button className="bg-primary text-primary-foreground hover:bg-secondary">Send your CV</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
