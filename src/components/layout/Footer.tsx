
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-6 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Token Distribution Platform
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
