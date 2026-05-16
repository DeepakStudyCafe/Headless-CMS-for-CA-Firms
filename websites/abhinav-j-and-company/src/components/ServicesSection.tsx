import { useEffect, useState } from "react";
import ServiceIcon from "./ServiceIcons";
import MagneticCard from "./MagneticCard";
import SectionHeading from "./SectionHeading";
import SectionDivider from "./SectionDivider";
import { UpdatesTicker } from "./UpdatesTicker";
import { getPosts, WPPost } from "@/lib/api";

export default function ServicesSection({ data }: { data?: any }) {
  const servicesData = data?.textContent?.items || [];
  const heading = data?.textContent?.heading;
  const subheading = data?.textContent?.subheading;

  const [posts, setPosts] = useState<WPPost[]>([]);

  useEffect(() => {
    getPosts(20).then((p) => setPosts(p)).catch(() => setPosts([]));
  }, []);

  if (!servicesData || servicesData.length === 0) return null;

  return (
    <>
      <SectionDivider to="paper" />
      <section id="services" className="bg-paper py-20 md:py-28 relative noise-texture">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading label={subheading} title={heading} />

          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service: any, i: number) => (
                <MagneticCard
                key={service.title}
                index={i}
                className="bg-white border border-gold/15 p-8 group hover:border-gold hover:shadow-[0_0_0_1px_#D4AF37,0_20px_60px_rgba(212,175,55,0.15),0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-500"
              >
                {/* Radial glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

                <div className="relative z-10">
                  <div className="mb-6 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3 group-hover:-translate-y-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-warm-gray text-sm leading-relaxed mb-6 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="font-sans text-gold text-sm font-medium hover:tracking-wider transition-all duration-300 inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                  >
                    Explore Service <span className="text-lg">→</span>        
                  </a>
                </div>
              </MagneticCard>
            ))}
          </div>

          {posts && posts.length > 0 && (
            <aside className="w-full lg:w-80 flex-shrink-0 self-stretch mt-8 lg:mt-0 lg:ml-8" aria-label="Latest updates">
              <UpdatesTicker posts={posts} />
            </aside>
          )}

        </div>
      </div>
    </section>
    </>
  );
}
