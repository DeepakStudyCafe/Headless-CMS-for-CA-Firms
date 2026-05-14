import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData, getImageUrl, submitCareerForm } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { Heart, Users, TrendingUp, Award, MapPin, Clock, Briefcase } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const CareerPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  useEffect(() => {
    // seed creates slug 'career' not 'careers'
    getPageData('career').then((res) => setPageData(mapData(res))).catch(console.error);
  }, []);
  if (!pageData) return <FullPageLoader />;

  return (
    <div>
      <PageHero title="Careers" breadcrumb="Career" image={pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || getImageUrl('/uploads/team-hero.jpg')} />

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'career-header')?.textContent?.heading}</h2>
          <p className="section-subtitle">{pageData?.sections?.find((s: any) => s.type === 'career-header')?.textContent?.subheading}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(pageData?.sections?.find((s: any) => s.type === 'benefits')?.textContent?.items || []).map((b, i) => (
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

      {/* <SectionWrapper className="bg-muted">
        <div className="text-center mb-12">
          <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'jobs')?.textContent?.heading || 'Open Positions'}</h2>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {(pageData?.sections?.find((s: any) => s.type === 'jobs')?.textContent?.items || []).map((job, i) => (
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
      </SectionWrapper> */}

      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title text-center">Submit Your Application</h2>
          <form className="space-y-4 mt-8" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const data = new FormData(form);
              // If you plan to include resume upload, ensure input name="resume" is present in form
              try {
                const res = await submitCareerForm(data);
                if (res?.success) {
                  alert(res.message || 'Application submitted successfully');
                  form.reset();
                } else {
                  alert(res?.message || 'Failed to submit application');
                }
              } catch (err) {
                alert('An error occurred. Please try again.');
              }
            }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="firstName" type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input name="mobile" type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="email" type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input name="position" type="text" placeholder="Position Applied For" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <textarea name="comments" rows={4} placeholder="Cover Letter" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            <button type="submit" className="btn-primary-gradient">Submit Application</button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CareerPage;
