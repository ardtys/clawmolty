import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Features from './pages/Features';
import Documentation from './pages/Documentation';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-midnight-900 text-white overflow-x-hidden">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
