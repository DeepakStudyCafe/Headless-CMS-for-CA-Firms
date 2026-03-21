import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageData } from "@/hooks/useWebsiteData";
import { getImageUrl } from "@/lib/api";
import { IconByName } from "@/components/IconByName";

const About = () => {
  const { getSection, isLoading } = usePageData('about');

  if (isLoading) return <Layout><div className="h-screen flex items-center justify-center">Loading...</div></Layout>;

  const heroSec = getSection('page-hero');
  const introSec = getSection('about-intro')?.textContent;
  const missionVision = getSection('mission-vision')?.textContent;
  const coreValues = getSection('core-values')?.textContent;
  const timelineSec = getSection('timeline')?.textContent;
  const whyUsSec = getSection('why-choose-us')?.textContent;

  return (
    <Layout>
      <PageHero 
        title={heroSec?.textContent?.title || "About Us"} 
        subtitle={heroSec?.textContent?.subtitle} 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} 
        image={getImageUrl(heroSec?.imageUrl)} 
      />

      {/* Introduction */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">{introSec?.badge}</span>
              <div className="section-divider mt-3 mb-5" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mb-6">{introSec?.heading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{introSec?.description1}</p>
              <p className="text-muted-foreground leading-relaxed">{introSec?.description2}</p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {introSec?.stats?.map((stat: any, i: number) => (
                  <AnimatedCounter key={i} end={Number(stat.end) || Number(stat.value)} suffix={stat.suffix || ''} label={stat.label} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="p-10 bg-card rounded-2xl card-shadow border border-primary/10 h-full">
                <div className="w-12 h-12 rounded-2xl bg-emerald-subtle flex items-center justify-center mb-5">
                  <IconByName name={missionVision?.missionIcon || "Target"} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{missionVision?.missionTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">{missionVision?.missionDesc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="p-10 bg-card rounded-2xl card-shadow border border-accent/10 h-full">
                <div className="w-12 h-12 rounded-2xl bg-warm-light flex items-center justify-center mb-5">
                  <IconByName name={missionVision?.visionIcon || "Eye"} className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{missionVision?.visionTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">{missionVision?.visionDesc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <SectionHeading label={coreValues?.label} title={coreValues?.heading} description={coreValues?.description} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues?.items?.map((v: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-primary/10 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-subtle mx-auto flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconByName name={v.icon} className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <SectionHeading label={timelineSec?.label} title={timelineSec?.heading} />
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-accent/10 rounded-full pointer-events-none -translate-x-1/2 z-0" />
            <div className="relative z-10">
              {timelineSec?.items?.map((item: any, i: number) => {
                const isLeft = i % 2 === 0;
                return (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="relative flex justify-between items-center pb-16">
                      <div className={`w-1/2 flex ${isLeft ? 'justify-end' : 'justify-end md:justify-start'}`}>
                        {isLeft && (
                          <div className="flex items-center gap-8">
                            <div className="max-w-[760px] mr-2 bg-card rounded-2xl shadow-md border border-border/40 px-6 py-4 md:py-6 md:px-8 text-left">
                              <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-2">{item.title}</h3>
                              <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="w-0 md:w-28" />
                      <div className={`w-1/2 flex ${!isLeft ? 'justify-start' : 'justify-start md:justify-end'}`}>
                        {!isLeft && (
                          <div className="flex items-center gap-8">
                            <div className="max-w-[760px] ml-2 bg-card rounded-2xl shadow-md border border-border/40 px-6 py-4 md:py-6 md:px-8 text-left">
                              <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-2">{item.title}</h3>
                              <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl border-4 border-background`}>
                          <span className="text-primary-foreground font-heading font-bold text-lg">{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">{whyUsSec?.badge}</span>
              <div className="section-divider mt-3 mb-5" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground leading-tight mb-6">{whyUsSec?.heading}</h2>
              <p className="text-secondary-foreground/70 leading-relaxed mb-8">{whyUsSec?.description}</p>
              <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/20 transition-all">
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid sm:grid-cols-2 gap-3">
                {whyUsSec?.items?.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/8">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-secondary-foreground/80 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
