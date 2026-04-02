import * as LucideIcons from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import heroAbout from '@/assets/hero-about.jpg';
import heroContact from '@/assets/hero-contact.jpg';
import heroServices from '@/assets/hero-services.jpg';
import heroTeam from '@/assets/hero-team.jpg';
import heroGallery from '@/assets/hero-gallery.jpg';

export const mapData = (data: any) => {
    if (!data || !data.sections) return data;
    const assets: Record<string, any> = { hero1, hero2, hero3, heroAbout, heroContact, heroServices, heroTeam, heroGallery };
    return {
      ...data,
      sections: data.sections.map((sec: any) => {
        if (!sec.textContent) return sec;
        
        let newContent = { ...sec.textContent };
        
        for (const key of ['slides', 'items', 'images']) {
            if (Array.isArray(newContent[key])) {
                newContent[key] = newContent[key].map((item: any) => {
                    let newItem = { ...item };
                    const iconName = newItem.icon as string;
                    if (typeof iconName === 'string' && (LucideIcons as any)[iconName]) {
                        newItem.icon = (LucideIcons as any)[iconName];
                    }
                    if (typeof newItem.image === 'string' && assets[newItem.image]) {
                        newItem.image = assets[newItem.image];
                    }
                    if (typeof newItem.src === 'string' && assets[newItem.src]) {
                        newItem.src = assets[newItem.src];
                    }
                    return newItem;
                });
            }
        }
        return { ...sec, textContent: newContent };
      })
    };
};
