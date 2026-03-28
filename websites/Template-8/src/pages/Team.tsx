import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPageData, getWebsiteData } from "@/lib/api";
import { findSection, sectionContent } from "@/lib/sectionHelpers";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}

export default function Team() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  const loadData = useCallback(() => {
    Promise.all([getPageData("team"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page); setWebsiteData(site);
    });
  }, []);

  useEffect(() => { loadData(); window.scrollTo(0, 0); }, [loadData]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-ink font-body text-cream">
        <Navbar websiteData={websiteData} />
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
          <p className="font-display text-3xl text-cream">Page Not Found</p>
          <p className="font-body text-sm mt-3 text-mist">This page is not published in CMS yet.</p>
        </div>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const hero = sectionContent(findSection(pageData, "hero"));
  const teamSec = sectionContent(findSection(pageData, "team", "leaders"));
  const ctaSec = sectionContent(findSection(pageData, "cta"));
  const members = teamSec.items || teamSec.leaders || [];

  return (
    <div className="bg-ink min-h-screen font-body text-cream">
      <Navbar websiteData={websiteData} />

      {/* HERO */}
      <section className="relative min-h-[400px] flex items-end bg-ink overflow-hidden pt-20">
        {hero.image && (
          <>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hero.image}')`, opacity: 0.2 }} />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
          <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-4">{hero.label || "MEET THE TEAM"}</span>
          <h1 className="font-display text-5xl lg:text-7xl font-semibold text-cream leading-tight mb-4">{hero.heading || hero.title || "Our Expert Team"}</h1>
          {hero.subheading && <p className="font-body text-lg text-mist max-w-xl">{hero.subheading}</p>}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center gap-2 border-b border-gold/20">
        <Link to="/" className="font-body text-xs text-gold">Home</Link>
        <span className="font-body text-xs text-mist">/ Our Team</span>
      </div>

      {/* TEAM GRID */}
      <section className="py-24 bg-deep">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="font-mono-label text-[11px] text-gold tracking-[3px] uppercase block mb-3">{teamSec.label || "Our Professionals"}</span>
              <h2 className="font-display text-4xl font-semibold text-cream">{teamSec.heading || teamSec.title || "The People Behind Your Success"}</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {members.map((member: any, i: number) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="rounded-lg overflow-hidden bg-ink border border-gold/15 hover:border-gold/40 transition-all hover:-translate-y-1 group">
                  <div className="relative overflow-hidden" style={{ paddingBottom: "100%" }}>
                    <img
                      src={member.image || member.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name || "Team")}&background=1a1a2e&color=C8A96E&size=400`}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-display font-semibold text-[15px] text-cream">{member.name}</p>
                    <p className="font-body text-xs text-gold mt-0.5">{member.role || member.designation}</p>
                    {member.bio && <p className="font-body text-xs mt-2 leading-relaxed text-mist">{member.bio}</p>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920)" }} />
        <div className="absolute inset-0 bg-ink/[0.88]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-cream mb-6">{ctaSec.heading || ctaSec.title || "Work With Our Expert Team"}</h2>
            <Link to="/contact" className="shimmer-btn inline-block px-10 py-4 font-body text-sm font-medium text-primary-foreground rounded-sm hover:scale-[1.03] transition-transform">
              {ctaSec.cta || "Book Consultation"}
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
}
