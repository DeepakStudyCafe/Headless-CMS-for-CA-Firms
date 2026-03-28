import React from 'react';

const ContactHero = ({ data, websiteData }: any) => {
  if (!data || Object.keys(data).length === 0) return null;

  const text = data?.textContent || {};
  const heroTitle = text.heading || data?.title;
  const heroSubtitle = text.subheading || data?.description;
  const badge = text.badge || data?.badge;
  const heroImage = data?.imageUrl || data?.image?.url || data?.image;

  if (!heroTitle) return null;
  return (
    <section className="relative min-h-[560px] flex items-center justify-center overflow-hidden bg-primary px-6 md:px-8 pt-24">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url('${heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />

      <div className="relative z-10 max-w-5xl mx-auto text-center py-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-fixed text-xs font-bold tracking-widest uppercase mb-6">
          {badge}
        </span>
        <h1
          className="text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tighter leading-[1.05] mb-8"
          dangerouslySetInnerHTML={{ __html: heroTitle }}
        />
        <p className="text-lg text-white/75 max-w-3xl mx-auto leading-relaxed mb-10">
          {heroSubtitle}
        </p>

        <div className="inline-flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-widest text-white/75">
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">{websiteData?.phone || '+91 11 4567 8900'}</span>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">{websiteData?.email || 'contact@arvindgupta.ca'}</span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;



