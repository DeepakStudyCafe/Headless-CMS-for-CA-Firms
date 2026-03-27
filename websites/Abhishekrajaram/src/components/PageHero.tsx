import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  image: string;
  breadcrumb?: { label: string; href?: string }[];
}

const PageHero = ({ title, highlight, subtitle, image, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-end overflow-hidden">
      {/* Background */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(6,20,60,0.9) 0%, rgba(8,24,56,0.78) 50%, rgba(12,30,72,0.65) 100%)' }}
      />

      {/* Content */}
      <div className="container-max mx-auto px-4 md:px-8 relative z-10 pb-12 md:pb-16 pt-32">
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-xs text-white/50 mb-4"
          >
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {item.href ? (
                  <Link to={item.href} className="hover:text-white/80 transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-white/80">{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="heading-xl text-white mb-4">
            {title}{' '}
            {highlight && <span className="text-[hsl(var(--gold))]">{highlight}</span>}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
