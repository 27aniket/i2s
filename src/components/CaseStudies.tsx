import { Card } from "@/components/ui/card";

interface CaseStudy {
  title: string;
  description: string;
  industry: string;
  impact: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Digital Transformation for Public Services",
    description: "Revolutionized citizen service delivery through an integrated digital platform, reducing processing times by 60%.",
    industry: "Government",
    impact: "Improved citizen satisfaction by 85%",
  },
  {
    title: "Smart City Infrastructure Management",
    description: "Implemented IoT-based monitoring system for urban infrastructure, optimizing resource allocation and maintenance.",
    industry: "Urban Development",
    impact: "40% reduction in maintenance costs",
  },
  {
    title: "Healthcare Data Analytics Platform",
    description: "Developed a comprehensive analytics solution for healthcare providers, enabling data-driven decision making.",
    industry: "Healthcare",
    impact: "30% improvement in patient outcomes",
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-container bg-black">
      <h2 className="section-title">Case Studies</h2>
      <p className="section-subtitle">
        Discover how we've helped organizations achieve their digital transformation goals
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {caseStudies.map((study, index) => (
          <Card key={index} className="card hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
                {study.title}
              </h3>
              <p className="text-gray-300 mb-4">{study.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Industry:</span>
                  <span className="text-sm text-white">{study.industry}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Impact:</span>
                  <span className="text-sm text-mint-400">{study.impact}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;