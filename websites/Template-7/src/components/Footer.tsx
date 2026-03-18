const quickLinks = ['About Us', 'Our Team', 'Careers', 'Blog', 'Contact'];
const serviceLinks = ['Tax Planning', 'GST Filing', 'Audit Services', 'Company Registration', 'Bookkeeping'];

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A' }}>
      {/* Top accent rule with glow */}
      <div className="w-full h-[1px]" style={{ background: '#C8A96E', boxShadow: '0 0 12px rgba(200,169,110,0.25)' }} />

      <div className="container mx-auto px-6 lg:px-[8%] py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://api.digitechai.in/uploads/footerlogo.png"
                alt="abc & AssociatesLogo"
                className="h-10"
              />
              <span className="flex flex-col font-bold text-[15px] leading-tight tracking-wide select-none text-[#FAF8F3]">
                abc & Associates
                <span className="font-normal text-xs tracking-normal -mt-0.5">Chartered Accountants</span>
              </span>
            </div>
            <p className="font-body font-light text-[14px] leading-relaxed mb-2" style={{ color: 'rgba(250,248,243,0.45)' }}>
              Your trusted partner in financial excellence.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-5">
              {[
                'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.483 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z',
                'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
                'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z',
                'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z',
              ].map((d, i) => (
                <a key={i} href="#" data-cursor="button"
                  className="w-[34px] h-[34px] flex items-center justify-center rounded-full transition-all duration-200 group"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8A96E'; e.currentTarget.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
                    className="transition-colors duration-200"
                    style={{ color: 'rgba(250,248,243,0.4)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C8A96E')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,248,243,0.4)')}
                  >
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-body text-[10px] font-semibold tracking-[2px] uppercase mb-4" style={{ color: '#C8A96E' }}>
              Navigate
            </h4>
            {quickLinks.map(link => (
              <a key={link} href="#" data-cursor="button"
                className="group block font-body text-[13px] py-1.5 transition-all duration-200 hover:translate-x-[5px]"
                style={{ color: 'rgba(250,248,243,0.5)' }}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1 text-[10px]" style={{ color: '#C8A96E' }}>·</span>
                <span className="group-hover:text-white/90 transition-colors">{link}</span>
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-[10px] font-semibold tracking-[2px] uppercase mb-4" style={{ color: '#C8A96E' }}>
              Services
            </h4>
            {serviceLinks.map(link => (
              <a key={link} href="#" data-cursor="button"
                className="group block font-body text-[13px] py-1.5 transition-all duration-200 hover:translate-x-[5px]"
                style={{ color: 'rgba(250,248,243,0.5)' }}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1 text-[10px]" style={{ color: '#C8A96E' }}>·</span>
                <span className="group-hover:text-white/90 transition-colors">{link}</span>
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[10px] font-semibold tracking-[2px] uppercase mb-4" style={{ color: '#C8A96E' }}>
              Get In Touch
            </h4>
            <div className="space-y-3">
              {[
                { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10m-3 0a3 3 0 106 0 3 3 0 00-6 0', text: '123 Financial District, New Delhi, 110001' },
                { icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z', text: '+91 98765 43210' },
                { icon: 'M2 4h20v16H2z M22 4l-10 8L2 4', text: 'info@digitechca.in' },
              ].map((item, i) => (
                <p key={i} className="group font-body text-[13px] flex items-start gap-2.5 transition-colors duration-200 cursor-default"
                  style={{ color: 'rgba(250,248,243,0.55)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                  >
                    <path d={item.icon} />
                  </svg>
                  <span className="group-hover:text-white/90 transition-colors">{item.text}</span>
                </p>
              ))}
              <a href="#" data-cursor="button" className="font-body text-[13px] font-medium transition-colors duration-200 hover:underline" style={{ color: '#C8A96E' }}>
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-body text-[12px]" style={{ color: 'rgba(250,248,243,0.25)' }}>
            © {new Date().getFullYear()} DigitechCA & Associates
          </p>
          <div className="flex items-center gap-3">
            <span className="font-body text-[12px]" style={{ color: 'rgba(250,248,243,0.25)' }}>·</span>
            <span className="font-body text-[12px]" style={{ color: 'rgba(250,248,243,0.25)' }}>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
