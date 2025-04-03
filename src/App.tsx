
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Index from "./pages/Index";
import EstatesAgency from "./pages/EstatesAgency";
import Research from "./pages/ResearchAndConsultancy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Agriculture from "./pages/AgriBusiness";
import AgricultureProductDetails from "./pages/AgricultureProductDetails";
import Founder from "./pages/Founder";
import Publications from "./pages/Publications";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";
import Enterprise from "./pages/Enterprise";
import ConsultationForm from "./pages/ConsultationForm";
import ConsultationPage from "./pages/ConsultationForm";
// // Create a client
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop /> {/* Add ScrollToTop component here */}
          <Routes>
            {/* Core routes in navigation order */}
            <Route path="/" element={<Index />} />
            <Route path="/estates/*" element={<EstatesAgency />} />
            <Route path="/research/*" element={<Research />} />
            <Route path="/agriculture/*" element={<Agriculture />} /> {/* Keep path but component shows as Agribusiness */}
            <Route path="/enterprise/*" element={<Enterprise />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Supporting routes */}
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
