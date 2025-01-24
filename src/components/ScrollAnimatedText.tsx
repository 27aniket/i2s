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
      const scrollY = window.scrollY;
      
      const paragraphRect = paragraph.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = paragraphRect.top;
      const viewportCenter = windowHeight / 2;
      
      // If element hasn't reached center yet, reset animation
      if (elementTop > viewportCenter) {
        spans.forEach((_, i) => animateWord(i, false));
        currentWordIndex.current = 0;
        lastScrollY.current = scrollY;
        lastScrollTime.current = currentTime;
        return;
      }
      
      // If element has passed completely below center, highlight all
      if (elementTop < -paragraphRect.height) {
        spans.forEach((_, i) => animateWord(i, true));
        currentWordIndex.current = spans.length;
        lastScrollY.current = scrollY;
        lastScrollTime.current = currentTime;
        return;
      }

      // Calculate progress based on element's position relative to viewport center
      const progress = (viewportCenter - elementTop) / viewportCenter;
      // Slow down the animation by multiplying progress by 0.25
      const adjustedProgress = progress * 0.25;
      const targetWordIndex = Math.floor(adjustedProgress * words.length);
      
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