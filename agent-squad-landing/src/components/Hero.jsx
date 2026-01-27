import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '24/7', label: 'Autonomous operation' },
  { value: '4', label: 'Specialized agents' },
  { value: '100%', label: 'On your infrastructure' },
];

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'omniclawd deploy --squad=full --mode=autonomous';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-sm text-zinc-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Your Autonomous Digital Enterprise
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
            <span className="text-white">Build a Business, </span>
            <span className="text-zinc-500">Not Just Code.</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
        >
          Introducing OmniClawd: Your autonomous AI enterprise, living on your infrastructure.
          They don't just advise; they execute, manage, and build your business, 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <Link
            to="/demo"
            className="btn-primary inline-flex items-center gap-2"
          >
            Deploy Your Squad
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/demo"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            See Autonomous Demo
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-12 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl sm:text-4xl font-semibold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <span className="text-xs text-zinc-500 ml-2 font-mono">omniclawd</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 select-none">$</span>
                <div>
                  <span className="text-zinc-300">{terminalText}</span>
                  <span className="inline-block w-2 h-5 bg-zinc-400 ml-0.5 animate-pulse" />
                </div>
              </div>

              {terminalText.length === fullText.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-zinc-400">The Architect initialized — strategic planning ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-zinc-400">The Engineer deployed — code execution active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-zinc-400">The Growth Hacker online — market engine running</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-zinc-400">The Auditor active — compliance monitoring engaged</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-amber-400">→</span>
                    <span className="text-zinc-300">Squad deployed. Autonomous operation started.</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
