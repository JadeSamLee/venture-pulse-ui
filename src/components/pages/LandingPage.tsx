
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, BarChart3, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  
  const tabs = ["All", "Hackathons", "Summits"];
  
  const features = [
    {
      title: "Secure Transactions",
      icon: <ShieldCheck className="feature-icon" />,
      description: "All transactions are secured through blockchain technology, ensuring complete transparency and safety."
    },
    {
      title: "Real-time Analytics",
      icon: <BarChart3 className="feature-icon" />,
      description: "Monitor your investments and projects with advanced real-time analytics and reporting tools."
    },
    {
      title: "Fast Distribution",
      icon: <Zap className="feature-icon" />,
      description: "Automated token distribution with lightning-fast processing for both investors and founders."
    }
  ];
  
  const upcomingProjects = [
    {
      type: "HACKATHON",
      title: "ETHGlobal Seoul",
      date: "APR 12, 2025 → APR 14, 2025",
      image: "/lovable-uploads/f350ef95-b295-4ccc-a506-b8f1f0fec321.png"
    },
    {
      type: "CONFERENCE",
      title: "TDP Summit Dubai",
      date: "MAY 20, 2025",
      image: "/lovable-uploads/f350ef95-b295-4ccc-a506-b8f1f0fec321.png"
    },
    {
      type: "MEETUP",
      title: "TDP Paris Meetup",
      date: "JUN 5, 2025",
      image: "/lovable-uploads/f350ef95-b295-4ccc-a506-b8f1f0fec321.png"
    }
  ];

  return (
    <div className="animate-fade-in space-y-16 pb-12">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="z-10 px-4 max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 after:hidden">Token Distribution Platform</h1>
          <p className="text-lg max-w-2xl mb-8 text-muted-foreground mx-auto">
            A secure platform for investors and founders to manage token distribution and track project progress
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary-gradient text-white hover:bg-primary-gradient-hover"
              onClick={() => navigate('/investor')}
            >
              For Investors
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-foreground hover:bg-primary hover:text-white"
              onClick={() => navigate('/founder')}
            >
              For Founders
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section (ETHGlobal style) */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 after:hidden">Projects</h1>
          
          {/* Tabs */}
          <div className="flex space-x-8 border-b border-border pb-2 mb-8">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`landing-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          
          {/* Upcoming with counter */}
          <div className="flex items-center mb-8 animate-slide-in">
            <h2 className="text-3xl font-bold mr-3 after:hidden">Upcoming</h2>
            <span className="bg-foreground text-background dark:bg-background dark:text-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">
              {upcomingProjects.length}
            </span>
          </div>
          
          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="ethglobal-card animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`ethglobal-badge ${
                      project.type === "HACKATHON" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" :
                      project.type === "CONFERENCE" ? "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400" :
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                    }`}>
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 flex justify-between items-center">
                    {project.title}
                    <div className="w-12 h-12 rounded-full border border-border overflow-hidden flex items-center justify-center">
                      <img src={project.image} alt={project.title} className="w-6 h-6 object-contain" />
                    </div>
                  </h3>
                  
                  <div className="text-sm text-muted-foreground">
                    {project.date}
                  </div>
                </div>
                
                <div className="border-t border-border p-6 hover:bg-muted/30 transition-colors">
                  <Button variant="ghost" className="w-full flex items-center justify-between">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-muted/30 dark:bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center after:hidden">Why Choose TDP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 after:hidden">Ready to Get Started?</h2>
          <p className="mb-8 text-muted-foreground">
            Join our platform today and experience the future of token distribution.
          </p>
          <Button 
            className="bg-primary-gradient text-white hover:bg-primary-gradient-hover"
            onClick={() => navigate('/projects')}
          >
            Explore Projects
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
