import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/sections/TopBar";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Premier Chartered Accountants in India" },
      { name: "description", content: "ABC & Associates is a premier CA firm offering tax, audit, GST, compliance and advisory services with 20+ years of trusted expertise." },
      { property: "og:title", content: "ABC & Associates — Premier Chartered Accountants" },
      { property: "og:description", content: "Trusted CA firm offering tax, audit, GST and advisory services across India." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
