import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Briefcase, Heart, BookOpen, TrendingUp, Send, MapPin, Clock } from 'lucide-react';
import heroTeam from '@/assets/hero-team.jpg';

const benefits = [
  { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Clear career progression paths and mentoring from industry leaders.' },
  { icon: BookOpen, title: 'Continuous Learning', desc: '200+ hours of training annually including professional certifications.' },
  { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible working arrangements and comprehensive wellness programs.' },
  { icon: Briefcase, title: 'Competitive Compensation', desc: 'Industry-leading packages with performance bonuses and benefits.' },
];

const positions = [
  { title: 'Senior Audit Manager', dept: 'Audit & Assurance', location: 'Mumbai', type: 'Full-time', exp: '8-12 years' },
  { title: 'Tax Consultant', dept: 'Direct Tax', location: 'Delhi', type: 'Full-time', exp: '3-5 years' },
  { title: 'GST Analyst', dept: 'Indirect Tax', location: 'Bangalore', type: 'Full-time', exp: '2-4 years' },
  { title: 'Associate - Financial Advisory', dept: 'Advisory', location: 'Mumbai', type: 'Full-time', exp: '1-3 years' },
  { title: 'Articleship Trainee', dept: 'Audit', location: 'Multiple Locations', type: 'Articleship', exp: 'CA Inter' },
];

const Career = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application! Our HR team will review and get back to you.');
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
  };

  return (
    <Layout>
      <PageHero
        title="Grow With"
        highlight="Sterling & Co."
        subtitle="Join a team of exceptional professionals and build a rewarding career in finance and accounting."
        image={heroTeam}
        breadcrumb={[{ label: 'Careers' }]}
      />

      {/* Culture */}
      <section className="section-padding">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground mb-4">Why Work With Us?</h2>
            <p className="text-body max-w-2xl mx-auto mb-12">We believe great work comes from great people in a great environment.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="card-premium p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <b.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground font-sans mb-2">{b.title}</h4>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding gradient-subtle">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground text-center mb-12">Open Positions</h2>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-4">
            {positions.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="card-premium p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground font-sans">{p.title}</h4>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Briefcase className="w-3 h-3" /> {p.dept}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.location}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {p.type}</span>
                    </div>
                    <span className="text-xs text-accent font-medium mt-1 inline-block">{p.exp}</span>
                  </div>
                  <Button variant="navy" size="sm" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
                    Apply Now
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="section-padding">
        <div className="container-max mx-auto max-w-2xl">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground text-center mb-10">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                <input type="email" placeholder="Email *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="tel" placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                <select value={formData.position} onChange={e => setFormData({...formData, position: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                  <option value="">Select Position</option>
                  {positions.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                </select>
              </div>
              <input type="text" placeholder="Years of Experience" value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              <textarea placeholder="Tell us about yourself" rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
              <Button variant="navy" size="lg" type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" /> Submit Application
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
