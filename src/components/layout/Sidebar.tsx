
import React from 'react';
import { Home, BarChart3, Users, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

const sidebarLinks = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'Projects', icon: BarChart3, path: '/projects' },
  { name: 'Investor', icon: Users, path: '/investor' },
  { name: 'Founder', icon: User, path: '/founder' }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 bg-background border-r border-border transition-all duration-300 z-10",
        isOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full md:w-16 md:translate-x-0"
      )}
    >
      <div className="h-16 flex items-center justify-center border-b border-border">
        <h2 className={cn("font-bold", !isOpen && "md:hidden")}>TDP</h2>
        {!isOpen && <span className="hidden md:block font-bold">TDP</span>}
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          {sidebarLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={cn(
                  "w-full flex items-center gap-3 p-2 rounded-md transition-colors",
                  location.pathname === link.path 
                    ? "text-primary bg-primary/10" 
                    : "hover:bg-accent"
                )}
              >
                <link.icon size={20} />
                <span className={cn("transition-opacity", 
                  !isOpen ? "opacity-0 md:hidden" : "opacity-100"
                )}>
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
