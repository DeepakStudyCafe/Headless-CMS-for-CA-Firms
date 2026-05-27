import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Receipt,
  ClipboardCheck,
  Building2,
  Briefcase,
  ShieldCheck,
  ArrowUpRight,
  BookOpen,
  FileText,
  Users,
  Building,
  Search,
  TrendingUp
} from "lucide-react";
import { TiltCard } from "./TiltCard";
import { Link } from "@tanstack/react-router";
import { UpdatesTicker } from "./UpdatesTicker";
import { getPosts, WPPost } from "@/lib/api";

const iconMap: Record<string, any> = {
  Calculator, Receipt, ClipboardCheck, Building2, Briefcase, ShieldCheck, BookOpen, FileText, Users, Building, Search, TrendingUp
};

export function Services({ data }: { data?: any }) {
  if (!data) return null;

  const heading = data.textContent?.heading || "Our Services";
  const subheading = data.textContent?.subheading || "Comprehensive financial expertise";
  const items = data.textContent?.items || [];

  const [posts, setPosts] = useState<WPPost[]>([]);

  useEffect(() => {
    getPosts(20).then((p) => setPosts(p)).catch(() => setPosts([]));
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* ambient gradients */}
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold tracking-[0.2em] text-primary uppercase">
            {heading}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            {subheading.split(' ').map((word: string, i: number, arr: any) => {
              if (i === arr.length - 1 || i === arr.length - 2) {
                 return <span key={i} className="text-gradient"> {word}</span>;
              }
              return <span key={i}> {word}</span>;
            })}
          </h2>
          {data.textContent?.description && (
            <p className="mt-4 text-muted-foreground">
              {data.textContent.description}
            </p>
          )}
        </motion.div>

        <div className="mt-16 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {items.map((s: any, i: number) => {
              const Icon = iconMap[s.icon] || Calculator;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                >
                  <TiltCard className="group relative h-full">
                    <div
                      className="gradient-border relative h-full glass-strong rounded-3xl p-7 shadow-card overflow-hidden transition-shadow duration-500 hover:shadow-glow"
                    >
                      {/* spotlight follow cursor */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(400px circle at var(--mx) var(--my), oklch(0.82 0.14 230 / 0.18), transparent 50%)",
                        }}
                      />
                      <div className="relative h-full flex flex-col">
                        <div className="relative h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-soft group-hover:shadow-glow group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                          <Icon className="h-7 w-7" />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-60 blur-lg -z-10 transition-opacity" />
                        </div>
                        <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">{s.description || s.desc}</p>
                        
                        <Link to={`/services/${s.slug || 'tax-planning'}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                          Learn more
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          {posts && posts.length > 0 && (
            <aside className="w-full lg:w-80 flex-shrink-0 self-stretch mt-8 lg:mt-0" aria-label="Latest updates">
              <UpdatesTicker posts={posts} />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
