import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPageData, getWebsiteData } from "@/lib/api";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const loadData = useCallback(() => {
    Promise.all([getPageData("contact"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page); setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }, 1500);
  };

  const hero = sectionContent(findSection(pageData, "hero"));
  const infoSec = sectionContent(findSection(pageData, "contact-info", "info", "contact"));
  const mapUrl = websiteData?.themeConfig?.contactContent?.mapUrl || infoSec?.mapUrl || "";
  const phone = websiteData?.phone || infoSec?.phone || "";
  const email = websiteData?.email || infoSec?.email || "";
  const address = websiteData?.address || infoSec?.address || "";
  const hours = websiteData?.workingHours || infoSec?.workingHours || "";

  const inp = "w-full px-4 py-3 rounded-sm text-sm outline-none transition-all font-body bg-surface border border-gold/20 text-cream placeholder-mist focus:border-gold/50";

  return (
    <div className="bg-ink min-h-screen font-body text-cream">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative min-h-[380px] flex items-end bg-ink overflow-hidden pt-20">
        {hero?.image && (
          <>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hero.image}')`, opacity: 0.2 }} />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{hero?.label || "GET IN TOUCH"}</span>
          <h1 className="font-display text-5xl lg:text-7xl font-semibold text-cream leading-tight mb-4">
            {hero?.heading || hero?.title || websiteData?.themeConfig?.contactContent?.heroTitle || "Contact Us"}
          </h1>
          {(hero?.subheading || websiteData?.themeConfig?.contactContent?.heroSubtitle) && (
            <p className="font-body text-lg text-mist max-w-xl">{hero?.subheading || websiteData?.themeConfig?.contactContent?.heroSubtitle}</p>
          )}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center gap-2 border-b border-gold/20">
        <Link to="/" className="font-body text-xs text-gold">Home</Link>
        <span className="font-body text-xs text-mist">/ Contact</span>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-deep">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-cream mb-8">Reach Us Directly</h2>
            <div className="space-y-4">
              {[
                { icon: "📞", label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
                { icon: "✉️", label: "Email", value: email, href: `mailto:${email}` },
                { icon: "📍", label: "Address", value: address, href: null },
                { icon: "🕐", label: "Working Hours", value: hours, href: null },
              ].filter(i => i.value).map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-lg bg-ink border border-gold/15 hover:border-gold/35 transition-all">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-mono-label text-[10px] text-gold tracking-wider uppercase mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-display font-semibold text-sm text-cream hover:text-gold transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-display font-semibold text-sm text-cream">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-cream mb-8">Send Us a Message</h2>
            {submitted ? (
              <div className="rounded-lg p-10 text-center bg-ink border border-gold/20">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-gold/10 border border-gold/30">
                  <span className="text-gold text-2xl">✓</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-cream mb-2">Message Sent!</h3>
                <p className="font-body text-sm text-mist">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inp} />
                  </div>
                  <div>
                    <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className={inp} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className={inp} />
                  </div>
                  <div>
                    <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Subject</label>
                    <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className={inp} />
                  </div>
                </div>
                <div>
                  <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Your message..." className={`${inp} resize-none`} />
                </div>
                <button type="submit" disabled={submitting} className="w-full shimmer-btn py-3.5 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.02] transition-transform disabled:opacity-60">
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {mapUrl && (
        <div style={{ height: 380 }}>
          <iframe src={mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Office Location" />
        </div>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
}
