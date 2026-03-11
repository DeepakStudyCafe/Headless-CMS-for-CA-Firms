import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import careerHero from "@/assets/career-hero.jpg";
import { Briefcase, GraduationCap, Heart, TrendingUp, Clock, MapPin, Send, ArrowRight } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Clear career progression paths with mentorship programs." },
  { icon: GraduationCap, title: "Learning & Development", desc: "Continuous professional education and certification support." },
  { icon: Heart, title: "Work-Life Balance", desc: "Flexible work arrangements and wellness programs." },
  { icon: Briefcase, title: "Competitive Package", desc: "Industry-leading compensation with comprehensive benefits." },
];

const openings = [
  { title: "Senior Audit Associate", dept: "Audit & Assurance", type: "Full-time", location: "Mumbai" },
  { title: "Tax Consultant", dept: "Direct Tax", type: "Full-time", location: "Mumbai" },
  { title: "GST Analyst", dept: "Indirect Tax", type: "Full-time", location: "Pune" },
  { title: "Article Trainee", dept: "General Practice", type: "Articleship", location: "Mumbai" },
];

const Career = () => (
  <Layout>
    <PageHero title="Careers" subtitle="Build your future with a leading CA firm" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]} image={careerHero} />

    <section className="py-24 bg-background">
      <div className="container text-center">
        <ScrollReveal>
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">Join Our Team</span>
          <div className="section-divider mt-3 mb-5 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Build Your Career With Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">At Sharma & Co., we nurture talent and provide an environment where professionals can thrive, learn, and grow into industry leaders.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-24 bg-muted/50">
      <div className="container">
        <SectionHeading label="Benefits" title="Why Work With Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="text-center p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-primary/10 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-subtle mx-auto flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <b.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
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
      <div className="container">
        <SectionHeading label="Opportunities" title="Current Openings" />
        <div className="max-w-3xl mx-auto space-y-4">
          {openings.map((job, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 gap-4 border border-transparent hover:border-primary/10 group">
                <div>
                  <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-1.5 text-sm text-muted-foreground">
                    <span>{job.dept}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                  </div>
                </div>
                <button className="group/btn px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all shrink-0 flex items-center gap-2">
                  Apply Now <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-muted/50">
      <div className="container max-w-2xl">
        <ScrollReveal>
          <SectionHeading label="Apply" title="Submit Your Application" />
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
              <input type="email" placeholder="Email" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
            </div>
            <input type="text" placeholder="Position Applying For" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
            <textarea placeholder="Cover Letter / Message" rows={4} className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none" />
            <button type="submit" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all">
              <Send className="w-4 h-4" /> Submit Application
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Career;
