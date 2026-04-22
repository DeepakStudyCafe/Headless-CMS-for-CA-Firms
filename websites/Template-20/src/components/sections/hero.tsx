import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Award, Users, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-ca.jpg";

const stats = [
  { icon: Award, label: "Years of Experience", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "1,200+" },
  { icon: Building2, label: "Businesses Trusted", value: "350+" },
  { icon: ShieldCheck, label: "Compliance Score", value: "99.8%" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* Decorative background */}
      <div className="absolute inset-0 grain opacity-60" aria-hidden />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-accent-soft/40 blur-3xl" aria-hidden />

      <div className="container-pro relative pt-16 pb-10 lg:pt-24 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-subtext">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Chartered Accountants · Est. 1999
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-semibold text-primary">
              Precision in numbers.
              <br />
              <span className="italic text-secondary">Confidence</span> in decisions.
            </h1>

            <p className="mt-6 max-w-xl text-base lg:text-lg text-subtext leading-relaxed">
              ABC & Associates partners with founders, family businesses and enterprises to
              deliver audit, taxation and advisory services that stand up to scrutiny — and
              accelerate growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:bg-accent/90 transition"
              >
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-primary hover:border-accent hover:text-accent transition"
              >
                <PlayCircle className="h-4 w-4" /> Our Services
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-accent/20 via-transparent to-secondary/20 blur-xl" aria-hidden />
              <div className="relative rounded-[24px] overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                <img
                  src={heroImage}
                  alt="Chartered Accountant team in consultation"
                  className="w-full h-[460px] object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[var(--shadow-lift)] border border-border"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-subtext">ICAI Registered</p>
                  <p className="text-sm font-semibold text-primary">Audit-Ready Practice</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-20 rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-6 lg:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-semibold text-primary tracking-tight">{s.value}</p>
                  <p className="text-xs lg:text-sm text-subtext">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
