import React from 'react';
import { LightBulb, Brain, Users } from 'lucide-react';

const MissionSection = () => {
  const missions = [
    {
      icon: <LightBulb className="w-12 h-12 text-transparent bg-gradient-primary bg-clip-text" />,
      title: "Empowering Communities Through Seamless Integration",
      description: "We believe in connecting people, processes, and policies to create tailored solutions that truly empower communities and foster impactful governance. Together, we make systems work for the people they serve."
    },
    {
      icon: <Brain className="w-12 h-12 text-transparent bg-gradient-primary bg-clip-text" />,
      title: "Shaping a Smarter Tomorrow with AI",
      description: "By embracing the power of AI and emerging technologies, we build adaptive, sustainable systems designed to improve lives today and shape a smarter, more inclusive tomorrow."
    },
    {
      icon: <Users className="w-12 h-12 text-transparent bg-gradient-primary bg-clip-text" />,
      title: "Citizen-Centric Innovation for Meaningful Change",
      description: "Our commitment lies in creating solutions that put people first, aligning innovation with the aspirations and needs of citizens to drive meaningful and lasting change."
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent text-center">
        Our Mission
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {missions.map((mission, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center space-y-4 p-6 animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="mb-4">
              {mission.icon}
            </div>
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {mission.title}
            </h3>
            <p className="text-gray-600">
              {mission.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;