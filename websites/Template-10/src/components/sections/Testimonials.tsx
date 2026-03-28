import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EditorialHeading from "@/components/ui/EditorialHeading";
import { Section } from "@/lib/api";

const Star = () => (
  <svg className="w-3.5 h-3.5 text-tertiary-fixed-dim fill-current" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

const TestimonialCard = ({
  testimonial,
  isActive,
}: {
  testimonial: any;
  isActive: boolean;
}) => (
  <div
    className={`relative rounded-[10px] p-6 transition-all duration-500 flex flex-col h-full ${
      isActive
        ? "shadow-[0_8px_32px_rgba(42,107,138,0.15)] scale-100 opacity-100"
        : "shadow-[0_2px_20px_rgba(0,0,0,0.07)] scale-[0.95] opacity-65"
    }`}
    style={{
      background: "rgba(249,248,246,0.95)",
      filter: isActive ? "none" : "blur(0.5px)",
    }}
  >
    {/* Quote mark */}
    <span className="font-display text-[64px] text-secondary leading-[0.8] block mb-2 select-none" style={{ opacity: 0.35 }}>
      "
    </span>

    {/* Quote text */}
    <p className="font-display italic text-[16px] leading-[1.7] text-on-surface mb-auto line-clamp-4">
      {testimonial.text}
    </p>

    {/* Divider */}
    <div className="h-[1px] bg-secondary/20 my-3" />

    {/* Author row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-surface font-label text-[12px] flex-shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-body text-[14px] font-semibold text-on-surface leading-tight">{testimonial.name}</p>
          <p className="font-body text-[11px] text-on-surface-variant">{testimonial.designation}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = ({ data }: { data?: Section }) => {
  const rawTestimonials = (data?.textContent?.items as any[]) || TESTIMONIALS;
  const testimonials = rawTestimonials
    .map((item: any) => {
      const name = item?.name || item?.author || "Client";
      return {
        ...item,
        text: item?.text || item?.review || item?.description || "",
        name,
        designation: item?.designation || item?.role || "",
        initials: item?.initials || String(name).split(" ").map((w: string) => w[0]).join("").slice(0, 2).toUpperCase() || "CL",
      };
    })
    .filter((item: any) => item.text);
  const heading = data?.textContent?.heading || "What Our Clients Say";
  const label = data?.textContent?.label || "CLIENT STORIES";

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  if (total === 0) return null;

  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setActive((a) => (a + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [paused, total]);

  const getIndex = (offset: number) => (active + offset + total) % total;

  return (
    <section
      className="relative py-16 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Dark background with image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=75)" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,25,35,0.93) 0%, rgba(26,44,61,0.90) 100%)" }} />

      {/* Decorative large quote mark */}
      <span className="absolute top-12 right-12 font-display text-[200px] text-surface/[0.04] leading-none pointer-events-none select-none">
        "
      </span>

      <div className="relative z-10 container mx-auto px-6">
        {/* Top ruled line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[1px] bg-surface/[0.08] origin-right mb-8"
        />

        {/* Heading — right aligned */}
        <div className="flex justify-end mb-12">
          <EditorialHeading
            folio="05"
            label={label}
            heading={heading}
            headingSize="text-3xl sm:text-4xl lg:text-[48px]"
            className="text-right items-end"
            light
          />
        </div>

        {/* Pull quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display italic text-xl text-surface/40 text-right mb-10 max-w-md ml-auto"
        >
          "Trust is built one audit at a time."
        </motion.p>

        {/* 3-card row — desktop */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {[-1, 0, 1].map((offset) => {
            const idx = getIndex(offset);
            const isCenter = offset === 0;
            return (
              <motion.div
                key={`${idx}-${offset}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (offset + 1) * 0.15, duration: 0.5 }}
                className={`transition-transform duration-500 ${isCenter ? "hover:scale-[1.02]" : ""}`}
              >
                <TestimonialCard testimonial={testimonials[idx]} isActive={isCenter} />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              <TestimonialCard testimonial={testimonials[active]} isActive />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-surface/20 flex items-center justify-center text-surface/60 hover:bg-secondary hover:text-surface hover:border-ca-accent transition-all duration-300"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-400 ${
                  i === active ? "w-6 bg-secondary" : "w-2 bg-surface/25"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-surface/20 flex items-center justify-center text-surface/60 hover:bg-secondary hover:text-surface hover:border-ca-accent transition-all duration-300"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Bottom ruled line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[1px] bg-surface/[0.08] origin-left mt-10"
        />
      </div>
    </section>
  );
};

export default Testimonials;



