import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Clock, Server, RefreshCw, DollarSign, Users, TrendingDown } from 'lucide-react';

const valueProps = [
  {
    icon: Shield,
    title: 'Your Code Never Leaves',
    description: 'Unlike cloud-based AI assistants that send your code to external servers, clawmolty runs entirely on your infrastructure. Your proprietary code, trade secrets, and customer data stay exactly where they belong—under your control.',
    highlight: '100% Local',
    color: 'from-orange-500 to-orange-600',
    detail: 'Supports air-gapped deployments for maximum security'
  },
  {
    icon: Zap,
    title: 'Instant Response Times',
    description: 'No waiting for API calls to complete. No cloud latency. clawmolty executes directly on your machine with sub-10ms response times. When you need a file read, a command run, or code written—it happens immediately.',
    highlight: '<10ms Latency',
    color: 'from-orange-600 to-emerald-500',
    detail: 'Direct access to filesystem, terminal, and databases'
  },
  {
    icon: Brain,
    title: 'Context That Compounds',
    description: 'Every session builds on the last. clawmolty maintains persistent memory of your codebase architecture, your preferred patterns, your past decisions, and your team\'s conventions. The longer you use it, the more it understands.',
    highlight: 'Adaptive Memory',
    color: 'from-orange-500 to-orange-500',
    detail: 'Learns your coding style and project structure over time'
  },
];

const comparisonPoints = [
  {
    label: 'Traditional Dev Team',
    cost: '$200K+/year',
    icon: Users,
    details: ['Recruiting takes months', 'Onboarding takes weeks', 'Limited availability']
  },
  {
    label: 'clawmolty Pro',
    cost: '$1,788/year',
    icon: Zap,
    details: ['Deploys in minutes', 'Works 24/7', 'Scales instantly'],
    highlighted: true
  },
  {
    label: 'Annual Savings',
    cost: '$198K+',
    icon: TrendingDown,
    details: ['Immediate ROI', 'Predictable costs', 'No overhead']
  }
];

const additionalFeatures = [
  {
    icon: Clock,
    title: 'Works While You Sleep',
    description: 'Queue up tasks before bed, wake up to completed PRs',
  },
  {
    icon: Server,
    title: 'Multi-Project Ready',
    description: 'Switch between projects without losing context',
  },
  {
    icon: RefreshCw,
    title: 'Self-Updating Models',
    description: 'Always using the latest AI capabilities automatically',
  },
];

const ValueProps = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium mb-6">
            Why Choose clawmolty
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Advantages You Can't Get
            <br />
            <span className="text-white/60">From Cloud-Based AI</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We built clawmolty for teams who can't compromise on security, performance, or control.
            Here's what makes local-first AI different.
          </p>
        </motion.div>

        {/* Main Value Props */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover:border-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prop.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Highlight Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-medium mb-4">
                  {prop.highlight}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
                <p className="text-white/60 leading-relaxed mb-4">{prop.description}</p>

                {/* Detail */}
                <p className="text-white/40 text-sm italic">{prop.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Cost Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            The Economics Make Sense
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisonPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border ${
                    point.highlighted
                      ? 'bg-orange-500/10 border-orange-500/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-6 h-6 ${point.highlighted ? 'text-orange-400' : 'text-white/40'}`} />
                    <span className="text-white/70 text-sm">{point.label}</span>
                  </div>
                  <div className={`text-3xl font-bold mb-4 ${point.highlighted ? 'text-orange-300' : 'text-white'}`}>
                    {point.cost}
                  </div>
                  <ul className="space-y-2">
                    {point.details.map((detail, i) => (
                      <li key={i} className="text-white/50 text-sm flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${point.highlighted ? 'bg-orange-400' : 'bg-white/30'}`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Privacy Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-white/50 text-sm">Local execution</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">Zero</p>
              <p className="text-white/50 text-sm">Data sent to cloud</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">Full</p>
              <p className="text-white/50 text-sm">Code ownership</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">Your</p>
              <p className="text-white/50 text-sm">Infrastructure only</p>
            </div>
          </div>
        </motion.div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="p-2 rounded-lg bg-orange-500/20">
                  <Icon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{feature.title}</h4>
                  <p className="text-white/50 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
