import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '24/7', label: 'Autonomous operation' },
  { value: '4', label: 'Specialized agents' },
  { value: '100%', label: 'On your infrastructure' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(255, 107, 74, 0.1)',
      '0 0 40px rgba(255, 107, 74, 0.2)',
      '0 0 20px rgba(255, 107, 74, 0.1)'
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'omnimolty deploy --squad=full --mode=autonomous';

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
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top label */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            className="inline-flex items-center gap-2 text-sm text-zinc-400 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50"
            whileHover={{ scale: 1.02, borderColor: 'rgba(255, 107, 74, 0.3)' }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
            </motion.span>
            Your Autonomous Digital Enterprise
          </motion.span>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={itemVariants} className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
            <motion.span
              className="text-white inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Build a Business,{' '}
            </motion.span>
            <motion.span
              className="text-zinc-500 inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Not Just Code.
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
        >
          Introducing OmniMolty: Your autonomous AI enterprise, living on your infrastructure.
          They don't just advise; they execute, manage, and build your business, 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/demo"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Deploy Your Squad
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/demo"
              className="btn-secondary inline-flex items-center gap-2 group"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="w-4 h-4" />
              </motion.span>
              See Autonomous Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-12 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="cursor-default"
            >
              <motion.div
                className="text-3xl sm:text-4xl font-semibold text-white mb-1"
                {...floatingVariants}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal preview */}
        <motion.div
          variants={itemVariants}
          className="relative"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden relative"
            variants={glowPulse}
            animate="animate"
          >
            {/* Terminal glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />

            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 relative">
              <div className="flex gap-1.5">
                <motion.div
                  className="w-3 h-3 rounded-full bg-red-500/80"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-yellow-500/80"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500/80"
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <span className="text-xs text-zinc-500 ml-2 font-mono">omnimolty</span>
              <motion.span
                className="ml-auto text-xs text-emerald-400/80"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ● connected
              </motion.span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm relative">
              <div className="flex items-start gap-3">
                <motion.span
                  className="text-orange-400 select-none"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  $
                </motion.span>
                <div>
                  <span className="text-zinc-300">{terminalText}</span>
                  <motion.span
                    className="inline-block w-2 h-5 bg-orange-400 ml-0.5"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </div>

              {terminalText.length === fullText.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 space-y-3"
                >
                  {[
                    { text: 'The Architect initialized — strategic planning ready', delay: 0 },
                    { text: 'The Engineer deployed — code execution active', delay: 0.2 },
                    { text: 'The Growth Hacker online — market engine running', delay: 0.4 },
                    { text: 'The Auditor active — compliance monitoring engaged', delay: 0.6 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + item.delay }}
                      className="flex items-center gap-2"
                    >
                      <motion.span
                        className="text-emerald-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + item.delay, type: "spring" }}
                      >
                        ✓
                      </motion.span>
                      <span className="text-zinc-400">{item.text}</span>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-800/50"
                  >
                    <motion.span
                      className="text-orange-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                    <span className="text-zinc-300 font-medium">Squad deployed. Autonomous operation started.</span>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
