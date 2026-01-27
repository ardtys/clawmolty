import { motion } from 'framer-motion';
import { Newspaper, Code2, MessageSquare, Users, Zap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

const taskVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4
    }
  })
};

const phaseVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.5
    }
  })
};

const priorityTasks = {
  highImpactLowEffort: [
    {
      icon: Newspaper,
      title: 'Automated News/Trend Monitoring',
      desc: 'An agent dedicated to providing daily market intelligence briefings.',
      agent: 'Growth Hacker'
    },
    {
      icon: MessageSquare,
      title: 'Customer Support Bot',
      desc: 'An intelligent agent handling emails and DMs, providing instant responses.',
      agent: 'Auditor'
    }
  ],
  highImpactHighEffort: [
    {
      icon: Code2,
      title: 'Full-Stack Auto-Dev',
      desc: 'An agent capable of building and deploying new features from concept to production.',
      agent: 'Engineer'
    },
    {
      icon: Users,
      title: 'Autonomous Lead Generation',
      desc: 'An agent identifying and engaging potential clients, conducting automated pitching.',
      agent: 'Growth Hacker'
    }
  ]
};

const Testimonials = () => {
  return (
    <section className="py-32 px-6 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-orange-400 text-sm font-medium mb-4 block">Priority Matrix</span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">
            What Will Your Squad<br />
            <span className="text-zinc-500">Build First?</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl">
            Prioritize your autonomous journey with key high-impact tasks.
            Start simple, scale fast.
          </p>
        </motion.div>

        {/* Priority Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* High Impact / Low Effort */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -5,
              borderColor: 'rgba(16, 185, 129, 0.4)',
              boxShadow: '0 20px 40px -20px rgba(16, 185, 129, 0.15)'
            }}
            className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(16, 185, 129, 0)',
                    '0 0 0 6px rgba(16, 185, 129, 0.1)',
                    '0 0 0 0 rgba(16, 185, 129, 0)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4 text-emerald-400" />
                </motion.div>
              </motion.div>
              <div>
                <h3 className="text-white font-semibold">Quick Wins</h3>
                <p className="text-emerald-400/80 text-xs">High Impact / Low Effort</p>
              </div>
            </div>
            <div className="space-y-4">
              {priorityTasks.highImpactLowEffort.map((task, index) => {
                const Icon = task.icon;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={taskVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      x: 5,
                      backgroundColor: 'rgba(39, 39, 42, 0.7)',
                      borderColor: 'rgba(16, 185, 129, 0.3)'
                    }}
                    className="flex gap-4 p-4 bg-zinc-900/50 rounded-lg border border-transparent cursor-default transition-colors"
                  >
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                    >
                      <Icon className="w-5 h-5 text-zinc-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{task.title}</h4>
                      <p className="text-zinc-500 text-sm mb-2">{task.desc}</p>
                      <motion.span
                        className="text-xs text-emerald-400/80"
                        whileHover={{ color: '#10b981' }}
                      >
                        Assigned to: {task.agent}
                      </motion.span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* High Impact / High Effort */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -5,
              borderColor: 'rgba(255, 107, 74, 0.4)',
              boxShadow: '0 20px 40px -20px rgba(255, 107, 74, 0.15)'
            }}
            className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ y: [-2, 2, -2], x: [2, -2, 2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </motion.div>
              </motion.div>
              <div>
                <h3 className="text-white font-semibold">Major Projects</h3>
                <p className="text-orange-400/80 text-xs">High Impact / High Effort</p>
              </div>
            </div>
            <div className="space-y-4">
              {priorityTasks.highImpactHighEffort.map((task, index) => {
                const Icon = task.icon;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={taskVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      x: 5,
                      backgroundColor: 'rgba(39, 39, 42, 0.7)',
                      borderColor: 'rgba(255, 107, 74, 0.3)'
                    }}
                    className="flex gap-4 p-4 bg-zinc-900/50 rounded-lg border border-transparent cursor-default transition-colors"
                  >
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 107, 74, 0.1)' }}
                    >
                      <Icon className="w-5 h-5 text-zinc-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{task.title}</h4>
                      <p className="text-zinc-500 text-sm mb-2">{task.desc}</p>
                      <motion.span
                        className="text-xs text-orange-400/80"
                        whileHover={{ color: '#FF6B4A' }}
                      >
                        Assigned to: {task.agent}
                      </motion.span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Roadmap Phases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h3
            className="text-xl font-semibold text-white mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Your Roadmap to Autonomy
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                phase: 'Phase 1',
                title: 'The Foundation',
                desc: 'Start with a single core agent, mastering terminal and browser control. Your chat app becomes central command.',
                items: ['Single agent setup', 'Terminal access', 'Basic automation'],
                color: 'blue'
              },
              {
                phase: 'Phase 2',
                title: 'Expanding the Squad',
                desc: 'Introduce specialized "Skills" for automated coding, market research, and content posting.',
                items: ['Multi-agent deploy', 'Skill modules', 'Cross-agent comms'],
                color: 'orange'
              },
              {
                phase: 'Phase 3',
                title: 'Hands-off Mode',
                desc: 'Activate Cron Jobs for 24/7 background operation. Your Squad works while you sleep.',
                items: ['24/7 automation', 'Payment integrations', 'Full autonomy'],
                color: 'emerald'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={phaseVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(255, 107, 74, 0.3)',
                  boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.3)'
                }}
                className="p-5 bg-zinc-900/30 border border-zinc-800 rounded-xl cursor-default transition-colors relative overflow-hidden"
              >
                {/* Phase number background */}
                <motion.span
                  className="absolute top-2 right-2 text-6xl font-bold text-zinc-800/30 select-none"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {index + 1}
                </motion.span>

                <motion.span
                  className="text-orange-400 text-xs font-mono mb-2 block relative z-10"
                  whileHover={{ x: 5 }}
                >
                  {phase.phase}
                </motion.span>
                <h4 className="text-white font-semibold mb-2 relative z-10">{phase.title}</h4>
                <p className="text-zinc-500 text-sm mb-4 relative z-10">{phase.desc}</p>
                <ul className="space-y-2 relative z-10">
                  {phase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-zinc-400 text-sm"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 + i * 0.05, type: "spring" }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-zinc-800/50"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-2xl sm:text-3xl font-medium text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="text-orange-400"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  "
                </motion.span>
                Finally, AI that respects our security policies.
                <motion.span
                  className="text-orange-400"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  "
                </motion.span>
              </motion.p>
              <motion.p
                className="text-zinc-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                — Engineering Lead, Fortune 500 Company
              </motion.p>
            </motion.div>
            <motion.div
              className="flex gap-8 text-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { value: '0', label: 'Data sent to cloud' },
                { value: '100%', label: 'Local processing' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="cursor-default"
                >
                  <motion.div
                    className="text-3xl font-semibold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-zinc-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
