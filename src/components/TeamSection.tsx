import { MapPin, Heart, Star } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Creative Director",
      description: "With over 15 years in luxury fashion, Sarah curates each piece with an eye for timeless elegance.",
      location: "New York",
      speciality: "Luxury Curation"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Design",
      description: "Emma brings her passion for contemporary design and her expertise in artisanal craftsmanship.",
      location: "Paris",
      speciality: "Jewelry Design"
    },
    {
      name: "Lily Chen",
      role: "Customer Experience Manager",
      description: "Dedicated to ensuring every customer finds their perfect piece and enjoys an exceptional experience.",
      location: "London",
      speciality: "Personal Styling"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-soft-white mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-soft-white mx-auto mb-8"></div>
          <p className="text-xl text-soft-white/90 max-w-3xl mx-auto">
            The passionate women behind Zion Ladies Collections, dedicated to bringing you 
            the finest accessories with personalized service and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="text-center group hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="bg-soft-white/95 rounded-2xl p-8 card-elegant backdrop-blur-sm group-hover:shadow-rose transition-all duration-700">
                <div className="w-24 h-24 bg-rose-light rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-rose-gold group-hover:scale-110 transition-all duration-500 animate-float">
                  <Heart className="h-10 w-10 text-primary group-hover:text-soft-white transition-colors duration-300 animate-glow" />
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2 group-hover:text-rose-dark transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-4 group-hover:text-rose-gold animate-pulse-soft transition-colors duration-300">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-rose-dark transition-colors duration-300">
                  {member.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-muted-foreground group-hover:text-rose-medium transition-colors duration-300">
                    <MapPin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{member.location}</span>
                  </div>
                  <div className="flex items-center justify-center text-primary group-hover:text-rose-gold transition-colors duration-300">
                    <Star className="h-4 w-4 mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-glow" />
                    <span className="text-sm font-medium">{member.speciality}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-soft-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-serif font-semibold text-soft-white mb-4">
              Personalized Service
            </h3>
            <p className="text-xl text-soft-white/90 max-w-4xl mx-auto">
              Our team is here to help you find the perfect pieces for your style and occasions. 
              Book a personal consultation or visit our boutique for expert styling advice.
            </p>
            <button className="btn-outline-rose mt-6 border-soft-white text-soft-white hover:bg-soft-white hover:text-primary">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;