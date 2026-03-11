import { motion } from 'framer-motion';
import { Heart, Users, TrendingUp, Award, MapPin, Clock, Briefcase } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import heroTeam from '@/assets/hero-team.jpg';

const jobs = [
  { title: 'Senior Audit Associate', location: 'Mumbai', type: 'Full-time', experience: '3-5 years' },
  { title: 'GST Compliance Manager', location: 'Delhi', type: 'Full-time', experience: '5+ years' },
  { title: 'Junior Accountant', location: 'Bangalore', type: 'Full-time', experience: '0-2 years' },
  { title: 'Financial Analyst', location: 'Mumbai', type: 'Full-time', experience: '2-4 years' },
];

const benefits = [
  { icon: TrendingUp, title: 'Career Growth', desc: 'Clear progression paths and mentorship.' },
  { icon: Heart, title: 'Health Benefits', desc: 'Comprehensive medical insurance coverage.' },
  { icon: Users, title: 'Team Culture', desc: 'Collaborative and inclusive work environment.' },
  { icon: Award, title: 'Learning', desc: 'Sponsored certifications and training programs.' },
];

const CareerPage = () => {
  return (
    <div>
      <PageHero title="Careers" breadcrumb="Career" image={heroTeam} />

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-title">Join Our Team</h2>
          <p className="section-subtitle">Build your career with a firm that values growth, innovation, and excellence.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-premium p-6 text-center">
              <div className="w-12 h-12 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                <b.icon size={22} style={{ color: 'hsl(var(--primary-foreground))' }} />
              </div>
              <h3 className="font-heading font-semibold mb-1 text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted">
        <div className="text-center mb-12">
          <h2 className="section-title">Open Positions</h2>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div key={job.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-premium p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-foreground">{job.title}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} />{job.type}</span>
                  <span className="flex items-center gap-1"><Briefcase size={14} />{job.experience}</span>
                </div>
              </div>
              <button className="btn-primary-gradient !py-2 text-sm whitespace-nowrap">Apply Now</button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title text-center">Submit Your Application</h2>
          <form className="space-y-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <input type="text" placeholder="Position Applied For" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <textarea rows={4} placeholder="Cover Letter" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            <button type="submit" className="btn-primary-gradient">Submit Application</button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CareerPage;
