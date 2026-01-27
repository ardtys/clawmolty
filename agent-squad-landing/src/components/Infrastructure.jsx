import { motion } from 'framer-motion';
import { Server, Database, Brain, Cpu, MessageSquare, Shield, HardDrive, Zap, Lock, CheckCircle2 } from 'lucide-react';

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
          <span className="text-amber-400 text-sm font-medium mb-4 block">Your Infrastructure, Your Control</span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">
            Complete Data<br />
            <span className="text-zinc-500">Sovereignty.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            OmniClawd is designed for ultimate privacy and performance,
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
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Your Hardware */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <HardDrive className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Your Hardware</h4>
                    <p className="text-zinc-500 text-xs">Mac Mini M4 / RPi 5</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded bg-zinc-900">
                    <span className="text-zinc-400 text-sm">OmniClawd Core</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Running</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-zinc-900">
                    <span className="text-zinc-400 text-sm">Agent Squad</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">4 Active</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-zinc-900">
                    <span className="text-zinc-400 text-sm">Vector DB</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Synced</span>
                  </div>
                </div>
              </div>

              {/* MCP Protocol */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">MCP Protocol</h4>
                    <p className="text-zinc-500 text-xs">Inter-Agent Communication</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 rounded bg-zinc-900 text-zinc-400">
                    <span className="text-blue-400">Architect</span> → Engineer: "Build auth module"
                  </div>
                  <div className="p-2 rounded bg-zinc-900 text-zinc-400">
                    <span className="text-emerald-400">Engineer</span> → Auditor: "Review PR #142"
                  </div>
                  <div className="p-2 rounded bg-zinc-900 text-zinc-400">
                    <span className="text-amber-400">Auditor</span> → Architect: "Approved"
                  </div>
                </div>
              </div>

              {/* Long-term Memory */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Long-Term Memory</h4>
                    <p className="text-zinc-500 text-xs">ChromaDB / Pinecone</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded bg-zinc-900">
                    <span className="text-zinc-400 text-sm">Project Context</span>
                    <span className="text-zinc-600 text-xs">1.2M vectors</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-zinc-900">
                    <span className="text-zinc-400 text-sm">Past Decisions</span>
                    <span className="text-zinc-600 text-xs">847 entries</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-zinc-900">
                    <span className="text-zinc-400 text-sm">Code Patterns</span>
                    <span className="text-zinc-600 text-xs">Learning...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Flow Indicator */}
            <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                All data stays local
              </div>
              <span className="text-zinc-700">|</span>
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Zero cloud dependency
              </div>
              <span className="text-zinc-700">|</span>
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Sub-10ms latency
              </div>
            </div>
          </div>
        </motion.div>

        {/* Infrastructure Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {infrastructureFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.specs.map((spec, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-500">
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-emerald-400" />
                </div>
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
                  <li key={index} className="flex items-start gap-2 text-zinc-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    {feature}
                  </li>
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
