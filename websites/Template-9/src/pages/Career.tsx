import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EditorialHeading from "@/components/ui/EditorialHeading";
import { getPageData, getWebsiteData, PageData, getImageUrl, API_URL, WEBSITE_SLUG } from "@/lib/api";

const iconMap: Record<string, string> = {
  GraduationCap: "🎓", Heart: "❤️", TrendingUp: "📈", Clock: "⏰", Users: "👥", Scale: "⚖️", Briefcase: "💼",
};

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  position: z.string().min(1, "Please select a position"),
  coverLetter: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

const Career = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [websiteData, setWebsiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", position: "", coverLetter: "" },
  });

  useEffect(() => {
    Promise.all([getPageData("career"), getWebsiteData()]).then(([page, site]) => {
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
        body: JSON.stringify({ ...data, websiteSlug: WEBSITE_SLUG, formType: "career" }),
      });
      if (res.ok) {
        toast({ title: "Application Submitted!", description: "Our HR team will review your application soon." });
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
  const careerSection = pageData.sections?.find(s => s.type === "career");
  const benefitsData: any[] = careerSection?.textContent?.benefits || [];
  const positionsData: any[] = careerSection?.textContent?.positions || [];

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
                className="mt-5 text-base sm:text-lg text-surface/50 max-w-2xl mx-auto font-body mb-8">
                {heroSection.textContent.subheading}
              </motion.p>
            )}
            {positionsData.length > 0 && (
              <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
                onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 text-sm font-body font-semibold bg-ca-accent-2 text-surface hover:bg-ca-accent-2/90 transition-all">
                Apply Now
              </motion.button>
            )}
          </div>
        </section>
      )}

      {benefitsData.length > 0 && (
        <section className="py-20 px-6 lg:px-12 bg-ca-bg">
          <div className="max-w-7xl mx-auto">
            <EditorialHeading folio="01" label={careerSection?.textContent?.benefitsLabel || "WHY JOIN US"} heading={careerSection?.textContent?.benefitsHeading || "Benefits & Perks"} headingSize="text-3xl sm:text-4xl" className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitsData.map((benefit: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="border p-7 bg-surface" style={{ borderColor: "rgba(61,166,142,0.12)" }}>
                  <div className="text-2xl mb-4">{iconMap[benefit.icon] || "✦"}</div>
                  <h3 className="font-display text-lg font-semibold text-text-main mb-2">{benefit.title}</h3>
                  <p className="text-sm font-body leading-relaxed text-text-muted-custom">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {positionsData.length > 0 && (
        <section className="py-20 px-6 lg:px-12 bg-deep">
          <div className="max-w-4xl mx-auto">
            <EditorialHeading folio="02" label={careerSection?.textContent?.positionsLabel || "OPPORTUNITIES"} heading={careerSection?.textContent?.positionsHeading || "Open Positions"} headingSize="text-3xl sm:text-4xl" light className="mb-10" />
            <div className="space-y-5">
              {positionsData.map((job: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(61,166,142,0.12)", borderLeft: "4px solid hsl(172, 46%, 45%)" }}>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-surface mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.department && <Badge variant="outline" className="text-xs border-ca-accent-2/30 text-ca-accent-2">{job.department}</Badge>}
                      {job.type && <Badge variant="outline" className="text-xs border-surface/20 text-surface/60">{job.type}</Badge>}
                      {job.location && (
                        <span className="flex items-center gap-1 text-xs text-surface/50">
                          <MapPin className="w-3 h-3" />{job.location}
                        </span>
                      )}
                    </div>
                    {job.description && <p className="text-sm font-body leading-relaxed text-surface/55 mb-2">{job.description}</p>}
                    {job.experience && <p className="text-xs text-surface/40">Experience: {job.experience}</p>}
                  </div>
                  <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                    className="flex-shrink-0 self-start px-5 py-2.5 text-sm font-body font-semibold bg-ca-accent-2 text-surface hover:bg-ca-accent-2/90 transition-all">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section ref={formRef} className="py-20 px-6 lg:px-12 bg-ca-bg">
        <div className="max-w-3xl mx-auto">
          <EditorialHeading folio="03" label={careerSection?.textContent?.formLabel || "APPLY NOW"} heading={careerSection?.textContent?.formHeading || "Start Your Journey"} headingSize="text-3xl sm:text-4xl" className="mb-10" />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="border p-8 bg-deep" style={{ borderColor: "rgba(61,166,142,0.15)" }}>
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
                  <FormField control={form.control} name="position" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">POSITION</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={inp} style={inpStyle}><SelectValue placeholder="Select a position" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Application</SelectItem>
                          {positionsData.map((p: any, pi: number) => (
                            <SelectItem key={pi} value={p.title}>{p.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div>
                  <label className="font-label text-[10px] tracking-[2px] text-surface/40 block mb-2">RESUME/CV</label>
                  <div className="border-2 border-dashed p-8 text-center cursor-pointer" style={{ borderColor: "rgba(61,166,142,0.2)" }}>
                    <Upload className="w-7 h-7 mx-auto mb-2 text-ca-accent-2/50" />
                    <p className="text-xs text-surface/40 font-body">Drag & drop or click to upload (PDF, DOC, Max 5MB)</p>
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                  </div>
                </div>
                <FormField control={form.control} name="coverLetter" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-label text-[10px] tracking-[2px] text-surface/40">COVER LETTER (OPTIONAL)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us why you'd be a great fit..." rows={4} className={`${inp} resize-none`} style={inpStyle} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <button type="submit" disabled={submitting}
                  className="w-full py-3.5 text-sm font-body font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-60 bg-ca-accent-2 text-surface hover:bg-ca-accent-2/90">
                  {submitting ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                  {submitting ? "Submitting..." : "Submit Application"}
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

export default Career;
