import fs from 'fs/promises';
import path from 'path';

export async function getSeoMetadata(pageKey: string) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'seoData.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    if (data[pageKey]) {
      return {
        title: data[pageKey].titleTag,
        description: data[pageKey].metaDescription,
      };
    }
  } catch (err) {
    console.error(`Failed to load SEO metadata for ${pageKey}`, err);
  }

  // Fallbacks if file or key not found
  return {
    title: 'StudyCafe Headless CMS',
    description: 'Empowering CA Firms with Modern Websites.'
  };
}