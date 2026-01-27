import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Terminal, Brain, Code2, Shield, TrendingUp,
  Send, RotateCcw, Loader2, CheckCircle2,
  Sun, Rocket, Search, Receipt, FileText, Server,
  ArrowLeft, Clock, Zap, Play, Pause, ChevronRight,
  File, Folder, Copy, Check, Sparkles, Users,
  Mail, Twitter, BarChart3, GitBranch, MessageSquare
} from 'lucide-react';
import Footer from '../components/Footer';

// Business-focused scenarios aligned with C-Suite agents
const scenarios = [
  {
    id: 'standup',
    title: 'Morning Standup',
    icon: Sun,
    cmd: 'Run daily standup and send briefing to Telegram',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    category: 'Daily Operations'
  },
  {
    id: 'launch',
    title: 'Product Launch',
    icon: Rocket,
    cmd: 'Launch new feature with marketing and compliance review',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    category: 'Business'
  },
  {
    id: 'research',
    title: 'Market Research',
    icon: Search,
    cmd: 'Research competitor pricing and market trends',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    category: 'Growth'
  },
  {
    id: 'invoice',
    title: 'Invoice Client',
    icon: Receipt,
    cmd: 'Generate invoice for Project Alpha and send to client',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    category: 'Finance'
  },
  {
    id: 'content',
    title: 'Content Campaign',
    icon: FileText,
    cmd: 'Create blog post and social media campaign for Q1',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    category: 'Marketing'
  },
  {
    id: 'deploy',
    title: 'Deploy Feature',
    icon: Server,
    cmd: 'Deploy authentication module to production',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    category: 'Engineering'
  },
];

