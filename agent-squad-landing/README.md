# ClawMolty

ClawMolty is an autonomous AI squad platform that provides a team of specialized AI agents working together 24/7 to build and grow your business.

## Overview

ClawMolty brings together four specialized AI agents, each with unique capabilities:

- **The Architect** - CEO / Project Manager: Strategic planning, task delegation, progress tracking, and team coordination.
- **The Engineer** - DevOps Specialist: Code generation, bug fixing, CI/CD pipelines, and server management.
- **The Growth Hacker** - Marketing Engine: Content creation, SEO optimization, social media, and analytics.
- **The Auditor** - Legal & Finance: Security audits, financial reports, compliance, and risk analysis.

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/clawmolty.git
cd clawmolty
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
agent-squad-landing/
├── public/
│   ├── logo.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── SquadGrid.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── Demo.jsx
│   │   └── Documentation.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Features

- Responsive design for all screen sizes
- Modern UI with gradient effects
- Smooth animations powered by Framer Motion
- Fast page loads with Vite
- Client-side routing with React Router

## License

MIT License
