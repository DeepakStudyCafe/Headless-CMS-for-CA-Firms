import * as LucideIcons from 'lucide-react';

export const mapData = (data: any) => {
    if (!data || !data.sections) return data;
    
    // Mapping default template identifiers dynamically to the backend uploads directory
    const dynamicAssets: Record<string, string> = { 
        hero1: '/uploads/hero-1.jpg', 
        hero2: '/uploads/hero-2.jpg', 
        hero3: '/uploads/hero-3.jpg', 
        heroAbout: '/uploads/about-hero.jpg', 
        heroContact: '/uploads/contact-hero.jpg', 
        heroServices: '/uploads/services-hero.jpg', 
        heroTeam: '/uploads/team-hero.jpg', 
        heroGallery: '/uploads/gallery-hero.jpg' 
    };

    const formatImageUrl = (url: string) => {
        if (!url) return url;
        // Don't format data URLs, blobs, or external links
        if (url.startsWith('http') || url.startsWith('data:') || url.startsWith('blob:') || url.startsWith('/assets/')) return url;
        
        let path = url;
        // Map database string to upload path if it matches our standard map
        if (dynamicAssets[url]) {
            path = dynamicAssets[url];
        } else if (!path.startsWith('/uploads/')) {
            // Guarantee formatting starts with /uploads/ if it wasn't a seeded default
            path = path.replace(/^\/+/, "").replace(/^uploads\//, "");
            path = '/uploads/' + path;
        }

        const baseUrl = (import.meta.env.VITE_API_URL || '').replace(/\/api$/, '');
        return `${baseUrl}${path}`;
    };

    return {
      ...data,
      sections: data.sections.map((sec: any) => {
        let newSec = { ...sec };
        if (newSec.imageUrl) {
            newSec.imageUrl = formatImageUrl(newSec.imageUrl);
        }
        if (!newSec.textContent) return newSec;

        let newContent = { ...sec.textContent };

        if (newContent.image) {
            newContent.image = formatImageUrl(newContent.image);
        }

        for (const key of ['slides', 'items', 'images']) {
            if (Array.isArray(newContent[key])) {
                newContent[key] = newContent[key].map((item: any) => {
                    let newItem = { ...item };
                    const iconName = newItem.icon as string;
                    if (typeof iconName === 'string' && (LucideIcons as any)[iconName]) {      
                        newItem.icon = (LucideIcons as any)[iconName];
                    }
                    if (typeof newItem.image === 'string') {
                        newItem.image = formatImageUrl(newItem.image);
                    }
                    if (typeof newItem.src === 'string') {
                        newItem.src = formatImageUrl(newItem.src);
                    }
                    return newItem;
                });
            }
        }
        return { ...newSec, textContent: newContent };
      })
    };
};
