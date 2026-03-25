import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";

const Team = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData("team"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0D" }}>
        <div className="w-14 h-14 border-2 rounded-full animate-spin" style={{ borderColor: "rgba(224,140,46,0.2)", borderTopColor: "#E08C2E" }} />
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#0D0D0D" }}>
        <Navbar websiteData={websiteData} />
        <main className="flex-grow" />
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const heroSection = pageData.sections?.find(s => s.type === "hero");
  const teamSection = pageData.sections?.find(s => s.type === "team");

  const allMembers: any[] = teamSection?.textContent?.items || [];
  const leadership = allMembers.filter(m => m.isLeadership);
  const members = allMembers.filter(m => !m.isLeadership);

  const MemberCard = ({ member, i, large }: { member: any; i: number; large?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="rounded-2xl border overflow-hidden transition-all hover:shadow-xl"
        style={{ background: "#111111", borderColor: "rgba(224,140,46,0.12)" }}>
        <div className={`relative overflow-hidden ${large ? "h-72" : "h-56"}`}>
          {member.image ? (
            <img src={getImageUrl(member.image)} alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy" />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: "#1A1A1A" }}>
              <span className="font-heading font-bold text-4xl" style={{ color: "#E08C2E" }}>
                {member.name?.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{ background: "linear-gradient(to top, rgba(13,13,13,0.75), transparent)" }} />
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
              className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500"
              style={{ background: "#E08C2E" }}>
              <Linkedin className="w-4 h-4" style={{ color: "#0D0D0D" }} />
            </a>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-heading font-semibold" style={{ fontSize: large ? "1.15rem" : "1rem", color: "#F5F0E8" }}>{member.name}</h3>
          <p className="text-sm mt-1 font-mono" style={{ color: "#E08C2E" }}>{member.designation}</p>
          {member.qualifications && <p className="text-xs mt-0.5" style={{ color: "rgba(245,240,232,0.4)" }}>{member.qualifications}</p>}
          {member.bio && large && <p className="text-xs mt-3 leading-relaxed line-clamp-3" style={{ color: "rgba(245,240,232,0.55)" }}>{member.bio}</p>}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0D0D0D" }}>
      <Navbar websiteData={websiteData} />

      {/* Hero */}
      {heroSection && (
        <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#0D0D0D" }}>
          {heroSection.imageUrl && (
            <img src={getImageUrl(heroSection.imageUrl)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.5), #0D0D0D)" }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            {heroSection.textContent?.label && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                className="font-mono text-[10px] tracking-[3px] uppercase block mb-4" style={{ color: "#E08C2E" }}>
                // {heroSection.textContent.label}
              </motion.span>
            )}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
              className="font-heading font-bold mb-4" style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "#F5F0E8", lineHeight: 1.05 }}>
              {heroSection.textContent?.heading}
            </motion.h1>
            {heroSection.textContent?.subheading && (
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
                className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(245,240,232,0.5)" }}>
                {heroSection.textContent.subheading}
              </motion.p>
            )}
          </div>
        </section>
      )}

      {/* Leadership */}
      {leadership.length > 0 && (
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-mono text-[10px] tracking-[3px] uppercase block mb-2" style={{ color: "#E08C2E" }}>
              // {teamSection?.textContent?.label || "Leadership"}
            </motion.span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-10" style={{ color: "#F5F0E8" }}>
              {teamSection?.textContent?.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((m, i) => <MemberCard key={i} member={m} i={i} large />)}
            </div>
          </div>
        </section>
      )}

      {/* All Members / Associates */}
      {members.length > 0 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#111111" }}>
          <div className="max-w-7xl mx-auto">
            <div className="w-1/2 h-px mb-10" style={{ background: "rgba(224,140,46,0.2)" }} />
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10" style={{ color: "#F5F0E8" }}>
              {teamSection?.textContent?.subheading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((m, i) => <MemberCard key={i} member={m} i={i} />)}
            </div>
          </div>
        </section>
      )}

      {/* If only "all" members (no isLeadership flag) */}
      {leadership.length === 0 && members.length === 0 && allMembers.length > 0 && (
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allMembers.map((m, i) => <MemberCard key={i} member={m} i={i} large />)}
            </div>
          </div>
        </section>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Team;
