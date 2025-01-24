import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const lastScrollY = useRef(0);
  const currentWordIndex = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    // Split the text into individual words
    const words = paragraph.textContent?.split(' ') || [];
    
    // Create spans for each word with initial gray color
    paragraph.innerHTML = words
      .map((word, index) => `<span class="inline-block transition-colors duration-300 ease-in-out text-[#555555]" data-index="${index}">${word}</span>`)
      .join(' ');

    const spans = paragraph.querySelectorAll('span');
    
    const animateWord = (index: number, highlight: boolean) => {
      if (index >= 0 && index < spans.length) {
        const span = spans[index];
        if (highlight) {
          span.classList.add('text-white');
          span.classList.remove('text-[#555555]');
        } else {
          span.classList.remove('text-white');
          span.classList.add('text-[#555555]');
        }
      }
    };

    const handleScroll = () => {
      if (isAnimating.current) return;

      const scrollY = window.scrollY;
      const paragraphRect = paragraph.getBoundingClientRect();
      const isVisible = paragraphRect.top < window.innerHeight && paragraphRect.bottom > 0;
      
      if (!isVisible) return;

      const scrollingDown = scrollY > lastScrollY.current;
      lastScrollY.current = scrollY;

      isAnimating.current = true;

      if (scrollingDown) {
        // Highlight next word when scrolling down
        if (currentWordIndex.current < spans.length) {
          animateWord(currentWordIndex.current, true);
          currentWordIndex.current++;
        }
      } else {
        // Fade previous word when scrolling up
        if (currentWordIndex.current > 0) {
          currentWordIndex.current--;
          animateWord(currentWordIndex.current, false);
        }
      }

      // Add delay before allowing next animation
      setTimeout(() => {
        isAnimating.current = false;
      }, 150); // 150ms delay between word animations
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black">
      <div className="section-container flex flex-col justify-center min-h-screen">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-8 mt-[30vh]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Re-imagined</span>
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
          <div className="relative" style={{ marginTop: '40vh' }}>
            <p 
              ref={paragraphRef}
              className="max-w-2xl mx-auto text-[50px] leading-tight"
            >
              We amplify human ingenuity through the power of deep technology. By combining strategic insights with advanced software solutions, we empower businesses to unlock their full potential. Whether it's harnessing AI, modernizing legacy systems, or building future-ready platforms, we focus on enabling innovation that drives meaningful transformation. Together, let's shape a smarter, more connected future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;