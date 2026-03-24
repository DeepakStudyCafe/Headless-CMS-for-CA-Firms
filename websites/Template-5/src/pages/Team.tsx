import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import SectionDivider from "@/components/SectionDivider";
import CTASection from "@/components/CTASection";
import { TEAM_MEMBERS } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";

const teamStats = [
  { value: 50, suffix: "+", label: "Years Combined Experience" },
  { value: 4, suffix: "", label: "Senior Partners" },
  { value: 20, suffix: "+", label: "Team Members" },
  { value: 8, suffix: "", label: "Specializations" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};



const Team = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('team'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  const heroSection = pageData?.sections?.find(s => s.type === 'hero');
  const teamSection = pageData?.sections?.find(s => s.type === 'team');
  const teamMembersData = teamSection?.textContent?.items || TEAM_MEMBERS;

  const leadership = teamMembersData.filter((m: any) => m.isLeadership);
  const members = teamMembersData.filter((m: any) => !m.isLeadership);

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <CustomCursor />
      <Navbar websiteData={websiteData} />

      {/* Page Hero */}
      <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="absolute inset-0 gold-grain" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold inline-block mb-4"
          >
            Our People
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            {heroSection?.textContent?.heading || "Meet Our Experts"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-white/50 text-base md:text-lg max-w-2xl mx-auto"
          >
            {heroSection?.textContent?.subheading || "A team of seasoned professionals dedicated to your financial success and business growth."}
          </motion.p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label="Leadership" title="Our Senior Partners" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member: any, i: number) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gold/10 overflow-hidden hover:border-gold/30 transition-all hover:shadow-lg">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <a
                      href={member.linkedin}
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      <Linkedin className="w-4 h-4 text-charcoal" />
                    </a>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-charcoal">{member.name}</h3>
                    <p className="font-sans text-gold text-sm mt-1">{member.designation}</p>
                    <p className="font-sans text-warm-gray text-xs mt-1">{member.qualifications}</p>
                    <p className="font-sans text-charcoal/60 text-xs mt-3 leading-relaxed line-clamp-3">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <SectionDivider from="paper" to="white" />
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 gold-grid opacity-[0.02]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label="The Team" title="Our Professionals" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member: any, i: number) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="group"
              >
                <div className="bg-paper rounded-2xl border border-gold/10 overflow-hidden hover:border-gold/30 transition-all hover:shadow-md">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                      <a href={member.linkedin} className="w-8 h-8 rounded-full bg-gold/90 flex items-center justify-center">
                        <Linkedin className="w-3.5 h-3.5 text-charcoal" />
                      </a>
                      <a href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@vanguardca.in`} className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                        <Mail className="w-3.5 h-3.5 text-charcoal" />
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-charcoal">{member.name}</h3>
                    <p className="font-sans text-gold text-xs mt-1">{member.designation}</p>
                    <p className="font-sans text-warm-gray text-[11px] mt-0.5">{member.qualifications}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-charcoal py-16 px-6 lg:px-8 relative border-t-2 border-gold/30">
        <div className="absolute inset-0 gold-grain" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {teamStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              <div className="font-display text-4xl md:text-5xl text-gold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-sans text-white/50 text-xs uppercase tracking-[0.15em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 md:py-24 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold inline-block mb-3">
              Grow With Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">Want to Join Our Team?</h2>
            <p className="font-sans text-warm-gray text-base mb-8 max-w-xl mx-auto">
              We are always looking for talented professionals who share our passion for excellence. Explore career opportunities and become part of our growing family.
            </p>
            <Link to="/career" className="shimmer-btn px-8 py-3 text-charcoal font-sans text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Team;
