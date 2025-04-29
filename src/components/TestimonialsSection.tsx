
import { useState } from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  image?: string;
}

const Testimonial = ({ quote, name, title, rating, image }: TestimonialProps) => {
  return (
    <div className="glass-panel p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={`${i < rating ? "text-cyber-orange fill-cyber-orange" : "text-gray-600"} mr-1`} 
          />
        ))}
      </div>
      <p className="text-gray-300 italic mb-4 flex-grow">"{quote}"</p>
      <div className="flex items-center mt-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue flex items-center justify-center text-white font-bold">
          {image ? (
            <img src={image} alt={name} className="h-10 w-10 rounded-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div className="ml-3">
          <p className="text-white font-semibold">{name}</p>
          <p className="text-cyber-purple text-xs">{title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "The skin analysis feature is incredibly accurate! SKINCARE GPT identified my combination skin and recommended products that actually worked for my oily T-zone and dry cheeks.",
      name: "Sarah J.",
      title: "Skincare Enthusiast",
      rating: 5
    },
    {
      quote: "As a spa owner, I've found the business suggestions from SKINCARE GPT invaluable. It's helped us introduce new services that our clients love!",
      name: "Michael T.",
      title: "Spa Owner",
      rating: 5
    },
    {
      quote: "I've struggled with acne for years and tried countless products. SKINCARE GPT analyzed my skin and recommended a routine that cleared my skin in weeks!",
      name: "Lisa R.",
      title: "Beauty Blogger",
      rating: 4
    },
    {
      quote: "The personalized skin routine SKINCARE GPT created for me has completely transformed my skin. My rosacea is much more manageable now.",
      name: "David K.",
      title: "Customer",
      rating: 5
    },
    {
      quote: "I love how SKINCARE GPT recommends spa treatments in my area based on my skin's needs. Found an amazing facial treatment I wouldn't have known about otherwise!",
      name: "Emma L.",
      title: "Regular Spa-goer",
      rating: 5
    },
    {
      quote: "The detailed skin analysis helped me identify early signs of sun damage that I wasn't aware of. Now I'm taking preventive measures, thanks to SKINCARE GPT!",
      name: "James H.",
      title: "Outdoor Enthusiast",
      rating: 4
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white mb-4 inline-block relative">
            <span className="text-gradient neon-text">User Testimonials</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            See what our users are saying about their experience with SKINCARE GPT
          </p>
        </div>
        
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        {/* Mobile slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Testimonial
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-cyber-purple" : "bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
