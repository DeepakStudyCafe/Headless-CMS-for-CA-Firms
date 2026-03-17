import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { FileText, Receipt, ShieldCheck, Building2, BarChart3, Globe } from "lucide-react";
import EditorialHeading from "@/components/ui/EditorialHeading";

const iconMap: Record<string, React.ReactNode> = {
  tax: <FileText size={36} />,
  gst: <Receipt size={36} />,
  audit: <ShieldCheck size={36} />,
  business: <Building2 size={36} />,
  finance: <BarChart3 size={36} />,
  fema: <Globe size={36} />,
};

const cardVariant = {
  initial: { opacity: 0, y: 32, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

const ServiceCard = ({ service, index }: { service: typeof SERVICES[0]; index: number }) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={cardVariant}
      className="group relative bg-surface rounded-lg overflow-hidden cursor-pointer transition-all duration-[350ms]
        hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(42,107,138,0.13)]"
      style={{ minHeight: 240 }}
    >
      {/* Top color bar */}
      <div className="h-[3px] w-full bg-ca-accent-2 transition-all duration-300 group-hover:h-[5px] group-hover:bg-ca-accent-warm" />

      <div className="p-6 flex flex-col h-full">
        {/* Header row: icon left, number right */}
        <div className="flex items-start justify-between mb-3">
          <div className="text-ca-accent-2 transition-all duration-300 group-hover:scale-[1.18] group-hover:-rotate-6 group-hover:text-ca-accent-warm">
            {iconMap[service.icon]}
          </div>
          <span className="font-label text-[11px] text-text-main/[0.08] transition-all duration-300 group-hover:opacity-[0.25] group-hover:scale-110">
            {num}
          </span>
        </div>

        <h3 className="font-body text-[17px] font-semibold text-text-main leading-snug mb-1.5" style={{ textWrap: "balance" }}>
          {service.title}
        </h3>
        <p className="font-body text-[13px] text-text-muted-custom leading-relaxed mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Bottom link */}
        <div className="mt-auto pt-3 border-t border-primary/[0.06]">
          <span className="inline-flex items-center gap-1 font-label text-[12px] text-ca-accent-2 tracking-[0.5px] group-hover:text-ca-accent-2">
            Learn more
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>

      {/* Hover radial gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
        style={{ background: "radial-gradient(ellipse at top left, rgba(42,107,138,0.04), transparent 70%)" }}
      />
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 bg-surface overflow-hidden">
      {/* Large editorial folio background */}
      <span className="absolute top-6 right-8 font-display text-[140px] font-bold text-text-main/[0.04] leading-none pointer-events-none select-none">
        03
      </span>

      <div className="relative z-10 container mx-auto px-6">
        {/* Thin ruled line above heading */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[1px] bg-text-main/[0.12] origin-left mb-8"
        />

        <EditorialHeading
          folio="03"
          label="WHAT WE OFFER"
          heading="Our Core Services"
          headingSize="text-4xl sm:text-5xl lg:text-[72px]"
          className="mb-12"
        />

        {/* 3×2 grid, gap-5 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
