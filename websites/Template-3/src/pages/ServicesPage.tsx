import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import heroServices from '@/assets/hero-services.jpg';

const services = [
  { name: 'Bookkeeping', href: '/services/bookkeeping', icon: BookOpen, desc: 'Accurate financial record-keeping, bank reconciliations, and periodic reporting for complete financial visibility.' },
  { name: 'GST Filing', href: '/services/gst-filing', icon: FileText, desc: 'Timely and accurate GST return filing with compliance monitoring and advisory on GST regulations.' },
  { name: 'Payroll', href: '/services/payroll', icon: Users, desc: 'End-to-end payroll management including salary processing, TDS, PF/ESI compliance, and reporting.' },
  { name: 'Tax Planning', href: '/services/tax-planning', icon: Calculator, desc: 'Strategic tax planning and optimization services to minimize liabilities while ensuring compliance.' },
  { name: 'Company Formation', href: '/services/company-formation', icon: Building2, desc: 'Seamless company registration, LLP formation, and incorporation services with complete documentation.' },
  { name: 'Compliance', href: '/services/compliance', icon: Shield, desc: 'Comprehensive regulatory compliance services including ROC filings, annual returns, and statutory audits.' },
  { name: 'Audit Services', href: '/services/audit-services', icon: Search, desc: 'Independent audit and assurance services ensuring transparency and accuracy in financial reporting.' },
  { name: 'Financial Advisory', href: '/services/financial-advisory', icon: TrendingUp, desc: 'Expert financial advisory covering valuations, due diligence, mergers, and strategic planning.' },
];

const ServicesPage = () => {
  return (
    <div>
      <PageHero title="Our Services" breadcrumb="Services" image={heroServices} />
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">Comprehensive financial services to support every aspect of your business.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
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
