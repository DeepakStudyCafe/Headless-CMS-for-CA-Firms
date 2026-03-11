import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Award, Users, Linkedin, X } from 'lucide-react';
import heroTeam from '@/assets/hero-team.jpg';

const partners = [
  { name: 'Vikram Desai', title: 'Managing Partner', specialization: 'Corporate Tax & Advisory', exp: '25+ years' },
  { name: 'Anita Kapoor', title: 'Senior Partner', specialization: 'Audit & Assurance', exp: '22+ years' },
  { name: 'Suresh Menon', title: 'Partner', specialization: 'GST & Indirect Tax', exp: '18+ years' },
];

const team = [
  { name: 'Neha Reddy', title: 'Director - Financial Advisory', dept: 'Advisory' },
  { name: 'Arjun Patel', title: 'Associate Director - Tax', dept: 'Tax' },
  { name: 'Kavitha Iyer', title: 'Manager - Audit', dept: 'Audit' },
  { name: 'Rohit Sharma', title: 'Manager - Compliance', dept: 'Compliance' },
  { name: 'Divya Nair', title: 'Senior Associate', dept: 'Advisory' },
  { name: 'Manish Gupta', title: 'Senior Associate', dept: 'Tax' },
  { name: 'Pooja Bhatt', title: 'Associate', dept: 'Audit' },
  { name: 'Sanjay Kumar', title: 'Associate', dept: 'Compliance' },
];

const certifications = ['ICAI Certified', 'DISA Qualified', 'FAFD Certified', 'Registered Valuers', 'Insolvency Professionals'];

const Team = () => (
  <Layout>
    <PageHero
      title="Meet the"
      highlight="Team"
      subtitle="A team of 85+ dedicated professionals driven by expertise, integrity, and a passion for client success."
      image={heroTeam}
      breadcrumb={[{ label: 'Team' }]}
    />

    {/* Leadership */}
    <section className="section-padding">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">Leadership</span>
            <h2 className="heading-lg text-foreground mt-2">Our Partners</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.15}>
              <div className="card-premium p-8 text-center group">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <img
                    src={`https://picsum.photos/seed/${encodeURIComponent(p.name.split(' ')[0].toLowerCase())}/400/400`}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-sans">{p.name}</h3>
                <p className="text-sm text-accent font-medium mt-1">{p.title}</p>
                <p className="text-sm text-muted-foreground mt-3">{p.specialization}</p>
                <p className="text-xs text-muted-foreground mt-1">{p.exp} experience</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <a href="#" aria-label={`LinkedIn ${p.name}`} className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label={`X ${p.name}`} className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <X className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Team Grid */}
    <section className="section-padding gradient-subtle">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground">Our Professionals</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.08}>
              <div className="card-premium p-6 text-center group">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <img
                    src={`https://picsum.photos/seed/${encodeURIComponent(m.name.split(' ')[0].toLowerCase())}/200/200`}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-sm font-semibold text-foreground font-sans">{m.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{m.title}</p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-accent/10 text-accent">{m.dept}</span>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <a href="#" aria-label={`LinkedIn ${m.name}`} className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label={`X ${m.name}`} className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <X className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="section-padding">
      <div className="container-max mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground">Certifications & Expertise</h2>
          </div>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((c, i) => (
            <ScrollReveal key={c} delay={i * 0.1}>
              <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-foreground">{c}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Culture */}
    <section className="section-padding gradient-navy">
      <div className="container-max mx-auto text-center">
        <ScrollReveal>
          <Users className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="heading-lg text-primary-foreground mb-4">Our Culture</h2>
          <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-6">
            At Sterling & Co., we foster a culture of continuous learning, collaboration, and professional growth. Every team member is empowered to excel and make a meaningful impact.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-10">
            <div><div className="heading-md text-gold">4.8/5</div><p className="text-xs text-primary-foreground/50 mt-1">Employee Rating</p></div>
            <div><div className="heading-md text-gold">92%</div><p className="text-xs text-primary-foreground/50 mt-1">Retention Rate</p></div>
            <div><div className="heading-md text-gold">200+</div><p className="text-xs text-primary-foreground/50 mt-1">Training Hours/Year</p></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Team;
