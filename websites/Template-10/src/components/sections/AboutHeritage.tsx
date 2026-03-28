import { Link } from "react-router-dom";
import AnimatedStatValue from "@/components/ui/AnimatedStatValue";

export default function AboutHeritage({ data }: { data?: any }) {
  if (!data?.title && !data?.description) return null;

  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            {data?.image && (
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt={data?.title || "Heritage"}
                  src={data.image}
                />
              </div>
            )}
            {data?.years && (
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 md:w-48 md:h-48 bg-tertiary-fixed rounded-xl p-6 flex flex-col justify-end shadow-xl">
                <AnimatedStatValue
                  value={data.years}
                  className="text-4xl font-headline font-extrabold text-on-tertiary-fixed"
                />
                <span className="text-sm font-label text-on-tertiary-fixed-variant font-semibold">
                  {data?.yearsLabel || "Years of Excellence"}
                </span>
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            {data?.title && (
              <h2 className="text-4xl font-headline font-bold text-primary mb-8 tracking-tight">
                {data.title}
              </h2>
            )}
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              {data?.description && (
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              )}
              {data?.linkText && (
                <div className="pt-8">
                  <Link to={data?.linkUrl || "/team"} className="inline-flex items-center text-secondary font-bold group">
                    {data.linkText}
                    <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





