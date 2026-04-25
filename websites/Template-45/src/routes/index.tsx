import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { Query } from "@/components/sections/Query";
import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Chartered Accountants | Tax, Audit & Advisory" },
      {
        name: "description",
        content:
          "ABC & Associates is a modern chartered accountancy firm offering tax planning, GST, audit, company registration, business consulting and compliance services across India.",
      },
      { property: "og:title", content: "ABC & Associates — Chartered Accountants" },
      { property: "og:description", content: "Empowering your financial growth with precision. Tax, audit & advisory by partner-led specialists." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Make sure all scroll-triggered animations recalculate after mount,
    // fonts and images settle in — prevents sections that already sit
    // above the start position from being stuck at opacity 0.
    const refresh = () => ScrollTrigger.refresh();
    refresh();
    const t1 = window.setTimeout(refresh, 300);
    const t2 = window.setTimeout(refresh, 1200);
    window.addEventListener("load", refresh);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Gallery />
      <Query />
      <Career />
      <Contact />
      <Footer />
    </main>
  );
}
