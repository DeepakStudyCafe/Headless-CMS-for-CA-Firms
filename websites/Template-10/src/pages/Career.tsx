import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Clock, Users, TrendingUp, MapPin, Send, Upload, ChevronRight, Award, Heart, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import AnimatedStatValue from "@/components/ui/AnimatedStatValue";
import { getPageData, getWebsiteData } from "@/lib/api";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

// Map strings to dynamic icons just for rendering
const ICONS: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Clock: <Clock className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  Award: <Award className="w-7 h-7" />,
  Heart: <Heart className="w-7 h-7" />,
};

const Career = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", coverLetter: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("careers"), getWebsiteData()]).then(([page, site]) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", position: "", coverLetter: "" });
    }, 1500);
  };

  const hero = sectionContent(findSection(pageData, "hero"));
  const benefitsSec = sectionContent(findSection(pageData, "benefits", "features"));
  const jobsSec = sectionContent(findSection(pageData, "jobs", "openings"));
  const statsSec = sectionContent(findSection(pageData, "stats"));
  const formSec = sectionContent(findSection(pageData, "form"));
  const processSec = sectionContent(findSection(pageData, "process", "steps"));

  const cultureImages = hero?.images || [];
  const benefits = benefitsSec?.items || [];
  const openPositions = jobsSec?.items || jobsSec?.jobs || [];
  const stats = statsSec?.stats || statsSec?.items || [];
  const steps = processSec?.steps || processSec?.items || [];

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <ScrollProgress />
      <Navbar data={websiteData} />

      {/* HERO */}
      {hero?.title && (
        <section className="relative min-h-[620px] flex items-center justify-center overflow-hidden bg-primary pt-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${hero.imageUrl || "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"}')`,
              backgroundSize: "cover", backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-primary/70"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-24 text-center">
            <div>
              {hero.badge && (
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-fixed font-bold text-xs tracking-widest uppercase mb-6">{hero.badge}</span>
              )}
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-white leading-tight mb-6" dangerouslySetInnerHTML={{ __html: hero.title }} />
              {hero.description && (
                <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
                  {hero.description}
                </p>
              )}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all flex items-center gap-2 shadow-lg shadow-secondary/20"
                >
                  {hero.buttonText || "Apply Now"} <ArrowRight className="w-5 h-5" />
                </button>
                <Link to="/contact" className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  Contact Us
                </Link>
              </div>

              {hero.tags && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-widest text-white/70">
                  {hero.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">{tag}</span>
                  ))}
                </div>
              )}
            </div>

            {(cultureImages.length > 0) && (
              <div className="hidden xl:flex items-center justify-center gap-4 mt-12">
                {cultureImages.map((image: string, index: number) => (
                  <img key={index} src={image} alt="Culture" className="rounded-2xl w-40 h-28 object-cover border border-white/20 shadow-lg" />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* WHY JOIN US */}
      {(benefits.length > 0) && (
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-xs tracking-widest uppercase mb-6">{benefitsSec?.badge || "Why Join Us"}</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight" dangerouslySetInnerHTML={{ __html: benefitsSec?.title || "Benefits & Perks" }} />
              <p className="mt-4 text-on-surface-variant max-w-2xl mx-auto">{benefitsSec?.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b: any, i: number) => (
                <div key={i} className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    {ICONS[b.icon] || <Award className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary mb-3">{b.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OPEN POSITIONS */}
      {(openPositions.length > 0) && (
        <section className="py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-fixed font-bold text-xs tracking-widest uppercase mb-6">{jobsSec?.badge || "Open Roles"}</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white tracking-tight" dangerouslySetInnerHTML={{ __html: jobsSec?.title || "Current Opportunities" }} />
              <p className="mt-4 text-white/60 max-w-2xl">{jobsSec?.description || "Find your next role below. We review all applications within 5 business days."}</p>
            </div>
            <div className="space-y-5">
              {openPositions.map((job: any, i: number) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/10 transition-all group">
                  <div className="flex-1">
                    <h3 className="text-xl font-headline font-bold text-white mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-xs bg-secondary/20 text-secondary-fixed px-3 py-1 rounded-full font-bold">{job.department}</span>
                      <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">{job.type || "Full-Time"}</span>
                      <span className="text-xs text-white/50 flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed max-w-2xl mb-2">{job.description}</p>
                    <p className="text-xs text-white/40">Experience: {job.experience}</p>
                  </div>
                  <button
                    onClick={() => {
                      setForm({ ...form, position: job.title });
                      formRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-shrink-0 bg-secondary text-white px-6 py-3 rounded-xl font-bold text-sm hover:-translate-y-1 transition-all shadow-lg shadow-secondary/20 flex items-center gap-2 group-hover:scale-105"
                  >
                    Apply Now <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA STATS */}
      {(stats.length > 0) && (
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s: any, i: number) => (
              <div key={i} className="p-6 group">
                <AnimatedStatValue
                  value={s.value}
                  className="text-4xl font-headline font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-sm text-on-surface-variant font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* APPLICATION FORM */}
      <section ref={formRef} className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-xs tracking-widest uppercase mb-6">{formSec?.badge || "Apply Now"}</span>
            <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight mb-4" dangerouslySetInnerHTML={{ __html: formSec?.title || "Start Your Journey With Us" }} />
            <p className="text-on-surface-variant">{formSec?.description || "Fill out the form below and our HR team will reach out within 5 business days."}</p>
          </div>

          {submitted ? (
            <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Application Received!</h3>
              <p className="text-on-surface-variant">Thank you for your interest. Our HR team will review your application and get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-3xl p-8 md:p-10 border border-outline-variant/10 space-y-6 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Full Name *</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Priya Sharma" className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Email Address *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="priya@company.com" className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Phone Number *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Position of Interest *</label>
                  <select required value={form.position} onChange={e => setForm({ ...form, position: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all">
                    <option value="">Select a position</option>
                    {openPositions.map((p: any, i: number) => <option key={i} value={p.title || p.name}>{p.title || p.name}</option>)}
                    <option value="general">General Application</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Upload Resume/CV</label>
                <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-8 text-center cursor-pointer hover:border-secondary/50 transition-all">
                  <Upload className="w-8 h-8 mx-auto mb-3 text-on-surface-variant/40" />
                  <p className="text-sm text-on-surface-variant/60">Drag & drop or <span className="text-secondary font-semibold">click to upload</span></p>
                  <p className="text-xs text-on-surface-variant/40 mt-1">PDF, DOC, DOCX — Max 5MB</p>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">Cover Letter / Message (Optional)</label>
                <textarea rows={5} value={form.coverLetter} onChange={e => setForm({ ...form, coverLetter: e.target.value })} placeholder="Tell us why you'd be a great fit for this role..." className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none text-sm transition-all resize-none" />
              </div>
              <button type="submit" disabled={submitting} className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-1 transition-all shadow-lg shadow-primary/20 disabled:opacity-60">
                {submitting ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-5 h-5" />}
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* HIRING PROCESS */}
      {(steps.length > 0) && (
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight" dangerouslySetInnerHTML={{ __html: processSec?.title || "Our Hiring Process" }} />
              <p className="mt-4 text-on-surface-variant">{processSec?.description || "Simple, transparent, and respectful of your time."}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((s: any, i: number) => (
                <div key={i} className="relative text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-headline font-extrabold text-xl mx-auto mb-6">{s.step || `0${i + 1}`}</div>
                  {i < steps.length - 1 && <div className="hidden md:block absolute top-7 left-[60%] right-0 h-[2px] bg-outline-variant/20"></div>}
                  <h3 className="text-lg font-headline font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc || s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer data={websiteData} />
    </div>
  );
};

export default Career;
