import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — ABC & Associates" },
      { name: "description", content: "Partner-led teams of chartered accountants and specialists." },
      { property: "og:title", content: "Team — ABC & Associates" },
      { property: "og:description", content: "The people whose names are on the file." },
    ],
  }),
  component: Team,
});

const partners = [
  { name: "Aarav Mehta", role: "Managing Partner", bio: "Audit & Assurance · 24 yrs", initials: "AM" },
  { name: "Bhavna Kapoor", role: "Senior Partner", bio: "Direct Tax & TP · 22 yrs", initials: "BK" },
  { name: "Chirag Shah", role: "Partner", bio: "Transactions · 18 yrs", initials: "CS" },
  { name: "Devika Rao", role: "Partner", bio: "Family Office · 16 yrs", initials: "DR" },
  { name: "Eshan Iyer", role: "Partner", bio: "GST & Indirect · 14 yrs", initials: "EI" },
  { name: "Fatima Noor", role: "Partner", bio: "Corporate Advisory · 13 yrs", initials: "FN" },
];

function Team() {
  return (
    <div className="relative">
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">/ The partners</p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl">
              Names on the file. <br/><span className="text-muted-foreground">Not just on the wall.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.005 }}
                className="group relative bg-background p-8 transition hover:bg-surface/60"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface/60 font-display text-lg font-semibold text-brand-bright transition group-hover:border-brand">
                    {p.initials}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    P · {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-brand">{p.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">{p.bio}</p>
                <div className="mt-6 hairline" />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  ICAI Member
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 sm:px-8">
          <Reveal className="col-span-12 md:col-span-5">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">42 professionals. One bench.</h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Behind the partners, a team of chartered accountants, tax specialists, valuation analysts and articled clerks — trained in-house, supervised closely, and held to the same standard the firm is named after.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
