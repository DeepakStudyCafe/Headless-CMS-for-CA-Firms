import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, Briefcase, TrendingUp, Award, Globe, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import Layout from '@/components/Layout';
import HeroSlider from '@/components/HeroSlider';
import { Button } from '@/components/ui/button';

const services = [
  { name: 'Bookkeeping', icon: BookOpen, desc: 'Precise financial records that keep your business on track.', href: '/services/bookkeeping' },
  { name: 'GST Filing', icon: FileText, desc: 'Timely and accurate GST compliance and returns.', href: '/services/gst-filing' },
  { name: 'Tax Planning', icon: Calculator, desc: 'Strategic tax optimization to maximize your savings.', href: '/services/tax-planning' },
  { name: 'Audit Services', icon: Search, desc: 'Comprehensive audits ensuring transparency and trust.', href: '/services/audit-services' },
  { name: 'Company Formation', icon: Building2, desc: 'Seamless business registration and incorporation.', href: '/services/company-formation' },
  { name: 'Financial Advisory', icon: Briefcase, desc: 'Expert guidance for informed financial decisions.', href: '/services/financial-advisory' },
];

const stats = [
  { label: 'Years of Excellence', value: 28, suffix: '+' },
  { label: 'Clients Served', value: 2500, suffix: '+' },
  { label: 'Team Members', value: 85, suffix: '+' },
  { label: 'Success Rate', value: 99, suffix: '%' },
];

const industries = [
  { name: 'Manufacturing', icon: Building2 },
  { name: 'Technology', icon: TrendingUp },
  { name: 'Healthcare', icon: Shield },
  { name: 'Real Estate', icon: Globe },
  { name: 'Retail & E-commerce', icon: Briefcase },
  { name: 'Financial Services', icon: Award },
];

const testimonials = [
  { name: 'Rajesh Mehta', role: 'CEO, TechVault India', quote: 'Sterling & Co. transformed our financial operations. Their expertise in tax planning saved us over 30% in the first year.' },
  { name: 'Priya Sharma', role: 'Director, GreenLeaf Exports', quote: 'Professional, responsive, and incredibly knowledgeable. They handle our compliance so we can focus on growth.' },
  { name: 'Amit Patel', role: 'Founder, NexGen Solutions', quote: 'The team at Sterling & Co. goes above and beyond. Their advisory services have been invaluable to our expansion.' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services */}
      <section className="section-padding gradient-subtle">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">What We Offer</span>
              <h2 className="heading-lg text-foreground mt-2">Our Services</h2>
              <p className="text-body mt-4 max-w-2xl mx-auto">Comprehensive financial solutions tailored to your business needs.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.1}>
                <Link to={service.href} className="card-premium p-8 block group h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all gap-1">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-wider text-accent">About Sterling & Co.</span>
              <h2 className="heading-lg text-foreground mt-2 mb-6">Nearly Three Decades of Financial Excellence</h2>
              <p className="text-body mb-6">
                Founded in 1995, Sterling & Co. has grown from a small practice to one of India's most respected chartered accountancy firms. We combine deep expertise with innovative solutions to help businesses navigate complex financial landscapes.
              </p>
              <p className="text-body mb-8">
                Our commitment to integrity, precision, and client success has earned us the trust of over 2,500 businesses across diverse industries.
              </p>
              <Button variant="navy" size="lg" asChild>
                <Link to="/about">Discover Our Story <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="card-premium p-6 text-center">
                    <div className="heading-lg text-accent mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding gradient-navy">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-gold">Expertise</span>
              <h2 className="heading-lg text-primary-foreground mt-2">Industries We Serve</h2>
              <p className="text-lg text-primary-foreground/50 mt-4 max-w-2xl mx-auto">Deep domain knowledge across India's key economic sectors.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 0.08}>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors">
                    <ind.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm font-medium text-primary-foreground/80">{ind.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">Testimonials</span>
              <h2 className="heading-lg text-foreground mt-2">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="card-premium p-8 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{t.quote}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.role}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-primary-foreground mb-4">Ready to Transform Your Finances?</h2>
            <p className="text-lg text-primary-foreground/50 mb-10 max-w-xl mx-auto">
              Let our experts craft a tailored strategy for your business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Get Started Today <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/query">Ask a Question</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
