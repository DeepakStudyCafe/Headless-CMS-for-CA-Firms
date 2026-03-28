import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { getWebsiteData } from "@/lib/api";

function toWhatsAppDigits(phone: string) {
  return phone.replace(/[^0-9]/g, "");
}

export default function FloatingWhatsApp() {
  const { pathname } = useLocation();
  const [phone, setPhone] = useState("+91 98765 43210");

  useEffect(() => {
    getWebsiteData()
      .then((website) => {
        if (website?.phone) {
          setPhone(website.phone);
        }
      })
      .catch(() => {
        // Keep fallback phone if API is unavailable.
      });
  }, []);

  const isHidden = pathname.startsWith("/admin");

  const href = useMemo(() => {
    const digits = toWhatsAppDigits(phone);
    if (!digits) return "https://wa.me/919876543210";

    const message = encodeURIComponent("Hello, I want to discuss my accounting and tax requirements.");
    return `https://wa.me/${digits}?text=${message}`;
  }, [phone]);

  if (isHidden) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[120] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/25 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform duration-200 group-hover:scale-110">
        <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
      </span>
    </a>
  );
}
