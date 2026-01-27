import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Animation variants
const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const linkVariants = {
  initial: { y: 0 },
  hover: {
    y: -2,
    transition: { duration: 0.2 }
  }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0, y: -10 },
  visible: {
    opacity: 1,
    height: 'auto',
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -10,
    transition: {
      duration: 0.2,
      when: "afterChildren"
    }
  }
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.1 }
  }
};

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
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/" className="flex items-center">
              <motion.img
                src="/logo.png"
                alt="omnimolty"
                className="h-16 w-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                custom={i}
              >
                <Link
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-orange-400"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, x: '-50%' }}
                      animate={{ opacity: 1, x: '-50%' }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://bags.fm/GoqtGLdsQC34zrFboFyJZaBSTESxqm7JJ2QXUXpLBAGS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#00D26A] to-[#00B85C] rounded-lg hover:from-[#00B85C] hover:to-[#009E4F] transition-all shadow-lg shadow-[#00D26A]/20"
              >
                <img src="/bags-icon.png" alt="Bags" className="w-5 h-5" />
                Buy on Bags
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/demo"
                className="px-4 py-2 text-sm font-medium text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors"
              >
                Try Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 p-2 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden border-t border-zinc-800"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    variants={mobileLinkVariants}
                    custom={i}
                  >
                    <Link
                      to={link.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors rounded-lg mx-2 ${
                        isActive(link.href)
                          ? 'text-white bg-zinc-800/50'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        {isActive(link.href) && (
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-orange-400"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          />
                        )}
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={mobileLinkVariants}
                  className="pt-4 px-4 space-y-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href="https://bags.fm/GoqtGLdsQC34zrFboFyJZaBSTESxqm7JJ2QXUXpLBAGS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#00D26A] to-[#00B85C] rounded-lg hover:from-[#00B85C] hover:to-[#009E4F] transition-all shadow-lg shadow-[#00D26A]/20"
                      onClick={() => setIsOpen(false)}
                    >
                      <img src="/bags-icon.png" alt="Bags" className="w-5 h-5" />
                      Buy on Bags
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/demo"
                      className="block w-full px-4 py-3 text-sm font-medium text-center text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Try Demo
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
