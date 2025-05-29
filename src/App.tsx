import React from 'react';
import Navbar from './components/Navbar';
import { SmoothScrollHero } from './components/SmoothScrollHero';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import UseCases from './components/UseCases';
import Team from './components/Team';
import Cta from './components/Cta';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';// ✅ Import TimelineDemo

function App() {
  return (
    <div className="min-h-screen bg-mono-950 text-mono-100">
      <Navbar />
      <main>
        <Hero />
        <SmoothScrollHero />
        <About />
        <Services />
        <UseCases />

    

        <Team />
        <Cta />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
