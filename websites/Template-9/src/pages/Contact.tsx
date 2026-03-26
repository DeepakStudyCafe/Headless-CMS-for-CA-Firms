import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EditorialHeading from "@/components/ui/EditorialHeading";
import { getPageData, getWebsiteData, PageData, getImageUrl, API_URL, WEBSITE_SLUG } from "@/lib/api";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject required"),
  message: z.string().min(10, "Please provide more detail"),
});
type FormValues = z.infer<typeof schema>;

const Contact = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  useEffect(() => {
    Promise.all([getPageData("contact"), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/forms/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, websiteSlug: WEBSITE_SLUG, formType: "contact" }),
      });
      if (res.ok) {
        toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
        form.reset();
      } else {
        toast({ title: "Error", description: "Please try again later.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Could not send message.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ca-bg">
        <div className="w-14 h-14 border-2 border-ca-accent-2/20 border-t-ca-accent-2 rounded-full animate-spin" />
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col bg-ca-bg">
        <Navbar websiteData={websiteData} />
        <main className="flex-grow" />
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const heroSection = pageData.sections?.find(s => s.type === "hero");
  const contactSection = pageData.sections?.find(s => s.type === "contact");
  const infoData = contactSection?.textContent?.info || {};
  const hours = infoData.workingHours || websiteData?.workingHours;
  const hoursStr = typeof hours === "object" ? Object.values(hours).filter(Boolean).join(" | ") : hours;

  const infoCards = [
    { icon: MapPin, label: "Office Address", value: infoData.address || websiteData?.address },
    { icon: Phone, label: "Phone", value: infoData.phone || websiteData?.phone },
    { icon: Mail, label: "Email", value: infoData.email || websiteData?.email },
    { icon: Clock, label: "Working Hours", value: hoursStr },
  ].filter(c => c.value);

  const mapUrl = websiteData?.themeConfig?.contactContent?.mapUrl || infoData.mapEmbedUrl;

  const inp = "w-full rounded-none px-4 py-3 text-sm border focus:outline-none focus:border-ca-accent-2 transition-all bg-transparent";
  const inpStyle = { borderColor: "rgba(61,166,142,0.2)", color: "#F5F0E8" };

  return (
    <div className="min-h-screen flex flex-col bg-ca-bg">
      <Navbar websiteData={websiteData} />

      {heroSection && (
        <section className="relative py-28 md:py-36 overflow-hidden bg-deep">
          {heroSection.imageUrl && (
            <img src={getImageUrl(heroSection.imageUrl)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            {heroSection.textContent?.label && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="font-label text-[10px] text-ca-accent-2 tracking-[4px] uppercase block mb-4">
                {heroSection.textContent.label}
              </motion.span>
            )}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-surface leading-tight">
              {heroSection.textContent?.heading}
            </motion.h1>
            {heroSection.textContent?.subheading && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
                className="mt-5 text-base sm:text-lg text-surface/50 max-w-2xl mx-auto font-body">
                {heroSection.textContent.subheading}
              </motion.p>
            )}
          </div>
        </section>
      )}

      <section className="py-20 px-6 lg:px-12 bg-ca-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="border p-8 bg-deep" style={{ borderColor: "rgba(61,166,142,0.15)" }}>
            <EditorialHeading folio="01" label="SEND A MESSAGE" heading={contactSection?.textContent?.heading || "Get in Touch"} headingSize="text-2xl sm:text-3xl" light className="mb-8" />
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">FULL NAME</FormLabel>
                      <FormControl><Input placeholder="John Doe" className={inp} style={inpStyle} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">EMAIL</FormLabel>
                      <FormControl><Input type="email" placeholder="john@example.com" className={inp} style={inpStyle} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">PHONE</FormLabel>
                      <FormControl><Input type="tel" placeholder="+91 98765 43210" className={inp} style={inpStyle} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">SUBJECT</FormLabel>
                      <FormControl><Input placeholder="How can we help?" className={inp} style={inpStyle} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">MESSAGE</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your requirements..." rows={5} className={`${inp} resize-none`} style={inpStyle} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <button type="submit" disabled={submitting}
                  className="w-full py-3.5 text-sm font-body font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-60 bg-ca-accent-2 text-surface hover:bg-ca-accent-2/90">
                  {submitting ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Form>
          </motion.div>

          {infoCards.length > 0 && (
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-4">
              {infoCards.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-5 border p-5 bg-deep" style={{ borderColor: "rgba(61,166,142,0.15)" }}>
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 border border-ca-accent-2/30">
                    <card.icon className="w-5 h-5 text-ca-accent-2" />
                  </div>
                  <div>
                    <h4 className="font-label text-[10px] tracking-[2px] text-surface/40 mb-1">{card.label.toUpperCase()}</h4>
                    <p className="text-sm font-body whitespace-pre-line leading-relaxed text-surface/60">{card.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {mapUrl && (
        <section className="px-6 lg:px-12 pb-16 bg-ca-bg">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="overflow-hidden border" style={{ height: 380, borderColor: "rgba(61,166,142,0.15)" }}>
              <iframe src={mapUrl} width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location" />
            </motion.div>
          </div>
        </section>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Contact;
