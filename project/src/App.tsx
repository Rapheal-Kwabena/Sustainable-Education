import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JourneySection from './components/JourneySection';
import SolutionSection from './components/SolutionSection';
import PrototypeSection from './components/PrototypeSection';
import ReflectionSection from './components/ReflectionSection';
import ConclusionSection from './components/ConclusionSection';
import ResourcesSection from './components/ResourcesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <JourneySection />
        <SolutionSection />
        <PrototypeSection />
        <ReflectionSection />
        <ConclusionSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;