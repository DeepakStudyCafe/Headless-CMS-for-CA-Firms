import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "../assets/about.jpg";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC & Associates" },
      { name: "description", content: "Two decades of boutique chartered accountancy practice. Read our story, values and approach." },
      { property: "og:title", content: "About ABC & Associates" },
      { property: "og:description", content: "A small firm, deliberately. Built for the long arc of a business." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <div className="pt-32 lg:pt-40">
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6 reveal-up">— About the firm</p>
        <h1 className="font-display text-5xl lg:text-7xl text-primary leading-[1.05] max-w-4xl text-balance reveal-up">
          A boutique practice with the patience of a long-form essay.
        </h1>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal-up">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={aboutImg} alt="At work in the office" className="h-full w-full object-cover" loading="lazy" width={1200} height={1400} />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-foreground/80 leading-relaxed reveal-up">
            <h2 className="font-display text-3xl text-primary">Our story</h2>
            <p>
              In 2002, two chartered accountants set up a single room in central Bengaluru with a
              shared belief — that the profession deserved more than ticking boxes. They wanted to
              build a practice where judgement, ethics and relationship outlasted any single
              engagement. That ethos still runs the firm today.
            </p>
            <p>
              We have grown to fourteen senior associates and a bench of forty-plus articled
              clerks. We have stayed deliberately small. Each partner personally knows every client
              file under their name. Senior reviewers are senior, not titles handed out.
            </p>
            <h2 className="font-display text-3xl text-primary pt-6">What guides us</h2>
            <ul className="space-y-3">
              <li className="flex gap-4"><span className="text-accent font-display">·</span><span><b className="text-primary">Independence.</b> We say no to engagements that compromise objectivity, even attractive ones.</span></li>
              <li className="flex gap-4"><span className="text-accent font-display">·</span><span><b className="text-primary">Continuity.</b> The partner who pitched is the partner who signs — for as long as you're a client.</span></li>
              <li className="flex gap-4"><span className="text-accent font-display">·</span><span><b className="text-primary">Plain speech.</b> Reports are written for owners and operators, not just for regulators.</span></li>
              <li className="flex gap-4"><span className="text-accent font-display">·</span><span><b className="text-primary">Discretion.</b> What we see in your books stays in your books.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-up">
          {[
            { k: "22+", v: "Years of practice" },
            { k: "480+", v: "Active clients" },
            { k: "9", v: "Industry verticals" },
            { k: "ICAI", v: "Member firm" },
          ].map((s) => (
            <div key={s.v} className="border-t border-border pt-6">
              <div className="font-display text-5xl text-primary">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-[0.2em]">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
