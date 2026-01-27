import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Book, Rocket, Settings, Code2, Terminal, Shield,
  FileText, ChevronRight, Search, ExternalLink,
  Zap, CheckCircle2, Copy, ArrowRight,
  Brain, TrendingUp, Play, Monitor, Apple, Command,
  Database, GitBranch, Folder, AlertCircle, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const installCommands = {
  mac: {
    label: 'macOS',
    icon: Apple,
    command: 'brew install omniclawd',
    note: 'Requires Homebrew. Supports M1/M2/Intel.'
  },
  linux: {
    label: 'Linux',
    icon: Terminal,
    command: 'curl -fsSL https://omniclawd.dev/install.sh | bash',
    note: 'Supports Ubuntu 20.04+, Debian 11+, Fedora 36+'
  },
  windows: {
    label: 'Windows',
    icon: Monitor,
    command: 'winget install omniclawd',
    note: 'Requires Windows 10/11 with WSL2 enabled'
  }
};

const quickStartSteps = [
  {
    step: 1,
    title: 'Install omniclawd',
    description: 'Download and install the omniclawd CLI on your machine.',
    details: [
      'Automatic dependency detection',
      'GPU acceleration support (optional)',
      'Takes less than 2 minutes'
    ]
  },
  {
    step: 2,
    title: 'Initialize Your Project',
    description: 'Navigate to your project and run the init command.',
    code: 'cd your-project && omniclawd init',
    details: [
      'Scans your codebase structure',
      'Detects language and frameworks',
      'Creates .omniclawd config folder'
    ]
  },
  {
    step: 3,
    title: 'Configure Agents',
    description: 'Customize which agents to enable and their permissions.',
    code: 'omniclawd config',
    details: [
      'Set file access permissions',
      'Configure notification channels',
      'Define task boundaries'
    ]
  },
  {
    step: 4,
    title: 'Start Your Squad',
    description: 'Launch the agents and give them their first task.',
    code: 'omniclawd start',
    details: [
      'Agents begin codebase analysis',
      'Ready to receive commands',
      'Monitor via dashboard or CLI'
    ]
  }
];

const cliCommands = [
  {
    command: 'omniclawd init',
    description: 'Initialize omniclawd in current directory',
    flags: ['--template <name>', '--skip-scan', '--verbose']
  },
  {
    command: 'omniclawd start',
    description: 'Start the agent squad',
    flags: ['--agents <list>', '--background', '--port <number>']
  },
  {
    command: 'omniclawd task',
    description: 'Assign a new task to the Architect',
    flags: ['--priority <level>', '--deadline <date>', '--agent <name>']
  },
  {
    command: 'omniclawd status',
    description: 'View current task progress and agent status',
    flags: ['--json', '--watch', '--detailed']
  },
  {
    command: 'omniclawd logs',
    description: 'View agent activity logs',
    flags: ['--agent <name>', '--since <time>', '--follow']
  },
  {
    command: 'omniclawd config',
    description: 'Open configuration wizard',
    flags: ['--reset', '--export', '--import <file>']
  },
  {
    command: 'omniclawd stop',
    description: 'Stop all running agents',
    flags: ['--force', '--save-state']
  }
];

const configExample = `# .omniclawd/config.yaml

project:
  name: "my-saas-app"
  language: "typescript"
  framework: "nextjs"

agents:
  architect:
    enabled: true
    auto_plan: true
    max_tasks_per_sprint: 50

  engineer:
    enabled: true
    auto_commit: false
    test_required: true
    style_guide: ".eslintrc.js"

  auditor:
    enabled: true
    scan_on_commit: true
    block_on_critical: true
    compliance: ["OWASP", "SOC2"]

  growth:
    enabled: true
    changelog_format: "keepachangelog"
    social_channels: ["twitter", "discord"]

integrations:
  github:
    enabled: true
    auto_pr: true
    reviewers: ["@team-leads"]

  slack:
    enabled: true
    channel: "#dev-updates"

notifications:
  on_task_complete: true
  on_error: true
  on_security_issue: true`;

