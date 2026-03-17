import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative py-24 px-6 md:px-[6%] overflow-hidden noise"
      style={{ background: "#E08C2E" }}
    >
      {/* Background decorative text */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-extrabold pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: "clamp(100px, 20vw, 180px)",
          color: "rgba(26,26,26,0.06)",
          lineHeight: 1,
        }}
      >
        CONSULT
      </span>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[3px] block mb-5"
          style={{ color: "rgba(26,26,26,0.5)" }}
        >
          {"// NEXT_STEP"}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold text-charcoal-void leading-[1.1] tracking-[-0.02em] mb-5"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          Ready to Transform Your Finances?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-body font-light text-[17px] max-w-[480px] mx-auto mb-8"
          style={{ color: "rgba(26,26,26,0.65)" }}
        >
          Take the first step towards financial clarity. Our experts are ready
          to craft a strategy tailored to your ambitions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3.5 mb-8"
        >
          <a
            href="#contact"
            className="btn-shimmer inline-block bg-charcoal-deep text-linen font-heading font-semibold text-sm px-8 py-3.5 rounded hover:bg-charcoal-void hover:-translate-y-0.5 transition-all duration-250"
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.boxShadow = "none";
            }}
          >
            Book Free Consultation
          </a>
          <a
            href="tel:+919876543210"
            className="inline-block font-heading font-semibold text-sm px-8 py-3.5 rounded transition-all duration-200 hover:bg-charcoal-void/10"
            style={{
              border: "1.5px solid rgba(26,26,26,0.35)",
              color: "#1A1A1A",
            }}
          >
            Call Us Now
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-mono text-[11px] tracking-wider"
          style={{ color: "rgba(26,26,26,0.5)" }}
        >
          Response within 24 hours · No obligation
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
