import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { usePageData } from "@/hooks/useWebsiteData";
import { getImageUrl } from "@/lib/api";

const Gallery = () => {
  const { getSection, isLoading } = usePageData('gallery');

  if (isLoading) return <Layout><div className="h-screen flex items-center justify-center">Loading...</div></Layout>;

  const heroSec = getSection('page-hero');
  const galleryGrid = getSection('gallery-grid')?.textContent;

  const items = galleryGrid?.items || [];
  const officeImages = items.filter((item: any) => item.category === 'Office');
  const eventImages = items.filter((item: any) => item.category !== 'Office');

  return (
    <Layout>
      <PageHero 
        title={heroSec?.textContent?.title || "Gallery"} 
        subtitle={heroSec?.textContent?.subtitle || "A glimpse into our workspace and events"} 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]} 
        image={getImageUrl(heroSec?.imageUrl)} 
      />

      <section className="py-24 bg-background">
        <div className="container">
          <SectionHeading label="Our Workspace" title="Office Gallery" description="Step inside our modern, collaborative workspace." />
          <div className="grid md:grid-cols-3 gap-5">
            {officeImages.map((img: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-2xl card-shadow group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img src={getImageUrl(img.image)} alt={img.title || `Office ${i + 1}`} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <span className="text-primary-foreground font-heading font-semibold">{img.title || "View Image"}</span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container">
          <SectionHeading label="Moments" title="Events & Meetings" description="Highlights from our corporate events and client engagements." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eventImages.map((img: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-2xl card-shadow cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img src={getImageUrl(img.image)} alt={img.title || `Event ${i + 1}`} className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <span className="text-primary-foreground font-heading font-semibold">{img.title || "View Image"}</span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
