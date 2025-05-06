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
                href="https://www.tiktok.com/@emma_tech_design?_t=8r6ljMsjPi1&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emma-gold transition-colors"
                aria-label="TikTok"
              >
                {/* Custom TikTok icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <a href="mailto:contact@emmatechdesign.com" className="hover:text-emma-gold transition-colors">
                  contact@emmatechdesign.com
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
