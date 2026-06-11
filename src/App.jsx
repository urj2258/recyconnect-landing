import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import About from './components/About';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';
import AssetShowcase from './components/AssetShowcase';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isDesignSystem = currentHash === '#design-system';

  return (
    <div className="app">
      <Navbar isDesignSystem={isDesignSystem} />
      <main style={{ minHeight: '80vh' }}>
        {isDesignSystem ? (
          <AssetShowcase />
        ) : (
          <>
            <Hero />
            <TrustIndicators />
            <ProblemSolution />
            <Features />
            <HowItWorks />
            <TargetUsers />
            <About />
            <CTASection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
