import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { API_URL, WEBSITE_SLUG, getPageData, getWebsiteData } from '@/lib/api';
import { findSection, sectionContent } from '@/lib/sectionHelpers';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.15);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export default function Query() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', queryType: '', message: '' });

  const loadData = useCallback(() => {
    Promise.all([getPageData('query'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(`${API_URL}/forms/submit`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, websiteSlug: WEBSITE_SLUG, formType: 'query' }) });
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', service: '', queryType: '', message: '' });
    } catch { alert('Something went wrong.'); }
    finally { setSubmitting(false); }
  };

  const hero = sectionContent(findSection(pageData, 'hero'));
  const formSec = sectionContent(findSection(pageData, 'faqs', 'form', 'faq'));
  const infoSec = sectionContent(findSection(pageData, 'info', 'contact'));
  const faqs = formSec?.items || formSec?.faqs || [];
  const services = (websiteData?.themeConfig?.services || []).map((s: any) => s.title);
  const queryTypes = formSec?.queryTypes || ['General Inquiry', 'Pricing & Packages', 'Service Details', 'Tax Planning', 'Compliance Issues'];

  return (
    <div style={{ background: '#FAF8F3', minHeight: '100vh' }} className="font-body">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative flex items-end overflow-hidden pt-20" style={{ background: '#2D2D2D', minHeight: '320px' }}>
        <div className="absolute inset-0" style={{ background: 'rgba(45,45,45,0.92)' }} />
        <div className="container mx-auto px-6 lg:px-[8%] relative z-10 py-16">
          <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-3" style={{ color: '#C8A96E' }}>{hero?.label || 'SUBMIT A QUERY'}</span>
          <h1 className="font-display font-semibold mb-3" style={{ fontSize: 'clamp(28px, 5vw, 52px)', lineHeight: 1.08, color: '#FAF8F3' }}>
            {hero?.heading || hero?.title || 'Ask Us Anything'}
          </h1>
          {hero?.subheading && <p className="font-body font-light text-base max-w-xl" style={{ color: 'rgba(250,248,243,0.6)' }}>{hero.subheading}</p>}
        </div>
      </section>

      {/* FORM + FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8%] grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="font-display font-semibold mb-8" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#2D2D2D' }}>{formSec?.title || formSec?.heading || 'Submit Your Query'}</h2>
            {submitted ? (
              <div className="rounded-xl p-10 text-center" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(200,169,110,0.15)' }}>
                  <span style={{ color: '#C8A96E', fontSize: 24 }}>✓</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2" style={{ color: '#2D2D2D' }}>Query Received!</h3>
                <p className="font-body text-sm mb-6" style={{ color: '#6B6B6B' }}>Our experts will respond within 24 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="font-body text-sm font-semibold" style={{ color: '#C8A96E' }}>Submit Another →</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                  </div>
                  <div>
                    <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Phone *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                  </div>
                  <div>
                    <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Query Type *</label>
                    <select required value={form.queryType} onChange={e => setForm({ ...form, queryType: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm outline-none cursor-pointer" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }}>
                      <option value="">Select type</option>
                      {queryTypes.map((qt: string, i: number) => <option key={i} value={qt}>{qt}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Service of Interest</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm outline-none cursor-pointer" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }}>
                    <option value="">Select a service (optional)</option>
                    {services.map((s: string, i: number) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Your Query *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Describe your question..." className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3.5 rounded-md font-body text-[13px] font-semibold disabled:opacity-60" style={{ background: '#2D2D2D', color: '#FAF8F3' }}>
                  {submitting ? 'Submitting...' : (formSec?.buttonText || 'Submit Query')}
                </button>
              </form>
            )}
          </FadeIn>

          {faqs.length > 0 && (
            <FadeIn delay={0.1}>
              <h2 className="font-display font-semibold mb-8" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#2D2D2D' }}>{formSec?.faqTitle || 'Frequently Asked Questions'}</h2>
              <div className="space-y-3">
                {faqs.map((faq: any, i: number) => (
                  <div key={i} className="rounded-xl overflow-hidden" style={{ border: '1px solid #E8E2D9' }}>
                    <button className="w-full px-5 py-4 flex items-center justify-between text-left gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ background: '#FFFFFF' }}>
                      <span className="font-display font-semibold text-[14px]" style={{ color: '#2D2D2D' }}>{faq.q || faq.question}</span>
                      <span style={{ color: '#C8A96E', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 font-body text-sm leading-relaxed" style={{ color: '#6B6B6B', background: '#FAFAFA', borderTop: '1px solid #E8E2D9' }}>
                        {faq.a || faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* CONTACT QUICK INFO */}
      <section className="py-16" style={{ background: '#F2EDE4' }}>
        <div className="container mx-auto px-6 lg:px-[8%]">
          <h2 className="font-display font-semibold text-center mb-10" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', color: '#2D2D2D' }}>{infoSec?.title || 'Prefer to Reach Us Directly?'}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '📞', title: 'Call Us', info: websiteData?.phone || '', href: `tel:${(websiteData?.phone || '').replace(/\s/g, '')}` },
              { icon: '✉️', title: 'Email Us', info: websiteData?.email || '', href: `mailto:${websiteData?.email || ''}` },
              { icon: '💬', title: 'WhatsApp', info: websiteData?.phone || '', href: `https://wa.me/${(websiteData?.phone || '').replace(/[^0-9]/g, '')}` },
            ].filter(i => i.info).map((item, i) => (
              <a key={i} href={item.href} className="flex items-center gap-4 p-5 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-display font-semibold text-[14px]" style={{ color: '#2D2D2D' }}>{item.title}</p>
                  <p className="font-body text-xs" style={{ color: '#6B6B6B' }}>{item.info}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
}
