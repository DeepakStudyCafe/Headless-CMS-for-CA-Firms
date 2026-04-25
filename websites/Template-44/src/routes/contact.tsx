import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      { name: "description", content: "Reach the partners at ABC & Associates. New Delhi office, telephone, and direct email." },
      { property: "og:title", content: "Contact ABC & Associates" },
      { property: "og:description", content: "Begin a conversation — we will reply, by name, within one working day." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Begin a conversation." subtitle="We reply, by name, within one working day." />
      <ContactSection />
    </SiteLayout>
  ),
});
