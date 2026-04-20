import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants | Audit, Tax & Advisory" },
      {
        name: "description",
        content:
          "ABC & Associates is a premier chartered accountancy firm offering audit, tax, GST and business advisory services. Partner-led engagements for 500+ clients across India.",
      },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Audit, tax and advisory services delivered with precision." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
