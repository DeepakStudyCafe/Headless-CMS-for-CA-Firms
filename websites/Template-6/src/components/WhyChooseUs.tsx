import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "@/lib/api";


const WhyChooseUs = ({ data }: { data?: Section }) => {
  const label = data?.textContent?.label || "";
  const heading = data?.textContent?.heading || "";
  const quote = data?.textContent?.subheading || "";
  const badge = data?.textContent?.badge || "";
  const image = data?.imageUrl || "";

  const rawFeatures = (data?.textContent?.features as any[]) || [];
  const features = rawFeatures.map((f: any, i: number) => {
    if (typeof f === 'string') {
      return { num: String(i + 1).padStart(2, '0'), title: f, desc: "" };
    }
    return {
      num: f.num || String(i + 1).padStart(2, '0'),
      title: f.title || f.name || "",
      desc: f.desc || f.description || "",
    };
  });

  return (
    <section className="relative py-20 px-6 md:px-[6%]" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-[10px] text-amber2 tracking-[2px] uppercase block mb-3">
              // {label}
            </span>
            <h2
              className="font-heading font-bold text-charcoal-deep leading-[1.1] tracking-[-0.02em] mb-4 whitespace-pre-wrap"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              {heading}
            </h2>
            <p className="font-body italic text-base mb-5 whitespace-pre-wrap" style={{ color: "rgba(26,26,26,0.6)" }}>
              "{quote}"
            </p>
            <div className="h-px w-[60px] bg-amber2 mb-6" />

            {/* Feature rows */}
            <div className="space-y-0">
              {features.map((f, i) => (
                <motion.div
                  key={f.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 py-4 group cursor-default transition-all duration-250 hover:translate-x-2 hover:bg-amber2/[0.04] px-2 -mx-2 rounded"
                  style={{ borderBottom: "1px solid rgba(44,44,44,0.07)" }}
                >
                  <span className="font-heading font-bold italic text-2xl text-amber2 group-hover:scale-[1.15] transition-transform duration-250 shrink-0 mt-0.5">
                    {f.num}
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-base text-charcoal-deep mb-1">
                      {f.title}
                    </h4>
                    {f.desc && (
                      <p className="font-body font-light text-sm" style={{ color: "rgba(26,26,26,0.55)" }}>
                        {f.desc}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-block mt-6 font-heading font-medium text-sm text-amber2 hover:tracking-wider transition-all duration-300 group"
            >
              Discover Our Story →
              <span className="block h-px bg-amber2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-0.5" />
            </Link>
          </motion.div>

          {/* Right column — image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Gold offset frame */}
            <div
              className="absolute -inset-3 pointer-events-none z-0"
              style={{
                border: "1.5px solid rgba(224,140,46,0.3)",
                borderRadius: "14px",
              }}
            />
            <div className="relative overflow-hidden rounded-xl z-10 group">
              <img
                src={image}
                alt="Professional team collaboration"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-4 left-6 z-20 px-5 py-2.5 font-heading font-semibold text-[13px] text-charcoal-void"
              style={{
                background: "#E08C2E",
                borderRadius: "6px",
              }}
            >
              {badge}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
