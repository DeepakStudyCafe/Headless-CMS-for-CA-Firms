import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, GraduationCap, TrendingUp, Users } from "lucide-react";

const perks = [
  { icon: GraduationCap, title: "Continuous Learning", desc: "Funded ICAI updates, certifications and weekly knowledge sessions." },
  { icon: TrendingUp, title: "Real Growth Path", desc: "Transparent promotion structure from articleship to partner track." },
  { icon: Users, title: "Mentorship Culture", desc: "Direct access to partners and senior CAs from day one." },
  { icon: Briefcase, title: "Diverse Portfolio", desc: "Work across startups, SMEs and listed enterprises." },
];

const openings = [
  { role: "Senior Audit Associate", type: "Full-time · Bengaluru", exp: "3-5 yrs" },
  { role: "Tax Consultant", type: "Full-time · Bengaluru", exp: "2-4 yrs" },
  { role: "Articled Assistant (CA Inter)", type: "Articleship · Bengaluru", exp: "Fresher" },
  { role: "Compliance Executive", type: "Full-time · Remote", exp: "1-3 yrs" },
];

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — ABC & Associates" },
      { name: "description", content: "Build a meaningful chartered accountancy career at ABC & Associates. Open roles and culture." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <section className="bg-[color:var(--cream-deep)]/50 py-20">
        <div className="container-x text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Join Us</span>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl text-foreground">Build Your Career With Us</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We hire ambitious professionals who care about craft, clients and growth.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl text-foreground">Why work at ABC &amp; Associates</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-elev rounded-2xl p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 inline-flex items-center justify-center text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-20 font-display text-3xl text-foreground">Open positions</h2>
          <div className="mt-8 divide-y divide-border border border-border rounded-2xl bg-card overflow-hidden">
            {openings.map((o) => (
              <div key={o.role} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 hover:bg-muted transition">
                <div>
                  <h3 className="font-display text-xl text-foreground">{o.role}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{o.type} · {o.exp}</p>
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium">
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  ),
});
