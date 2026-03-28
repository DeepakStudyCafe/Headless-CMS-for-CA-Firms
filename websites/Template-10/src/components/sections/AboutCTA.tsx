import { Link } from "react-router-dom";

export default function AboutCTA({ data }: { data?: any }) {
  const defaultTitle = "Ready to build your financial future?";
  const defaultSubtitle = "Join a prestigious roster of clients who trust Arvind Gupta & Associates for their most critical financial advisory and compliance needs.";

  return (
    <section className="py-16 md:py-24 bg-primary text-white text-center">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8 tracking-tight">
          {data?.title || defaultTitle}
        </h2>
        <p className="text-xl text-primary-fixed-dim mb-12 leading-relaxed">
          {data?.subtitle || defaultSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <button className="px-10 py-4 bg-secondary text-white rounded-xl font-bold hover:translate-y-[-4px] transition-all">
              {data?.primaryButton || "Schedule a Consultation"}
            </button>
          </Link>
          <Link to="/services">
            <button className="px-10 py-4 border border-white/20 rounded-xl font-bold hover:bg-white/10 transition-all">
              {data?.secondaryButton || "View Our Services"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}



