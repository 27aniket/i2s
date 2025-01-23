import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('text-white');
            entry.target.classList.remove('text-[#555555]');
          } else {
            entry.target.classList.remove('text-white');
            entry.target.classList.add('text-[#555555]');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    // Split the paragraph into sentences and create spans for each
    const sentences = paragraph.textContent?.match(/[^.!?]+[.!?]+/g) || [];
    paragraph.innerHTML = sentences
      .map(sentence => `<span class="transition-colors duration-500 ease-in-out text-[#555555]">${sentence}</span>`)
      .join(' ');

    // Observe each sentence span
    paragraph.querySelectorAll('span').forEach(span => {
      observer.observe(span);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="section-container">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Transforming Ideas into
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Software Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Empowering businesses with fresh perspectives and seamless solutions
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
          <p 
            ref={paragraphRef}
            className="max-w-4xl mx-auto text-[70px] leading-tight mt-60"
          >
            We amplify human ingenuity through the power of deep technology. By combining strategic insights with advanced software solutions, we empower businesses to unlock their full potential. Whether it's harnessing AI, modernizing legacy systems, or building future-ready platforms, we focus on enabling innovation that drives meaningful transformation. Together, let's shape a smarter, more connected future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;