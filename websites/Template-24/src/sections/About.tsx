import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Tax planning & advisory for individuals and corporates",
  "Statutory, internal and tax audits across industries",
  "GST, ROC and regulatory compliance management",
  "CFO advisory, MIS and business strategy support",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-gold-deep">About the Firm</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-foreground">
              A trusted partner in
              <br /> taxation, audit & advisory.
            </h2>
            <div className="mt-6 h-px w-16 bg-gold-deep" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base md:text-lg text-subink leading-relaxed">
              ABC & Associates is a chartered accountancy firm with over two decades of practice
              serving businesses, startups, and individuals. Our team of qualified Chartered
              Accountants combines technical expertise with practical insight to deliver
              tax-efficient, compliant and growth-oriented financial solutions.
            </p>
            <p className="mt-5 text-base text-subink leading-relaxed">
              We believe in long-term relationships built on transparency, accuracy, and timely
              service. From routine compliance to complex advisory engagements, our clients trust
              us to safeguard their financial interests.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-deep/10 text-gold-deep">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-base text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
