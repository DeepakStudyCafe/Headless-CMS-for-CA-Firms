import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Target, Eye, Heart, Shield, Award, TrendingUp, CheckCircle } from 'lucide-react';
import heroAbout from '@/assets/hero-about.jpg';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Upholding the highest ethical standards in every engagement.' },
  { icon: Award, title: 'Excellence', desc: 'Delivering superior quality in all our services.' },
  { icon: Heart, title: 'Client First', desc: 'Your success is our primary measure of achievement.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Embracing modern solutions for complex challenges.' },
];

const timeline = [
  { year: '1995', title: 'Founded', desc: 'Established as a small CA practice in Mumbai.' },
  { year: '2003', title: 'Expansion', desc: 'Opened offices in Delhi and Bangalore.' },
  { year: '2010', title: 'Digital Transformation', desc: 'Adopted cloud-based systems for enhanced efficiency.' },
  { year: '2015', title: 'International Reach', desc: 'Began serving international clients and cross-border transactions.' },
  { year: '2020', title: 'Full-Service Firm', desc: 'Expanded to 85+ professionals across 5 offices.' },
  { year: '2024', title: 'Industry Recognition', desc: 'Named among India\'s Top 50 CA firms.' },
];

const About = () => (
  <Layout>
    <PageHero
      title="Building Trust Through"
      highlight="Financial Excellence"
      subtitle="For nearly three decades, Sterling & Co. has been the trusted financial partner for businesses seeking precision, integrity, and strategic growth."
      image={heroAbout}
      breadcrumb={[{ label: 'About Us' }]}
    />

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="container-max mx-auto grid md:grid-cols-2 gap-12">
        <ScrollReveal>
          <div className="card-premium p-10">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="heading-md text-foreground mb-4 font-sans">Our Mission</h3>
            <p className="text-body">To deliver exceptional financial services that empower businesses to achieve sustainable growth, while maintaining the highest standards of professional ethics and client satisfaction.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="card-premium p-10">
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-gold" />
            </div>
            <h3 className="heading-md text-foreground mb-4 font-sans">Our Vision</h3>
            <p className="text-body">To be recognized as India's most trusted chartered accountancy firm, known for innovation, integrity, and unparalleled client service across all financial disciplines.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding gradient-subtle">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">Our Foundation</span>
            <h2 className="heading-lg text-foreground mt-2">Core Values</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="card-premium p-8 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 font-sans">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">Our Journey</span>
            <h2 className="heading-lg text-foreground mt-2">Milestones</h2>
          </div>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-0">
          {timeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.1}>
              <div className="flex gap-6 pb-10 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0 z-10">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pt-2">
                  <h4 className="font-semibold text-foreground font-sans">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding gradient-navy">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary-foreground">Why Choose Sterling & Co.</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {['Big4-level expertise at competitive rates', 'Dedicated relationship managers', 'Technology-driven solutions', 'Pan-India presence with local expertise', 'Proactive advisory, not reactive compliance', 'Confidential & secure data handling'].map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.08}>
              <div className="flex items-start gap-3 p-4">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
