import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { API_URL, WEBSITE_SLUG, getPageData, getWebsiteData } from "@/lib/api";
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

export default function Query() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", queryType: "", message: "" });

  const loadData = useCallback(() => {
    Promise.all([getPageData("query"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page); setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(`${API_URL}/forms/submit`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, websiteSlug: WEBSITE_SLUG, formType: "query" }) });
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", queryType: "", message: "" });
    } catch { alert("Something went wrong."); }
    finally { setSubmitting(false); }
  };

  const hero = sectionContent(findSection(pageData, "hero"));
  const formSec = sectionContent(findSection(pageData, "faqs", "form", "faq"));
  const infoSec = sectionContent(findSection(pageData, "info", "contact"));
  const faqs = formSec?.items || formSec?.faqs || [];
  const services = (websiteData?.themeConfig?.services || []).map((s: any) => s.title);
  const queryTypes = formSec?.queryTypes || ["General Inquiry", "Pricing & Packages", "Service Details", "Tax Planning", "Compliance Issues"];

  const inp = "w-full px-4 py-3 rounded-sm text-sm outline-none transition-all font-body bg-surface border border-gold/20 text-cream placeholder-mist focus:border-gold/50";

  return (
    <div className="bg-ink min-h-screen font-body text-cream">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative min-h-[340px] flex items-end bg-ink overflow-hidden pt-20">
        <div className="absolute inset-0 bg-ink/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16">
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{hero?.label || "SUBMIT A QUERY"}</span>
          <h1 className="font-display text-5xl lg:text-6xl font-semibold text-cream leading-tight mb-4">
            {hero?.heading || hero?.title || "Ask Us Anything"}
          </h1>
          {hero?.subheading && <p className="font-body text-lg text-mist max-w-xl">{hero.subheading}</p>}
        </div>
      </section>

      {/* FORM + FAQs */}
      <section className="py-24 bg-deep">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-cream mb-8">{formSec?.title || formSec?.heading || "Submit Your Query"}</h2>
            {submitted ? (
              <div className="rounded-lg p-10 text-center bg-ink border border-gold/20">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-gold/10 border border-gold/30">
                  <span className="text-gold text-2xl">✓</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-cream mb-2">Query Received!</h3>
                <p className="font-body text-sm text-mist mb-6">Our experts will respond within 24 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="font-body text-sm text-gold hover:underline">Submit Another →</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inp} />
                  </div>
                  <div>
                    <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className={inp} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Phone *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className={inp} />
                  </div>
                  <div>
                    <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Query Type *</label>
                    <select required value={form.queryType} onChange={e => setForm({ ...form, queryType: e.target.value })} className={`${inp} cursor-pointer`}>
                      <option value="">Select type</option>
                      {queryTypes.map((qt: string, i: number) => <option key={i} value={qt}>{qt}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Service of Interest</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className={`${inp} cursor-pointer`}>
                    <option value="">Select a service (optional)</option>
                    {services.map((s: string, i: number) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-mono-label text-[10px] text-gold tracking-wider uppercase block mb-1.5">Your Query *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Describe your question..." className={`${inp} resize-none`} />
                </div>
                <button type="submit" disabled={submitting} className="w-full shimmer-btn py-3.5 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.02] transition-transform disabled:opacity-60">
                  {submitting ? "Submitting..." : (formSec?.buttonText || "Submit Query")}
                </button>
              </form>
            )}
          </FadeIn>

          {faqs.length > 0 && (
            <FadeIn delay={0.1}>
              <h2 className="font-display text-3xl font-semibold text-cream mb-8">{formSec?.faqTitle || "Frequently Asked Questions"}</h2>
              <div className="space-y-3">
                {faqs.map((faq: any, i: number) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-gold/15">
                    <button className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 bg-ink hover:bg-surface transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span className="font-display font-semibold text-sm text-cream">{faq.q || faq.question}</span>
                      <span className="text-gold flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 pt-3 font-body text-sm text-mist leading-relaxed bg-deep border-t border-gold/10">{faq.a || faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* CONTACT QUICK INFO */}
      <section className="py-16 bg-ink">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="font-display text-3xl font-semibold text-cream text-center mb-10">{infoSec?.title || "Prefer to Reach Us Directly?"}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "📞", title: "Call Us", info: websiteData?.phone || "", href: `tel:${(websiteData?.phone || "").replace(/\s/g, "")}` },
              { icon: "✉️", title: "Email Us", info: websiteData?.email || "", href: `mailto:${websiteData?.email || ""}` },
              { icon: "💬", title: "WhatsApp", info: websiteData?.phone || "", href: `https://wa.me/${(websiteData?.phone || "").replace(/[^0-9]/g, "")}` },
            ].filter(i => i.info).map((item, i) => (
              <a key={i} href={item.href} className="flex items-center gap-4 p-5 rounded-lg bg-surface border border-gold/15 hover:border-gold/35 transition-all hover:-translate-y-1">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-display font-semibold text-sm text-cream">{item.title}</p>
                  <p className="font-body text-xs text-mist">{item.info}</p>
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
