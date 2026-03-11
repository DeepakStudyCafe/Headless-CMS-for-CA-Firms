import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import galleryHero from "@/assets/gallery-hero.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import teamHero from "@/assets/team-hero.jpg";
import contactHero from "@/assets/contact-hero.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import careerHero from "@/assets/career-hero.jpg";
import { motion } from "framer-motion";

const officeImages = [galleryHero, aboutHero, hero1];
const eventImages = [hero2, hero3, teamHero, contactHero, servicesHero, careerHero];

const Gallery = () => (
  <Layout>
    <PageHero title="Gallery" subtitle="A glimpse into our workspace and events" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]} image={galleryHero} />

    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="Our Workspace" title="Office Gallery" description="Step inside our modern, collaborative workspace." />
        <div className="grid md:grid-cols-3 gap-5">
          {officeImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-2xl card-shadow group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img src={img} alt={`Office ${i + 1}`} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-primary-foreground font-heading font-semibold">View Image</span>
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
          {eventImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-2xl card-shadow cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img src={img} alt={`Event ${i + 1}`} className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-primary-foreground font-heading font-semibold">View Image</span>
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

export default Gallery;
