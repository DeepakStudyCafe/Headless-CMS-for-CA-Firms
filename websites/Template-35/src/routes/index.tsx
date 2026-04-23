import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premier Chartered Accountants — Tax, Audit & Advisory" },
      {
        name: "description",
        content:
          "Premium Chartered Accountant firm offering tax planning, GST, audit, company registration, business consulting and compliance services.",
      },
      { property: "og:title", content: "Premier Chartered Accountants" },
      {
        property: "og:description",
        content: "Tax, audit, GST and advisory services delivered with precision and integrity.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useGsapReveal();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
