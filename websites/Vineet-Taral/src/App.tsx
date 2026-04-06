import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ContactPage from "./pages/ContactPage";
import QueryPage from "./pages/QueryPage";
import CareerPage from "./pages/CareerPage";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import AdminRoot from "./pages/admin/AdminRoot";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import PageEditor from "./pages/admin/pages/PageEditor";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/query" element={<QueryPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/post/:slug" element={<PostDetail />} />
          <Route path="/admin" element={<AdminRoot />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/pages/:pageId" element={<PageEditor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isPost = location.pathname.startsWith('/post/');

  const showLayout = !isAdmin && !isPost;

  return (
    <>
      <ScrollToTop />
      {showLayout && <Header />}
      <main className="min-h-screen">
        <AnimatedRoutes />
      </main>
      {showLayout && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
