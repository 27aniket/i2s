import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    title: "Banking",
    description: "Empowering financial institutions with secure and scalable digital platforms designed to streamline operations, enhance customer experiences, and meet evolving regulatory requirements. From personalized services to efficient backend systems, we focus on enabling seamless and reliable banking solutions.",
    image: "photo-1601597111158-2fceff292cdc" // Modern banking/fintech image
  },
  {
    title: "Asset Management",
    description: "Specializing in building and optimizing core trading platforms that support critical operations, improve system performance, and ensure reliability. Our expertise lies in creating robust systems that simplify portfolio management, improve analytics, and drive operational efficiency for asset management firms.",
    image: "photo-1642543492481-44e81e3914a7" // Trading/investment dashboard image
  },
  {
    title: "Insurance",
    description: "Delivering tailored program management and operational support to improve efficiency and drive innovation within the insurance sector. We focus on enabling insurers to modernize their workflows, optimize resources, and adapt to changing market needs with scalable solutions.",
    image: "photo-1450101499163-c8848c66ca85" // Modern insurance office
  },
  {
    title: "Education",
    description: "Designing platforms dedicated to teaching artificial intelligence concepts to students and professionals. These platforms are developed to deliver an engaging, interactive, and structured learning experience that equips users with the skills they need to thrive in AI-driven industries.",
    image: "photo-1509062522246-3755977927d7" // Modern educational tech
  },
  {
    title: "Healthcare",
    description: "Crafting specialized tools such as pension calculators and operational support platforms to simplify complex financial and administrative processes in the healthcare sector. Our solutions are designed to enhance efficiency, accuracy, and user accessibility for organizations managing healthcare operations.",
    image: "photo-1576091160550-2173dba999ef" // Modern healthcare tech
  },
  {
    title: "GIS",
    description: "Building advanced geospatial platforms to enable businesses and organizations to manage, analyze, and visualize geographic data effectively. These solutions empower users with strategic insights for urban planning, logistics, natural resource management, and beyond.",
    image: "photo-1451187580459-43490279c0fa" // GIS/mapping visualization
  }
];

const Industries = () => {
  return (
    <section className="section-container" id="industries">
      <h2 className="section-title">Industries We Serve</h2>
      <p className="section-subtitle">
        Delivering innovative solutions across diverse sectors, transforming challenges into opportunities.
      </p>
      
      <div className="mt-12 overflow-x-auto pb-8 no-scrollbar">
        <div className="flex gap-4 snap-x snap-mandatory touch-pan-x w-full">
          {industries.map((industry) => (
            <div 
              key={industry.title} 
              className="w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw] flex-shrink-0 snap-center"
            >
              <Card className="border-white/10 bg-black/50 overflow-hidden group hover:border-[#f15a2b] transition-all duration-300 aspect-[9/16] h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative h-1/2">
                    <img
                      src={`https://images.unsplash.com/${industry.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="h-1/2 p-6 bg-black/50">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#f15a2b] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300">
                      {industry.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
