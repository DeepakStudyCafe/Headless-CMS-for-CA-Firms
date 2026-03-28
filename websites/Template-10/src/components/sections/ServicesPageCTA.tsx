import { Link } from "react-router-dom";

export default function ServicesPageCTA({ data }: { data?: any }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-primary">
      <div className="max-w-7xl mx-auto rounded-3xl bg-surface-container-lowest/5 backdrop-blur-sm p-12 md:p-20 border border-white/5 relative overflow-hidden text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-white font-headline font-bold text-4xl md:text-5xl tracking-tight mb-8">
            {data?.title || "Ready to Architect Your Growth?"}
          </h2>
          <p className="text-on-primary-container text-lg font-body leading-relaxed mb-12">
            {data?.description || "Schedule a private consultation with our senior associates and discover how we can streamline your financial operations."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-xl font-bold hover:translate-y-[-2px] transition-all shadow-xl shadow-secondary/30">
                {data?.primaryButton || "Book Free Consultation"}
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-white/10 text-white px-10 py-5 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10">
                {data?.secondaryButton || "Contact Support"}
              </button>
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/10 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
}



