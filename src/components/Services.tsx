import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Lightbulb, Code, Brain, LineChart, Users } from "lucide-react";

const services = [
  {
    title: "Innovation Strategy",
    description: "We help businesses define and implement strategies to drive innovation and stay ahead in a competitive market. From identifying emerging trends to evaluating disruptive technologies, we enable organizations to create value through transformative ideas and cutting-edge solutions.",
    icon: Lightbulb
  },
  {
    title: "Product Discovery",
    description: "Our Product Discovery service helps businesses validate ideas, understand user needs, and define the right features for a successful product launch. We conduct market research, competitor analysis, and user interviews to ensure your product aligns with customer expectations and business goals.",
    icon: LineChart
  },
  {
    title: "Product Development",
    description: "We specialize in end-to-end product development, turning your ideas into robust, scalable, and user-friendly solutions. Leveraging agile methodologies, we ensure rapid delivery without compromising quality, keeping your business goals at the forefront.",
    icon: Code
  },
  {
    title: "Artificial Intelligence",
    description: "Empowering businesses with AI-driven solutions to automate processes, enhance decision-making, and unlock new opportunities. Our expertise spans machine learning, natural language processing, and computer vision, tailored to solve real-world problems across industries.",
    icon: Brain
  },
  {
    title: "Product Management",
    description: "We provide comprehensive product management services to ensure your products are delivered on time, within budget, and aligned with customer expectations. From roadmaps to release planning, our team ensures every step of the product lifecycle is optimized for success.",
    icon: Rocket
  },
  {
    title: "Staff Augmentation",
    description: "Scale your team with top talent and fill critical skill gaps quickly through our staff augmentation services. Whether you need developers, designers, or project managers, we provide skilled professionals who integrate seamlessly with your team and processes.",
    icon: Users
  }
];

const Services = () => {
  // Calculate the new card width (360.25px * 0.8 = 288.2px)
  const cardWidth = 288.2;
  // Calculate total width for 3 cards plus 2 gaps (1.5rem = 24px)
  const totalWidth = (cardWidth * 3) + (24 * 2); // 912.6px
  
  return (
    <section className="section-container" id="services">
      <h2 className="section-title bg-gradient-primary text-transparent bg-clip-text text-center">Our Services</h2>
      <p className="section-subtitle">
        Comprehensive solutions tailored to your business needs
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[912.6px] mx-auto mt-12">
        {services.map((service) => (
          <Card 
            key={service.title}
            className="group relative overflow-hidden border-white/10 hover:border-[#f15a2b] bg-black/50 hover:bg-white transition-all duration-300 rounded-none aspect-[3/4] w-[288.2px]"
          >
            <CardContent className="p-0 h-full">
              <div className="absolute inset-0 z-10 transition-transform duration-500 group-hover:-translate-y-full">
                <div className="w-full h-full flex items-center justify-center bg-black/50">
                  <service.icon size={64} className="text-white/80" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="absolute inset-0 p-6 bg-white flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-primary inline-block text-transparent bg-clip-text">
                  {service.title}
                </h3>
                <p className="text-gray-700">
                  {service.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;