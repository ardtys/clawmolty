import { Link } from 'react-router-dom';

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
    <footer className="border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.png" alt="omniclawd" className="h-8 w-auto" />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Your autonomous digital enterprise. Build a business, not just code.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-800">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} OmniClawd
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
