import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Book, Rocket, Settings, Code2, Terminal, Shield,
  ChevronRight, Search, ChevronDown, Copy, Check,
  Brain, TrendingUp, Menu, X, Home, FileText,
  Zap, Database, GitBranch, Server, MessageSquare,
  Clock, Users, ArrowLeft, ArrowRight, ExternalLink,
  Sun, Cpu, HardDrive, Mail, CreditCard, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Documentation structure
const docStructure = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Rocket,
    children: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'installation', title: 'Installation' },
      { id: 'quick-start', title: 'Quick Start' },
      { id: 'system-requirements', title: 'System Requirements' },
    ]
  },
  {
    id: 'agents',
    title: 'The C-Suite Squad',
    icon: Users,
    children: [
      { id: 'architect', title: 'The Architect (CEO/PM)' },
      { id: 'engineer', title: 'The Engineer (DevOps)' },
      { id: 'growth-hacker', title: 'The Growth Hacker' },
      { id: 'auditor', title: 'The Auditor (Legal/Finance)' },
      { id: 'agent-communication', title: 'Agent Communication' },
    ]
  },
  {
    id: 'autonomous-loop',
    title: 'Autonomous Loop',
    icon: Zap,
    children: [
      { id: 'proactive-heartbeat', title: 'Proactive Heartbeat' },
      { id: 'morning-briefing', title: 'Morning Briefing' },
      { id: 'cross-agent-tasks', title: 'Cross-Agent Tasks' },
      { id: 'self-correction', title: 'Self-Correction' },
    ]
  },
  {
    id: 'configuration',
    title: 'Configuration',
    icon: Settings,
    children: [
      { id: 'config-file', title: 'Config File (YAML)' },
      { id: 'agent-settings', title: 'Agent Settings' },
      { id: 'integrations', title: 'Integrations' },
      { id: 'notifications', title: 'Notifications' },
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: Server,
    children: [
      { id: 'local-deployment', title: 'Local Deployment' },
      { id: 'mcp-protocol', title: 'MCP Protocol' },
      { id: 'vector-database', title: 'Vector Database' },
      { id: 'hardware-requirements', title: 'Hardware Setup' },
    ]
  },
  {
    id: 'cli',
    title: 'CLI Reference',
    icon: Terminal,
    children: [
      { id: 'cli-commands', title: 'Commands' },
      { id: 'cli-flags', title: 'Flags & Options' },
      { id: 'cli-examples', title: 'Examples' },
    ]
  },
  {
    id: 'api',
    title: 'API Reference',
    icon: Code2,
    children: [
      { id: 'api-overview', title: 'Overview' },
      { id: 'api-authentication', title: 'Authentication' },
      { id: 'api-endpoints', title: 'Endpoints' },
      { id: 'api-webhooks', title: 'Webhooks' },
    ]
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    icon: Shield,
    children: [
      { id: 'data-sovereignty', title: 'Data Sovereignty' },
      { id: 'access-control', title: 'Access Control' },
      { id: 'audit-logging', title: 'Audit Logging' },
      { id: 'compliance', title: 'Compliance' },
    ]
  },
];

