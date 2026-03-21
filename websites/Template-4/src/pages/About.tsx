import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import aboutHero from "@/assets/about-hero.jpg";
import { Target, Eye, Heart, Shield, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Shield, title: "Integrity", desc: "Upholding the highest ethical standards in every engagement." },
  { icon: Award, title: "Excellence", desc: "Delivering exceptional quality and precision in all services." },
  { icon: Users, title: "Client-Centric", desc: "Placing our clients' success at the heart of everything." },
  { icon: Heart, title: "Commitment", desc: "Going beyond expectations to deliver lasting value." },
];

const timeline = [
  { year: "2005", title: "Founded", desc: "Sharma & Co. established with a vision to redefine financial advisory." },
  { year: "2010", title: "100 Clients", desc: "Crossed the milestone of serving 100 businesses across India." },
  { year: "2015", title: "Team of 30", desc: "Expanded our team with top chartered accountants and experts." },
  { year: "2020", title: "Digital Transformation", desc: "Embraced technology for seamless cloud-based financial services." },
  { year: "2024", title: "500+ Clients", desc: "Serving over 500 businesses with 50+ dedicated professionals." },
];

const whyUs = [
  "20+ years of industry experience",
  "Team of 50+ qualified professionals",
  "Technology-driven processes",
  "Personalized service approach",
  "99% compliance track record",
  "Pan-India service coverage",
];

const About = () => (
  <Layout>
    <PageHero title="About Us" subtitle="Building trust through financial excellence" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} image={aboutHero} />

    {/* Introduction */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">Who We Are</span>
            <div className="section-divider mt-3 mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mb-6">A Legacy of Financial Excellence</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sharma & Co. is one of India's leading Chartered Accountancy firms, established in 2005. We provide comprehensive financial services including auditing, taxation, advisory, and compliance solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines deep technical expertise with industry knowledge to deliver customized solutions that drive business growth and ensure regulatory compliance.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              <AnimatedCounter end={18} suffix="+" label="Years Experience" />
              <AnimatedCounter end={500} suffix="+" label="Clients Served" />
              <AnimatedCounter end={50} suffix="+" label="Team Members" />
              <AnimatedCounter end={15} label="Industry Awards" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="p-10 bg-card rounded-2xl card-shadow border border-primary/10 h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-subtle flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with accurate, timely, and insightful financial services that enable informed decision-making and sustainable growth, while maintaining the highest standards of professional ethics.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="p-10 bg-card rounded-2xl card-shadow border border-accent/10 h-full">
              <div className="w-12 h-12 rounded-2xl bg-warm-light flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative Chartered Accountancy firm in India, recognized for transforming businesses through strategic financial guidance and technology-driven solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="Our Values" title="What Drives Us" description="The principles that guide every decision and relationship." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="text-center p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-primary/10 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-subtle mx-auto flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <v.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 bg-muted/50">
      <div className="container">
        <SectionHeading label="Our Journey" title="Company Timeline" />
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-accent/10 rounded-full pointer-events-none -translate-x-1/2 z-0" />
          <div className="relative z-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              const midIndex = Math.floor(timeline.length / 2);
              return (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className="relative flex justify-between items-center pb-16">
                    {/* Left Side: card stays where it is */}
                    <div className={`w-1/2 flex ${isLeft ? 'justify-end' : 'justify-end md:justify-start'}`}>
                      {isLeft && (
                        <div className="flex items-center gap-8">
                          <div className="max-w-[760px] mr-2 bg-card rounded-2xl shadow-md border border-border/40 px-6 py-4 md:py-6 md:px-8 text-left">
                            <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-2">{item.title}</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center spacer (increased for larger gap between cards and centered year) */}
                    <div className="w-0 md:w-28" />

                    {/* Right Side: card stays where it is */}
                    <div className={`w-1/2 flex ${!isLeft ? 'justify-start' : 'justify-start md:justify-end'}`}>
                      {!isLeft && (
                        <div className="flex items-center gap-8">
                          <div className="max-w-[760px] ml-2 bg-card rounded-2xl shadow-md border border-border/40 px-6 py-4 md:py-6 md:px-8 text-left">
                            <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-2">{item.title}</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Year circle - always centered on the line */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      {/* Increase size slightly for the centered feel; highlight middle item */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl border-4 border-background`}>
                        <span className="text-primary-foreground font-heading font-bold text-lg">{item.year}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">Why Choose Us</span>
            <div className="section-divider mt-3 mb-5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground leading-tight mb-6">The Sharma & Co. Advantage</h2>
            <p className="text-secondary-foreground/70 leading-relaxed mb-8">
              We combine decades of expertise with modern technology to deliver unparalleled financial services.
            </p>
            <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="grid sm:grid-cols-2 gap-3">
              {whyUs.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/8">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-secondary-foreground/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
