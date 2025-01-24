import { useEffect, useRef } from 'react';

const ScrollAnimatedText = ({ text }: { text: string }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const lastScrollY = useRef(0);
  const currentWordIndex = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const scrollSpeed = useRef(0);

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
      const scrollDiff = Math.abs(scrollY - lastScrollY.current);
      
      scrollSpeed.current = scrollDiff / (timeDiff || 1);
      
      const paragraphRect = paragraph.getBoundingClientRect();
      const isVisible = paragraphRect.top < window.innerHeight && paragraphRect.bottom > 0;
      
      if (!isVisible) {
        if (paragraphRect.bottom <= 0) {
          spans.forEach((_, i) => animateWord(i, true));
          currentWordIndex.current = spans.length;
        } else if (paragraphRect.top >= window.innerHeight) {
          spans.forEach((_, i) => animateWord(i, false));
          currentWordIndex.current = 0;
        }
        return;
      }

      const scrollingDown = scrollY > lastScrollY.current;
      lastScrollY.current = scrollY;
      lastScrollTime.current = currentTime;

      const baseDelay = 150;
      const minDelay = 50;
      const delay = Math.max(minDelay, baseDelay * (1 - scrollSpeed.current * 10));

      if (scrollingDown && currentWordIndex.current < spans.length) {
        animateWord(currentWordIndex.current, true);
        currentWordIndex.current++;
      } else if (!scrollingDown && currentWordIndex.current > 0) {
        currentWordIndex.current--;
        animateWord(currentWordIndex.current, false);
      }

      if ((scrollingDown && currentWordIndex.current < spans.length) ||
          (!scrollingDown && currentWordIndex.current > 0)) {
        setTimeout(handleScroll, delay);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [text]);

  return (
    <p ref={paragraphRef} className="max-w-2xl mx-auto text-[50px] leading-tight" />
  );
};

export default ScrollAnimatedText;