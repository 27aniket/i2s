import HeroContent from './HeroContent';
import ScrollAnimatedText from './ScrollAnimatedText';
import ParticleAnimation from './ParticleAnimation';

const Hero = () => {
  const animatedText = "Our unique approach integrates cutting-edge AI, innovative processes, and forward-thinking strategies to revolutionize governance, empower stakeholders, and shape a smarter, more connected future.\n\nJoin us in our journey to create inclusive and innovative ecosystems that empower communities and pave the way for sustainable development.";

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black relative overflow-hidden">
      <ParticleAnimation />
      <div className="section-container flex flex-col justify-center min-h-screen relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <HeroContent />
          <div className="relative" style={{ marginTop: '30vh' }}>
            <ScrollAnimatedText text={animatedText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;