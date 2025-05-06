
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from "../AnimatedSection";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
      title: "Design T-shirt ETD",
      category: "textile",
      image: "/lovable-uploads/f1d18f05-08ff-46d2-9619-6cd7230a7996.png",
      tools: "Sérigraphie, Illustrator",
      client: "Ligne de vêtements Emma Tech",
      description: "Collection de t-shirts personnalisés",
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
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                              />
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
      </AnimatedSection>
    </section>
  );
};

export default PortfolioSection;
