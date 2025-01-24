import { useEffect, useRef } from 'react';

const ScrollAnimatedText = ({ text }: { text: string }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const lastScrollY = useRef(0);
  const currentWordIndex = useRef(0);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    // Split the text into individual words
    const words = text.split(' ');
    
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
      
      const paragraphRect = paragraph.getBoundingClientRect();
      const isVisible = paragraphRect.top < window.innerHeight && paragraphRect.bottom > 0;
      
      // If paragraph is not visible, reset or complete the animation
      if (!isVisible) {
        if (paragraphRect.bottom <= 0) {
          // If scrolled past, highlight all words
          spans.forEach((_, i) => animateWord(i, true));
          currentWordIndex.current = spans.length;
        } else if (paragraphRect.top >= window.innerHeight) {
          // If not scrolled to yet, reset all words
          spans.forEach((_, i) => animateWord(i, false));
          currentWordIndex.current = 0;
        }
        lastScrollY.current = scrollY;
        lastScrollTime.current = currentTime;
        return;
      }

      // Calculate visibility percentage
      const visibilityPercentage = 1 - (paragraphRect.top / window.innerHeight);
      const targetWordIndex = Math.floor(visibilityPercentage * words.length);
      
      // Determine scroll direction
      const scrollingDown = scrollY > lastScrollY.current;
      
      // Update animation based on scroll direction
      if (scrollingDown) {
        while (currentWordIndex.current < targetWordIndex && currentWordIndex.current < words.length) {
          animateWord(currentWordIndex.current, true);
          currentWordIndex.current++;
        }
      } else {
        while (currentWordIndex.current > targetWordIndex && currentWordIndex.current > 0) {
          currentWordIndex.current--;
          animateWord(currentWordIndex.current, false);
        }
      }

      lastScrollY.current = scrollY;
      lastScrollTime.current = currentTime;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [text]);

  return (
    <p ref={paragraphRef} className="max-w-2xl mx-auto text-[50px] leading-tight" />
  );
};

export default ScrollAnimatedText;