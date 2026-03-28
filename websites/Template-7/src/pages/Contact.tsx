import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getPageData, getWebsiteData } from '@/lib/api';
import { findSection, sectionContent } from '@/lib/sectionHelpers';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.15);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const loadData = useCallback(() => {
    Promise.all([getPageData('contact'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }, 1500);
  };

  const hero = sectionContent(findSection(pageData, 'hero'));
  const infoSec = sectionContent(findSection(pageData, 'contact-info', 'info', 'contact'));
  const mapUrl = websiteData?.themeConfig?.contactContent?.mapUrl || infoSec?.mapUrl || '';
  const phone = websiteData?.phone || infoSec?.phone || '';
  const email = websiteData?.email || infoSec?.email || '';
  const address = websiteData?.address || infoSec?.address || '';
  const hours = websiteData?.workingHours || infoSec?.workingHours || '';

  return (
    <div style={{ background: '#FAF8F3', minHeight: '100vh' }} className="font-body">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative flex items-end overflow-hidden pt-20" style={{ background: '#2D2D2D', minHeight: '340px' }}>
        {hero?.image && <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${hero.image}')` }} />}
        <div className="absolute inset-0" style={{ background: 'rgba(45,45,45,0.9)' }} />
        <div className="container mx-auto px-6 lg:px-[8%] relative z-10 py-20">
          <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-3" style={{ color: '#C8A96E' }}>{hero?.label || 'GET IN TOUCH'}</span>
          <h1 className="font-display font-semibold mb-3" style={{ fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: 1.08, color: '#FAF8F3' }}>
            {hero?.heading || hero?.title || websiteData?.themeConfig?.contactContent?.heroTitle || 'Contact Us'}
          </h1>
          {(hero?.subheading || websiteData?.themeConfig?.contactContent?.heroSubtitle) && (
            <p className="font-body font-light text-base max-w-xl leading-relaxed" style={{ color: 'rgba(250,248,243,0.6)' }}>{hero?.subheading || websiteData?.themeConfig?.contactContent?.heroSubtitle}</p>
          )}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="container mx-auto px-6 lg:px-[8%] py-4 flex items-center gap-2" style={{ borderBottom: '1px solid #E8E2D9' }}>
        <Link to="/" className="font-body text-xs" style={{ color: '#C8A96E' }}>Home</Link>
        <span className="font-body text-xs" style={{ color: '#6B6B6B' }}>/ Contact</span>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8%] grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <FadeIn>
            <h2 className="font-display font-semibold mb-8" style={{ fontSize: 'clamp(22px, 2.5vw, 34px)', color: '#2D2D2D' }}>Reach Us Directly</h2>
            <div className="space-y-5">
              {[
                { icon: '📞', label: 'Phone', value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
                { icon: '✉️', label: 'Email', value: email, href: `mailto:${email}` },
                { icon: '📍', label: 'Address', value: address, href: null },
                { icon: '🕐', label: 'Working Hours', value: hours, href: null },
              ].filter(i => i.value).map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-body text-[11px] font-semibold tracking-wider uppercase mb-1" style={{ color: '#C8A96E' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-display font-semibold text-sm" style={{ color: '#2D2D2D' }}>{item.value}</a>
                    ) : (
                      <p className="font-display font-semibold text-sm" style={{ color: '#2D2D2D' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <h2 className="font-display font-semibold mb-8" style={{ fontSize: 'clamp(22px, 2.5vw, 34px)', color: '#2D2D2D' }}>Send Us a Message</h2>
            {submitted ? (
              <div className="rounded-xl p-10 text-center" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(200,169,110,0.15)' }}>
                  <span style={{ color: '#C8A96E', fontSize: 24 }}>✓</span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2" style={{ color: '#2D2D2D' }}>Message Sent!</h3>
                <p className="font-body text-sm" style={{ color: '#6B6B6B' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                  </div>
                  <div>
                    <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                  </div>
                  <div>
                    <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Subject</label>
                    <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                  </div>
                </div>
                <div>
                  <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Your message..." className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3.5 rounded-md font-body text-[13px] font-semibold transition-all disabled:opacity-60" style={{ background: '#2D2D2D', color: '#FAF8F3' }}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* MAP */}
      {mapUrl && (
        <div style={{ height: 380 }}>
          <iframe src={mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Office Location" />
        </div>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
}
