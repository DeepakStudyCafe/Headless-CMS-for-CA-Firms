import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { insights } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const InsightsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" className="relative py-24 bg-ink overflow-hidden">
      <div ref={ref} className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase">Latest Insights</span>
          <div className="flex items-start gap-4 mt-3">
            <div className="w-1 h-14 bg-gold mt-1" />
            <h2 className="font-display text-4xl lg:text-6xl text-cream font-semibold">Knowledge Hub</h2>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {insights.map((post, i) => (
            <motion.article
              key={post.title}
              custom={i}
              variants={fadeUp}
              className="group cursor-pointer border border-gold/10 rounded-sm overflow-hidden hover:border-gold/40 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gold text-primary-foreground font-mono-label text-[10px] tracking-[1px] uppercase rounded-sm mb-3">
                  {post.category}
                </span>
                <h3 className="font-display text-xl text-cream font-semibold mb-2 group-hover:underline decoration-gold underline-offset-4">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-mist">
                  {post.date} · {post.readTime}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;
