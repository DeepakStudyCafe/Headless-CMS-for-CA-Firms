import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "@/lib/constants";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { Check } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 bg-ink overflow-hidden">
      {/* BG image right half */}
      <div
        className="absolute top-0 right-0 bottom-0 w-1/2 opacity-[0.18] bg-cover bg-center mix-blend-screen hidden lg:block"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920)" }}
      />

      <div ref={ref} className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={fadeLeft} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase">Why Choose Us</span>
            <h2 className="font-display text-4xl lg:text-[58px] text-cream font-semibold mt-3 mb-2 leading-tight">
              A Legacy of Trust & Precision
            </h2>
            <p className="font-display text-xl italic text-gold/80 mb-6">Where numbers meet integrity.</p>
            <p className="font-body text-base text-mist leading-relaxed mb-8">
              For nearly two decades, we've been the trusted financial partner for businesses across India.
              Our team of ICAI-certified professionals combines deep technical expertise with a
              personalized approach to deliver exceptional results.
            </p>

            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className={`flex gap-4 p-4 rounded-sm ${f.highlight ? "bg-copper/20 border border-copper/30" : ""}`}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-gold" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-semibold text-cream">{f.title}</span>
                    <p className="font-body text-sm text-mist mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 font-body text-sm text-gold border border-gold/40 rounded-sm hover:bg-gold hover:text-primary-foreground transition-all duration-300"
            >
              Discover Our Story →
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={fadeRight} initial="hidden" animate={inView ? "visible" : "hidden"} className="relative">
            {/* Offset frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-sm" />
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
                alt="Professional handshake representing trust and partnership"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gold rounded-full flex items-center justify-center">
              <div className="text-center">
                <span className="block font-display text-lg font-bold text-primary-foreground leading-none">Est.</span>
                <span className="block font-display text-sm font-semibold text-primary-foreground">2005</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
