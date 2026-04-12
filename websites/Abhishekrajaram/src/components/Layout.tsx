import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col relative">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <a
      href="https://wa.me/919810638155"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center border-2 border-white/20"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.625 2.952-6.575 6.577-6.575a6.56 6.56 0 0 1 4.653 1.932 6.56 6.56 0 0 1 1.926 4.66c-.004 3.626-2.955 6.575-6.579 6.575z"/>
        <path d="M11.87 9.556c-.212-.107-1.258-.62-1.45-.693-.193-.073-.334-.107-.476.107-.142.213-.548.693-.673.834-.125.14-.251.16-.463.053-.213-.107-.899-.331-1.713-.984-.632-.51-1.058-1.141-1.183-1.354-.125-.213-.013-.328.093-.434.095-.095.213-.25.319-.375.107-.126.143-.213.213-.355.071-.142.036-.266-.017-.375-.054-.107-.477-1.15-.653-1.573-.171-.413-.346-.357-.477-.363-.125-.005-.266-.008-.409-.008a.79.79 0 0 0-.568.266c-.195.213-.746.732-.746 1.78s.763 2.062.87 2.21c.107.142 1.507 2.298 3.649 3.22.509.219.907.35 1.218.448.512.164.98.14 1.348.085.414-.061 1.258-.514 1.435-1.01.176-.497.176-.92.124-1.01-.053-.09-.192-.143-.404-.25z"/>
      </svg>
    </a>
  </div>
);

export default Layout;
