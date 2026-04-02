import { Loader2 } from 'lucide-react';

export const FullPageLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50/50">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
};
