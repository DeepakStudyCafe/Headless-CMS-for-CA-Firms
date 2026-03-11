import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen, FileText, Users, Calculator, Building2, Shield, Search, TrendingUp, ArrowRight, Star, Quote, Factory, Laptop, Building, Briefcase, Rocket, Store, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import Layout from "@/components/Layout";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { image: hero1, title: "Strategic Financial\nConsultation", subtitle: "Empowering businesses with expert advisory and precision-driven financial solutions for sustainable growth.", badge: "Trusted by 500+ Businesses" },
  { image: hero2, title: "Expert Tax &\nAdvisory Services", subtitle: "Navigate complex tax landscapes with our seasoned chartered accountants and industry specialists.", badge: "20+ Years of Excellence" },
  { image: hero3, title: "Building Financial\nConfidence", subtitle: "From compliance to strategic planning — we deliver results that drive your business forward.", badge: "Award-Winning Firm" },
];

const services = [
  { name: "Bookkeeping", icon: BookOpen, desc: "Precise financial record keeping for informed decision-making.", href: "/services/bookkeeping" },
  { name: "GST Filing", icon: FileText, desc: "Seamless GST compliance and return filing advisory.", href: "/services/gst-filing" },
  { name: "Payroll", icon: Users, desc: "Complete payroll processing and statutory compliance.", href: "/services/payroll" },
  { name: "Tax Planning", icon: Calculator, desc: "Strategic tax optimization to maximize your savings.", href: "/services/tax-planning" },
  { name: "Company Formation", icon: Building2, desc: "End-to-end business incorporation services.", href: "/services/company-formation" },
  { name: "Compliance", icon: Shield, desc: "Proactive regulatory compliance management.", href: "/services/compliance" },
  { name: "Audit Services", icon: Search, desc: "Comprehensive statutory and internal audits.", href: "/services/audit-services" },
  { name: "Financial Advisory", icon: TrendingUp, desc: "Expert guidance for financial growth.", href: "/services/financial-advisory" },
];

const industries = [
  { name: "Startups", icon: Rocket, desc: "Scaling with confidence" },
  { name: "SMEs", icon: Store, desc: "Streamlined operations" },
  { name: "Manufacturing", icon: Factory, desc: "Cost optimization" },
  { name: "IT & Tech", icon: Laptop, desc: "Tax-efficient structures" },
  { name: "Real Estate", icon: Building, desc: "Project financing" },
  { name: "Consulting", icon: Briefcase, desc: "Strategic advisory" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "CEO, TechStartup India", text: "Sharma & Co. transformed our financial operations. Their expertise in tax planning saved us significantly and their team's responsiveness is unmatched." },
  { name: "Priya Mehta", role: "Director, GreenLeaf Mfg.", text: "Exceptional audit services and compliance support. They truly understand the manufacturing sector and deliver beyond expectations." },
  { name: "Amit Patel", role: "Founder, Digital Solutions", text: "Professional, responsive, and deeply knowledgeable. The best CA firm we've worked with — they feel like an extension of our team." },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Slider */}
      <section className="relative h-screen min-h-[700px] overflow-hidden" style={{ backgroundColor: '#06142b' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img src={slides[current].image} alt={slides[current].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-secondary/20" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 container h-full flex items-center">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 backdrop-blur-sm border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-8"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {slides[current].badge}
                </motion.span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6 whitespace-pre-line">
                  {slides[current].title}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl leading-relaxed">
                  {slides[current].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="group px-7 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/services" className="px-7 py-4 rounded-xl border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/10 backdrop-blur-sm transition-all">
                    Our Services
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-8">
          <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)} className="w-11 h-11 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/20 transition-all">
            <ChevronLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-accent" : "w-3 bg-primary-foreground/30"}`} />
            ))}
          </div>
          <button onClick={() => setCurrent((p) => (p + 1) % slides.length)} className="w-11 h-11 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground/20 transition-all">
            <ChevronRight className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container relative">
          <SectionHeading label="Our Expertise" title="Services That Drive Results" description="Comprehensive financial solutions tailored to your business, delivered with precision and deep industry expertise." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 0.08}>
                <Link to={service.href} className="group block p-6 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-primary/10">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-subtle flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">About Our Firm</span>
              <div className="section-divider mt-3 mb-5" />
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-foreground leading-tight mb-6">Trusted Financial Partners Since 2005</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sharma & Co. is a premier Chartered Accountancy firm committed to delivering exceptional financial services. With nearly two decades of experience, we serve a diverse clientele from ambitious startups to established corporations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team brings deep industry expertise ensuring compliance, efficiency, and strategic financial growth for every client we serve.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["ICAI Registered", "ISO Certified", "Award Winning"].map((tag) => (
                  <span key={tag} className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-subtle text-primary text-sm font-medium">
                    <CheckCircle className="w-4 h-4" /> {tag}
                  </span>
                ))}
              </div>
              <Link to="/about" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <AnimatedCounter end={18} suffix="+" label="Years Experience" />
                <AnimatedCounter end={500} suffix="+" label="Clients Served" />
                <AnimatedCounter end={50} suffix="+" label="Team Members" />
                <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="container">
          <SectionHeading label="Industries We Serve" title="Expertise Across Sectors" description="Deep domain knowledge across key industries ensures tailored solutions for your unique challenges." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 0.08}>
                <div className="text-center p-6 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 group cursor-default border border-transparent hover:border-primary/10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-subtle mx-auto flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <ind.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-heading font-bold text-sm text-foreground block">{ind.name}</span>
                  <span className="text-xs text-muted-foreground mt-1 block">{ind.desc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="container relative">
          <SectionHeading label="Testimonials" title="What Our Clients Say" description="Hear from the businesses we've helped grow and succeed." light />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-secondary-foreground/5 backdrop-blur-sm p-8 rounded-2xl border border-secondary-foreground/8 hover:border-accent/30 transition-all duration-300 group">
                  <Quote className="w-8 h-8 text-accent/50 mb-5 group-hover:text-accent transition-colors" />
                  <p className="text-secondary-foreground/80 leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />)}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-primary-foreground font-heading font-bold text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-secondary-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-secondary-foreground/50">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 border border-primary-foreground/30 rounded-full" />
          <div className="absolute bottom-10 left-10 w-96 h-96 border border-primary-foreground/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full" />
        </div>
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-6">
              Let's Work Together
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">Ready to Transform<br />Your Business?</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let our team of expert Chartered Accountants help you navigate your financial journey. Schedule a complimentary consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                Schedule Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-xl border-2 border-primary-foreground/20 text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-all">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
