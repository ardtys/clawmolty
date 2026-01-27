import { motion } from 'framer-motion';
import {
  Brain, Code2, TrendingUp, Shield, Terminal, Database,
  Globe, MessageCircle, GitBranch, Cpu, Lock, Zap,
  BarChart3, FileCode, Layers, ArrowRight,
  CheckCircle2, RefreshCw, Bug, Workflow,
  FileSearch, BookOpen, Clock, Server, Eye,
  Sparkles, Target, PenTool, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const agents = [
  {
    id: 'architect',
    name: 'Architect',
    tagline: 'Strategic Orchestration',
    description: 'The brain of your operation. Give it a high-level objective and watch it break down complex projects into actionable tasks, delegate to specialized agents, and track progress to completion.',
    icon: Brain,
    color: 'from-cyan-500 to-purple-600',
    capabilities: [
      { title: 'Codebase Analysis', desc: 'Understands your entire repository structure', icon: FileSearch },
      { title: 'Task Planning', desc: 'Breaks objectives into atomic tasks', icon: Workflow },
      { title: 'Smart Delegation', desc: 'Routes work to the right agent', icon: GitBranch },
      { title: 'Progress Tracking', desc: 'Monitors completion and blockers', icon: BarChart3 },
    ]
  },
  {
    id: 'engineer',
    name: 'Engineer',
    tagline: 'Code Implementation',
    description: 'Writes production-quality code that matches your patterns. It reads your codebase, follows your conventions, writes tests, and creates PRs ready for review.',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    capabilities: [
      { title: 'Context-Aware', desc: 'Matches your coding style', icon: Eye },
      { title: 'Test-Driven', desc: 'Writes unit and integration tests', icon: CheckCircle2 },
      { title: 'Bug Fixing', desc: 'Traces and fixes issues', icon: Bug },
      { title: 'CI/CD', desc: 'Manages your pipelines', icon: RefreshCw },
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Content & Distribution',
    description: 'Handles the tedious parts of shipping: changelogs, release notes, documentation updates, and social announcements in your brand voice.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-500',
    capabilities: [
      { title: 'Changelog', desc: 'Auto-generates from commits', icon: FileCode },
      { title: 'Documentation', desc: 'Keeps docs in sync', icon: BookOpen },
      { title: 'Social Posts', desc: 'Drafts announcements', icon: MessageCircle },
      { title: 'Analytics', desc: 'Tracks engagement', icon: Target },
    ]
  },
  {
    id: 'auditor',
    name: 'Auditor',
    tagline: 'Security & Compliance',
    description: 'Reviews every line before merge. Scans for OWASP vulnerabilities, credential leaks, and compliance issues. Generates audit trails automatically.',
    icon: Shield,
    color: 'from-amber-500 to-orange-500',
    capabilities: [
      { title: 'Vulnerability Scan', desc: 'SAST/DAST analysis', icon: Bug },
      { title: 'Secret Detection', desc: 'Catches leaked credentials', icon: Lock },
      { title: 'Code Review', desc: 'Quality enforcement', icon: PenTool },
      { title: 'Compliance', desc: 'SOC2, HIPAA reports', icon: FileCode },
    ]
  }
];

const useCases = [
  {
    title: 'Feature Development',
    description: 'Describe what you want to build, and the squad handles the rest.',
    workflow: [
      { agent: 'Architect', action: 'Analyzes requirements and creates task breakdown' },
      { agent: 'Engineer', action: 'Implements code with tests' },
      { agent: 'Auditor', action: 'Reviews for security issues' },
      { agent: 'Growth', action: 'Updates changelog and docs' },
    ],
    example: '"Build a password reset flow with email verification"'
  },
  {
    title: 'Bug Investigation',
    description: 'Report an issue and let the agents trace, fix, and verify.',
    workflow: [
      { agent: 'Architect', action: 'Prioritizes and assigns investigation' },
      { agent: 'Engineer', action: 'Traces root cause and implements fix' },
      { agent: 'Auditor', action: 'Ensures fix doesn\'t introduce vulnerabilities' },
      { agent: 'Engineer', action: 'Adds regression tests' },
    ],
    example: '"Users are getting logged out randomly after 10 minutes"'
  },
  {
    title: 'Code Refactoring',
    description: 'Modernize your codebase while maintaining functionality.',
    workflow: [
      { agent: 'Architect', action: 'Identifies refactoring opportunities' },
      { agent: 'Engineer', action: 'Refactors with backward compatibility' },
      { agent: 'Auditor', action: 'Validates no regressions' },
      { agent: 'Growth', action: 'Documents architectural changes' },
    ],
    example: '"Migrate the auth module from callbacks to async/await"'
  },
  {
    title: 'Release Management',
    description: 'Automate your entire release process from tagging to announcement.',
    workflow: [
      { agent: 'Architect', action: 'Coordinates release checklist' },
      { agent: 'Auditor', action: 'Final security review' },
      { agent: 'Engineer', action: 'Handles deployment pipeline' },
      { agent: 'Growth', action: 'Publishes release notes everywhere' },
    ],
    example: '"Prepare and ship v2.4.0 to production"'
  }
];

const integrations = [
  { name: 'Terminal', icon: Terminal, desc: 'Full shell access' },
  { name: 'File System', icon: FileCode, desc: 'Read/write files' },
  { name: 'PostgreSQL', icon: Database, desc: 'Query databases' },
  { name: 'MongoDB', icon: Database, desc: 'NoSQL support' },
  { name: 'Git', icon: GitBranch, desc: 'Version control' },
  { name: 'GitHub', icon: GitBranch, desc: 'PRs & issues' },
  { name: 'Browser', icon: Globe, desc: 'Web automation' },
  { name: 'Docker', icon: Cpu, desc: 'Containers' },
  { name: 'Kubernetes', icon: Layers, desc: 'Orchestration' },
  { name: 'Slack', icon: MessageCircle, desc: 'Notifications' },
  { name: 'VS Code', icon: Code2, desc: 'Editor plugin' },
  { name: 'REST APIs', icon: Globe, desc: 'HTTP requests' },
];

const techSpecs = [
  { label: 'Response Time', value: '< 10ms', desc: 'Local execution, no network latency' },
  { label: 'Data Privacy', value: '100%', desc: 'Everything stays on your machine' },
  { label: 'Availability', value: '24/7', desc: 'No cloud dependency' },
  { label: 'Languages', value: '20+', desc: 'JS, Python, Go, Rust, and more' },
];

const Features = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,211,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,211,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              Platform Capabilities
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Four Specialized Agents,
              <br />
              <span className="text-white/60">One Unified Intelligence</span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
              Each agent masters their domain. Together, they execute complex software
              projects from planning to deployment—autonomously.
            </p>

            {/* Tech Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              {techSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{spec.value}</div>
                  <div className="text-white text-sm font-medium">{spec.label}</div>
                  <div className="text-white/40 text-xs mt-1">{spec.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/docs" className="btn-secondary flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                View Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Your AI Development Team
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Four specialized agents, each an expert in their domain, working together seamlessly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{agent.name}</h3>
                      <p className="text-cyan-400 text-sm">{agent.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 mb-6 leading-relaxed">{agent.description}</p>

                  {/* Capabilities */}
                  <div className="grid grid-cols-2 gap-3">
                    {agent.capabilities.map((cap, i) => {
                      const CapIcon = cap.icon;
                      return (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                          <CapIcon className="w-4 h-4 text-cyan-400 mt-0.5" />
                          <div>
                            <div className="text-white text-sm font-medium">{cap.title}</div>
                            <div className="text-white/40 text-xs">{cap.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works / Use Cases */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-6">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See How Teams Use omniclawd
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From feature development to release management, see how agents collaborate on real tasks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-white/60 text-sm">{useCase.description}</p>
                </div>

                {/* Workflow */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {useCase.workflow.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <span className="text-cyan-400 text-sm font-medium">{step.agent}: </span>
                          <span className="text-white/70 text-sm">{step.action}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Example Command */}
                  <div className="p-4 rounded-lg bg-[#0d0d14] border border-white/5">
                    <div className="text-white/40 text-xs mb-2">Example input:</div>
                    <code className="text-cyan-400 text-sm font-mono">{useCase.example}</code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Agents Collaborate
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A unified workflow where each agent contributes their expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Workflow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: 'You Describe', desc: 'Tell omniclawd what you want in plain language', icon: MessageCircle, color: 'from-white/20 to-white/10' },
                { step: 2, title: 'Architect Plans', desc: 'Breaks down into tasks and assigns to agents', icon: Brain, color: 'from-cyan-500 to-purple-600' },
                { step: 3, title: 'Agents Execute', desc: 'Engineer codes, Auditor reviews, Growth documents', icon: Sparkles, color: 'from-blue-500 to-cyan-500' },
                { step: 4, title: 'You Review', desc: 'Approve changes, merge PRs, ship to production', icon: CheckCircle2, color: 'from-green-500 to-emerald-500' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="glass-card p-6 text-center h-full">
                      <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-cyan-400 text-xs font-medium mb-2">Step {item.step}</div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>

                    {/* Arrow */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-white/20" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-6">
              Native Access
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connects to Your Entire Stack
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Direct access to your development ecosystem. No proxies, no middleware.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 text-center hover:border-white/20 transition-colors"
                >
                  <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <h4 className="text-white font-medium text-sm">{integration.name}</h4>
                  <p className="text-white/40 text-xs">{integration.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for Performance
                <br />
                <span className="text-white/60">and Privacy</span>
              </h2>

              <p className="text-white/60 mb-8 leading-relaxed">
                omniclawd runs entirely on your machine. No cloud calls, no data leaving your
                infrastructure, no network latency. Your code stays private while you get
                instant responses.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Local Execution', desc: 'All processing happens on your hardware' },
                  { title: 'Zero Data Transmission', desc: 'Your code never touches external servers' },
                  { title: 'Air-Gap Compatible', desc: 'Works in fully isolated environments' },
                  { title: 'Enterprise Ready', desc: 'SOC2 and HIPAA compliance support' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">{item.title}</div>
                      <div className="text-white/50 text-sm">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative glass-card p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Zap, label: 'Latency', value: '< 10ms' },
                    { icon: Server, label: 'Deployment', value: 'On-Prem' },
                    { icon: Lock, label: 'Encryption', value: 'AES-256' },
                    { icon: Clock, label: 'Uptime', value: '24/7' },
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center p-4 rounded-xl bg-white/5">
                        <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-white/40 text-sm">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Deploy Your Squad?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Install omniclawd and start building in minutes. No cloud accounts, no complex setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary flex items-center justify-center gap-2">
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/docs" className="btn-secondary flex items-center justify-center gap-2">
                Read Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Features;
