import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPageData, getWebsiteData } from "@/lib/api";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}

export default function Career() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", coverLetter: "" });
  const formRef = useRef<HTMLDivElement>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("career"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page); setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); setForm({ name: "", email: "", phone: "", position: "", coverLetter: "" }); }, 1500);
  };

  if (!pageData) {
    return (
      <div className="min-h-screen bg-ink font-body text-cream">
        <Navbar websiteData={websiteData} />
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
          <p className="font-display text-3xl text-cream">Page Not Found</p>
          <p className="font-body text-sm mt-3 text-mist">This page is not published in CMS yet.</p>
        </div>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, "hero"));
  const careerSec = sectionContent(findSection(pageData, "career"));
  const benefits: any[] = careerSec?.benefits || [];
  const openPositions: any[] = careerSec?.positions || [];
  const steps: any[] = careerSec?.processSteps || [];

  const inp = "w-full px-4 py-3 rounded-sm text-sm outline-none transition-all font-body bg-surface border border-gold/20 text-cream placeholder-mist focus:border-gold/50";

  return (
    <div className="bg-ink min-h-screen font-body text-cream">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      {hero?.heading && (
        <section className="relative min-h-[440px] flex items-end bg-ink overflow-hidden pt-20">
          {hero.image && (
            <>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hero.image}')`, opacity: 0.2 }} />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/50" />
            </>
          )}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
            <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{hero.label || "CAREERS"}</span>
            <h1 className="font-display text-5xl lg:text-7xl font-semibold text-cream leading-tight mb-4">{hero.heading || hero.title || "Join Our Team"}</h1>
            {hero.subheading && <p className="font-body text-lg text-mist max-w-xl mb-8">{hero.subheading}</p>}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })} className="shimmer-btn px-8 py-4 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.03] transition-transform">
                {hero.buttonText || "Apply Now"} →
              </button>
              <Link to="/contact" className="px-8 py-4 font-body text-sm font-medium text-cream border border-cream/30 rounded-sm hover:bg-white/5 transition-all text-center">Contact Us</Link>
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      {benefits.length > 0 && (
        <section className="py-24 bg-deep">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-3">{careerSec?.label || "Why Join Us"}</span>
                <h2 className="font-display text-4xl font-semibold text-cream">{careerSec?.heading || "Life at DigitechCA"}</h2>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b: any, i: number) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="rounded-lg p-7 h-full bg-ink border border-gold/15 hover:border-gold/35 transition-all hover:-translate-y-1">
                    <span className="font-display font-bold text-5xl block mb-4 leading-none" style={{ color: "rgba(200,169,110,0.15)" }}>0{i + 1}</span>
                    <h3 className="font-display font-semibold text-base text-cream mb-2">{b.title}</h3>
                    <p className="font-body text-sm text-mist leading-relaxed">{b.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OPEN POSITIONS */}
      {openPositions.length > 0 && (
        <section className="py-24 bg-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <FadeIn>
              <div className="mb-12">
                <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-3">{careerSec?.label || "Open Roles"}</span>
                <h2 className="font-display text-4xl font-semibold text-cream">{"Current Opportunities"}</h2>
              </div>
            </FadeIn>
            <div className="space-y-4">
              {openPositions.map((job: any, i: number) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="rounded-lg p-7 flex flex-col md:flex-row md:items-center justify-between gap-5 bg-surface border border-gold/15 hover:border-gold/35 transition-all">
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg text-cream mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.department && <span className="font-body text-[11px] px-3 py-1 rounded-full bg-gold/15 text-gold font-semibold">{job.department}</span>}
                        {job.type && <span className="font-body text-[11px] px-3 py-1 rounded-full bg-white/8 text-mist">{job.type}</span>}
                        {job.location && <span className="font-body text-[11px] text-mist/60">📍 {job.location}</span>}
                      </div>
                      {job.description && <p className="font-body text-sm text-mist leading-relaxed">{job.description}</p>}
                    </div>
                    <button onClick={() => { setForm({ ...form, position: job.title }); formRef.current?.scrollIntoView({ behavior: "smooth" }); }}
                      className="shimmer-btn flex-shrink-0 px-6 py-3 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.03] transition-transform">
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
      <section ref={formRef} className="py-24 bg-deep">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-3">{"Apply Now"}</span>
              <h2 className="font-display text-4xl font-semibold text-cream">{"Start Your Journey With Us"}</h2>
              <p className="font-body text-sm text-mist mt-3">{"Fill out the form and our HR team will reach out within 5 business days."}</p>
            </div>
          </FadeIn>
          {submitted ? (
            <div className="rounded-lg p-12 text-center bg-ink border border-gold/20">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-gold/10 border border-gold/30">
                <span className="text-gold text-2xl">✓</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-cream mb-2">Application Received!</h3>
              <p className="font-body text-sm text-mist">Thank you. We'll review your application shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-lg p-8 space-y-5 bg-ink border border-gold/15">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Full Name *</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inp} />
                </div>
                <div>
                  <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className={inp} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Phone *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className={inp} />
                </div>
                <div>
                  <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Position *</label>
                  <select required value={form.position} onChange={e => setForm({ ...form, position: e.target.value })} className={`${inp} cursor-pointer`}>
                    <option value="">Select a position</option>
                    {openPositions.map((p: any, i: number) => <option key={i} value={p.title || p.name}>{p.title || p.name}</option>)}
                    <option value="general">General Application</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Cover Letter (Optional)</label>
                <textarea rows={5} value={form.coverLetter} onChange={e => setForm({ ...form, coverLetter: e.target.value })} placeholder="Tell us why you'd be a great fit..." className={`${inp} resize-none`} />
              </div>
              <button type="submit" disabled={submitting} className="w-full shimmer-btn py-3.5 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.02] transition-transform disabled:opacity-60">
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* HIRING PROCESS */}
      {steps.length > 0 && (
        <section className="py-20 bg-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl font-semibold text-cream">{"Our Hiring Process"}</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-5">
              {steps.map((s: any, i: number) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="text-center p-7 rounded-lg bg-surface border border-gold/15">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg mx-auto mb-5 bg-gold text-ink">{s.step || String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display font-semibold text-sm text-cream mb-2">{s.title}</h3>
                    <p className="font-body text-xs text-mist leading-relaxed">{s.desc || s.description}</p>
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
