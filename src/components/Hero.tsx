import HeroContent from './HeroContent';
import ScrollAnimatedText from './ScrollAnimatedText';
import ParticleAnimation from './ParticleAnimation';

const Hero = () => {
  const animatedText = "Our unique approach integrates cutting-edge AI, innovative processes, and forward-thinking strategies to revolutionize governance, empower stakeholders, and shape a smarter, more connected future.\n\nJoin us in our journey to create inclusive and innovative ecosystems that empower communities and pave the way for sustainable development.";

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black relative overflow-hidden">
      <div className="section-container flex flex-col justify-between min-h-screen relative z-10">
        <div className="flex flex-col h-full">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="w-full lg:w-[65%] flex flex-col justify-end pb-16">
              <div className="text-left animate-fade-in">
                <HeroContent />
              </div>
            </div>
            <div className="w-full lg:w-[35%] flex justify-center items-center mt-8 lg:mt-0">
              <div className="w-[70%] h-[70%]">
                <ParticleAnimation />
              </div>
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