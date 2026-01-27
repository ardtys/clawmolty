import { motion } from 'framer-motion';
import { Brain, Code2, TrendingUp, Shield, Terminal, MessageSquare, Globe, Mail, CreditCard, FileText } from 'lucide-react';

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
          <span className="text-amber-400 text-sm font-medium mb-4 block">The C-Suite Squad</span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">
            Your Digital<br />
            <span className="text-zinc-500">Organization.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Forget single-task AI. OmniClawd transforms your vision into a self-sufficient
            digital enterprise. Each agent is a specialized professional, working autonomously
            to drive your business forward.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          {agents.map((agent, index) => {
            const Icon = agent.icon;

            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 group hover:border-zinc-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-zinc-700 transition-colors">
                    <Icon className="w-6 h-6 text-zinc-400" />
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold text-lg">{agent.name}</h3>
                      <span className="text-zinc-700 text-xs font-mono">{agent.num}</span>
                    </div>
                    <p className="text-amber-400/80 text-sm mb-3">{agent.role}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{agent.desc}</p>

                    {/* Functions */}
                    <div className="mb-4">
                      <p className="text-zinc-600 text-xs uppercase tracking-wider mb-2">Key Functions</p>
                      <div className="flex flex-wrap gap-2">
                        {agent.functions.map((func, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                            {func}
                          </span>
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
                            <div key={i} className="flex items-center gap-1.5 text-zinc-500">
                              <ToolIcon className="w-3 h-3" />
                              <span className="text-xs">{tool}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-zinc-600 text-sm text-center"
        >
          All agents share context via MCP protocol and work autonomously on your infrastructure.
        </motion.p>
      </div>
    </section>
  );
};

export default SquadGrid;
