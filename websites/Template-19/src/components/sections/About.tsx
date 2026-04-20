import { motion } from "framer-motion";

const STATS = [
  { v: "20+", l: "Years in Practice" },
  { v: "500+", l: "Clients Served" },
  { v: "12", l: "Senior Partners" },
  { v: "₹2,000Cr+", l: "Audited Annually" },
];

export function About() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-px max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-blue">About the Firm</div>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-deep">
            A practice built on integrity, depth and discretion.
          </h2>
          <p className="mt-6 text-lg text-subtext leading-relaxed">
            Founded in 2004, ABC &amp; Associates serves promoters, listed companies and global subsidiaries with the rigour of a Big Four firm and the intimacy of a family-led practice. Our partners lead every engagement personally.
          </p>

          <ul className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
            {[
              "Partner-led engagements",
              "ICAI registered, peer-reviewed",
              "Cross-border tax expertise",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 p-4 rounded-lg border border-border-soft bg-white">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-blue shrink-0" />
                <span className="text-sm font-medium text-navy-deep">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-soft rounded-2xl overflow-hidden border border-border-soft"
        >
          {STATS.map((s) => (
            <div key={s.l} className="bg-white p-6 lg:p-8">
              <div className="text-3xl lg:text-4xl font-bold text-navy-deep font-display">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-subtext">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
