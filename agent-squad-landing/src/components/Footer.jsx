import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

const Footer = () => {
  const links = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Demo', href: '/demo' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/docs' },
      { name: 'Changelog', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  };

  return (
    <motion.footer
      className="border-t border-zinc-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="inline-block mb-4">
                <motion.img
                  src="/logo.png"
                  alt="omnimolty"
                  className="h-12 w-auto"
                  whileHover={{ filter: 'brightness(1.2)' }}
                />
              </Link>
            </motion.div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Your autonomous digital enterprise. Build a business, not just code.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-4"
              whileHover={{ color: '#FF6B4A' }}
            >
              Product
            </motion.h4>
            <ul className="space-y-3">
              {links.product.map((link, i) => (
                <motion.li
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      className="text-zinc-500 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-4"
              whileHover={{ color: '#FF6B4A' }}
            >
              Resources
            </motion.h4>
            <ul className="space-y-3">
              {links.resources.map((link, i) => (
                <motion.li
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      className="text-zinc-500 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-4"
              whileHover={{ color: '#FF6B4A' }}
            >
              Company
            </motion.h4>
            <ul className="space-y-3">
              {links.company.map((link, i) => (
                <motion.li
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      className="text-zinc-500 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-zinc-600 text-sm flex items-center gap-2"
            whileHover={{ color: '#a1a1aa' }}
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ©
            </motion.span>
            {new Date().getFullYear()} OmniMolty
          </motion.p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms'].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
