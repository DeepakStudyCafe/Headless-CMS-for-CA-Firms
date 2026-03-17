import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* BG Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920)" }}
      />
      <div className="absolute inset-0 bg-ink/[0.85]" />

      <div ref={ref} className="relative max-w-[800px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase">Take The Next Step</span>
          <h2 className="font-display text-4xl lg:text-7xl text-cream font-semibold mt-4 mb-6 leading-tight">
            Ready to Transform Your Finances?
          </h2>
          <p className="font-body text-lg text-mist mb-10 max-w-[560px] mx-auto">
            Schedule a free consultation with our experts and discover how we can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="shimmer-btn px-10 py-4 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.03] active:scale-[0.97] transition-transform"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:+919876543210"
              className="px-10 py-4 font-body text-sm font-medium text-cream border border-cream/30 rounded-sm hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all duration-300"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