// Agent responses for each scenario
const responses = {
  standup: [
    { agent: 'The Architect', msg: 'Initiating daily standup protocol...', type: 'thinking' },
    { agent: 'The Architect', msg: 'Checking GitHub for overnight activity...', type: 'scan', file: 'github/pulls' },
    { agent: 'The Architect', msg: 'Reviewing scheduled tasks and deadlines...', type: 'scan', file: 'calendar/today' },
    { agent: 'The Engineer', msg: 'CI/CD Status: All pipelines green. 3 PRs merged overnight.', type: 'result' },
    { agent: 'The Growth Hacker', msg: 'Social metrics: +127 followers, 2 viral posts, 3 DMs pending.', type: 'result' },
    { agent: 'The Auditor', msg: 'Finance update: 2 invoices paid ($4,200), 1 overdue reminder sent.', type: 'result' },
    { agent: 'The Architect', msg: 'Compiling daily briefing...', type: 'code', file: 'reports/standup.md' },
    { agent: 'The Architect', msg: 'Daily Standup sent to Telegram. No blockers detected.', type: 'done' },
  ],
  launch: [
    { agent: 'The Architect', msg: 'Initiating product launch sequence...', type: 'thinking' },
    { agent: 'The Architect', msg: 'Coordinating cross-agent launch plan...', type: 'plan' },
    { agent: 'The Engineer', msg: 'Running final test suite... 47/47 passing', type: 'scan', file: 'tests/integration' },
    { agent: 'The Engineer', msg: 'Building production bundle...', type: 'code', file: 'dist/bundle.js' },
    { agent: 'The Auditor', msg: 'Compliance check: GDPR consent flows verified', type: 'scan', file: 'legal/gdpr.md' },
    { agent: 'The Auditor', msg: 'Terms of Service updated for new feature', type: 'code', file: 'legal/tos.md' },
    { agent: 'The Engineer', msg: 'Deploying to production servers...', type: 'code', file: 'deploy/prod.yaml' },
    { agent: 'The Growth Hacker', msg: 'Publishing launch blog post...', type: 'code', file: 'blog/launch-post.md' },
    { agent: 'The Growth Hacker', msg: 'Scheduling social media campaign across 3 platforms', type: 'code', file: 'marketing/social.json' },
    { agent: 'The Architect', msg: 'Product launched successfully! All systems operational.', type: 'done' },
  ],
  research: [
    { agent: 'The Growth Hacker', msg: 'Starting competitive analysis...', type: 'thinking' },
    { agent: 'The Growth Hacker', msg: 'Browsing competitor websites...', type: 'scan', file: 'browser/competitors' },
    { agent: 'The Growth Hacker', msg: 'Extracting pricing data from 5 competitors...', type: 'scan' },
    { agent: 'The Growth Hacker', msg: 'Analyzing Twitter/X mentions and sentiment...', type: 'scan', file: 'twitter/mentions' },
    { agent: 'The Growth Hacker', msg: 'Checking Google Trends for market shifts...', type: 'scan', file: 'trends/keywords' },
    { agent: 'The Auditor', msg: 'Cross-referencing with industry reports...', type: 'scan', file: 'reports/industry.pdf' },
    { agent: 'The Growth Hacker', msg: 'Generating market intelligence report...', type: 'code', file: 'reports/market-q1.md' },
    { agent: 'The Growth Hacker', msg: 'Key insight: Competitors avg. price $49/mo. Our opportunity: $39/mo tier.', type: 'result' },
    { agent: 'The Architect', msg: 'Market research complete. Report saved and sent to Slack.', type: 'done' },
  ],
  invoice: [
    { agent: 'The Auditor', msg: 'Initiating invoice generation...', type: 'thinking' },
    { agent: 'The Auditor', msg: 'Fetching Project Alpha billing data...', type: 'scan', file: 'projects/alpha/hours' },
    { agent: 'The Auditor', msg: 'Calculating: 47 hours @ $150/hr = $7,050', type: 'result' },
    { agent: 'The Auditor', msg: 'Applying 10% retainer discount...', type: 'result' },
    { agent: 'The Auditor', msg: 'Generating PDF invoice...', type: 'code', file: 'invoices/INV-2024-042.pdf' },
    { agent: 'The Auditor', msg: 'Creating Stripe payment link...', type: 'code', file: 'stripe/payment-link' },
    { agent: 'The Auditor', msg: 'Drafting email with invoice attached...', type: 'code', file: 'emails/invoice-042.html' },
    { agent: 'The Auditor', msg: 'Invoice #INV-2024-042 sent to client@company.com ($6,345)', type: 'done' },
  ],
  content: [
    { agent: 'The Growth Hacker', msg: 'Planning Q1 content campaign...', type: 'thinking' },
    { agent: 'The Growth Hacker', msg: 'Analyzing top-performing content from Q4...', type: 'scan', file: 'analytics/content' },
    { agent: 'The Growth Hacker', msg: 'Researching trending topics in our niche...', type: 'scan', file: 'trends/topics' },
    { agent: 'The Growth Hacker', msg: 'Writing blog post: "5 Ways AI Agents Transform Business"...', type: 'code', file: 'blog/ai-agents-transform.md' },
    { agent: 'The Growth Hacker', msg: 'Optimizing for SEO keywords...', type: 'code', file: 'seo/keywords.json' },
    { agent: 'The Growth Hacker', msg: 'Creating Twitter thread (8 tweets)...', type: 'code', file: 'social/twitter-thread.md' },
    { agent: 'The Growth Hacker', msg: 'Designing LinkedIn carousel...', type: 'code', file: 'social/linkedin-carousel.json' },
    { agent: 'The Auditor', msg: 'Reviewing content for compliance and legal...', type: 'scan' },
    { agent: 'The Growth Hacker', msg: 'Scheduling posts for optimal engagement times', type: 'result' },
    { agent: 'The Architect', msg: 'Content campaign ready. 1 blog + 12 social posts scheduled.', type: 'done' },
  ],
  deploy: [
    { agent: 'The Architect', msg: 'Initiating deployment sequence...', type: 'thinking' },
    { agent: 'The Architect', msg: 'Delegating to Engineer for code deployment', type: 'plan' },
    { agent: 'The Engineer', msg: 'Pulling latest from main branch...', type: 'code', file: 'git/pull' },
    { agent: 'The Engineer', msg: 'Running pre-deploy checks...', type: 'scan', file: 'scripts/pre-deploy.sh' },
    { agent: 'The Engineer', msg: 'Building Docker image...', type: 'code', file: 'docker/Dockerfile' },
    { agent: 'The Auditor', msg: 'Security scan: No vulnerabilities detected', type: 'scan', file: 'security/scan.log' },
    { agent: 'The Engineer', msg: 'Pushing to container registry...', type: 'code', file: 'registry/push' },
    { agent: 'The Engineer', msg: 'Rolling out to Kubernetes cluster...', type: 'code', file: 'k8s/deployment.yaml' },
    { agent: 'The Engineer', msg: 'Health checks passing. Zero-downtime deployment complete.', type: 'result' },
    { agent: 'The Architect', msg: 'Auth module deployed to production. Monitoring active.', type: 'done' },
  ],
};

