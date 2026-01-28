import { motion } from 'framer-motion';

const agents = [
  {
    id: 'architect',
    name: 'The Architect',
    role: 'CEO / Project Manager',
    emoji: '🧠',
    desc: 'The strategic mastermind. Plans, delegates, and ensures everything runs like clockwork.',
    color: 'from-blue-500 to-indigo-600',
    skills: ['Strategic Planning', 'Task Delegation', 'Progress Tracking', 'Team Coordination'],
  },
  {
    id: 'engineer',
    name: 'The Engineer',
    role: 'DevOps Specialist',
    emoji: '⚙️',
    desc: 'Your code wizard. Builds, deploys, and maintains production-ready systems.',
    color: 'from-emerald-500 to-teal-600',
    skills: ['Code Generation', 'Bug Fixing', 'CI/CD Pipelines', 'Server Management'],
  },
  {
    id: 'growth',
    name: 'The Growth Hacker',
    role: 'Marketing Engine',
    emoji: '📈',
    desc: 'Your marketing powerhouse. Creates content, optimizes SEO, and grows your audience.',
    color: 'from-purple-500 to-pink-600',
    skills: ['Content Creation', 'SEO Optimization', 'Social Media', 'Analytics'],
  },
  {
    id: 'auditor',
    name: 'The Auditor',
    role: 'Legal & Finance',
    emoji: '🛡️',
    desc: 'Your compliance guardian. Handles security, finances, and keeps you out of trouble.',
    color: 'from-orange-500 to-red-600',
    skills: ['Security Audits', 'Financial Reports', 'Compliance', 'Risk Analysis'],
  }
];

const SquadGrid = () => {
  return (
    <section id="agents" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Your AI Dream Team
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Four specialized AI agents working together to build and grow your business
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-2xl`}>
                  {agent.emoji}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${agent.color} bg-clip-text text-transparent mb-2`}>
                    {agent.role}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{agent.desc}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {agent.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-400 text-xs font-medium border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SquadGrid;
