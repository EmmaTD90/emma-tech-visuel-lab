
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "../AnimatedSection";

const TestimonialsSection = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  
  const testimonials = [
    {
      id: 1,
      name: "Marie K.",
      text: "J'ai adoré la carte d'anniversaire que Charbel m'a conçue. Rapide et stylé !",
      rating: 5,
      image: "/public/placeholder.svg",
    },
    {
      id: 2,
      name: "Pascal D.",
      text: "Emma Tech Design a créé tout mon branding ! Je recommande vivement.",
      rating: 5,
      image: "/public/placeholder.svg",
    },
    {
      id: 3,
      name: "Société ABC",
      text: "Nous avons collaboré pour la création de notre logo et site web. Très professionnel et à l'écoute !",
      rating: 4,
      image: "/public/placeholder.svg",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre témoignage ! Il sera examiné avant publication.");
    setName("");
    setComment("");
    setRating(5);
  };

  return (
    <section id="testimonials" className="py-20 bg-emma-gray">
      <AnimatedSection className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-emma-darkblue">
            Témoignages <span className="text-emma-blue">Clients</span>
          </h2>
          <div className="w-20 h-1 bg-emma-blue mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 animate-on-scroll">
            Ce que disent mes clients à propos de mon travail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="animate-on-scroll">
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-emma-darkblue">{testimonial.name}</h4>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "text-emma-gold" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic flex-grow">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6 text-emma-darkblue text-center">
            Partagez votre expérience
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-emma-darkblue">
                Votre nom
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
                placeholder="Ex: Jean Dupont"
              />
            </div>

            <div>
              <label 
                htmlFor="rating" 
                className="block text-sm font-medium mb-2 text-emma-darkblue"
              >
                Note
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <svg
                      className={`w-8 h-8 ${
                        star <= rating ? "text-emma-gold" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label 
                htmlFor="comment" 
                className="block text-sm font-medium mb-2 text-emma-darkblue"
              >
                Votre témoignage
              </label>
              <Textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                className="w-full min-h-[120px]"
                placeholder="Partagez votre expérience avec Emma Tech Design..."
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-emma-blue hover:bg-emma-darkblue text-white"
            >
              Envoyer mon témoignage
            </Button>
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default TestimonialsSection;
