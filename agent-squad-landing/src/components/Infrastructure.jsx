import { motion } from 'framer-motion';
import { Server, Database, Brain, Cpu, MessageSquare, Shield, HardDrive, Zap, Lock, CheckCircle2 } from 'lucide-react';

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const statusVariants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const flowVariants = {
  animate: {
    x: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const infrastructureFeatures = [
  {
    icon: Cpu,
    title: 'Local Hardware',
    description: 'Powered by your dedicated Mac Mini M4 or Raspberry Pi 5, ensuring 24/7 operation and complete data sovereignty.',
    specs: ['Apple Silicon optimized', 'ARM64 support', 'Low power consumption']
  },
  {
    icon: MessageSquare,
    title: 'MCP Protocol',
    description: 'Model Context Protocol enables agents to share critical context and data instantaneously, fostering true collaborative intelligence.',
    specs: ['Real-time sync', 'Structured context', 'Tool orchestration']
  },
  {
    icon: Database,
    title: 'Long-Term Memory',
    description: 'A robust vector database (Pinecone or ChromaDB) serves as the enterprise\'s memory, remembering past decisions and project context.',
    specs: ['Semantic search', 'Project history', 'Learning over time']
  }
];

const securityFeatures = [
  'All processing happens locally on your machine',
  'No code or data transmitted to external servers',
  'Full audit logging of all agent actions',
  'Configurable permission boundaries',
  'Air-gapped deployment support',
  'SOC2 and HIPAA compliant options'
];

const Infrastructure = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden border-t border-zinc-800/50">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-orange-400 text-sm font-medium mb-4 block">Your Infrastructure, Your Control</span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">
            Complete Data<br />
            <span className="text-zinc-500">Sovereignty.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            OmniMolty is designed for ultimate privacy and performance,
            running directly on your chosen hardware.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8 relative overflow-hidden"
            whileHover={{ borderColor: 'rgba(255, 107, 74, 0.2)' }}
          >
            {/* Animated background grid */}
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.div
              className="grid lg:grid-cols-3 gap-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Your Hardware */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: 'rgba(255, 107, 74, 0.3)' }}
                className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <HardDrive className="w-5 h-5 text-orange-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">Your Hardware</h4>
                    <p className="text-zinc-500 text-xs">Mac Mini M4 / RPi 5</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'OmniMolty Core', status: 'Running' },
                    { label: 'Agent Squad', status: '4 Active' },
                    { label: 'Vector DB', status: 'Synced' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-2 rounded bg-zinc-900"
                    >
                      <span className="text-zinc-400 text-sm">{item.label}</span>
                      <motion.span
                        className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center gap-1"
                        variants={statusVariants}
                        initial="initial"
                        animate="pulse"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        {item.status}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* MCP Protocol */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(59, 130, 246, 0)',
                        '0 0 0 8px rgba(59, 130, 246, 0.1)',
                        '0 0 0 0 rgba(59, 130, 246, 0)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-5 h-5 text-blue-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">MCP Protocol</h4>
                    <p className="text-zinc-500 text-xs">Inter-Agent Communication</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { from: 'Architect', to: 'Engineer', msg: '"Build auth module"', color: 'blue' },
                    { from: 'Engineer', to: 'Auditor', msg: '"Review PR #142"', color: 'emerald' },
                    { from: 'Auditor', to: 'Architect', msg: '"Approved"', color: 'orange' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.15 }}
                      viewport={{ once: true }}
                      whileHover={{ backgroundColor: 'rgba(39, 39, 42, 0.8)' }}
                      className="p-2 rounded bg-zinc-900 text-zinc-400 transition-colors"
                    >
                      <span className={`text-${item.color}-400`}>{item.from}</span>
                      <motion.span className="mx-1" variants={flowVariants} animate="animate">→</motion.span>
                      {item.to}: {item.msg}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Long-term Memory */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 4, repeat: Infinity }
                    }}
                  >
                    <Brain className="w-5 h-5 text-purple-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">Long-Term Memory</h4>
                    <p className="text-zinc-500 text-xs">ChromaDB / Pinecone</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Project Context', value: '1.2M vectors' },
                    { label: 'Past Decisions', value: '847 entries' },
                    { label: 'Code Patterns', value: 'Learning...', animate: true }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-2 rounded bg-zinc-900"
                    >
                      <span className="text-zinc-400 text-sm">{item.label}</span>
                      <motion.span
                        className="text-zinc-600 text-xs"
                        animate={item.animate ? { opacity: [0.5, 1, 0.5] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {item.value}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Data Flow Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-center gap-4 text-sm relative z-10"
            >
              {[
                { label: 'All data stays local', color: 'emerald' },
                { label: 'Zero cloud dependency', color: 'orange' },
                { label: 'Sub-10ms latency', color: 'blue' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-zinc-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span
                    className={`w-2 h-2 rounded-full bg-${item.color}-400`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  {item.label}
                  {i < 2 && <span className="text-zinc-700 ml-4">|</span>}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Infrastructure Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {infrastructureFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(255, 107, 74, 0.3)',
                  boxShadow: '0 20px 40px -20px rgba(255, 107, 74, 0.1)'
                }}
                className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl cursor-default transition-colors"
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 107, 74, 0.1)' }}
                >
                  <Icon className="w-5 h-5 text-zinc-400" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.specs.map((spec, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 107, 74, 0.1)' }}
                      className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-500 transition-colors"
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{
            borderColor: 'rgba(16, 185, 129, 0.3)',
            boxShadow: '0 20px 40px -20px rgba(16, 185, 129, 0.1)'
          }}
          className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl transition-colors"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(16, 185, 129, 0)',
                      '0 0 0 8px rgba(16, 185, 129, 0.1)',
                      '0 0 0 0 rgba(16, 185, 129, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Lock className="w-5 h-5 text-emerald-400" />
                  </motion.div>
                </motion.div>
                <div>
                  <h3 className="text-white font-semibold">Enterprise-Grade Security</h3>
                  <p className="text-zinc-500 text-sm">Built for strict compliance requirements</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Your source code and proprietary data never leave your infrastructure—period.
                We support air-gapped deployments, local LLMs, and provide complete audit trails
                for every action taken by every agent.
              </p>
            </div>

            <div className="flex-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {securityFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 text-zinc-400 text-sm cursor-default"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    </motion.div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Infrastructure;
