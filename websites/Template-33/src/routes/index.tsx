import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Chartered Accountant Firm — Tax, Audit & Advisory" },
      { name: "description", content: "Trusted chartered accountancy firm offering tax planning, GST, audit, company registration, and business advisory services for ambitious businesses." },
      { property: "og:title", content: "Premium Chartered Accountant Firm" },
      { property: "og:description", content: "Tax, audit, GST, compliance & advisory — delivered with precision." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-cream min-h-screen">
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
