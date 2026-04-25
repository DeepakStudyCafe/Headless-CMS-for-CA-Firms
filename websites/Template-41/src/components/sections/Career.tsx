import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Briefcase, GraduationCap, Users, ArrowRight } from "lucide-react";

const roles = [
  { icon: GraduationCap, title: "CA Articleship", type: "3-year articleship", desc: "Hands-on exposure across audit, tax and advisory under the direct mentorship of partners." },
  { icon: Briefcase, title: "Senior Accountant", type: "Full-time · Mumbai", desc: "Lead client books, GST and TDS compliance for a portfolio of mid-market businesses." },
  { icon: Users, title: "Audit Intern", type: "6-month internship", desc: "Support statutory and internal audits with structured training across industries." },
];

export function Career() {
  const ref = useGsapReveal<HTMLElement>();
  return (
    <section id="career" ref={ref as never} className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div data-reveal className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
              Careers
            </div>
            <h2 data-reveal className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Build your career where <span className="italic text-gradient-gold">expertise is respected</span>.
            </h2>
            <p data-reveal className="text-muted-foreground leading-relaxed mb-6">
              At ABC &amp; Associates we hire people who care deeply about the craft
              of accountancy — and we invest in them. Articles work alongside
              partners on real, complex mandates from week one. Seniors get
              ownership, learning budgets and a clear path to leadership.
            </p>
            <p data-reveal className="text-muted-foreground leading-relaxed">
              If you're looking for a firm where your work is reviewed, your
              questions are answered, and your growth is taken seriously — we'd
              love to meet you.
            </p>
          </div>

          <div className="space-y-4">
            {roles.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  data-reveal
                  className="group p-6 rounded-2xl border border-border hover:border-gold bg-secondary hover:bg-background hover:shadow-[var(--shadow-soft)] transition-all flex gap-5"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gold-soft flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-xl font-semibold">{r.title}</h3>
                      <span className="text-xs text-gold uppercase tracking-wider">{r.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                    <a
                      href="#query"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-foreground/80 hover:text-gold"
                    >
                      Apply now <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}