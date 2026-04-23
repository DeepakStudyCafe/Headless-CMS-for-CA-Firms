import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sterling & Co. — Premium Chartered Accountants in India" },
      { name: "description", content: "Tax planning, GST, audit, advisory and compliance services from a senior team of ICAI-certified chartered accountants. 25+ years of trusted practice." },
      { property: "og:title", content: "Sterling & Co. — Premium Chartered Accountants" },
      { property: "og:description", content: "White-glove chartered accountancy services for founders, family offices and enterprises." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
