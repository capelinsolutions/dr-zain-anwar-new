import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesOverview from "./pages/ServicesOverview";
import CataractSurgery from "./pages/CataractSurgery";
import GlaucomaManagement from "./pages/GlaucomaManagement";
import RetinaTreatment from "./pages/RetinaTreatment";
import CornealDisorders from "./pages/CornealDisorders";
import DryEyeTreatment from "./pages/DryEyeTreatment";
import RoutineEyeExams from "./pages/RoutineEyeExams";
import DoctorProfile from "./pages/DoctorProfile";
import Privacy from "./pages/Privacy";
import HIPAA from "./pages/HIPAA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/cataract-surgery" element={<CataractSurgery />} />
          <Route path="/services/glaucoma-management" element={<GlaucomaManagement />} />
          <Route path="/services/retina-treatment" element={<RetinaTreatment />} />
          <Route path="/services/corneal-disorders" element={<CornealDisorders />} />
          <Route path="/services/dry-eye-treatment" element={<DryEyeTreatment />} />
          <Route path="/services/routine-eye-exams" element={<RoutineEyeExams />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/hipaa" element={<HIPAA />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
