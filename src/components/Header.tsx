
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const handleScrollSpy = () => {
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(`#${section.id}`);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollSpy);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/4f19c9c7-969f-45f6-879d-bde0513fd76d.png" 
              alt="Emma Tech Design Logo" 
              className="h-12 md:h-14 hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-all duration-300 hover:text-emma-blue relative ${
                activeLink === link.href ? "text-emma-blue" : isScrolled ? "text-emma-darkblue" : "text-emma-darkblue"
              } ${
                activeLink === link.href 
                  ? "after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-0.5 after:w-full after:bg-emma-blue" 
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            className="bg-emma-blue hover:bg-emma-darkblue text-white transition-transform duration-300 hover:scale-105"
          >
            <a href="#contact">Demander un devis</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emma-darkblue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 rotate-90"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation with Animation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`py-2 px-6 hover:bg-gray-100 transition-colors duration-300 ${
                  activeLink === link.href ? "text-emma-blue border-l-4 border-emma-blue" : "text-emma-darkblue"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-3">
              <Button
                asChild
                className="w-full bg-emma-blue hover:bg-emma-darkblue text-white transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="#contact">Demander un devis</a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
