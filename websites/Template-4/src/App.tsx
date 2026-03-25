import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Query from "./pages/Query";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminRoot from "./pages/admin/AdminRoot";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminPageEditor from "./pages/admin/pages/PageEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/query" element={<Query />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
                    {/* Admin Routes */}
          <Route path="/admin" element={<AdminRoot />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/pages/:pageId" element={<AdminPageEditor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

