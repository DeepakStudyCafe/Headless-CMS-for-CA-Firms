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
      { title: "ABC & Associates — Chartered Accountants" },
      { name: "description", content: "ABC & Associates: a premium chartered accountancy practice offering audit, tax and advisory services with precision and integrity." },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Precision in numbers, integrity in advice. Audit, tax and advisory for forward-thinking businesses." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="bg-background text-foreground">
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
