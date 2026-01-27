import { motion } from 'framer-motion';
import { Sun, MessageSquare, Shield, Clock, RefreshCw, CheckCircle2, Send, GitBranch, AlertTriangle } from 'lucide-react';

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
          <span className="text-amber-400 text-sm font-medium mb-4 block">The Autonomous Loop</span>
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
          <div className="flex flex-wrap items-center justify-center gap-2 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            {heartbeatSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center gap-3 px-4 py-3 bg-zinc-800/50 rounded-lg">
                    <Icon className="w-4 h-4 text-amber-400" />
                    <div>
                      <p className="text-white text-sm font-medium">{step.label}</p>
                      <p className="text-zinc-500 text-xs">{step.desc}</p>
                    </div>
                  </div>
                  {index < heartbeatSteps.length - 1 && (
                    <span className="text-zinc-700 text-lg">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Features */}
        <div className="space-y-6">
          {autonomousFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-6 p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl"
              >
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{feature.title}</h3>
                      <span className="text-zinc-600 text-xs font-mono">{feature.time}</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <p className="text-amber-400/80 text-sm font-medium">
                    {feature.highlight}
                  </p>
                </div>

                {/* Example Message */}
                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Icon className="w-3 h-3 text-zinc-400" />
                    </div>
                    <span className="text-zinc-500 text-xs font-mono">{feature.example.from}</span>
                  </div>
                  <p className="text-zinc-300 text-sm font-mono leading-relaxed">
                    {feature.example.message}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { value: 'Zero', label: 'Human intervention needed' },
            { value: '24/7', label: 'Continuous operation' },
            { value: '< 1min', label: 'Response to issues' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-zinc-900/30 rounded-lg">
              <p className="text-2xl font-semibold text-white mb-1">{stat.value}</p>
              <p className="text-zinc-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