// Output examples for each scenario
const outputExamples = {
  standup: `# Daily Standup - January 27, 2025

## Overnight Activity
- 3 PRs merged (#141, #142, #143)
- CI/CD: All green
- No failed deployments

## Team Updates
**Engineering:** Auth module 90% complete
**Growth:** Blog post published, +127 followers
**Finance:** $4,200 received, 1 overdue

## Today's Priorities
1. Complete auth module tests
2. Review Q1 marketing plan
3. Send overdue invoice reminder

## Blockers
None detected.

---
*Generated by OmniMolty at 08:00 AM*`,
  launch: `# Product Launch Checklist

## Pre-Launch ✅
- [x] All tests passing (47/47)
- [x] Security audit complete
- [x] GDPR compliance verified
- [x] ToS updated

## Launch ✅
- [x] Production build deployed
- [x] Database migrations applied
- [x] CDN cache cleared

## Post-Launch ✅
- [x] Blog post published
- [x] Social campaign scheduled
- [x] Monitoring dashboards active

**Status: LAUNCHED**
*Deployment time: 4.2 seconds*`,
  research: `# Market Intelligence Report

## Competitor Pricing Analysis

| Competitor | Basic | Pro | Enterprise |
|-----------|-------|-----|------------|
| CompA     | $29   | $79 | $199       |
| CompB     | $39   | $99 | Custom     |
| CompC     | $49   | $89 | $249       |
| **Avg**   | $39   | $89 | $224       |

## Opportunity
- Sweet spot: $39/mo (undercuts avg)
- Enterprise gap: Custom pricing

## Sentiment Analysis
- Twitter: 72% positive
- Reddit: 68% positive
- G2 Reviews: 4.2/5 avg

## Recommendation
Launch $39/mo tier to capture
price-sensitive segment.`,
  invoice: `INVOICE #INV-2024-042

Bill To: Client Company Inc.
Project: Project Alpha

---------------------------------
Description          Hours    Rate
---------------------------------
Development           32    $150
Code Review            8    $150
Meetings               7    $150
---------------------------------
Subtotal             47    $7,050
Retainer Discount        -$705
---------------------------------
TOTAL                       $6,345

Payment Link: pay.stripe.com/xxx

Due Date: February 10, 2025
Terms: Net 14`,
  content: `# Content Calendar - Q1

## Blog Posts
1. "5 Ways AI Agents Transform Business"
   - Status: Ready
   - Publish: Jan 28
   - Keywords: AI agents, automation

## Social Media
**Twitter Thread (8 tweets)**
- Hook: "We replaced 3 tools..."
- Scheduled: Jan 28, 9:00 AM EST

**LinkedIn Carousel**
- Title: "The Future of Work"
- Slides: 7
- Scheduled: Jan 29, 8:00 AM EST

## Metrics Target
- Blog: 2,000 views
- Twitter: 50K impressions
- LinkedIn: 10K reach`,
  deploy: `# Deployment Log

## Auth Module v2.1.0 → Production

[08:42:01] Pulling from main...
[08:42:03] Running pre-deploy checks...
[08:42:15] Building Docker image...
[08:42:47] Security scan: PASSED
[08:42:52] Pushing to registry...
[08:43:01] Rolling out to k8s...
[08:43:05] Pod 1/3 ready
[08:43:07] Pod 2/3 ready
[08:43:09] Pod 3/3 ready
[08:43:10] Health checks: PASSED

✅ Deployment successful
⏱️ Total time: 1m 9s
🔄 Rollback available: v2.0.9`,
};

