
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, BarChart3, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

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

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Token Distribution Platform</h1>
          <p className="text-lg max-w-2xl mb-8 text-muted-foreground">
            A secure platform for investors and founders to manage token distribution and track project progress
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary text-white hover:bg-primary/90"
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

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Why Choose TDP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
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
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mb-8 text-muted-foreground">
            Join our platform today and experience the future of token distribution.
          </p>
          <Button 
            className="bg-primary text-white hover:bg-primary/90"
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
