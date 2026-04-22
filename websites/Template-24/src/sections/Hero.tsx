import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-ca.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-36 pb-20 md:pb-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-surface border border-hairline px-3 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
              <span className="text-xs uppercase tracking-[0.18em] text-subink">
                Chartered Accountants · Est. 1998
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground text-balance">
              Professional Chartered
              <br />
              Accountant <span className="text-gold-deep italic">Services</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-subink leading-relaxed max-w-xl">
              ABC & Associates delivers expert taxation, audit, compliance and advisory services
              for businesses, startups and individuals. Trusted counsel built on decades of
              practice and a commitment to clarity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium transition-colors hover:bg-gold-deep"
              >
                Get Consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background text-foreground px-6 py-3.5 text-sm font-medium transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                Our Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["25+", "Years"],
                ["480+", "Clients"],
                ["12", "Industries"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl md:text-3xl text-foreground">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-subink">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[5/6] w-full rounded-2xl overflow-hidden border border-hairline shadow-soft">
              <img
                src={heroImg}
                alt="Chartered accountants reviewing financial documents"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background border border-hairline rounded-xl p-5 shadow-float max-w-[220px]">
              <div className="text-xs uppercase tracking-[0.18em] text-subink">Trusted by</div>
              <div className="mt-2 font-display text-2xl text-foreground">480+ Clients</div>
              <div className="mt-1 text-xs text-subink">Across India</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