// Agent configuration with C-Suite styling
const agentConfig = {
  'The Architect': {
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    icon: Brain,
    role: 'CEO / PM',
    status: 'Orchestrating'
  },
  'The Engineer': {
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    icon: Code2,
    role: 'DevOps',
    status: 'Building'
  },
  'The Growth Hacker': {
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    icon: TrendingUp,
    role: 'Marketing',
    status: 'Researching'
  },
  'The Auditor': {
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    icon: Shield,
    role: 'Legal & Finance',
    status: 'Reviewing'
  },
};

const Demo = () => {
  const [scenario, setScenario] = useState(null);
  const [command, setCommand] = useState('');
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [messages, setMessages] = useState([]);
  const [msgIndex, setMsgIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [activeTab, setActiveTab] = useState('terminal');
  const [copied, setCopied] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [activeAgents, setActiveAgents] = useState([]);
  const terminalRef = useRef(null);
  const timerRef = useRef(null);

  const reset = useCallback(() => {
    setRunning(false);
    setPaused(false);
    setMessages([]);
    setMsgIndex(0);
    setDone(false);
    setScenario(null);
    setCommand('');
    setElapsed(0);
    setTypingText('');
    setActiveAgents([]);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const run = useCallback((id) => {
    const s = scenarios.find(x => x.id === id);
    if (!s) return;
    reset();
    setScenario(s);
    setCommand(s.cmd);
    setRunning(true);
    setActiveTab('terminal');

    timerRef.current = setInterval(() => {
      setElapsed(prev => prev + 100);
    }, 100);
  }, [reset]);

  const runCustom = useCallback(() => {
    if (!command.trim() || running) return;
    const random = scenarios[Math.floor(Math.random() * scenarios.length)];
    reset();
    setScenario({ ...random, cmd: command });
    setCommand(command);
    setRunning(true);
    setActiveTab('terminal');

    timerRef.current = setInterval(() => {
      setElapsed(prev => prev + 100);
    }, 100);
  }, [command, running, reset]);

  const togglePause = useCallback(() => {
    setPaused(prev => !prev);
  }, []);

  const copyOutput = useCallback(() => {
    if (scenario && outputExamples[scenario.id]) {
      navigator.clipboard.writeText(outputExamples[scenario.id]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [scenario]);

  // Typing animation for command
  useEffect(() => {
    if (!scenario || typingText === scenario.cmd) return;

    const timer = setTimeout(() => {
      setTypingText(scenario.cmd.slice(0, typingText.length + 1));
    }, 25);

    return () => clearTimeout(timer);
  }, [scenario, typingText]);

  // Message progression
  useEffect(() => {
    if (!running || !scenario || paused) return;
    const res = responses[scenario.id] || responses.standup;

    if (msgIndex < res.length) {
      const delay = res[msgIndex].type === 'done' ? 600 : 800 + Math.random() * 400;
      const timer = setTimeout(() => {
        const newMsg = { ...res[msgIndex], timestamp: new Date() };
        setMessages(prev => [...prev, newMsg]);
        setMsgIndex(prev => prev + 1);

        // Track active agents
        if (!activeAgents.includes(newMsg.agent)) {
          setActiveAgents(prev => [...prev, newMsg.agent]);
        }
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setRunning(false);
      setDone(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [running, msgIndex, scenario, paused, activeAgents]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') reset();
      if (e.key === ' ' && running) {
        e.preventDefault();
        togglePause();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [reset, running, togglePause]);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const tenths = Math.floor((ms % 1000) / 100);
    return `${seconds}.${tenths}s`;
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'thinking': return '💭';
      case 'plan': return '📋';
      case 'code': return '💻';
      case 'scan': return '🔍';
      case 'result': return '📊';
      case 'done': return '✅';
      default: return '→';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <div className="pt-24 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 text-sm font-medium">Autonomous Demo</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
                Watch Your Squad<br />
                <span className="text-zinc-500">Work.</span>
              </h1>
            </div>
            {(running || done) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-4 text-sm"
              >
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono">{formatTime(elapsed)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span className="text-zinc-400">{activeAgents.length}/4 agents</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Scenarios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-zinc-500 text-sm">Choose a business task for your squad</p>
              <p className="text-zinc-600 text-xs">Press Space to pause, Esc to reset</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {scenarios.map((s) => {
                const Icon = s.icon;
                const active = scenario?.id === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => !running && run(s.id)}
                    disabled={running}
                    className={`group p-4 rounded-xl border text-left transition-all ${
                      active
                        ? `${s.bg} border-zinc-700`
                        : 'bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/50'
                    } ${running && !active ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    <div className={`w-9 h-9 rounded-lg ${active ? s.bg : 'bg-zinc-800/50'} flex items-center justify-center mb-3 transition-colors`}>
                      <Icon className={`w-4 h-4 ${active ? s.color : 'text-zinc-500'} transition-colors`} />
                    </div>
                    <span className="text-white text-sm font-medium block mb-1">{s.title}</span>
                    <span className="text-zinc-600 text-xs">{s.category}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Main Demo Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-3 gap-4"
          >
            {/* Terminal - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors cursor-pointer" onClick={reset} />
                      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors cursor-pointer" onClick={togglePause} />
                      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors cursor-pointer" />
                    </div>
                    <span className="text-zinc-500 text-xs font-mono">omnimolty squad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {running && (
                      <button
                        onClick={togglePause}
                        className="p-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors"
                      >
                        {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                      </button>
                    )}
                    <button
                      onClick={reset}
                      className="p-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800/50 bg-zinc-900/50">
                  <span className="text-orange-400 font-mono text-sm">❯</span>
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && runCustom()}
                    placeholder="Tell your squad what to do..."
                    disabled={running}
                    className="flex-1 bg-transparent text-zinc-200 font-mono text-sm placeholder-zinc-600 outline-none"
                  />
                  <button
                    onClick={runCustom}
                    disabled={running || !command.trim()}
                    className={`p-2 rounded-lg transition-all ${
                      running || !command.trim()
                        ? 'text-zinc-700'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {running ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                </div>

                {/* Output */}
                <div ref={terminalRef} className="flex-1 p-4 min-h-[400px] max-h-[500px] overflow-y-auto font-mono text-sm">
                  {messages.length === 0 && !running ? (
                    <div className="flex items-center justify-center h-full text-zinc-600">
                      <div className="text-center">
                        <Terminal className="w-10 h-10 mx-auto mb-4 opacity-30" />
                        <p className="mb-2">Select a business task above</p>
                        <p className="text-xs text-zinc-700">Watch your C-Suite squad collaborate autonomously</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {scenario && (
                        <div className="text-zinc-500 pb-4 border-b border-zinc-800/50">
                          <span className="text-orange-400">❯</span> omnimolty task "{typingText}"
                          {typingText !== scenario.cmd && (
                            <span className="inline-block w-2 h-4 bg-zinc-400 ml-0.5 animate-pulse" />
                          )}
                        </div>
                      )}

                      <AnimatePresence mode="popLayout">
                        {messages.map((m, i) => {
                          const config = agentConfig[m.agent];
                          const Icon = config?.icon || Brain;
                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="flex gap-3"
                            >
                              <div className={`w-8 h-8 rounded-lg ${config?.bg || 'bg-zinc-800'} flex items-center justify-center shrink-0 mt-0.5`}>
                                <Icon className={`w-4 h-4 ${config?.color || 'text-zinc-400'}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`font-medium text-xs ${config?.color || 'text-zinc-400'}`}>
                                    {m.agent}
                                  </span>
                                  <span className="text-zinc-700 text-xs">
                                    {config?.role}
                                  </span>
                                  {m.file && (
                                    <span className="text-zinc-600 text-xs flex items-center gap-1 ml-auto">
                                      <File className="w-3 h-3" />
                                      {m.file}
                                    </span>
                                  )}
                                </div>
                                <p className={`text-sm whitespace-pre-wrap ${m.type === 'done' ? 'text-emerald-400' : 'text-zinc-400'}`}>
                                  {m.type !== 'done' && <span className="mr-2">{getTypeIcon(m.type)}</span>}
                                  {m.msg}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>

                      {running && !paused && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2 text-zinc-500 text-sm"
                        >
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Squad working...</span>
                        </motion.div>
                      )}

                      {paused && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2 text-orange-400 text-sm"
                        >
                          <Pause className="w-4 h-4" />
                          <span>Paused - press Space to continue</span>
                        </motion.div>
                      )}

                      {done && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mt-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                              <p className="text-emerald-400 font-medium">Task completed autonomously</p>
                              <p className="text-zinc-500 text-sm">{activeAgents.length} agents collaborated in {formatTime(elapsed)}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2 border-t border-zinc-800/80 bg-zinc-900 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${running && !paused ? 'bg-orange-400 animate-pulse' : done ? 'bg-emerald-400' : 'bg-zinc-600'}`} />
                      <span className="text-zinc-500">
                        {running && !paused ? 'Autonomous' : paused ? 'Paused' : done ? 'Complete' : 'Idle'}
                      </span>
                    </div>
                  </div>
                  <span className="text-zinc-600">Local execution • Your infrastructure</span>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="space-y-4">
              {/* Agent Status */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-800/80 bg-zinc-900">
                  <span className="text-zinc-400 text-sm font-medium">C-Suite Squad</span>
                </div>
                <div className="p-3 space-y-2">
                  {Object.entries(agentConfig).map(([name, config]) => {
                    const Icon = config.icon;
                    const isActive = activeAgents.includes(name);
                    return (
                      <div
                        key={name}
                        className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${isActive ? config.bg : 'bg-zinc-800/30'}`}
                      >
                        <div className={`w-8 h-8 rounded-lg ${isActive ? config.bg : 'bg-zinc-800'} flex items-center justify-center`}>
                          <Icon className={`w-4 h-4 ${isActive ? config.color : 'text-zinc-600'}`} />
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${isActive ? 'text-white' : 'text-zinc-500'}`}>{name}</p>
                          <p className="text-xs text-zinc-600">{config.role}</p>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-zinc-700'}`} />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Output Panel */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800/80 bg-zinc-900">
                  <span className="text-zinc-400 text-sm font-medium">Output</span>
                  {scenario && outputExamples[scenario.id] && (
                    <button
                      onClick={copyOutput}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  )}
                </div>
                <div className="p-4 max-h-[300px] overflow-auto">
                  {scenario && outputExamples[scenario.id] ? (
                    <pre className="text-xs text-zinc-400 font-mono whitespace-pre-wrap leading-relaxed">
                      {outputExamples[scenario.id]}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center h-32 text-zinc-600 text-sm">
                      <div className="text-center">
                        <FileText className="w-8 h-8 mx-auto mb-2 opacity-30" />
                        <p>Output will appear here</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 pt-8 border-t border-zinc-800/50"
          >
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                { icon: MessageSquare, title: 'Natural Commands', desc: 'Describe any business task' },
                { icon: Users, title: 'C-Suite Squad', desc: '4 specialized AI agents' },
                { icon: Zap, title: 'Autonomous', desc: 'Works without oversight' },
                { icon: Shield, title: 'Your Infrastructure', desc: 'Complete data sovereignty' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-zinc-500" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-medium mb-0.5">{item.title}</h3>
                      <p className="text-zinc-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Demo;
