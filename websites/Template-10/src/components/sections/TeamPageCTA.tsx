import { Link } from "react-router-dom";

export default function TeamPageCTA({ data }: { data?: any }) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
      <div className="bg-primary-container rounded-xl p-12 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 
              className="text-3xl md:text-5xl font-headline font-extrabold text-white mb-6"
              dangerouslySetInnerHTML={{ __html: data?.title || "Shape the future of <span class=\"text-secondary-fixed\">Global Finance.</span>" }}
            />
            <p className="text-on-primary-container text-lg mb-8">
              {data?.description || "We are always looking for ambitious CAs, Articled Assistants, and Financial Analysts to join our evolving team."}
            </p>
            <Link to="/contact">
              <button className="bg-secondary text-white px-6 md:px-8 py-4 rounded-xl font-headline font-bold hover:translate-y-[-2px] transition-all">
                {data?.buttonText || "Explore Career Opportunities"}
              </button>
            </Link>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4 opacity-20">
            <div className="h-32 bg-white/10 rounded-lg"></div>
            <div className="h-32 bg-white/10 rounded-lg translate-y-8"></div>
            <div className="h-32 bg-white/10 rounded-lg"></div>
            <div className="h-32 bg-white/10 rounded-lg translate-y-8"></div>
          </div>
        </div>
        {/* Abstract decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      </div>
    </section>
  );
}



