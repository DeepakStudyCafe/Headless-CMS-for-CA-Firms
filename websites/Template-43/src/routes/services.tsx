import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { useGsapReveal } from "@/hooks/useGsap";
import { Calculator, ShieldCheck, FileText, Building2, TrendingUp, ScrollText, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      { name: "description", content: "Tax advisory, GST, audit & assurance, company formation, financial consulting and compliance management." },
      { property: "og:title", content: "Services — ABC & Associates" },
      { property: "og:description", content: "Six disciplines, one standard. Senior-led chartered accountancy services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Calculator, title: "Tax Advisory", points: ["Direct & corporate tax planning", "International tax & DTAA", "Transfer pricing studies", "Tax controversy & appeals"], desc: "Strategic tax planning that protects margins, anticipates change and stands up to scrutiny." },
  { icon: ScrollText, title: "GST Services", points: ["GST registration & migration", "Monthly returns & reconciliation", "Refund processing", "Litigation at AAR/AAAR/Tribunals"], desc: "End-to-end indirect tax — from clean monthly returns to argued positions before tribunals." },
  { icon: ShieldCheck, title: "Audit & Assurance", points: ["Statutory audit (CARO)", "Internal audit & SOX", "Tax & GST audit", "Special-purpose & due diligence"], desc: "Audits that surface real risk and inspire genuine confidence with boards, lenders and regulators." },
  { icon: Building2, title: "Company Formation", points: ["Private limited & LLP", "FDI inflow structuring", "ROC, FEMA & RBI filings", "Secretarial compliance"], desc: "From day-one incorporation to ongoing secretarial care for Indian and foreign-owned entities." },
  { icon: TrendingUp, title: "Financial Consulting", points: ["CFO advisory", "Business valuations", "M&A & due diligence", "Capital structure & MIS design"], desc: "CFO-grade insight on the questions that decide your next five years — capital, deals, governance." },
  { icon: FileText, title: "Compliance Management", points: ["Calendar-driven filings", "Income tax & TDS", "ROC annual compliance", "Labour & PF/ESI"], desc: "A single calm desk for every statutory deadline, filing and regulator across your business." },
];

function ServicesPage() {
  useGsapReveal();
  return (
    <Layout>
      <PageHeader
        eyebrow="Services"
        title="Six disciplines. One uncompromising standard."
        intro="Each engagement is led by a partner. Every deliverable is reviewed by another. The standard does not move."
      />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              className={`group relative grid lg:grid-cols-12 gap-8 p-10 lg:p-14 ${
                i % 2 === 0 ? "bg-white" : "bg-ink text-white"
              } hover:shadow-luxe transition-all duration-500`}
            >
              <div className="lg:col-span-1">
                <div className={`h-14 w-14 rounded-full flex items-center justify-center ${i % 2 === 0 ? "bg-gradient-wine text-white" : "bg-white text-wine"}`}>
                  <s.icon size={22} />
                </div>
              </div>
              <div className="lg:col-span-4">
                <span className={`text-xs uppercase tracking-[0.3em] ${i % 2 === 0 ? "text-wine" : "text-white/60"}`}>0{i + 1}</span>
                <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight">{s.title}</h2>
              </div>
              <div className="lg:col-span-4">
                <p className={`leading-relaxed ${i % 2 === 0 ? "text-ink/75" : "text-white/80"}`}>{s.desc}</p>
              </div>
              <div className="lg:col-span-3">
                <ul className={`space-y-2 text-sm ${i % 2 === 0 ? "text-ink/70" : "text-white/70"}`}>
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-wine">—</span>{p}</li>
                  ))}
                </ul>
              </div>
              {/* hover divider line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-wine group-hover:w-full transition-all duration-700" />
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-24 text-center">
          <Link
            to="/query"
            className="inline-flex items-center gap-3 bg-gradient-wine text-white px-10 py-5 text-sm uppercase tracking-[0.25em] hover:shadow-luxe transition-all"
          >
            Discuss your engagement
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
