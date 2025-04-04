
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/pages/LandingPage";
import ProjectDashboard from "./components/dashboards/ProjectDashboard";
import InvestorDashboard from "./components/dashboards/InvestorDashboard";
import FounderDashboard from "./components/dashboards/FounderDashboard";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="tdp-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header toggleSidebar={toggleSidebar} />
              <div className="flex flex-1">
                <Sidebar isOpen={sidebarOpen} />
                <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-16'}`}>
                  <div className="max-w-7xl mx-auto">
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/projects" element={<ProjectDashboard />} />
                      <Route path="/investor" element={<InvestorDashboard />} />
                      <Route path="/founder" element={<FounderDashboard />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </div>
                </main>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
