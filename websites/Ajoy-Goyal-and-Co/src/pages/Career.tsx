import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { IconByName } from "@/components/IconByName";
import { Send } from "lucide-react";
import careerHero from "@/assets/career-hero.jpg";
import { useState } from 'react';
import { usePageData } from "@/hooks/useWebsiteData";
import { getImageUrl, submitCareerForm } from "@/lib/api";
import { toast } from "react-toastify";

const Career = () => {
  const [submitting, setSubmitting] = useState(false);
  const { getSection, isLoading } = usePageData('career');

  const heroSecObj = getSection('page-hero');
  const introSecObj = getSection('career-intro');
  const benefitsSecObj = getSection('career-benefits');
  const jobOpeningsSecObj = getSection('job-openings');

  const heroSec = heroSecObj?.textContent;
  const introSec = introSecObj?.textContent;
  const benefitsSec = benefitsSecObj?.textContent;
  const jobOpeningsSec = jobOpeningsSecObj?.textContent;

  const heroImage = (heroSecObj?.imageUrl) ? getImageUrl(heroSecObj.imageUrl) : careerHero;

  const benefits = benefitsSec?.items || [];
  const jobs = jobOpeningsSec?.items || [];

  return (
    <Layout>
      <PageHero
        title={heroSec?.title}
        subtitle={heroSec?.subtitle}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
        image={heroImage}
      />

      <section className="py-24 bg-background">
        <div className="container text-center">
          <ScrollReveal>
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">{introSec?.badge}</span>
            <div className="section-divider mt-3 mb-5 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{introSec?.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{introSec?.description}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container">
          <SectionHeading label={benefitsSec?.label} title={benefitsSec?.heading} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-primary/10 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-subtle mx-auto flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconByName name={b.icon} className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <SectionHeading label="Join Our Team" title="Apply for a Position" />
          <ScrollReveal>
            <div className="bg-card rounded-2xl card-shadow border border-border p-8 md:p-12">
              <form 
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  formData.append('website', import.meta.env.VITE_WEBSITE_SLUG || 'ajoy-goyal-and-co');
                  
                  setSubmitting(true);
                  try {
                    const res = await submitCareerForm(formData);
                    if (res?.success) {
                      toast.success(res.message || 'Application submitted successfully!');
                      form.reset();
                    } else {
                      toast.error(res?.message || 'Failed to submit application.');
                    }
                  } catch (err) {
                    toast.error('An error occurred. Please try again.');
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input name="firstName" type="text" required placeholder="John" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input name="lastName" type="text" required placeholder="Doe" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <input name="email" type="email" required placeholder="john@example.com" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <input name="mobile" type="tel" required placeholder="+91 98765 43210" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Position Applied For</label>
                    <select name="position" required className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition">
                      <option value="" disabled selected>Select Position</option>
                      <option value="Chartered Accountant">Chartered Accountant</option>
                      <option value="Audit Manager">Audit Manager</option>
                      <option value="Tax Consultant">Tax Consultant</option>
                      <option value="Articled Assistant">Articled Assistant</option>
                      <option value="Accountant">Accountant</option>
                      <option value="Intern">Intern</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Resume / CV (PDF)</label>
                    <input name="resume" type="file" accept=".pdf,.doc,.docx" required className="w-full px-5 py-2.5 rounded-xl border bg-card text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Cover Letter / Message</label>
                  <textarea name="comments" rows={4} placeholder="Tell us why you'd be a great fit..." className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none" />
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
