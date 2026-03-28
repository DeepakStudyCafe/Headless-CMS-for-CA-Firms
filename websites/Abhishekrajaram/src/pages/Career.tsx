import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Briefcase, Heart, BookOpen, TrendingUp, Send, MapPin, Clock, CheckCircle } from 'lucide-react';
import heroTeam from '@/assets/hero-team.jpg';
import { API_URL, WEBSITE_SLUG, getPageData } from '@/lib/api';

const careerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().optional(),
  message: z.string().optional(),
});
type CareerForm = z.infer<typeof careerSchema>;

const inp = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30";

const iconMap: Record<string, any> = { TrendingUp, BookOpen, Heart, Briefcase };

const Career = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<CareerForm>({
    resolver: zodResolver(careerSchema),
  });

  useEffect(() => {
    getPageData('career').then(setPageData);
  }, []);

  const onSubmit = async (data: CareerForm) => {
    setSubmitError('');
    try {
      const res = await fetch(`${API_URL}/forms/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, websiteSlug: WEBSITE_SLUG, formType: 'career' }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const careerSection = pageData?.sections?.find((s: any) => s.type === 'career');

  const benefits = careerSection?.textContent?.benefits || [
    { icon: 'TrendingUp', title: 'Growth Opportunities', description: 'Clear career progression paths and mentoring from industry leaders.' },
    { icon: 'BookOpen', title: 'Continuous Learning', description: '200+ hours of training annually including professional certifications.' },
    { icon: 'Heart', title: 'Work-Life Balance', description: 'Flexible working arrangements and comprehensive wellness programs.' },
    { icon: 'Briefcase', title: 'Competitive Compensation', description: 'Industry-leading packages with performance bonuses and benefits.' },
  ];

  const positions = careerSection?.textContent?.positions || [
    { title: 'Senior Audit Manager', department: 'Audit & Assurance', location: 'Mumbai', type: 'Full-time', experience: '8-12 years' },
    { title: 'Tax Consultant', department: 'Direct Tax', location: 'Delhi', type: 'Full-time', experience: '3-5 years' },
    { title: 'GST Analyst', department: 'Indirect Tax', location: 'Bangalore', type: 'Full-time', experience: '2-4 years' },
    { title: 'Associate - Financial Advisory', department: 'Advisory', location: 'Mumbai', type: 'Full-time', experience: '1-3 years' },
    { title: 'Articleship Trainee', department: 'Audit', location: 'Multiple Locations', type: 'Articleship', experience: 'CA Inter' },
  ];

  return (
    <Layout>
      <PageHero
        title={heroSection?.textContent?.heading?.replace(/\s\S+\s\S+$/, '') || "Grow With"}
        highlight={heroSection?.textContent?.heading?.split(' ').slice(-2).join(' ') || "Sterling & Co."}
        subtitle={heroSection?.textContent?.subheading || "Join a team of exceptional professionals and build a rewarding career in finance and accounting."}
        image={heroTeam}
        breadcrumb={[{ label: 'Careers' }]}
      />

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground mb-4">{careerSection?.textContent?.benefitsHeading || 'Why Work With Us?'}</h2>
            <p className="text-body max-w-2xl mx-auto mb-12">We believe great work comes from great people in a great environment.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b: any, i: number) => {
              const Icon = iconMap[b.icon] || TrendingUp;
              return (
                <ScrollReveal key={b.title} delay={i * 0.1}>
                  <div className="card-premium p-8 text-center h-full">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground font-sans mb-2">{b.title}</h4>
                    <p className="text-sm text-muted-foreground">{b.description || b.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding gradient-subtle">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground text-center mb-12">{careerSection?.textContent?.positionsHeading || 'Open Positions'}</h2>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-4">
            {positions.map((p: any, i: number) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="card-premium p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground font-sans">{p.title}</h4>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Briefcase className="w-3 h-3" /> {p.department || p.dept}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.location}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {p.type}</span>
                    </div>
                    <span className="text-xs text-accent font-medium mt-1 inline-block">{p.experience || p.exp}</span>
                  </div>
                  <Button variant="navy" size="sm" onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                    Apply Now
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding" ref={formRef}>
        <div className="container-max mx-auto max-w-2xl">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground text-center mb-10">{careerSection?.textContent?.formHeading || 'Apply Now'}</h2>

            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <p className="text-sm text-green-800">Thank you for your application! Our HR team will review and get back to you.</p>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-700">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input {...register('name')} placeholder="Full Name *" className={inp} />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register('email')} type="email" placeholder="Email *" className={inp} />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input {...register('phone')} type="tel" placeholder="Phone" className={inp} />
                <div>
                  <select {...register('position')} className={inp}>
                    <option value="">Select Position *</option>
                    {positions.map((p: any) => <option key={p.title} value={p.title}>{p.title}</option>)}
                  </select>
                  {errors.position && <p className="text-xs text-red-500 mt-1">{errors.position.message}</p>}
                </div>
              </div>
              <input {...register('experience')} placeholder="Years of Experience" className={inp} />
              <textarea {...register('message')} placeholder="Tell us about yourself" rows={4} className={`${inp} resize-none`} />
              <Button variant="navy" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2"><span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" /> Submitting...</span>
                ) : (
                  <><Send className="w-4 h-4 mr-2" /> Submit Application</>
                )}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
