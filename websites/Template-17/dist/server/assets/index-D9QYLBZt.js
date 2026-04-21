import { T as jsxRuntimeExports } from "./worker-entry-mbGy52-R.js";
import { L as Link } from "./router-CSkPczx8.js";
import { c as createLucideIcon, S as SiteLayout, R as Reveal, B as Button, m as motion } from "./Reveal-Bgw62Atd.js";
import { C as Counter, S as SectionHeading } from "./Counter-DlUI1IBo.js";
import { A as ArrowRight, B as Briefcase } from "./briefcase-DAkbW6oF.js";
import { S as ShieldCheck, C as Calculator, F as FileText, T as TrendingUp, B as BookOpen } from "./trending-up-DzDFL8sB.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const services = [{
  icon: ShieldCheck,
  title: "Audit & Assurance",
  desc: "Statutory, internal and management audits with deep industry insight."
}, {
  icon: Calculator,
  title: "Direct & Indirect Tax",
  desc: "End-to-end tax planning, filing and representation services."
}, {
  icon: FileText,
  title: "GST Advisory",
  desc: "GST registration, returns, audits and litigation support."
}, {
  icon: Briefcase,
  title: "Company Compliance",
  desc: "ROC filings, secretarial services and regulatory compliance."
}, {
  icon: TrendingUp,
  title: "Business Advisory",
  desc: "Strategy, valuation and growth advisory for SMEs and startups."
}, {
  icon: BookOpen,
  title: "Bookkeeping",
  desc: "Accurate accounting and management reporting on the cloud."
}];
const reasons = ["20+ years of trusted financial expertise", "Qualified Chartered Accountants & domain specialists", "Transparent pricing with no hidden fees", "Timely delivery with strict confidentiality", "Industry-specific solutions for your business", "Personal attention from senior partners"];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden border-b border-border bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-secondary" }),
          "Chartered Accountants · Est. 2005"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-4xl font-semibold leading-[1.1] text-foreground md:text-5xl lg:text-6xl", children: [
          "Professional Chartered ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Accountant" }),
          " Services"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-base leading-relaxed text-subtle md:text-lg", children: "ABC & Associates partners with businesses and individuals to deliver clear, compliant and growth-focused financial services — from audit and taxation to advisory and business compliance." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-primary text-primary-foreground hover:bg-secondary", children: [
            "Get Consultation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "border-border", children: "View Services" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-6 text-sm text-subtle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full border-2 border-surface bg-gradient-to-br from-primary to-secondary" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-amber-500", children: Array.from({
              length: 5
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1", children: [
              "Trusted by ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "500+" }),
              " businesses"
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, y: 24, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80", alt: "Chartered Accountants meeting with clients", className: "aspect-[4/5] w-full rounded-2xl object-cover shadow-xl ring-1 ring-border", loading: "eager" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.4,
          duration: 0.5
        }, className: "absolute -bottom-6 -left-6 hidden w-64 rounded-xl border border-border bg-surface p-4 shadow-lg sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/10 p-2 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtle", children: "ICAI Registered" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "100% Compliant Firm" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.55,
          duration: 0.5
        }, className: "absolute -top-6 -right-6 hidden w-56 rounded-xl border border-border bg-surface p-4 shadow-lg sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtle", children: "Filings completed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-2xl font-semibold text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 12e3 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-4/5 rounded-full bg-secondary" }) })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80", alt: "Financial advisory", className: "aspect-[5/4] w-full rounded-2xl object-cover ring-1 ring-border" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "left", eyebrow: "About the firm", title: "Two decades of trusted financial expertise", description: "ABC & Associates is a full-service Chartered Accountancy firm based in India, serving private companies, startups, public enterprises and individuals. Our partners bring deep technical expertise across audit, tax and advisory — combined with a personal commitment to every client we serve." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-semibold text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 20 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-subtle", children: "Years experience" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-semibold text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 500 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-subtle", children: "Happy clients" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-semibold text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 1200 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-subtle", children: "Projects completed" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "mt-8 inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "border-border", children: [
          "Learn more about us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-surface py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "What we do", title: "Services built around your business", description: "From compliance to strategic advisory, we deliver an end-to-end suite of services tailored to your industry and stage of growth." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-subtle", children: s.desc })
      ] }) }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "left", eyebrow: "Why choose us", title: "A partner you can rely on", description: "We combine technical depth with a clear, communicative approach — so you always know where your finances stand and what to do next." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary text-primary-foreground hover:bg-secondary", children: [
          "Schedule a Consultation ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 sm:grid-cols-2", children: reasons.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-lg border border-border bg-surface p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: r })
      ] }, r)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center md:flex-row md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold md:text-3xl", children: "Ready to simplify your finances?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-primary-foreground/80", children: "Talk to a partner today — no obligation, just clear advice." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-white text-primary hover:bg-white/90", children: [
        "Get a Free Quote ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) })
  ] });
}
export {
  HomePage as component
};
