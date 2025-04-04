
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-4 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Token Distribution Platform
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
