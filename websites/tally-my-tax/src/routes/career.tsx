import { getImageUrl } from '@/lib/api';
import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, TrendingUp, Clock, Users, Scale, Upload, Briefcase, Send, Target } from "lucide-react";
import { getPageData } from "@/lib/api";

export const Route = createFileRoute("/career")({
  component: CareerPage,
});

const iconMap: Record<string, any> = {
  GraduationCap, TrendingUp, Clock, Users, Scale, Target, Briefcase
};

function CareerPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", coverLetter: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [pageData, setPageData] = useState<any>(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    getPageData('career').then((data) => {
      setPageData(data);
      setPageLoading(false);
    });
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { API_URL, WEBSITE_SLUG } = await import("@/lib/api");
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("position", form.position);
      formData.append("comments", form.coverLetter);
      formData.append("website", WEBSITE_SLUG);
      
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput?.files?.[0]) {
        formData.append("resume", fileInput.files[0]);
      }
      
      const res = await fetch(`${API_URL}/form/career`, {
        method: "POST",
        body: formData
      });
      if (res.ok) {
        setDone(true);
        setForm({ name: "", email: "", phone: "", position: "", coverLetter: "" });
        if (fileInput) fileInput.value = "";
        setTimeout(() => setDone(false), 3000);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (err) {
      alert("Error submitting application.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const cultureSection = pageData?.sections?.find((s: any) => s.type === 'culture');
  const benefitsSection = pageData?.sections?.find((s: any) => s.type === 'benefits');

  const heroTitle = heroSection?.textContent?.heading || "Join Us";
  const heroSubtitle = heroSection?.textContent?.title || "Build your career with Excellence";
  const heroDesc = heroSection?.textContent?.description || "We are always looking for talented, driven individuals to join our growing team of professionals.";

  const cultureTitle = cultureSection?.textContent?.title || "Our Culture";
  const cultureHeading = cultureSection?.textContent?.heading || "Life at Our Firm";
  const cultureDescription = cultureSection?.textContent?.description || "";
  const cultureFeatures = cultureSection?.textContent?.features || [];
  const cultureImage = cultureSection?.imageUrl || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";

  const benefitsTitle = benefitsSection?.textContent?.title || "Benefits & Perks";
  const benefitsHeading = benefitsSection?.textContent?.heading || "Why Join Us";
  const benefitsData = benefitsSection?.textContent?.items || [];

  return (
    <div className="">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-primary opacity-[0.03]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-primary uppercase inline-block mb-4"
          >
            {heroTitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {heroSubtitle.split(' ').map((word: string, i: number, arr: any) => {
              if (i === arr.length - 1 || i === arr.length - 2) {
                 return <span key={i} className="text-gradient"> {word}</span>;
              }
              return <span key={i}> {word}</span>;
            })}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {heroDesc}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={scrollToForm}
            className="btn-premium px-8 py-3"
          >
            View Openings
          </motion.button>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-secondary/30">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{cultureHeading}</span>
            <h2 className="mt-3 text-3xl font-bold">{cultureTitle}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {cultureDescription && (
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {cultureDescription}
                </p>
              )}
              {cultureFeatures.length > 0 && (
                <ul className="space-y-4">
                  {cultureFeatures.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Target className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-xl rounded-3xl" />
              <img
                src={getImageUrl(cultureImage)}
                alt={cultureTitle}
                className="relative rounded-3xl w-full h-80 object-cover shadow-card border border-border/50"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-background">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{benefitsHeading}</span>
            <h2 className="mt-3 text-3xl font-bold">{benefitsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit: any, i: number) => {
              const Icon = iconMap[benefit.icon] || GraduationCap;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass p-8 rounded-2xl border border-border/50 shadow-soft h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30 relative">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Apply Now</span>
            <h2 className="mt-3 text-3xl font-bold">Start Your Journey</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-10 rounded-3xl shadow-card border border-border/50"
          >
            <form onSubmit={submit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Position Applying For</label>
                  <select
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                    value={form.position}
                    onChange={(e) => setForm({ ...form, position: e.target.value })}
                  >
                    <option value="" disabled>Select a position</option>
                    <option value="Audit Executive">Audit Executive</option>
                    <option value="Tax Consultant">Tax Consultant</option>
                    <option value="Article Assistant">Article Assistant</option>
                    <option value="Accounts Manager">Accounts Manager</option>
                    <option value="General Application">General Application</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-2">Resume / CV</label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer bg-background">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm font-medium mb-1">Drag & drop your resume here or click to browse</p>
                  <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Cover Letter (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell us why you'd be a great fit..."
                  value={form.coverLetter}
                  onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-premium py-4 mt-2 disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {loading ? "Submitting..." : done ? "Application Submitted ✓" : (
                  <>
                    <Send className="w-4 h-4" /> Submit Application
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

