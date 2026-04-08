import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Linkedin, Mail, Award } from "lucide-react";
import { usePageData } from "@/hooks/useWebsiteData";
import { getImageUrl } from "@/lib/api";

const Team = () => {
  const { getSection, isLoading } = usePageData('team');

  if (isLoading) return <Layout><div className="h-screen flex items-center justify-center">Loading...</div></Layout>;

  const heroSec = getSection('page-hero');
  const partnersSec = getSection('partners')?.textContent;
  const teamSec = getSection('team-members')?.textContent;
  const certSec = getSection('certifications')?.textContent;

  return (
    <Layout>
      <PageHero 
        title={heroSec?.textContent?.title || "Our Team"} 
        subtitle={heroSec?.textContent?.subtitle} 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]} 
        image={getImageUrl(heroSec?.imageUrl)} 
      />

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container">
          <SectionHeading 
            label={partnersSec?.label || "Leadership"} 
            title={partnersSec?.heading || "Meet Our Partners"} 
            description={partnersSec?.description || "Experienced professionals leading the firm."} 
          />
          <div className="grid md:grid-cols-3 gap-6">
            {partnersSec?.items?.map((p: any, i: number) => (
              <ScrollReveal key={p.name} delay={i * 0.15}>
                <div className="bg-card rounded-2xl card-shadow overflow-hidden group hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-primary/10">
                  <div className="h-52 bg-gradient-to-br from-primary/10 via-accent/5 to-muted flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500" />
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl relative z-10">
                      <span className="text-primary-foreground font-heading font-bold text-2xl">{p.initials}</span>
                    </div>
                  </div>
                  <div className="p-7 text-center">
                    <h3 className="font-heading font-bold text-foreground text-lg">{p.name}</h3>
                    <p className="text-accent font-medium text-sm mt-1">{p.role}</p>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{p.expertise}</p>
                    <div className="flex justify-center gap-2 mt-5">
                      {[Linkedin, Mail].map((Icon, j) => (
                        <a key={j} href="#" className="w-9 h-9 rounded-xl bg-emerald-subtle flex items-center justify-center hover:bg-primary hover:scale-105 transition-all">
                          <Icon className="w-4 h-4 text-primary hover:text-primary-foreground" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <SectionHeading label={teamSec?.label || "Our Professionals"} title={teamSec?.heading || "Team Members"} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamSec?.items?.map((m: any, i: number) => (
              <ScrollReveal key={m.name} delay={i * 0.08}>
                <div className="flex items-center gap-4 p-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    <span className="text-primary font-heading font-bold group-hover:text-primary-foreground transition-colors">{m.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{m.name}</h4>
                    <p className="text-sm text-muted-foreground">{m.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {certSec?.items && (
        <section className="py-24 bg-background">
          <div className="container text-center">
            <SectionHeading label={certSec?.label || "Qualifications"} title={certSec?.heading || "Certifications & Expertise"} />
            <div className="flex flex-wrap justify-center gap-4">
              {certSec.items.map((c: string, i: number) => (
                <ScrollReveal key={c} delay={i * 0.08}>
                  <div className="px-10 py-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10 flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="font-heading font-bold text-primary text-lg">{c}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Team;
