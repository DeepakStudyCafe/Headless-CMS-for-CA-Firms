import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { useRef, MouseEvent } from "react";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-20 px-6 md:px-[6%] scan-lines noise"
      style={{ background: "#0D0D0D" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-amber2 tracking-[2px] block mb-3"
          >
            {"// PRACTICE_AREAS"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-linen leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            What We Excel At
          </motion.h2>
        </div>

        {/* Amber line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-amber2 mb-8 origin-left"
        />

        {/* Grid with amber gap lines */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: "#E08C2E" }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      className={`relative group p-8 cursor-default transition-all duration-300 hover:-translate-y-1 ${
        service.featured
          ? "md:col-span-2 md:row-span-2"
          : ""
      }`}
      style={{
        background: "#111111",
        borderRadius: 0,
      }}
    >
      {/* Cursor radial glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(200px circle at var(--mx, 50%) var(--my, 50%), rgba(224,140,46,0.06), transparent)",
        }}
      />

      {/* Hover border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          outline: "1px solid rgba(224,140,46,0.4)",
          boxShadow: "0 0 0 1px rgba(224,140,46,0.3), 0 20px 50px rgba(0,0,0,0.5)",
        }}
      />

      {/* Number */}
      <span className="absolute top-4 right-4 font-mono text-[11px] text-amber2/40 group-hover:text-amber2 group-hover:scale-[1.2] transition-all duration-300 origin-center">
        {service.id}
      </span>

      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-amber2 group-hover:scale-110 group-hover:rotate-[6deg] ${
          service.featured ? "w-12 h-12 text-3xl" : "w-11 h-11 text-[22px]"
        }`}
        style={{
          background: "rgba(224,140,46,0.08)",
          borderRadius: "8px",
        }}
      >
        <span className="text-linen/60 group-hover:text-charcoal-deep transition-colors duration-300">
          {service.icon}
        </span>
      </div>

      {/* Title */}
      <h3 className={`font-heading font-semibold text-linen group-hover:text-amber2-bright transition-colors duration-300 mb-3 ${
        service.featured ? "text-xl" : "text-lg"
      }`}>
        {service.title}
      </h3>

      {/* Description */}
      <p className={`font-body font-light leading-[1.75] ${
        service.featured ? "text-sm max-w-md" : "text-[13px]"
      }`} style={{ color: "rgba(245,240,232,0.45)" }}>
        {service.description}
      </p>

      {/* Learn More */}
      <span className="inline-block mt-5 font-heading font-medium text-[13px] text-amber2/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
        Learn More →
      </span>

      {/* Shimmer sweep on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-300">
        <div
          className="absolute left-0 right-0 h-8"
          style={{
            background: "linear-gradient(180deg, rgba(224,140,46,0.08), transparent)",
            animation: "scanSweep 0.5s ease-out forwards",
          }}
        />
      </div>
    </motion.div>
  );
};

export default ServicesSection;
