import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import teamHero from "@/assets/team-hero.jpg";
import { Linkedin, Mail, Award } from "lucide-react";

const partners = [
  { name: "CA Vikram Sharma", role: "Managing Partner", expertise: "Audit & Assurance, Tax Advisory", initials: "VS" },
  { name: "CA Neha Kapoor", role: "Senior Partner", expertise: "Corporate Finance, M&A Advisory", initials: "NK" },
  { name: "CA Rajat Singh", role: "Partner - Tax", expertise: "International Tax, Transfer Pricing", initials: "RS" },
];

const team = [
  { name: "Anita Desai", role: "Manager - Audit", dept: "Audit" },
  { name: "Suresh Nair", role: "Senior Associate - Tax", dept: "Tax" },
  { name: "Meera Iyer", role: "Manager - Compliance", dept: "Compliance" },
  { name: "Arjun Reddy", role: "Associate - Advisory", dept: "Advisory" },
  { name: "Kavita Joshi", role: "Senior Associate - GST", dept: "Tax" },
  { name: "Rahul Verma", role: "Associate - Payroll", dept: "Payroll" },
];

const certifications = ["ICAI", "ACCA", "CPA", "CFA", "DISA", "FAFD"];

const Team = () => (
  <Layout>
    <PageHero title="Our Team" subtitle="Meet the experts behind your financial success" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]} image={teamHero} />

    {/* Leadership */}
    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading label="Leadership" title="Meet Our Partners" description="Experienced professionals leading the firm with vision and deep industry expertise." />
        <div className="grid md:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.15}>
              <div className="bg-card rounded-2xl card-shadow overflow-hidden group hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-primary/10">
                <div className="h-52 bg-gradient-to-br from-primary/10 via-accent/5 to-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500" />
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl relative z-10">
                    <span className="text-primary-foreground font-heading font-bold text-2xl">{p.initials}</span>
                  </div>
                </div>
                <div className="p-7 text-center">
                  <h3 className="font-heading font-bold text-foreground text-lg">{p.name}</h3>
                  <p className="text-accent font-medium text-sm mt-1">{p.role}</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{p.expertise}</p>
                  <div className="flex justify-center gap-2 mt-5">
                    {[Linkedin, Mail].map((Icon, j) => (
                      <a key={j} href="#" className="w-9 h-9 rounded-xl bg-emerald-subtle flex items-center justify-center hover:bg-primary hover:scale-105 transition-all">
                        <Icon className="w-4 h-4 text-primary hover:text-primary-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Team Members */}
    <section className="py-24 bg-muted/50">
      <div className="container">
        <SectionHeading label="Our Professionals" title="Team Members" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.08}>
              <div className="flex items-center gap-4 p-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  <span className="text-primary font-heading font-bold group-hover:text-primary-foreground transition-colors">{m.name[0]}</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{m.name}</h4>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-24 bg-background">
      <div className="container text-center">
        <SectionHeading label="Qualifications" title="Certifications & Expertise" />
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((c, i) => (
            <ScrollReveal key={c} delay={i * 0.08}>
              <div className="px-10 py-5 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10 flex items-center gap-3">
                <Award className="w-5 h-5 text-accent" />
                <span className="font-heading font-bold text-primary text-lg">{c}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Culture */}
    <section className="py-24 bg-secondary">
      <div className="container text-center">
        <ScrollReveal>
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">Our Culture</span>
          <div className="section-divider mt-3 mb-5 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">A Place to Grow & Excel</h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
            At Sharma & Co., we foster a culture of continuous learning, collaboration, and professional development. Our team members are empowered to innovate and excel in their careers.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {["Continuous Learning", "Work-Life Balance", "Team Collaboration"].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/8">
                <span className="text-secondary-foreground font-heading font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Team;
