
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AnimatedSection from "../AnimatedSection";

const ServicesSection = () => {
  const services = [
    {
      title: "Création Graphique",
      description: "Affiches, flyers, cartes d'invitation, catalogues, cartes de visite, bâches publicitaires, etc.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Impression sur textile & accessoires",
      description: "T-shirts, mouchoirs, foulards, pagnes, sacs... personnalisés en sérigraphie ou sublimation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Retouche & traitement photo HD",
      description: "Photos cadre, bâche, bannière, restauration d'images anciennes, effet cinéma.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Développement Web & App Design",
      description: "Sites vitrines, e-commerces, blogs, pages personnalisées avec IA intégrée.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Travail à distance & livraison rapide",
      description: "Partout au Bénin et à l'international.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-emma-gray">
      <AnimatedSection className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-emma-darkblue">
            Mes <span className="text-emma-blue">Services</span>
          </h2>
          <div className="w-20 h-1 bg-emma-blue mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 animate-on-scroll">
            Des solutions créatives sur mesure pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden border-l-4 border-l-emma-blue">
                <CardHeader>
                  <div className="text-emma-blue mb-3">{service.icon}</div>
                  <CardTitle className="text-xl font-bold text-emma-darkblue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ServicesSection;
