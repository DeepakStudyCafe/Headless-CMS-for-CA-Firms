import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const openings = [
  { title: "CA Article Assistant", type: "Full-time · Articleship", loc: "Mumbai" },
  { title: "Senior Audit Associate", type: "Full-time · 3+ years", loc: "Mumbai" },
  { title: "Tax Consultant", type: "Full-time · 2+ years", loc: "Pune" },
];

export function Career() {
  return (
    <section id="career" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-gold-deep">Careers</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
              Build your career
              <br />
              with us.
            </h2>
            <p className="mt-6 text-base md:text-lg text-subink leading-relaxed">
              We're always looking for committed professionals and CA aspirants who share our
              passion for excellence. Join a firm where learning, mentorship and integrity come
              first.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium transition-colors hover:bg-gold-deep"
            >
              Send Your Resume
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="space-y-3">
            {openings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex items-center justify-between gap-4 bg-background border border-hairline rounded-xl p-5 md:p-6 transition-all hover:border-gold-deep hover:shadow-soft"
              >
                <div>
                  <h3 className="font-display text-lg md:text-xl text-foreground">{o.title}</h3>
                  <div className="mt-1 text-sm text-subink">
                    {o.type} · {o.loc}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-foreground group-hover:bg-foreground group-hover:text-background transition-colors"
                  aria-label={`Apply for ${o.title}`}
                >
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
