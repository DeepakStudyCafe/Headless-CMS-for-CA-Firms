import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, centered = true, light = false }: SectionHeadingProps) => (
  <ScrollReveal className={centered ? "text-center mb-16" : "mb-12"}>
    <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">{label}</span>
    <div className={`section-divider mt-3 mb-4 ${centered ? "mx-auto" : ""}`} />
    <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 max-w-2xl text-base leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </ScrollReveal>
);

export default SectionHeading;
