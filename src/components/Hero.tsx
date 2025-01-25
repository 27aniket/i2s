import HeroContent from './HeroContent';
import ScrollAnimatedText from './ScrollAnimatedText';
import ParticleAnimation from './ParticleAnimation';

const Hero = () => {
  const animatedText = "Our unique approach integrates cutting-edge AI, innovative processes, and forward-thinking strategies to revolutionize governance, empower stakeholders, and shape a smarter, more connected future.\n\nJoin us in our journey to create inclusive and innovative ecosystems that empower communities and pave the way for sustainable development.";

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black relative overflow-hidden">
      <div className="section-container flex flex-col justify-center min-h-screen relative z-10">
        <div className="flex flex-col">
          <div className="flex gap-8 mb-16">
            <div className="w-[65%]">
              <div className="text-left space-y-8 animate-fade-in">
                <HeroContent />
              </div>
            </div>
            <div className="w-[35%] -ml-20">
              <ParticleAnimation />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <ScrollAnimatedText text={animatedText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;