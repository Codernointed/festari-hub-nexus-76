
import React from "react";
import { ToastProviderJS } from "@/components/ui/ToastJS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IndexJS from "./pages/IndexJS";
import RealEstate from "./pages/RealEstate";
import Research from "./pages/Research";
import About from "./pages/About";
import ContactJS from "./pages/ContactJS";
import LoginJS from "./pages/LoginJS";
import RegisterJS from "./pages/RegisterJS";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Agriculture from "./pages/Agriculture";
import AgricultureProductDetails from "./pages/AgricultureProductDetails";
import Founder from "./pages/Founder";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const AppJSWithRoutes = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProviderJS>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexJS />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactJS />} />
            <Route path="/login" element={<LoginJS />} />
            <Route path="/register" element={<RegisterJS />} />
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
    </QueryClientProvider>
  </React.StrictMode>
);

export default AppJSWithRoutes;
