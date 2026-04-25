import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ContactBlock } from "@/components/sections/ContactBlock";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABC & Associates" },
      { name: "description", content: "Talk to a partner at ABC & Associates. Bengaluru studio, replies within one working day." },
      { property: "og:title", content: "Contact — ABC & Associates" },
      { property: "og:description", content: "A 30-minute first call, on us." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="A short call,"
        italic="a long partnership."
        intro="Tell us a little about your business — we'll bring the questions."
      />
      <ContactBlock />
    </>
  );
}
