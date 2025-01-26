import React from 'react';

const MissionSection = () => {
  return (
    <section className="mb-20 scroll-animate opacity-0 translate-y-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
        Our Mission
      </h2>
      <ul className="space-y-6">
        <li className="scroll-animate opacity-0 translate-y-4 flex items-start space-x-4">
          <span className="w-2 h-2 mt-2 rounded-full bg-gradient-primary flex-shrink-0" />
          <p className="text-lg text-gray-600 leading-relaxed">
            To seamlessly integrate people, processes, and policies, delivering tailored solutions 
            that empower communities and drive impactful governance.
          </p>
        </li>
        <li className="scroll-animate opacity-0 translate-y-4 flex items-start space-x-4">
          <span className="w-2 h-2 mt-2 rounded-full bg-gradient-primary flex-shrink-0" />
          <p className="text-lg text-gray-600 leading-relaxed">
            To harness the power of AI and emerging technologies to create adaptive and 
            sustainable systems for a smarter tomorrow.
          </p>
        </li>
        <li className="scroll-animate opacity-0 translate-y-4 flex items-start space-x-4">
          <span className="w-2 h-2 mt-2 rounded-full bg-gradient-primary flex-shrink-0" />
          <p className="text-lg text-gray-600 leading-relaxed">
            To remain committed to stakeholder-centric innovation that aligns with the aspirations 
            and needs of citizens.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default MissionSection;