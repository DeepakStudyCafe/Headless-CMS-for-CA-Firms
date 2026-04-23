import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CA Firm — Premium Chartered Accountant Services" },
      { name: "description", content: "Trusted chartered accountancy firm offering tax planning, GST, audit, compliance and business advisory services for businesses and individuals." },
      { property: "og:title", content: "CA Firm — Premium Chartered Accountant Services" },
      { property: "og:description", content: "Audit, tax, advisory and compliance — delivered with precision and care." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
