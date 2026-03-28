import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface gap-6">
      <div className="relative">
        <div className="absolute inset-0 border-4 border-secondary/20 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <span className="font-headline font-bold text-sm tracking-[0.3em] uppercase text-primary animate-pulse">
        Loading
      </span>
    </div>
  );
}
