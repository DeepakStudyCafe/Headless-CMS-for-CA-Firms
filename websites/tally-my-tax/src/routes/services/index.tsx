import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/site/TiltCard";
import { ArrowUpRight, BookOpen, FileText, Users, Calculator, Building, ShieldCheck, Search, TrendingUp } from "lucide-react";
import { getPageData, getWebsiteData } from "@/lib/api";

export const Route = createFileRoute("/services/")({
  component: ServicesIndexPage,
});

const iconMap: Record<string, any> = {
  BookOpen, FileText, Users, Calculator, Building, ShieldCheck, Search, TrendingUp
};

function ServicesIndexPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getPageData('services'),
      getWebsiteData()
    ]).then(([page, website]) => {
      setPageData(page);
      setWebsiteData(website);
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

  const heroTitle = heroSection?.textContent?.heading || "Our Services";
  const heroSubtitle = heroSection?.textContent?.title || "Comprehensive financial expertise";
  const heroDesc = heroSection?.textContent?.description || "From day-to-day compliance to high-stakes advisory — one trusted partner for every financial need.";

  const services = websiteData?.services || [];

  return (
    <div className="">
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

      {/* Services Grid */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s: any, i: number) => {
              const Icon = iconMap[s.icon] || BookOpen;
              return (
                <motion.div
                  key={s.id || s.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  <Link to={`/services/${s.slug || s.id}`} className="block h-full">
                    <TiltCard className="group relative h-full">
                      <div className="gradient-border relative h-full glass p-7 shadow-card overflow-hidden transition-shadow duration-500 hover:shadow-glow">
                        <div className="relative">
                          <div className="relative h-14 w-14 rounded-2xl bg-primary/10 grid place-items-center shadow-soft group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500">
                            <Icon className="h-7 w-7 text-primary group-hover:text-white" />
                          </div>
                          <h3 className="mt-5 text-lg font-bold group-hover:text-primary transition-colors">{s.title || s.name}</h3>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description || s.shortDescription}</p>
                          <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                            Learn more
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

