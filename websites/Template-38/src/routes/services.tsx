import { createFileRoute } from "@tanstack/react-router";
import Services from "@/sections/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABC & Associates" },
      { name: "description", content: "Tax, GST, audit, compliance, company registration and business advisory services from ABC & Associates." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <section className="bg-[color:var(--cream-deep)]/50 py-20">
        <div className="container-x text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">What We Offer</span>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl text-foreground">Our Services</h1>
        </div>
      </section>
      <Services />
    </div>
  ),
});
