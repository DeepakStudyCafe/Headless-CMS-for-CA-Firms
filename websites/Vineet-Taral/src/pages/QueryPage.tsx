import { mapData } from '../lib/mapper';
import { useState, useEffect } from 'react';
import { getPageData, getImageUrl, submitQueryForm } from '../lib/api';
import { FullPageLoader } from '../components/Loader';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';

const QueryPage = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    getPageData('query').then((res) => setPageData(mapData(res))).catch(console.error);
  }, []);

  if (!pageData) return <FullPageLoader />;

  return (
    <div>
      <PageHero title="Submit a Query" breadcrumb="Query" image={pageData?.sections?.find((s: any) => s.type === 'hero')?.imageUrl || getImageUrl('/uploads/contact-hero.jpg')} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">{pageData?.sections?.find((s: any) => s.type === 'query-header')?.textContent?.heading}</h2>
            <p className="text-muted-foreground mb-6">{pageData?.sections?.find((s: any) => s.type === 'query-header')?.textContent?.subheading}</p>
            <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const payload = {
                  name: (data.get('name') as string) || '',
                  email: (data.get('email') as string) || '',
                  subject: (data.get('subject') as string) || '',
                  query: (data.get('query') as string) || ''
                };
                try {
                  const res = await submitQueryForm(payload);
                  if (res?.success) {
                    alert(res.message || 'Query submitted successfully');
                    form.reset();
                  } else {
                    alert(res?.message || 'Failed to submit query');
                  }
                } catch (err) {
                  alert('An error occurred. Please try again.');
                }
              }}>
              <input name="name" type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input name="email" type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input name="subject" type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <textarea name="query" rows={5} placeholder="Your Query" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <button type="submit" className="btn-primary-gradient">Submit Query</button>
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