// Documentation content
const docContent = {
  introduction: {
    title: 'Introduction to OmniClawd',
    description: 'Your autonomous digital enterprise',
    content: `
# Introduction to OmniClawd

Welcome to OmniClawd — your autonomous AI enterprise that lives on your infrastructure.

## What is OmniClawd?

OmniClawd is a revolutionary platform that transforms your vision into a self-sufficient digital enterprise. Unlike single-task AI tools, OmniClawd deploys a complete **C-Suite Squad** of specialized AI agents that work together autonomously to drive your business forward.

## The C-Suite Squad

Your digital organization consists of four specialized agents:

| Agent | Role | Responsibilities |
|-------|------|------------------|
| **The Architect** | CEO / PM | Strategic planning, task delegation, progress monitoring |
| **The Engineer** | DevOps | Software development, deployment, CI/CD |
| **The Growth Hacker** | Marketing | SEO, social media, content creation |
| **The Auditor** | Legal & Finance | Compliance, invoicing, risk assessment |

## Key Features

- **100% Local Execution** — Your code never leaves your infrastructure
- **24/7 Autonomous Operation** — Works while you sleep
- **Cross-Agent Communication** — Agents collaborate via MCP protocol
- **Long-Term Memory** — Vector database remembers context and decisions
- **Proactive Heartbeat** — Daily standups and automated monitoring

## How It's Different

Traditional AI assistants wait for your commands. OmniClawd agents are **proactive** — they monitor, plan, execute, and report autonomously. They don't just advise; they build your business.

\`\`\`bash
# Deploy your squad with one command
omniclawd deploy --squad=full --mode=autonomous
\`\`\`

Ready to get started? Continue to [Installation](/docs#installation).
    `,
  },
  installation: {
    title: 'Installation',
    description: 'Install OmniClawd on your machine',
    content: `
# Installation

OmniClawd runs locally on your infrastructure. Choose your platform below.

## macOS

\`\`\`bash
# Using Homebrew (recommended)
brew install omniclawd

# Or using curl
curl -fsSL https://get.omniclawd.dev | bash
\`\`\`

Supports Apple Silicon (M1/M2/M3/M4) and Intel Macs.

## Linux

\`\`\`bash
# Ubuntu/Debian
curl -fsSL https://get.omniclawd.dev | bash

# Or using apt
sudo apt install omniclawd
\`\`\`

Supports Ubuntu 20.04+, Debian 11+, Fedora 36+.

## Windows (WSL2)

\`\`\`bash
# Using winget
winget install omniclawd

# Or in WSL2
curl -fsSL https://get.omniclawd.dev | bash
\`\`\`

Requires Windows 10/11 with WSL2 enabled.

## Docker

\`\`\`bash
docker pull omniclawd/omniclawd:latest
docker run -v $(pwd):/workspace omniclawd/omniclawd start
\`\`\`

## Verify Installation

\`\`\`bash
omniclawd --version
# omniclawd v2.1.0
\`\`\`

## Next Steps

After installation, continue to [Quick Start](/docs#quick-start) to deploy your first squad.
    `,
  },
  'quick-start': {
    title: 'Quick Start',
    description: 'Deploy your first squad in 5 minutes',
    content: `
# Quick Start

Get your C-Suite Squad running in under 5 minutes.

## Step 1: Initialize Your Project

Navigate to your project directory and run:

\`\`\`bash
cd your-project
omniclawd init
\`\`\`

This will:
- Scan your codebase structure
- Detect language and frameworks
- Create \`.omniclawd/\` config folder

## Step 2: Configure Your Squad

Open the configuration wizard:

\`\`\`bash
omniclawd config
\`\`\`

Or edit \`.omniclawd/config.yaml\` directly:

\`\`\`yaml
project:
  name: "my-startup"

agents:
  architect:
    enabled: true
    auto_plan: true
  engineer:
    enabled: true
    auto_commit: false
  growth:
    enabled: true
  auditor:
    enabled: true

notifications:
  telegram: "@your_username"
  slack: "#dev-updates"
\`\`\`

## Step 3: Deploy Your Squad

\`\`\`bash
omniclawd deploy --mode=autonomous
\`\`\`

Your squad is now active!

## Step 4: Assign Your First Task

\`\`\`bash
omniclawd task "Build user authentication with JWT"
\`\`\`

Watch your agents collaborate in real-time:

\`\`\`
[08:00:01] The Architect: Analyzing requirements...
[08:00:03] The Architect: Delegating to Engineer
[08:00:05] The Engineer: Creating User model...
[08:00:12] The Auditor: Running security scan...
[08:00:15] The Engineer: Task complete. PR #1 ready.
\`\`\`

## What's Next?

- Learn about [The C-Suite Squad](/docs#architect)
- Configure [Integrations](/docs#integrations)
- Set up [Morning Briefings](/docs#morning-briefing)
    `,
  },
  'system-requirements': {
    title: 'System Requirements',
    description: 'Hardware and software requirements',
    content: `
# System Requirements

OmniClawd is designed to run efficiently on modern hardware.

## Minimum Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **CPU** | 4 cores | 8+ cores |
| **RAM** | 8 GB | 16 GB+ |
| **Storage** | 10 GB | 50 GB SSD |
| **OS** | macOS 12+, Ubuntu 20.04+, Windows 10 | Latest versions |

## Recommended Hardware

For 24/7 autonomous operation, we recommend:

### Mac Mini M4
- Apple Silicon optimized
- Low power consumption (ideal for always-on)
- Excellent price/performance

### Raspberry Pi 5 (8GB)
- Ultra-low power
- Perfect for simple automation tasks
- Requires external SSD for best performance

### Linux Server
- Any modern x86_64 server
- Cloud VMs supported (but defeats local-first purpose)

## Software Dependencies

OmniClawd automatically manages these dependencies:

- Node.js 18+
- Python 3.10+
- Docker (optional, for isolated execution)
- Git

## GPU Acceleration (Optional)

For faster AI processing:

- NVIDIA: CUDA 11.8+ with 8GB+ VRAM
- Apple: Metal Performance Shaders (automatic on M-series)
- AMD: ROCm 5.0+ (experimental)

## Network Requirements

OmniClawd works **100% offline** after initial setup.

Optional network access for:
- License validation (can be disabled)
- External API integrations (GitHub, Slack, etc.)
- Model updates
    `,
  },
  architect: {
    title: 'The Architect (CEO/PM)',
    description: 'Strategic planning and task orchestration',
    content: `
# The Architect

**Role:** CEO / Project Manager

The Architect is the strategic mind of your operation. It orchestrates tasks, delegates to specialized agents, and makes high-level decisions to align with your business goals.

## Key Functions

| Function | Description |
|----------|-------------|
| **Strategic Planning** | Breaks down high-level goals into actionable tasks |
| **Task Delegation** | Assigns tasks to appropriate agents |
| **Progress Monitoring** | Tracks completion and reports status |
| **Decision Making** | Resolves conflicts and prioritizes work |

## Tools Access

- Terminal (command execution)
- Project Management (Linear, Notion, Jira)
- Communication (Slack, Telegram, Discord)
- Calendar & Scheduling

## Configuration

\`\`\`yaml
agents:
  architect:
    enabled: true
    auto_plan: true
    max_tasks_per_sprint: 50
    daily_standup: "08:00"
    standup_channel: "telegram"
    decision_threshold: 0.8  # confidence level for auto-decisions
\`\`\`

## Example Behaviors

### Morning Standup
Every day at 08:00, The Architect:
1. Checks GitHub for overnight activity
2. Reviews scheduled tasks and deadlines
3. Compiles status from all agents
4. Sends briefing to your preferred channel

### Task Delegation
When you assign: *"Build user authentication"*

The Architect:
1. Analyzes requirements
2. Creates subtasks (JWT, User model, endpoints, tests)
3. Delegates to The Engineer
4. Schedules security review with The Auditor
5. Monitors progress and reports completion

## Commands

\`\`\`bash
# Assign task to Architect
omniclawd task "Launch new feature by Friday"

# Check Architect's current plan
omniclawd status --agent=architect

# View decision history
omniclawd logs --agent=architect --type=decisions
\`\`\`
    `,
  },
  engineer: {
    title: 'The Engineer (DevOps)',
    description: 'Technical execution and deployment',
    content: `
# The Engineer

**Role:** DevOps Specialist

The Engineer is your technical execution unit. It designs, codes, deploys, and maintains your digital products and infrastructure with flawless operation.

## Key Functions

| Function | Description |
|----------|-------------|
| **Software Development** | Writes production-ready code |
| **Server Management** | Handles infrastructure and deployments |
| **CI/CD Pipelines** | Manages builds, tests, and releases |
| **Bug Fixing** | Debugs and resolves issues |

## Tools Access

- VS Code / Editor APIs
- GitHub / GitLab API
- Docker & Kubernetes
- Cloud Console (AWS, GCP, Azure)
- Database clients

## Configuration

\`\`\`yaml
agents:
  engineer:
    enabled: true
    auto_commit: false        # require review before commit
    auto_pr: true             # auto-create PRs
    test_required: true       # must pass tests before PR
    style_guide: ".eslintrc"
    languages: ["typescript", "python", "go"]

    # Code quality thresholds
    min_coverage: 80
    max_complexity: 15
\`\`\`

## Example Workflows

### Feature Development
\`\`\`
[The Architect]: Build REST API for user management
[The Engineer]: Setting up Express router...
[The Engineer]: Implementing CRUD operations...
[The Engineer]: Writing unit tests (18 cases)...
[The Engineer]: All tests passing. PR #42 created.
\`\`\`

### Deployment
\`\`\`
[The Architect]: Deploy auth module to production
[The Engineer]: Running pre-deploy checks...
[The Engineer]: Building Docker image...
[The Engineer]: Pushing to registry...
[The Engineer]: Rolling out to k8s (3/3 pods ready)
[The Engineer]: Deployment complete. Zero downtime.
\`\`\`

## Commands

\`\`\`bash
# Direct task to Engineer
omniclawd task "Fix memory leak in DataProcessor" --agent=engineer

# View Engineer's activity
omniclawd logs --agent=engineer --follow

# Check code coverage
omniclawd status --agent=engineer --metrics
\`\`\`
    `,
  },
  'growth-hacker': {
    title: 'The Growth Hacker',
    description: 'Marketing, SEO, and content creation',
    content: `
# The Growth Hacker

**Role:** Marketing Engine

The Growth Hacker is your dedicated market engine. It researches trends, optimizes for SEO, manages social media presence, and crafts compelling marketing copy.

## Key Functions

| Function | Description |
|----------|-------------|
| **Market Research** | Analyzes competitors and trends |
| **SEO Optimization** | Improves search rankings |
| **Social Media** | Manages posts and engagement |
| **Content Creation** | Writes blogs, threads, campaigns |

## Tools Access

- Browser (Puppeteer/Playwright)
- Twitter/X API
- LinkedIn API
- Google Search Console
- Analytics platforms

## Configuration

\`\`\`yaml
agents:
  growth:
    enabled: true

    social_channels:
      - twitter
      - linkedin
      - discord

    content:
      blog_style: "technical"
      tone: "professional"
      auto_publish: false  # review before posting

    seo:
      track_keywords: ["AI agents", "automation"]
      competitor_urls: ["competitor1.com", "competitor2.com"]

    schedule:
      research_day: "monday"
      content_day: "wednesday"
      posting_times: ["09:00", "14:00", "18:00"]
\`\`\`

## Example Workflows

### Market Research
\`\`\`
[The Growth Hacker]: Starting competitive analysis...
[The Growth Hacker]: Browsing 5 competitor websites...
[The Growth Hacker]: Extracting pricing data...
[The Growth Hacker]: Analyzing Twitter sentiment...
[The Growth Hacker]: Report complete. Key insight: $39/mo sweet spot.
\`\`\`

### Content Campaign
\`\`\`
[The Growth Hacker]: Planning Q1 content...
[The Growth Hacker]: Writing blog post...
[The Growth Hacker]: Creating Twitter thread (8 tweets)...
[The Growth Hacker]: Designing LinkedIn carousel...
[The Auditor]: Reviewing for compliance...
[The Growth Hacker]: Campaign ready. 12 posts scheduled.
\`\`\`

## Commands

\`\`\`bash
# Research competitors
omniclawd task "Analyze competitor pricing" --agent=growth

# Generate content
omniclawd task "Write blog post about AI automation"

# View social metrics
omniclawd status --agent=growth --metrics
\`\`\`
    `,
  },
  auditor: {
    title: 'The Auditor (Legal/Finance)',
    description: 'Compliance, invoicing, and risk management',
    content: `
# The Auditor

**Role:** Legal & Finance Guardian

The Auditor is the guardian of compliance and financial health. It handles invoicing, tax preparation, legal compliance, and competitive analysis to keep your enterprise secure.

## Key Functions

| Function | Description |
|----------|-------------|
| **Financial Management** | Invoicing, payments, tracking |
| **Legal Research** | Contract review, compliance |
| **Risk Assessment** | Security scans, vulnerability checks |
| **Invoice Processing** | Generate and send invoices |

## Tools Access

- Gmail / Email APIs
- Stripe API
- PDF Reader/Generator
- Legal databases
- Security scanners

## Configuration

\`\`\`yaml
agents:
  auditor:
    enabled: true

    security:
      scan_on_commit: true
      block_on_critical: true
      compliance: ["OWASP", "SOC2", "GDPR"]

    finance:
      currency: "USD"
      invoice_prefix: "INV"
      payment_terms: 14  # days
      stripe_account: "acct_xxx"

    legal:
      review_contracts: true
      flag_risky_terms: true
      jurisdiction: "US"
\`\`\`

## Example Workflows

### Invoice Generation
\`\`\`
[The Auditor]: Fetching Project Alpha billing data...
[The Auditor]: Calculating: 47 hours @ $150/hr = $7,050
[The Auditor]: Applying 10% retainer discount...
[The Auditor]: Generating PDF invoice...
[The Auditor]: Creating Stripe payment link...
[The Auditor]: Invoice #INV-2024-042 sent ($6,345)
\`\`\`

### Security Review
\`\`\`
[The Engineer]: PR #142 ready for review
[The Auditor]: Running security scan...
[The Auditor]: Checking OWASP Top 10...
[The Auditor]: Validating input sanitization...
[The Auditor]: PASSED. No vulnerabilities detected.
\`\`\`

## Commands

\`\`\`bash
# Generate invoice
omniclawd task "Invoice client for Project Alpha"

# Run security scan
omniclawd audit --type=security

# Check compliance status
omniclawd status --agent=auditor --compliance
\`\`\`
    `,
  },
  'agent-communication': {
    title: 'Agent Communication',
    description: 'How agents collaborate via MCP',
    content: `
# Agent Communication

OmniClawd agents communicate using the **Model Context Protocol (MCP)**, enabling seamless collaboration and context sharing.

## How It Works

Agents don't work in isolation. When one agent discovers something relevant to another, they share context automatically.

\`\`\`
[The Engineer]: Found API error on /users endpoint
    ↓ (MCP message)
[The Growth Hacker]: Checking Twitter for customer complaints
    ↓ (MCP message)
[The Architect]: Escalating issue, pausing marketing campaign
\`\`\`

## Message Types

| Type | Description | Example |
|------|-------------|---------|
| **task** | Assign work to another agent | Architect → Engineer: "Build auth" |
| **status** | Report progress | Engineer → Architect: "PR ready" |
| **context** | Share information | Auditor → Engineer: "Security issue" |
| **query** | Ask for information | Growth → Auditor: "Q4 revenue?" |

## Configuration

\`\`\`yaml
communication:
  protocol: "mcp"

  channels:
    internal: true      # agent-to-agent
    external:
      slack: "#dev-updates"
      telegram: "@owner"

  rules:
    # Auditor must approve security-related tasks
    security_approval: "auditor"

    # Architect coordinates all cross-agent work
    coordinator: "architect"

    # Notify on high-priority issues
    escalation_threshold: "high"
\`\`\`

## Cross-Agent Scenarios

### Bug Discovery → Customer Check
\`\`\`yaml
trigger: "engineer.error.production"
action:
  - notify: "architect"
  - task: "growth.check_social_complaints"
  - if_complaints > 5:
      escalate: "high"
\`\`\`

### Code Review → Security Scan
\`\`\`yaml
trigger: "engineer.pr.created"
action:
  - task: "auditor.security_scan"
  - block_merge_until: "auditor.approved"
\`\`\`

## Viewing Communication

\`\`\`bash
# View all agent messages
omniclawd logs --type=mcp

# View specific agent communication
omniclawd logs --agent=architect --type=messages

# Real-time monitoring
omniclawd monitor --agents=all
\`\`\`
    `,
  },
  'proactive-heartbeat': {
    title: 'Proactive Heartbeat',
    description: 'The autonomous operation loop',
    content: `
# Proactive Heartbeat

The Proactive Heartbeat is OmniClawd's autonomous operation system. Unlike reactive AI that waits for commands, your squad continuously monitors, plans, and acts.

## The Loop

Every configured interval (default: 1 hour), your squad executes:

\`\`\`
┌─────────────────────────────────────────────┐
│  1. Schedule Check                          │
│     Review tasks, deadlines, priorities     │
├─────────────────────────────────────────────┤
│  2. Git Sync                                │
│     Pull changes, check CI status           │
├─────────────────────────────────────────────┤
│  3. Alert Scan                              │
│     Monitor for errors, anomalies           │
├─────────────────────────────────────────────┤
│  4. Auto-Execute                            │
│     Run scheduled tasks autonomously        │
├─────────────────────────────────────────────┤
│  5. Report                                  │
│     Send summary if notable events          │
└─────────────────────────────────────────────┘
              ↓ (repeat)
\`\`\`

## Configuration

\`\`\`yaml
heartbeat:
  enabled: true
  interval: "1h"        # check every hour

  morning_standup:
    enabled: true
    time: "08:00"
    channel: "telegram"

  evening_summary:
    enabled: true
    time: "18:00"
    channel: "slack"

  alerts:
    on_error: true
    on_security: true
    on_completion: false  # only report issues

  auto_actions:
    - "git pull on main branch changes"
    - "run tests on PR creation"
    - "notify on CI failure"
\`\`\`

## Benefits

| Feature | Without Heartbeat | With Heartbeat |
|---------|-------------------|----------------|
| Monitoring | Manual checks | Automatic 24/7 |
| Response time | Hours/days | Minutes |
| Missed issues | Common | Rare |
| Your involvement | Constant | Minimal |

## Disabling Heartbeat

For manual-only operation:

\`\`\`yaml
heartbeat:
  enabled: false
\`\`\`

Or pause temporarily:

\`\`\`bash
omniclawd pause --duration=4h
\`\`\`
    `,
  },
  'morning-briefing': {
    title: 'Morning Briefing',
    description: 'Daily standup automation',
    content: `
# Morning Briefing

Every day at your configured time, The Architect delivers a comprehensive daily standup directly to your preferred channel.

## What's Included

\`\`\`markdown
# Daily Standup - January 27, 2025

## Overnight Activity
- 3 PRs merged (#141, #142, #143)
- CI/CD: All pipelines green
- No failed deployments

## Team Updates
**Engineering:** Auth module 90% complete
**Growth:** Blog post published, +127 followers
**Finance:** $4,200 received, 1 invoice overdue

## Today's Priorities
1. Complete auth module tests
2. Review Q1 marketing plan
3. Send overdue invoice reminder

## Blockers
None detected.

---
*Generated by OmniClawd at 08:00 AM*
\`\`\`

## Configuration

\`\`\`yaml
heartbeat:
  morning_standup:
    enabled: true
    time: "08:00"
    timezone: "America/New_York"

    channel: "telegram"  # or slack, discord, email

    include:
      - git_activity
      - ci_status
      - agent_reports
      - scheduled_tasks
      - blockers

    # Weekend behavior
    weekends: false  # skip Sat/Sun
\`\`\`

## Channel Setup

### Telegram
\`\`\`yaml
notifications:
  telegram:
    bot_token: "your_bot_token"
    chat_id: "@your_username"
\`\`\`

### Slack
\`\`\`yaml
notifications:
  slack:
    webhook_url: "https://hooks.slack.com/..."
    channel: "#daily-standup"
\`\`\`

### Discord
\`\`\`yaml
notifications:
  discord:
    webhook_url: "https://discord.com/api/webhooks/..."
\`\`\`

## Manual Trigger

\`\`\`bash
# Generate standup now
omniclawd standup

# Generate and send
omniclawd standup --send
\`\`\`
    `,
  },
  'config-file': {
    title: 'Config File (YAML)',
    description: 'Complete configuration reference',
    content: `
# Configuration File

OmniClawd uses a YAML configuration file stored at \`.omniclawd/config.yaml\`.

## Full Example

\`\`\`yaml
# .omniclawd/config.yaml

# Project settings
project:
  name: "my-saas-app"
  language: "typescript"
  framework: "nextjs"
  repo: "github.com/user/repo"

# Agent configuration
agents:
  architect:
    enabled: true
    auto_plan: true
    max_tasks_per_sprint: 50
    decision_threshold: 0.8

  engineer:
    enabled: true
    auto_commit: false
    auto_pr: true
    test_required: true
    style_guide: ".eslintrc.js"
    languages: ["typescript", "python"]

  growth:
    enabled: true
    social_channels: ["twitter", "linkedin"]
    auto_publish: false
    content_style: "professional"

  auditor:
    enabled: true
    scan_on_commit: true
    block_on_critical: true
    compliance: ["OWASP", "SOC2"]

# Heartbeat settings
heartbeat:
  enabled: true
  interval: "1h"
  morning_standup:
    enabled: true
    time: "08:00"
    channel: "telegram"

# Integrations
integrations:
  github:
    enabled: true
    auto_pr: true
    reviewers: ["@team-leads"]

  slack:
    enabled: true
    channel: "#dev-updates"

  telegram:
    enabled: true
    chat_id: "@username"

# Notifications
notifications:
  on_task_complete: true
  on_error: true
  on_security_issue: true
  quiet_hours: ["22:00", "08:00"]

# Security
security:
  access_control:
    allow: ["src/**", "tests/**"]
    deny: [".env*", "secrets/**"]
  audit_log: true
  encryption: "aes-256"
\`\`\`

## Environment Variables

Sensitive values should use environment variables:

\`\`\`yaml
integrations:
  github:
    token: \${GITHUB_TOKEN}
  slack:
    webhook: \${SLACK_WEBHOOK}
\`\`\`

## Validation

\`\`\`bash
# Validate config file
omniclawd config --validate

# Show current config
omniclawd config --show
\`\`\`
    `,
  },
  'cli-commands': {
    title: 'CLI Commands',
    description: 'All available commands',
    content: `
# CLI Commands

Complete reference for OmniClawd CLI commands.

## Core Commands

| Command | Description |
|---------|-------------|
| \`omniclawd init\` | Initialize OmniClawd in current directory |
| \`omniclawd deploy\` | Deploy the agent squad |
| \`omniclawd stop\` | Stop all running agents |
| \`omniclawd status\` | View current status |

## Task Commands

| Command | Description |
|---------|-------------|
| \`omniclawd task "..."\` | Assign a new task |
| \`omniclawd tasks\` | List all tasks |
| \`omniclawd tasks --pending\` | List pending tasks |
| \`omniclawd task cancel <id>\` | Cancel a task |

## Agent Commands

| Command | Description |
|---------|-------------|
| \`omniclawd agents\` | List all agents |
| \`omniclawd logs --agent=<name>\` | View agent logs |
| \`omniclawd pause --agent=<name>\` | Pause an agent |
| \`omniclawd resume --agent=<name>\` | Resume an agent |

## Configuration Commands

| Command | Description |
|---------|-------------|
| \`omniclawd config\` | Open config wizard |
| \`omniclawd config --show\` | Show current config |
| \`omniclawd config --validate\` | Validate config |
| \`omniclawd config --reset\` | Reset to defaults |

## Utility Commands

| Command | Description |
|---------|-------------|
| \`omniclawd standup\` | Generate standup report |
| \`omniclawd audit\` | Run security audit |
| \`omniclawd monitor\` | Real-time monitoring |
| \`omniclawd upgrade\` | Upgrade OmniClawd |

## Examples

\`\`\`bash
# Deploy with specific agents
omniclawd deploy --agents=architect,engineer

# Assign high-priority task
omniclawd task "Fix production bug" --priority=high

# View logs in real-time
omniclawd logs --follow

# Export configuration
omniclawd config --export > backup.yaml
\`\`\`
    `,
  },
  'local-deployment': {
    title: 'Local Deployment',
    description: 'Running OmniClawd on your hardware',
    content: `
# Local Deployment

OmniClawd is designed for 100% local execution. Your code and data never leave your infrastructure.

## Deployment Options

### 1. Direct Installation (Recommended)

\`\`\`bash
# Install and run directly
omniclawd deploy --mode=autonomous
\`\`\`

Best for: Development machines, dedicated servers

### 2. Docker Container

\`\`\`bash
docker run -d \\
  --name omniclawd \\
  -v $(pwd):/workspace \\
  -v ~/.omniclawd:/root/.omniclawd \\
  omniclawd/omniclawd:latest \\
  deploy --mode=autonomous
\`\`\`

Best for: Isolated environments, CI/CD

### 3. Systemd Service (Linux)

\`\`\`bash
# Install as system service
sudo omniclawd service install

# Start service
sudo systemctl start omniclawd
sudo systemctl enable omniclawd
\`\`\`

Best for: 24/7 operation on Linux servers

### 4. LaunchDaemon (macOS)

\`\`\`bash
# Install as launch daemon
omniclawd service install --macos

# Start automatically on boot
launchctl load ~/Library/LaunchAgents/com.omniclawd.plist
\`\`\`

Best for: 24/7 operation on Mac Mini

## Hardware Recommendations

| Use Case | Hardware | Notes |
|----------|----------|-------|
| Development | Any modern laptop | 16GB RAM recommended |
| 24/7 Automation | Mac Mini M4 | Low power, high performance |
| Budget 24/7 | Raspberry Pi 5 | Add external SSD |
| Team/Enterprise | Linux server | 32GB+ RAM for multiple projects |

## Network Configuration

OmniClawd works offline, but for integrations:

\`\`\`yaml
# Allow specific outbound connections
network:
  allow:
    - "api.github.com"
    - "hooks.slack.com"
    - "api.telegram.org"

  # Block all other outbound (air-gapped)
  default: deny
\`\`\`

## Monitoring

\`\`\`bash
# Check health
omniclawd health

# View resource usage
omniclawd status --resources

# Real-time monitoring
omniclawd monitor --dashboard
\`\`\`
    `,
  },
  'mcp-protocol': {
    title: 'MCP Protocol',
    description: 'Model Context Protocol for agent communication',
    content: `
# MCP Protocol

The Model Context Protocol (MCP) is the communication backbone of OmniClawd, enabling agents to share context and collaborate seamlessly.

## What is MCP?

MCP is a structured protocol for AI agents to:
- Share context and state
- Delegate tasks
- Coordinate actions
- Maintain shared memory

## Architecture

\`\`\`
┌─────────────┐     MCP      ┌─────────────┐
│  Architect  │◄────────────►│  Engineer   │
└──────┬──────┘              └──────┬──────┘
       │                            │
       │          MCP Bus           │
       ▼                            ▼
┌─────────────┐              ┌─────────────┐
│   Growth    │◄────────────►│   Auditor   │
└─────────────┘              └─────────────┘
                    │
                    ▼
            ┌─────────────┐
            │ Vector DB   │
            │ (Memory)    │
            └─────────────┘
\`\`\`

## Message Format

\`\`\`json
{
  "type": "task",
  "from": "architect",
  "to": "engineer",
  "priority": "high",
  "context": {
    "project": "auth-module",
    "files": ["src/auth/*"],
    "related_tasks": ["TASK-001"]
  },
  "payload": {
    "action": "implement",
    "description": "Add JWT refresh tokens"
  }
}
\`\`\`

## Context Sharing

When The Engineer finds a bug, context flows automatically:

\`\`\`
1. Engineer detects error
2. MCP broadcasts to all agents
3. Growth checks social for complaints
4. Auditor logs incident
5. Architect decides response
\`\`\`

## Configuration

\`\`\`yaml
mcp:
  enabled: true

  # Message retention
  history: 1000

  # Context window
  context_tokens: 8000

  # Broadcast rules
  broadcast:
    errors: true
    completions: false
    decisions: true
\`\`\`

## Debugging MCP

\`\`\`bash
# View MCP messages
omniclawd logs --type=mcp

# Debug mode
omniclawd deploy --mcp-debug

# Message inspector
omniclawd mcp inspect
\`\`\`
    `,
  },
  'vector-database': {
    title: 'Vector Database',
    description: 'Long-term memory for your squad',
    content: `
# Vector Database

The vector database serves as OmniClawd's "long-term memory," enabling your squad to remember past decisions, learnings, and project context.

## Why Vector Storage?

Traditional databases store exact matches. Vector databases store **semantic meaning**, enabling:

- "Find code similar to this auth pattern"
- "What decisions did we make about caching?"
- "How did we handle this error before?"

## Supported Backends

### ChromaDB (Default)
\`\`\`yaml
memory:
  backend: "chroma"
  path: ".omniclawd/memory"
  embedding_model: "default"
\`\`\`

Best for: Local development, single projects

### Pinecone
\`\`\`yaml
memory:
  backend: "pinecone"
  api_key: \${PINECONE_API_KEY}
  index: "omniclawd-memory"
\`\`\`

Best for: Cloud deployments, large scale

### Qdrant
\`\`\`yaml
memory:
  backend: "qdrant"
  url: "http://localhost:6333"
  collection: "omniclawd"
\`\`\`

Best for: Self-hosted, high performance

## What's Stored

| Category | Examples |
|----------|----------|
| **Code Patterns** | Common implementations, style preferences |
| **Decisions** | Why we chose X over Y |
| **Context** | Project architecture, conventions |
| **History** | Past tasks, outcomes, learnings |

## Memory Operations

\`\`\`bash
# View memory stats
omniclawd memory stats

# Search memory
omniclawd memory search "authentication patterns"

# Export memory
omniclawd memory export > backup.json

# Clear memory (careful!)
omniclawd memory clear --confirm
\`\`\`

## Configuration

\`\`\`yaml
memory:
  backend: "chroma"

  # What to remember
  store:
    code_patterns: true
    decisions: true
    task_history: true
    errors: true

  # Retention
  max_entries: 100000
  ttl_days: 365

  # Performance
  embedding_batch: 100
  search_limit: 10
\`\`\`
    `,
  },
  'data-sovereignty': {
    title: 'Data Sovereignty',
    description: '100% local, zero cloud dependency',
    content: `
# Data Sovereignty

OmniClawd is built on a fundamental principle: **your data never leaves your infrastructure**.

## Zero Cloud Dependency

| Component | Where It Runs | Data Sent |
|-----------|--------------|-----------|
| Agent Processing | Your machine | None |
| Code Analysis | Your machine | None |
| Memory/Vectors | Your machine | None |
| Task Execution | Your machine | None |

## What About AI Models?

### Option 1: Local Models (Recommended)
\`\`\`yaml
models:
  provider: "local"
  model: "llama3.1-70b"
  path: "~/.omniclawd/models"
\`\`\`
100% offline, no external API calls.

### Option 2: API Providers
\`\`\`yaml
models:
  provider: "anthropic"  # or openai
  api_key: \${API_KEY}
\`\`\`
Only prompts are sent (no source code).

## Air-Gapped Mode

For maximum security:

\`\`\`yaml
network:
  mode: "air-gapped"

  # Disable all outbound connections
  allow_outbound: false

  # Disable license checks
  license:
    offline: true
    key_file: "/path/to/license.key"
\`\`\`

## Data Flow Diagram

\`\`\`
┌────────────────────────────────────────────┐
│              YOUR INFRASTRUCTURE           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │ Your     │  │OmniClawd │  │ Vector   │ │
│  │ Codebase │─►│ Agents   │─►│ Memory   │ │
│  └──────────┘  └──────────┘  └──────────┘ │
│                     │                      │
│                     ▼                      │
│              ┌──────────┐                  │
│              │ Results  │                  │
│              │ (Local)  │                  │
│              └──────────┘                  │
└────────────────────────────────────────────┘
                     │
          ─ ─ ─ ─ ─ ─│─ ─ ─ ─ ─ ─  (optional)
                     ▼
            External APIs (prompts only)
            - GitHub (if enabled)
            - Slack (if enabled)
\`\`\`

## Verification

\`\`\`bash
# Verify no outbound connections
omniclawd audit --network

# View all external requests
omniclawd logs --type=network

# Run in isolated mode
omniclawd deploy --network=none
\`\`\`
    `,
  },
  'cross-agent-tasks': {
    title: 'Cross-Agent Tasks',
    description: 'How agents collaborate on complex tasks',
    content: `
# Cross-Agent Tasks

Complex business tasks require coordination between multiple agents. OmniClawd automatically orchestrates cross-agent collaboration.

## How It Works

When a task requires multiple skill sets, The Architect breaks it down and coordinates execution across agents.

\`\`\`
User: "Launch our new pricing page"
         │
         ▼
┌─────────────────────────────────────────────────────┐
│  THE ARCHITECT (Coordinator)                        │
│  1. Analyze requirements                            │
│  2. Create task breakdown                           │
│  3. Assign to appropriate agents                    │
│  4. Monitor progress                                │
│  5. Handle dependencies                             │
└─────────────────────────────────────────────────────┘
         │
    ┌────┴────┬────────────┬────────────┐
    ▼         ▼            ▼            ▼
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│Engineer│ │Growth  │ │Auditor │ │Engineer│
│Build   │ │Write   │ │Review  │ │Deploy  │
│Page    │ │Copy    │ │Legal   │ │To Prod │
└────────┘ └────────┘ └────────┘ └────────┘
    │         │            │            │
    └─────────┴────────────┴────────────┘
                   │
                   ▼
            Task Complete!
\`\`\`

## Task Dependencies

Agents understand task dependencies and wait for prerequisites:

\`\`\`yaml
# Automatic dependency detection
task: "Launch pricing page"
  subtasks:
    - id: design
      agent: engineer
      action: "Create pricing page component"

    - id: copy
      agent: growth
      action: "Write pricing copy"
      depends_on: [design]  # Wait for design first

    - id: legal
      agent: auditor
      action: "Review pricing terms"
      depends_on: [copy]

    - id: deploy
      agent: engineer
      action: "Deploy to production"
      depends_on: [design, copy, legal]  # Wait for all
\`\`\`

## Parallel Execution

Independent tasks run in parallel for maximum efficiency:

\`\`\`
[08:00:00] Task started: "Launch Q1 Marketing Campaign"
[08:00:01] ├── Engineer: Setting up landing page (parallel)
[08:00:01] ├── Growth: Writing email sequences (parallel)
[08:00:01] └── Auditor: Reviewing compliance (parallel)
[08:05:23] ├── Engineer: DONE ✓
[08:06:45] ├── Growth: DONE ✓
[08:07:12] └── Auditor: DONE ✓
[08:07:13] Architect: All subtasks complete. Proceeding to integration.
[08:08:30] Engineer: Campaign deployed. All systems live.
\`\`\`

## Cross-Agent Communication Example

When The Engineer discovers an issue that affects marketing:

\`\`\`
[The Engineer]: Found breaking change in /api/users
    │
    ├──► MCP Message to Growth
    │    "API endpoint changed. Update documentation."
    │
    ├──► MCP Message to Auditor
    │    "API change may affect compliance docs."
    │
    └──► MCP Message to Architect
         "Blocking issue discovered. Awaiting guidance."

[The Architect]: Received. Prioritizing API documentation update.
[The Growth Hacker]: Updating API docs and changelog...
[The Auditor]: Reviewing compliance impact...
\`\`\`

## Configuration

\`\`\`yaml
cross_agent:
  enabled: true

  # Coordination settings
  coordinator: "architect"
  max_parallel_tasks: 4

  # Timeout settings
  task_timeout: "2h"
  subtask_timeout: "30m"

  # Dependency handling
  auto_detect_dependencies: true
  block_on_failed_dependency: true

  # Notification on cross-agent tasks
  notify_on_start: true
  notify_on_complete: true
  notify_on_blocked: true
\`\`\`

## Viewing Cross-Agent Tasks

\`\`\`bash
# View all cross-agent tasks
omniclawd tasks --cross-agent

# View task dependency graph
omniclawd tasks <task-id> --graph

# Monitor real-time coordination
omniclawd monitor --coordination
\`\`\`
    `,
  },
  'self-correction': {
    title: 'Self-Correction',
    description: 'How agents learn from mistakes and improve',
    content: `
# Self-Correction

OmniClawd agents don't just execute—they learn. When errors occur, agents automatically analyze, correct, and prevent future occurrences.

## The Self-Correction Loop

\`\`\`
┌──────────────────────────────────────────┐
│  1. EXECUTE                              │
│     Agent performs assigned task         │
└────────────────┬─────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────┐
│  2. VERIFY                               │
│     Check results against expectations   │
│     - Tests pass?                        │
│     - Build succeeds?                    │
│     - No errors in logs?                 │
└────────────────┬─────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
   [SUCCESS]          [FAILURE]
        │                 │
        ▼                 ▼
┌─────────────┐  ┌──────────────────────────┐
│ 3. COMPLETE │  │ 3. ANALYZE               │
│    Report   │  │    - What failed?        │
│    success  │  │    - Why did it fail?    │
└─────────────┘  │    - What's the fix?     │
                 └────────────┬─────────────┘
                              │
                              ▼
                 ┌──────────────────────────┐
                 │ 4. CORRECT               │
                 │    Apply fix and retry   │
                 └────────────┬─────────────┘
                              │
                              ▼
                 ┌──────────────────────────┐
                 │ 5. LEARN                 │
                 │    Store in vector DB    │
                 │    for future reference  │
                 └──────────────────────────┘
\`\`\`

## Example: Build Failure Recovery

\`\`\`
[The Engineer]: Running build...
[The Engineer]: ERROR - TypeScript compilation failed
               src/utils/auth.ts:42 - Property 'token' missing

[The Engineer]: Analyzing error...
[The Engineer]: Root cause: Interface mismatch after refactor
[The Engineer]: Applying fix: Add missing 'token' property

[The Engineer]: Retrying build...
[The Engineer]: SUCCESS - Build completed in 4.2s

[The Engineer]: Storing lesson: "Always update interfaces when modifying auth types"
\`\`\`

## Correction Strategies

| Error Type | Strategy | Example |
|------------|----------|---------|
| **Syntax Error** | Auto-fix | Missing semicolon, typos |
| **Type Error** | Analyze & fix | Add missing properties |
| **Test Failure** | Debug & correct | Fix failing assertions |
| **Runtime Error** | Investigate | Check logs, trace execution |
| **Integration Error** | Coordinate | Notify relevant agents |

## Learning from Mistakes

Every correction is stored in the vector database:

\`\`\`yaml
# Stored lesson
lesson:
  id: "lesson-2024-001"
  category: "typescript"
  error: "Property missing in interface"
  context: "After refactoring auth module"
  solution: "Update all related interfaces"
  prevention: "Run type-check before commit"
  confidence: 0.95
\`\`\`

Future similar errors trigger automatic recall:

\`\`\`
[The Engineer]: TypeScript error detected...
[The Engineer]: Checking knowledge base...
[The Engineer]: Found similar issue (lesson-2024-001)
[The Engineer]: Applying known solution...
[The Engineer]: Fixed in first attempt!
\`\`\`

## Configuration

\`\`\`yaml
self_correction:
  enabled: true

  # Retry settings
  max_retries: 3
  retry_delay: "5s"
  exponential_backoff: true

  # Learning settings
  store_lessons: true
  lesson_confidence_threshold: 0.8

  # Escalation
  escalate_after_retries: 3
  escalate_to: "architect"
  notify_human_on_escalation: true

  # Error categories to auto-correct
  auto_correct:
    - syntax_errors
    - type_errors
    - test_failures
    - lint_errors

  # Errors requiring human review
  human_review:
    - security_vulnerabilities
    - data_loss_risk
    - production_changes
\`\`\`

## Monitoring Self-Correction

\`\`\`bash
# View correction history
omniclawd logs --type=corrections

# View learned lessons
omniclawd memory search "lessons"

# Correction statistics
omniclawd stats --corrections

# Output example:
# Corrections this week: 47
# Auto-fixed: 42 (89%)
# Required retry: 5 (11%)
# Escalated: 0 (0%)
\`\`\`

## Disabling Self-Correction

For sensitive operations:

\`\`\`bash
# Run task without auto-correction
omniclawd task "Deploy to production" --no-auto-correct

# Require approval for all fixes
omniclawd config set self_correction.require_approval true
\`\`\`
    `,
  },
  'agent-settings': {
    title: 'Agent Settings',
    description: 'Configure individual agent behaviors',
    content: `
# Agent Settings

Each agent can be individually configured to match your workflow and preferences.

## Global Agent Settings

\`\`\`yaml
# .omniclawd/config.yaml
agents:
  # Global settings apply to all agents
  global:
    language: "en"
    timezone: "America/New_York"
    working_hours: ["09:00", "18:00"]
    respect_working_hours: false  # true = pause outside hours

    # Notification preferences
    notify_on_complete: true
    notify_on_error: true
    notify_channel: "telegram"
\`\`\`

## The Architect Settings

\`\`\`yaml
agents:
  architect:
    enabled: true

    # Planning behavior
    auto_plan: true                 # Automatically create plans
    require_approval: false         # Require human approval for plans
    max_tasks_per_sprint: 50
    sprint_duration: "1w"

    # Decision making
    decision_threshold: 0.8         # Confidence for auto-decisions
    escalate_low_confidence: true   # Ask human when unsure

    # Delegation
    auto_delegate: true
    preferred_agents:
      code_tasks: "engineer"
      content_tasks: "growth"
      compliance_tasks: "auditor"

    # Standup settings
    daily_standup:
      enabled: true
      time: "08:00"
      channel: "telegram"
      include_metrics: true
\`\`\`

## The Engineer Settings

\`\`\`yaml
agents:
  engineer:
    enabled: true

    # Code generation
    languages: ["typescript", "python", "go", "rust"]
    style_guide: ".eslintrc.js"
    formatter: "prettier"

    # Git behavior
    auto_commit: false              # Require review before commit
    auto_pr: true                   # Auto-create pull requests
    commit_style: "conventional"    # conventional, simple, detailed
    branch_prefix: "feature/"

    # Quality gates
    test_required: true
    min_coverage: 80
    max_complexity: 15
    lint_on_save: true

    # Deployment
    auto_deploy:
      staging: true
      production: false             # Always require approval

    # Resource limits
    max_file_changes: 50
    max_lines_per_change: 500
\`\`\`

## The Growth Hacker Settings

\`\`\`yaml
agents:
  growth:
    enabled: true

    # Content creation
    content_style: "professional"   # professional, casual, technical
    tone: "informative"
    max_post_length: 280            # Twitter limit

    # Social media
    social_channels:
      twitter:
        enabled: true
        handle: "@yourcompany"
        auto_post: false            # Require approval
      linkedin:
        enabled: true
        auto_post: false
      discord:
        enabled: true
        server_id: "123456"

    # Scheduling
    posting_times: ["09:00", "14:00", "18:00"]
    timezone: "America/New_York"
    avoid_weekends: true

    # SEO
    track_keywords: ["AI automation", "agent framework"]
    competitor_watch:
      - "competitor1.com"
      - "competitor2.com"

    # Content calendar
    research_day: "monday"
    content_day: "wednesday"
    review_day: "friday"
\`\`\`

## The Auditor Settings

\`\`\`yaml
agents:
  auditor:
    enabled: true

    # Security scanning
    scan_on_commit: true
    scan_schedule: "0 2 * * *"      # Daily at 2 AM
    block_on_critical: true

    # Compliance frameworks
    compliance:
      - "OWASP"
      - "SOC2"
      - "GDPR"
      - "HIPAA"  # if applicable

    # Financial settings
    finance:
      currency: "USD"
      invoice_prefix: "INV"
      payment_terms: 14             # days
      auto_reminder: true
      reminder_days: [7, 3, 1]      # days before due

    # Legal review
    legal:
      review_contracts: true
      flag_risky_terms: true
      jurisdiction: "US"
      require_approval: ["NDA", "contract", "agreement"]

    # Audit logging
    audit_log:
      enabled: true
      retention_days: 365
      include_sensitive: false
\`\`\`

## Per-Task Overrides

Override settings for specific tasks:

\`\`\`bash
# Override auto-commit for this task
omniclawd task "Quick fix typo" --auto-commit=true

# Skip tests for documentation changes
omniclawd task "Update README" --skip-tests

# Force specific agent
omniclawd task "Write blog post" --agent=growth
\`\`\`

## Viewing Current Settings

\`\`\`bash
# Show all agent settings
omniclawd config --show --agents

# Show specific agent
omniclawd config --show --agent=engineer

# Validate settings
omniclawd config --validate
\`\`\`
    `,
  },
  'integrations': {
    title: 'Integrations',
    description: 'Connect OmniClawd with your tools',
    content: `
# Integrations

OmniClawd integrates with your existing tools and services to enhance agent capabilities.

## Version Control

### GitHub

\`\`\`yaml
integrations:
  github:
    enabled: true
    token: \${GITHUB_TOKEN}

    # Repository settings
    default_repo: "owner/repo"
    default_branch: "main"

    # PR settings
    auto_pr: true
    pr_template: ".github/PULL_REQUEST_TEMPLATE.md"
    reviewers: ["@team-lead", "@senior-dev"]
    labels: ["automated", "omniclawd"]

    # Branch protection
    respect_branch_protection: true
    require_reviews: true

    # Webhooks
    webhook_secret: \${GITHUB_WEBHOOK_SECRET}
    listen_events:
      - push
      - pull_request
      - issues
\`\`\`

### GitLab

\`\`\`yaml
integrations:
  gitlab:
    enabled: true
    token: \${GITLAB_TOKEN}
    url: "https://gitlab.com"  # or self-hosted
    project_id: 12345

    auto_mr: true
    mr_labels: ["automated"]
\`\`\`

## Communication

### Slack

\`\`\`yaml
integrations:
  slack:
    enabled: true
    bot_token: \${SLACK_BOT_TOKEN}

    channels:
      notifications: "#dev-updates"
      standup: "#daily-standup"
      alerts: "#alerts"

    # Message formatting
    use_blocks: true
    include_links: true

    # Interaction
    allow_commands: true
    command_prefix: "/omni"
\`\`\`

### Telegram

\`\`\`yaml
integrations:
  telegram:
    enabled: true
    bot_token: \${TELEGRAM_BOT_TOKEN}

    # Recipients
    chat_ids:
      - "@founder"
      - "-100123456"  # group ID

    # Features
    allow_commands: true
    send_documents: true
\`\`\`

### Discord

\`\`\`yaml
integrations:
  discord:
    enabled: true
    bot_token: \${DISCORD_BOT_TOKEN}

    server_id: "123456789"
    channels:
      notifications: "dev-updates"
      standup: "daily-standup"

    # Rich embeds
    use_embeds: true
    embed_color: "#FBBF24"  # amber
\`\`\`

## Project Management

### Linear

\`\`\`yaml
integrations:
  linear:
    enabled: true
    api_key: \${LINEAR_API_KEY}

    team_id: "TEAM-123"

    # Issue mapping
    create_issues: true
    update_status: true

    # Labels
    default_labels: ["automated"]
    priority_mapping:
      high: 1
      medium: 2
      low: 3
\`\`\`

### Notion

\`\`\`yaml
integrations:
  notion:
    enabled: true
    token: \${NOTION_TOKEN}

    databases:
      tasks: "abc123"
      docs: "def456"

    # Sync settings
    sync_tasks: true
    sync_docs: true
\`\`\`

### Jira

\`\`\`yaml
integrations:
  jira:
    enabled: true
    url: "https://company.atlassian.net"
    email: "bot@company.com"
    api_token: \${JIRA_TOKEN}

    project_key: "PROJ"

    issue_types:
      task: "Task"
      bug: "Bug"
      feature: "Story"
\`\`\`

## Payment & Finance

### Stripe

\`\`\`yaml
integrations:
  stripe:
    enabled: true
    secret_key: \${STRIPE_SECRET_KEY}

    # Invoice settings
    auto_invoice: true
    currency: "usd"

    # Webhook
    webhook_secret: \${STRIPE_WEBHOOK_SECRET}
    listen_events:
      - invoice.paid
      - payment_intent.succeeded
\`\`\`

## Cloud Services

### AWS

\`\`\`yaml
integrations:
  aws:
    enabled: true
    region: "us-east-1"

    # Credentials (or use IAM role)
    access_key: \${AWS_ACCESS_KEY}
    secret_key: \${AWS_SECRET_KEY}

    # Services
    services:
      s3:
        bucket: "omniclawd-assets"
      ses:
        from_email: "noreply@company.com"
\`\`\`

## Verifying Integrations

\`\`\`bash
# Test all integrations
omniclawd integrations test

# Test specific integration
omniclawd integrations test github

# View integration status
omniclawd integrations status
\`\`\`
    `,
  },
  'notifications': {
    title: 'Notifications',
    description: 'Configure alerts and notifications',
    content: `
# Notifications

Stay informed about your squad's activities with customizable notifications.

## Notification Channels

### Telegram (Recommended for Solo Founders)

\`\`\`yaml
notifications:
  telegram:
    enabled: true
    bot_token: \${TELEGRAM_BOT_TOKEN}
    chat_id: "@your_username"

    # Message format
    format: "markdown"
    include_emoji: true
\`\`\`

**Setup:**
1. Create bot via @BotFather
2. Get your chat ID via @userinfobot
3. Add token to config

### Slack (Recommended for Teams)

\`\`\`yaml
notifications:
  slack:
    enabled: true
    webhook_url: \${SLACK_WEBHOOK}

    channels:
      default: "#dev-updates"
      critical: "#alerts"
      standup: "#daily-standup"
\`\`\`

### Discord

\`\`\`yaml
notifications:
  discord:
    enabled: true
    webhook_url: \${DISCORD_WEBHOOK}

    # Rich embeds
    use_embeds: true
\`\`\`

### Email

\`\`\`yaml
notifications:
  email:
    enabled: true
    provider: "smtp"  # or sendgrid, ses

    smtp:
      host: "smtp.gmail.com"
      port: 587
      user: \${SMTP_USER}
      password: \${SMTP_PASSWORD}

    recipients:
      - "founder@company.com"
      - "team@company.com"
\`\`\`

## Notification Events

Configure which events trigger notifications:

\`\`\`yaml
notifications:
  events:
    # Task events
    task_started: false
    task_completed: true
    task_failed: true
    task_blocked: true

    # Agent events
    agent_error: true
    agent_escalation: true

    # Git events
    pr_created: true
    pr_merged: true
    build_failed: true
    deploy_completed: true

    # Security events
    security_alert: true
    vulnerability_found: true

    # Financial events
    invoice_sent: true
    payment_received: true
    payment_overdue: true

    # Daily digest
    morning_standup: true
    evening_summary: true
\`\`\`

## Priority Levels

Different priorities go to different channels:

\`\`\`yaml
notifications:
  routing:
    critical:
      channels: ["telegram", "slack:#alerts"]
      sound: true

    high:
      channels: ["telegram", "slack:#dev-updates"]

    normal:
      channels: ["slack:#dev-updates"]

    low:
      channels: ["email"]
      batch: true  # Combine into digest
\`\`\`

## Quiet Hours

Pause non-critical notifications:

\`\`\`yaml
notifications:
  quiet_hours:
    enabled: true
    start: "22:00"
    end: "08:00"
    timezone: "America/New_York"

    # Exceptions (always notify)
    bypass_for:
      - critical
      - security_alert
      - production_down

    # Weekend handling
    weekends: true  # Enable quiet mode on weekends
\`\`\`

## Custom Templates

\`\`\`yaml
notifications:
  templates:
    task_completed: |
      ✅ **Task Completed**
      {{task.title}}

      Agent: {{agent.name}}
      Duration: {{task.duration}}

    security_alert: |
      🚨 **Security Alert**

      Severity: {{alert.severity}}
      Description: {{alert.description}}

      Affected: {{alert.affected_files}}

      Action required immediately.
\`\`\`

## Testing Notifications

\`\`\`bash
# Send test notification
omniclawd notify test --channel=telegram

# Preview notification
omniclawd notify preview --event=task_completed

# View notification history
omniclawd logs --type=notifications
\`\`\`

## Notification Statistics

\`\`\`bash
omniclawd stats --notifications

# Output:
# Notifications this week: 127
# By channel:
#   Telegram: 45
#   Slack: 72
#   Email: 10
# By priority:
#   Critical: 2
#   High: 15
#   Normal: 95
#   Low: 15
\`\`\`
    `,
  },
  'hardware-requirements': {
    title: 'Hardware Setup',
    description: 'Recommended hardware configurations',
    content: `
# Hardware Setup

OmniClawd is designed for local-first deployment. Here are recommended hardware configurations for different use cases.

## Quick Reference

| Use Case | Hardware | RAM | Storage | Cost |
|----------|----------|-----|---------|------|
| Development | Any modern laptop | 16GB | 256GB SSD | - |
| 24/7 Solo | Mac Mini M4 | 16GB | 512GB SSD | ~$600 |
| 24/7 Budget | Raspberry Pi 5 | 8GB | 256GB SSD | ~$150 |
| Team/Scale | Linux Server | 32GB+ | 1TB NVMe | ~$2000+ |

## Mac Mini M4 (Recommended)

The ideal device for 24/7 autonomous operation.

**Why Mac Mini M4?**
- Apple Silicon optimized for AI workloads
- Ultra-low power consumption (~20W idle)
- Silent operation (no fans at low load)
- Excellent price/performance ratio
- Native support for Metal acceleration

**Recommended Configuration:**
\`\`\`
Mac Mini M4
- Chip: M4 (base model sufficient)
- RAM: 16GB (24GB for heavy workloads)
- Storage: 512GB SSD
- Cost: ~$600-800
\`\`\`

**Setup:**
\`\`\`bash
# Install OmniClawd
brew install omniclawd

# Enable always-on
sudo pmset -a sleep 0
sudo pmset -a disksleep 0

# Install as launch daemon
omniclawd service install --macos
\`\`\`

## Raspberry Pi 5

Budget-friendly option for simple automation.

**Specifications:**
\`\`\`
Raspberry Pi 5 (8GB)
- CPU: Quad-core Cortex-A76 @ 2.4GHz
- RAM: 8GB LPDDR4X
- Storage: External NVMe SSD (required)
- Power: 27W USB-C
- Cost: ~$80 + accessories
\`\`\`

**Required Accessories:**
- NVMe HAT + 256GB NVMe SSD (~$50)
- Official 27W power supply (~$15)
- Case with cooling (~$15)
- **Total: ~$160**

**Setup:**
\`\`\`bash
# Flash Raspberry Pi OS (64-bit)
# Connect NVMe SSD

# Install OmniClawd
curl -fsSL https://get.omniclawd.dev | bash

# Optimize for Pi
omniclawd config set performance.mode "efficiency"

# Install as systemd service
sudo omniclawd service install
sudo systemctl enable omniclawd
\`\`\`

**Limitations:**
- Slower than Mac Mini for complex tasks
- May struggle with multiple concurrent agents
- Best for simple automation, monitoring, notifications

## Linux Server

For team deployments or heavy workloads.

**Recommended Specifications:**
\`\`\`
CPU: 8+ cores (AMD Ryzen or Intel)
RAM: 32GB DDR4/DDR5
Storage: 1TB NVMe SSD
GPU: Optional (NVIDIA RTX 3060+ for local AI)
\`\`\`

**Cloud Options (if data sovereignty allows):**
- Hetzner Dedicated: ~$50/month
- OVH Dedicated: ~$60/month
- Self-hosted: One-time hardware cost

**Setup:**
\`\`\`bash
# Ubuntu 22.04 LTS recommended
sudo apt update && sudo apt upgrade

# Install dependencies
sudo apt install build-essential git

# Install OmniClawd
curl -fsSL https://get.omniclawd.dev | bash

# Install as systemd service
sudo omniclawd service install
sudo systemctl enable omniclawd
\`\`\`

## GPU Acceleration (Optional)

For faster local AI processing:

### NVIDIA
\`\`\`yaml
# config.yaml
acceleration:
  type: "cuda"
  device: 0

# Requires CUDA 11.8+ and 8GB+ VRAM
# Recommended: RTX 3060 12GB or better
\`\`\`

### Apple Silicon
\`\`\`yaml
acceleration:
  type: "metal"
  # Automatic on M-series chips
\`\`\`

## Power Consumption

| Device | Idle | Active | Monthly Cost* |
|--------|------|--------|---------------|
| Mac Mini M4 | 5W | 20W | ~$2 |
| Raspberry Pi 5 | 3W | 12W | ~$1 |
| Linux Server | 50W | 200W | ~$15 |

*Estimated at $0.12/kWh

## Network Requirements

\`\`\`yaml
network:
  # Minimum bandwidth
  download: "10 Mbps"
  upload: "5 Mbps"

  # For air-gapped deployments
  offline_capable: true

  # Ports (if using web dashboard)
  ports:
    dashboard: 3000
    api: 8080
\`\`\`

## Verifying Hardware

\`\`\`bash
# Check system compatibility
omniclawd doctor

# Performance benchmark
omniclawd benchmark

# Resource monitoring
omniclawd monitor --resources
\`\`\`
    `,
  },
  'cli-flags': {
    title: 'Flags & Options',
    description: 'CLI flags and options reference',
    content: `
# CLI Flags & Options

Complete reference for OmniClawd CLI flags and options.

## Global Flags

These flags work with any command:

| Flag | Short | Description |
|------|-------|-------------|
| \`--help\` | \`-h\` | Show help for command |
| \`--version\` | \`-v\` | Show version |
| \`--config\` | \`-c\` | Path to config file |
| \`--verbose\` | | Enable verbose output |
| \`--quiet\` | \`-q\` | Suppress non-essential output |
| \`--json\` | | Output in JSON format |
| \`--no-color\` | | Disable colored output |

## Deploy Command

\`\`\`bash
omniclawd deploy [flags]
\`\`\`

| Flag | Description | Default |
|------|-------------|---------|
| \`--mode\` | Operation mode: \`autonomous\`, \`assisted\`, \`manual\` | \`assisted\` |
| \`--agents\` | Comma-separated list of agents to deploy | all |
| \`--dry-run\` | Preview without executing | false |
| \`--background\` | Run in background | false |
| \`--restart\` | Restart if already running | false |

**Examples:**
\`\`\`bash
# Deploy all agents in autonomous mode
omniclawd deploy --mode=autonomous

# Deploy only engineer and architect
omniclawd deploy --agents=architect,engineer

# Preview deployment
omniclawd deploy --dry-run
\`\`\`

## Task Command

\`\`\`bash
omniclawd task <description> [flags]
\`\`\`

| Flag | Description | Default |
|------|-------------|---------|
| \`--agent\` | Assign to specific agent | auto |
| \`--priority\` | Priority: \`low\`, \`medium\`, \`high\`, \`critical\` | medium |
| \`--deadline\` | Task deadline (ISO 8601 or relative) | none |
| \`--blocking\` | Block until complete | false |
| \`--notify\` | Send notification on complete | true |
| \`--no-auto-correct\` | Disable self-correction | false |

**Examples:**
\`\`\`bash
# High priority task
omniclawd task "Fix production bug" --priority=critical

# Task with deadline
omniclawd task "Write docs" --deadline="2024-01-30"

# Assign to specific agent
omniclawd task "Research competitors" --agent=growth
\`\`\`

## Logs Command

\`\`\`bash
omniclawd logs [flags]
\`\`\`

| Flag | Description | Default |
|------|-------------|---------|
| \`--agent\` | Filter by agent | all |
| \`--type\` | Log type: \`all\`, \`mcp\`, \`tasks\`, \`errors\` | all |
| \`--follow\` | Follow log output (like tail -f) | false |
| \`--since\` | Show logs since time | 1h |
| \`--limit\` | Limit number of entries | 100 |
| \`--search\` | Search pattern | none |

**Examples:**
\`\`\`bash
# Follow all logs
omniclawd logs --follow

# Engineer errors only
omniclawd logs --agent=engineer --type=errors

# Search for specific term
omniclawd logs --search="authentication"
\`\`\`

## Status Command

\`\`\`bash
omniclawd status [flags]
\`\`\`

| Flag | Description | Default |
|------|-------------|---------|
| \`--agent\` | Show specific agent status | all |
| \`--tasks\` | Include task list | false |
| \`--metrics\` | Include performance metrics | false |
| \`--resources\` | Include resource usage | false |
| \`--watch\` | Continuously update | false |

**Examples:**
\`\`\`bash
# Full status with metrics
omniclawd status --metrics --resources

# Watch status updates
omniclawd status --watch

# Specific agent status
omniclawd status --agent=engineer --tasks
\`\`\`

## Config Command

\`\`\`bash
omniclawd config [flags]
\`\`\`

| Flag | Description |
|------|-------------|
| \`--show\` | Display current configuration |
| \`--validate\` | Validate configuration file |
| \`--reset\` | Reset to default configuration |
| \`--export\` | Export configuration to stdout |
| \`--set\` | Set a configuration value |
| \`--get\` | Get a configuration value |

**Examples:**
\`\`\`bash
# Show current config
omniclawd config --show

# Set a value
omniclawd config --set agents.engineer.auto_commit=true

# Get a value
omniclawd config --get agents.architect.daily_standup.time
\`\`\`

## Audit Command

\`\`\`bash
omniclawd audit [flags]
\`\`\`

| Flag | Description | Default |
|------|-------------|---------|
| \`--type\` | Audit type: \`security\`, \`compliance\`, \`all\` | all |
| \`--fix\` | Auto-fix issues | false |
| \`--report\` | Generate report file | false |
| \`--format\` | Report format: \`text\`, \`json\`, \`html\` | text |

**Examples:**
\`\`\`bash
# Security audit with fixes
omniclawd audit --type=security --fix

# Generate HTML report
omniclawd audit --report --format=html
\`\`\`

## Memory Command

\`\`\`bash
omniclawd memory [subcommand] [flags]
\`\`\`

| Subcommand | Description |
|------------|-------------|
| \`stats\` | Show memory statistics |
| \`search\` | Search memory for patterns |
| \`export\` | Export memory to file |
| \`clear\` | Clear memory (requires --confirm) |

**Examples:**
\`\`\`bash
# Search memory
omniclawd memory search "authentication patterns"

# Export memory
omniclawd memory export --format=json > backup.json
\`\`\`
    `,
  },
  'cli-examples': {
    title: 'CLI Examples',
    description: 'Common CLI usage patterns',
    content: `
# CLI Examples

Practical examples for common OmniClawd CLI operations.

## Getting Started

\`\`\`bash
# Initialize in a new project
cd my-project
omniclawd init

# Answer setup questions or use defaults
omniclawd init --defaults

# Deploy your squad
omniclawd deploy --mode=autonomous
\`\`\`

## Daily Operations

### Morning Routine
\`\`\`bash
# Check what happened overnight
omniclawd standup

# View all agent status
omniclawd status --metrics

# Check pending tasks
omniclawd tasks --pending
\`\`\`

### Assigning Tasks
\`\`\`bash
# Simple task (auto-assigned)
omniclawd task "Add user authentication"

# High priority bug fix
omniclawd task "Fix checkout error" --priority=critical --deadline="today"

# Specific agent task
omniclawd task "Research competitor pricing" --agent=growth

# Blocking task (wait for completion)
omniclawd task "Run full test suite" --blocking
\`\`\`

### Monitoring Progress
\`\`\`bash
# Real-time log streaming
omniclawd logs --follow

# Watch specific agent
omniclawd logs --agent=engineer --follow

# Dashboard view
omniclawd monitor --dashboard
\`\`\`

## Code & Development

### Feature Development
\`\`\`bash
# Build a feature
omniclawd task "Implement user profile page"

# Watch the engineer work
omniclawd logs --agent=engineer --follow

# Check PR when ready
omniclawd status --agent=engineer --tasks
\`\`\`

### Bug Fixing
\`\`\`bash
# Report a bug
omniclawd task "Fix: Login fails on mobile" --priority=high

# Debug with logs
omniclawd logs --search="login" --type=errors

# Verify fix
omniclawd task "Test login on mobile devices" --blocking
\`\`\`

### Deployment
\`\`\`bash
# Deploy to staging
omniclawd task "Deploy latest changes to staging"

# Deploy to production (always requires approval)
omniclawd task "Deploy v2.1.0 to production" --approval-required

# Rollback if needed
omniclawd task "Rollback production to v2.0.9" --priority=critical
\`\`\`

## Marketing & Content

### Content Creation
\`\`\`bash
# Write a blog post
omniclawd task "Write blog post about our new AI features"

# Create social campaign
omniclawd task "Create Twitter thread about product launch"

# Research competitors
omniclawd task "Analyze competitor pricing strategies" --agent=growth
\`\`\`

### SEO & Analytics
\`\`\`bash
# Check SEO status
omniclawd status --agent=growth --metrics

# Generate SEO report
omniclawd task "Generate monthly SEO report"
\`\`\`

## Finance & Legal

### Invoicing
\`\`\`bash
# Generate invoice
omniclawd task "Invoice Acme Corp for January services"

# Check payment status
omniclawd task "Check outstanding invoices"

# Send payment reminders
omniclawd task "Send reminder for overdue invoices"
\`\`\`

### Security & Compliance
\`\`\`bash
# Run security audit
omniclawd audit --type=security

# Check compliance
omniclawd audit --type=compliance

# Generate compliance report
omniclawd audit --report --format=html > compliance-report.html
\`\`\`

## Maintenance & Admin

### Configuration
\`\`\`bash
# View current config
omniclawd config --show

# Update a setting
omniclawd config --set heartbeat.morning_standup.time="09:00"

# Validate config
omniclawd config --validate
\`\`\`

### Agent Management
\`\`\`bash
# Pause an agent
omniclawd pause --agent=growth --duration="4h"

# Resume agent
omniclawd resume --agent=growth

# Restart all agents
omniclawd deploy --restart
\`\`\`

### System Health
\`\`\`bash
# Run diagnostics
omniclawd doctor

# Check resource usage
omniclawd status --resources

# Performance benchmark
omniclawd benchmark
\`\`\`

## Automation Scripts

### Cron Job Examples
\`\`\`bash
# Daily standup at 8 AM
0 8 * * * /usr/local/bin/omniclawd standup --send

# Weekly security audit
0 2 * * 0 /usr/local/bin/omniclawd audit --type=security --report

# Monthly backup
0 0 1 * * /usr/local/bin/omniclawd memory export > /backup/memory-$(date +%Y%m).json
\`\`\`

### Shell Scripts
\`\`\`bash
#!/bin/bash
# deploy-feature.sh

FEATURE=$1

echo "Starting feature deployment: $FEATURE"

# Build and test
omniclawd task "Build and test $FEATURE" --blocking

# Deploy to staging
omniclawd task "Deploy $FEATURE to staging" --blocking

# Run integration tests
omniclawd task "Run integration tests for $FEATURE" --blocking

# Notify team
omniclawd notify send --message="$FEATURE deployed to staging"

echo "Feature $FEATURE deployed successfully!"
\`\`\`
    `,
  },
  'api-overview': {
    title: 'API Overview',
    description: 'REST API introduction and basics',
    content: `
# API Overview

OmniClawd provides a comprehensive REST API for programmatic control and integration.

## Base URL

\`\`\`
http://localhost:8080/api/v1
\`\`\`

The API runs on port 8080 by default. Change in config:
\`\`\`yaml
api:
  port: 8080
  host: "127.0.0.1"  # localhost only
\`\`\`

## API Features

| Feature | Description |
|---------|-------------|
| **Task Management** | Create, update, cancel tasks |
| **Agent Control** | Start, stop, pause agents |
| **Status & Metrics** | Get real-time status and metrics |
| **Logs** | Stream or query logs |
| **Configuration** | Read and update settings |
| **Webhooks** | Receive event notifications |

## Request Format

All requests use JSON:

\`\`\`bash
curl -X POST http://localhost:8080/api/v1/tasks \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "description": "Build user authentication",
    "priority": "high"
  }'
\`\`\`

## Response Format

All responses follow this structure:

\`\`\`json
{
  "success": true,
  "data": {
    "id": "task_abc123",
    "description": "Build user authentication",
    "status": "pending",
    "created_at": "2024-01-27T10:30:00Z"
  },
  "meta": {
    "request_id": "req_xyz789",
    "timestamp": "2024-01-27T10:30:00Z"
  }
}
\`\`\`

### Error Response

\`\`\`json
{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Missing required field: description",
    "details": {
      "field": "description",
      "reason": "required"
    }
  },
  "meta": {
    "request_id": "req_xyz789",
    "timestamp": "2024-01-27T10:30:00Z"
  }
}
\`\`\`

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limited |
| 500 | Server Error |

## Rate Limiting

Default limits:
- 100 requests per minute
- 1000 requests per hour

Headers included in response:
\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1706354400
\`\`\`

## Pagination

List endpoints support pagination:

\`\`\`bash
GET /api/v1/tasks?page=1&limit=20
\`\`\`

Response includes pagination info:
\`\`\`json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "total_pages": 8
  }
}
\`\`\`

## Filtering & Sorting

\`\`\`bash
# Filter by status
GET /api/v1/tasks?status=pending

# Filter by agent
GET /api/v1/tasks?agent=engineer

# Sort by created date
GET /api/v1/tasks?sort=created_at&order=desc

# Multiple filters
GET /api/v1/tasks?status=pending&priority=high&agent=engineer
\`\`\`

## SDK Libraries

Official SDK libraries:

\`\`\`bash
# Node.js / TypeScript
npm install @omniclawd/sdk

# Python
pip install omniclawd

# Go
go get github.com/omniclawd/sdk-go
\`\`\`

### Node.js Example
\`\`\`javascript
import { OmniClawd } from '@omniclawd/sdk';

const client = new OmniClawd({
  apiKey: process.env.OMNICLAWD_API_KEY,
});

const task = await client.tasks.create({
  description: 'Build user authentication',
  priority: 'high',
});

console.log('Task created:', task.id);
\`\`\`

### Python Example
\`\`\`python
from omniclawd import OmniClawd

client = OmniClawd(api_key=os.environ['OMNICLAWD_API_KEY'])

task = client.tasks.create(
    description='Build user authentication',
    priority='high'
)

print(f'Task created: {task.id}')
\`\`\`
    `,
  },
  'api-authentication': {
    title: 'API Authentication',
    description: 'API keys and authentication methods',
    content: `
# API Authentication

Secure your API access with proper authentication.

## API Keys

Generate API keys for programmatic access:

\`\`\`bash
# Generate new API key
omniclawd api-key create --name="my-integration"

# Output:
# API Key: omni_sk_abc123xyz...
# Save this key - it won't be shown again!
\`\`\`

### Using API Keys

Include in Authorization header:

\`\`\`bash
curl -X GET http://localhost:8080/api/v1/status \\
  -H "Authorization: Bearer omni_sk_abc123xyz"
\`\`\`

Or as query parameter (less secure):
\`\`\`bash
curl "http://localhost:8080/api/v1/status?api_key=omni_sk_abc123xyz"
\`\`\`

## Key Types

| Type | Prefix | Permissions |
|------|--------|-------------|
| **Admin** | \`omni_sk_\` | Full access |
| **Agent** | \`omni_agent_\` | Agent operations only |
| **Read-only** | \`omni_ro_\` | Read access only |
| **Webhook** | \`omni_wh_\` | Webhook validation |

### Creating Keys with Specific Permissions

\`\`\`bash
# Read-only key
omniclawd api-key create --name="dashboard" --type=readonly

# Agent-only key
omniclawd api-key create --name="ci-cd" --type=agent

# Key with custom permissions
omniclawd api-key create --name="custom" --permissions="tasks:read,tasks:create"
\`\`\`

## Key Management

\`\`\`bash
# List all keys
omniclawd api-key list

# Output:
# NAME          TYPE      CREATED      LAST_USED
# my-integration admin     2024-01-15   2024-01-27
# dashboard      readonly  2024-01-20   2024-01-27
# ci-cd          agent     2024-01-22   never

# Revoke a key
omniclawd api-key revoke --name="my-integration"

# Rotate a key (revoke old, create new)
omniclawd api-key rotate --name="ci-cd"
\`\`\`

## Configuration

\`\`\`yaml
api:
  authentication:
    enabled: true

    # Key settings
    key_prefix: "omni_"
    key_length: 32

    # Expiration
    key_expiry: "90d"  # or "never"

    # Security
    require_https: true  # for non-localhost
    ip_whitelist:
      - "127.0.0.1"
      - "10.0.0.0/8"
\`\`\`

## IP Whitelisting

Restrict API access by IP:

\`\`\`yaml
api:
  security:
    ip_whitelist:
      enabled: true
      addresses:
        - "127.0.0.1"      # localhost
        - "192.168.1.0/24" # local network
        - "203.0.113.50"   # specific IP
\`\`\`

## Request Signing (Optional)

For additional security, enable request signing:

\`\`\`yaml
api:
  security:
    request_signing:
      enabled: true
      algorithm: "hmac-sha256"
\`\`\`

### Signed Request Example

\`\`\`javascript
const crypto = require('crypto');

const timestamp = Date.now();
const payload = JSON.stringify({ description: 'My task' });
const signature = crypto
  .createHmac('sha256', API_SECRET)
  .update(\`\${timestamp}.\${payload}\`)
  .digest('hex');

fetch('http://localhost:8080/api/v1/tasks', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'X-Timestamp': timestamp,
    'X-Signature': signature,
    'Content-Type': 'application/json',
  },
  body: payload,
});
\`\`\`

## Security Best Practices

1. **Never commit API keys** - Use environment variables
2. **Rotate keys regularly** - Every 90 days recommended
3. **Use minimal permissions** - Only grant what's needed
4. **Enable IP whitelisting** - Restrict access by IP
5. **Monitor usage** - Check for unusual patterns

### Environment Variables
\`\`\`bash
# .env (never commit!)
OMNICLAWD_API_KEY=omni_sk_abc123xyz

# Usage in code
const apiKey = process.env.OMNICLAWD_API_KEY;
\`\`\`

## Troubleshooting

\`\`\`bash
# Test authentication
curl -I http://localhost:8080/api/v1/status \\
  -H "Authorization: Bearer omni_sk_abc123xyz"

# Check key validity
omniclawd api-key verify omni_sk_abc123xyz

# View auth logs
omniclawd logs --type=auth
\`\`\`
    `,
  },
  'api-endpoints': {
    title: 'API Endpoints',
    description: 'Complete endpoint reference',
    content: `
# API Endpoints

Complete reference for all OmniClawd API endpoints.

## Tasks

### Create Task
\`\`\`
POST /api/v1/tasks
\`\`\`

**Request:**
\`\`\`json
{
  "description": "Build user authentication",
  "agent": "engineer",
  "priority": "high",
  "deadline": "2024-01-30T18:00:00Z",
  "metadata": {
    "project": "auth-module"
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "id": "task_abc123",
    "description": "Build user authentication",
    "status": "pending",
    "agent": "engineer",
    "priority": "high",
    "deadline": "2024-01-30T18:00:00Z",
    "created_at": "2024-01-27T10:30:00Z"
  }
}
\`\`\`

### List Tasks
\`\`\`
GET /api/v1/tasks
GET /api/v1/tasks?status=pending&agent=engineer
\`\`\`

### Get Task
\`\`\`
GET /api/v1/tasks/:id
\`\`\`

### Update Task
\`\`\`
PATCH /api/v1/tasks/:id
\`\`\`

### Cancel Task
\`\`\`
POST /api/v1/tasks/:id/cancel
\`\`\`

## Agents

### List Agents
\`\`\`
GET /api/v1/agents
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": [
    {
      "id": "architect",
      "name": "The Architect",
      "role": "CEO / Project Manager",
      "status": "active",
      "current_task": "task_xyz789",
      "metrics": {
        "tasks_completed": 127,
        "uptime": "99.9%"
      }
    }
  ]
}
\`\`\`

### Get Agent Status
\`\`\`
GET /api/v1/agents/:id
\`\`\`

### Pause Agent
\`\`\`
POST /api/v1/agents/:id/pause
\`\`\`

**Request:**
\`\`\`json
{
  "duration": "2h",
  "reason": "Maintenance window"
}
\`\`\`

### Resume Agent
\`\`\`
POST /api/v1/agents/:id/resume
\`\`\`

## Logs

### Get Logs
\`\`\`
GET /api/v1/logs
GET /api/v1/logs?agent=engineer&type=errors&since=1h
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": [
    {
      "timestamp": "2024-01-27T10:30:00Z",
      "agent": "engineer",
      "level": "info",
      "message": "Starting build process",
      "metadata": {
        "task_id": "task_abc123"
      }
    }
  ]
}
\`\`\`

### Stream Logs (WebSocket)
\`\`\`
WS /api/v1/logs/stream
\`\`\`

## Status

### Get System Status
\`\`\`
GET /api/v1/status
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "status": "healthy",
    "version": "2.1.0",
    "uptime": "72h 15m",
    "agents": {
      "active": 4,
      "paused": 0
    },
    "tasks": {
      "pending": 3,
      "in_progress": 2,
      "completed_today": 15
    },
    "resources": {
      "cpu": "12%",
      "memory": "4.2GB",
      "disk": "45GB"
    }
  }
}
\`\`\`

### Get Metrics
\`\`\`
GET /api/v1/metrics
\`\`\`

## Configuration

### Get Configuration
\`\`\`
GET /api/v1/config
\`\`\`

### Update Configuration
\`\`\`
PATCH /api/v1/config
\`\`\`

**Request:**
\`\`\`json
{
  "heartbeat.morning_standup.time": "09:00",
  "agents.engineer.auto_commit": false
}
\`\`\`

## Memory

### Search Memory
\`\`\`
POST /api/v1/memory/search
\`\`\`

**Request:**
\`\`\`json
{
  "query": "authentication patterns",
  "limit": 10,
  "filters": {
    "category": "code_patterns"
  }
}
\`\`\`

### Get Memory Stats
\`\`\`
GET /api/v1/memory/stats
\`\`\`

## Webhooks

### Create Webhook
\`\`\`
POST /api/v1/webhooks
\`\`\`

**Request:**
\`\`\`json
{
  "url": "https://your-server.com/webhook",
  "events": ["task.completed", "task.failed"],
  "secret": "your-webhook-secret"
}
\`\`\`

### List Webhooks
\`\`\`
GET /api/v1/webhooks
\`\`\`

### Delete Webhook
\`\`\`
DELETE /api/v1/webhooks/:id
\`\`\`
    `,
  },
  'api-webhooks': {
    title: 'Webhooks',
    description: 'Receive event notifications via webhooks',
    content: `
# Webhooks

Receive real-time notifications when events occur in OmniClawd.

## Overview

Webhooks allow external systems to receive notifications when events occur. OmniClawd sends an HTTP POST request to your specified URL.

## Setting Up Webhooks

### Via CLI
\`\`\`bash
omniclawd webhook create \\
  --url="https://your-server.com/webhook" \\
  --events="task.completed,task.failed" \\
  --secret="your-secret-key"
\`\`\`

### Via API
\`\`\`bash
curl -X POST http://localhost:8080/api/v1/webhooks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-server.com/webhook",
    "events": ["task.completed", "task.failed"],
    "secret": "your-secret-key"
  }'
\`\`\`

### Via Config
\`\`\`yaml
webhooks:
  - url: "https://your-server.com/webhook"
    events:
      - task.completed
      - task.failed
      - agent.error
    secret: \${WEBHOOK_SECRET}

  - url: "https://slack.com/api/webhook"
    events:
      - standup.generated
    headers:
      Authorization: "Bearer \${SLACK_TOKEN}"
\`\`\`

## Webhook Events

### Task Events

| Event | Description |
|-------|-------------|
| \`task.created\` | New task assigned |
| \`task.started\` | Task execution began |
| \`task.completed\` | Task finished successfully |
| \`task.failed\` | Task failed |
| \`task.cancelled\` | Task was cancelled |

### Agent Events

| Event | Description |
|-------|-------------|
| \`agent.started\` | Agent began operation |
| \`agent.stopped\` | Agent stopped |
| \`agent.error\` | Agent encountered error |
| \`agent.escalation\` | Agent escalated issue |

### System Events

| Event | Description |
|-------|-------------|
| \`standup.generated\` | Daily standup created |
| \`security.alert\` | Security issue detected |
| \`deploy.completed\` | Deployment finished |
| \`build.failed\` | Build process failed |

## Webhook Payload

All webhooks receive a consistent payload structure:

\`\`\`json
{
  "id": "evt_abc123",
  "type": "task.completed",
  "timestamp": "2024-01-27T10:30:00Z",
  "data": {
    "task_id": "task_xyz789",
    "description": "Build user authentication",
    "agent": "engineer",
    "duration": "15m 32s",
    "result": {
      "files_changed": 5,
      "tests_passed": 24,
      "pr_url": "https://github.com/user/repo/pull/42"
    }
  },
  "metadata": {
    "project": "my-saas",
    "environment": "development"
  }
}
\`\`\`

## Signature Verification

All webhooks include a signature for verification:

**Headers:**
\`\`\`
X-OmniClawd-Signature: sha256=abc123...
X-OmniClawd-Timestamp: 1706354400
\`\`\`

**Verification (Node.js):**
\`\`\`javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, timestamp, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(\`\${timestamp}.\${payload}\`)
    .digest('hex');

  return \`sha256=\${expectedSignature}\` === signature;
}

// Express middleware
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-omniclawd-signature'];
  const timestamp = req.headers['x-omniclawd-timestamp'];

  if (!verifyWebhook(JSON.stringify(req.body), signature, timestamp, WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }

  // Process webhook
  console.log('Event:', req.body.type);
  res.status(200).send('OK');
});
\`\`\`

## Retry Policy

Failed webhooks are retried with exponential backoff:

| Attempt | Delay |
|---------|-------|
| 1 | Immediate |
| 2 | 1 minute |
| 3 | 5 minutes |
| 4 | 30 minutes |
| 5 | 2 hours |

After 5 failures, the webhook is marked as failing and you're notified.

## Managing Webhooks

\`\`\`bash
# List all webhooks
omniclawd webhook list

# View webhook details
omniclawd webhook show <id>

# Test a webhook
omniclawd webhook test <id>

# View delivery history
omniclawd webhook logs <id>

# Delete webhook
omniclawd webhook delete <id>
\`\`\`

## Best Practices

1. **Always verify signatures** - Prevent spoofed requests
2. **Respond quickly** - Return 200 within 5 seconds
3. **Process asynchronously** - Queue heavy processing
4. **Handle duplicates** - Use event ID for idempotency
5. **Monitor failures** - Set up alerts for failing webhooks
    `,
  },
  'access-control': {
    title: 'Access Control',
    description: 'File and system access permissions',
    content: `
# Access Control

Control what files and systems your agents can access.

## File Access Rules

Define which files and directories agents can read/write:

\`\`\`yaml
security:
  access_control:
    # Files agents CAN access
    allow:
      - "src/**"
      - "tests/**"
      - "docs/**"
      - "package.json"
      - "tsconfig.json"
      - ".eslintrc.js"

    # Files agents CANNOT access (takes precedence)
    deny:
      - ".env*"
      - "secrets/**"
      - "*.pem"
      - "*.key"
      - "credentials.json"
      - "node_modules/**"
\`\`\`

## Pattern Syntax

| Pattern | Matches |
|---------|---------|
| \`src/**\` | All files in src and subdirectories |
| \`*.js\` | All .js files in current directory |
| \`**/*.test.ts\` | All .test.ts files anywhere |
| \`!important.js\` | Exclude specific file |
| \`config/*.yaml\` | YAML files in config directory |

## Agent-Specific Rules

Different agents may need different access:

\`\`\`yaml
security:
  access_control:
    # Global rules (apply to all)
    global:
      deny:
        - ".env*"
        - "secrets/**"

    # Agent-specific rules
    agents:
      engineer:
        allow:
          - "src/**"
          - "tests/**"
          - "package.json"
        deny:
          - "src/config/production.ts"

      growth:
        allow:
          - "content/**"
          - "docs/**"
          - "public/**"
        deny:
          - "src/**"

      auditor:
        allow:
          - "**/*"  # Full read access for audits
        deny:
          - ".env*"
        read_only: true  # Cannot modify files
\`\`\`

## System Access

Control access to system resources:

\`\`\`yaml
security:
  system_access:
    # Network access
    network:
      outbound:
        allow:
          - "api.github.com"
          - "hooks.slack.com"
        deny:
          - "*"  # Block all other outbound

      inbound:
        ports: [8080]  # Only API port
        bind: "127.0.0.1"  # localhost only

    # Process execution
    processes:
      allow:
        - "git"
        - "npm"
        - "node"
        - "python"
      deny:
        - "rm -rf"
        - "sudo"
        - "curl | bash"

    # Environment variables
    env_vars:
      expose:
        - "NODE_ENV"
        - "PATH"
      hide:
        - "AWS_*"
        - "STRIPE_*"
        - "*_SECRET"
        - "*_KEY"
\`\`\`

## Permission Levels

\`\`\`yaml
security:
  permission_levels:
    # Read-only mode
    readonly:
      agents: ["auditor"]
      actions:
        - read_files
        - search_code
        - run_analysis

    # Standard mode
    standard:
      agents: ["growth"]
      actions:
        - read_files
        - write_files
        - create_files

    # Full mode
    full:
      agents: ["architect", "engineer"]
      actions:
        - read_files
        - write_files
        - create_files
        - delete_files
        - execute_commands
\`\`\`

## Runtime Checks

Access is verified at runtime:

\`\`\`
[The Engineer]: Attempting to read .env.local
[ACCESS DENIED]: File matches deny pattern ".env*"
[The Engineer]: Falling back to environment variables

[The Engineer]: Creating src/auth/jwt.ts
[ACCESS GRANTED]: Path matches allow pattern "src/**"

[The Auditor]: Attempting to modify src/config.ts
[ACCESS DENIED]: Agent has read_only permission
\`\`\`

## Audit Trail

All access attempts are logged:

\`\`\`bash
# View access logs
omniclawd logs --type=access

# Output:
# [10:30:01] engineer READ src/auth/index.ts GRANTED
# [10:30:02] engineer WRITE src/auth/jwt.ts GRANTED
# [10:30:03] engineer READ .env.local DENIED (deny pattern)
# [10:30:15] auditor WRITE src/config.ts DENIED (read_only)
\`\`\`

## Testing Access Rules

\`\`\`bash
# Test if agent can access file
omniclawd access test --agent=engineer --file="src/index.ts" --action=write

# Output:
# Agent: engineer
# File: src/index.ts
# Action: write
# Result: GRANTED (matches allow pattern "src/**")

# Validate all rules
omniclawd access validate

# Dry run with access report
omniclawd task "Refactor auth module" --dry-run --access-report
\`\`\`
    `,
  },
  'audit-logging': {
    title: 'Audit Logging',
    description: 'Track all agent activities',
    content: `
# Audit Logging

Comprehensive logging of all agent activities for compliance and debugging.

## Overview

Every action taken by OmniClawd agents is logged with full context:

- **What** was done
- **Who** (which agent) did it
- **When** it happened
- **Why** (task context)
- **Result** (success/failure)

## Log Levels

| Level | Description | Examples |
|-------|-------------|----------|
| \`debug\` | Detailed debugging info | Variable values, internal state |
| \`info\` | Normal operations | Task started, file read |
| \`warn\` | Potential issues | Retry attempt, deprecation |
| \`error\` | Failures | Exception, access denied |
| \`critical\` | Severe issues | System failure, data loss risk |

## Log Format

\`\`\`json
{
  "timestamp": "2024-01-27T10:30:00.123Z",
  "level": "info",
  "agent": "engineer",
  "action": "file.write",
  "target": "src/auth/jwt.ts",
  "task_id": "task_abc123",
  "user_id": "user_xyz",
  "session_id": "sess_123",
  "result": "success",
  "duration_ms": 45,
  "metadata": {
    "lines_added": 127,
    "lines_removed": 12,
    "file_size": 4521
  }
}
\`\`\`

## Configuration

\`\`\`yaml
logging:
  audit:
    enabled: true

    # Log level (debug, info, warn, error)
    level: "info"

    # Storage
    storage:
      type: "file"  # file, sqlite, postgresql
      path: ".omniclawd/logs"
      rotation:
        max_size: "100MB"
        max_files: 30
        compress: true

    # Retention
    retention:
      days: 365
      archive: true
      archive_path: "/backup/logs"

    # What to log
    include:
      - file_operations
      - command_execution
      - api_requests
      - agent_communication
      - configuration_changes
      - access_attempts

    # Sensitive data handling
    redact:
      patterns:
        - "password"
        - "api_key"
        - "token"
        - "secret"
      replacement: "[REDACTED]"
\`\`\`

## Action Types

### File Operations
\`\`\`
file.read     - Read file contents
file.write    - Write/modify file
file.create   - Create new file
file.delete   - Delete file
file.move     - Move/rename file
\`\`\`

### Command Execution
\`\`\`
command.execute  - Run shell command
command.git      - Git operation
command.npm      - NPM operation
command.build    - Build process
command.test     - Test execution
\`\`\`

### Agent Actions
\`\`\`
agent.start      - Agent started
agent.stop       - Agent stopped
agent.task       - Task assigned
agent.message    - MCP message sent
agent.decision   - Autonomous decision made
\`\`\`

## Viewing Logs

### CLI
\`\`\`bash
# View recent logs
omniclawd logs

# Filter by agent
omniclawd logs --agent=engineer

# Filter by action type
omniclawd logs --action="file.*"

# Filter by time range
omniclawd logs --since="2024-01-27" --until="2024-01-28"

# Search logs
omniclawd logs --search="authentication"

# Export logs
omniclawd logs --export --format=json > audit-log.json
\`\`\`

### API
\`\`\`bash
curl "http://localhost:8080/api/v1/logs?agent=engineer&since=1h" \\
  -H "Authorization: Bearer YOUR_API_KEY"
\`\`\`

## Log Analysis

\`\`\`bash
# Summary statistics
omniclawd logs stats

# Output:
# Time range: 2024-01-20 to 2024-01-27
# Total entries: 45,231
#
# By agent:
#   architect: 8,421 (19%)
#   engineer: 25,102 (55%)
#   growth: 7,234 (16%)
#   auditor: 4,474 (10%)
#
# By action:
#   file.read: 18,234 (40%)
#   file.write: 12,456 (28%)
#   command.execute: 8,234 (18%)
#   agent.message: 6,307 (14%)
#
# Errors: 127 (0.3%)
# Warnings: 892 (2.0%)

# Anomaly detection
omniclawd logs analyze --anomalies

# Generate audit report
omniclawd logs report --format=html > audit-report.html
\`\`\`

## Compliance Reports

Generate reports for compliance audits:

\`\`\`bash
# SOC 2 report
omniclawd compliance report --framework=soc2 --period="Q1 2024"

# GDPR data access report
omniclawd compliance report --framework=gdpr --type=data-access

# Custom audit report
omniclawd logs report \\
  --start="2024-01-01" \\
  --end="2024-03-31" \\
  --include="all" \\
  --format=pdf
\`\`\`

## Log Forwarding

Forward logs to external systems:

\`\`\`yaml
logging:
  forwarding:
    # Elasticsearch
    elasticsearch:
      enabled: true
      url: "https://elasticsearch.company.com:9200"
      index: "omniclawd-logs"

    # Datadog
    datadog:
      enabled: true
      api_key: \${DATADOG_API_KEY}

    # Splunk
    splunk:
      enabled: true
      hec_url: "https://splunk.company.com:8088"
      token: \${SPLUNK_TOKEN}
\`\`\`
    `,
  },
  'compliance': {
    title: 'Compliance',
    description: 'Security frameworks and compliance',
    content: `
# Compliance

OmniClawd is designed with security and compliance in mind.

## Supported Frameworks

### SOC 2

\`\`\`yaml
compliance:
  soc2:
    enabled: true

    # Trust Service Criteria
    criteria:
      security: true
      availability: true
      processing_integrity: true
      confidentiality: true
      privacy: true

    # Controls
    controls:
      access_control: true
      encryption: true
      audit_logging: true
      change_management: true
\`\`\`

**Automated Controls:**
- Access control logging
- Change tracking
- Encryption at rest
- Audit trails

### GDPR

\`\`\`yaml
compliance:
  gdpr:
    enabled: true

    # Data subject rights
    rights:
      access: true
      rectification: true
      erasure: true
      portability: true

    # Data processing
    processing:
      purpose_limitation: true
      data_minimization: true
      storage_limitation: true

    # Geographic restrictions
    data_residency:
      regions: ["EU"]
      cross_border_transfer: false
\`\`\`

**Features:**
- Data subject access requests
- Right to erasure support
- Data portability export
- Processing records

### HIPAA

\`\`\`yaml
compliance:
  hipaa:
    enabled: true

    # PHI handling
    phi:
      detection: true
      encryption: true
      access_logging: true

    # Safeguards
    safeguards:
      administrative: true
      physical: true
      technical: true
\`\`\`

### OWASP

\`\`\`yaml
compliance:
  owasp:
    enabled: true

    # Top 10 checks
    checks:
      injection: true
      broken_auth: true
      sensitive_data: true
      xxe: true
      access_control: true
      security_misconfig: true
      xss: true
      insecure_deserialization: true
      vulnerable_components: true
      insufficient_logging: true

    # Scanning
    scan_on_commit: true
    block_on_critical: true
\`\`\`

## Compliance Dashboard

\`\`\`bash
# View compliance status
omniclawd compliance status

# Output:
# COMPLIANCE STATUS
# ─────────────────
# SOC 2:  ✓ 98% compliant (2 warnings)
# GDPR:   ✓ 100% compliant
# HIPAA:  ✓ 95% compliant (5 warnings)
# OWASP:  ✓ 100% compliant
#
# Recent Issues:
# - [WARN] SOC2: Access review overdue (7 days)
# - [WARN] HIPAA: PHI detected in logs (auto-redacted)
\`\`\`

## Security Scanning

### Automated Scans
\`\`\`yaml
security:
  scanning:
    # Code scanning
    code:
      enabled: true
      schedule: "0 2 * * *"  # Daily at 2 AM
      scanners:
        - "semgrep"
        - "snyk"
        - "trivy"

    # Dependency scanning
    dependencies:
      enabled: true
      on_commit: true
      block_on_critical: true

    # Secret scanning
    secrets:
      enabled: true
      on_commit: true
      patterns:
        - api_keys
        - passwords
        - tokens
        - private_keys
\`\`\`

### Manual Scans
\`\`\`bash
# Full security scan
omniclawd audit --type=security

# Dependency audit
omniclawd audit --type=dependencies

# Secret scan
omniclawd audit --type=secrets

# OWASP scan
omniclawd audit --type=owasp
\`\`\`

## Compliance Reports

### Generating Reports
\`\`\`bash
# SOC 2 audit report
omniclawd compliance report --framework=soc2 --period="2024-Q1"

# GDPR processing records
omniclawd compliance report --framework=gdpr --type=processing-records

# Full compliance report
omniclawd compliance report --all --format=pdf > compliance-2024.pdf
\`\`\`

### Report Contents

**SOC 2 Report includes:**
- Access control logs
- Change management records
- Incident response records
- Security monitoring data

**GDPR Report includes:**
- Data processing activities
- Data subject requests
- Cross-border transfers
- Retention schedules

## Data Retention

\`\`\`yaml
compliance:
  data_retention:
    # Log retention
    logs:
      default: "365d"
      security: "7y"
      access: "3y"

    # Data retention
    data:
      tasks: "90d"
      memory: "365d"
      backups: "30d"

    # Auto-deletion
    auto_delete:
      enabled: true
      schedule: "0 0 * * 0"  # Weekly
      notify_before: "7d"
\`\`\`

## Incident Response

\`\`\`yaml
compliance:
  incident_response:
    # Detection
    detection:
      auto_detect: true
      severity_threshold: "medium"

    # Response
    response:
      auto_contain: true
      notify:
        - "security@company.com"
        - "slack:#security-alerts"

    # Documentation
    documentation:
      auto_document: true
      template: "incident-template.md"
\`\`\`

## Best Practices

1. **Enable all relevant frameworks** based on your industry
2. **Run regular scans** - daily for code, weekly for dependencies
3. **Review reports monthly** - catch issues early
4. **Train on compliance** - understand requirements
5. **Document exceptions** - maintain audit trail
6. **Test incident response** - regular drills
    `,
  },
};

