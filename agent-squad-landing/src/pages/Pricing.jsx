import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check, X, Zap, Building2, Rocket,
  ArrowRight, HelpCircle, Shield, Clock,
  Users, Headphones, Server, Brain,
  Code2, TrendingUp, Lock, Sparkles,
  Calculator, Gift, CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const plans = [
  {
    name: 'Starter',
    description: 'For individual developers exploring AI-assisted development.',
    price: { monthly: 49, yearly: 39 },
    icon: Rocket,
    color: 'from-orange-500 to-orange-500',
    popular: false,
    features: [
      { text: '2 Active Projects', included: true },
      { text: 'All 4 Agents', included: true },
      { text: '10,000 Tasks/month', included: true },
      { text: 'Basic Analytics', included: true },
      { text: 'Community Support', included: true },
      { text: 'Email Notifications', included: true },
      { text: 'Priority Support', included: false },
      { text: 'Custom Integrations', included: false },
      { text: 'Team Collaboration', included: false },
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'btn-secondary'
  },
  {
    name: 'Professional',
    description: 'For teams that need more power and collaboration features.',
    price: { monthly: 149, yearly: 119 },
    icon: Zap,
    color: 'from-orange-500 to-orange-600',
    popular: true,
    features: [
      { text: '10 Active Projects', included: true },
      { text: 'All 4 Agents', included: true },
      { text: '100,000 Tasks/month', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Priority Email Support', included: true },
      { text: 'Slack & Discord Alerts', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'Team Collaboration (5 seats)', included: true },
      { text: 'SLA Guarantee', included: false },
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'btn-primary'
  },
  {
    name: 'Enterprise',
    description: 'For organizations requiring dedicated support and compliance.',
    price: { monthly: 'Custom', yearly: 'Custom' },
    icon: Building2,
    color: 'from-orange-500 to-orange-500',
    popular: false,
    features: [
      { text: 'Unlimited Projects', included: true },
      { text: 'All 4 Agents', included: true },
      { text: 'Unlimited Tasks', included: true },
      { text: 'Custom Analytics & Reports', included: true },
      { text: '24/7 Dedicated Support', included: true },
      { text: 'All Notification Channels', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'Unlimited Team Seats', included: true },
      { text: '99.9% SLA Guarantee', included: true },
    ],
    cta: 'Contact Sales',
    ctaStyle: 'btn-secondary'
  }
];

const comparisonFeatures = [
  { category: 'Usage', features: [
    { name: 'Active Projects', starter: '2', professional: '10', enterprise: 'Unlimited' },
    { name: 'Monthly Tasks', starter: '10,000', professional: '100,000', enterprise: 'Unlimited' },
    { name: 'Team Seats', starter: '1', professional: '5', enterprise: 'Unlimited' },
    { name: 'Storage', starter: '5 GB', professional: '50 GB', enterprise: 'Unlimited' },
  ]},
  { category: 'Features', features: [
    { name: 'All 4 Agents', starter: true, professional: true, enterprise: true },
    { name: 'Custom Agent Behaviors', starter: false, professional: true, enterprise: true },
    { name: 'Custom Integrations', starter: false, professional: true, enterprise: true },
    { name: 'API Access', starter: 'Read-only', professional: 'Full', enterprise: 'Full + Webhooks' },
  ]},
  { category: 'Support', features: [
    { name: 'Support Channel', starter: 'Community', professional: 'Email', enterprise: 'Dedicated' },
    { name: 'Response Time', starter: '48h', professional: '24h', enterprise: '< 1h' },
    { name: 'Onboarding', starter: 'Self-serve', professional: 'Guided', enterprise: 'White-glove' },
    { name: 'SLA', starter: false, professional: false, enterprise: '99.9%' },
  ]},
  { category: 'Security', features: [
    { name: 'Data Encryption', starter: true, professional: true, enterprise: true },
    { name: 'Audit Logs', starter: '7 days', professional: '90 days', enterprise: 'Unlimited' },
    { name: 'SSO/SAML', starter: false, professional: false, enterprise: true },
    { name: 'Custom Data Retention', starter: false, professional: false, enterprise: true },
  ]},
];

const faqs = [
  {
    question: 'What counts as a "task"?',
    answer: 'A task is any discrete action an agent performs: writing a function, running a test, generating a changelog entry, or scanning for vulnerabilities. Complex operations like "build a login system" will be broken into multiple tasks by the Architect.'
  },
  {
    question: 'Can I try clawmolty before purchasing?',
    answer: 'Yes! All plans include a 14-day free trial with full access to every feature. No credit card required. Start building immediately and only pay when you\'re convinced.'
  },
  {
    question: 'What happens if I exceed my task limit?',
    answer: 'We\'ll notify you at 80% usage. If you exceed the limit, agents will pause until the next billing cycle. You can upgrade mid-cycle to continue working, with prorated billing.'
  },
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Absolutely. Upgrades are immediate with prorated billing. Downgrades take effect at your next billing cycle. No penalties or hidden fees.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes. We offer a 30-day money-back guarantee on all paid plans. If clawmolty isn\'t right for you, contact support for a full refund—no questions asked.'
  },
  {
    question: 'Is my code secure with clawmolty?',
    answer: 'Your code never leaves your machine. clawmolty runs 100% locally. We don\'t have access to your codebase, credentials, or any project data. Everything stays on-premise.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for Enterprise customers. All payments are processed securely via Stripe.'
  },
  {
    question: 'Do you offer discounts for startups or open source?',
    answer: 'Yes! We offer 50% off for verified startups (under $1M funding) and free access for active open source maintainers. Contact us to apply.'
  }
];

const addOns = [
  { name: 'Additional Projects', price: '$10/project/mo', desc: 'Add more active projects to any plan' },
  { name: 'Extra Task Quota', price: '$20/50K tasks', desc: 'One-time purchase, never expires' },
  { name: 'Priority Support', price: '$49/mo', desc: 'Get 4-hour response time on Starter' },
  { name: 'Extended Audit Logs', price: '$29/mo', desc: 'Keep logs for 1 year on any plan' },
];

const guarantees = [
  { icon: Gift, title: '14-Day Free Trial', desc: 'Full access, no credit card required' },
  { icon: CreditCard, title: '30-Day Money Back', desc: 'Not satisfied? Full refund, no questions' },
  { icon: Lock, title: '100% Local', desc: 'Your code never leaves your machine' },
  { icon: Headphones, title: 'Real Support', desc: 'Humans who actually help, not chatbots' },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,211,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,211,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              Simple, Transparent Pricing
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Start Free,
              <br />
              <span className="text-white/60">Scale as You Grow</span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
              All plans include a 14-day free trial. No credit card required.
              Cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1.5 rounded-xl bg-white/5 border border-white/10">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-orange-500 text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-orange-500 text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Yearly
                <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const price = plan.price[billingCycle];

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative glass-card p-8 ${
                    plan.popular ? 'border-orange-500/50 shadow-[0_0_30px_rgba(34,211,211,0.15)]' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/60 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    {typeof price === 'number' ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold text-white">${price}</span>
                          <span className="text-white/60">/ month</span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <p className="text-green-400 text-sm mt-2">
                            Billed ${price * 12}/year (save ${(plan.price.monthly - price) * 12})
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-4xl font-bold text-white">{price}</div>
                    )}
                  </div>

                  {/* CTA */}
                  <button className={`w-full mb-8 ${plan.ctaStyle} flex items-center justify-center gap-2`}>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-white/20 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-white/80' : 'text-white/40'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Compare Plans in Detail</h2>
            <p className="text-white/60">See exactly what's included in each plan.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/60 font-medium w-1/4">Feature</th>
                  <th className="text-center p-4 text-white font-medium">
                    <div className="flex flex-col items-center">
                      <Rocket className="w-5 h-5 text-orange-400 mb-1" />
                      Starter
                    </div>
                  </th>
                  <th className="text-center p-4 text-white font-medium bg-orange-500/10">
                    <div className="flex flex-col items-center">
                      <Zap className="w-5 h-5 text-orange-400 mb-1" />
                      Professional
                    </div>
                  </th>
                  <th className="text-center p-4 text-white font-medium">
                    <div className="flex flex-col items-center">
                      <Building2 className="w-5 h-5 text-orange-400 mb-1" />
                      Enterprise
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((section, sectionIndex) => (
                  <>
                    <tr key={`section-${sectionIndex}`} className="bg-white/5">
                      <td colSpan={4} className="p-3 text-white/40 text-xs uppercase tracking-wider font-medium">
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feature, index) => (
                      <tr key={`${section.category}-${index}`} className="border-b border-white/5 last:border-0">
                        <td className="p-4 text-white/80 text-sm">{feature.name}</td>
                        <td className="p-4 text-center">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-white/20 mx-auto" />
                            )
                          ) : (
                            <span className="text-white/70 text-sm">{feature.starter}</span>
                          )}
                        </td>
                        <td className="p-4 text-center bg-orange-500/5">
                          {typeof feature.professional === 'boolean' ? (
                            feature.professional ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-white/20 mx-auto" />
                            )
                          ) : (
                            <span className="text-white/70 text-sm">{feature.professional}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-white/20 mx-auto" />
                            )
                          ) : (
                            <span className="text-white/70 text-sm">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Optional Add-Ons</h2>
            <p className="text-white/60">Customize your plan with additional features.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-5"
              >
                <h4 className="text-white font-medium mb-1">{addon.name}</h4>
                <p className="text-orange-400 font-bold mb-2">{addon.price}</p>
                <p className="text-white/50 text-sm">{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Every Plan Includes</h2>
            <p className="text-white/60">Core features available to all clawmolty users.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'Architect Agent', desc: 'Strategic planning and task orchestration' },
              { icon: Code2, title: 'Engineer Agent', desc: 'Production-quality code generation' },
              { icon: TrendingUp, title: 'Growth Agent', desc: 'Changelogs, docs, and content' },
              { icon: Shield, title: 'Auditor Agent', desc: 'Security scanning and compliance' },
              { icon: Server, title: 'Local Execution', desc: 'Runs 100% on your machine' },
              { icon: Lock, title: 'Full Privacy', desc: 'Your code never leaves' },
              { icon: Clock, title: '24/7 Availability', desc: 'No cloud downtime' },
              { icon: Sparkles, title: 'Regular Updates', desc: 'New features and improvements' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{feature.title}</h4>
                    <p className="text-white/50 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60">
              Everything you need to know about pricing and billing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <Building2 className="w-12 h-12 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Enterprise Features?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Get unlimited usage, SSO/SAML, custom SLA, dedicated support, and on-premise
              deployment options for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary flex items-center justify-center gap-2">
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="btn-secondary flex items-center justify-center gap-2">
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 border-t border-white/5">
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
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
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

export default Pricing;
