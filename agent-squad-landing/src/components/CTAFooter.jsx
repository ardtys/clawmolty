import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';

const CTAFooter = () => {
  const [copied, setCopied] = useState(false);
  const installCommand = 'curl -fsSL https://get.omniclawd.dev | bash';

  const copyCommand = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-32 px-6 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Ready to Lead Your Digital Enterprise?
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">
              Deploy Your Agent Squad<br />
              <span className="text-zinc-500">Today.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              One command to install. Complete autonomy in minutes.
              No cloud account, no credit card required.
            </p>
          </motion.div>

          {/* Install Command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto mb-12"
          >
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <span className="text-amber-400 font-mono text-sm">$</span>
              <code className="flex-1 text-zinc-300 font-mono text-sm">
                {installCommand}
              </code>
              <button
                onClick={copyCommand}
                className="p-2 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-zinc-600 text-xs mt-3 text-center">
              Works on Mac Mini M4, Raspberry Pi 5, or any Linux/macOS machine
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Deploy Your Agent Squad
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:bg-zinc-800/50 transition-colors"
            >
              Read documentation
            </Link>
          </motion.div>

          {/* Built for the future */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-zinc-600 text-sm mt-12"
          >
            Built for the future of work.
          </motion.p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CTAFooter;
