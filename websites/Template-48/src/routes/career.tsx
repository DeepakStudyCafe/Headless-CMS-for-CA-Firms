import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — ABC & Associates" },
      { name: "description", content: "Careers and articleship opportunities at ABC & Associates. Build a long career in chartered accountancy." },
      { property: "og:title", content: "Career at ABC & Associates" },
      { property: "og:description", content: "Articleship and senior associate openings." },
    ],
  }),
  component: CareerPage,
});

const openings = [
  { role: "Senior Audit Associate", years: "3–5 years", loc: "Bengaluru", desc: "Lead statutory audit engagements for mid-cap manufacturing and tech clients. Reports to an audit partner." },
  { role: "Direct Tax Manager", years: "5–7 years", loc: "Bengaluru", desc: "Manage scrutiny assessments, draft submissions and represent clients before tax authorities." },
  { role: "GST Senior", years: "2–4 years", loc: "Bengaluru / Chennai", desc: "Run end-to-end GST compliance and advisory for a portfolio of multi-state clients." },
  { role: "Articled Clerks (CA Intermediate)", years: "Freshers", loc: "Bengaluru", desc: "Three-year articleship across audit, tax and advisory. Six-monthly rotation across practice areas." },
];

function CareerPage() {
  useReveal();
  return (
    <div className="pt-32 lg:pt-40">
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6 reveal-up">— Build a career</p>
        <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[1.05] max-w-4xl text-balance reveal-up">
          A firm that promotes from within. Slowly, deliberately.
        </h1>
        <p className="mt-8 max-w-2xl text-foreground/75 leading-relaxed reveal-up">
          Most of our partners began their careers as articled clerks here. We invest in long
          careers — quality of work, breadth of exposure and sustained mentorship.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl">
          {openings.map((o, i) => (
            <a
              key={o.role}
              href="#"
              className="group grid lg:grid-cols-12 gap-6 px-6 lg:px-10 py-10 lg:py-12 border-b border-border hover:bg-secondary/40 transition reveal-up"
            >
              <div className="lg:col-span-1 font-display text-2xl text-accent">0{i + 1}</div>
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl text-primary group-hover:text-accent transition">{o.role}</h2>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{o.years}</span>
                  <span>{o.loc}</span>
                </div>
              </div>
              <p className="lg:col-span-6 text-foreground/75 leading-relaxed">{o.desc}</p>
              <div className="lg:col-span-1 flex lg:justify-end items-start text-primary">
                <ArrowUpRight size={22} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center reveal-up">
          <h2 className="font-display text-3xl lg:text-4xl text-primary">Don't see your role?</h2>
          <p className="mt-4 text-foreground/75">
            Write to <span className="text-primary font-medium">careers@abcassociates.in</span> with a short note and your CV.
          </p>
        </div>
      </section>
    </div>
  );
}
