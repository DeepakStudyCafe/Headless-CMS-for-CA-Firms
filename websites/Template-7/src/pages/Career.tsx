import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getPageData, getWebsiteData } from '@/lib/api';
import { findSection, sectionContent } from '@/lib/sectionHelpers';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.12);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export default function Career() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', coverLetter: '' });
  const formRef = useRef<HTMLDivElement>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData('career'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); setForm({ name: '', email: '', phone: '', position: '', coverLetter: '' }); }, 1500);
  };

  if (!pageData) {
    return (
      <div style={{ background: '#FAF8F3', minHeight: '100vh' }}>
        <Navbar websiteData={websiteData} />
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
          <p className="font-display text-3xl font-semibold" style={{ color: '#2D2D2D' }}>Page Not Found</p>
          <p className="font-body text-sm mt-3" style={{ color: '#6B6B6B' }}>This page is not published in CMS yet.</p>
        </div>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, 'hero'));
  const careerSec = sectionContent(findSection(pageData, 'career'));
  const benefits: any[] = careerSec?.benefits || [];
  const openPositions: any[] = careerSec?.positions || [];
  const steps: any[] = careerSec?.processSteps || [];

  return (
    <div style={{ background: '#FAF8F3', minHeight: '100vh' }} className="font-body">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      {hero?.heading && (
        <section className="relative flex items-end overflow-hidden pt-20" style={{ background: '#2D2D2D', minHeight: '400px' }}>
          {hero.image && <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('${hero.image}')` }} />}
          <div className="absolute inset-0" style={{ background: 'rgba(45,45,45,0.88)' }} />
          <div className="container mx-auto px-6 lg:px-[8%] relative z-10 py-20">
            <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-3" style={{ color: '#C8A96E' }}>{hero.label || 'CAREERS'}</span>
            <h1 className="font-display font-semibold mb-4" style={{ fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: 1.08, color: '#FAF8F3' }}>{hero.heading || hero.title || 'Join Our Team'}</h1>
            {hero.subheading && <p className="font-body font-light text-base max-w-xl leading-relaxed mb-8" style={{ color: 'rgba(250,248,243,0.6)' }}>{hero.subheading}</p>}
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} className="font-body text-[13px] font-semibold px-7 py-3 rounded-md" style={{ background: '#C8A96E', color: '#FAF8F3' }}>
                {hero.buttonText || 'Apply Now'} →
              </button>
              <Link to="/contact" className="font-body text-[13px] font-medium px-7 py-3 rounded-md text-center" style={{ border: '1.5px solid rgba(250,248,243,0.3)', color: 'rgba(250,248,243,0.8)' }}>Contact Us</Link>
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      {benefits.length > 0 && (
        <section className="py-24" style={{ background: '#F2EDE4' }}>
          <div className="container mx-auto px-6 lg:px-[8%]">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-2" style={{ color: '#C8A96E' }}>{careerSec?.label || 'Why Join Us'}</span>
                <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(22px, 3vw, 36px)', color: '#2D2D2D' }}>{careerSec?.heading || 'Life at DigitechCA'}</h2>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b: any, i: number) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="rounded-xl p-7 h-full" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                    <span className="font-display font-bold text-4xl block mb-4 leading-none" style={{ color: 'rgba(200,169,110,0.2)' }}>0{i + 1}</span>
                    <h3 className="font-display font-semibold text-[15px] mb-2" style={{ color: '#2D2D2D' }}>{b.title}</h3>
                    <p className="font-body text-[13px] leading-relaxed" style={{ color: '#6B6B6B' }}>{b.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OPEN POSITIONS */}
      {openPositions.length > 0 && (
        <section className="py-24" style={{ background: '#2D2D2D' }}>
          <div className="container mx-auto px-6 lg:px-[8%]">
            <FadeIn>
              <div className="mb-12">
                <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-2" style={{ color: '#C8A96E' }}>{careerSec?.label || 'Open Roles'}</span>
                <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(22px, 3vw, 36px)', color: '#FAF8F3' }}>{'Current Opportunities'}</h2>
              </div>
            </FadeIn>
            <div className="space-y-4">
              {openPositions.map((job: any, i: number) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="rounded-xl p-7 flex flex-col md:flex-row md:items-center justify-between gap-5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg mb-2" style={{ color: '#FAF8F3' }}>{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.department && <span className="font-body text-[11px] px-3 py-1 rounded-full font-semibold" style={{ background: 'rgba(200,169,110,0.2)', color: '#C8A96E' }}>{job.department}</span>}
                        {job.type && <span className="font-body text-[11px] px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(250,248,243,0.7)' }}>{job.type}</span>}
                        {job.location && <span className="font-body text-[11px]" style={{ color: 'rgba(250,248,243,0.5)' }}>📍 {job.location}</span>}
                      </div>
                      {job.description && <p className="font-body text-[13px] leading-relaxed" style={{ color: 'rgba(250,248,243,0.55)' }}>{job.description}</p>}
                    </div>
                    <button onClick={() => { setForm({ ...form, position: job.title }); formRef.current?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="font-body text-[13px] font-semibold px-6 py-2.5 rounded-md flex-shrink-0" style={{ background: '#C8A96E', color: '#FAF8F3' }}>
                      Apply Now →
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* APPLICATION FORM */}
      <section ref={formRef} className="py-24">
        <div className="container mx-auto px-6 lg:px-[8%] max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase block mb-2" style={{ color: '#C8A96E' }}>{'Apply Now'}</span>
              <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(22px, 3vw, 36px)', color: '#2D2D2D' }}>{'Start Your Journey With Us'}</h2>
              <p className="font-body text-sm mt-3" style={{ color: '#6B6B6B' }}>{'Fill out the form and our HR team will reach out within 5 business days.'}</p>
            </div>
          </FadeIn>
          {submitted ? (
            <div className="rounded-xl p-12 text-center" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(200,169,110,0.15)' }}>
                <span style={{ color: '#C8A96E', fontSize: 24 }}>✓</span>
              </div>
              <h3 className="font-display font-semibold text-xl mb-2" style={{ color: '#2D2D2D' }}>Application Received!</h3>
              <p className="font-body text-sm" style={{ color: '#6B6B6B' }}>Thank you for your interest. We'll review your application and get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-xl p-8 space-y-5" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Full Name *</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: '#FAF8F3', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                </div>
                <div>
                  <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: '#FAF8F3', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Phone *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: '#FAF8F3', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
                </div>
                <div>
                  <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Position of Interest *</label>
                  <select required value={form.position} onChange={e => setForm({ ...form, position: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm outline-none cursor-pointer" style={{ background: '#FAF8F3', border: '1px solid #E8E2D9', color: '#2D2D2D' }}>
                    <option value="">Select a position</option>
                    {openPositions.map((p: any, i: number) => <option key={i} value={p.title || p.name}>{p.title || p.name}</option>)}
                    <option value="general">General Application</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-body text-[11px] font-semibold tracking-wider uppercase block mb-1.5" style={{ color: '#6B6B6B' }}>Cover Letter (Optional)</label>
                <textarea rows={5} value={form.coverLetter} onChange={e => setForm({ ...form, coverLetter: e.target.value })} placeholder="Tell us why you'd be a great fit..." className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ background: '#FAF8F3', border: '1px solid #E8E2D9', color: '#2D2D2D' }} />
              </div>
              <button type="submit" disabled={submitting} className="w-full py-3.5 rounded-md font-body text-[13px] font-semibold disabled:opacity-60" style={{ background: '#2D2D2D', color: '#FAF8F3' }}>
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* HIRING PROCESS */}
      {steps.length > 0 && (
        <section className="py-20" style={{ background: '#F2EDE4' }}>
          <div className="container mx-auto px-6 lg:px-[8%]">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(22px, 3vw, 36px)', color: '#2D2D2D' }}>{'Our Hiring Process'}</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((s: any, i: number) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="text-center p-7 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg mx-auto mb-5" style={{ background: '#2D2D2D', color: '#FAF8F3' }}>{s.step || String(i + 1).padStart(2, '0')}</div>
                    <h3 className="font-display font-semibold text-[14px] mb-2" style={{ color: '#2D2D2D' }}>{s.title}</h3>
                    <p className="font-body text-[12px] leading-relaxed" style={{ color: '#6B6B6B' }}>{s.desc || s.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
}
