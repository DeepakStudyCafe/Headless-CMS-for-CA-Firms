import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Highlights } from "@/sections/Highlights";
import { Services } from "@/sections/Services";
import { About } from "@/sections/About";
import { WhyUs } from "@/sections/WhyUs";
import { Process } from "@/sections/Process";
import { Team } from "@/sections/Team";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
