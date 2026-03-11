import { Briefcase, Heart, TrendingUp, Users, Send } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

const benefits = [
  { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Clear career paths and professional development support.' },
  { icon: Users, title: 'Collaborative Culture', desc: 'Work with talented professionals in a supportive environment.' },
  { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible working arrangements and comprehensive benefits.' },
  { icon: Briefcase, title: 'Prestigious Clients', desc: 'Work on challenging engagements with leading companies.' },
];

const openings = [
  { title: 'Senior Audit Associate', dept: 'Audit & Assurance', location: 'Mumbai', type: 'Full-Time' },
  { title: 'Tax Manager', dept: 'Taxation', location: 'Mumbai', type: 'Full-Time' },
  { title: 'GST Compliance Executive', dept: 'Indirect Tax', location: 'Mumbai', type: 'Full-Time' },
  { title: 'Articleship Trainee', dept: 'Various', location: 'Mumbai', type: 'Articleship' },
];

const Career = () => {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Careers</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Build Your <span className="text-gradient-gold">Future</span> With Us
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">Join a team that values excellence, integrity, and your professional growth.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Why Work With Us</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.08}>
                <div className="card-premium p-8 text-center h-full">
                  <b.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Open Positions</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 0.06}>
                <div className="card-premium p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.dept} · {job.location} · {job.type}</p>
                  </div>
                  <button className="btn-primary-premium text-xs py-2 px-5 flex-shrink-0">Apply Now</button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Apply Now</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
            <div className="card-premium p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Full Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Email</label>
                    <input type="email" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Position Applied For</label>
                  <select className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30">
                    <option>Select position</option>
                    {openings.map(j => <option key={j.title}>{j.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Cover Letter</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
                </div>
                <button type="submit" className="btn-gold text-sm w-full">
                  <Send className="w-4 h-4 mr-2 inline" /> Submit Application
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Career;
