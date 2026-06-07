/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Facebook, Instagram, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61569368551164',
      icon: <Facebook className="h-5 w-5" />,
      color: 'hover:bg-[#1877F2] hover:text-white',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/minimalsbyafroja/',
      icon: <Instagram className="h-5 w-5" />,
      color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white',
    },
  ];

  const categories = [
    { name: 'Cakes', target: 'category/cakes' },
    { name: 'Ice Creams', target: 'category/ice-cream' },
    { name: 'Brownies', target: 'category/brownies' },
  ];

  const quickLinks = [
    { name: 'Home', target: 'home' },
    { name: 'Frequently Asked Queries', target: 'queries' },
    { name: 'Contact Us', target: 'contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1A110B] text-gray-300 relative pt-16 pb-8 border-t border-primary/10 overflow-hidden">
      {/* Absolute pink blush glow decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E8B4B8] rounded-full flex items-center justify-center text-white font-serif italic text-xl font-semibold shadow-sm">
                M
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-widest uppercase text-white">
                  Minimals <span className="font-light text-xs opacity-60 block uppercase">By Afroja</span>
                </h3>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mt-4 leading-relaxed font-light">
              Crafting contemporary bespoke bakeries with minimalist visual aesthetic, premium dairy ingredients, and unparalleled taste directly from our kitchen to your celebrations in Bangladesh.
            </p>

            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  id={`footer-social-${social.name.toLowerCase()}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-primary">
              Our Specialties
            </h4>
            <ul className="space-y-3 text-sm">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <button
                    onClick={() => {
                      onNavigate(cat.target);
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-primary transition-colors flex items-center group cursor-pointer"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0 text-primary">
                      •
                    </span>
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-primary">
              Useful Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      onNavigate(link.target);
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-primary transition-colors flex items-center group cursor-pointer"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0 text-primary">
                      •
                    </span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-primary">
              Baker Information
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 font-medium text-xs">WhatsApp Helpline</p>
                  <a
                    href="https://wa.me/8801879906873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors text-white font-semibold block mt-0.5"
                  >
                    +88 01879 906873
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 font-medium text-xs">Covered Delivery Area</p>
                  <p className="text-gray-300 mt-0.5">Dhaka, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 font-medium text-xs">Email Relations</p>
                  <p className="text-gray-300 mt-0.5 font-sans">hello@minimalsbyafroja.com</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-gray-500 gap-4">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Minimals By Afroja. Handcrafted with Love in Bangladesh.</p>
            <p className="mt-1 text-gray-600">Premium design with clean local caching & mobile data optimization.</p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 shrink-0">
            <span className="text-[10px] uppercase tracking-[0.15em] opacity-60 text-gray-300">Dhaka, Bangladesh</span>
            <span className="w-1.5 h-1.5 bg-[#E8B4B8] rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#E8B4B8] font-bold">WhatsApp Ordering Active</span>
          </div>

          <div id="btn-back-to-top" className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary hover:border-primary p-2.5 rounded-full transition-all duration-300 shadow"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-4 w-4 animate-bounce" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
