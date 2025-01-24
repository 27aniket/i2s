import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="space-y-8 mt-[25vh]">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
        <span className="bg-gradient-primary bg-clip-text text-transparent">Intent to Solutions</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Reimagining human potential through Deep Tech
      </p>
      <div className="flex items-center justify-center space-x-4">
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