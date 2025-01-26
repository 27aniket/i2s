import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Industries />
      <Services />
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default Index;