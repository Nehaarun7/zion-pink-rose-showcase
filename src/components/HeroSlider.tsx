import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlider1 from '@/assets/hero-slider-1.jpg';
import heroSlider2 from '@/assets/hero-slider-2.jpg';
import heroSlider3 from '@/assets/hero-slider-3.jpg';

const slides = [
  {
    image: heroSlider1,
    title: "Exquisite Accessories",
    subtitle: "Discover our premium collection of ladies accessories",
    description: "Elevate your style with our curated selection of elegant jewelry, handbags, and scarves"
  },
  {
    image: heroSlider2,
    title: "Luxury Handbags",
    subtitle: "Sophisticated designs for the modern woman",
    description: "From everyday essentials to statement pieces, find your perfect handbag"
  },
  {
    image: heroSlider3,
    title: "Fine Jewelry",
    subtitle: "Timeless pieces that make you shine",
    description: "Carefully crafted jewelry featuring rose gold and precious stones"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-soft-white/80 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4 animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-rose-medium mb-4 animate-fade-in-up">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 animate-fade-in-up">
                    <Button className="btn-hero">
                      Explore Collection
                    </Button>
                    <Button className="btn-outline-rose">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-soft-white/80 hover:bg-soft-white border-rose-light"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-soft-white/80 hover:bg-soft-white border-rose-light"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-soft-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;