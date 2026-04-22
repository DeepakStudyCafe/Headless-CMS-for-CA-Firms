import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "CA Anil Bhargava",
    role: "Managing Partner",
    spec: "Audit & Assurance",
    initials: "AB",
  },
  {
    name: "CA Priya Menon",
    role: "Partner — Taxation",
    spec: "Direct & Indirect Tax",
    initials: "PM",
  },
  {
    name: "CA Rahul Verma",
    role: "Partner — Advisory",
    spec: "Business & CFO Advisory",
    initials: "RV",
  },
  {
    name: "Sneha Kapoor",
    role: "Senior Tax Consultant",
    spec: "GST & Compliance",
    initials: "SK",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-gold-deep">Our Team</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
              Experienced professionals at your service.
            </h2>
          </div>
          <p className="text-base text-subink leading-relaxed max-w-md">
            Meet the partners and senior consultants behind ABC & Associates — qualified
            chartered accountants committed to your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-surface border border-hairline rounded-xl overflow-hidden transition-all hover:shadow-soft"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-beige to-surface flex items-center justify-center border-b border-hairline">
                <span className="font-display text-6xl text-gold-deep/70">{m.initials}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-foreground">{m.name}</h3>
                <div className="mt-1 text-sm text-gold-deep">{m.role}</div>
                <div className="mt-1 text-xs text-subink">{m.spec}</div>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-subink hover:text-gold-deep hover:border-gold-deep transition-colors"
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href="#contact"
                    aria-label="Email"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-subink hover:text-gold-deep hover:border-gold-deep transition-colors"
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
