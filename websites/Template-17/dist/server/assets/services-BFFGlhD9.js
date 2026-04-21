import { T as jsxRuntimeExports } from "./worker-entry-mbGy52-R.js";
import { L as Link } from "./router-CSkPczx8.js";
import { S as SiteLayout, R as Reveal, B as Button } from "./Reveal-Bgw62Atd.js";
import { S as ShieldCheck, C as Calculator, F as FileText, T as TrendingUp, B as BookOpen } from "./trending-up-DzDFL8sB.js";
import { B as Briefcase, A as ArrowRight } from "./briefcase-DAkbW6oF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const services = [{
  icon: ShieldCheck,
  title: "Audit & Assurance",
  desc: "Statutory audits, internal audits, management audits and limited reviews carried out by experienced auditors with industry insight."
}, {
  icon: Calculator,
  title: "Direct & Indirect Tax",
  desc: "Income tax planning, return filing, TDS compliance and representation before tax authorities and tribunals."
}, {
  icon: FileText,
  title: "GST Advisory",
  desc: "GST registration, monthly and annual returns, GST audits, refunds and representation in GST proceedings."
}, {
  icon: Briefcase,
  title: "Company Compliance",
  desc: "Incorporation, ROC filings, secretarial compliance, FEMA, and ongoing regulatory support for companies and LLPs."
}, {
  icon: TrendingUp,
  title: "Business Advisory",
  desc: "Financial modelling, valuations, due diligence, and strategic advisory for SMEs, startups and growing enterprises."
}, {
  icon: BookOpen,
  title: "Bookkeeping & Outsourcing",
  desc: "Cloud-based accounting, MIS reports, payroll processing and virtual CFO services tailored to your needs."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary", children: "Our Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-semibold text-foreground md:text-5xl", children: "A complete suite of CA services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-subtle", children: "From routine compliance to strategic advisory — we cover every financial need under one roof." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-subtle", children: s.desc })
    ] }) }, s.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center md:flex-row md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold md:text-3xl", children: "Need a customised engagement?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-primary-foreground/80", children: "We tailor our services to your industry, size and growth stage." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-white text-primary hover:bg-white/90", children: [
        "Talk to a Partner ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
