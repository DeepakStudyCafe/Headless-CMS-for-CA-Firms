import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { usePageData } from "@/hooks/useWebsiteData";
import { getImageUrl } from "@/lib/api";
import { IconByName } from "@/components/IconByName";

const Services = () => {
  const { getSection, isLoading } = usePageData('services');

  if (isLoading) return <Layout><div className="h-screen flex items-center justify-center">Loading...</div></Layout>;

  const heroSec = getSection('page-hero');
  const servicesList = getSection('services-list')?.textContent;

  return (
    <Layout>
      <PageHero 
        title={heroSec?.textContent?.title || "Our Services"} 
        subtitle={heroSec?.textContent?.subtitle} 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} 
        image={getImageUrl(heroSec?.imageUrl)} 
      />

      <section className="py-24 bg-background">
        <div className="container">
          <SectionHeading 
            label={servicesList?.label} 
            title={servicesList?.heading} 
            description={servicesList?.description} 
          />
          <div className="grid md:grid-cols-2 gap-5">
            {servicesList?.items?.map((s: any, i: number) => (
              <ScrollReveal key={s.slug || i} delay={i * 0.08}>
                <Link to={`/services/${s.slug}`} className="group flex gap-5 p-7 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-primary/10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-subtle flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconByName name={s.icon} className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{s.desc}</p>
                    <span className="text-primary text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
