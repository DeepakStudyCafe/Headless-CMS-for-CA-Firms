import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28">
      {/* soft blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full soft-blur-blob bg-primary/30" />
      <div className="absolute top-40 -right-20 w-[28rem] h-[28rem] rounded-full soft-blur-blob bg-secondary/20" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-secondary">
            <span className="h-px w-8 bg-primary" /> Est. 2008
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance text-foreground">
            Trusted Chartered <em className="not-italic text-primary">Accountant</em> Services
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Quiet expertise for ambitious businesses. We blend craft and precision to keep your
            numbers in graceful order — so you can focus on what matters most.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium transition-all hover:bg-secondary hover:scale-[1.03]"
            >
              Get Consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-border bg-background/60 backdrop-blur px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Explore Services →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-lift)]">
            <img
              src={heroImg}
              alt="Professional chartered accountant"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-[var(--shadow-soft)] px-5 py-4 border border-border"
          >
            <div className="text-2xl font-display text-primary">15+ yrs</div>
            <div className="text-xs text-muted-foreground mt-0.5">of trusted practice</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
