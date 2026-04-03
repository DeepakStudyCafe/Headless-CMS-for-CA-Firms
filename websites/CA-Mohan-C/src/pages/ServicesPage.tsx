import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const ServicesPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  useEffect(() => {
    getPageData('services').then((res) => setPageData(mapData(res))).catch(console.error);     
  }, []);
  if (!pageData) return <FullPageLoader />;

  return (
    <div>
      <PageHero title="Our Services" breadcrumb="Services" image={pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || `${(import.meta.env.VITE_API_URL || '').replace(/\/api$/, '')}/uploads/services-hero.jpg`} />
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'services-header')?.textContent?.heading}</h2>
          <p className="section-subtitle">{pageData?.sections?.find((s: any) => s.type === 'services-header')?.textContent?.subheading}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {(pageData?.sections?.find((s: any) => s.type === 'services-section')?.textContent?.items || []).map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={s.href} className="card-premium p-6 flex gap-5 h-full group block">
                <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <s.icon size={24} style={{ color: 'hsl(var(--primary-foreground))' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground flex items-center gap-2">
                    {s.name} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ServicesPage;
