import { Sparkles, Heart, Star } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Each piece is carefully selected for its exceptional craftsmanship and attention to detail."
    },
    {
      icon: Heart,
      title: "Curated with Love",
      description: "Our collection is personally curated to bring you the most beautiful and elegant accessories."
    },
    {
      icon: Star,
      title: "Exclusive Designs",
      description: "Discover unique pieces that reflect your individual style and personality."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            About Zion Ladies Collections
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since our founding, we've been dedicated to providing discerning women with the finest 
            accessories that embody elegance, sophistication, and timeless style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-semibold text-foreground">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zion Ladies Collections was born from a passion for beautiful, high-quality accessories 
              that make every woman feel special. We believe that the right accessory can transform 
              not just an outfit, but how you feel about yourself.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our carefully curated collection features pieces from renowned designers and emerging 
              artists, each selected for its unique beauty, exceptional quality, and ability to 
              complement the modern woman's lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-elegant">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              To empower women through beautiful accessories that celebrate their individuality, 
              enhance their confidence, and become cherished pieces in their personal collection. 
              Every piece tells a story, and we're here to help you write yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;