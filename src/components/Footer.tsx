
import { Facebook, Instagram, Youtube, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emma-darkblue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Emma Tech Design</h3>
            <p className="mb-6 text-gray-300">
              Pour un visuel qui parle avant les mots.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100070908136795" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emma-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a 
                href="https://www.instagram.com/emma_tech_design?igsh=YzljYTk1ODg3Zg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emma-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a 
                href="https://www.youtube.com/@emma_tech_design" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emma-gold transition-colors"
                aria-label="Youtube"
              >
                <Youtube />
              </a>
              <a 
                href="https://x.com/@EmmanuelTD2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emma-gold transition-colors"
                aria-label="X (Twitter)"
              >
                <X />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://wa.me/+22948083076" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emma-gold transition-colors"
                >
                  WhatsApp: +229 48 08 30 76
                </a>
              </li>
              <li>
                <a href="mailto:emmatechdesign@gmail.com" className="hover:text-emma-gold transition-colors">
                  emmatechdesign@gmail.com
                </a>
              </li>
              <li>Bénin</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-emma-gold transition-colors">À propos</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emma-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-emma-gold transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emma-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Emma Tech Design. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
