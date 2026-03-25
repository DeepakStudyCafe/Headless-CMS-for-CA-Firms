import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionDivider from "./SectionDivider";

export default function WhyChooseUs({ data }: { data?: any }) {
  const headingArr = data?.textContent?.heading ? data.textContent.heading.split('\n') : [];
  const description = data?.textContent?.description;
  const features = data?.textContent?.features || [];
  const imgUrl = data?.imageUrl || "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800";
  const label = data?.textContent?.label;
  const cta = data?.textContent?.cta;

  if (!features || features.length === 0) return null;

  return (
    <>
      <SectionDivider to="white" />
      <section id="about" className="bg-white py-20 md:py-28 overflow-hidden relative gold-grid">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold">✦ {label} ✦</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mt-3 mb-6 leading-[1.1] gold-accent-line">
              {headingArr[0]}<br />{headingArr[1] || ''}
            </h2>
            <p className="font-sans text-warm-gray text-sm leading-relaxed mb-8 max-w-lg">
              {description}
            </p>

            <div className="flex flex-col gap-4">
              {features.map((item: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className={`flex items-start gap-3 p-3 rounded-sm transition-all duration-300 hover:bg-gold/5 ${
                    i === 2 ? "bg-gold/10 border-l-4 border-gold" : ""
                  }`}
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-charcoal" strokeWidth={3} />
                  </div>
                  <span className="font-sans text-charcoal text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="shimmer-btn inline-block mt-8 px-8 py-4 text-charcoal font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
            >
              {cta}
            </motion.a>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gold/30 z-0" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-gold/15 z-0" />
            <div className="relative z-10 overflow-hidden group">
              <img
                src={imgUrl}
                alt="Professional team collaboration"
                className="w-full h-[400px] md:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
