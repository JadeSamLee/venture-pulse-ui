
import React from 'react';
import { Home, BarChart3, Users, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  activePage: string;
  setActivePage: (page: string) => void;
}

const sidebarLinks = [
  { name: 'Dashboard', icon: Home, id: 'dashboard' },
  { name: 'Projects', icon: BarChart3, id: 'projects' },
  { name: 'Investor', icon: Users, id: 'investor' },
  { name: 'Founder', icon: User, id: 'founder' }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activePage, setActivePage }) => {
  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 bg-white border-r border-gray-100 transition-all duration-300 z-10",
        isOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full md:w-16 md:translate-x-0"
      )}
    >
      <div className="h-16 flex items-center justify-center border-b border-gray-100">
        <h2 className={cn("font-bold", !isOpen && "md:hidden")}>TDP</h2>
        {!isOpen && <span className="hidden md:block font-bold">TDP</span>}
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          {sidebarLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => setActivePage(link.id)}
                className={cn(
                  "w-full flex items-center gap-3 p-2 rounded-md transition-colors",
                  activePage === link.id 
                    ? "text-primary bg-green-50" 
                    : "hover:bg-gray-50"
                )}
              >
                <link.icon size={20} />
                <span className={cn("transition-opacity", 
                  !isOpen ? "opacity-0 md:hidden" : "opacity-100"
                )}>
                  {link.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
