import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionWrapper from '../components/SectionWrapper';
import heroContact from '@/assets/hero-contact.jpg';

const faqs = [
  { q: 'What services does your firm offer?', a: 'We offer bookkeeping, GST filing, payroll, tax planning, company formation, compliance, audit, and financial advisory services.' },
  { q: 'How can I schedule a consultation?', a: 'You can fill out the query form below or contact us via phone/email to schedule a free consultation.' },
  { q: 'Do you serve clients outside India?', a: 'Yes, we have experience serving international clients and handling cross-border financial matters.' },
  { q: 'What industries do you specialize in?', a: 'We serve startups, SMEs, manufacturing, IT, real estate, healthcare, and more.' },
];

const QueryPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <PageHero title="Submit a Query" breadcrumb="Query" image={heroContact} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Have a Question?</h2>
            <p className="text-muted-foreground mb-6">Submit your query and our team will respond within 24 hours.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <textarea rows={5} placeholder="Your Query" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <button type="submit" className="btn-primary-gradient">Submit Query</button>
            </form>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl mb-6 text-foreground">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
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
