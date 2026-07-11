import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  image: string;
  subtitle?: string;
}

const PageHero = ({ title, breadcrumbs, image, subtitle }: PageHeroProps) => {
  return (
    <section className="relative h-[380px] md:h-[440px] flex items-end overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 page-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
      <div className="container relative z-10 pb-14">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2 text-primary-foreground/60 text-xs uppercase tracking-wider mb-4"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="w-3 h-3" />}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-accent transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-accent">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-primary-foreground/70 mt-3 max-w-xl text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
