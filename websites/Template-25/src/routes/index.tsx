import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Trust from "@/sections/Trust";
import Contact from "@/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants" },
      { name: "description", content: "ABC & Associates is a chartered accountancy firm advising founders, family offices and growing enterprises on audit, tax and strategic finance." },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Two decades of trusted counsel in audit, tax and strategic advisory." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
