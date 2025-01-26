import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface CaseStudyData {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  impact: string[];
  image: string;
}

const caseStudies: CaseStudyData[] = [
  {
    title: "Empowering a Digital Bank in Saudi Arabia",
    client: "A leading financial institution in the Middle East aiming to redefine digital banking.",
    challenge: "The client wanted to create Saudi Arabia's first fully digital bank, addressing challenges such as regulatory compliance, secure real-time transactions, and reducing account onboarding times.",
    solution: "Developed a secure and scalable digital platform, implemented automated workflows for onboarding, and designed real-time payment systems tailored to local regulations.",
    impact: [
      "Reduced onboarding time by 80%",
      "Achieved seamless real-time payment processing",
      "Established a benchmark for digital banking in the region"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Optimizing Trading Platforms",
    client: "A globally recognized asset management firm known for its innovative trading strategies.",
    challenge: "The client needed to improve the performance of their trading platform, reducing latency and optimizing strategy execution for high transaction volumes.",
    solution: "Designed a distributed caching mechanism, implemented genetic algorithms with parallel processing, and developed real-time computation pipelines for backtesting metrics.",
    impact: [
      "Reduced trading latency by 40%",
      "Improved platform scalability, handling 2x transaction volume",
      "Enabled faster decision-making through real-time analytics"
    ],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Enhancing Program Efficiency for a UK-Based Insurer",
    client: "A prominent insurance provider in the UK focused on operational transformation.",
    challenge: "The client sought to streamline their program management processes to improve efficiency and collaboration across teams.",
    solution: "Provided strategic program management support, optimized workflows, and delivered actionable insights through comprehensive reporting.",
    impact: [
      "Reduced operational overhead by 30%",
      "Improved collaboration across departments",
      "Delivered programs on time and within budget"
    ],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Upskilling Professionals and Students in AI and ML",
    client: "An education initiative focused on advancing AI and ML knowledge for professionals and students worldwide.",
    challenge: "The client needed to deliver engaging and effective learning experiences to upskill a global audience.",
    solution: "Developed interactive platforms for learning AI and ML concepts and authored globally recognized books on data science and machine learning.",
    impact: [
      "Thousands of professionals and students benefited from tailored learning experiences",
      "Books reached a global audience, enhancing AI literacy across industries"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Simplifying NHS Pension Calculations",
    client: "The UK's National Health Service (NHS), focused on delivering efficient healthcare services and supporting its workforce.",
    challenge: "The client needed a solution to simplify complex pension calculations for its employees, improving accessibility and accuracy.",
    solution: "Developed a specialized tool to automate pension calculations and streamline administrative workflows.",
    impact: [
      "Reduced administrative overhead by 50%",
      "Improved accuracy and accessibility for NHS employees",
      "Enhanced user experience through intuitive interfaces"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "QR Code-Based Public Asset Management in India",
    client: "A regional governance body in India focused on efficient asset tracking and management.",
    challenge: "The client needed a system to track and manage public assets such as poles and roads, ensuring real-time updates and accountability.",
    solution: "Designed a QR code-based asset management platform to uniquely identify and monitor assets, enabling centralized tracking and maintenance.",
    impact: [
      "Improved accountability and resource allocation",
      "Enabled real-time asset tracking across regions",
      "Reduced inefficiencies in asset management processes"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Case Studies
          </h1>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0 
                }}
                viewport={{ 
                  once: true,
                  margin: "-150px"
                }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="rounded-lg overflow-hidden"
                style={{
                  padding: '1px',
                  background: 'linear-gradient(45deg, #ed265d, #f15a2b)',
                }}
              >
                <div className={`grid md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'} bg-white rounded-lg`}>
                  <div className="h-full">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                      style={{ minHeight: '600px' }}
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                      {study.title}
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-black mb-2">About the Client</h3>
                        <p>{study.client}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-2">Business Challenge</h3>
                        <p>{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-2">Business Solution</h3>
                        <p>{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-2">Impact</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {study.impact.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
