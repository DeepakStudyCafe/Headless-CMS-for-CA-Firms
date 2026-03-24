import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('contact'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We will get back to you within 24 business hours." });
    form.reset();
  };

  const contactSection = pageData?.sections?.find(s => s.type === 'contact');
  const infoData = contactSection?.textContent?.info || {
    phone: websiteData?.phone || "",
    email: websiteData?.email || "",
    address: websiteData?.address || "",
    workingHours: { weekdays: "", saturday: "", sunday: "" }
  };

  const infoCards = [
    { icon: MapPin, label: "Office Address", value: infoData.address },
    { icon: Phone, label: "Phone", value: infoData.phone },
    { icon: Mail, label: "Email", value: infoData.email },
    { icon: Clock, label: "Working Hours", value: `${infoData.workingHours?.weekdays || ""}\n${infoData.workingHours?.saturday || ""}\n${infoData.workingHours?.sunday || ""}`.trim() },
  ].filter(c => c.value);

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen bg-paper flex flex-col">
        <CustomCursor />
        <Navbar websiteData={websiteData} />
        <main className="flex-grow"></main>
        <Footer websiteData={websiteData} />
      </div>
    );
  }

  const heroSection = pageData?.sections?.find(s => s.type === 'hero');

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <CustomCursor />
      <Navbar websiteData={websiteData} />

      {/* Page Hero */}
      {heroSection && (
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
              {heroSection.textContent?.label || "Reach Out"}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4"
            >
              {heroSection.textContent?.heading || "Contact Us"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-white/50 text-base md:text-lg max-w-2xl mx-auto"
            >
              {heroSection.textContent?.subheading}
            </motion.p>
          </div>
        </section>
      )}

      {/* Contact Form + Info */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label={contactSection?.textContent?.label || "Get in Touch"} title={contactSection?.textContent?.heading || "Send Us a Message"} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className={`${infoCards.length === 0 ? "lg:col-span-2 max-w-3xl mx-auto w-full" : ""} bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gold/10`}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-sm font-medium text-charcoal">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="border-gold/20 focus:ring-gold focus:border-gold bg-paper/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-sm font-medium text-charcoal">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" className="border-gold/20 focus:ring-gold focus:border-gold bg-paper/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-sm font-medium text-charcoal">Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 98765 43210" className="border-gold/20 focus:ring-gold focus:border-gold bg-paper/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-sm font-medium text-charcoal">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" className="border-gold/20 focus:ring-gold focus:border-gold bg-paper/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-sm font-medium text-charcoal">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your requirements..." rows={5} className="border-gold/20 focus:ring-gold focus:border-gold bg-paper/50 resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <button type="submit" className="shimmer-btn w-full py-4 text-charcoal font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </Form>
            </motion.div>

            {/* Info Cards */}
            {infoCards.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-6"
              >
                {infoCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10 flex items-start gap-5 group hover:border-gold/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <card.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-charcoal mb-1">{card.label}</h3>
                      <p className="text-warm-gray font-sans text-sm whitespace-pre-line leading-relaxed">{card.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      {(websiteData?.themeConfig?.contactContent?.mapUrl || infoData?.mapEmbedUrl) && (
        <section className="bg-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border border-gold/20 shadow-lg h-[400px]"
            >
              <iframe
                src={websiteData?.themeConfig?.contactContent?.mapUrl || infoData.mapEmbedUrl}
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
      )}

      {/* Quick Contact Strip */}
      <section className="bg-charcoal py-16 px-6 lg:px-8 relative">
        <div className="absolute inset-0 gold-grain" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Phone, label: "Call Us", value: infoData?.phone },
            { icon: Mail, label: "Email Us", value: infoData?.email },
            { icon: MapPin, label: "Visit Us", value: infoData?.address },
          ].filter(item => item.value).map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2">{item.label}</span>
              <span className="font-sans text-white/70 text-sm whitespace-pre-wrap">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Contact;
