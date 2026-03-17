import { motion } from "framer-motion";

interface EditorialHeadingProps {
  folio: string;
  label: string;
  heading: string;
  headingSize?: string;
  light?: boolean;
  className?: string;
}

const EditorialHeading = ({ folio, label, heading, headingSize = "text-5xl sm:text-6xl lg:text-7xl", light = false, className = "" }: EditorialHeadingProps) => {
  const letters = heading.split("");

  return (
    <div className={`relative ${className}`}>
      {/* Folio number */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <span className={`folio ${light ? "text-surface/30" : ""}`}>{folio}</span>
        <motion.span
          className={`folio-dash ${light ? "!bg-surface/20" : ""}`}
          initial={{ width: 0 }}
          whileInView={{ width: 24 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ display: "inline-block", height: 1, verticalAlign: "middle", marginLeft: 8 }}
        />
      </motion.div>

      {/* Label */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-label text-xs tracking-[3px] mb-3 block ${light ? "text-ca-accent-2" : "text-ca-accent-2"}`}
      >
        {label}
      </motion.span>

      {/* Heading with letter-by-letter 3D flip */}
      <h2 className={`font-display ${headingSize} font-semibold ${light ? "text-surface" : "text-text-main"} leading-[1.1]`}>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.025, duration: 0.4, ease: "easeOut" }}
            className="inline-block"
            style={{ transformOrigin: "bottom", perspective: 800 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h2>

      {/* Ruled line under heading */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className={`h-[1px] w-16 mt-4 origin-left ${light ? "bg-ca-accent-2/40" : "bg-ca-accent-2"}`}
      />
    </div>
  );
};

export default EditorialHeading;
