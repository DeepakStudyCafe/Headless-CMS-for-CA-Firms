import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Award, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import aboutTeam from '@/assets/about-team.jpg';

const values = [
  { icon: Target, title: 'Integrity', desc: 'We uphold the highest ethical standards in every engagement.' },
  { icon: Eye, title: 'Excellence', desc: 'We pursue perfection in every financial solution we deliver.' },
  { icon: Heart, title: 'Client Focus', desc: 'Your success drives every decision we make.' },
  { icon: Award, title: 'Innovation', desc: 'We leverage technology to deliver modern financial solutions.' },
];

const timeline = [
  { year: '2005', title: 'Founded', desc: 'Established in Mumbai with a vision for excellence.' },
  { year: '2010', title: 'Growth', desc: 'Expanded to 100+ clients across multiple industries.' },
  { year: '2015', title: 'Expansion', desc: 'Opened second office and launched advisory division.' },
  { year: '2020', title: 'Digital', desc: 'Embraced digital transformation for client services.' },
  { year: '2025', title: 'Today', desc: '500+ clients, 50+ team members, pan-India presence.' },
];

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Our Story of<br /><span className="text-gradient-gold">Financial Excellence</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">
              For two decades, we've been the trusted financial partner for businesses seeking integrity, precision, and growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-narrow mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <img src={aboutTeam} alt="Our team" className="rounded-lg w-full object-cover aspect-video" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Who We Are</h2>
            <div className="gold-accent-line mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apex & Associates is a premier Chartered Accountancy firm based in Mumbai, India. We offer comprehensive financial services spanning audit & assurance, taxation, corporate advisory, and compliance management.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our multidisciplinary team combines deep technical expertise with a practical business understanding to deliver solutions that create lasting value for our clients.
            </p>
            <Link to="/team" className="btn-primary-premium text-sm py-2.5 px-6">
              Meet Our Team <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="card-premium p-10 h-full">
              <Target className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with insightful financial guidance, ensuring compliance, optimizing performance, and fostering sustainable growth through personalized, world-class professional services.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="card-premium p-10 h-full">
              <Eye className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as India's most trusted chartered accountancy firm, known for delivering transformative financial solutions that set the benchmark for professional excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Our Values</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">What We Stand For</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="card-premium p-8 text-center h-full">
                  <v.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy text-primary-foreground">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Our Journey</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Milestones</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-primary-foreground/10 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p className="text-accent font-display text-2xl font-bold mb-1">{item.year}</p>
                      <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0 hidden md:block" />
                    <div className="md:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Why Apex</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              'ICAI Registered & Fully Compliant',
              'Dedicated Relationship Manager',
              'Technology-Driven Approach',
              'Pan-India Coverage',
              'Transparent Pricing',
              'Fast Turnaround Times',
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
