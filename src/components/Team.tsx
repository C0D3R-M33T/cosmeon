import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Elena Kowalski',
      role: 'Founder & CEO',
      bio: 'Former NASA engineer with 15+ years in satellite technology and cloud infrastructure',
      imageSrc: 'https://images.pexels.com/photos/5456794/pexels-photo-5456794.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Marcus Chen',
      role: 'CTO',
      bio: 'AI and distributed systems expert who previously led R&D at major cloud providers',
      imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Chief Satellite Architect',
      bio: 'Spacecraft systems engineer specialized in CubeSat design and orbital mechanics',
      imageSrc: 'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Head of R&D',
      bio: 'Quantum computing researcher with background in space-based communications',
      imageSrc: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Aisha Farouk',
      role: 'Mission Operations Lead',
      bio: 'Specialist in satellite telemetry, tracking, and control systems.',
      imageSrc: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Victor Alvarez',
      role: 'Systems Integration Engineer',
      bio: 'Expert in cloud-satellite integration and cross-domain communications.',
      imageSrc: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Li Wei',
      role: 'Software Architect',
      bio: 'Led the development of secure OS for edge computing in space.',
      imageSrc: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Natalie Kim',
      role: 'UX & Design Lead',
      bio: 'Designs intuitive dashboards for orbital infrastructure users.',
      imageSrc: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Cybersecurity Head',
      bio: 'Veteran in zero-trust frameworks and orbital comms encryption.',
      imageSrc: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Zara El-Masri',
      role: 'Orbital Dynamics Analyst',
      bio: 'Models orbital paths and collision avoidance systems.',
      imageSrc: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const renderRow = (members: TeamMember[], columns: string) => (
    <div className={`grid ${columns} gap-8 mb-12`}>
      {members.map((member, index) => (
        <div
          key={index}
          className="group relative bg-mono-900 rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
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
              <h3 className="text-xl font-semibold text-mono-100 mb-1">
                {member.name}
              </h3>
              <p className="text-mono-300 font-medium mb-3">{member.role}</p>
              <p className="text-mono-400 text-sm">{member.bio}</p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="space-y-2 group-hover:opacity-0 transition-opacity duration-500">
              <h3 className="text-xl font-semibold text-mono-100">
                {member.name}
              </h3>
              <p className="text-mono-300">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
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

        {/* Row 1 - 2 members */}
        {renderRow(teamMembers.slice(0, 2), 'grid-cols-1 md:grid-cols-2 justify-center')}

        {/* Row 2 - 4 members */}
        {renderRow(teamMembers.slice(2, 6), 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4')}

        {/* Row 3 - 4 members */}
        {renderRow(teamMembers.slice(6, 10), 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4')}
      </div>
    </section>
  );
};

export default Team;