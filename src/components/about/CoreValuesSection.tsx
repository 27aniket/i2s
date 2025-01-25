import React from 'react';

const CoreValue = ({ title, description }: { title: string; description: string }) => (
  <div className="scroll-animate opacity-0 translate-y-4 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CoreValuesSection = () => {
  const coreValues = [
    {
      title: "Innovation at the Core",
      description: "We embrace cutting-edge technologies to design forward-thinking solutions that address real-world challenges."
    },
    {
      title: "Stakeholder Empowerment",
      description: "Our people-first approach ensures that citizens and policymakers are at the heart of every transformation."
    },
    {
      title: "Agility and Adaptability",
      description: "We thrive in dynamic environments, delivering rapid and scalable solutions tailored to evolving needs."
    },
    {
      title: "Integrity and Transparency",
      description: "Upholding the highest ethical standards, we build trust through accountability and open communication."
    },
    {
      title: "Sustainability and Inclusivity",
      description: "We aim to bridge the digital divide, ensuring no one is left behind in the journey toward progress."
    }
  ];

  return (
    <section className="mb-20 scroll-animate opacity-0 translate-y-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
        Core Values
      </h2>
      <div className="space-y-8">
        {coreValues.map((value, index) => (
          <CoreValue key={index} {...value} />
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;