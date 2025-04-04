
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  progress: number;
}

interface FundedProject {
  id: number;
  name: string;
  funding: number;
}

const ProjectDashboard: React.FC = () => {
  const [category, setCategory] = useState('All');
  const categories = ['All', 'DeFi', 'NFT', 'DAO', 'Gaming', 'Infrastructure'];
  const [categoryOpen, setCategoryOpen] = useState(false);

  const activeProjects: Project[] = [
    {
      id: 1,
      name: 'DeFi Lending Protocol',
      description: 'Decentralized lending platform with automated liquidation mechanisms',
      progress: 70,
    },
    {
      id: 2,
      name: 'NFT Marketplace',
      description: 'Trade digital collectibles with low fees and high-speed transactions',
      progress: 45,
    },
    {
      id: 3,
      name: 'DAO Governance Tool',
      description: 'Simplified voting and governance for decentralized organizations',
      progress: 85,
    },
  ];

  const topFunded: FundedProject[] = [
    {
      id: 1,
      name: 'Smart Contract Audit Tool',
      funding: 140.5,
    },
    {
      id: 2,
      name: 'Cross-Chain Bridge',
      funding: 120.75,
    },
    {
      id: 3,
      name: 'Privacy Layer',
      funding: 95.25,
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1>Explore Projects</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Projects */}
        <div className="tdp-card lg:col-span-2">
          <h2 className="mb-6">Active Projects</h2>
          <div className="space-y-6">
            {activeProjects.map((project) => (
              <div key={project.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold relative inline-block">
                    {project.name}
                    <span className="absolute bottom-0 left-0 h-[1px] w-full bg-primary"></span>
                  </h3>
                  <span className="text-sm text-gray-600">{project.progress}%</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <div className="tdp-progress-bar mb-3">
                  <div 
                    className="tdp-progress-fill"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <Button 
                  variant="outline" 
                  className="text-sm border-primary hover:bg-primary hover:text-white"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6 flex flex-col">
          {/* Top Funded */}
          <div className="tdp-card flex-1">
            <h2 className="mb-6">Top Funded</h2>
            <div className="space-y-4">
              {topFunded.map((project) => (
                <div key={project.id} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{project.name}</span>
                    <span className="text-primary font-bold">{project.funding} ETH</span>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Button 
                      variant="link" 
                      className="text-sm text-primary p-0 h-auto"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Categories */}
          <div className="tdp-card flex-1">
            <h2 className="mb-6">Categories</h2>
            
            <div className="relative mb-4">
              <button
                className="w-full flex items-center justify-between border border-gray-200 rounded-md p-2"
                onClick={() => setCategoryOpen(!categoryOpen)}
              >
                <span>{category}</span>
                <ChevronDown size={16} />
              </button>
              
              {categoryOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 mt-1 rounded-md overflow-hidden z-10 shadow-md">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`w-full text-left p-2 hover:bg-gray-50 ${
                        cat === category ? 'text-primary' : ''
                      }`}
                      onClick={() => {
                        setCategory(cat);
                        setCategoryOpen(false);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Button className="w-full bg-primary text-white hover:bg-primary/90">
              Explore Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
