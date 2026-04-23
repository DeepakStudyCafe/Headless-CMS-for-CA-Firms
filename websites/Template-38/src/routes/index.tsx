import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import Team from "@/sections/Team";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC & Associates — Premium Chartered Accountants" },
      { name: "description", content: "Trusted CA firm offering tax planning, GST, audit, compliance, company registration and business advisory services since 1998." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Gallery />
      <Contact />
    </>
  );
}
