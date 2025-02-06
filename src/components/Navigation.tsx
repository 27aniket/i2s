import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const handleAboutClick = () => {
    navigate('/about');
    setIsOpen(false);
  };

  const handleGetStartedClick = () => {
    navigate('/get-started');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex flex-col items-start cursor-pointer" onClick={() => navigate('/')}>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform">
                I2S
              </span>
              <div className="flex gap-1 mt-[1px]">
                {/* Particle trail */}
                <div className="relative" style={{ width: '14px', height: '4px' }}>
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-[1px] h-[1px] rounded-full bg-gradient-to-r from-[#ed265d] to-[#f15a2b]"
                      style={{
                        left: i < 5 || i > 10 
                          ? `${(i * 14) / 15}px` // More aligned at edges
                          : `${(i * 14) / 15 + (Math.random() * 2 - 1)}px`, // More random in center
                        top: i < 5 || i > 10
                          ? '1.5px' // Centered at edges
                          : `${1 + Math.random() * 2}px`, // More random in center
                        opacity: 0.9
                      }}
                    />
                  ))}
                </div>
                {/* Solid line (rocket) */}
                <div 
                  className="h-[4px] bg-gradient-to-r from-[#ed265d] to-[#f15a2b] rounded"
                  style={{ width: '13px', opacity: 0.9 }}
                />
              </div>
            </div>
          </div>
          
          {isMobile ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('industries')} className="nav-link">Industries</button>
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('case-studies')} className="nav-link">Case Studies</button>
              <button onClick={handleAboutClick} className="nav-link">About</button>
              <button onClick={handleGetStartedClick} className="button-primary">
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>

      {isMobile && isOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md">
          <button onClick={() => scrollToSection('industries')} className="nav-link block px-3 py-2 w-full text-left">Industries</button>
          <button onClick={() => scrollToSection('services')} className="nav-link block px-3 py-2 w-full text-left">Services</button>
          <button onClick={() => scrollToSection('case-studies')} className="nav-link block px-3 py-2 w-full text-left">Case Studies</button>
          <button onClick={handleAboutClick} className="nav-link block px-3 py-2 w-full text-left">About</button>
          <button onClick={handleGetStartedClick} className="button-primary w-full mt-4">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;