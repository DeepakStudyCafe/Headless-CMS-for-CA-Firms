import { T as jsxRuntimeExports } from "./worker-entry-mbGy52-R.js";
import { c as createLucideIcon, S as SiteLayout, R as Reveal } from "./Reveal-Bgw62Atd.js";
import { S as SectionHeading, C as Counter } from "./Counter-DlUI1IBo.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CSkPczx8.js";
const __iconNode$3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { title: "About Us", subtitle: "A trusted Chartered Accountant firm with over two decades of expertise." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-surface py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1100&q=80", alt: "Our office", className: "aspect-[5/4] w-full rounded-2xl object-cover ring-1 ring-border" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "left", eyebrow: "Our story", title: "Built on integrity, sharpened by expertise", description: "Founded in 2005, ABC & Associates began as a small practice with a singular focus: delivering honest, thoughtful financial guidance. Today we are a multi-partner firm serving over 500 clients across industries — from family-run businesses to listed companies." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-subtle", children: "Our partners and associates are members of the Institute of Chartered Accountants of India (ICAI), with deep specialization across audit, taxation, GST, corporate law and advisory services." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: [{
        icon: Target,
        title: "Our Mission",
        text: "To deliver clear, compliant and forward-looking financial services that help our clients grow with confidence."
      }, {
        icon: Eye,
        title: "Our Vision",
        text: "To be the most trusted Chartered Accountancy partner for ambitious businesses across India."
      }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-surface p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-subtle", children: c.text })
      ] }) }, c.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 rounded-2xl border border-border bg-surface p-8 md:grid-cols-4", children: [{
        v: 20,
        l: "Years experience",
        icon: Award
      }, {
        v: 500,
        l: "Clients served",
        icon: Users
      }, {
        v: 1200,
        l: "Projects completed",
        icon: Target
      }, {
        v: 12,
        l: "Expert team",
        icon: Eye
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mx-auto h-6 w-6 text-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-3xl font-semibold text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-subtle", children: s.l })
      ] }) }, s.l)) })
    ] }) })
  ] });
}
function PageHero({
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-semibold text-foreground md:text-5xl", children: title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-base text-subtle", children: subtitle }) })
  ] }) });
}
export {
  AboutPage as component
};
