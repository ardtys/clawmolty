import { motion } from 'framer-motion';
import { Sun, MessageSquare, Shield, Clock, RefreshCw, CheckCircle2, Send, GitBranch, AlertTriangle } from 'lucide-react';

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

const stepVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const featureVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const messageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.2
    }
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const autonomousFeatures = [
  {
    icon: Sun,
    title: 'Morning Briefing',
    time: '08:00 daily',
    description: 'Every day, The Architect performs a comprehensive check of schedules and GitHub progress, delivering a concise "Daily Standup" directly to your Telegram.',
    highlight: 'Stay informed, effortlessly.',
    example: {
      from: 'Architect',
      message: 'Daily Standup: 3 PRs merged, 2 issues closed. Engineer working on auth module. Growth published 2 blog posts. No blockers.'
    }
  },
  {
    icon: MessageSquare,
    title: 'Cross-Agent Communication',
    time: 'Real-time',
    description: 'When The Engineer identifies an API error, it doesn\'t wait for your command. It intelligently directs The Growth Hacker to check social media for related customer complaints.',
    highlight: 'Coordinated response, automatically.',
    example: {
      from: 'Engineer → Growth',
      message: 'API endpoint /users returning 500. Check Twitter for customer reports. Escalate if > 5 complaints.'
    }
  },
  {
    icon: Shield,
    title: 'Built-in Self-Correction',
    time: 'Every commit',
    description: 'Each agent is programmed for accountability. The Architect performs critical code reviews of The Engineer\'s work before merging, ensuring quality.',
    highlight: 'Preventing issues before they escalate.',
    example: {
      from: 'Architect → Engineer',
      message: 'Review failed: Missing input validation on line 47. Security risk. Please fix before merge.'
    }
  }
];

const heartbeatSteps = [
  { icon: Clock, label: 'Schedule Check', desc: 'Review daily tasks and deadlines' },
  { icon: GitBranch, label: 'Git Sync', desc: 'Pull latest changes, check CI status' },
  { icon: AlertTriangle, label: 'Alert Scan', desc: 'Monitor for errors and anomalies' },
  { icon: Send, label: 'Report', desc: 'Send summary to your preferred channel' },
  { icon: RefreshCw, label: 'Repeat', desc: 'Continue autonomous operation' },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-orange-400 text-sm font-medium mb-4 block">The Autonomous Loop</span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">
            How It Works:<br />
            <span className="text-zinc-500">The Proactive Heartbeat.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Your Agent Squad operates on a powerful Proactive Heartbeat system,
            ensuring continuous, intelligent action without constant oversight.
          </p>
        </motion.div>

        {/* Heartbeat Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl relative overflow-hidden"
            whileHover={{ borderColor: 'rgba(255, 107, 74, 0.3)' }}
          >
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {heartbeatSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === heartbeatSteps.length - 1;
              return (
                <div key={index} className="flex items-center gap-2 relative z-10">
                  <motion.div
                    custom={index}
                    variants={stepVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 107, 74, 0.1)',
                      borderColor: 'rgba(255, 107, 74, 0.3)'
                    }}
                    className="flex items-center gap-3 px-4 py-3 bg-zinc-800/50 rounded-lg border border-transparent transition-colors cursor-default"
                  >
                    <motion.div
                      animate={isLast ? {
                        rotate: 360,
                        transition: { duration: 4, repeat: Infinity, ease: "linear" }
                      } : pulseAnimation}
                    >
                      <Icon className="w-4 h-4 text-orange-400" />
                    </motion.div>
                    <div>
                      <p className="text-white text-sm font-medium">{step.label}</p>
                      <p className="text-zinc-500 text-xs">{step.desc}</p>
                    </div>
                  </motion.div>
                  {index < heartbeatSteps.length - 1 && (
                    <motion.span
                      className="text-orange-400/60 text-lg"
                      animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    >
                      →
                    </motion.span>
                  )}
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {autonomousFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover={{
                  y: -5,
                  borderColor: 'rgba(255, 107, 74, 0.3)',
                  boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.3)'
                }}
                className="grid lg:grid-cols-2 gap-6 p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl cursor-default transition-colors"
              >
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <motion.div animate={pulseAnimation}>
                        <Icon className="w-5 h-5 text-orange-400" />
                      </motion.div>
                    </motion.div>
                    <div>
                      <h3 className="text-white font-semibold">{feature.title}</h3>
                      <motion.span
                        className="text-zinc-600 text-xs font-mono"
                        whileHover={{ color: '#FF6B4A' }}
                      >
                        {feature.time}
                      </motion.span>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <motion.p
                    className="text-orange-400/80 text-sm font-medium"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 5 }}
                  >
                    {feature.highlight}
                  </motion.p>
                </div>

                {/* Example Message */}
                <motion.div
                  variants={messageVariants}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(255, 107, 74, 0.2)'
                  }}
                  className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center"
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(255, 107, 74, 0)',
                          '0 0 0 4px rgba(255, 107, 74, 0.1)',
                          '0 0 0 0 rgba(255, 107, 74, 0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon className="w-3 h-3 text-zinc-400" />
                    </motion.div>
                    <span className="text-zinc-500 text-xs font-mono">{feature.example.from}</span>
                  </div>
                  <motion.p
                    className="text-zinc-300 text-sm font-mono leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {feature.example.message}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { value: 'Zero', label: 'Human intervention needed', color: 'emerald' },
            { value: '24/7', label: 'Continuous operation', color: 'orange' },
            { value: '< 1min', label: 'Response to issues', color: 'blue' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                backgroundColor: 'rgba(39, 39, 42, 0.5)'
              }}
              className="text-center p-4 bg-zinc-900/30 rounded-lg border border-transparent hover:border-zinc-700 transition-colors cursor-default"
            >
              <motion.p
                className="text-2xl font-semibold text-white mb-1"
                animate={{
                  textShadow: [
                    '0 0 0px rgba(255,255,255,0)',
                    '0 0 10px rgba(255,255,255,0.1)',
                    '0 0 0px rgba(255,255,255,0)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-zinc-500 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