// Code block component
const CodeBlock = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Extract just the code, removing markdown formatting
    const cleanCode = code.replace(/```[\w]*\n?/g, '').trim();
    navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4">
      <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
        <code className="text-emerald-400 font-mono text-sm whitespace-pre">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors opacity-0 group-hover:opacity-100"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4 text-zinc-400" />
        )}
      </button>
    </div>
  );
};

// Markdown renderer
const MarkdownRenderer = ({ content }) => {
  const renderContent = (text) => {
    const lines = text.trim().split('\n');
    const elements = [];
    let i = 0;
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';

    while (i < lines.length) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3);
          codeContent = '';
        } else {
          inCodeBlock = false;
          elements.push(
            <CodeBlock key={`code-${i}`} code={codeContent.trim()} language={codeLanguage} />
          );
        }
        i++;
        continue;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        i++;
        continue;
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="text-3xl font-bold text-white mt-8 mb-4">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl font-semibold text-white mt-8 mb-3">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-xl font-semibold text-white mt-6 mb-2">
            {line.slice(4)}
          </h3>
        );
      }
      // Tables
      else if (line.startsWith('|')) {
        const tableLines = [];
        while (i < lines.length && lines[i].startsWith('|')) {
          tableLines.push(lines[i]);
          i++;
        }
        i--; // Back up one since we'll increment at the end

        const headers = tableLines[0].split('|').filter(c => c.trim());
        const rows = tableLines.slice(2).map(row => row.split('|').filter(c => c.trim()));

        elements.push(
          <div key={`table-${i}`} className="my-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  {headers.map((h, idx) => (
                    <th key={idx} className="text-left py-2 px-3 text-zinc-300 font-medium text-sm">
                      {h.trim().replace(/\*\*/g, '')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-zinc-800/50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-2 px-3 text-zinc-400 text-sm">
                        {cell.trim().replace(/\*\*/g, '')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      // Lists
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        const listItems = [];
        while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
          listItems.push(lines[i].slice(2));
          i++;
        }
        i--;

        elements.push(
          <ul key={`list-${i}`} className="my-4 space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-zinc-400">
                <span className="text-amber-400 mt-1.5">•</span>
                <span dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                    .replace(/`(.*?)`/g, '<code class="bg-zinc-800 px-1 rounded text-emerald-400 text-sm">$1</code>')
                }} />
              </li>
            ))}
          </ul>
        );
      }
      // Numbered lists
      else if (/^\d+\.\s/.test(line)) {
        const listItems = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          listItems.push(lines[i].replace(/^\d+\.\s/, ''));
          i++;
        }
        i--;

        elements.push(
          <ol key={`olist-${i}`} className="my-4 space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-zinc-400">
                <span className="text-amber-400 font-mono text-sm">{idx + 1}.</span>
                <span dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                    .replace(/`(.*?)`/g, '<code class="bg-zinc-800 px-1 rounded text-emerald-400 text-sm">$1</code>')
                }} />
              </li>
            ))}
          </ol>
        );
      }
      // Paragraphs
      else if (line.trim()) {
        elements.push(
          <p key={i} className="text-zinc-400 leading-relaxed my-4" dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
              .replace(/`(.*?)`/g, '<code class="bg-zinc-800 px-1.5 py-0.5 rounded text-emerald-400 text-sm">$1</code>')
              .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-amber-400 hover:underline">$1</a>')
          }} />
        );
      }

      i++;
    }

    return elements;
  };

  return <div className="prose-invert max-w-none">{renderContent(content)}</div>;
};

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState(['getting-started']);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get current content
  const currentContent = docContent[activeSection] || docContent.introduction;

  // Get breadcrumbs
  const getBreadcrumbs = () => {
    for (const section of docStructure) {
      const child = section.children.find(c => c.id === activeSection);
      if (child) {
        return [section.title, child.title];
      }
    }
    return ['Documentation'];
  };

  // Get next/prev navigation
  const getNavigation = () => {
    const allPages = docStructure.flatMap(s => s.children);
    const currentIndex = allPages.findIndex(p => p.id === activeSection);
    return {
      prev: currentIndex > 0 ? allPages[currentIndex - 1] : null,
      next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null,
    };
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const navigation = getNavigation();
  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-50 lg:hidden p-2 bg-zinc-900 border border-zinc-800 rounded-lg"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-zinc-950 border-r border-zinc-800 overflow-y-auto z-40 transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Search */}
          <div className="p-4 border-b border-zinc-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4">
            {docStructure.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSections.includes(section.id);

              return (
                <div key={section.id} className="mb-2">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-zinc-900 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-zinc-500 group-hover:text-amber-400" />
                      <span className="text-sm font-medium text-zinc-300">{section.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="ml-6 mt-1 space-y-1">
                      {section.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => {
                            setActiveSection(child.id);
                            setSidebarOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                            activeSection === child.id
                              ? 'bg-amber-500/10 text-amber-400'
                              : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
                          }`}
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Footer links */}
          <div className="p-4 border-t border-zinc-800 mt-auto">
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300">
                <ExternalLink className="w-4 h-4" />
                GitHub
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300">
                <MessageSquare className="w-4 h-4" />
                Discord
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
              <Link to="/" className="hover:text-zinc-300">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/docs" className="hover:text-zinc-300">Docs</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <span className={i === breadcrumbs.length - 1 ? 'text-zinc-300' : ''}>{crumb}</span>
                </span>
              ))}
            </div>

            {/* Content header */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">{currentContent.title}</h1>
                <p className="text-zinc-500">{currentContent.description}</p>
              </div>

              {/* Content */}
              <article className="pb-16">
                <MarkdownRenderer content={currentContent.content} />
              </article>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t border-zinc-800">
                {navigation.prev ? (
                  <button
                    onClick={() => setActiveSection(navigation.prev.id)}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <div className="text-left">
                      <div className="text-xs text-zinc-600">Previous</div>
                      <div className="text-sm">{navigation.prev.title}</div>
                    </div>
                  </button>
                ) : <div />}

                {navigation.next && (
                  <button
                    onClick={() => setActiveSection(navigation.next.id)}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <div className="text-right">
                      <div className="text-xs text-zinc-600">Next</div>
                      <div className="text-sm">{navigation.next.title}</div>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
