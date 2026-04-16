import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import SectionDivider from "./SectionDivider";

export default function CTASection() {
  return (
    <>
      <SectionDivider to="dark" />
      <section id="contact" className="relative bg-charcoal py-24 md:py-32 overflow-hidden gold-grain">
        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gold-gradient opacity-[0.07] pointer-events-none" />
        <div className="absolute inset-0 dot-pattern pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold"
          >
            ✦ Let's Connect ✦
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6 leading-tight"
          >
            Ready to Secure Your<br />Financial Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-white/40 mb-12 max-w-2xl mx-auto text-sm"
          >
            Partner with Vanguard & Co. for expert financial guidance. Let's build your success story together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="shimmer-btn px-12 py-4 text-charcoal font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+919999999999"
              className="border border-gold/40 text-gold px-12 py-4 font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-gold hover:text-charcoal transition-all duration-300 inline-flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
