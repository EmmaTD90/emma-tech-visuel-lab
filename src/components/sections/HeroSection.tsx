
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const portfolioImages = [
    "/lovable-uploads/ff47ade9-a4ef-4960-b63a-ba2cb8916e1f.png",
    "/lovable-uploads/77c264dc-df87-4e60-bdd2-4f8e50eda495.png",
    "/lovable-uploads/f1d18f05-08ff-46d2-9619-6cd7230a7996.png",
  ];

  // Effet pour faire défiler automatiquement les images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-br from-gray-50 to-emma-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-emma-darkblue">
              Donnez vie à vos idées avec{" "}
              <span className="gradient-text">Emma Tech Design!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Design graphique, sérigraphie & développement web pour sublimer votre identité visuelle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                asChild
                className="bg-emma-blue hover:bg-emma-darkblue text-white text-lg py-6 px-8 animate-pulse"
              >
                <a href="#portfolio">Découvrez mes réalisations</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-emma-blue text-emma-blue hover:bg-emma-blue hover:text-white text-lg py-6 px-8 transition-all duration-300"
              >
                <a href="#contact">Commandez un service</a>
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            {/* Carousel for mobile and tablet */}
            <div className="block lg:hidden">
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  {portfolioImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-emma-blue/10 to-emma-teal/10 p-4">
                        <img
                          src={img}
                          alt={`Portfolio Emma Tech Design ${index + 1}`}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emma-darkblue/40 to-transparent rounded-lg flex items-end p-6">
                          <p className="text-white text-xl font-semibold">
                            Créativité • Technologie • Impact Visuel
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>

            {/* Animated image for desktop */}
            <div className="hidden lg:block relative z-20 rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-emma-blue/10 to-emma-teal/10 p-6">
              <img
                src={portfolioImages[currentImageIndex]}
                alt="Mini Portfolio Emma Tech Design"
                className="w-full h-auto rounded-lg transition-opacity duration-1000"
                style={{animation: "fade-in 0.5s ease-in-out"}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emma-darkblue/40 to-transparent rounded-lg flex items-end p-6">
                <p className="text-white text-xl font-semibold">
                  Créativité • Technologie • Impact Visuel
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-emma-teal/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-emma-gold/30 rounded-full blur-lg"></div>
            
            {/* Floating elements */}
            <div className="absolute top-1/3 right-5 w-8 h-8 bg-emma-gold/40 rounded-full animate-bounce" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute bottom-1/4 left-10 w-6 h-6 bg-emma-teal/30 rounded-full animate-bounce" style={{animationDelay: "1s"}}></div>
          </div>
        </div>
      </div>

      {/* Background Elements with Animation */}
      <div className="hidden lg:block absolute top-20 right-10 w-32 h-32 bg-emma-blue/5 rounded-full animate-pulse"></div>
      <div className="hidden lg:block absolute bottom-10 left-20 w-40 h-40 bg-emma-teal/5 rounded-full" style={{animation: "pulse 3s infinite"}}></div>
      
      {/* Dynamic decoration */}
      <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-24 h-24 bg-emma-gold/10 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
