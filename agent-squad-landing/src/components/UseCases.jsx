import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, ShoppingCart, Building2, Stethoscope,
  GraduationCap, Gamepad2, ArrowRight, Clock,
  CheckCircle2, Code2, TestTube, FileText
} from 'lucide-react';

const useCases = [
  {
    id: 'saas',
    icon: Rocket,
    title: 'SaaS Startups',
    subtitle: 'Ship faster without hiring',
    description: 'Early-stage startups use omniclawd to maintain development velocity without burning through runway on expensive engineering hires. One founder ran a solo SaaS to $50k MRR with omniclawd handling 80% of the coding.',
    metrics: [
      { label: 'Avg time saved', value: '32 hrs/week' },
      { label: 'Bug reduction', value: '47%' },
      { label: 'Deploy frequency', value: '3x faster' }
    ],
    workflow: [
      { step: 'Feature spec written in plain English', icon: FileText },
      { step: 'Architect breaks down into tasks', icon: Code2 },
      { step: 'Engineer implements with tests', icon: TestTube },
      { step: 'Auditor reviews and approves', icon: CheckCircle2 }
    ],
    testimonial: {
      quote: "I went from idea to production in 3 weeks. omniclawd wrote 90% of my backend while I focused on talking to customers.",
      author: 'Marcus Chen',
      role: 'Founder, DataSync.io'
    }
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Teams',
    subtitle: 'Automate the boring stuff',
    description: 'E-commerce engineering teams offload repetitive tasks like inventory sync integrations, payment gateway updates, and CMS migrations to omniclawd while focusing on customer-facing features.',
    metrics: [
      { label: 'Integration time', value: '-65%' },
      { label: 'Incidents reduced', value: '52%' },
      { label: 'Team capacity freed', value: '40%' }
    ],
    workflow: [
      { step: 'Define integration requirements', icon: FileText },
      { step: 'Engineer builds API connectors', icon: Code2 },
      { step: 'Auditor validates data integrity', icon: TestTube },
      { step: 'Growth monitors performance', icon: CheckCircle2 }
    ],
    testimonial: {
      quote: "We integrated 12 new suppliers in one sprint. That would have taken our team 3 months manually.",
      author: 'Sarah Kim',
      role: 'CTO, ModernMart'
    }
  },
  {
    id: 'enterprise',
    icon: Building2,
    title: 'Enterprise DevOps',
    subtitle: 'Scale without complexity',
    description: 'Large organizations deploy omniclawd for internal tooling, CI/CD optimization, and technical debt reduction. On-premise deployment satisfies security requirements while accelerating delivery.',
    metrics: [
      { label: 'CI/CD time', value: '-70%' },
      { label: 'Tech debt cleared', value: '2x faster' },
      { label: 'Compliance audits', value: 'Auto-passed' }
    ],
    workflow: [
      { step: 'Architect analyzes legacy code', icon: FileText },
      { step: 'Engineer refactors systematically', icon: Code2 },
      { step: 'Auditor ensures compliance', icon: TestTube },
      { step: 'Automated documentation', icon: CheckCircle2 }
    ],
    testimonial: {
      quote: "omniclawd helped us modernize a 15-year-old codebase without disrupting production. Security loved the audit trails.",
      author: 'James Morrison',
      role: 'VP Engineering, Fortune 500'
    }
  },
  {
    id: 'healthtech',
    icon: Stethoscope,
    title: 'Healthcare & Fintech',
    subtitle: 'Compliance-first development',
    description: 'Regulated industries require on-premise solutions. omniclawd runs entirely within your security perimeter with HIPAA and SOC2 compliance documentation built into every workflow.',
    metrics: [
      { label: 'Compliance docs', value: 'Auto-generated' },
      { label: 'Audit prep time', value: '-80%' },
      { label: 'Security issues', value: '0 critical' }
    ],
    workflow: [
      { step: 'Compliance requirements defined', icon: FileText },
      { step: 'Engineer implements with controls', icon: Code2 },
      { step: 'Auditor validates HIPAA/SOC2', icon: TestTube },
      { step: 'Auto-generated compliance reports', icon: CheckCircle2 }
    ],
    testimonial: {
      quote: "We passed our SOC2 audit with flying colors. omniclawd's audit trails impressed our assessors.",
      author: 'Dr. Emily Watson',
      role: 'CTO, HealthData Systems'
    }
  }
];

const UseCases = () => {
  const [activeCase, setActiveCase] = useState('saas');
  const currentCase = useCases.find(uc => uc.id === activeCase);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-charcoal-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
            Real-World Applications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for How Teams Actually Work
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            From solo founders to enterprise teams, see how organizations
            are using omniclawd to transform their development process.
          </p>
        </motion.div>

        {/* Use Case Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveCase(uc.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeCase === uc.id
                    ? 'bg-white text-charcoal-900'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {uc.title}
              </button>
            );
          })}
        </div>

        {/* Active Use Case Content */}
        <AnimatePresence mode="wait">
          {currentCase && (
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{currentCase.title}</h3>
                    <p className="text-cyan-300">{currentCase.subtitle}</p>
                  </div>

                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    {currentCase.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {currentCase.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-white/50 text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="glass-card p-6">
                    <p className="text-white/80 italic mb-4">"{currentCase.testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold">
                        {currentCase.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-medium">{currentCase.testimonial.author}</div>
                        <div className="text-white/50 text-sm">{currentCase.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Workflow */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-6">Typical Workflow</h4>
                  <div className="space-y-4">
                    {currentCase.workflow.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <span className="text-white/50 text-xs">Step {index + 1}</span>
                            <p className="text-white">{item.step}</p>
                          </div>
                          {index < currentCase.workflow.length - 1 && (
                            <ArrowRight className="w-5 h-5 text-white/20" />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Time Saved */}
                  <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 border border-cyan-500/20">
                    <div className="flex items-center gap-4">
                      <Clock className="w-8 h-8 text-cyan-400" />
                      <div>
                        <div className="text-white font-semibold">Average time saved per week</div>
                        <div className="text-3xl font-bold text-white">{currentCase.metrics[0].value}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCases;
