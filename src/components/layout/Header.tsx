
import React, { useState } from 'react';
import { Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const connectWallet = () => {
    setWalletConnected(true);
  };

  return (
    <header className="w-full bg-background border-b border-border py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={toggleSidebar}
            className="md:hidden mr-4"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">TDP</Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="tdp-link">Home</Link>
            <Link to="/projects" className="tdp-link">Projects</Link>
            <Link to="/about" className="tdp-link">About</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 hover:text-primary transition-colors"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-card rounded-md shadow-tdp dark:shadow-tdp-dark z-10 p-4 border border-border">
                <h3 className="font-bold mb-2">Notifications</h3>
                <div className="space-y-2">
                  <p className="text-sm">New project funding completed</p>
                  <p className="text-sm">Your rewards are available to claim</p>
                  <p className="text-sm">Phase 2 milestone reached</p>
                </div>
              </div>
            )}
          </div>
          
          {walletConnected ? (
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white font-normal"
            >
              0x7f...8A3d
            </Button>
          ) : (
            <Button
              onClick={connectWallet}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white font-normal"
            >
              Connect Wallet
            </Button>
          )}
          
          <button className="p-2 hover:bg-accent rounded-full transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
