
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from "../AnimatedSection";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tous" },
    { id: "logos", name: "Logos & identités" },
    { id: "print", name: "Flyers & affiches" },
    { id: "cards", name: "Cartes & invitations" },
    { id: "textile", name: "Sérigraphie textile" },
    { id: "web", name: "Sites web" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Logo Emma Tech Design",
      category: "logos",
      image: "/lovable-uploads/4f19c9c7-969f-45f6-879d-bde0513fd76d.png",
      tools: "Illustrator, Photoshop",
      client: "Emma Tech Design",
      description: "Logo principal de la marque Emma Tech Design",
    },
    {
      id: 2,
      title: "Site Web Emma Tech",
      category: "web",
      image: "/lovable-uploads/ff47ade9-a4ef-4960-b63a-ba2cb8916e1f.png",
      tools: "React, Tailwind CSS",
      client: "Emma Tech Design",
      description: "Interface du site vitrine pour le portfolio",
    },
    {
      id: 3,
      title: "Affiche Festival",
      category: "print",
      image: "/lovable-uploads/77c264dc-df87-4e60-bdd2-4f8e50eda495.png",
      tools: "Photoshop, InDesign",
      client: "Festival de Musique",
      description: "Affiche promotionnelle pour un festival culturel",
    },
    {
      id: 4,
      title: "Design T-shirt 'All You Need is Love'",
      category: "textile",
      image: "/lovable-uploads/116a6d97-1d01-4c59-b95a-bb181d168835.png",
      tools: "Sérigraphie, Illustrator",
      client: "Collection Valentine",
      description: "T-shirt sérigraphié avec message d'amour",
    },
    {
      id: 5,
      title: "Cartes de Visite Professionnelles",
      category: "cards",
      image: "/lovable-uploads/61cff531-6ba5-45a8-876e-71dc009657a8.png",
      tools: "InDesign, Photoshop",
      client: "Entreprenariat Bénin",
      description: "Cartes de visite pour professionnels locaux",
    },
    {
      id: 6,
      title: "Flyer Promotionnel",
      category: "print",
      image: "/lovable-uploads/77c264dc-df87-4e60-bdd2-4f8e50eda495.png",
      tools: "Photoshop, Illustrator",
      client: "Boutique Locale",
      description: "Flyers pour promotion de produits locaux",
    },
    {
      id: 7,
      title: "Site Portfolio Créatif",
      category: "web",
      image: "/lovable-uploads/cf20d2ca-fd41-437c-8940-35032f3aebe8.png",
      tools: "React, Next.js, CSS",
      client: "Studio Design",
      description: "Portfolio professionnel avec thème jaune",
    },
    {
      id: 8,
      title: "Site Web Moderne",
      category: "web",
      image: "/lovable-uploads/a64a3446-e766-4b12-b0fc-f542b4accbd6.png",
      tools: "React, Tailwind CSS",
      client: "Startup Tech",
      description: "Design épuré avec sections de projets de maquette",
    },
    {
      id: 9,
      title: "Portfolio Designer",
      category: "web",
      image: "/lovable-uploads/1262deab-ed7d-4bf0-bfff-375998378d99.png",
      tools: "HTML, CSS, JavaScript",
      client: "Jean Designer",
      description: "Site personnel pour designer freelance",
    },
    {
      id: 10,
      title: "Studio Design Site",
      category: "web",
      image: "/lovable-uploads/cdf0e824-9f94-45c2-9e70-b7ee06811667.png",
      tools: "React, Framer Motion",
      client: "Cubikem Design",
      description: "Site web d'agence de design avec animations fluides",
    },
    {
      id: 11,
      title: "Portfolio Équipe",
      category: "web",
      image: "/lovable-uploads/7d86be54-fb12-42b6-8470-0d06836e64e1.png",
      tools: "Vue.js, Tailwind CSS",
      client: "Studio Créatif",
      description: "Présentation d'équipe pour studio de création",
    },
    {
      id: 12,
      title: "Site Agence Web",
      category: "web",
      image: "/lovable-uploads/dacf27c4-d559-46a1-9110-1f51f00b12b2.png",
      tools: "React, Styled Components",
      client: "Web Studio",
      description: "Site vitrine pour agence web avec design sombre",
    },
    {
      id: 13,
      title: "Site Créatif Moderne",
      category: "web",
      image: "/lovable-uploads/15f6b811-7da8-4499-90e8-64727f61d6c9.png",
      tools: "Next.js, GSAP",
      client: "Agence Créative",
      description: "Design coloré avec formes organiques et animations",
    },
    {
      id: 14,
      title: "Studio Numérique",
      category: "web",
      image: "/lovable-uploads/16081224-395b-426c-8d23-2b3eac4de383.png",
      tools: "React, CSS Modules",
      client: "Studio Numérique",
      description: "Design sur thème bleu et corail pour studio digital",
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <AnimatedSection className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-emma-darkblue">
            Mon <span className="text-emma-blue">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-emma-blue mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 animate-on-scroll">
            Découvrez mes dernières réalisations et projets
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10 bg-transparent space-x-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-emma-blue data-[state=active]:text-white px-6 py-2 rounded-full"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => category.id === "all" || item.category === category.id)
                  .map((item) => (
                    <TooltipProvider key={item.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="animate-on-scroll group">
                            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                              <div className="w-full h-64 overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-emma-darkblue/90 to-emma-darkblue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                                <p className="text-emma-gold font-medium mt-1">Client: {item.client}</p>
                                <p className="text-gray-300 text-sm mt-2">Outils: {item.tools}</p>
                              </div>
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Showcase des travaux web en carrousel */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-emma-darkblue">Nos réalisations web récentes</h3>
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {portfolioItems
                .filter((item) => item.category === "web")
                .map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-emma-darkblue">{item.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Galerie supplémentaire */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/lovable-uploads/41809d1c-d387-4e9e-9071-196ae20d5a67.png",
            "/lovable-uploads/a2494579-6f0f-428c-b5d8-3d3af3e96125.png",
            "/lovable-uploads/e28bf013-ab19-4640-ae2b-35c92749e251.png",
            "/lovable-uploads/5c96d3bf-b349-4401-a239-690b6481ace3.png",
            "/lovable-uploads/ac89eabb-d3ab-4cea-ba1e-09ba4b871707.png",
            "/lovable-uploads/9769b5c8-2e02-475a-b81d-f33d9d5191cf.png"
          ].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <img 
                src={image} 
                alt={`Projet supplémentaire ${index + 1}`} 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default PortfolioSection;
