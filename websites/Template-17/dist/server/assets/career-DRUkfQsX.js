import { T as jsxRuntimeExports } from "./worker-entry-mbGy52-R.js";
import { L as Link } from "./router-CSkPczx8.js";
import { S as SiteLayout, R as Reveal, M as MapPin, B as Button } from "./Reveal-Bgw62Atd.js";
import { B as Briefcase, A as ArrowRight } from "./briefcase-DAkbW6oF.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const jobs = [{
  title: "Chartered Accountant — Audit",
  location: "Mumbai",
  type: "Full-time"
}, {
  title: "Tax Manager — Direct Tax",
  location: "Mumbai / Pune",
  type: "Full-time"
}, {
  title: "Article Assistant",
  location: "Mumbai",
  type: "Articleship"
}, {
  title: "GST Executive",
  location: "Remote",
  type: "Full-time"
}];
function CareerPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary", children: "Career" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-semibold text-foreground md:text-5xl", children: "Build your career with us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-subtle", children: "We hire ambitious professionals who want to grow alongside great clients and great mentors." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: jobs.map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-secondary hover:shadow-md sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: j.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-4 text-sm text-subtle", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
              " ",
              j.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" }),
              " ",
              j.type
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "border-border", children: [
          "Apply Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }) }, j.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-xl border border-border bg-muted p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground", children: "Don't see a role that fits?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-subtle", children: "Send us your CV — we're always open to meeting talented professionals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-5 inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-primary text-primary-foreground hover:bg-secondary", children: "Send your CV" }) })
      ] }) })
    ] }) })
  ] });
}
export {
  CareerPage as component
};
