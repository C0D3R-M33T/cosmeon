import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SmoothScrollHero } from './components/SmoothScrollHero';
import About from './components/About';
import Services from './components/Services';
import UseCases from './components/UseCases';
import Team from './components/Team';
import Cta from './components/Cta';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Timeline from './components/Timeline';
import ScrollTextReveal from './components/ScrollTextReveal';
import TextParallaxContentExample from './components/TextParallaxContentExample';
import { PointerHighlightDemo } from './components/pointerhighlightdemo';

// Import the new Blog Page
import BlogPage from './pages/BlogPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <SmoothScrollHero />
      <ScrollTextReveal />
      <About />
      <PointerHighlightDemo />
      <TextParallaxContentExample />
      <Services />
      <UseCases />
      <Team />
      <Timeline />
      <Cta />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-mono-950 text-mono-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;