import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import SectionDivider from "@/components/SectionDivider";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

import { Clock, Phone, Mail, Calendar, Send, HelpCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { getPageData, getWebsiteData, PageData } from "@/lib/api";

const queryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type QueryFormValues = z.infer<typeof queryFormSchema>;

const Query = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('query'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);
  const { toast } = useToast();
  const form = useForm<QueryFormValues>({
    resolver: zodResolver(queryFormSchema),
    defaultValues: { name: "", email: "", phone: "", serviceType: "", message: "" },
  });

  const onSubmit = (data: QueryFormValues) => {
    console.log(data);
    toast({ title: "Query Submitted!", description: "Our experts will respond within 24 business hours. Thank you for reaching out." });
    form.reset();
  };

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
  const contactSection = pageData?.sections?.find(s => s.type === 'contact');
  const faqSection = pageData?.sections?.find(s => s.type === 'faqs' || s.type === 'faq');
  const servicesSection = pageData?.sections?.find(s => s.type === 'services');

  const infoData = contactSection?.textContent?.info;
  const faqsData = faqSection?.textContent?.items || [];
  const dynamicServices = servicesSection?.textContent?.items || [];


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
              {heroSection.textContent?.label || "Get in Touch"}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4"
            >
              {heroSection.textContent?.heading}
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

      {/* Query Form + Info Sidebar */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading label={contactSection?.textContent?.label || "Your Questions"} title={contactSection?.textContent?.heading || "How Can We Help?"} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className={`${infoData ? "lg:col-span-3" : "lg:col-span-5 max-w-3xl mx-auto w-full"} bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gold/10`}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-sm font-medium text-charcoal">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" className="border-gold/20 focus:ring-gold focus:border-gold bg-paper/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-sm font-medium text-charcoal">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" className="border-gold/20 focus:ring-gold focus:border-gold bg-paper/50" {...field} />
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
                    <FormField control={form.control} name="serviceType" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-sm font-medium text-charcoal">Service Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gold/20 focus:ring-gold bg-paper/50">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              {dynamicServices.map((s: any) => (
                                <SelectItem key={s.title || s.id} value={s.title}>{s.title}</SelectItem>
                              ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-sm font-medium text-charcoal">Your Query</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe your query in detail..." rows={6} className="border-gold/20 focus:ring-gold focus:border-gold bg-paper/50 resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <button type="submit" className="shimmer-btn w-full py-4 text-charcoal font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Submit Query
                  </button>
                </form>
              </Form>
            </motion.div>

            {/* Info Sidebar */}
            {infoData && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="lg:col-span-2 space-y-6"
              >
                {[
                  { icon: Clock, title: "Response Time", desc: "We typically respond within 24 business hours. Urgent queries are prioritized and addressed within 4 hours." },
                  { icon: Phone, title: "Direct Contact", desc: `Phone: ${infoData.phone}\nEmail: ${infoData.email}` },
                  { icon: Calendar, title: "Office Hours", desc: `${infoData.workingHours?.weekdays || ""}\n${infoData.workingHours?.saturday || ""}\n${infoData.workingHours?.sunday || ""}` },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.5 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10 group hover:border-gold/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <card.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-charcoal mb-1">{card.title}</h3>
                        <p className="text-warm-gray font-sans text-sm whitespace-pre-line leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqsData.length > 0 && (
        <>
          <SectionDivider from="paper" to="white" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
            <div className="absolute inset-0 gold-grid opacity-[0.02]" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <SectionHeading label={faqSection?.textContent?.label || "Common Questions"} title={faqSection?.textContent?.heading || "Frequently Asked Questions"} />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {faqsData.map((faq: any, i: number) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border border-gold/20 rounded-xl px-6 bg-white data-[state=open]:border-gold/40 transition-colors">
                      <AccordionTrigger className="font-display text-lg text-charcoal hover:no-underline py-5">
                        <span className="flex items-center gap-3 text-left">
                          <HelpCircle className="w-5 h-5 text-gold flex-shrink-0" />
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-warm-gray text-sm leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </section>
        </>
      )}

      <CTASection />
      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Query;
