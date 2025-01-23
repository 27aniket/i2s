import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import Services from '../components/Services';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Industries />
      <Services />
    </div>
  );
};

export default Index;