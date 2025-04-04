
import React from 'react';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';

interface FounderProject {
  id: number;
  name: string;
  totalRaised: number;
  progress: number;
}

interface Phase {
  id: number;
  name: string;
  goal: number;
  raised: number;
  deadline: string;
  isComplete: boolean;
}

const FounderDashboard: React.FC = () => {
  const [openPhase, setOpenPhase] = React.useState<number | null>(1);

  const myProjects: FounderProject[] = [
    {
      id: 1,
      name: 'DeFi Protocol',
      totalRaised: 120.5,
      progress: 80,
    },
    {
      id: 2,
      name: 'Metaverse Platform',
      totalRaised: 85.25,
      progress: 60,
    },
    {
      id: 3,
      name: 'Privacy Layer',
      totalRaised: 45.75,
      progress: 30,
    },
  ];

  const phases: Phase[] = [
    {
      id: 1,
      name: 'Seed Phase',
      goal: 50,
      raised: 50,
      deadline: '2025-06-15',
      isComplete: true,
    },
    {
      id: 2,
      name: 'Development Phase',
      goal: 100,
      raised: 70.5,
      deadline: '2025-08-30',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Marketing Phase',
      goal: 50,
      raised: 0,
      deadline: '2025-10-15',
      isComplete: false,
    },
  ];

  const tokenDistribution = [
    { name: 'Founder', value: 40 },
    { name: 'Platform', value: 10 },
    { name: 'Investors', value: 50 },
  ];

  const COLORS = ['#22C55E', '#4ADE80', '#86EFAC'];

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h1>Founder Dashboard</h1>
        </div>
        <Button className="bg-primary text-white hover:bg-primary/90">
          Create New Project
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Projects */}
        <div className="tdp-card lg:col-span-2">
          <h2 className="mb-6">My Projects</h2>
          <div className="space-y-6">
            {myProjects.map((project) => (
              <div key={project.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold relative inline-block">
                    {project.name}
                    <span className="absolute bottom-0 left-0 h-[1px] w-full bg-primary"></span>
                  </h3>
                  <span className="text-primary font-bold">{project.totalRaised} ETH</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="tdp-progress-bar flex-1">
                    <div 
                      className="tdp-progress-fill"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm">{project.progress}%</span>
                </div>
                <Button 
                  variant="outline" 
                  className="text-sm border-primary hover:bg-primary hover:text-white"
                >
                  Manage
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Phase Management */}
          <div className="tdp-card">
            <h2 className="mb-6">Phase Management</h2>
            <div className="space-y-4">
              {phases.map((phase) => (
                <div key={phase.id} className="border border-gray-200 rounded-md overflow-hidden">
                  <button
                    className={`w-full flex justify-between items-center p-3 text-left ${
                      phase.isComplete ? 'bg-green-50' : 'bg-white'
                    }`}
                    onClick={() => setOpenPhase(openPhase === phase.id ? null : phase.id)}
                  >
                    <span className="font-medium">{phase.name}</span>
                    <div className="flex items-center">
                      {phase.isComplete && (
                        <span className="text-xs bg-primary text-white rounded px-2 py-1 mr-2">
                          Complete
                        </span>
                      )}
                      {openPhase === phase.id ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </div>
                  </button>
                  
                  {openPhase === phase.id && (
                    <div className="p-3 border-t border-gray-200 bg-gray-50">
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Funding Goal:</span>
                          <span className="font-medium">
                            {phase.raised} / {phase.goal} ETH
                          </span>
                        </div>
                        <div className="tdp-progress-bar">
                          <div 
                            className="tdp-progress-fill"
                            style={{ width: `${(phase.raised / phase.goal) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-sm">
                          <Clock size={14} className="mr-1" />
                          <span>Deadline: {new Date(phase.deadline).toLocaleDateString()}</span>
                        </div>
                        {!phase.isComplete && (
                          <span className="text-primary font-medium text-sm">
                            {Math.round((new Date(phase.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                          </span>
                        )}
                      </div>
                      
                      <Button 
                        className={`w-full ${
                          phase.isComplete || phase.raised < phase.goal
                            ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                            : 'bg-primary text-white hover:bg-primary/90'
                        }`}
                        disabled={phase.isComplete || phase.raised < phase.goal}
                      >
                        Mark Complete
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Token Distribution */}
          <div className="tdp-card">
            <h2 className="mb-6">Token Distribution</h2>
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#22C55E"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {tokenDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {tokenDistribution.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="flex items-center">
                    <span 
                      className="inline-block w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></span>
                    {item.name}
                  </span>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderDashboard;
