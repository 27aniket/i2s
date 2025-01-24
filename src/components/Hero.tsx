import HeroContent from './HeroContent';
import ScrollAnimatedText from './ScrollAnimatedText';

const Hero = () => {
  const animatedText = "We bridge the gap between policy, process, and people. With a deep commitment to fostering impactful change, we enable governments, organizations, and communities to embrace digital transformation that drives measurable outcomes. Our unique approach integrates cutting-edge AI, innovative processes, and forward-thinking strategies to revolutionize governance, empower stakeholders, and shape a smarter, more connected future.";

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black">
      <div className="section-container flex flex-col justify-center min-h-screen">
        <div className="text-center space-y-8 animate-fade-in">
          <HeroContent />
          <div className="relative" style={{ marginTop: '40vh' }}>
            <ScrollAnimatedText text={animatedText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;