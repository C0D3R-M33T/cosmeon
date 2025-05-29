import React from 'react';
import { HardDrive, Cpu, Braces, Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <HardDrive className="h-12 w-12" />,
      title: 'Orbital Data Storage',
      description: 'Cloud storage solutions utilizing our network of low Earth orbit satellites.',
      image: 'https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg',
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: 'Edge Computing from Space',
      description: 'Distributed processing power from our orbital network.',
      image: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg',
    },
    {
      icon: <Braces className="h-12 w-12" />,
      title: 'Space-based AI Testing',
      description: 'A unique environment for testing and training AI models in space.',
      image: 'https://images.pexels.com/photos/8474484/pexels-photo-8474484.jpeg',
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: 'Remote Simulation',
      description: 'Advanced simulation capabilities for education and research.',
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
    },
  ];

  return (
    <section id="services" className="py-20 bg-mono-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="text-mono-100">Services</span>
          </h2>
          <div className="w-24 h-1 bg-mono-100 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-mono-900 hover:shadow-glow transition-all duration-500"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-mono-950 to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <div className="bg-mono-800/80 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-mono-100 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2 text-mono-100">
                    {service.title}
                  </h3>
                  <p className="text-mono-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services