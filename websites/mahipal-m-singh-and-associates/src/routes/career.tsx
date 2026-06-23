import { useState, useRef, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin, ArrowRight, GraduationCap, Heart, TrendingUp, Clock, Users, Scale, Upload, Send, LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — Mahipal M Singh & Associates" },
      { name: "description", content: "Build your career at Mahipal M Singh & Associates. Explore current openings for Chartered Accountants, articleship and audit professionals." },
    ],
  }),
  component: CareerPage,
});

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, TrendingUp, Heart, Clock, Users, Scale, Briefcase, MapPin
};

function CareerPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([getPageData('career'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formData = new FormData(e.currentTarget);
      formData.append('website', 'mahipal-m-singh-and-associates');
      
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.digitechai.in/api'}/forms/career`, {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) throw new Error('Failed to submit application');
      
      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-primary"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <SiteLayout>
        <main className="flex-grow"></main>
      </SiteLayout>
    );
  }

  const heroSection = pageData.sections?.find(s => s.type === 'hero');
  const textImageSection = pageData.sections?.find(s => s.type === 'text-image');
  const featuresSection = pageData.sections?.find(s => s.type === 'features');
  const jobsSection = pageData.sections?.find(s => s.type === 'job-openings');
  const formSection = pageData.sections?.find(s => s.type === 'form');
  const jobs = jobsSection?.textContent?.items || [];

  return (
    <SiteLayout websiteData={websiteData}>
      {heroSection && (
        <section className="border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Join Us</p>
              <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">{heroSection.textContent.heading}</h1>
              <p className="mt-6 text-lg text-subtle">{heroSection.textContent.subheading}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* CULTURE */}
      {textImageSection && (
        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Life at Our Firm" title={textImageSection.textContent.heading || "Company Culture"} />
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div className="space-y-6">
                  {textImageSection.textContent.items?.map((para: any, i: number) => (
                    <p key={i} className="text-base leading-relaxed text-subtle">{para.description || para.desc}</p>
                  ))}
                  {/* Fallback if no items but description exists */}
                  {!textImageSection.textContent.items && textImageSection.textContent.description && (
                    <p className="text-base leading-relaxed text-subtle">{textImageSection.textContent.description}</p>
                  )}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border-2 border-primary/20" />
                  <img
                    src={getImageUrl(textImageSection.imageUrl || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800")}
                    alt="Our Culture"
                    className="relative z-10 h-80 w-full rounded-2xl object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      {featuresSection && (
        <section className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Why Join Us" title={featuresSection.textContent.heading || "Benefits & Perks"} />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuresSection.textContent.items?.map((b: any, i: number) => {
                const Icon = iconMap[b.icon] || Heart;
                return (
                  <Reveal key={b.title || i} delay={i * 0.05}>
                    <div className="h-full rounded-2xl border border-border bg-background p-8 shadow-sm transition-colors hover:border-primary">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{b.title}</h3>
                      <p className="text-sm leading-relaxed text-subtle">{b.desc || b.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* OPEN POSITIONS */}
      {jobsSection && (
        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading eyebrow="Open Roles" title={jobsSection.textContent.heading || "Current Opportunities"} />
            <div className="mt-12 space-y-4">
              {jobs.map((j: any, i: number) => (
                <Reveal key={j.title || i} delay={i * 0.05}>
                  <div className="group flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{j.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm font-medium text-subtle">
                        <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {j.location}</span>
                        <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {j.type}</span>
                      </div>
                    </div>
                    <Button onClick={scrollToForm} variant="outline" className="border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* APPLICATION FORM */}
      {formSection && (
        <section ref={formRef} className="bg-foreground py-20 text-background">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Apply Now</span>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{formSection.textContent.heading || "Start Your Journey"}</h2>
            </div>
            
            <Reveal>
              <div className="rounded-2xl bg-background p-8 text-foreground shadow-lg md:p-10">
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 font-display text-2xl font-bold text-foreground">Application Submitted!</h3>
                    <p className="text-subtle">Our HR team will review your application and get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name</label>
                        <Input name="name" required placeholder="Your full name" className="bg-surface" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email Address</label>
                        <Input name="email" required type="email" placeholder="you@example.com" className="bg-surface" />
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number</label>
                        <Input name="phone" required type="tel" placeholder="+91 9466083070" className="bg-surface" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Position</label>
                        <select name="position" required className="flex h-10 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option value="">Select a position</option>
                          <option value="general">General Application</option>
                          {jobs.map((j: any) => <option key={j.title} value={j.title}>{j.title}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="mb-2 block text-sm font-medium text-foreground">Resume / CV</label>
                      <div className="cursor-pointer rounded-xl border-2 border-dashed border-border bg-surface/50 p-8 text-center transition-colors hover:border-primary/50">
                        <Upload className="mx-auto mb-3 h-8 w-8 text-primary/50" />
                        <p className="mb-1 text-sm text-foreground/80">Drag & drop your resume here or click to browse</p>
                        <p className="text-xs text-subtle">PDF, DOC, DOCX (Max 5MB)</p>
                        <input name="resume" required type="file" accept=".pdf,.doc,.docx" className="hidden" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Cover Letter (Optional)</label>
                      <Textarea name="coverLetter" placeholder="Tell us why you'd be a great fit..." rows={4} className="resize-none bg-surface" />
                    </div>
                    {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-secondary">
                      {isSubmitting ? "Submitting..." : <><Send className="mr-2 h-4 w-4" /> Submit Application</>}
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
