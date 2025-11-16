import React from 'react';
import {
  GraduationCap,
  Shield,
  Brain,
  Building,
  Briefcase,
  Newspaper,
  RadioTower,
  Leaf,
  Scale,
  LifeBuoy,
} from 'lucide-react';

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
      title: 'Education & Research',
      description:
        'COSMEON’s orbital compute, sensing, and verification capabilities open new possibilities for academic and scientific development.',
      examples: [
        'Access to orbital data and real-time Earth observation for research projects',
        'Remote simulation environments for climate, physics, and AI models',
        'Authenticity-stamped research media to maintain scientific integrity',
        'Orbital remote lab (future) enabling students to run experiments using live satellite data',
      ],
    },
    {
      icon: <Shield className="h-10 w-10 text-cyan-400" />,
      title: 'Defense & National Security',
      description:
        'Low-latency VLEO infrastructure and orbital storage can support secure, high-resilience defense applications.',
      examples: [
        'Disaster-resilient storage for sensitive mission data',
        'Trusted timestamping of mission logs and operations',
        'Faster distribution of critical updates to deployed devices or unmanned systems',
        'Real-time situational awareness using multi-sensor orbital data',
      ],
    },
    {
      icon: <Brain className="h-10 w-10 text-cyan-400" />,
      title: 'AI & High-Performance Compute',
      description:
        'As AI models grow larger and global distribution becomes difficult, orbital compute provides new pathways for efficiency and reach.',
      examples: [
        'Running lightweight inference tasks in orbit',
        'Testing AI models in controlled, isolated orbital environments',
        'Global one-shot model updates using satellite broadcast',
        'Offloading parts of AI workloads from power-hungry terrestrial data centers',
      ],
    },
    {
      icon: <Building className="h-10 w-10 text-cyan-400" />,
      title: 'Government & Public Infrastructure',
      description:
        'Governments require secure digital infrastructure, trusted data flows, and real-time environmental monitoring.',
      examples: [
        'Early detection of natural disasters through orbital sensors',
        'Trusted verification of public records, evidence, and documents',
        'National-scale backup of essential databases beyond terrestrial vulnerabilities',
        'Real-time monitoring of climate, water bodies, and urban infrastructure',
      ],
    },
    {
      icon: <Briefcase className="h-10 w-10 text-cyan-400" />,
      title: 'Enterprise & Industry',
      description:
        'COSMEON’s future orbital platform enables enterprises to enhance reliability, transparency, and operational efficiency.',
      examples: [
        'Highly resilient off-site backups for business continuity',
        'Verified proofs for transactions, documents, and digital interactions',
        'Satellite-based updates for IoT, smart meters, EVs, industrial systems',
        'Real-time Earth intelligence for pipelines, agriculture, power grids, maritime',
      ],
    },
    {
      icon: <Newspaper className="h-10 w-10 text-cyan-400" />,
      title: 'Media, Journalism & Digital Verification',
      description:
        'In the era of AI-generated misinformation, authenticity and trust will define the future of media.',
      examples: [
        'Verified imagery and video authenticity for newsrooms and media houses',
        'Time-stamped evidence for legal and investigative journalism',
        'Orbital cross-verification of events, claims, and incidents',
        'Election integrity and public misinformation control',
      ],
    },
    {
      icon: <RadioTower className="h-10 w-10 text-cyan-400" />,
      title: 'Telecom, IoT & Mobility',
      description:
        'Billions of connected devices will need reliable updates and trusted data pathways.',
      examples: [
        'Satellite-broadcast firmware updates for large fleets of devices',
        'Rural and remote IoT connectivity through orbital relays',
        'Orbital compute for global mobility and logistics analytics',
        'Safe, authenticated updates for EVs, drones, and telecommunication systems',
      ],
    },
    {
      icon: <Leaf className="h-10 w-10 text-cyan-400" />,
      title: 'Climate, Agriculture & Environmental Monitoring',
      description:
        'EventGrid’s multi-sensor capability drives powerful applications in environmental stewardship.',
      examples: [
        'Crop health analysis using optical, IR, and hyperspectral data',
        'Water-body monitoring, pollution detection, and early alerts',
        'Tracking deforestation and land-use changes',
        'Real-time climate behaviour mapping',
      ],
    },
    {
      icon: <Scale className="h-10 w-10 text-cyan-400" />,
      title: 'Financial & Legal Ecosystems',
      description:
        'Trusted orbital verification could dramatically improve digital governance.',
      examples: [
        'Tamper-proof verification of banking logs and transactions',
        'Legally verifiable timestamps for contracts and evidence',
        'Insurance claim verification through authenticated media',
        'Transparent audit trails for high-stake financial actions',
      ],
    },
    {
      icon: <LifeBuoy className="h-10 w-10 text-cyan-400" />,
      title: 'Humanitarian & Global Safety',
      description:
        'Orbital infrastructure can play a vital role in saving lives and supporting communities.',
      examples: [
        'Rapid damage assessment after disasters',
        'Early-warning alerts for glacial lake outburst, floods, storms',
        'Supporting NGOs with real-time ground intelligence',
        'Autonomous environmental risk monitoring for developing regions',
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
