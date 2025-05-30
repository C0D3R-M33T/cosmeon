import React from 'react';

// Sample logos (replace with your actual paths or URLs)
const logos = [
  '/logos/logo_nav.png',
  '/logos/logo_nav.png',
  '/logos/logo_nav.png',
  '/logos/logo_nav.png',
  '/logos/logo_nav.png',
  '/logos/logo_nav.png',
  '/logos/logo_nav.png',
  '/logos/logo_nav.png',
  '/logos/logo_nav.png',
  '/logos/logo_gold.png',
];

export const LogoCarousel = () => {
  return (
    <section className="relative overflow-hidden py-16 px-6 text-center" style={{ backgroundColor: 'rgb(10,10,10)' }}>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Trusted by Visionaries. Powered by Collaboration.
      </h2>

      {/* Subheading */}
      <p className="mt-4 max-w-3xl mx-auto text-gray-400 text-base md:text-lg">
        At COSMEON, we believe that breakthrough innovation happens through deep partnerships.
        From space agencies and defense ecosystems to academic research labs and venture networks —
        we are proud to collaborate with leaders shaping the future of space.
      </p>

      {/* Label */}
      <p className="mt-10 text-sm uppercase tracking-widest text-cyan-400 font-semibold">
        Our partners and supporters include:
      </p>

      {/* Logo Carousel */}
      <div className="mt-8 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`logo-${idx}`}
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;