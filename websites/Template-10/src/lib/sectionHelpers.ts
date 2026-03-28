import { getImageUrl } from "@/lib/api";

export function findSection(pageData: any, ...types: string[]) {
  const sections = Array.isArray(pageData?.sections) ? pageData.sections : [];
  return sections.find((section: any) => types.includes(section?.type));
}

export function sectionContent(section: any) {
  if (!section) return {};

  const text = section?.textContent || {};
  const rawImage = section?.imageUrl || text?.image || text?.imageSrc || "";
  const image = rawImage ? getImageUrl(rawImage) : undefined;

  return {
    ...text,
    image,
    imageSrc: image,
    title: text.title || text.heading,
    heading: text.heading || text.title,
    description: text.description || text.subheading,
    subheading: text.subheading || text.description,
  };
}

export function normalizeStats(stats: any[] | undefined) {
  if (!Array.isArray(stats)) return [];

  return stats.map((stat: any) => {
    const value = stat?.value ?? stat?.number ?? stat?.end ?? "";
    const suffix = stat?.suffix || "";
    return {
      ...stat,
      value: `${value}${suffix}`,
    };
  });
}
