import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      {
        name: "description",
        content:
          "Visit, call or write to ABC & Associates. Our Mumbai office is open Monday to Friday with Saturday appointments available.",
      },
      { property: "og:title", content: "Contact ABC & Associates" },
      {
        property: "og:description",
        content: "Begin with a conversation — no obligation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Begin with a <em className="italic text-ocean">conversation.</em></>}
        intro="Our partners take a small number of new engagements each quarter. The best way to start is a short call — we'll listen first, then propose only if we think we can genuinely help."
      />
      <ContactSection />
    </>
  );
}
