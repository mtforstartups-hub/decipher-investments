import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Solutions", path: "/solutions" },
  { name: "Investors", path: "/investors" },
  { name: "Founders", path: "/founders" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Global", path: "/global" },
  { name: "Insights", path: "/insights" },
  { name: "About", path: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparentHeader = isHome && !scrolled && !isOpen;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b",
        transparentHeader
          ? "bg-transparent border-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-light-grey",
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center group">
            <img
              src="/Decipher Logo.webp"
              alt="Decipher Investments Logo"
              className="h-20 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-300 font-medium",
                  location.pathname.startsWith(link.path)
                    ? "text-decipher-yellow"
                    : transparentHeader
                      ? "text-off-white hover:text-white"
                      : "text-charcoal-800 hover:text-charcoal-900",
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pl-4">
              <Link
                to="/contact"
                className={cn(
                  "px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-2 group",
                  transparentHeader
                    ? "bg-white text-charcoal-900 hover:bg-off-white"
                    : "bg-charcoal-900 text-white hover:bg-charcoal-800",
                )}
              >
                Book Meeting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-full transition-colors",
                transparentHeader
                  ? "text-white hover:bg-white/10"
                  : "text-charcoal-900 hover:bg-light-grey",
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-light-grey shadow-2xl absolute w-full left-0 top-[96px] h-[calc(100vh-96px)] overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "block text-2xl font-display tracking-tight transition-colors",
                      location.pathname.startsWith(link.path)
                        ? "text-decipher-yellow"
                        : "text-charcoal-900 hover:text-charcoal-700",
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-light-grey"
              >
                <Link
                  to="/contact"
                  className="flex justify-between items-center w-full px-6 py-4 bg-charcoal-900 text-white rounded-full font-medium text-lg"
                >
                  Book Meeting
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
