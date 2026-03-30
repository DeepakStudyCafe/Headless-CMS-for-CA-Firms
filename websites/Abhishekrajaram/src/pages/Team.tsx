import { FullPageLoader } from '@/components/Loader';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Award, Users, Linkedin, ArrowRight } from 'lucide-react';
import { getPageData, getWebsiteData, getImageUrl } from '@/lib/api';

const Team = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  useEffect(() => {
    Promise.all([getPageData('team'), getWebsiteData()]).then(([p, w]) => {
      setPageData(p);
      setWebsiteData(w);
    });
  }, []);

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const teamSection = pageData?.sections?.find((s: any) => s.type === 'team');
  const certsSection = pageData?.sections?.find((s: any) => s.type === 'certifications');
  const ctaSection = pageData?.sections?.find((s: any) => s.type === 'cta');

  const allMembers = teamSection?.textContent?.items || [];

  // Split: partners (designation includes Partner/Managing/Senior) vs team
  const partners = allMembers.filter((m: any) =>
    /partner|managing|senior partner/i.test(m.designation || '')
  );
  const team = allMembers.filter((m: any) =>
    !/partner|managing|senior partner/i.test(m.designation || '')
  );

  const certifications = certsSection?.textContent?.items || [];

    if (!pageData || !websiteData) return <FullPageLoader />;

  return (
    <Layout>
      {heroSection && (
        <PageHero
          title={heroSection.textContent?.titleMain || heroSection.textContent?.heading || ''}
          highlight={heroSection.textContent?.highlight || heroSection.textContent?.titleHighlight || ''}
          subtitle={heroSection.textContent?.subheading || ''}
          image={heroSection.imageUrl ? getImageUrl(heroSection.imageUrl) : ''}
          breadcrumb={[{ label: 'Team' }]}
        />
      )}

      {/* Leadership / Partners */}
      {partners.length > 0 && (
        <section className="section-padding">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">{teamSection?.textContent?.partnersLabel || 'Leadership'}</span>
                <h2 className="heading-lg text-foreground mt-2">{teamSection?.textContent?.partnersHeading || 'Our Partners'}</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((p: any, i: number) => (
                <ScrollReveal key={p.name || i} delay={i * 0.15}>
                  <div className="card-premium p-8 text-center group">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-transform">
                      <img
                        src={p.image ? getImageUrl(p.image) : `https://picsum.photos/seed/${encodeURIComponent((p.name || 'user').split(' ')[0].toLowerCase())}/400/400`}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground font-sans">{p.name}</h3>
                    <p className="text-sm text-accent font-medium mt-1">{p.designation}</p>
                    <p className="text-sm text-muted-foreground mt-3">{p.bio}</p>
                    {p.linkedin && p.linkedin !== '#' && (
                      <div className="flex items-center justify-center gap-3 mt-4">
                        <a href={p.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${p.name}`} className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team Grid */}
      {team.length > 0 && (
        <section className="section-padding gradient-subtle">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="heading-lg text-foreground">{teamSection?.textContent?.teamHeading || 'Our Professionals'}</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((m: any, i: number) => (
                <ScrollReveal key={m.name || i} delay={i * 0.08}>
                  <div className="card-premium p-6 text-center group">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <img
                        src={m.image ? getImageUrl(m.image) : `https://picsum.photos/seed/${encodeURIComponent((m.name || 'user').split(' ')[0].toLowerCase())}/200/200`}
                        alt={m.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground font-sans">{m.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{m.designation}</p>
                    {m.department && (
                      <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-accent/10 text-accent">{m.department}</span>
                    )}
                    {m.linkedin && m.linkedin !== '#' && (
                      <div className="flex items-center justify-center gap-3 mt-3">
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${m.name}`} className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="section-padding">
          <div className="container-max mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="heading-lg text-foreground">{certsSection?.textContent?.heading || 'Certifications & Expertise'}</h2>
              </div>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((c: any, i: number) => (
                <ScrollReveal key={c.title || i} delay={i * 0.1}>
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card">
                    <Award className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium text-foreground">{c.title || c}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {ctaSection && (
        <section className="section-padding gradient-navy">
          <div className="container-max mx-auto text-center">
            <ScrollReveal>
              <Users className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="heading-lg text-primary-foreground mb-4">{ctaSection.textContent?.heading}</h2>
              <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8">{ctaSection.textContent?.subheading}</p>
              <Button variant="gold" size="lg" asChild>
                <Link to={ctaSection.textContent?.ctaLink || "/contact"}>{ctaSection.textContent?.cta || 'Book a Consultation'} <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Team;
