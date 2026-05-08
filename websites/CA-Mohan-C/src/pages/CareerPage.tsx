import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData, API_URL, WEBSITE_SLUG } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { Heart, Users, TrendingUp, Award, MapPin, Clock, Briefcase } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const CareerPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', comments: '' });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success'|'error', msg: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('position', formData.position);
      data.append('comments', formData.comments);
      data.append('website', WEBSITE_SLUG);
      if (resumeFile) {
        data.append('resume', resumeFile);
      }

      const res = await fetch(`${API_URL}/forms/career`, {
        method: 'POST',
        body: data
      });
      
      const result = await res.json();
      if (res.ok && result.success) {
        setSubmitStatus({ type: 'success', msg: result.message || 'Application submitted successfully!' });
        setFormData({ name: '', email: '', phone: '', position: '', comments: '' });
        setResumeFile(null);
        // Reset file input by finding it
        const fileInput = document.getElementById('resume-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus({ type: 'error', msg: result.message || 'Failed to submit application.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', msg: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    getPageData('careers').then((res) => setPageData(mapData(res))).catch(console.error);
  }, []);
  if (!pageData) return <FullPageLoader />;

  return (
    <div>
      <PageHero title="Careers" breadcrumb="Career" image={pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || `${(import.meta.env.VITE_API_URL || '').replace(/\/api$/, '')}/uploads/team-hero.jpg`} />

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
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {submitStatus.msg}
              </div>
            )}
            <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="tel" placeholder="Mobile Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="text" placeholder="Position Applied For" value={formData.position} onChange={e => setFormData({...formData, position: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <textarea required rows={4} placeholder="Cover Letter" value={formData.comments} onChange={e => setFormData({...formData, comments: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Resume (PDF/DOC)</label>
                <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" onChange={e => setResumeFile(e.target.files?.[0] || null)} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary-gradient disabled:opacity-70">
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CareerPage;
