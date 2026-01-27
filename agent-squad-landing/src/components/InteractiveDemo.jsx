import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, Terminal, Brain, Code2, Shield, TrendingUp,
  Sparkles, Send, RotateCcw, ChevronRight, Loader2,
  CheckCircle2, FileCode, GitBranch, Zap
} from 'lucide-react';

const demoScenarios = [
  {
    id: 'auth',
    title: 'Build Authentication',
    command: 'Implement user authentication with JWT',
    icon: Shield,
    color: 'from-cyan-500 to-teal-500'
  },
  {
    id: 'api',
    title: 'Create REST API',
    command: 'Create a REST API for user management',
    icon: Code2,
    color: 'from-sky-500 to-cyan-500'
  },
  {
    id: 'refactor',
    title: 'Refactor Code',
    command: 'Refactor the payment module for better performance',
    icon: GitBranch,
    color: 'from-teal-500 to-emerald-500'
  },
  {
    id: 'docs',
    title: 'Generate Docs',
    command: 'Generate API documentation for all endpoints',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-500'
  }
];

const agentResponses = {
  auth: [
    { agent: 'The Architect', color: 'text-blue-400', message: 'Analyzing authentication requirements...', delay: 800 },
    { agent: 'The Architect', color: 'text-blue-400', message: 'Delegating to Engineer: JWT setup, user model, endpoints', delay: 1500 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Creating User model with bcrypt password hashing...', delay: 2200 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Implementing JWT token generation and validation...', delay: 3000 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Building /auth/login and /auth/register endpoints...', delay: 3800 },
    { agent: 'The Auditor', color: 'text-amber-400', message: 'Security scan initiated... Checking for vulnerabilities...', delay: 4500 },
    { agent: 'The Auditor', color: 'text-amber-400', message: 'Verified: Password hashing, token expiry, rate limiting', delay: 5200 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Writing unit tests for auth module (12 test cases)...', delay: 5900 },
    { agent: 'The Architect', color: 'text-blue-400', message: 'Task completed! PR #142 ready for review', delay: 6600, final: true }
  ],
  api: [
    { agent: 'The Architect', color: 'text-blue-400', message: 'Designing REST API structure for user management...', delay: 800 },
    { agent: 'The Architect', color: 'text-blue-400', message: 'Endpoints: GET /users, POST /users, PUT /users/:id, DELETE /users/:id', delay: 1600 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Setting up Express router with validation middleware...', delay: 2400 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Implementing CRUD operations with Prisma ORM...', delay: 3200 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Adding pagination, filtering, and sorting support...', delay: 4000 },
    { agent: 'The Auditor', color: 'text-amber-400', message: 'Validating input sanitization and SQL injection prevention...', delay: 4800 },
    { agent: 'Growth Hacker', color: 'text-purple-400', message: 'Generating OpenAPI 3.0 specification...', delay: 5500 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'All 18 API tests passing. Coverage: 94%', delay: 6200 },
    { agent: 'The Architect', color: 'text-blue-400', message: 'API ready! Documentation at /api/docs', delay: 6900, final: true }
  ],
  refactor: [
    { agent: 'The Architect', color: 'text-blue-400', message: 'Analyzing payment module... Found 847 lines across 12 files', delay: 800 },
    { agent: 'The Architect', color: 'text-blue-400', message: 'Identified bottlenecks: N+1 queries, synchronous calls, no caching', delay: 1700 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Refactoring database queries with eager loading...', delay: 2500 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Converting payment processing to async/await pattern...', delay: 3300 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'Implementing Redis caching for payment methods...', delay: 4100 },
    { agent: 'The Auditor', color: 'text-amber-400', message: 'Running performance benchmarks...', delay: 4900 },
    { agent: 'The Auditor', color: 'text-amber-400', message: 'Result: 73% faster response time, 45% less memory usage', delay: 5700 },
    { agent: 'The Engineer', color: 'text-emerald-400', message: 'All existing tests passing. No breaking changes.', delay: 6400 },
    { agent: 'The Architect', color: 'text-blue-400', message: 'Refactoring complete! Performance optimized', delay: 7100, final: true }
  ],
  docs: [
    { agent: 'The Architect', color: 'text-blue-400', message: 'Scanning codebase for API endpoints...', delay: 800 },
    { agent: 'The Architect', color: 'text-blue-400', message: 'Found 34 endpoints across 8 modules', delay: 1500 },
    { agent: 'Growth Hacker', color: 'text-purple-400', message: 'Extracting JSDoc comments and type definitions...', delay: 2200 },
    { agent: 'Growth Hacker', color: 'text-purple-400', message: 'Generating request/response schemas...', delay: 3000 },
    { agent: 'Growth Hacker', color: 'text-purple-400', message: 'Creating example requests with realistic data...', delay: 3800 },
    { agent: 'Growth Hacker', color: 'text-purple-400', message: 'Building interactive Swagger UI documentation...', delay: 4600 },
    { agent: 'The Auditor', color: 'text-amber-400', message: 'Validating documentation accuracy against codebase...', delay: 5300 },
    { agent: 'Growth Hacker', color: 'text-purple-400', message: 'Generating markdown docs for GitHub wiki...', delay: 6000 },
    { agent: 'The Architect', color: 'text-blue-400', message: 'Documentation complete! 34 endpoints documented', delay: 6700, final: true }
  ]
};

const InteractiveDemo = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [customCommand, setCustomCommand] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const terminalRef = useRef(null);

  const resetDemo = () => {
    setIsRunning(false);
    setMessages([]);
    setCurrentMessageIndex(0);
    setShowCompletion(false);
    setSelectedScenario(null);
    setCustomCommand('');
  };

  const runScenario = (scenarioId) => {
    const scenario = demoScenarios.find(s => s.id === scenarioId);
    if (!scenario) return;

    setSelectedScenario(scenario);
    setCustomCommand(scenario.command);
    setIsRunning(true);
    setMessages([]);
    setCurrentMessageIndex(0);
    setShowCompletion(false);
  };

  const runCustomCommand = () => {
    if (!customCommand.trim() || isRunning) return;

    // Use a random scenario's responses for custom commands
    const randomScenario = demoScenarios[Math.floor(Math.random() * demoScenarios.length)];
    setSelectedScenario({ ...randomScenario, command: customCommand });
    setIsRunning(true);
    setMessages([]);
    setCurrentMessageIndex(0);
    setShowCompletion(false);
  };

  useEffect(() => {
    if (!isRunning || !selectedScenario) return;

    const responses = agentResponses[selectedScenario.id] || agentResponses.auth;

    if (currentMessageIndex < responses.length) {
      const currentResponse = responses[currentMessageIndex];
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, currentResponse]);
        setCurrentMessageIndex(prev => prev + 1);

        if (currentResponse.final) {
          setTimeout(() => {
            setShowCompletion(true);
            setIsRunning(false);
          }, 500);
        }
      }, currentMessageIndex === 0 ? currentResponse.delay : responses[currentMessageIndex].delay - responses[currentMessageIndex - 1].delay);

      return () => clearTimeout(timer);
    }
  }, [isRunning, currentMessageIndex, selectedScenario]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section id="demo" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-400 text-sm font-medium mb-4 block">See It In Action</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Watch Your Squad<br />
            <span className="text-zinc-500">Collaborate.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Experience how the C-Suite agents work together autonomously. Select a scenario or type your own command.
          </p>
        </motion.div>

        {/* Demo Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {demoScenarios.map((scenario) => {
            const Icon = scenario.icon;
            const isSelected = selectedScenario?.id === scenario.id;

            return (
              <button
                key={scenario.id}
                onClick={() => !isRunning && runScenario(scenario.id)}
                disabled={isRunning}
                className={`p-4 rounded-xl border transition-all text-left ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-500/50'
                    : 'bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/10'
                } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${scenario.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-medium text-sm mb-1">{scenario.title}</h4>
                <p className="text-white/50 text-xs line-clamp-2">{scenario.command}</p>
              </button>
            );
          })}
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 via-teal-600/10 to-cyan-600/20 rounded-3xl blur-2xl" />

          {/* Terminal Window */}
          <div className="relative bg-[#0a0f1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
                <Terminal className="w-4 h-4" />
                omniclawd demo
              </div>
              <button
                onClick={resetDemo}
                className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-white/40 hover:text-white"
                title="Reset Demo"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Command Input */}
            <div className="px-4 py-3 border-b border-white/5 bg-[#0d1420]">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-mono text-sm">$</span>
                <input
                  type="text"
                  value={customCommand}
                  onChange={(e) => setCustomCommand(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && runCustomCommand()}
                  placeholder="Type a command or select a scenario above..."
                  disabled={isRunning}
                  className="flex-1 bg-transparent text-white/90 font-mono text-sm placeholder-white/30 outline-none"
                />
                <button
                  onClick={runCustomCommand}
                  disabled={isRunning || !customCommand.trim()}
                  className={`p-2 rounded-lg transition-all ${
                    isRunning || !customCommand.trim()
                      ? 'bg-white/5 text-white/30 cursor-not-allowed'
                      : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                  }`}
                >
                  {isRunning ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalRef}
              className="p-4 font-mono text-sm min-h-[350px] max-h-[350px] overflow-y-auto"
            >
              {messages.length === 0 && !isRunning ? (
                <div className="flex flex-col items-center justify-center h-full text-white/30">
                  <Brain className="w-12 h-12 mb-4 opacity-50" />
                  <p className="text-center">
                    Select a scenario above or type a custom command
                    <br />
                    <span className="text-xs">Press Enter or click Send to start</span>
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {/* Initial command display */}
                  {selectedScenario && (
                    <div className="text-white/50 mb-4">
                      <span className="text-cyan-400">$</span> omniclawd task "{selectedScenario.command}"
                    </div>
                  )}

                  {/* Agent messages */}
                  <AnimatePresence>
                    {messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-2 text-xs leading-relaxed"
                      >
                        <span className="text-white/30 shrink-0 w-20">
                          [{new Date().toLocaleTimeString('en-US', { hour12: false })}]
                        </span>
                        <span className={`font-semibold shrink-0 w-20 ${msg.color}`}>
                          {msg.agent}:
                        </span>
                        <span className="text-white/70">{msg.message}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing indicator */}
                  {isRunning && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-white/40 text-xs mt-2"
                    >
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Processing...</span>
                    </motion.div>
                  )}

                  {/* Completion message */}
                  {showCompletion && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Task Completed Successfully!</p>
                          <p className="text-white/50 text-xs">All agents finished their work. Ready for next task.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Cursor */}
              {(isRunning || messages.length > 0) && !showCompletion && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-cyan-500 ml-1"
                />
              )}
            </div>

            {/* Stats Bar */}
            <div className="px-4 py-3 bg-[#111827] border-t border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-white/40">
                  <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
                  {isRunning ? 'Running' : 'Ready'}
                </div>
                <div className="text-white/30">|</div>
                <div className="flex items-center gap-1 text-white/40">
                  <Zap className="w-3 h-3" />
                  <span>4 Agents Active</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/40">
                <span className="text-white/70">Local Execution</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features below demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: Terminal, title: 'Natural Language', desc: 'Type any business task in plain English' },
            { icon: Brain, title: 'C-Suite Collaboration', desc: 'Specialized agents work together autonomously' },
            { icon: Shield, title: 'Your Infrastructure', desc: 'Everything runs locally, complete data sovereignty' }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="p-2 rounded-lg bg-zinc-800">
                  <Icon className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                  <p className="text-zinc-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
