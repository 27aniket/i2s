import HeroContent from './HeroContent';
import ScrollAnimatedText from './ScrollAnimatedText';

const Hero = () => {
  const animatedText = "We amplify human ingenuity through the power of deep technology. By combining strategic insights with advanced software solutions, we empower businesses to unlock their full potential. Whether it's harnessing AI, modernizing legacy systems, or building future-ready platforms, we focus on enabling innovation that drives meaningful transformation. Together, let's shape a smarter, more connected future.";

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