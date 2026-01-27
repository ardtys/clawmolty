import { motion } from 'framer-motion';
import { Brain, Code2, TrendingUp, Shield, Terminal, MessageSquare, Globe, Mail, CreditCard, FileText } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.4 }
  }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

const agents = [
  {
    id: 'architect',
    name: 'The Architect',
    role: 'CEO / Project Manager',
    desc: 'The strategic mind of your operation. Orchestrates tasks, delegates to specialized agents, and makes high-level decisions to align with your business goals.',
    icon: Brain,
    num: '01',
    functions: ['Strategic planning', 'Cross-agent delegation', 'Progress monitoring'],
    tools: ['Terminal', 'Project Management', 'Slack'],
    toolIcons: [Terminal, FileText, MessageSquare]
  },
  {
    id: 'engineer',
    name: 'The Engineer',
    role: 'DevOps Specialist',
    desc: 'Your technical execution unit. Designs, codes, deploys, and maintains your digital products and infrastructure with flawless operation.',
    icon: Code2,
    num: '02',
    functions: ['Software development', 'Server management', 'CI/CD pipelines'],
    tools: ['VS Code', 'GitHub API', 'Docker'],
    toolIcons: [Code2, Terminal, Terminal]
  },
  {
    id: 'growth',
    name: 'The Growth Hacker',
    role: 'Marketing Engine',
    desc: 'Your dedicated market engine. Researches trends, optimizes SEO, manages social presence, and crafts compelling content to expand your reach.',
    icon: TrendingUp,
    num: '03',
    functions: ['Market research', 'SEO optimization', 'Content creation'],
    tools: ['Browser', 'Twitter/X API', 'LinkedIn'],
    toolIcons: [Globe, MessageSquare, Globe]
  },
  {
    id: 'auditor',
    name: 'The Auditor',
    role: 'Legal & Finance',
    desc: 'The guardian of compliance and financial health. Handles invoicing, tax preparation, legal compliance, and competitive analysis.',
    icon: Shield,
    num: '04',
    functions: ['Financial management', 'Legal research', 'Risk assessment'],
    tools: ['Gmail', 'Stripe API', 'PDF Reader'],
    toolIcons: [Mail, CreditCard, FileText]
  }
];

const SquadGrid = () => {
  return (
    <section id="agents" className="py-32 px-6 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-orange-400 text-sm font-medium mb-4 block">The C-Suite Squad</span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">
            Your Digital<br />
            <span className="text-zinc-500">Organization.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Forget single-task AI. OmniMolty transforms your vision into a self-sufficient
            digital enterprise. Each agent is a specialized professional, working autonomously
            to drive your business forward.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {agents.map((agent, index) => {
            const Icon = agent.icon;

            return (
              <motion.div
                key={agent.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(255, 107, 74, 0.3)',
                  boxShadow: '0 20px 40px -20px rgba(255, 107, 74, 0.1)'
                }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 group transition-colors cursor-default"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-orange-500/10 transition-colors"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-orange-400 transition-colors" />
                  </motion.div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <motion.h3
                        className="text-white font-semibold text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {agent.name}
                      </motion.h3>
                      <motion.span
                        className="text-zinc-700 text-xs font-mono"
                        whileHover={{ color: '#FF6B4A', scale: 1.1 }}
                      >
                        {agent.num}
                      </motion.span>
                    </div>
                    <motion.p
                      className="text-orange-400/80 text-sm mb-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {agent.role}
                    </motion.p>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{agent.desc}</p>

                    {/* Functions */}
                    <div className="mb-4">
                      <p className="text-zinc-600 text-xs uppercase tracking-wider mb-2">Key Functions</p>
                      <div className="flex flex-wrap gap-2">
                        {agent.functions.map((func, i) => (
                          <motion.span
                            key={i}
                            custom={i}
                            variants={tagVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 107, 74, 0.1)' }}
                            className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400 cursor-default transition-colors"
                          >
                            {func}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <p className="text-zinc-600 text-xs uppercase tracking-wider mb-2">Tools</p>
                      <div className="flex items-center gap-3">
                        {agent.tools.map((tool, i) => {
                          const ToolIcon = agent.toolIcons[i];
                          return (
                            <motion.div
                              key={i}
                              className="flex items-center gap-1.5 text-zinc-500"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, color: '#FF6B4A' }}
                            >
                              <ToolIcon className="w-3 h-3" />
                              <span className="text-xs">{tool}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-zinc-600 text-sm text-center">
            All agents share context via MCP protocol and work autonomously on your infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SquadGrid;
