import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const InsightsSection = ({ data }: { data?: any }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const tc = data?.textContent || {};
  const label = tc.label || 'Latest Insights';
  const heading = tc.heading || 'Knowledge Hub';
  const DEFAULT_INSIGHTS = [
    { category: "Tax Planning", title: "New Tax Regime 2025: What It Means for Your Business", date: "Mar 12, 2025", readTime: "5 min read", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600" },
    { category: "GST Updates", title: "Key GST Changes Every Business Owner Must Know", date: "Mar 8, 2025", readTime: "4 min read", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600" },
    { category: "Advisory", title: "Building a Financially Resilient Business in 2025", date: "Mar 1, 2025", readTime: "6 min read", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" },
  ];
  const insights = (tc.items || DEFAULT_INSIGHTS).map((p: any) => ({
    category: p.category || '',
    title: p.title || '',
    date: p.date || '',
    readTime: p.readTime || p.read_time || '',
    image: p.image || p.imageUrl || '',
  }));

  return (
    <section id="insights" className="relative py-24 bg-ink overflow-hidden">
      <div ref={ref} className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase">{label}</span>
          <div className="flex items-start gap-4 mt-3">
            <div className="w-1 h-14 bg-gold mt-1" />
            <h2 className="font-display text-4xl lg:text-6xl text-cream font-semibold">{heading}</h2>
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
