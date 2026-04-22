import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Intro } from "@/components/sections/Intro";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Metrics } from "@/components/sections/Metrics";
import { Industries } from "@/components/sections/Industries";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants | Audit, Tax & Advisory" },
      {
        name: "description",
        content:
          "ABC & Associates is an independent chartered accountancy firm offering audit, tax, advisory and forensic services to discerning businesses across India.",
      },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Trusted advisory. Financial clarity. Compliance expertise. Since 2004." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Intro />
      <ValueStrip />
      <About />
      <Services />
      <Metrics />
      <Industries />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
