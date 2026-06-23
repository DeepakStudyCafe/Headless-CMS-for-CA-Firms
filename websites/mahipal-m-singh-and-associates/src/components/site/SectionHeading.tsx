import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-subtle">{description}</p>}
    </Reveal>
  );
}
