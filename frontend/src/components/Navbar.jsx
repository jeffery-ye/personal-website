import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Telescope, List } from 'lucide-react';
import { useStore, useStoreActions } from '../store/useStore';

const Navbar = () => {
  const viewMode = useStore((state) => state.viewMode);
  const isMobile = useStore((state) => state.isMobile);
  const { toggleViewMode } = useStoreActions();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Publications', path: '/publications' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
  ];

  const isActive = (path) => location.pathname === path;

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="bg-space-950/80 backdrop-blur-md border-b border-space-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link
            to="/"
            className="flex items-center space-x-2 text-nebula-purple hover:text-nebula-cyan transition-colors"
            aria-label="Jeffery Ye Home"
          >
            <Telescope size={28} />
            <span className="font-bold text-xl tracking-tight text-star-100">Jeffery Ye</span>
          </Link>

          {/* View Mode Toggle - Absolute Center */}
          {!isMobile && (
            <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2">
              <button
                onClick={toggleViewMode}
                aria-label={`Switch to ${viewMode === 'galaxy' ? 'Normal View' : 'Constellation View'}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-nebula-purple/50 text-star-100 font-medium hover:bg-nebula-purple/10 hover:border-nebula-purple hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula-cyan"
              >
                {viewMode === 'galaxy' ? <List size={18} /> : <Telescope size={18} />}
                <span className="text-sm">
                  {viewMode === 'galaxy' ? 'Switch to Normal View' : 'Switch to Constellation View'}
                </span>
              </button>
            </div>
          )}

          {/* Desktop Menu - Right Side */}
          <div className="hidden xl:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'bg-space-800 text-nebula-purple'
                  : 'text-star-400 hover:text-nebula-cyan hover:bg-space-900'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-star-400 hover:text-white hover:bg-space-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula-cyan"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div id="mobile-menu" className="xl:hidden bg-space-950 border-b border-space-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
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