import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/lib/constants";
import EditorialHeading from "@/components/ui/EditorialHeading";

const WhyChooseUs = () => {
  return (
    <section className="relative py-28 bg-ca-bg overflow-hidden editorial-texture">
      <div className="container mx-auto px-6">
        {/* Folio */}
        <EditorialHeading
          folio="04"
          label="WHY CHOOSE US"
          heading="Proven Track Record"
          headingSize="text-4xl sm:text-5xl lg:text-[56px]"
          className="mb-16 max-w-2xl"
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left — narrow pull quote column (30%) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 relative"
          >
            {/* Large italic pull quote — overlaps into right column */}
            <div className="relative lg:-mr- z-10">
              <span className="font-display text-[80px] text-ca-accent-2/15 leading-none block -mb-8">"</span>
              <blockquote className="font-display text-2xl sm:text-[28px] italic text-text-main leading-[1.6] typewriter-cursor">
                We combine deep domain expertise with a client-first approach, delivering results that go beyond compliance.
              </blockquote>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#contact"
                className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 bg-ca-accent text-surface font-body font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-ca-accent/90 active:scale-95"
              >
                Get Started →
              </a>
              <span className="font-label text-[10px] text-text-muted-custom border border-primary/15 px-3 py-1.5">
                ISO 9001 Certified
              </span>
            </div>
          </motion.div>

          {/* Center — Editorial footnotes (features) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="space-y-0">
              {WHY_CHOOSE_US.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="group py-5 border-b border-primary/10 last:border-b-0"
                >
                  <div className="flex gap-4">
                    <span className="font-label text-[10px] text-ca-accent-2/60 pt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-body text-sm font-semibold text-text-main mb-1 group-hover:text-ca-accent transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="font-body text-xs text-text-muted-custom leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image with editorial caption */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 relative"
          >
            <div className="relative overflow-hidden">
              {/* Decorative offset frame */}
              <div className="absolute inset-0 border border-ca-accent-2/30 translate-x-3 translate-y-3 z-0" />
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=85"
                  alt="Professional handshake"
                  className="w-full h-[420px] object-cover editorial-image transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Editorial caption bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-deep/90 px-5 py-3 translate-y-full hover:translate-y-0 transition-transform duration-400 group-hover:translate-y-0"
                  style={{ transition: "transform 0.4s ease" }}
                >
                  <p className="font-body text-xs text-surface/70">Building lasting partnerships through trust and expertise</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-surface px-5 py-3 shadow-xl z-10"
            >
              <p className="font-body text-sm font-semibold text-text-main">500+ Clients Trust Us</p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
