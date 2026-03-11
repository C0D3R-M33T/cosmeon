import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import { SmoothScrollHero } from './components/SmoothScrollHero';
import About from './components/About';
import Services from './components/Services';
import UseCases from './components/UseCases';
import Team from './components/Team';
import Cta from './components/Cta';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollTextReveal from './components/ScrollTextReveal';
// import TextParallaxContentExample from './components/TextParallaxContentExample';
import { PointerHighlightDemo } from './components/pointerhighlightdemo';

// Import the new Blog Page
import BlogPage from './pages/BlogPage';
import TimelinePage from './pages/TimelinePage';

function HomePage() {
  return (
    <main>
      <Hero />
      {/* <SmoothScrollHero /> */}
      <ScrollTextReveal />
      <About />
      <PointerHighlightDemo />
      {/* <TextParallaxContentExample /> */}
      <Services />
      <UseCases />
      <Team />
      <Cta />
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-mono-950 text-mono-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

export default App;
