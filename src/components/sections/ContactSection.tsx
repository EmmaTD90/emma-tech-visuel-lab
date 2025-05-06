
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedSection from "../AnimatedSection";
import { Facebook, Instagram, Youtube, X } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi d'email
    setTimeout(() => {
      // En production, nous utiliserions ici un service d'envoi d'email
      console.log("Email qui serait envoyé à: emmatechdesign@gmail.com");
      console.log("Contenu:", formState);
      
      toast.success("Votre demande a été envoyée avec succès! Nous vous répondrons bientôt.", {
        duration: 5000,
      });
      
      setFormState({ name: "", email: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <AnimatedSection className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-emma-darkblue">
            Me <span className="text-emma-blue">Contacter</span>
          </h2>
          <div className="w-20 h-1 bg-emma-blue mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 animate-on-scroll">
            Vous avez un projet en tête ? Contactez-moi pour en discuter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="bg-emma-gray p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6 text-emma-darkblue">
                Informations de contact
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-emma-blue text-white p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emma-darkblue">WhatsApp</h4>
                    <a 
                      href="https://wa.me/+22948083076" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emma-blue hover:underline"
                    >
                      +229 48 08 30 76
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emma-blue text-white p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emma-darkblue">Email</h4>
                    <a 
                      href="mailto:emmatechdesign@gmail.com" 
                      className="text-emma-blue hover:underline"
                    >
                      emmatechdesign@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emma-blue text-white p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emma-darkblue">Localisation</h4>
                    <p className="text-gray-700">
                      Bénin
                    </p>
                  </div>
                </li>
              </ul>

              <h4 className="text-xl font-semibold mt-8 mb-4 text-emma-darkblue">
                Retrouvez-moi sur les réseaux
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100070908136795" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emma-blue text-white p-3 rounded-full hover:bg-emma-darkblue transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/emma_tech_design?igsh=YzljYTk1ODg3Zg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emma-blue text-white p-3 rounded-full hover:bg-emma-darkblue transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/@emma_tech_design" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emma-blue text-white p-3 rounded-full hover:bg-emma-darkblue transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube size={20} />
                </a>
                <a 
                  href="https://www.tiktok.com/@emma_tech_design?_t=8r6ljMsjPi1&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emma-blue text-white p-3 rounded-full hover:bg-emma-darkblue transition-colors"
                  aria-label="TikTok"
                >
                  {/* Custom TikTok icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                    <path d="M15 8h.01"/>
                    <path d="M20 10V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v17"/>
                    <path d="M14 10.3V17a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5v0a5 5 0 0 1 5-5"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/@EmmanuelTD2005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emma-blue text-white p-3 rounded-full hover:bg-emma-darkblue transition-colors"
                  aria-label="X (Twitter)"
                >
                  <X size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-emma-darkblue">
                Envoyez-moi un message
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2 text-emma-darkblue"
                  >
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Ex: Jean Dupont"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2 text-emma-darkblue"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="votre-email@exemple.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="service" 
                    className="block text-sm font-medium mb-2 text-emma-darkblue"
                  >
                    Service souhaité
                  </label>
                  <Select
                    value={formState.service}
                    onValueChange={handleServiceChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="graphic-design">Création graphique</SelectItem>
                      <SelectItem value="printing">Impression sur textile & accessoires</SelectItem>
                      <SelectItem value="photo-editing">Retouche & traitement photo</SelectItem>
                      <SelectItem value="web-dev">Développement Web & App Design</SelectItem>
                      <SelectItem value="other">Autre (précisez dans le message)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-2 text-emma-darkblue"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    className="w-full min-h-[150px]"
                    placeholder="Décrivez votre projet ou posez-moi vos questions..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-emma-blue hover:bg-emma-darkblue text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Les devis seront envoyés à votre email: emmatechdesign@gmail.com
                </p>
              </div>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;
