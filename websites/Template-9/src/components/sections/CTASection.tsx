import { motion } from "framer-motion";
import EditorialHeading from "@/components/ui/EditorialHeading";
import { Section } from "@/lib/api";
import { Link } from "react-router-dom";

const CTASection = ({ data, websiteData }: { data?: Section; websiteData?: any }) => {
  const heading = data?.textContent?.heading || "Ready to Transform Your Financial Future?";
  const subheading = data?.textContent?.subheading || "Schedule a free consultation with our experts and discover how we can help you achieve your financial goals.";
  const cta = data?.textContent?.cta || "Schedule Free Consultation";
  const secondaryCta = data?.textContent?.secondaryCta || `Call: ${websiteData?.phone || "+91 XXXXX XXXXX"}`;
  const label = data?.textContent?.label || "TAKE THE FIRST STEP";
  const phoneHref = websiteData?.phone ? `tel:${String(websiteData.phone).replace(/\s/g, "")}` : "tel:+91XXXXXXXXXX";

  return (
    <section id="contact" className="relative py-8 md:py-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-deep/[0.85]" />

      {/* Floating blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-ca-accent-2/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-ca-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <EditorialHeading
          folio="06"
          label={label}
          heading={heading}
          headingSize="text-4xl sm:text-5xl lg:text-[56px]"
          light
          className="text-center items-center mx-auto max-w-3xl"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-body text-surface/50 mb-10 max-w-lg mx-auto mt-6"
        >
          {subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-ca-accent-2 text-surface font-body font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-ca-accent-2/90 active:scale-95"
          >
            {cta}
          </Link>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 px-8 py-4 border border-surface/30 text-surface font-body font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-surface/10 active:scale-95"
          >
            {secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
