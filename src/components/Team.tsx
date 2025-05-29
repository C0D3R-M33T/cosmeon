import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

const founders: TeamMember[] = [
  {
    name: 'Roshmeet Chakraborty',
    role: 'Founder & Board Chair',
    bio: 'Former DRDO Research Assistant & Project Manager',
    imageSrc: '/assets/user.jpg',
  },
  {
    name: 'Debjit Naskar',
    role: 'Co-Founder & Chief Technical Officer',
    bio: 'AI and distributed systems expert who previously led R&D at major cloud providers',
    imageSrc: '/assets/user.jpg',
  },
];

const hardwareTeam: TeamMember[] = [
  {
    name: 'Ritabhasha Chowdhury',
    role: 'Director of Hardware Architecture',
    bio: 'Spacecraft systems engineer specialized in CubeSat design and orbital mechanics',
    imageSrc: '/assets/user.jpg',
  },
  {
    name: 'Ronit Kumar',
    role: 'Principal Embedded Systems Engineer',
    bio: 'Quantum computing researcher with background in space-based communications',
    imageSrc: '/assets/user.jpg',
  },
  {
    name: 'Avipsho Sinha',
    role: 'Director of Structural Design and Mechanics',
    bio: 'Specialist in satellite telemetry, tracking, and control systems.',
    imageSrc: '/assets/user.jpg',
  },
];

const softwareTeam: TeamMember[] = [
  {
    name: 'Arkapravo Ghosh',
    role: 'Director of Software Development Engineering',
    bio: 'Veteran in zero-trust frameworks and orbital comms encryption.',
    imageSrc: '/assets/user.jpg',
  },
  {
    name: 'Amborish Sen',
    role: 'Principal Engineer of Satellite Networking',
    bio: 'Models orbital paths and collision avoidance systems.',
    imageSrc: '/assets/user.jpg',
  },
  {
    name: 'Sayanika Das',
    role: 'Director of Data Integrity and Compliance',
    bio: 'Designs intuitive dashboards for orbital infrastructure users.',
    imageSrc: '/assets/user.jpg',
  },
  {
    name: 'Ayan Mondal',
    role: 'Principal Software System Architect',
    bio: 'Models orbital paths and collision avoidance systems.',
    imageSrc: '/assets/user.jpg',
  },
];

const communicationsTeam: TeamMember[] = [
  {
    name: 'Suryasish Basu',
    role: 'Director of Satellite Communications',
    bio: 'Focuses on translating technical possibilities into user-centric space solutions.',
    imageSrc: '/assets/user.jpg',
  },
  {
    name: 'Rudraneel Saha',
    role: 'Principal Architect of Thermal and Power Systems',
    bio: 'Researches usability patterns for orbital computing interfaces.',
    imageSrc: '/assets/user.jpg',
  },
];

const Team = () => {
  const renderSection = (title: string, members: TeamMember[]) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-center text-mono-100 mb-6">{title}</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] md:w-[280px] group relative bg-mono-900 rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
          >
            <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-full h-[400px] object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mono-950 via-mono-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-mono-900/90 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-mono-100 mb-1">{member.name}</h3>
                <p className="text-mono-300 font-medium mb-3">{member.role}</p>
                <p className="text-mono-400 text-sm">{member.bio}</p>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="space-y-2 group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-xl font-semibold text-mono-100">{member.name}</h3>
                <p className="text-mono-300">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-mono-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-mono-100">Team</span>
          </h2>
          <div className="w-24 h-1 bg-mono-100 mx-auto mb-8"></div>
          <p className="text-xl text-mono-300 max-w-3xl mx-auto">
            Led by aerospace experts, cloud computing pioneers, and visionary engineers,
            our team brings decades of combined experience to the orbital cloud revolution.
          </p>
        </div>

        {renderSection('Founders', founders)}
        {renderSection('Hardware Team', hardwareTeam)}
        {renderSection('Software Team', softwareTeam)}
        {renderSection('Communications Team', communicationsTeam)}
      </div>
    </section>
  );
};

export default Team;