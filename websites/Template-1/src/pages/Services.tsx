import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase, ArrowRight } from 'lucide-react';
import heroServices from '@/assets/hero-services.jpg';

const services = [
  { name: 'Bookkeeping', icon: BookOpen, desc: 'Accurate financial records management to keep your business finances organized and audit-ready.', href: '/services/bookkeeping' },
  { name: 'GST Filing', icon: FileText, desc: 'Complete GST compliance including return filing, reconciliation, and advisory services.', href: '/services/gst-filing' },
  { name: 'Payroll', icon: Users, desc: 'End-to-end payroll processing, compliance, and employee tax management solutions.', href: '/services/payroll' },
  { name: 'Tax Planning', icon: Calculator, desc: 'Strategic tax planning and optimization to minimize liability and maximize savings.', href: '/services/tax-planning' },
  { name: 'Company Formation', icon: Building2, desc: 'Complete business registration, incorporation, and startup compliance services.', href: '/services/company-formation' },
  { name: 'Compliance', icon: Shield, desc: 'Regulatory compliance management across multiple jurisdictions and frameworks.', href: '/services/compliance' },
  { name: 'Audit Services', icon: Search, desc: 'Statutory, internal, and forensic audit services ensuring transparency and trust.', href: '/services/audit-services' },
  { name: 'Financial Advisory', icon: Briefcase, desc: 'Expert advisory on mergers, valuations, fundraising, and strategic planning.', href: '/services/financial-advisory' },
];

const Services = () => (
  <Layout>
    <PageHero
      title="Comprehensive"
      highlight="Services"
      subtitle="Full-spectrum financial services tailored for businesses of every scale."
      image={heroServices}
      breadcrumb={[{ label: 'Services' }]}
    />

    <section className="section-padding">
      <div className="container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.08}>
              <Link to={s.href} className="card-premium p-8 flex gap-6 group h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground font-sans mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-accent gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
