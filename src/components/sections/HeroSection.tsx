
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
                className="bg-emma-blue hover:bg-emma-darkblue text-white text-lg py-6 px-8"
              >
                <a href="#portfolio">Découvrez mes réalisations</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-emma-blue text-emma-blue hover:bg-emma-blue hover:text-white text-lg py-6 px-8"
              >
                <a href="#contact">Commandez un service</a>
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative z-20 rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-emma-blue/10 to-emma-teal/10 p-6">
              <img
                src="/placeholder.svg"
                alt="Emma Tech Design showcase"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emma-darkblue/40 to-transparent rounded-lg flex items-end p-6">
                <p className="text-white text-xl font-semibold">
                  Créativité • Technologie • Impact Visuel
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-emma-teal/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-emma-gold/30 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hidden lg:block absolute top-20 right-10 w-32 h-32 bg-emma-blue/5 rounded-full"></div>
      <div className="hidden lg:block absolute bottom-10 left-20 w-40 h-40 bg-emma-teal/5 rounded-full"></div>
    </section>
  );
};

export default HeroSection;
