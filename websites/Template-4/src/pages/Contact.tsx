import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import contactHero from "@/assets/contact-hero.jpg";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageData } from "@/hooks/useWebsiteData";
import { getImageUrl } from "@/lib/api";

const Contact = () => {
  const { website, getSection, isLoading } = usePageData('contact');
  const siteData = website;

  const ctaSec = getSection('contact-hero')?.textContent;
  const heroImage = (ctaSec?.image) ? getImageUrl(ctaSec.image) : contactHero;

  return (
    <Layout>
      <PageHero 
        title={ctaSec?.title || "Contact Us"} 
        subtitle={ctaSec?.subtitle || "Let's start a conversation about your financial future"} 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} 
        image={heroImage || contactHero} 
      />
      
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">{ctaSec?.tagline || "Reach Out"}</span>
              <div className="section-divider mt-3 mb-5" />
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">{ctaSec?.heading || "Get in Touch"}</h2>
              
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                  <input type="email" placeholder="Email Address" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                  <input type="text" placeholder="Company Name" className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                </div>
                <textarea placeholder="Your Message" rows={5} className="w-full px-5 py-3.5 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none" />
                <button type="button" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <h3 className="font-heading font-bold text-foreground text-xl">Office Details</h3>
                {[
                  { icon: MapPin, title: "Address", text: siteData?.address || "123 Financial District, BKC, Mumbai, Maharashtra 400051, India" },
                  { icon: Phone, title: "Phone", text: siteData?.phone || "+91 22 1234 5678" },
                  { icon: Mail, title: "Email", text: siteData?.email || "info@sharmaco.com" },
                  { icon: Clock, title: "Hours", text: siteData?.workingHours || "Mon - Sat: 9:00 AM - 6:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
                    <div className="w-11 h-11 rounded-xl bg-emerald-subtle flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{item.text}</div>
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl overflow-hidden card-shadow h-64 mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.86!3d19.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM2LjAiTiA3MsKwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        <div className="container relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/70 mb-8">Schedule a free consultation with our expert team today.</p>
          <Link to="/query" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 transition-all">
            Submit a Query <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;