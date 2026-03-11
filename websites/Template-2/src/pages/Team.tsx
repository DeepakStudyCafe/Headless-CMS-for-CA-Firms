import { Award, Users as UsersIcon, Briefcase, Heart } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

const leaders = [
  { name: 'Vikram Desai', role: 'Managing Partner', credentials: 'CA, CPA, MBA', bio: '25+ years in audit and financial advisory. Former Big4 partner.' },
  { name: 'Anita Kapoor', role: 'Senior Partner', credentials: 'CA, DISA', bio: '20+ years specializing in tax planning and corporate restructuring.' },
  { name: 'Suresh Iyer', role: 'Partner, Advisory', credentials: 'CA, CFA', bio: '18+ years in financial advisory and transaction support services.' },
];

const team = [
  { name: 'Neha Sharma', role: 'Manager, Audit' },
  { name: 'Rohan Gupta', role: 'Manager, Tax' },
  { name: 'Kavita Menon', role: 'Senior Associate, GST' },
  { name: 'Arjun Nair', role: 'Associate, Advisory' },
  { name: 'Sneha Patil', role: 'Manager, Compliance' },
  { name: 'Rahul Joshi', role: 'Associate, Payroll' },
];

const certifications = ['ICAI', 'AICPA', 'CPA Australia', 'DISA', 'CISA', 'ISO 27001'];

const Team = () => {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Our People</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Meet the <span className="text-gradient-gold">Team</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">
              A team of qualified professionals dedicated to delivering excellence in every engagement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Leadership</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Partners</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 0.1}>
                <div className="card-premium p-8 text-center h-full">
                  <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-accent">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg">{leader.name}</h3>
                  <p className="text-accent text-sm font-medium mb-1">{leader.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{leader.credentials}</p>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Professionals</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.06}>
                <div className="card-premium p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center">
                    <span className="font-display font-bold text-accent">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{member.name}</h3>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Certifications & Affiliations</h2>
              <div className="gold-accent-line mx-auto" />
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 0.05}>
                <div className="px-6 py-3 rounded-full border border-border bg-card font-body text-sm font-medium text-foreground flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  {cert}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="section-padding bg-navy text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold mb-4">Our Culture</h2>
            <div className="gold-accent-line mx-auto mb-8" />
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { icon: UsersIcon, title: 'Collaborative', desc: 'We work together to deliver the best outcomes.' },
                { icon: Briefcase, title: 'Professional', desc: 'Maintaining the highest standards of professionalism.' },
                { icon: Heart, title: 'People-First', desc: 'We invest in our people\'s growth and well-being.' },
              ].map((v, i) => (
                <div key={v.title}>
                  <v.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-display font-semibold mb-1">{v.title}</h3>
                  <p className="text-sm text-primary-foreground/60">{v.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Team;
