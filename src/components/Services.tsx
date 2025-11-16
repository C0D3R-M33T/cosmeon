import React from 'react';
import { HardDrive, Cpu, Braces, Satellite, FlaskConical, ShieldCheck, RadioTower, Leaf } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <HardDrive className="h-12 w-12" />,
      title: 'Orbital Data Storage (ODS)',
      description:
        'Secure, resilient storage hosted in orbit—shielded from terrestrial outages and reachable globally with low-latency access.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: 'Edge Computing from Orbit',
      description:
        'Real-time compute executed directly aboard satellites for AI inference, analytics, and instant decision-making.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
    {
      icon: <Braces className="h-12 w-12" />,
      title: 'Space-based AI Testing',
      description:
        'Isolated orbital sandboxes to evaluate AI models, ensuring algorithms adapt safely to the physics of space.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    },
    {
      icon: <Satellite className="h-12 w-12" />,
      title: 'Orbital Intelligence (EventGrid™)',
      description:
        'A multi-sensor observation lattice delivering real-time disaster alerts, climate intelligence, and infrastructure monitoring.',
      image:
        'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80',
    },
    {
      icon: <FlaskConical className="h-12 w-12" />,
      title: 'Coral Lab™ – Orbital Remote Simulation',
      description:
        'Remote lab access for universities and researchers to run simulations, test payloads, and stream live orbital sensor data.',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      icon: <ShieldCheck className="h-12 w-12" />,
      title: 'COSMEON Trust™ – Verification Layer',
      description:
        'A satellite-powered trust fabric that issues tamper-proof timestamps, notarizes media, and authenticates mission-critical documents.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      icon: <RadioTower className="h-12 w-12" />,
      title: 'ModelCast™ – Orbital Broadcast Network',
      description:
        'One-to-many satellite broadcasting for firmware, AI model drops, and device patches delivered instantly without terrestrial networks.',
      image:
        'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1200&q=80',
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: 'Sustainability & Impact Intelligence',
      description:
        'Orbital analytics that quantify carbon, energy, and water footprints so organizations can benchmark and improve performance.',
      image:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
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
