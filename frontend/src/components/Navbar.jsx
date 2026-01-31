import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Telescope, List } from 'lucide-react';
import { useStore } from '../store/useStore';

const Navbar = () => {
  const { viewMode, isMobile, actions: { toggleViewMode } } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-space-950/80 backdrop-blur-md border-b border-space-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link
            to="/"
            className="flex items-center space-x-2 text-nebula-purple hover:text-nebula-cyan transition-colors"
            onClick={(e) => {
              if (viewMode === 'galaxy') {
                e.preventDefault();
                const { setOrbitSystem, setActiveSection } = useStore.getState().actions;
                setOrbitSystem('home');
                setActiveSection('hero');
              }
            }}
          >
            <Telescope size={28} />
            <span className="font-bold text-xl tracking-tight text-star-100">Jeffery Ye</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path)
                    ? 'bg-space-800 text-nebula-purple'
                    : 'text-star-400 hover:text-nebula-cyan hover:bg-space-900'
                    }`}
                  onClick={(e) => {
                    if (viewMode === 'galaxy') {
                      e.preventDefault();
                      const { setOrbitSystem, setActiveSection, setActiveProject } = useStore.getState().actions;

                      // Map paths to systems/nodes
                      switch (link.path) {
                        case '/':
                          setOrbitSystem('home');
                          setActiveSection('hero'); // Or clear active section
                          break;
                        case '/about':
                          setOrbitSystem('home');
                          setActiveSection('about');
                          break;
                        case '/projects':
                          setOrbitSystem('projects');
                          break;
                        case '/resume':
                          setOrbitSystem('home');
                          setActiveSection('resume');
                          break;
                        default:
                          setOrbitSystem('home');
                      }
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* View Mode Toggle - Desktop */}
          {!isMobile && (
            <button
              onClick={toggleViewMode}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border-2 border-nebula-purple/50 text-star-100 font-medium hover:bg-nebula-purple/10 hover:border-nebula-purple hover:text-white transition-all duration-300"
            >
              {viewMode === 'galaxy' ? <List size={18} /> : <Telescope size={18} />}
              <span className="text-sm">
                {viewMode === 'galaxy' ? 'Switch to Normal View' : 'Switch to Constellation View'}
              </span>
            </button>
          )}

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-star-400 hover:text-white hover:bg-space-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-space-950 border-b border-space-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  setIsOpen(false);
                  if (viewMode === 'galaxy') {
                    e.preventDefault();
                    const { setOrbitSystem, setActiveSection } = useStore.getState().actions;
                    switch (link.path) {
                      case '/': setOrbitSystem('home'); setActiveSection('hero'); break;
                      case '/about': setOrbitSystem('home'); setActiveSection('about'); break;
                      case '/projects': setOrbitSystem('projects'); break;
                      case '/resume': setOrbitSystem('home'); setActiveSection('resume'); break;
                      default: setOrbitSystem('home');
                    }
                  }
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(link.path)
                  ? 'bg-space-800 text-nebula-cyan'
                  : 'text-star-400 hover:text-nebula-purple hover:bg-space-900'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;