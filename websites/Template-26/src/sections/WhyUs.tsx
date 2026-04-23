import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BadgeIndianRupee, Clock, Users, Headset } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Award, title: "Expert Chartered Accountants", desc: "ICAI-certified specialists with deep domain experience." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "No hidden costs. Clear scope, fixed fees, predictable billing." },
  { icon: Clock, title: "Fast Compliance", desc: "Tight turnaround backed by automated workflows and reminders." },
  { icon: Users, title: "Trusted by Businesses", desc: "500+ companies — from startups to listed enterprises." },
  { icon: Headset, title: "Dedicated Support", desc: "A relationship manager who actually picks up the phone." },
];

export default function WhyUs() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-row", {
        x: -30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why" ref={root} className="py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">
            Built on expertise.<br />Run with care.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            We combine the rigor of a top-tier firm with the warmth and
            responsiveness of a boutique partner. Here's what sets us apart.
          </p>
        </div>

        <ul className="space-y-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="why-row flex gap-5 p-5 rounded-2xl bg-surface border border-border shadow-card lift">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
