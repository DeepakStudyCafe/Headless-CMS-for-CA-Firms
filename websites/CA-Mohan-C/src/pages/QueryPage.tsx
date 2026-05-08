import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData, API_URL, WEBSITE_SLUG } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const QueryPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subjectOfQuery: '', query: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success'|'error', msg: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await fetch(`${API_URL}/forms/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website: WEBSITE_SLUG })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitStatus({ type: 'success', msg: data.message || 'Query submitted successfully!' });
        setFormData({ name: '', email: '', subjectOfQuery: '', query: '' });
      } else {
        setSubmitStatus({ type: 'error', msg: data.message || 'Failed to submit query.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', msg: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    getPageData('query').then((res) => setPageData(mapData(res))).catch(console.error);        
  }, []);

  if (!pageData) return <FullPageLoader />;

  return (
    <div>
      <PageHero title="Submit a Query" breadcrumb="Query" image={pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || `${(import.meta.env.VITE_API_URL || '').replace(/\/api$/, '')}/uploads/contact-hero.jpg`} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'query-header')?.textContent?.heading}</h2>
            <p className="text-muted-foreground mb-6">{pageData?.sections?.find((s: any) => s.type === 'query-header')?.textContent?.subheading}</p>
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {submitStatus.msg}
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input required type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="text" placeholder="Subject" value={formData.subjectOfQuery} onChange={e => setFormData({...formData, subjectOfQuery: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <textarea required rows={5} placeholder="Your Query" value={formData.query} onChange={e => setFormData({...formData, query: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <button type="submit" disabled={isSubmitting} className="btn-primary-gradient disabled:opacity-70">
                {isSubmitting ? 'Submitting...' : 'Submit Query'}
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl mb-6 text-foreground">{pageData?.sections?.find((s: any) => s.type === 'faqs')?.textContent?.heading || 'Frequently Asked Questions'}</h3>
            <div className="space-y-3">
              {(pageData?.sections?.find((s: any) => s.type === 'faqs')?.textContent?.items || []).map((faq, i) => (
                <motion.div key={i} className="card-premium overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
                    <span className="font-medium text-foreground text-sm">{faq.q}</span>
                    <ChevronDown size={18} className={`text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="px-4 pb-4">
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default QueryPage;
