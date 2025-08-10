import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
              className="w-full h-full object-cover parallax-element"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.05)`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-soft-white/80 to-transparent"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-20 right-20 animate-float">
              <Sparkles className="h-8 w-8 text-rose-gold opacity-60" />
            </div>
            <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
              <Sparkles className="h-6 w-6 text-rose-medium opacity-40" />
            </div>
            <div className="absolute top-1/3 right-1/3 animate-float" style={{ animationDelay: '4s' }}>
              <Sparkles className="h-4 w-4 text-rose-light opacity-50" />
            </div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4 animate-fade-in-up hover-glow">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-rose-medium mb-4 animate-slide-in-left animate-pulse-soft">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 animate-slide-in-right">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 animate-scale-in">
                    <Button className="btn-hero hover-lift animate-glow">
                      Explore Collection
                    </Button>
                    <Button className="btn-outline-rose hover-lift">
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-soft-white border-rose-light hover-lift transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-soft-white border-rose-light hover-lift transition-all duration-300"
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