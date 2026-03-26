import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EditorialHeading from "@/components/ui/EditorialHeading";
import { getPageData, getWebsiteData, PageData, getImageUrl, API_URL, WEBSITE_SLUG } from "@/lib/api";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  serviceType: z.string().min(1, "Please select a service"),
  queryType: z.string().min(1, "Please select query type"),
  message: z.string().min(10, "Please describe your query"),
});
type FormValues = z.infer<typeof schema>;

const Query = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", serviceType: "", queryType: "", message: "" },
  });

  useEffect(() => {
    Promise.all([getPageData("query"), getWebsiteData()]).then(([page, site]) => {
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
        body: JSON.stringify({ ...data, websiteSlug: WEBSITE_SLUG, formType: "query" }),
      });
      if (res.ok) {
        toast({ title: "Query Submitted!", description: "Our experts will respond within 24 business hours." });
        form.reset();
      } else {
        toast({ title: "Error", description: "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Could not submit.", variant: "destructive" });
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
  const formSection = pageData.sections?.find(s => s.type === "query-form");
  const servicesList: { title: string; href: string }[] = websiteData?.themeConfig?.services || [];
  const queryTypes: any[] = formSection?.textContent?.queryTypes || [];

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
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
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
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="border p-8 md:p-10 bg-deep" style={{ borderColor: "rgba(61,166,142,0.15)" }}>
            <EditorialHeading folio="01" label="YOUR QUERY" heading={formSection?.textContent?.formHeading || "Submit Your Query"} headingSize="text-2xl sm:text-3xl" light className="mb-3" />
            {formSection?.textContent?.formSubheading && (
              <p className="text-sm text-surface/50 font-body mb-8">{formSection.textContent.formSubheading}</p>
            )}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">FULL NAME</FormLabel>
                      <FormControl><Input placeholder="Your full name" className={inp} style={inpStyle} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">EMAIL</FormLabel>
                      <FormControl><Input type="email" placeholder="your@email.com" className={inp} style={inpStyle} {...field} /></FormControl>
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
                  <FormField control={form.control} name="queryType" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">QUERY TYPE</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={inp} style={inpStyle}><SelectValue placeholder="Select type" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {queryTypes.length > 0 ? (
                            queryTypes.map((qt: any, qi: number) => (
                              <SelectItem key={qi} value={qt.value || qt.label?.toLowerCase().replace(/\s+/g, "-")}>{qt.label}</SelectItem>
                            ))
                          ) : (
                            <>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="pricing">Pricing & Packages</SelectItem>
                              <SelectItem value="compliance">Compliance Issue</SelectItem>
                              <SelectItem value="tax">Tax Planning</SelectItem>
                              <SelectItem value="audit">Audit Services</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="serviceType" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">SERVICE OF INTEREST</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className={inp} style={inpStyle}><SelectValue placeholder="Which service?" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {servicesList.map((s, i) => (
                          <SelectItem key={i} value={s.href?.replace("/services/", "") || s.title}>{s.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">YOUR QUERY</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your requirement in detail..." rows={5} className={`${inp} resize-none`} style={inpStyle} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <button type="submit" disabled={submitting}
                  className="w-full py-3.5 text-sm font-body font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-60 bg-ca-accent-2 text-surface hover:bg-ca-accent-2/90">
                  {submitting ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                  {submitting ? "Submitting..." : "Submit Query"}
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      <Footer websiteData={websiteData} />
    </div>
  );
};

export default Query;
