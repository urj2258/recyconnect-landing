import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import About from './components/About';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <About />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
