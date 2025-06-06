
import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and App Name - Smaller */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">Dhunat.App</h1>
              <p className="text-xs text-gray-500">স্থানীয় সেবা</p>
            </div>
          </Link>

          {/* Desktop Navigation - Minimalistic */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors">হোম</Link>
            <Link to="/notifications" className="text-sm text-gray-600 hover:text-primary transition-colors">নোটিশ</Link>
            <Link to="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">সম্পর্কে</Link>
            <Link to="/my-app" className="text-sm text-gray-600 hover:text-primary transition-colors">যোগাযোগ</Link>
          </nav>

          {/* Mobile Menu Button - Smaller */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-600 hover:bg-gray-100 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Navigation - Minimalistic */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t border-gray-200 pt-3">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-sm text-gray-600 hover:text-primary transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                হোম
              </Link>
              <Link 
                to="/notifications" 
                className="text-sm text-gray-600 hover:text-primary transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                নোটিশ
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-gray-600 hover:text-primary transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                সম্পর্কে
              </Link>
              <Link 
                to="/my-app" 
                className="text-sm text-gray-600 hover:text-primary transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                যোগাযোগ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
