import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Docs', href: '/docs' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="omniclawd"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/demo"
              className="px-4 py-2 text-sm font-medium text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Try Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 p-2 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-zinc-800"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-white bg-zinc-800/50'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    to="/demo"
                    className="block w-full px-4 py-3 text-sm font-medium text-center text-zinc-900 bg-white rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Try Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
