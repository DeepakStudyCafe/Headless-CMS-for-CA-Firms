import { ArrowUpRight } from "lucide-react";

const roles = [
  { title: "Article Assistant", type: "CA Articleship · Mumbai", level: "Entry" },
  { title: "Audit Senior", type: "Statutory & Internal Audit · Bengaluru", level: "3–5 yrs" },
  { title: "Tax Manager", type: "Direct & International Tax · Mumbai", level: "5–8 yrs" },
  { title: "Advisory Associate", type: "Virtual CFO Practice · Pune", level: "2–4 yrs" },
];

export function Career() {
  return (
    <section
      id="career"
      className="relative py-28 md:py-40"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--beige) 50%, var(--background)) 0%, var(--background) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              (07) — Careers
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Build a practice. <span className="italic">Not a CV.</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-md">
              We hire fewer people than we could and invest more in each of
              them than we should. Articles work directly with partners from
              week one. Managers run files end-to-end. Everyone owns a client
              relationship by year three.
            </p>

            <div className="mt-10 space-y-4 text-foreground/80">
              {[
                "Partner mentorship from day one",
                "Funded ICAI, CFA and DipIFR sponsorship",
                "Four-day office week, deep-work culture",
                "Profit-share for managers and above",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-6 bg-primary" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:careers@abc-associates.in"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Send your CV <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Currently Open
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {roles.map((r) => (
                <li
                  key={r.title}
                  className="group grid grid-cols-12 items-center py-6 gap-4 cursor-pointer hover:px-2 transition-all"
                >
                  <div className="col-span-7">
                    <div className="font-display text-xl md:text-2xl">{r.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{r.type}</div>
                  </div>
                  <div className="col-span-3 text-sm text-foreground/70">{r.level}</div>
                  <div className="col-span-2 flex justify-end">
                    <span className="h-9 w-9 rounded-full border border-foreground/30 grid place-items-center group-hover:bg-foreground group-hover:text-background transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Don't see your role? We always read thoughtful introductions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
