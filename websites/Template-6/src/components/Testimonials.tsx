import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Section } from "@/lib/api";

const Testimonials = ({ data }: { data?: Section }) => {
  const rawCards = (data?.textContent?.items as any[]) || [];
  // Normalise: API uses name/designation, constants use author/role
  const cards = rawCards.slice(0, 3).map((t: any) => ({
    author: t.author || t.name || "Client",
    role: t.role || t.designation || "",
    text: t.text || t.review || "",
    rating: t.rating ?? 5,
    initials: t.initials || (t.author || t.name || "C").substring(0, 2).toUpperCase(),
  }));
  const label = data?.textContent?.label || "";
  const heading = data?.textContent?.heading || "";
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (cards.length <= 1) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [cards.length]);


  return (
    <section
      className="relative py-20 px-6 md:px-[6%] scan-lines noise overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(224,140,46,0.07), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-amber2 tracking-[2px] uppercase block mb-3"
          >
            // {label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-linen leading-[1.1] tracking-[-0.02em] whitespace-pre-wrap"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            {heading}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-px w-20 bg-amber2 mx-auto mt-5 origin-left"
          />
        </div>

        {/* Cards — staggered layout */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-6">
          {cards.map((t, i) => {
            const isActive = active === i;
            const offsets = [0, 32, 16];
            return (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                animate={{
                  scale: isActive ? 1 : i === 1 ? 0.93 : 0.88,
                  opacity: isActive ? 1 : i === 1 ? 0.5 : 0.35,
                }}
                whileHover={!isActive ? { opacity: 0.75, scale: 0.96 } : {}}
                onClick={() => setActive(i)}
                className="relative p-8 cursor-pointer transition-all duration-300 w-full md:w-[360px] flex-shrink-0"
                style={{
                  background: isActive ? "rgba(224,140,46,0.07)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isActive ? "rgba(224,140,46,0.4)" : "rgba(224,140,46,0.12)"}`,
                  backdropFilter: "blur(20px) saturate(160%)",
                  borderRadius: "14px",
                  marginTop: `${offsets[i]}px`,
                  boxShadow: isActive
                    ? "0 0 60px rgba(224,140,46,0.12), 0 24px 60px rgba(0,0,0,0.4)"
                    : "none",
                  minHeight: "280px",
                }}
              >
                {/* Glow dot */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-amber2 animate-pulse-dot" />

                {/* Quote mark */}
                <span className="absolute top-4 left-6 font-heading font-extrabold text-[72px] leading-none select-none"
                  style={{ color: "rgba(224,140,46,0.18)" }}>
                  "
                </span>

                <p className="font-body italic text-[15px] leading-[1.8] mt-10 mb-6"
                  style={{ color: "rgba(245,240,232,0.75)" }}>
                  "{t.text}"
                </p>

                <div className="h-px w-12 mb-4" style={{ background: "rgba(224,140,46,0.15)" }} />

                <div>
                  <span className="font-heading font-semibold text-sm text-linen block">
                    {t.author}
                  </span>
                  <span className="font-mono text-[11px] text-amber2">
                    {t.role}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <motion.svg
                      key={j}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + j * 0.06 }}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#E08C2E"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Progress bar for active */}
                {isActive && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 overflow-hidden rounded-full">
                    <div
                      className="h-full bg-amber2"
                      style={{ animation: "loadBar 4.5s ease-in-out forwards" }}
                      key={`progress-${active}`}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Nav buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={() => setActive((active - 1 + cards.length) % cards.length)}
            className="w-9 h-9 flex items-center justify-center border rounded transition-all duration-200 hover:bg-amber2/10 hover:border-amber2 text-linen/60 hover:text-amber2"
            style={{ borderColor: "rgba(224,140,46,0.25)" }}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={() => setActive((active + 1) % cards.length)}
            className="w-9 h-9 flex items-center justify-center border rounded transition-all duration-200 hover:bg-amber2/10 hover:border-amber2 text-linen/60 hover:text-amber2"
            style={{ borderColor: "rgba(224,140,46,0.25)" }}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
