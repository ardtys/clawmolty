import { motion } from 'framer-motion';
import { Newspaper, Code2, MessageSquare, Users, Zap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

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
          <span className="text-amber-400 text-sm font-medium mb-4 block">Priority Matrix</span>
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
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* High Impact / Low Effort */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Quick Wins</h3>
                <p className="text-emerald-400/80 text-xs">High Impact / Low Effort</p>
              </div>
            </div>
            <div className="space-y-4">
              {priorityTasks.highImpactLowEffort.map((task, index) => {
                const Icon = task.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 bg-zinc-900/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{task.title}</h4>
                      <p className="text-zinc-500 text-sm mb-2">{task.desc}</p>
                      <span className="text-xs text-emerald-400/80">Assigned to: {task.agent}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* High Impact / High Effort */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Major Projects</h3>
                <p className="text-amber-400/80 text-xs">High Impact / High Effort</p>
              </div>
            </div>
            <div className="space-y-4">
              {priorityTasks.highImpactHighEffort.map((task, index) => {
                const Icon = task.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 bg-zinc-900/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{task.title}</h4>
                      <p className="text-zinc-500 text-sm mb-2">{task.desc}</p>
                      <span className="text-xs text-amber-400/80">Assigned to: {task.agent}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Roadmap Phases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Your Roadmap to Autonomy</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                phase: 'Phase 1',
                title: 'The Foundation',
                desc: 'Start with a single core agent, mastering terminal and browser control. Your chat app becomes central command.',
                items: ['Single agent setup', 'Terminal access', 'Basic automation']
              },
              {
                phase: 'Phase 2',
                title: 'Expanding the Squad',
                desc: 'Introduce specialized "Skills" for automated coding, market research, and content posting.',
                items: ['Multi-agent deploy', 'Skill modules', 'Cross-agent comms']
              },
              {
                phase: 'Phase 3',
                title: 'Hands-off Mode',
                desc: 'Activate Cron Jobs for 24/7 background operation. Your Squad works while you sleep.',
                items: ['24/7 automation', 'Payment integrations', 'Full autonomy']
              }
            ].map((phase, index) => (
              <div key={index} className="p-5 bg-zinc-900/30 border border-zinc-800 rounded-xl">
                <span className="text-amber-400 text-xs font-mono mb-2 block">{phase.phase}</span>
                <h4 className="text-white font-semibold mb-2">{phase.title}</h4>
                <p className="text-zinc-500 text-sm mb-4">{phase.desc}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
            <div>
              <p className="text-2xl sm:text-3xl font-medium text-white mb-2">
                "Finally, AI that respects our security policies."
              </p>
              <p className="text-zinc-500">
                — Engineering Lead, Fortune 500 Company
              </p>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <div className="text-3xl font-semibold text-white">0</div>
                <div className="text-zinc-500 text-sm">Data sent to cloud</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">100%</div>
                <div className="text-zinc-500 text-sm">Local processing</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
