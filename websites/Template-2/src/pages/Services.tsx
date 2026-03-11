import { Link } from 'react-router-dom';
import { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

const services = [
  { name: 'Bookkeeping', slug: 'bookkeeping', icon: BookOpen, desc: 'Accurate financial record management and reporting to keep your business on track.' },
  { name: 'GST Filing', slug: 'gst-filing', icon: FileText, desc: 'Timely and accurate GST compliance, return filing, and advisory services.' },
  { name: 'Payroll', slug: 'payroll', icon: Users, desc: 'End-to-end payroll processing, statutory compliance, and employee management.' },
  { name: 'Tax Planning', slug: 'tax-planning', icon: Calculator, desc: 'Strategic tax optimization and planning to maximize your savings legally.' },
  { name: 'Company Formation', slug: 'company-formation', icon: Building2, desc: 'Complete business incorporation, registration, and setup services.' },
  { name: 'Compliance', slug: 'compliance', icon: Shield, desc: 'Regulatory compliance management across all statutory requirements.' },
  { name: 'Audit Services', slug: 'audit-services', icon: Search, desc: 'Comprehensive statutory, internal, and tax audit services.' },
  { name: 'Financial Advisory', slug: 'financial-advisory', icon: TrendingUp, desc: 'Expert guidance for mergers, acquisitions, and strategic finance decisions.' },
];

const Services = () => {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Our Expertise</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Professional <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">
              Comprehensive financial services tailored to meet the needs of modern businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.06}>
                <Link to={`/services/${s.slug}`} className="card-premium p-8 flex gap-5 group h-full">
                  <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <s.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                    <span className="text-xs font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
