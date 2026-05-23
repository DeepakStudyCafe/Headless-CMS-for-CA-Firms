import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPageData, getWebsiteData } from '@/lib/api';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  const [pageData, setPageData] = useState<any>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);

  useEffect(() => {
    Promise.all([getPageData('contact'), getWebsiteData()]).then(([p, w]) => {
      setPageData(p);
      setWebsiteData(w);
    });
  }, []);

  if (!pageData || !websiteData) return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;

  const contactSection = pageData?.sections?.find((s: any) => s.type === 'contact');
  const content = contactSection?.textContent || {};

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display mb-6">{content.heading}</h1>
            <p className="text-xl text-muted-foreground">{content.description}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-display mb-6">{content.panelHeading || "Get in Touch"}</h2>
                <p className="text-muted-foreground text-lg">{content.panelDesc || "Reach out to us to discover how we can help you achieve your financial goals."}</p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Our Office</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{websiteData.address}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">{websiteData.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">{websiteData.email}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">{content.workingHours || websiteData.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft">
              <h3 className="text-2xl font-display mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none"></textarea>
                </div>
                <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
