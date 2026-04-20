import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Award, Users, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-ca.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-px max-w-7xl mx-auto pt-16 lg:pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-3.5 py-1.5 text-xs font-medium text-navy-deep shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              Trusted by 500+ businesses across India
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-6 text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.05] text-navy-deep">
              Precision in <span className="text-accent-blue">numbers.</span>
              <br />
              Confidence in <span className="relative">
                decisions.
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-accent-light/40 rounded-full" />
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base lg:text-lg text-subtext leading-relaxed">
              ABC &amp; Associates is a chartered accountancy firm delivering audit, tax and advisory services that help businesses scale with clarity and compliance.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-accent-blue px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-navy-deep transition-all hover:shadow-lift"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border-soft bg-white px-6 py-3.5 text-sm font-semibold text-navy-deep hover:border-navy-deep transition"
              >
                <PlayCircle className="h-4 w-4 text-accent-blue" />
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-3xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-soft shadow-[var(--shadow-lift)]">
                <img src={heroImg} alt="Chartered accountants at work" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -left-6 bottom-10 hidden md:flex flex-col bg-white rounded-xl shadow-[var(--shadow-card)] border border-border-soft p-4 w-56">
                <div className="text-[11px] uppercase tracking-wider text-subtext">Avg. Compliance</div>
                <div className="mt-1 text-2xl font-bold text-navy-deep">99.8%</div>
                <div className="mt-2 h-1.5 w-full bg-border-soft rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-accent-blue rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom info strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-border-soft bg-white shadow-[var(--shadow-card)] overflow-hidden"
        >
          {[
            { icon: Award, label: "Years of Experience", value: "20+" },
            { icon: Users, label: "Active Clients", value: "500+" },
            { icon: ShieldCheck, label: "Trust & Compliance", value: "ICAI" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-5 p-6 lg:p-7 ${i < 2 ? "sm:border-r border-border-soft" : ""}`}
            >
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-navy-deep text-accent-light">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-deep font-display">{s.value}</div>
                <div className="text-sm text-subtext">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
