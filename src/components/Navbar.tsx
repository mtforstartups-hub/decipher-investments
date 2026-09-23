import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../assets/logo-one.svg';

const navLinks = [
  { name: 'For Investors', path: '/investors' },
  { name: 'For Startups', path: '/startups' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Determine if the current page has a dark hero background
  // For now, let's assume home is light, but we can adjust
  const isDarkTop = false;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-border py-4 shadow-sm' 
          : 'bg-transparent py-6 border-b border-transparent'
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-display font-bold tracking-tight text-navy"
        >
          <img
            src={logo}
            alt="Decipher Investments"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 text-sm font-semibold tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'transition-colors hover:text-navy',
                  location.pathname === link.path ? 'text-navy' : 'text-muted'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
             <Button variant="navy" to="/contact" size="sm">
                Join Decipher
             </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 bg-white border-t border-border overflow-hidden lg:hidden flex flex-col"
          >
            <div className="flex flex-col p-6 gap-8 h-full">
              <nav className="flex flex-col gap-6 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-3xl font-display font-medium transition-colors hover:text-navy",
                      location.pathname === link.path ? "text-navy" : "text-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 space-y-4">
                <Button variant="primary" to="/contact" className="w-full" size="lg">
                  Join as Founder
                </Button>
                <Button variant="outline" to="/contact" className="w-full" size="lg">
                  Join as Investor
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
