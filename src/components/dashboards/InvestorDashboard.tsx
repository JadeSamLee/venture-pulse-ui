
import React from 'react';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

interface Investment {
  id: number;
  projectName: string;
  amountStaked: number;
  rewardEarned: number;
  status: 'In Progress' | 'Completed' | 'Failed';
}

const InvestorDashboard: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState('Select Project');
  const [projectsOpen, setProjectsOpen] = React.useState(false);
  const [amount, setAmount] = React.useState('');

  const myInvestments: Investment[] = [
    {
      id: 1,
      projectName: 'DeFi Lending Protocol',
      amountStaked: 2.5,
      rewardEarned: 250,
      status: 'In Progress',
    },
    {
      id: 2,
      projectName: 'DAO Governance Tool',
      amountStaked: 1.8,
      rewardEarned: 180,
      status: 'In Progress',
    },
    {
      id: 3,
      projectName: 'NFT Marketplace',
      amountStaked: 3.2,
      rewardEarned: 320,
      status: 'In Progress',
    },
  ];

  const rewardsData = [
    { name: 'DeFi Protocol', value: 250 },
    { name: 'DAO Tool', value: 180 },
    { name: 'NFT Marketplace', value: 320 },
  ];

  const totalRewards = rewardsData.reduce((sum, entry) => sum + entry.value, 0);

  const COLORS = ['#22C55E', '#4ADE80', '#86EFAC'];

  const projectOptions = [
    'DeFi Lending Protocol',
    'NFT Marketplace',
    'Cross-Chain Bridge',
    'Privacy Layer',
    'Smart Contract Audit Tool',
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1>Investor Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Investments */}
        <div className="tdp-card lg:col-span-2">
          <h2 className="mb-6">My Investments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="text-left pb-3 font-bold">Project Name</th>
                  <th className="text-right pb-3 font-bold">Amount Staked</th>
                  <th className="text-right pb-3 font-bold">Reward Earned</th>
                  <th className="text-right pb-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {myInvestments.map((investment) => (
                  <tr key={investment.id} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-3">
                      <span className="font-bold">{investment.projectName}</span>
                    </td>
                    <td className="py-3 text-right">
                      {investment.amountStaked.toFixed(1)} ETH
                    </td>
                    <td className="py-3 text-right">
                      {investment.rewardEarned} TDP
                    </td>
                    <td className="py-3 text-right flex justify-end items-center">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {investment.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Rewards */}
          <div className="tdp-card">
            <h2 className="mb-6">Rewards</h2>
            <div className="text-center mb-4">
              <p>Pending Rewards</p>
              <p className="text-xl font-bold text-primary">{totalRewards} TDP</p>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={rewardsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#22C55E"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {rewardsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Stake ETH */}
          <div className="tdp-card">
            <h2 className="mb-6">Stake ETH</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">
                  Amount (ETH)
                </label>
                <input
                  id="amount"
                  type="number"
                  className="w-full p-2 border border-gray-200 rounded-md focus:border-primary focus:outline-none"
                  placeholder="0.0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project
                </label>
                <div className="relative">
                  <button
                    className="w-full flex items-center justify-between border border-gray-200 rounded-md p-2"
                    onClick={() => setProjectsOpen(!projectsOpen)}
                  >
                    <span>{selectedProject}</span>
                    <ChevronDown size={16} />
                  </button>
                  
                  {projectsOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 mt-1 rounded-md overflow-hidden z-10 shadow-md max-h-40 overflow-y-auto">
                      {projectOptions.map((project) => (
                        <button
                          key={project}
                          className={`w-full text-left p-2 hover:bg-gray-50 ${
                            project === selectedProject ? 'text-primary' : ''
                          }`}
                          onClick={() => {
                            setSelectedProject(project);
                            setProjectsOpen(false);
                          }}
                        >
                          {project}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Stake Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
