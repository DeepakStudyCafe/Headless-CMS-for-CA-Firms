import { T as jsxRuntimeExports } from "./worker-entry-mbGy52-R.js";
import { S as SiteLayout, R as Reveal } from "./Reveal-Bgw62Atd.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CSkPczx8.js";
const team = [{
  name: "Anil Bhatia",
  role: "Managing Partner, FCA",
  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
}, {
  name: "Bhavna Chawla",
  role: "Partner — Tax & Advisory",
  img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
}, {
  name: "Chetan Desai",
  role: "Partner — Audit & Assurance",
  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
}, {
  name: "Divya Iyer",
  role: "Senior Manager — GST",
  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
}, {
  name: "Eshan Kapoor",
  role: "Manager — Compliance",
  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
}, {
  name: "Farah Mehta",
  role: "Manager — Advisory",
  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
}];
function TeamPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary", children: "Our Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-semibold text-foreground md:text-5xl", children: "Experienced. Approachable. Accountable." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-subtle", children: "A multidisciplinary team of Chartered Accountants and advisors dedicated to your success." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3", children: team.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.img, alt: m.name, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-secondary", children: m.role })
      ] })
    ] }) }, m.name)) }) })
  ] });
}
export {
  TeamPage as component
};
