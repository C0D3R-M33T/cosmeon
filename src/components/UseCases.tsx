import React from 'react';
import { GraduationCap, Shield, Brain, Building } from 'lucide-react';

// 👇 Embedded CardSpotlight animation and styling
const CardSpotlight = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/[0.1] bg-darkBlue-800 p-8 shadow-xl transition-all duration-300 hover:shadow-cyan-500/30 group ${className}`}
    >
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 animate-pulse rounded-xl bg-gradient-to-r from-cyan-400/20 to-transparent blur-md" />
      </div>
      {children}
    </div>
  );
};

const UseCases = () => {
  const useCases = [
    {
      icon: <GraduationCap className="h-10 w-10 text-cyan-400" />,
      title: 'Education',
      description:
        'Enabling educational institutions to access powerful computing resources for research and teaching without expensive local infrastructure.',
      examples: [
        'Virtual laboratories for STEM education',
        'Large-scale data analysis for research projects',
        'Remote access to computational resources',
      ],
    },
    {
      icon: <Shield className="h-10 w-10 text-cyan-400" />,
      title: 'Defense',
      description:
        'Providing secure, isolated computing environments for sensitive applications and data storage beyond terrestrial vulnerabilities.',
      examples: [
        'Secure communications infrastructure',
        'Disaster-resilient data backups',
        'Distributed command systems',
      ],
    },
    {
      icon: <Brain className="h-10 w-10 text-cyan-400" />,
      title: 'AI Research',
      description:
        'Offering unique testing environments for AI models in space, with novel constraints and isolated deployment scenarios.',
      examples: [
        'Isolated training environments',
        'Edge AI deployment testing',
        'Low-latency global inference',
      ],
    },
    {
      icon: <Building className="h-10 w-10 text-cyan-400" />,
      title: 'Government',
      description:
        'Supporting government agencies with resilient infrastructure for critical services and data storage with global accessibility.',
      examples: [
        'Emergency response systems',
        'Climate and environmental monitoring',
        'Global connectivity solutions',
      ],
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-darkBlue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Use <span className="text-cyan-400">Cases</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Our orbital cloud infrastructure serves a wide range of industries and applications, 
            delivering unique advantages that terrestrial solutions cannot match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {useCases.map((useCase, index) => (
            <CardSpotlight key={index}>
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-darkBlue-700 p-3 rounded-lg">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {useCase.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6">{useCase.description}</p>

              <div>
                <h4 className="text-sm uppercase text-gray-400 mb-3 tracking-wider">
                  Applications
                </h4>
                <ul className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-200">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;