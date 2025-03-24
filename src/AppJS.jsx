
import React from "react";
import { ToastProviderJS } from "@/components/ui/ToastJS";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RealEstate from "./pages/RealEstate";
import Research from "./pages/Research";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginJS from "./pages/LoginJS";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Agriculture from "./pages/Agriculture";
import AgricultureProductDetails from "./pages/AgricultureProductDetails";
import Founder from "./pages/Founder";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const AppJS = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ToastProviderJS>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/real-estate" element={<RealEstate />} />
              <Route path="/research" element={<Research />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<LoginJS />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/agriculture" element={<Agriculture />} />
              <Route path="/agriculture/product/:id" element={<AgricultureProductDetails />} />
              <Route path="/founder" element={<Founder />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ToastProviderJS>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default AppJS;
