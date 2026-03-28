export default function ServicesPageHero({ data }: { data?: any }) {
  const defaultTitle = "Precision-Driven <br/><span class=\"text-secondary-fixed-dim\">Financial Architecture.</span>";
  const defaultSubtitle = "Comprehensive financial consulting and compliance solutions tailored for the modern enterprise. We blend structural integrity with strategic foresight.";
  
  return (
    <section className="relative min-h-[614px] flex items-center overflow-hidden bg-primary px-8">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(135deg, #000f22 0%, #0a2540 100%)' }}>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${data?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuD-z-s1VuRqFnF7n2oyJYVgLKawNYp5VSoHCcsIF_k-wRKxP1BjeMYjw6cbCrWq0tWuecb7yctmwY_RQ1Pk9WlStqMZupWRft2T_37pKerLb_Z0FUVs77mQkUSeu_plj2OPGmsaGsDr9dlXSc5xPzLI0nnoQnQauWbAvyYpFPHppze7mDi7H-MVYw0IrkbR9ZvO8mQJ5aof3ggMfHWdJquEVKimnWenMesksmdtMUEsKPu-nxw7lGg9cudz1NQl8nWBhpqPq3CfWpM"}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10 py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest mb-6">
            {data?.badge || "Our Expertise"}
          </span>
          <h1 
            className="text-display-lg font-headline font-extrabold text-white text-5xl md:text-7xl tracking-tighter leading-tight mb-8"
            dangerouslySetInnerHTML={{ __html: data?.title || defaultTitle }}
          />
          <p className="text-on-primary-container text-lg md:text-xl font-body leading-relaxed mb-10 max-w-2xl">
            {data?.subtitle || defaultSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary text-white px-6 md:px-8 py-4 rounded-xl font-manrope font-bold hover:translate-y-[-2px] transition-all flex items-center gap-2 shadow-lg shadow-secondary/20">
              {data?.primaryButton || "Explore All Services"}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="border border-white/20 text-white px-6 md:px-8 py-4 rounded-xl font-manrope font-bold hover:bg-white/10 transition-all">
              {data?.secondaryButton || "Download Brochure"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



