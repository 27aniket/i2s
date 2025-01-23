import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Industries', path: '/industries' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?auto=format&fit=crop&w=80&h=40&q=80" 
              alt="MintCode Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-white">MintCode</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="nav-link relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-gradient-primary"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="button-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="button-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;