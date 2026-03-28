import React from 'react';
import { ArrowRight, Award } from 'lucide-react';

interface HeroBannerProps { data?: any; }

export default function HeroBanner({ data }: HeroBannerProps) {
  if (!data) return null;

  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden bg-primary-container">
      <div className="absolute inset-0 opacity-20">
        {data.imageSrc && (
          <img className="w-full h-full object-cover" alt="Hero Background" src={data.imageSrc} />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-primary-container/80"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 py-20 lg:py-0 mt-8 md:mt-0">
        <div className="col-span-1 lg:col-span-7 text-center lg:text-left">
          {data.badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
              {data.badge}
            </span>
          )}
          
          <h1 className="text-white font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] md:leading-[0.9] mb-8"
              dangerouslySetInnerHTML={{ __html: data.heading || data.title || '' }}>
          </h1>
          
          {(data.description || data.subheading) && (
            <p className="text-on-primary-container font-body text-lg md:text-xl max-w-lg mb-12 leading-relaxed mx-auto lg:mx-0">
              {data.description || data.subheading}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
            {(data.cta || data.primaryCTA) && (
              <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-4 bg-secondary text-on-secondary rounded-xl font-bold transition-all hover:-translate-y-1 shadow-xl shadow-secondary/20 w-full sm:w-auto">
                {data.cta || data.primaryCTA}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
            
            {(data.cta2 || data.secondaryCTA) && (
              <button className="px-6 md:px-8 py-4 border border-outline-variant/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
                {data.cta2 || data.secondaryCTA}
              </button>
            )}
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-5 relative mt-16 md:mt-0">
          <div className="absolute -right-10 -top-[250px] xl:-top-[250px] w-[500px] h-[600px] bg-surface-container-lowest/10 rounded-3xl backdrop-blur-3xl rotate-6 border border-white/10 p-8 shadow-2xl">
            <div className="w-full h-full rounded-2xl overflow-hidden opacity-90 mix-blend-overlay">
              {data.imageSrc && (
                <img className="w-full h-full object-cover" alt="Hero" src={data.imageSrc} />
              )}
            </div>
          </div>
          
          {(data.badgeHeading || data.badgeSubheading) && (
            <div className="absolute top-20 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-2xl border border-outline-variant/20 animate-float backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white">
                  {data.badgeIcon ? <span className="material-symbols-outlined">{data.badgeIcon}</span> : <Award className="w-6 h-6" />}
                </div>
                <div>
                  {data.badgeHeading && <p className="text-sm font-bold text-on-surface">{data.badgeHeading}</p>}
                  {data.badgeSubheading && <p className="text-xs text-on-surface-variant font-medium">{data.badgeSubheading}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
