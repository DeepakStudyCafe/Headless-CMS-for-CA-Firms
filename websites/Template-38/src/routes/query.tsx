import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/sections/Contact";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Submit a Query — ABC & Associates" },
      { name: "description", content: "Submit your tax, audit or compliance query to ABC & Associates." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <section className="bg-[color:var(--cream-deep)]/50 py-20">
        <div className="container-x text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Quick Help</span>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl text-foreground">Submit a Query</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a specific tax, audit or compliance question? Send it across — our partners respond within 24 hours.
          </p>
        </div>
      </section>
      <Contact />
    </div>
  ),
});
