import React from 'react';
import { Rocket, Orbit, Server, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-darkBlue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-cyan-400">COSMEON</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            COSMEON is pioneering the next frontier of cloud infrastructure by leveraging low Earth orbit CubeSat constellations to provide revolutionary data storage, processing, and computational services beyond our planet's atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Rocket className="h-10 w-10 text-cyan-400" />,
              title: 'Space Innovation',
              description:
                'Leading the integration of cloud technologies with aerospace engineering to create orbital data networks.',
            },
            {
              icon: <Orbit className="h-10 w-10 text-cyan-400" />,
              title: 'Global Coverage',
              description:
                'Our CubeSat constellation provides seamless worldwide access to our orbital cloud infrastructure.',
            },
            {
              icon: <Server className="h-10 w-10 text-cyan-400" />,
              title: 'Resilient Architecture',
              description:
                'Designed for unparalleled redundancy and protection from terrestrial threats and disasters.',
            },
            {
              icon: <Globe className="h-10 w-10 text-cyan-400" />,
              title: 'Sustainable Future',
              description:
                'Committed to responsible space utilization with minimal orbital debris and environmental impact.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-darkBlue-800 p-6 rounded-lg hover:bg-darkBlue-750 transition-colors duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#services"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-flex items-center"
          >
            <span>Discover Our Services</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;