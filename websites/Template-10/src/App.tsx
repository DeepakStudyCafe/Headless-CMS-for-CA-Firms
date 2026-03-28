import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Team from "./pages/Team.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";
import CmsPage from "./pages/CmsPage.tsx";
import AdminGuard from "./components/AdminGuard";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPageEditor from "./pages/admin/AdminPageEditor";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <FloatingWhatsApp />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<CmsPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<CmsPage slug="career" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/query" element={<CmsPage slug="query" />} />



          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <AdminGuard>
                <AdminDashboard />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/pages/:id"
            element={
              <AdminGuard>
                <AdminPageEditor />
              </AdminGuard>
            }
          />

          {/* Fallback CMS page route for dynamic slugs like /bookkeeping */}
          <Route path="/:slug" element={<CmsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
