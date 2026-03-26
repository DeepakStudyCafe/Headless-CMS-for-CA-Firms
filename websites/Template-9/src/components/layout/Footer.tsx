import { motion } from "framer-motion";
import { FOOTER_LINKS } from "@/lib/constants";
import { Linkedin, Twitter, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({ websiteData }: { websiteData?: any }) => {
  const footerContent = websiteData?.themeConfig?.footerContent || {};
  const serviceLinks = websiteData?.themeConfig?.services || FOOTER_LINKS.services;
  const socialLinks = [
    { Icon: Linkedin, href: footerContent.linkedin || "#", label: "LinkedIn" },
    { Icon: Twitter, href: footerContent.twitter || "#", label: "Twitter" },
    { Icon: Instagram, href: footerContent.instagram || "#", label: "Instagram" },
    { Icon: Facebook, href: footerContent.facebook || "#", label: "Facebook" },
  ];
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/career" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#0A1018] pt-20 pb-8">
      {/* Thin gold ruled line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" />

      <div className="container mx-auto px-6">
        {/* Masthead / Colophon header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-label text-[10px] text-surface/25 tracking-[4px]">
            EST. 2005 · CHARTERED ACCOUNTANTS
          </span>
        </motion.div>

        {/* Ruled line */}
        <div className="h-px bg-surface/[0.06] mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Logo + social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src={websiteData?.logo || "https://api.digitechai.in/uploads/footerlogo.png"}
                alt="CA Firm Footer Logo"
                className="h-9"
              />
              <span className="flex flex-col font-bold text-surface text-base leading-tight tracking-wide select-none">
                {websiteData?.name || "abc & Associates"}
                <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
              </span>
            </div>
            <p className="font-body text-sm text-surface/40 mb-6 leading-relaxed">
              {footerContent.description || "Trusted chartered accountancy services, helping businesses navigate financial complexities since 2005."}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 border border-surface/10 flex items-center justify-center text-surface/40 hover:text-ca-accent-2 hover:border-ca-accent-2/50 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-label text-[10px] text-surface/40 tracking-[2px] mb-6">Quick Links</h4>
            <div className="h-px bg-surface/[0.06] mb-4" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="group font-body text-sm text-surface/40 hover:text-ca-accent-2 transition-colors duration-300 flex items-center gap-2">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ca-accent-2">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-label text-[10px] text-surface/40 tracking-[2px] mb-6">Our Services</h4>
            <div className="h-px bg-surface/[0.06] mb-4" />
            <ul className="space-y-3">
              {serviceLinks.map((link: any, i: number) => (
                <li key={`${link?.label || link?.title || "service"}-${link?.href || "nohref"}-${i}`}>
                  <Link to={link?.href || "/services"} className="group font-body text-sm text-surface/40 hover:text-ca-accent-2 transition-colors duration-300 flex items-center gap-2">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ca-accent-2">→</span>
                    {link.label || link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="font-label text-[10px] text-surface/40 tracking-[2px] mb-6">Get In Touch</h4>
            <div className="h-px bg-surface/[0.06] mb-4" />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-ca-accent-2/60 mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-surface/40">
                  {websiteData?.address || "123 Financial District,"}<br />{websiteData?.address ? "" : "Mumbai, Maharashtra 400001"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-ca-accent-2/60 flex-shrink-0" />
                <p className="font-body text-sm text-surface/40">{websiteData?.phone || "+91 XXXXX XXXXX"}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-ca-accent-2/60 flex-shrink-0" />
                <p className="font-body text-sm text-surface/40">{websiteData?.email || "info@cafirm.com"}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar — masthead style */}
        <div className="border-t border-surface/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-label text-[9px] text-surface/20 tracking-[2px]">
            {footerContent.copyright || "EST. 2005 · ALL RIGHTS RESERVED"}
          </p>
          <p className="font-body text-xs text-surface/20">
            Crafted with ♥ for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
