import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      { name: "description", content: "Reach out to ABC & Associates for tax, audit and advisory consultations." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <section className="bg-[color:var(--cream-deep)]/50 py-20">
        <div className="container-x text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">We're Listening</span>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl text-foreground">Get in Touch</h1>
        </div>
      </section>
      <Contact />
    </div>
  ),
});
