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
      const windowHeight = window.innerHeight;
      const elementCenter = paragraphRect.top + (paragraphRect.height / 2);
      const viewportCenter = windowHeight / 2;
      
      // Check if the element's center is near the viewport center
      const isNearCenter = Math.abs(elementCenter - viewportCenter) < windowHeight * 0.1; // 10% threshold
      const hasCrossedCenter = elementCenter <= viewportCenter;
      
      // If element hasn't reached center yet, reset animation
      if (!hasCrossedCenter) {
        spans.forEach((_, i) => animateWord(i, false));
        currentWordIndex.current = 0;
        lastScrollY.current = scrollY;
        lastScrollTime.current = currentTime;
        return;
      }
      
      // If element has passed completely below center, highlight all
      if (elementCenter > windowHeight) {
        spans.forEach((_, i) => animateWord(i, true));
        currentWordIndex.current = spans.length;
        lastScrollY.current = scrollY;
        lastScrollTime.current = currentTime;
        return;
      }

      // Calculate progress based on center position
      const progressFromCenter = (viewportCenter - elementCenter) / (viewportCenter);
      const targetWordIndex = Math.floor(progressFromCenter * words.length);
      
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