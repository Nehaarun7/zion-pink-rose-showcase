import galleryScarves from '@/assets/gallery-scarves.jpg';
import galleryHandbags from '@/assets/gallery-handbags.jpg';
import galleryJewelry from '@/assets/gallery-jewelry.jpg';

const Gallery = () => {
  const categories = [
    {
      image: galleryJewelry,
      title: "Fine Jewelry",
      description: "Exquisite necklaces, earrings, and bracelets in rose gold and precious stones",
      items: "50+ pieces"
    },
    {
      image: galleryHandbags,
      title: "Luxury Handbags",
      description: "Sophisticated bags for every occasion, from elegant evening clutches to chic everyday totes",
      items: "30+ styles"
    },
    {
      image: galleryScarves,
      title: "Silk Scarves & Accessories",
      description: "Beautiful scarves, wraps, and finishing touches to complete your perfect look",
      items: "40+ designs"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Collections
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully curated categories of premium accessories, 
            each piece selected for its exceptional beauty and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-2">
                    {category.description}
                  </p>
                  <p className="text-rose-gold font-medium">
                    {category.items}
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {category.description}
                </p>
                <p className="text-primary font-medium">
                  {category.items}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-hero">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;