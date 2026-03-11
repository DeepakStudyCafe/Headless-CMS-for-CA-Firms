import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp, Star, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import heroBg from '@/assets/hero-bg.jpg';
import aboutTeam from '@/assets/about-team.jpg';

const services = [
  { name: 'Bookkeeping', icon: BookOpen, desc: 'Accurate financial record management for informed decisions.', href: '/services/bookkeeping' },
  { name: 'GST Filing', icon: FileText, desc: 'Timely GST compliance and hassle-free returns filing.', href: '/services/gst-filing' },
  { name: 'Payroll', icon: Users, desc: 'Comprehensive payroll processing and management.', href: '/services/payroll' },
  { name: 'Tax Planning', icon: Calculator, desc: 'Strategic tax optimization to maximize your savings.', href: '/services/tax-planning' },
  { name: 'Company Formation', icon: Building2, desc: 'End-to-end business incorporation services.', href: '/services/company-formation' },
  { name: 'Compliance', icon: Shield, desc: 'Regulatory compliance management and advisory.', href: '/services/compliance' },
  { name: 'Audit Services', icon: Search, desc: 'Comprehensive audit and assurance services.', href: '/services/audit-services' },
  { name: 'Financial Advisory', icon: TrendingUp, desc: 'Expert guidance for strategic financial decisions.', href: '/services/financial-advisory' },
];

const industries = [
  'Manufacturing', 'Technology', 'Healthcare', 'Real Estate', 'Retail & E-commerce', 'Financial Services'
];

const testimonials = [
  { name: 'Rajesh Sharma', role: 'CEO, TechVista Solutions', text: 'Apex & Associates transformed our financial operations. Their strategic tax planning saved us 30% in the first year alone.', rating: 5 },
  { name: 'Priya Mehta', role: 'Founder, GreenLeaf Organics', text: 'Professional, thorough, and always available. They handle our compliance so we can focus on growing our business.', rating: 5 },
  { name: 'Amit Patel', role: 'CFO, Horizon Industries', text: 'Their audit services gave us the clarity and confidence we needed to secure our Series B funding.', rating: 5 },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Premium office" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        </div>
        <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-6">Trusted Since 2005</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Excellence in<br />
              <span className="text-gradient-gold">Financial Services</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              We deliver strategic financial solutions with integrity and precision,
              empowering businesses to achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold text-base px-10 py-4">
                Schedule a Consultation <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
              <Link to="/about" className="btn-outline-premium text-base px-10 py-4">
                Discover Our Story
              </Link>
            </div>
          </motion.div>
        </div>
        
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">What We Do</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.08}>
                <Link to={service.href} className="card-premium p-6 block group h-full">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.desc}</p>
                  <span className="text-xs font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary + Stats */}
      <section className="bg-navy text-primary-foreground section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollReveal direction="left">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Two Decades of<br />Financial Excellence
              </h2>
              <div className="gold-accent-line mb-6" />
              <p className="text-primary-foreground/70 leading-relaxed mb-4">
                Founded in 2005, Apex & Associates has grown into one of the most trusted chartered accountancy firms in India, serving over 500 businesses across diverse industries.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                Our team of 50+ qualified professionals brings deep expertise in audit, taxation, compliance, and financial advisory services.
              </p>
              <Link to="/about" className="btn-gold py-2.5 px-6 text-sm">
                Read Our Story <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <img src={aboutTeam} alt="Our team" className="rounded-lg w-full object-cover aspect-video" />
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} suffix="+" label="Clients Served" />
            <AnimatedCounter end={20} suffix="+" label="Years of Experience" />
            <AnimatedCounter end={50} suffix="+" label="Team Members" />
            <AnimatedCounter end={98} suffix="%" label="Client Retention" />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Expertise</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry} delay={i * 0.08}>
                <div className="card-premium p-8 text-center">
                  <h3 className="font-display font-semibold text-foreground">{industry}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Testimonials</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="card-premium p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-padding">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your<br />
              <span className="text-gradient-gold">Financial Future?</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Schedule a free consultation with our experts and discover how we can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold px-10 py-4">
                Contact Us Today <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
              <Link to="/query" className="btn-outline-premium px-10 py-4">
                Submit a Query
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
