import { motion } from 'framer-motion';
import { ArrowRight, Play, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <motion.span
                className="block bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Meet Your
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                AI Dream Team
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-white font-semibold">ClawMolty</span> is your autonomous AI squad that works 24/7.
              They code, market, audit, and manage — so you can focus on what matters.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
                >
                  <Rocket className="w-5 h-5" />
                  Launch Your Squad
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-800/80 text-white font-semibold rounded-2xl border border-zinc-700 hover:bg-zinc-700/80 transition-all"
                >
                  <Play className="w-5 h-5 text-orange-400" />
                  Watch Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main card */}
            <motion.div
              className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-3xl p-8 border border-zinc-700/50 backdrop-blur-sm"
              whileHover={{ y: -5 }}
            >
              {/* Decorative corner */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl -z-10 blur-sm opacity-50" />

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-2xl">
                    🦐
                  </div>
                  <div>
                    <h3 className="text-white font-bold">ClawMolty Squad</h3>
                    <p className="text-zinc-500 text-sm">4 Agents</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Online
                </div>
              </div>

              {/* Agent cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Architect', role: 'Strategy', emoji: '🧠', color: 'from-blue-500 to-indigo-500' },
                  { name: 'Engineer', role: 'Building', emoji: '⚙️', color: 'from-emerald-500 to-teal-500' },
                  { name: 'Growth', role: 'Marketing', emoji: '📈', color: 'from-purple-500 to-pink-500' },
                  { name: 'Auditor', role: 'Security', emoji: '🛡️', color: 'from-orange-500 to-red-500' },
                ].map((agent, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-xl mb-3`}>
                      {agent.emoji}
                    </div>
                    <h4 className="text-white font-semibold text-sm">{agent.name}</h4>
                    <p className="text-zinc-500 text-xs">{agent.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
