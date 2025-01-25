import { useEffect, useRef } from 'react';

const ScrollAnimatedText = ({ text }: { text: string }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const lastScrollY = useRef(0);
  const currentWordIndex = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const totalWordsRef = useRef(0);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const paragraphs = text.split('\n\n');
    let totalWords = 0;
    const formattedText = paragraphs.map(para => {
      const words = para.split(' ');
      totalWords += words.length;
      return words
        .map((word, index) => `<span class="inline-block transition-colors duration-300 ease-in-out text-[#555555]" data-index="${totalWords - words.length + index}">${word}</span>`)
        .join(' ');
    }).join('<br><br>');
    
    paragraph.innerHTML = formattedText;
    totalWordsRef.current = totalWords;

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
      const viewportTrigger = windowHeight * 0.7; // Trigger at 70% of viewport height
      
      if (elementTop > viewportTrigger) {
        spans.forEach((_, i) => animateWord(i, false));
        currentWordIndex.current = 0;
        lastScrollY.current = scrollY;
        lastScrollTime.current = currentTime;
        return;
      }
      
      if (elementTop < -paragraphRect.height) {
        spans.forEach((_, i) => animateWord(i, true));
        currentWordIndex.current = totalWordsRef.current;
        lastScrollY.current = scrollY;
        lastScrollTime.current = currentTime;
        return;
      }

      // Enhanced progress calculation for smoother and complete highlighting
      const totalDistance = viewportTrigger + paragraphRect.height;
      const scrolledDistance = viewportTrigger - elementTop;
      const progress = Math.min(1, Math.max(0, (scrolledDistance * 1.5) / totalDistance));
      const targetWordIndex = Math.floor(progress * totalWordsRef.current);
      
      const scrollingDown = scrollY > lastScrollY.current;
      
      if (scrollingDown) {
        while (currentWordIndex.current < targetWordIndex && currentWordIndex.current < totalWordsRef.current) {
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
    <p 
      ref={paragraphRef} 
      className="max-w-2xl mx-auto text-[50px] leading-tight whitespace-pre-line text-center"
      style={{ margin: '0 auto' }} 
    />
  );
};

export default ScrollAnimatedText;