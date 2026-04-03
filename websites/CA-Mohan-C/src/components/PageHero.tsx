import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  image: string;
}

const PageHero = ({ title, breadcrumb, image }: PageHeroProps) => {
  return (
    <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 page-hero-overlay" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{ color: 'hsl(var(--primary-foreground))' }}>
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm" style={{ color: 'hsl(var(--primary-foreground) / 0.8)' }}>
          <Link to="/" className="hover:underline">Home</Link>
          <ChevronRight size={14} />
          <span>{breadcrumb}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default PageHero;
