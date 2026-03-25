import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Send, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPageData, getWebsiteData, PageData, getImageUrl } from "@/lib/api";
import { API_URL, WEBSITE_SLUG } from "@/lib/api";

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
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0D" }}>
        <div className="w-14 h-14 border-2 rounded-full animate-spin" style={{ borderColor: "rgba(224,140,46,0.2)", borderTopColor: "#E08C2E" }} />
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#0D0D0D" }}>
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

  const inp = "w-full rounded-xl px-4 py-3 text-sm border focus:outline-none transition-all";
  const inpStyle = { background: "rgba(255,255,255,0.04)", borderColor: "rgba(224,140,46,0.2)", color: "#F5F0E8" };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0D0D0D" }}>
      <Navbar websiteData={websiteData} />

      {/* Hero */}
      {heroSection && (
        <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#111111" }}>
          {heroSection.imageUrl && (
            <img src={getImageUrl(heroSection.imageUrl)} alt="" className="absolute inset-0 w-full h-full object-cover opacity-18" />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, #111111)" }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            {heroSection.textContent?.label && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="font-mono text-[10px] tracking-[3px] uppercase block mb-4" style={{ color: "#E08C2E" }}>
                // {heroSection.textContent.label}
              </motion.span>
            )}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
              className="font-heading font-bold mb-4" style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "#F5F0E8", lineHeight: 1.05 }}>
              {heroSection.textContent?.heading}
            </motion.h1>
            {heroSection.textContent?.subheading && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}
                className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(245,240,232,0.5)" }}>
                {heroSection.textContent.subheading}
              </motion.p>
            )}
            {positionsData.length > 0 && (
              <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }}
                onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full text-sm font-semibold transition-all"
                style={{ background: "#E08C2E", color: "#0D0D0D" }}>
                Apply Now
              </motion.button>
            )}
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefitsData.length > 0 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#0D0D0D" }}>
          <div className="max-w-7xl mx-auto">
            {careerSection?.textContent?.benefitsLabel && (
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="font-mono text-[10px] tracking-[3px] uppercase block mb-2" style={{ color: "#E08C2E" }}>
                // {careerSection.textContent.benefitsLabel}
              </motion.span>
            )}
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12" style={{ color: "#F5F0E8" }}>
              {careerSection?.textContent?.benefitsHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitsData.map((benefit: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.55 }}
                  className="rounded-2xl border p-7" style={{ background: "#111111", borderColor: "rgba(224,140,46,0.12)" }}>
                  <div className="text-2xl mb-4">{iconMap[benefit.icon] || "✦"}</div>
                  <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: "#F5F0E8" }}>{benefit.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Open Positions */}
      {positionsData.length > 0 && (
        <section className="py-20 px-6 lg:px-12" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto">
            {careerSection?.textContent?.positionsLabel && (
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="font-mono text-[10px] tracking-[3px] uppercase block mb-2" style={{ color: "#E08C2E" }}>
                // {careerSection.textContent.positionsLabel}
              </motion.span>
            )}
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-10" style={{ color: "#F5F0E8" }}>
              {careerSection?.textContent?.positionsHeading}
            </h2>
            <div className="space-y-5">
              {positionsData.map((job: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="rounded-2xl border-l-4 p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
                  style={{ background: "#0D0D0D", borderLeftColor: "#E08C2E", border: "1px solid rgba(224,140,46,0.12)", borderLeft: "4px solid #E08C2E" }}>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: "#F5F0E8" }}>{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.department && <Badge variant="outline" className="text-xs" style={{ borderColor: "rgba(224,140,46,0.3)", color: "#E08C2E" }}>{job.department}</Badge>}
                      {job.type && <Badge variant="outline" className="text-xs" style={{ borderColor: "rgba(245,240,232,0.2)", color: "rgba(245,240,232,0.6)" }}>{job.type}</Badge>}
                      {job.location && (
                        <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(245,240,232,0.5)" }}>
                          <MapPin className="w-3 h-3" />{job.location}
                        </span>
                      )}
                    </div>
                    {job.description && <p className="text-sm leading-relaxed mb-2" style={{ color: "rgba(245,240,232,0.55)" }}>{job.description}</p>}
                    {job.experience && <p className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>Experience: {job.experience}</p>}
                  </div>
                  <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                    className="flex-shrink-0 self-start px-5 py-2.5 rounded-xl text-sm font-semibold"
                    style={{ background: "#E08C2E", color: "#0D0D0D" }}>
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Application Form */}
      <section ref={formRef} className="py-20 px-6 lg:px-12" style={{ background: "#0D0D0D" }}>
        <div className="max-w-3xl mx-auto">
          {careerSection?.textContent?.formLabel && (
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-mono text-[10px] tracking-[3px] uppercase block mb-2" style={{ color: "#E08C2E" }}>
              // {careerSection.textContent.formLabel}
            </motion.span>
          )}
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-10" style={{ color: "#F5F0E8" }}>
            {careerSection?.textContent?.formHeading}
          </h2>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl border p-8" style={{ background: "#111111", borderColor: "rgba(224,140,46,0.12)" }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-mono uppercase tracking-wider" style={{ color: "rgba(245,240,232,0.4)" }}>Full Name</FormLabel>
                      <FormControl><Input placeholder="Your full name" className={inp} style={inpStyle} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-mono uppercase tracking-wider" style={{ color: "rgba(245,240,232,0.4)" }}>Email</FormLabel>
                      <FormControl><Input type="email" placeholder="your@email.com" className={inp} style={inpStyle} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-mono uppercase tracking-wider" style={{ color: "rgba(245,240,232,0.4)" }}>Phone</FormLabel>
                      <FormControl><Input type="tel" placeholder="+91 98765 43210" className={inp} style={inpStyle} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="position" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-mono uppercase tracking-wider" style={{ color: "rgba(245,240,232,0.4)" }}>Position</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={inp} style={inpStyle}>
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
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
                  <label className="text-xs font-mono uppercase tracking-wider block mb-2" style={{ color: "rgba(245,240,232,0.4)" }}>Resume/CV</label>
                  <div className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer"
                    style={{ borderColor: "rgba(224,140,46,0.2)" }}>
                    <Upload className="w-7 h-7 mx-auto mb-2" style={{ color: "rgba(224,140,46,0.5)" }} />
                    <p className="text-xs" style={{ color: "rgba(245,240,232,0.4)" }}>Drag & drop or click to upload (PDF, DOC, Max 5MB)</p>
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                  </div>
                </div>
                <FormField control={form.control} name="coverLetter" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-mono uppercase tracking-wider" style={{ color: "rgba(245,240,232,0.4)" }}>Cover Letter (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us why you'd be a great fit..." rows={4} className={`${inp} resize-none`} style={inpStyle} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <button type="submit" disabled={submitting}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                  style={{ background: "#E08C2E", color: "#0D0D0D" }}>
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
