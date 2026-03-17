import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Calculator, FileCheck, ShieldCheck, Building, TrendingUp, Briefcase } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  calculator: Calculator,
  "file-check": FileCheck,
  "shield-check": ShieldCheck,
  building: Building,
  "trending-up": TrendingUp,
  briefcase: Briefcase,
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 bg-fog overflow-hidden">
      {/* Subtle BG */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center mix-blend-multiply"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920)" }}
      />

      <div ref={ref} className="relative max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono-label text-[11px] text-gold-muted tracking-[3px] uppercase">What We Offer</span>
          <div className="flex items-start gap-4 mt-3">
            <div className="w-1 h-14 bg-gold mt-1" />
            <h2 className="font-display text-4xl lg:text-6xl text-ink font-semibold">Our Core Services</h2>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return <ServiceCard key={service.num} service={service} Icon={Icon} index={i} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  service,
  Icon,
  index,
}: {
  service: (typeof services)[0];
  Icon: React.ElementType;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative p-9 border rounded-sm overflow-hidden cursor-pointer transition-all duration-[350ms] group ${
        hovered
          ? "bg-ink border-gold/40 -translate-y-2.5 shadow-[0_30px_80px_rgba(10,14,23,0.25)]"
          : "bg-white border-gold/15"
      }`}
    >
      {/* Ghost number */}
      <span
        className={`absolute top-4 right-4 font-mono-label text-[120px] leading-none font-bold transition-opacity duration-300 select-none ${
          hovered ? "opacity-[0.05] text-cream" : "opacity-0"
        }`}
      >
        {service.num}
      </span>

      <span className={`font-mono-label text-[11px] tracking-[2px] transition-colors duration-300 ${hovered ? "text-gold" : "text-gold-muted"}`}>
        {service.num}
      </span>

      <Icon
        size={48}
        className={`mt-4 mb-4 transition-colors duration-300 ${hovered ? "text-gold" : "text-ink"}`}
        strokeWidth={1.2}
      />

      <h3 className={`font-display text-2xl font-semibold mb-3 transition-colors duration-300 ${hovered ? "text-cream" : "text-ink"}`}>
        {service.title}
      </h3>

      {/* Divider */}
      <div className={`h-[1.5px] bg-gold mb-4 transition-all duration-300 ${hovered ? "w-10" : "w-0"}`} />

      <p className={`font-body text-[15px] leading-relaxed transition-colors duration-300 ${hovered ? "text-mist" : "text-slate"}`}>
        {service.desc}
      </p>

      <span
        className={`inline-block mt-4 font-body text-sm text-gold transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        Explore →
      </span>
    </motion.div>
  );
};

export default ServicesSection;
