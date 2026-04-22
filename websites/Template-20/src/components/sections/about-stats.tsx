import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Years in Practice" },
  { value: "40+", label: "CA Professionals" },
  { value: "12", label: "Cities Served" },
  { value: "₹2,800Cr", label: "Tax Advisory Handled" },
];

export function AboutStatsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container-pro">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            About the firm
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-semibold text-primary leading-tight">
            Built on integrity. <span className="italic">Run on diligence.</span>
          </h2>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-border" />
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <div className="h-px w-12 bg-border" />
          </div>

          <p className="mt-8 text-subtext text-base lg:text-lg leading-relaxed">
            Founded in 1999, ABC & Associates has grown from a two-partner Mumbai practice
            into a multi-disciplinary firm of chartered accountants, tax counsels and
            advisory specialists. We work quietly, methodically and with an unwavering
            commitment to professional independence — the way the profession was meant
            to be practised.
          </p>
          <p className="mt-5 text-subtext leading-relaxed">
            Our clients range from venture-backed startups and family-run manufacturing
            houses to listed companies and overseas subsidiaries. What they share is a
            preference for advisors who pick up the phone, do the work themselves, and
            stand behind every signed report.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-white p-6 lg:p-8 text-center hover:border-accent transition-colors"
            >
              <p className="text-3xl lg:text-4xl font-semibold text-primary tracking-tight">
                {s.value}
              </p>
              <div className="mx-auto mt-3 h-px w-8 bg-accent" />
              <p className="mt-3 text-xs lg:text-sm text-subtext uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
