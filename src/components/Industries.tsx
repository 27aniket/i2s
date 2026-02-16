// import { Card, CardContent } from "@/components/ui/card";
// import { useEffect, useRef, useState } from "react";

// const industries = [
//   {
//     title: "Banking",
//     description: "Empowering financial institutions with secure and scalable digital platforms designed to streamline operations, enhance customer experiences, and meet evolving regulatory requirements.",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
//   },
//   // {
//   //   title: "Asset Management",
//   //   description: "Specializing in building and optimizing core trading platforms that support critical operations, improve system performance, and ensure reliability.",
//   //   image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80"
//   // },
//   {
//     title: "Insurance",
//     description: "Delivering tailored program management and operational support to improve efficiency and drive innovation within the insurance sector.",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     title: "Infrastructure",
//     description:
//       "We deliver GIS-driven town planning for sustainable, resilient infrastructure development.",
//     image:
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Education",
//     description: "Designing platforms dedicated to teaching artificial intelligence concepts to students and professionals, delivering an engaging and interactive learning experience.",
//     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     title: "Healthcare",
//     description: "Crafting specialized tools and operational support platforms to simplify complex financial and administrative processes in the healthcare sector.",
//     image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
//   },
//   // {
//   //   title: "GIS",
//   //   description: "Building advanced geospatial platforms to enable businesses and organizations to manage, analyze, and visualize geographic data effectively.",
//   //   image: "https://images.unsplash.com/photo-1527672809634-04ed36500acd?auto=format&fit=crop&w=800&q=80"
//   // }
// ];

// const Industries = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [isWhite, setIsWhite] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;
//       const startTransition = viewportHeight * 0.75; // Changed from 0.5 to 0.75 to start transition later
      
//       if (rect.top <= startTransition) {
//         setIsWhite(true);
//       } else {
//         setIsWhite(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section 
//       ref={sectionRef} 
//       className="relative w-full" 
//       id="industries"
//       style={{
//         backgroundColor: isWhite ? '#ffffff' : '#000000',
//         transition: 'background-color 1s ease-in-out', // Changed from 0.5s to 1sa
//       }}
//     >
//       <div className="max-w-[2000px] mx-auto px-4  pr-24 sm:px-6 lg:px-8 py-24">
//         <h2 className="section-title bg-gradient-primary text-transparent bg-clip-text text-center">Industries We Serve</h2>
//         <p className="section-subtitle" style={{ color: isWhite ? '#666666' : '#ffffff' }}>
//           Delivering innovative solutions across diverse sectors, transforming challenges into opportunities.
//         </p>
        
//         <div className="mt-12 relative">
//           <div className="max-w-[1200px] mx-auto overflow-x-auto pb-8 no-scrollbar">
//             <div className="flex gap-6 snap-x snap-mandatory touch-pan-x w-max">
//               {industries.map((industry) => (
//                 <div 
//                   key={industry.title} 
//                   className="w-[280px] md:w-[330px] flex-shrink-0 snap-center"
//                 >
//                   <Card className="border-white/10 bg-black/50 overflow-hidden group hover:border-[#f15a2b] transition-all duration-300 aspect-[3/4]">
//                     <CardContent className="p-0 h-full flex flex-col">
//                       <div className="relative h-1/2">
//                         <img
//                           src={industry.image}
//                           alt={industry.title}
//                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                         />
//                       </div>
//                       <div className="h-1/2 p-6 bg-black">
//                         <h3 className="text-2xl font-bold mb-3 bg-gradient-primary inline-block text-transparent bg-clip-text group-hover:text-[#f15a2b] transition-colors">
//                           {industry.title}
//                         </h3>
//                         <p className="text-gray-300">
//                           {industry.description}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" 
//                style={{ background: isWhite ? 'linear-gradient(to left, white, transparent)' : 'linear-gradient(to left, black, transparent)' }} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;


import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

const industries = [
  {
    title: "Banking",
    description:
      "Empowering financial institutions with secure and scalable digital platforms designed to streamline operations, enhance customer experiences, and meet evolving regulatory requirements.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Insurance",
    description:
      "Delivering tailored program management and operational support to improve efficiency and drive innovation within the insurance sector.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Infrastructure",
    description:
      "We deliver GIS-driven town planning for sustainable, resilient infrastructure development.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Education",
    description:
      "Designing platforms dedicated to teaching artificial intelligence concepts to students and professionals, delivering an engaging and interactive learning experience.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare",
    description:
      "Crafting specialized tools and operational support platforms to simplify complex financial and administrative processes in the healthcare sector.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Industries() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section id="industries" className="bg-white py-24">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title bg-gradient-primary text-transparent bg-clip-text text-center">
          Industries We Serve
        </h2>

        <p className="section-subtitle text-black text-center">
          Delivering innovative solutions across diverse sectors, transforming
          challenges into opportunities.
        </p>

        {/* Arrows */}
        <div className="flex justify-end gap-3 max-w-[1200px] mx-auto mt-8 mb-4">
          <button
            onClick={() => scroll("left")}
            className="px-4 py-2 border border-black text-black hover:bg-white hover:text-black transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="px-4 py-2 border border-black text-black hover:bg-white hover:text-black transition"
          >
            →
          </button>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="max-w-[1200px] mx-auto overflow-x-auto pb-8 pr-24 no-scrollbar scroll-smooth"
        >
          <div className="flex gap-6 w-max">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="w-[280px] md:w-[330px] flex-shrink-0"
              >
                <Card className="border-white/10 bg-black overflow-hidden group hover:border-[#f15a2b] transition-all duration-300 aspect-[3/4]">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-1/2">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="h-1/2 p-6 bg-black">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-primary inline-block text-transparent bg-clip-text group-hover:text-[#f15a2b] transition-colors">
                        {industry.title}
                      </h3>

                      <p className="text-gray-300">{industry.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




