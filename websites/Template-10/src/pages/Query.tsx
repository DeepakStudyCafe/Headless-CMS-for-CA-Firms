import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Send, MessageSquare, Phone, Mail, Clock, ChevronDown, ChevronUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { API_URL, WEBSITE_SLUG, getPageData, getWebsiteData } from "@/lib/api";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

const Query = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", queryType: "", message: "" });

  const loadData = useCallback(() => {
    Promise.all([getPageData("query"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
    });
  }, []);

  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [loadData]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col items-center pt-32">
        <Navbar data={websiteData} />
        <section className="py-24 text-center">
          <h1 className="font-display text-4xl text-on-surface">Page Content Not Found</h1>
          <p className="mt-3 text-on-surface-variant">
            This route is not published yet in CMS. Open /admin and publish or create sections for this page.
          </p>
        </section>
        <Footer data={websiteData} />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/forms/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          websiteSlug: WEBSITE_SLUG,
          formType: "query",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", queryType: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const hero = sectionContent(findSection(pageData, "hero"));
  const formSection = sectionContent(findSection(pageData, "form", "faq"));
  const infoSection = sectionContent(findSection(pageData, "info", "contact"));
  const cta = sectionContent(findSection(pageData, "cta"));

  const faqs = formSection?.faqs || formSection?.items || [];
  const services = formSection?.services || ["Bookkeeping", "Payroll Management", "Company Formation", "Audit Services", "GST Filing & Compliance", "Tax Planning", "Regulatory Compliance", "Financial Advisory"];
  const queryTypes = formSection?.queryTypes || ["General Inquiry", "Pricing & Packages", "Service Details", "Compliance Issues", "Tax Planning Advice", "Partnership Opportunity"];

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <ScrollProgress />
      <Navbar data={websiteData} />
      {/* HERO */}
      {hero?.title && (
        <section className="relative min-h-[420px] flex items-center overflow-hidden bg-primary pt-20">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${hero.imageUrl || "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
            {hero.badge && (
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-fixed font-bold text-xs tracking-widest uppercase mb-6">{hero.badge}</span>
            )}
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-white leading-tight mb-6 max-w-3xl" dangerouslySetInnerHTML={{ __html: hero.title }} />
            {hero.description && (
              <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{hero.description}</p>
            )}
            <div className="flex flex-wrap gap-4">
              {(hero.features || ["Response within 24 hours", "Expert-reviewed responses"]).map((f: string, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary-fixed" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QUERY FORM + FAQS */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* FORM */}
          <div>
            <h2 className="text-3xl font-headline font-extrabold text-primary mb-8">{formSection?.title || "Submit Your Query"}</h2>
            {submitted ? (
              <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-3">Query Received!</h3>
                <p className="text-on-surface-variant mb-6">Our experts will review your query and respond within 24 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-secondary font-bold flex items-center gap-2 hover:underline">
                  Submit Another <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Your Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Rahul Gupta" className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="rahul@company.com" className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Phone Number *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Query Type *</label>
                    <select required value={form.queryType} onChange={e => setForm({ ...form, queryType: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all cursor-pointer">
                      <option value="">Select type</option>
                      {queryTypes.map((qt: string, i: number) => <option key={i} value={qt}>{qt}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Service of Interest</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all cursor-pointer">
                    <option value="">Select a service (optional)</option>
                    {services.map((s: string, i: number) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Your Query *</label>
                  <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Describe your requirement or question in as much detail as possible..." className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all resize-none" />
                </div>
                <button type="submit" disabled={submitting} className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-1 transition-all shadow-lg shadow-primary/20 disabled:opacity-60">
                  {submitting ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-5 h-5" />}
                  {submitting ? "Submitting..." : (formSection?.buttonText || "Submit Query")}
                </button>
              </form>
            )}
          </div>

          {/* FAQs */}
          {(faqs.length > 0) && (
            <div>
              <h2 className="text-3xl font-headline font-extrabold text-primary mb-8">{formSection?.faqTitle || "Frequently Asked Questions"}</h2>
              <div className="space-y-4">
                {faqs.map((faq: any, i: number) => (
                  <div key={i} className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest overflow-hidden">
                    <button
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-headline font-bold text-primary text-base leading-snug">{faq.q || faq.question}</span>
                      {openFaq === i ? <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-on-surface-variant flex-shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                        {faq.a || faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT QUICK INFO */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-headline font-extrabold text-primary text-center mb-12">{infoSection?.title || "Prefer to Reach Us Directly?"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Phone className="w-7 h-7" />, title: "Call Us", info: infoSection?.phone || websiteData?.phone || "+91 22 4567 8900", sub: "Mon–Sat, 9AM–7PM IST", href: `tel:${infoSection?.phone || websiteData?.phone}` },
              { icon: <Mail className="w-7 h-7" />, title: "Email Us", info: infoSection?.email || websiteData?.email || "info@arvindca.com", sub: "Response within 24h", href: `mailto:${infoSection?.email || websiteData?.email}` },
              { icon: <MessageSquare className="w-7 h-7" />, title: "WhatsApp", info: infoSection?.whatsapp || "+91 98765 43210", sub: "Quick queries & documents", href: `https://wa.me/${(infoSection?.whatsapp || '').replace(/[^0-9]/g, '')}` },
            ].map((item, i) => (
              <a key={i} href={item.href} className="flex items-start gap-5 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="font-semibold text-on-surface text-sm">{item.info}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{item.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {cta?.title && (
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-4xl font-headline font-extrabold text-white mb-6" dangerouslySetInnerHTML={{ __html: cta.title }} />
            {cta.description && (
              <p className="text-white/70 text-lg mb-8">{cta.description}</p>
            )}
            {cta.buttonText && (
              <Link to={cta.buttonLink || "/contact"} className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all shadow-lg shadow-secondary/20">
                {cta.buttonText} <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </section>
      )}

      <Footer data={websiteData} />
    </div>
  );
};

export default Query;
