import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

import About from "./pages/About.tsx";
import Team from "./pages/Team.tsx";
import Gallery from "./pages/Gallery.tsx";
import Services from "./pages/Services.tsx";
import Query from "./pages/Query.tsx";
import Career from "./pages/Career.tsx";
import Contact from "./pages/Contact.tsx";

import ServiceDetail from "./pages/services/ServiceDetail.tsx";

// Admin
import AdminGuard from "./components/AdminGuard.tsx";
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminPageEditor from "./pages/admin/AdminPageEditor.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public website routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/query" element={<Query />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Admin routes — all wrapped in AdminGuard for status/lock checks */}
          <Route
            path="/admin"
            element={
              <AdminGuard>
                <Navigate to="/admin/login" replace />
              </AdminGuard>
            }
          />
          <Route
            path="/admin/login"
            element={
              <AdminGuard>
                <AdminLogin />
              </AdminGuard>
            }
          />
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

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

