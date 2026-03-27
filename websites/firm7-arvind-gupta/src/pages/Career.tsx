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

      {/* {jobs.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container max-w-5xl">
            <SectionHeading label={jobOpeningsSec?.label} title={jobOpeningsSec?.heading} />
            <div className="space-y-4 max-w-3xl mx-auto">
              {jobs.map((job: any, index: number) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-md transition-all group">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><IconByName name="Building2" className="w-4 h-4 text-accent" />{job.dept}</span>
                        <span className="flex items-center gap-1.5"><IconByName name="MapPin" className="w-4 h-4 text-accent" />{job.location}</span>
                        <span className="flex items-center gap-1.5"><IconByName name="Clock" className="w-4 h-4 text-accent" />{job.type}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2 group/btn shrink-0">
                      Apply Now
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )} */}
    </Layout>
  );
};

export default Career;
