import { 
  Stethoscope, 
  DollarSign, 
  ShoppingCart, 
  GraduationCap, 
  Truck, 
  Rocket 
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Revolutionizing patient care through innovative software solutions and seamless healthcare system integration."
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Empowering financial institutions with secure, scalable, and efficient digital transformation solutions."
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Building cutting-edge platforms that deliver exceptional shopping experiences and drive business growth."
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Creating engaging learning platforms that connect educators and students in the digital age."
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Optimizing operations with smart tracking and management solutions for modern supply chains."
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Accelerating startup growth with agile development and scalable technology solutions."
  }
];

const Industries = () => {
  return (
    <section className="section-container" id="industries">
      <h2 className="section-title">Industries We Empower</h2>
      <p className="section-subtitle">
        Delivering innovative solutions across diverse sectors, transforming challenges into opportunities.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {industries.map((industry, index) => (
          <div 
            key={industry.title}
            className="card group hover:border-mint-500 hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-mint-500/10 group-hover:bg-mint-500/20 transition-colors">
                <industry.icon className="w-8 h-8 text-mint-500" />
              </div>
              <h3 className="text-xl font-semibold">{industry.title}</h3>
              <p className="text-gray-400">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;