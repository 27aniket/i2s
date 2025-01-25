import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="space-y-24 mt-[25vh]">
      <div className="space-y-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-left">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Transforming Vision into Action</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 text-left">
          Bridging the gap between policy, process, and people. With a deep commitment to fostering impactful change, we enable governments, organizations, and communities to embrace digital transformation that drives measurable outcomes.
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="button-primary">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
        <button onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })} className="button-secondary">
          View Our Work
        </button>
      </div>
    </div>
  );
};

export default HeroContent;