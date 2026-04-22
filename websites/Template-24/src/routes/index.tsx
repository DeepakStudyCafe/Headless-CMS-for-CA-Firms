import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { WhyUs } from "@/sections/WhyUs";
import { Team } from "@/sections/Team";
import { Career } from "@/sections/Career";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Career />
      <Contact />
      <Footer />
    </main>
  );
}
