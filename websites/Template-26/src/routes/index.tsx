import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import Team from "@/sections/Team";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants | Tax, Audit & Advisory" },
      { name: "description", content: "Premium Chartered Accountancy firm offering tax planning, GST, audit, company registration, business consulting and compliance services." },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Smart finance. Strategic growth. Trusted CA firm for modern businesses." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
