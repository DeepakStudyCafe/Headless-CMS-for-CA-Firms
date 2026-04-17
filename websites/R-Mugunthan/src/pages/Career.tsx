import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionHeading from "@/components/SectionHeading";
import SectionDivider from "@/components/SectionDivider";
import MagneticCard from "@/components/MagneticCard";
import { motion } from "framer-motion";
import { GraduationCap, Heart, TrendingUp, Clock, Users, Scale, Upload, Briefcase, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef } from "react";
import { getPageData, getWebsiteData, PageData, API_URL } from "@/lib/api";

const iconMap: Record<string, React.ElementType> = { GraduationCap, Heart, TrendingUp, Clock, Users, Scale };

const careerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  coverLetter: z.string().optional(),
});

type CareerFormValues = z.infer<typeof careerFormSchema>;

const Career = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPageData('career'), getWebsiteData()]).then(([page, site]) => {
      setPageData(page);
      setWebsiteData(site);
      setLoading(false);
    });
  }, []);
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const form = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: { name: "", email: "", phone: "", position: "", coverLetter: "" },
  });

  const onSubmit = async (data: CareerFormValues) => {
    try {
      const res = await fetch(`${API_URL}/forms/career`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, firstName: data.name, website: "r-mugunthan" }),
      });
      if (res.ok) {
        toast({ title: "Application Submitted!", description: "Thank you for your interest. Our HR team will review your application and get back to you soon." });
        form.reset();
      } else {
        toast({ title: "Error", description: "Failed to submit application. Please try again later.", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Error", description: "Failed to submit application. Please try again later.", variant: "destructive" });
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
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
  const careerSection = pageData?.sections?.find(s => s.type === 'career');
  const cultureSection = pageData?.sections?.find(s => s.type === 'text-image' && s.textContent?.label === 'Life at Our Firm');
  const formSection = pageData?.sections?.find(s => s.type === 'form' && s.textContent?.heading === 'Start Your Journey');

  const benefitsData = careerSection?.textContent?.benefits || [];
  const positionsData = careerSection?.textContent?.positions || [];
  const cultureData = cultureSection?.textContent?.paragraphs || [];

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
              {heroSection.textContent?.label || "Join Us"}
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

      {/* Company Culture */}
      {cultureSection && (
        <section className="py-20 md:py-28 px-6 lg:px-8 bg-paper relative">
          <div className="absolute inset-0 noise-texture" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <SectionHeading label={cultureSection.textContent?.label} title={cultureSection.textContent?.heading} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {cultureData.map((para: string, idx: number) => (
                  <p key={idx} className="text-charcoal/80 font-sans text-base leading-relaxed mb-5">
                    {para}
                  </p>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl" />
                <img
                  src={cultureSection.imageUrl || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"}
                  alt="Our Culture"
                  className="rounded-2xl w-full h-80 object-cover relative z-10"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits & Perks */}
      {careerSection && benefitsData.length > 0 && (
        <>
          <SectionDivider from={cultureSection ? "paper" : "dark"} to="white" />
          <section className="py-20 md:py-28 px-6 lg:px-8 bg-white relative">
            <div className="absolute inset-0 gold-grid opacity-[0.02]" />
            <div className="relative z-10 max-w-7xl mx-auto">
              <SectionHeading label={careerSection.textContent?.benefitsLabel || "Why Join Us"} title={careerSection.textContent?.benefitsHeading || "Benefits & Perks"} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefitsData.map((benefit: any, i: number) => {
                  const Icon = iconMap[benefit.icon] || Briefcase;
                  return (
                    <MagneticCard key={benefit.title} index={i}>
                      <div className="bg-paper p-8 rounded-2xl border border-gold/10 h-full">
                        <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                          <Icon className="w-7 h-7 text-gold" />
                        </div>
                        <h3 className="font-display text-xl text-charcoal mb-3">{benefit.title}</h3>
                        <p className="text-warm-gray font-sans text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </MagneticCard>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}



      {/* Application Form */}
      {formSection ? (
        <>
          <SectionDivider from="paper" to="dark" />
          <section ref={formRef} className="py-20 md:py-28 px-6 lg:px-8 bg-charcoal relative">
            <div className="absolute inset-0 gold-grain" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <SectionHeading label={formSection.textContent?.label || "Apply Now"} title={formSection.textContent?.heading || "Start Your Journey"} light />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
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
                      <FormField control={form.control} name="position" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans text-sm font-medium text-charcoal">Position Applying For</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gold/20 focus:ring-gold bg-paper/50">
                                <SelectValue placeholder="Select a position" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Application</SelectItem>
                              {positionsData.map((p: any) => (
                                <SelectItem key={p.id || p.title} value={p.title}>{p.title}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    {/* Resume Upload Placeholder */}
                    <div>
                      <label className="font-sans text-sm font-medium text-charcoal block mb-2">Resume / CV</label>
                      <div className="border-2 border-dashed border-gold/30 rounded-xl p-8 text-center hover:border-gold/50 transition-colors cursor-pointer bg-paper/30">
                        <Upload className="w-8 h-8 text-gold/50 mx-auto mb-3" />
                        <p className="font-sans text-sm text-charcoal/60 mb-1">Drag & drop your resume here or click to browse</p>
                        <p className="font-sans text-xs text-warm-gray">PDF, DOC, DOCX (Max 5MB)</p>
                        <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                      </div>
                    </div>
                    <FormField control={form.control} name="coverLetter" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-sm font-medium text-charcoal">Cover Letter (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us why you'd be a great fit..." rows={4} className="border-gold/20 focus:ring-gold focus:border-gold bg-paper/50 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <button type="submit" className="shimmer-btn w-full py-4 text-charcoal font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> {formSection?.textContent?.ctaPrimary || "Submit Application"}
                    </button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </section>
        </>
      ) : (
        <div ref={formRef}></div>
      )}

      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Career;
