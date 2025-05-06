
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from "../AnimatedSection";

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
      title: "Logo Entreprise XYZ",
      category: "logos",
      image: "/public/placeholder.svg",
      tools: "Illustrator, Photoshop",
      client: "Entreprise XYZ",
    },
    {
      id: 2,
      title: "Flyer Événement",
      category: "print",
      image: "/public/placeholder.svg",
      tools: "InDesign, Illustrator",
      client: "Festival de la Culture",
    },
    {
      id: 3,
      title: "T-shirt Personnalisé",
      category: "textile",
      image: "/public/placeholder.svg",
      tools: "Sérigraphie, Illustrator",
      client: "Association Sportive",
    },
    {
      id: 4,
      title: "Site Web Vitrine",
      category: "web",
      image: "/public/placeholder.svg",
      tools: "React, Tailwind CSS",
      client: "Cabinet d'Avocats",
    },
    {
      id: 5,
      title: "Carte de Mariage",
      category: "cards",
      image: "/public/placeholder.svg",
      tools: "InDesign, Photoshop",
      client: "Client privé",
    },
    {
      id: 6,
      title: "Affiche Promotionnelle",
      category: "print",
      image: "/public/placeholder.svg",
      tools: "Photoshop, Illustrator",
      client: "Boutique Locale",
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
                    <div key={item.id} className="animate-on-scroll group">
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
