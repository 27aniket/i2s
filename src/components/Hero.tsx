import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const lastScrollY = useRef(0);
  const currentWordIndex = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const scrollSpeed = useRef(0);

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
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime.current;
      const scrollY = window.scrollY;
      const scrollDiff = Math.abs(scrollY - lastScrollY.current);
      
      // Calculate scroll speed (pixels per millisecond)
      scrollSpeed.current = scrollDiff / (timeDiff || 1);
      
      const paragraphRect = paragraph.getBoundingClientRect();
      const isVisible = paragraphRect.top < window.innerHeight && paragraphRect.bottom > 0;
      
      if (!isVisible) {
        // If paragraph is above viewport, highlight all words
        if (paragraphRect.bottom <= 0) {
          for (let i = 0; i < spans.length; i++) {
            animateWord(i, true);
          }
          currentWordIndex.current = spans.length;
        }
        // If paragraph is below viewport, fade all words
        else if (paragraphRect.top >= window.innerHeight) {
          for (let i = 0; i < spans.length; i++) {
            animateWord(i, false);
          }
          currentWordIndex.current = 0;
        }
        return;
      }

      const scrollingDown = scrollY > lastScrollY.current;
      lastScrollY.current = scrollY;
      lastScrollTime.current = currentTime;

      // Calculate delay based on scroll speed (faster scroll = shorter delay)
      const baseDelay = 150; // base delay in ms
      const minDelay = 50; // minimum delay in ms
      const delay = Math.max(minDelay, baseDelay * (1 - scrollSpeed.current * 10));

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

      // Schedule next animation based on scroll speed
      setTimeout(() => {
        if ((scrollingDown && currentWordIndex.current < spans.length) ||
            (!scrollingDown && currentWordIndex.current > 0)) {
          handleScroll();
        }
      }, delay);
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
              <span className="bg-gradient-primary bg-clip-text text-transparent">Re-Imagined</span>
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