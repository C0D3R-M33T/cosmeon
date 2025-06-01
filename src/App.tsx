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
import ScrollToTop from './components/ScrollToTop';
// import LogoCarousel from './components/LogoCarousel';
import Timeline from './components/Timeline'; 
// import Bento from "./components/bento";
// import HowSpaceWorks from "./components/HowSpaceWorks";
// import ScrollVideoSection from './components/ScrollVideoSection';
// import StarBackground from './components/StarBackground'; 
import ScrollTextReveal from './components/ScrollTextReveal';
import TextParallaxContentExample from './components/TextParallaxContentExample';
import { PointerHighlightDemo } from './components/pointerhighlightdemo';

function App() {
  return (
    <div className="min-h-screen bg-mono-950 text-mono-100">
      {/* Foreground content */}
      <Navbar />
      <main>
        {/* <ScrollVideoSection /> */}
        <Hero />
        
        <SmoothScrollHero />
        <ScrollTextReveal />
        <About />
        <PointerHighlightDemo />
        <TextParallaxContentExample />
        {/* <HowSpaceWorks /> */}
        {/* <Bento /> */}
        <Timeline />
        <Services />
        <UseCases />
        {/* <LogoCarousel /> */}
        <Team />
        <Cta />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
