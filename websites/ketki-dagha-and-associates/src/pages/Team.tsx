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
          <div className="grid md:grid-cols-3 gap-8">
            {partnersSec?.items?.map((p: any, i: number) => (
              <ScrollReveal key={p.name} delay={i * 0.15}>
                <div className="bg-card rounded-[2rem] overflow-hidden group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] max-w-[320px] mx-auto relative aspect-[4/5] border border-gray-100 hover:border-primary/30">
                  {p.image ? (
                    <img
                      src={getImageUrl(p.image)}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-muted">
                      <span className="text-primary font-heading font-bold text-5xl opacity-30">{p.initials || p.name[0]}</span>
                    </div>
                  )}

                  {/* Premium Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent pt-12 pb-8 px-7 text-white">
                    <div className="flex justify-between items-end relative z-10">
                      <div className="space-y-1">
                        <div className="h-0.5 w-12 bg-accent rounded-full mb-3 group-hover:w-20 transition-all duration-500" />
                        <h3 className="font-heading font-bold text-2xl leading-tight tracking-tight">{p.name}</h3>
                        <p className="text-white/90 text-sm font-medium tracking-wide uppercase">{p.role}</p>
                        {p.expertise && (
                          <p className="text-white/70 text-[10px] leading-relaxed mt-2 line-clamp-2 border-l border-accent/50 pl-2">
                            {p.expertise}
                          </p>
                        )}
                      </div>
                      <a
                        href={p.linkedin || "#"}
                        className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-[#0077b5] hover:border-transparent transition-all group/icon shadow-lg"
                      >
                        <Linkedin className="w-5 h-5 text-white transition-transform group-hover/icon:scale-110" />
                      </a>
                    </div>
                    {/* Decorative Bottom Bar */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-700" />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamSec?.items?.map((m: any, i: number) => (
              <ScrollReveal key={m.name} delay={i * 0.08}>
                <div className="flex items-center gap-4 p-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10 group max-w-[320px] w-full mx-auto">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-accent transition-all duration-300 overflow-hidden">
                    {m.image ? (
                      <img src={getImageUrl(m.image)} alt={m.name} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-primary font-heading font-bold group-hover:text-primary-foreground transition-colors">{m.name[0]}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground leading-tight">{m.name}</h4>
                    <p className="text-xs font-medium text-primary/80 uppercase tracking-wider">{m.role}</p>
                    {m.dept && (
                      <p className="text-[10px] text-muted-foreground mt-0.5">{m.dept}</p>
                    )}
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
