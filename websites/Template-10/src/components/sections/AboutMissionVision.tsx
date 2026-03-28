export default function AboutMissionVision({ data }: { data?: any }) {
  const defaultVision = "To be the most trusted architectural advisor in the financial landscape, setting the gold standard for integrity, expertise, and client-centric value creation across the global market.";
  const defaultMission = "To empower our clients through uncompromising precision, proactive advisory, and personalized financial strategies that ensure long-term stability and growth.";
  const defaultImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuA1_XRto7_dl_5mhUcfZoEZtVLQXvxxDfQYpdm9PUEnI55I3PvKJu25VR13Dgi-aKSQSYsGPUhanCOo9CmEBFIRW6Wxf4YXhlSQNv0orb3zCkHs9GOYM-LBVEZUM3A-mytXJ8bSQWmkNvBCj7cjcY3E1cRNXRkq8O2kuqOFXBfroi1WoXFvm8wGiC_HGqip-tuKbidZetS8i82XkGZeSRldYeyw8dgKmT7VUMGCZHDohhhqJ5nfSmG15ulI2PfSuW0svVtL5PrWA_M";

  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">visibility</span>
              <h3 className="text-3xl font-headline font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">{data?.vision || defaultVision}</p>
            </div>
            <div className="mt-12 h-40 overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover opacity-80"
                alt="Vision"
                src={data?.image || defaultImage}
              />
            </div>
          </div>
          <div className="bg-primary text-on-primary p-12 rounded-xl flex flex-col justify-center">
            <span className="material-symbols-outlined text-4xl text-secondary-fixed-dim mb-6">rocket_launch</span>
            <h3 className="text-3xl font-headline font-bold mb-6">Our Mission</h3>
            <p className="text-primary-fixed-dim text-lg leading-relaxed">{data?.mission || defaultMission}</p>
          </div>
        </div>
      </div>
    </section>
  );
}



