import { useQuery } from '@tanstack/react-query';
import { getWebsiteData } from '../lib/api';

export const useWebsiteData = () => {
  return useQuery({
    queryKey: ['websiteData'],
    queryFn: getWebsiteData,
  });
};

export const usePageData = (slug: string) => {
  const { data: website, isLoading, error } = useWebsiteData();
  
  const page = website?.pages?.find((p: any) => p.slug === slug);
  const getSection = (type: string) => page?.sections?.find((s: any) => s.type === type);
  
  return { page, getSection, isLoading, error, website };
};