const docCategories = [
  {
    title: 'Getting Started',
    icon: Rocket,
    color: 'from-green-500 to-emerald-500',
    articles: [
      { title: 'Introduction to omniclawd', time: '5 min', popular: true },
      { title: 'Installation Guide', time: '10 min', popular: true },
      { title: 'Quick Start Tutorial', time: '15 min', popular: true },
      { title: 'System Requirements', time: '3 min' },
      { title: 'Upgrading from v1.x', time: '8 min' },
    ]
  },
  {
    title: 'Agent Configuration',
    icon: Brain,
    color: 'from-cyan-500 to-purple-500',
    articles: [
      { title: 'Architect: Task Planning', time: '8 min' },
      { title: 'Engineer: Code Generation', time: '12 min' },
      { title: 'Auditor: Security Rules', time: '10 min' },
      { title: 'Growth: Content Workflows', time: '7 min' },
      { title: 'Custom Agent Behaviors', time: '15 min' },
    ]
  },
  {
    title: 'Integrations',
    icon: GitBranch,
    color: 'from-blue-500 to-cyan-500',
    articles: [
      { title: 'GitHub & GitLab', time: '10 min', popular: true },
      { title: 'Database Connections', time: '12 min' },
      { title: 'Slack & Discord', time: '8 min' },
      { title: 'CI/CD Pipelines', time: '15 min' },
      { title: 'Custom Webhooks', time: '10 min' },
    ]
  },
  {
    title: 'Security & Privacy',
    icon: Shield,
    color: 'from-amber-500 to-orange-500',
    articles: [
      { title: 'On-Premise Architecture', time: '8 min' },
      { title: 'Access Control', time: '10 min' },
      { title: 'Data Encryption', time: '6 min' },
      { title: 'Audit Logging', time: '5 min' },
      { title: 'Compliance (SOC2, HIPAA)', time: '12 min' },
    ]
  },
  {
    title: 'API Reference',
    icon: Code2,
    color: 'from-rose-500 to-pink-500',
    articles: [
      { title: 'REST API Overview', time: '5 min' },
      { title: 'Authentication', time: '8 min' },
      { title: 'Task Endpoints', time: '15 min' },
      { title: 'Agent Endpoints', time: '12 min' },
      { title: 'Webhook Events', time: '10 min' },
    ]
  },
  {
    title: 'Troubleshooting',
    icon: AlertCircle,
    color: 'from-red-500 to-rose-500',
    articles: [
      { title: 'Common Issues', time: '10 min' },
      { title: 'Performance Tuning', time: '12 min' },
      { title: 'Debug Mode', time: '8 min' },
      { title: 'Log Analysis', time: '6 min' },
      { title: 'Getting Help', time: '3 min' },
    ]
  }
];

const faqs = [
  {
    question: 'What are the minimum system requirements?',
    answer: 'omniclawd requires 8GB RAM minimum (16GB recommended), 10GB free disk space, and a modern CPU. GPU acceleration is optional but recommended for faster processing. Supported OS: macOS 12+, Ubuntu 20.04+, Windows 10/11 with WSL2.'
  },
  {
    question: 'Does omniclawd send my code to the cloud?',
    answer: 'No. omniclawd runs 100% locally on your machine. Your code, data, and credentials never leave your infrastructure. The only external communication is for license validation (can be disabled for air-gapped environments).'
  },
  {
    question: 'Can I use omniclawd with monorepos?',
    answer: 'Yes! omniclawd fully supports monorepos. Use the --workspace flag during init to configure multi-project setups. Each project can have its own agent configuration while sharing a common task queue.'
  },
  {
    question: 'How do I limit what files agents can access?',
    answer: 'Use the access_control section in your config.yaml to define allowlists and blocklists. You can restrict by file path, extension, or directory. Sensitive files like .env are blocked by default.'
  },
  {
    question: 'Can agents make commits automatically?',
    answer: 'Yes, but it\'s disabled by default. Enable auto_commit in the Engineer config. We recommend keeping auto_commit: false and using auto_pr: true instead, so you can review changes before they\'re merged.'
  },
  {
    question: 'How do I run omniclawd in a Docker container?',
    answer: 'We provide official Docker images. Run: docker run -v $(pwd):/workspace omniclawd/omniclawd start. Mount your project directory and any necessary credentials as volumes.'
  }
];

