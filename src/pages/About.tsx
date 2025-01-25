import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="section-container pt-32">
        {/* Vision Section */}
        <section className="mb-20 scroll-animate opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To become a global leader in enabling transformative change through intelligent solutions, 
            fostering inclusive growth, and bridging the digital divide for a more equitable and sustainable world.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20 scroll-animate opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Our Mission
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-gradient-primary flex-shrink-0" />
              <p className="text-lg text-gray-600 leading-relaxed">
                To seamlessly integrate people, processes, and policies, delivering tailored solutions 
                that empower communities and drive impactful governance.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-gradient-primary flex-shrink-0" />
              <p className="text-lg text-gray-600 leading-relaxed">
                To harness the power of AI and emerging technologies to create adaptive and 
                sustainable systems for a smarter tomorrow.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-gradient-primary flex-shrink-0" />
              <p className="text-lg text-gray-600 leading-relaxed">
                To remain committed to stakeholder-centric innovation that aligns with the aspirations 
                and needs of citizens.
              </p>
            </li>
          </ul>
        </section>

        {/* Core Values Section */}
        <section className="mb-20 scroll-animate opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Core Values
          </h2>
          <div className="space-y-8">
            <div className="rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation at the Core</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technologies to design forward-thinking solutions 
                that address real-world challenges.
              </p>
            </div>
            <div className="rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Stakeholder Empowerment</h3>
              <p className="text-gray-600">
                Our people-first approach ensures that citizens and policymakers are at 
                the heart of every transformation.
              </p>
            </div>
            <div className="rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Agility and Adaptability</h3>
              <p className="text-gray-600">
                We thrive in dynamic environments, delivering rapid and scalable solutions 
                tailored to evolving needs.
              </p>
            </div>
            <div className="rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Integrity and Transparency</h3>
              <p className="text-gray-600">
                Upholding the highest ethical standards, we build trust through accountability 
                and open communication.
              </p>
            </div>
            <div className="rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainability and Inclusivity</h3>
              <p className="text-gray-600">
                We aim to bridge the digital divide, ensuring no one is left behind in the 
                journey toward progress.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;