import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Award, Heart, Lightbulb, Users, Scale, Target, BadgeCheck, TrendingUp } from "lucide-react";
import { About as AboutSection } from "@/components/site/About";
import { useState, useEffect } from "react";
import { getPageData } from "@/lib/api";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const iconMap: Record<string, any> = {
  Shield, Award, Heart, Lightbulb, Users, Scale, Target, BadgeCheck, TrendingUp
};

function AboutPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPageData('about').then((data) => {
      setPageData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  const heroSection = pageData?.sections?.find((s: any) => s.type === 'hero');
  const storySection = pageData?.sections?.find((s: any) => s.type === 'text-image');
  const missionSection = pageData?.sections?.find((s: any) => s.type === 'mission-vision');
  const valuesSection = pageData?.sections?.find((s: any) => s.type === 'values');
  const certSection = pageData?.sections?.find((s: any) => s.type === 'certifications');

  const heroTitle = heroSection?.textContent?.heading || "About Us";
  const heroSubtitle = heroSection?.textContent?.subheading || "Building the foundation of business success";
  const heroDesc = heroSection?.textContent?.description || "We are a team of passionate Chartered Accountants dedicated to providing top-tier financial advisory, audit, and tax compliance services.";

  return (
    <div className="pt-">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-primary opacity-[0.03]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-primary uppercase inline-block mb-4"
          >
            {heroTitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {heroSubtitle.split(' ').map((word: string, i: number, arr: any) => {
              if (i === arr.length - 1 || i === arr.length - 2) {
                 return <span key={i} className="text-gradient"> {word}</span>;
              }
              return <span key={i}> {word}</span>;
            })}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <AboutSection data={storySection} />

      {/* Mission & Vision */}
      {missionSection && (
        <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-secondary/30">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Purpose</span>
              <h2 className="mt-3 text-3xl font-bold">{missionSection.textContent?.heading || "Mission & Vision"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {missionSection.textContent?.items?.map((card: any, i: number) => {
                const Icon = iconMap[card.icon] || Target;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="glass p-8 md:p-10 rounded-2xl border-t-4 border-primary shadow-card h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Core Values */}
      {valuesSection && (
        <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-background">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Foundation</span>
              <h2 className="mt-3 text-3xl font-bold">{valuesSection.textContent?.heading || "Core Values"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valuesSection.textContent?.items?.map((value: any, i: number) => {
                const Icon = iconMap[value.icon] || Shield;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="glass p-8 rounded-2xl border border-border/50 shadow-soft h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Certifications */}
      {certSection && (
        <section className="py-20 md:py-28 px-6 lg:px-8 relative bg-secondary/30">
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Recognitions</span>
              <h2 className="mt-3 text-3xl font-bold">{certSection.textContent?.heading || "Certifications"}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certSection.textContent?.items?.map((cert: any, i: number) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass p-6 rounded-2xl border border-border/50 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1">{cert.name}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{cert.body}</p>
                    <p className="text-primary font-medium text-xs mt-1">Since {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
