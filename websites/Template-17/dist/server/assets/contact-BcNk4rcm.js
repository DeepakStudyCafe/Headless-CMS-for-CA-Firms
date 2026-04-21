import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-mbGy52-R.js";
import { c as createLucideIcon, a as cn, S as SiteLayout, R as Reveal, B as Button, M as MapPin, P as Phone, b as Mail } from "./Reveal-Bgw62Atd.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CSkPczx8.js";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-gradient-to-b from-muted to-surface py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-semibold text-foreground md:text-5xl", children: "Let's talk about your finances" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-subtle", children: "Reach out for a free, no-obligation consultation. Our team usually responds within one business day." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-subtle", children: "Tell us a little about your requirement and we'll get back to you." }),
        submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-lg border border-secondary/30 bg-secondary/10 p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-primary", children: "Thank you! Your message has been received." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-subtle", children: "We'll be in touch within one business day." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 grid gap-4", onSubmit: (e) => {
          e.preventDefault();
          setSubmitted(true);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "Your name" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "email", placeholder: "you@company.com" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "tel", placeholder: "+91 ..." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Service", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. GST, Audit, Tax filing" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, required: true, placeholder: "How can we help you?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", size: "lg", className: "mt-2 w-full bg-primary text-primary-foreground hover:bg-secondary sm:w-auto", children: [
            "Send Message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        [{
          icon: MapPin,
          title: "Office Address",
          lines: ["12 Business Avenue, 4th Floor", "Mumbai, Maharashtra 400001"]
        }, {
          icon: Phone,
          title: "Phone",
          lines: ["+91 12345 67890", "+91 98765 43210"]
        }, {
          icon: Mail,
          title: "Email",
          lines: ["contact@abcassociates.com", "support@abcassociates.com"]
        }, {
          icon: Clock,
          title: "Office Hours",
          lines: ["Mon – Fri: 9:30 AM – 6:30 PM", "Sat: 10:00 AM – 2:00 PM"]
        }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-xl border border-border bg-surface p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: c.title }),
            c.lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm text-subtle", children: l }, l))
          ] })
        ] }, c.title)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Office location", src: "https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C18.92%2C72.84%2C18.94&layer=mapnik", className: "h-56 w-full", loading: "lazy" }) })
      ] }) })
    ] }) })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-sm font-medium text-foreground", children: label }),
    children
  ] });
}
export {
  ContactPage as component
};
