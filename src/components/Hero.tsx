import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-mint-50 to-white">
      <div className="section-container">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Transforming Ideas into
            <span className="text-mint-500"> Software Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with fresh perspectives and seamless solutions
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link to="/contact" className="button-primary">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/case-studies" className="button-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;