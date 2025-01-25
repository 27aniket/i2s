import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Innovation Strategy",
    description: "We help businesses define and implement strategies to drive innovation and stay ahead in a competitive market. From identifying emerging trends to evaluating disruptive technologies, we enable organizations to create value through transformative ideas and cutting-edge solutions.",
    image: "photo-1460925895917-afdab827c52f"
  },
  {
    title: "Product Discovery",
    description: "Our Product Discovery service helps businesses validate ideas, understand user needs, and define the right features for a successful product launch. We conduct market research, competitor analysis, and user interviews to ensure your product aligns with customer expectations and business goals.",
    image: "photo-1522071820081-009f0129c71c"
  },
  {
    title: "Product Development",
    description: "We specialize in end-to-end product development, turning your ideas into robust, scalable, and user-friendly solutions. Leveraging agile methodologies, we ensure rapid delivery without compromising quality, keeping your business goals at the forefront.",
    image: "photo-1522071901873-411886a10004"
  },
  {
    title: "Artificial Intelligence",
    description: "Empowering businesses with AI-driven solutions to automate processes, enhance decision-making, and unlock new opportunities. Our expertise spans machine learning, natural language processing, and computer vision, tailored to solve real-world problems across industries.",
    image: "photo-1677442136019-21780ecad995"
  },
  {
    title: "Product Management",
    description: "We provide comprehensive product management services to ensure your products are delivered on time, within budget, and aligned with customer expectations. From roadmaps to release planning, our team ensures every step of the product lifecycle is optimized for success.",
    image: "photo-1531403009284-440f080d1e12"
  },
  {
    title: "Staff Augmentation",
    description: "Scale your team with top talent and fill critical skill gaps quickly through our staff augmentation services. Whether you need developers, designers, or project managers, we provide skilled professionals who integrate seamlessly with your team and processes.",
    image: "photo-1553877522-43269d4ea984"
  }
];

const Services = () => {
  return (
    <section className="section-container" id="services">
      <h2 className="section-title bg-gradient-primary text-transparent bg-clip-text text-center">Our Services</h2>
      <p className="section-subtitle">
        Comprehensive solutions tailored to your business needs
      </p>
      
      <div className="mt-12 relative">
        <div className="max-w-[1200px] mx-auto overflow-x-auto pb-8 no-scrollbar">
          <div className="flex gap-6 snap-x snap-mandatory touch-pan-x w-max">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="w-[300px] md:w-[350px] flex-shrink-0 snap-center"
              >
                <Card className="border-white/10 bg-black/50 overflow-hidden group hover:border-[#f15a2b] transition-all duration-300 aspect-[3/4]">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-1/2">
                      <img
                        src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=800&q=80`}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="h-1/2 p-6 bg-black">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-primary inline-block text-transparent bg-clip-text group-hover:text-[#f15a2b] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Services;