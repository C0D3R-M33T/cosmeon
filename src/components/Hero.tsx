import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/assets/sat_from_space.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-gradient-to-b from-mono-900/80 to-mono-950"></div>
</div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Powering the New Space Age with COSMEON
          </h1>
          
          <p className="text-xl text-mono-300 mb-8 max-w-2xl">
          COSMEON is building a sovereign, scalable ecosystem of CubeSat constellations to deliver edge computing, secure data storage, and remote simulation—directly from Low Earth Orbit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="bg-transparent border-2 border-mono-100 text-mono-100 font-medium px-8 py-3 rounded-full hover:bg-mono-100 hover:text-mono-950 transition-colors duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero