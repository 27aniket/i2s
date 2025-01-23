import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    title: "Banking",
    description: "Empowering financial institutions with secure and scalable digital platforms designed to streamline operations, enhance customer experiences, and meet evolving regulatory requirements. From personalized services to efficient backend systems, we focus on enabling seamless and reliable banking solutions.",
    image: "photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Asset Management",
    description: "Specializing in building and optimizing core trading platforms that support critical operations, improve system performance, and ensure reliability. Our expertise lies in creating robust systems that simplify portfolio management, improve analytics, and drive operational efficiency for asset management firms.",
    image: "photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Insurance",
    description: "Delivering tailored program management and operational support to improve efficiency and drive innovation within the insurance sector. We focus on enabling insurers to modernize their workflows, optimize resources, and adapt to changing market needs with scalable solutions.",
    image: "photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Education",
    description: "Designing platforms dedicated to teaching artificial intelligence concepts to students and professionals. These platforms are developed to deliver an engaging, interactive, and structured learning experience that equips users with the skills they need to thrive in AI-driven industries.",
    image: "photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Healthcare",
    description: "Crafting specialized tools such as pension calculators and operational support platforms to simplify complex financial and administrative processes in the healthcare sector. Our solutions are designed to enhance efficiency, accuracy, and user accessibility for organizations managing healthcare operations.",
    image: "photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "GIS",
    description: "Building advanced geospatial platforms to enable businesses and organizations to manage, analyze, and visualize geographic data effectively. These solutions empower users with strategic insights for urban planning, logistics, natural resource management, and beyond.",
    image: "photo-1487058792275-0ad4aaf24ca7"
  }
];

const Industries = () => {
  return (
    <section className="section-container" id="industries">
      <h2 className="section-title">Industries We Serve</h2>
      <p className="section-subtitle">
        Delivering innovative solutions across diverse sectors, transforming challenges into opportunities.
      </p>
      
      <div className="mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {industries.map((industry, index) => (
              <CarouselItem key={industry.title} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-[30%]">
                <Card className="border-white/10 bg-black/50 overflow-hidden group hover:border-mint-500 transition-all duration-300 aspect-[9/16]">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      <img
                        src={`https://images.unsplash.com/${industry.image}?auto=format&fit=crop&w=800&q=80`}
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-mint-500 transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-gray-300 line-clamp-3">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Industries;