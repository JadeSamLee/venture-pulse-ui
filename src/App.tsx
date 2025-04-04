
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import ProjectDashboard from "./components/dashboards/ProjectDashboard";
import InvestorDashboard from "./components/dashboards/InvestorDashboard";
import FounderDashboard from "./components/dashboards/FounderDashboard";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("projects");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderDashboard = () => {
    switch (activePage) {
      case "projects":
        return <ProjectDashboard />;
      case "investor":
        return <InvestorDashboard />;
      case "founder":
        return <FounderDashboard />;
      default:
        return <ProjectDashboard />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header toggleSidebar={toggleSidebar} />
            <div className="flex flex-1">
              <Sidebar 
                isOpen={sidebarOpen} 
                activePage={activePage} 
                setActivePage={setActivePage} 
              />
              <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-16'}`}>
                <div className="max-w-7xl mx-auto">
                  {renderDashboard()}
                </div>
              </main>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
