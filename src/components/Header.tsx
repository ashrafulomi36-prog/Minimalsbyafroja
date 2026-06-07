/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Cakes', target: 'category/cakes' },
    { label: 'Ice Cream', target: 'category/ice-cream' },
    { label: 'Brownies', target: 'category/brownies' },
    { label: 'Contact', target: 'contact' },
    { label: 'Queries', target: 'queries' },
  ];

  const handleNavClick = (target: string) => {
    setIsOpen(false);
    onNavigate(target);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF5F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8B4B8]/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left cursor-pointer group focus:outline-none"
          >
            <div className="w-10 h-10 bg-[#E8B4B8] rounded-full flex items-center justify-center text-white font-serif italic text-xl font-semibold shadow-sm transition-transform duration-300 group-hover:scale-105">
              M
            </div>
            <div>
              <h1 className="font-serif text-lg sm:text-xl font-bold tracking-widest uppercase text-bakery-text">
                Minimals <span className="font-light text-sm opacity-60 uppercase block sm:inline">By Afroja</span>
              </h1>
              <p className="font-mono text-[9px] tracking-[0.25em] text-[#8B5E3C] uppercase mt-0.5">
                Luxury Artisan Baker
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex space-x-8 align-middle">
            {navItems.map((item) => {
              const isActive = currentPage === item.target || 
                               (item.target === 'home' && currentPage === '');
              return (
                <button
                  key={item.target}
                  id={`nav-item-${item.target.replace('/', '-')}`}
                  onClick={() => handleNavClick(item.target)}
                  className={`font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-250 hover:text-[#8B5E3C] border-b-2 py-1 relative cursor-pointer ${
                    isActive
                      ? 'text-[#8B5E3C] border-[#8B5E3C] font-semibold'
                      : 'text-gray-600 border-transparent hover:border-[#E8B4B8]/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              id="cta-navbar"
              href="https://wa.me/8801879906873"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#8B5E3C] text-white text-[10px] uppercase tracking-[0.2em] rounded-full hover:opacity-90 transition-all duration-300 shadow-md flex items-center space-x-2"
            >
              <Phone className="h-3 w-3" />
              <span>01879906873</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              id="hamburger-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-bakery-accent p-2 rounded-lg hover:bg-primary/10 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-white/95 backdrop-blur-lg border-b border-primary/20 absolute top-full left-0 right-0 py-4 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-top-5"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.target || 
                               (item.target === 'home' && currentPage === '');
              return (
                <button
                  key={item.target}
                  id={`mobile-nav-item-${item.target.replace('/', '-')}`}
                  onClick={() => handleNavClick(item.target)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/20 text-bakery-accent font-semibold shadow-sm'
                      : 'text-gray-600 hover:bg-primary/10 hover:text-bakery-accent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <div className="pt-4 px-4 border-t border-gray-100 flex flex-col space-y-3">
              <span className="text-xs text-gray-400 tracking-widest uppercase font-semibold">Minimals By Afroja</span>
              <a
                id="mobile-cta-navbar"
                href="https://wa.me/8801879906873"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-bakery-accent hover:bg-bakery-accent/90 text-white font-medium text-sm py-3 rounded-xl transition-colors shadow-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Call or WhatsApp: 01879906873</span>
              </a>
            </div>
            
          </div>
        </div>
      )}
    </header>
  );
}
