import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Contact as ContactSection } from "@/components/site/Contact";
import { MapPin, Phone, Mail } from "lucide-react";
import { getPageData } from "@/lib/api";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const iconMap: Record<string, any> = {
  MapPin, Phone, Mail
};

function ContactPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPageData('contact').then((data) => {
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
  const contactSection = pageData?.sections?.find((s: any) => s.type === 'contact' || s.type === 'contact-info');
  const stripSection = pageData?.sections?.find((s: any) => s.type === 'quick-contact');
  const mapSection = pageData?.sections?.find((s: any) => s.type === 'map');

  const heroTitle = heroSection?.textContent?.heading;
  const heroSubtitle = heroSection?.textContent?.title;
  const heroDesc = heroSection?.textContent?.description;

  const stripItems = stripSection?.textContent?.items || [];
  const mapUrl = mapSection?.textContent?.mapUrl;

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
            {heroSubtitle?.split(' ').map((word: string, i: number, arr: any) => {
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

      {/* Form Section */}
      <ContactSection data={contactSection} />

      {/* Map Section */}
      <section className="bg-background py-16 px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-card border border-border/50 h-[400px] relative"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-5 pointer-events-none" />
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      {stripItems.length > 0 && (
        <section className="bg-secondary/30 py-16 px-6 lg:px-8 relative">
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stripItems.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Phone;
              return (
                <motion.div
                  key={item.label || item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold mb-2">{item.label || item.title}</span>
                  <span className="text-muted-foreground text-sm whitespace-pre-wrap">{item.value || item.description}</span>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
