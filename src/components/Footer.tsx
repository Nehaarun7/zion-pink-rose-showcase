import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const collections = [
    { name: 'Fine Jewelry', href: '#' },
    { name: 'Luxury Handbags', href: '#' },
    { name: 'Silk Scarves', href: '#' },
    { name: 'Accessories', href: '#' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-foreground text-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-serif font-bold">
                Zion Ladies Collections
              </span>
            </div>
            <p className="text-soft-white/80 mb-6 leading-relaxed">
              Your premier destination for exquisite ladies accessories. 
              Curated with love, designed for elegance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-primary-foreground hover:bg-rose-medium transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-soft-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-soft-white/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-semibold text-soft-white mb-4">
              Collections
            </h3>
            <ul className="space-y-2">
              {collections.map((collection, index) => (
                <li key={index}>
                  <a
                    href={collection.href}
                    className="text-soft-white/80 hover:text-primary transition-colors duration-200"
                  >
                    {collection.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-soft-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-soft-white/80">123 Fashion Avenue</p>
                  <p className="text-soft-white/80">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-soft-white/80">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-soft-white/80">hello@zionladies.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-soft-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-soft-white/60 text-sm">
              © 2024 Zion Ladies Collections. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-soft-white/60 hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-soft-white/60 hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-soft-white/60 hover:text-primary text-sm transition-colors duration-200">
                Returns & Exchanges
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;