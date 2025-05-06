
import AnimatedSection from "../AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <AnimatedSection className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="animate-on-scroll relative z-10">
                <img
                  src="/public/lovable-uploads/61cff531-6ba5-45a8-876e-71dc009657a8.png"
                  alt="Charbel - Emma Tech Design"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-emma-blue rounded-lg"></div>
              <div className="absolute -top-4 -left-4 bg-emma-gold/20 w-32 h-32 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emma-darkblue">
                À propos de <span className="text-emma-blue">moi</span>
              </h2>
              <div className="w-20 h-1 bg-emma-blue mb-6"></div>
            </div>
            
            <div className="animate-on-scroll space-y-4 text-gray-700">
              <p>
                Graphiste, développeur web et imprimeur passionné, je travaille depuis plus de 5 ans
                dans le domaine de la création visuelle et du digital.
              </p>
              <p>
                Je suis Charbel (alias Emma T-D), un designer graphique et sérigraphe passionné, 
                fondateur de Emma Tech Design. Je crée des visuels percutants, des impressions 
                uniques, et des expériences digitales modernes pour particuliers, entreprises et marques.
              </p>
              <p>
                Je maîtrise la PAO, la sublimation, la sérigraphie, le design UI/UX, et le 
                développement de sites avec intégration d'IA.
              </p>
              <p className="font-medium text-emma-darkblue">
                Mon engagement : vous offrir un service rapide, sur-mesure, et toujours à la hauteur de vos ambitions.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutSection;
