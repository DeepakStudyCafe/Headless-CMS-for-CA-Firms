import { useState } from "react";

export default function GalleryPageGrid({ data }: { data?: any }) {
  const items = data?.items || [];
  const [activeTab, setActiveTab] = useState("All Moments");

  if (!items.length) return null;

  const categoryTabs = Array.isArray(data?.categories) && data.categories.length > 0
    ? data.categories
    : Array.from(new Set(items.map((item: any) => item.category).filter(Boolean)));
  const tabs = ["All Moments", ...categoryTabs];

  const filteredItems = activeTab === "All Moments" ? items : items.filter((i: any) => i.category === activeTab);

  return (
    <>
      {/* Gallery Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-headline font-bold text-sm transition-all ${
                activeTab === tab
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Asymmetric Bento Grid Gallery */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredItems.map((item: any, idx: number) => (
            <div key={item.id || idx} className={`${item.span || 'md:col-span-4'} group relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm ${item.height || 'h-[320px]'}`}>
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} src={item.image || item.src} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-secondary-fixed text-xs font-bold uppercase mb-2">{item.category}</span>
                <h3 className="text-white text-2xl font-headline font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}



