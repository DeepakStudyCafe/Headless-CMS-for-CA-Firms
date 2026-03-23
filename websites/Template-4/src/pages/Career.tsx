import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { IconByName } from "@/components/IconByName";
import { Send } from "lucide-react";
import careerHero from "@/assets/career-hero.jpg";
import { usePageData } from "@/hooks/useWebsiteData";
import { getImageUrl } from "@/lib/api";

const Career = () => {
  const { getSection, isLoading } = usePageData('career');

  const ctaSec = getSection('career-hero')?.textContent;
  const benefitsSec = getSection('benefits')?.textContent;

  const heroImage = (ctaSec?.image) ? getImageUrl(ctaSec.image) : careerHero;
  
  const defaultBenefits = [
    { icon: "TrendingUp", title: "Growth Opportunities", desc: "Clear career progression paths with mentorship programs." },
    { icon: "GraduationCap", title: "Learning & Development", desc: "Continuous professional education and certification support." },
    { icon: "Heart", title: "Work-Life Balance", desc: "Flexible work arrangements and wellness programs." },
    { icon: "Briefcase", title: "Competitive Package", desc: "Industry-leading compensation with comprehensive benefits." },
  ];

  const benefits = benefitsSec?.items || defaultBenefits;

  return (
    <Layout>
      <PageHero 
        title={ctaSec?.title || "Careers"} 
        subtitle={ctaSec?.subtitle || "Build your future with a leading CA firm"} 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]} 
        image={heroImage || careerHero} 
      />
      
      <section className="py-24 bg-background">
        <div className="container text-center">
          <ScrollReveal>
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">{ctaSec?.tagline || "Join Our Team"}</span>
            <div className="section-divider mt-3 mb-5 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{ctaSec?.heading || "Build Your Career With Us"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{ctaSec?.description || "At Arvind Gupta & Associates, we nurture talent and provide an environment where professionals can thrive, learn, and grow into industry leaders."}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container">
          <SectionHeading label={benefitsSec?.tagline || "Benefits"} title={benefitsSec?.title || "Why Work With Us"} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-primary/10 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-subtle mx-auto flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconByName name={b.icon} className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{b.title || '-'}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc || '-'}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;