const CodeBlock = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-[#0d0d14] border border-white/10 rounded-lg p-4 overflow-x-auto">
        <code className="text-cyan-400 font-mono text-sm whitespace-pre">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
      >
        {copied ? (
          <CheckCircle2 className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-white/40" />
        )}
      </button>
    </div>
  );
};

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('mac');
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 px-6 border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,211,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,211,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Book className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Documentation</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Learn to Build with
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">omniclawd</span>
              </h1>

              <p className="text-lg text-white/60 mb-8">
                Everything you need to deploy, configure, and master your autonomous agent squad.
              </p>

              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs font-mono">⌘K</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: 'Quick Start', desc: 'Up and running in 5 min', icon: Rocket, color: 'text-green-400' },
                { title: 'API Reference', desc: 'Complete API docs', icon: Code2, color: 'text-blue-400' },
                { title: 'Examples', desc: 'Real-world use cases', icon: Folder, color: 'text-purple-400' },
                { title: 'CLI Reference', desc: 'All commands & flags', icon: Terminal, color: 'text-amber-400' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={`#${item.title.toLowerCase().replace(' ', '-')}`}
                    className="glass-card p-5 hover:border-white/20 transition-all group"
                  >
                    <Icon className={`w-6 h-6 ${item.color} mb-3`} />
                    <h3 className="text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="quick-start" className="py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Installation</h2>
            <p className="text-white/60 max-w-2xl">
              Install omniclawd on your preferred platform. The CLI handles all dependencies automatically.
            </p>
          </motion.div>

          {/* Platform Tabs */}
          <div className="flex gap-2 mb-6">
            {Object.entries(installCommands).map(([key, platform]) => {
              const Icon = platform.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPlatform(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    selectedPlatform === key
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-white/5 text-white/60 border border-transparent hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {platform.label}
                </button>
              );
            })}
          </div>

          {/* Install Command */}
          <motion.div
            key={selectedPlatform}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <CodeBlock code={installCommands[selectedPlatform].command} />
            <p className="text-white/50 text-sm mt-3">{installCommands[selectedPlatform].note}</p>
          </motion.div>

          {/* Quick Start Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-6 h-full">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{step.description}</p>

                  {step.code && (
                    <div className="bg-[#0d0d14] rounded-lg p-3 mb-4">
                      <code className="text-cyan-400 text-xs font-mono">{step.code}</code>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/50 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLI Reference Section */}
      <section id="cli-reference" className="py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">CLI Reference</h2>
            <p className="text-white/60 max-w-2xl">
              Complete list of commands and flags available in the omniclawd CLI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {cliCommands.map((cmd, index) => (
              <motion.div
                key={cmd.command}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <code className="text-cyan-400 font-mono text-sm bg-cyan-500/10 px-2 py-1 rounded">
                    {cmd.command}
                  </code>
                  <Terminal className="w-4 h-4 text-white/30" />
                </div>
                <p className="text-white/70 text-sm mb-3">{cmd.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cmd.flags.map((flag, i) => (
                    <span key={i} className="text-white/40 text-xs font-mono bg-white/5 px-2 py-1 rounded">
                      {flag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Example */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Configuration</h2>
              <p className="text-white/60 mb-6">
                omniclawd uses a simple YAML configuration file. Customize agent behaviors,
                integrations, and permissions to match your workflow.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Project Settings', desc: 'Define project name, language, and framework' },
                  { title: 'Agent Configuration', desc: 'Enable/disable agents and set their behaviors' },
                  { title: 'Integrations', desc: 'Connect to GitHub, Slack, and other services' },
                  { title: 'Notifications', desc: 'Choose when and how to receive updates' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-28">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-white/40" />
                  <span className="text-white/40 text-sm font-mono">.omniclawd/config.yaml</span>
                </div>
                <CodeBlock code={configExample} language="yaml" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-white/60 max-w-2xl">
              Explore our documentation organized by topic.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 hover:border-white/20 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

                  <ul className="space-y-3">
                    {category.articles.map((article, i) => (
                      <li key={i}>
                        <a href="#" className="flex items-center justify-between group">
                          <span className="text-white/70 group-hover:text-white transition-colors text-sm flex items-center gap-2">
                            {article.title}
                            {article.popular && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-400">Popular</span>
                            )}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-white/40 text-xs">{article.time}</span>
                            <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">Quick answers to common questions.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <h4 className="text-white font-medium pr-4">{faq.question}</h4>
                  <ChevronDown className={`w-5 h-5 text-white/40 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Install omniclawd and deploy your first agent squad in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#" className="btn-secondary flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Join Discord
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Documentation;
