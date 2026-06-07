/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Calendar, ChevronRight, Cake, ShoppingBag } from 'lucide-react';
const bakeryHeroImage = '/src/assets/images/bakery_hero_1780848297383.png';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 bg-[#FFF5F5] overflow-hidden"
    >
      {/* Premium blush overlay blobs for soft depth */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero grid structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left fade-in-up">
            
            <div className="inline-flex items-center gap-2 text-[#E8B4B8] uppercase text-[10px] font-bold tracking-[3px] mx-auto lg:mx-0">
              <span className="h-[1px] w-8 bg-[#E8B4B8]"></span> Premium Micro-Bakery
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tighter text-bakery-text">
                The Art of <br/>
                <span className="italic text-[#E8B4B8]">Minimalist</span> <br/>
                Baking.
              </h1>
              <p className="text-[#2D2D2D]/70 max-w-sm text-sm sm:text-base leading-relaxed font-light italic mx-auto lg:mx-0">
                Beautiful, premium minimal cakes, fresh whipped ice creams, and dense Belgian fudge brownies crafted with organic dairy and world-class culinary finesse in Dhaka.
              </p>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-shop-now"
                onClick={() => onNavigate('category/cakes')}
                className="w-full sm:w-auto px-8 py-3.5 border border-[#8B5E3C] text-[#8B5E3C] text-xs uppercase font-semibold tracking-widest rounded-full hover:bg-[#8B5E3C] hover:text-white transition-all duration-300 bg-transparent cursor-pointer"
              >
                <span>Shop Cakes</span>
              </button>
              
              <button
                id="hero-explore-menu"
                onClick={() => {
                  const targetElement = document.getElementById('featured-categories');
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#E8B4B8] text-white text-xs uppercase font-semibold tracking-widest rounded-full shadow-lg shadow-[#E8B4B8]/20 hover:opacity-90 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Menu</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-primary/20">
              <div>
                <p className="font-serif text-2xl font-bold text-bakery-accent">100%</p>
                <p className="text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase">Dairy-Pure</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-bakery-accent">No Mock</p>
                <p className="text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase">Guaranteed</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-bakery-accent">Bespoke</p>
                <p className="text-[10px] sm:text-xs text-gray-500 tracking-wider uppercase">Handcrafted</p>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end min-h-[460px] p-8">
            {/* Outer pink circle border detail */}
            <div className="absolute inset-0 m-4 rounded-[120px] bg-[#E8B4B8]/10 border border-[#E8B4B8]/30 pointer-events-none" />
            
            {/* Inner image card with rounded [100px] or beautiful curve */}
            <div className="relative h-full w-full min-h-[400px] bg-[#fdfdfd] rounded-[100px] overflow-hidden shadow-2xl flex items-center justify-center p-2 group">
              <img
                src={bakeryHeroImage}
                alt="Minimals By Afroja Premium Cakes Setup"
                className="w-full h-full object-cover rounded-[90px] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic sticker on top-right */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center p-2 border border-[#E8B4B8]/20 animate-spin-slow hover:animate-none group-hover:scale-110 transition-transform">
                <div className="text-[8px] text-center uppercase tracking-tighter leading-tight font-bold text-[#8B5E3C]">
                  Freshly<br/>Baked
                </div>
              </div>

              {/* Float aesthetic card at bottom */}
              <div className="absolute bottom-6 right-4 sm:-right-4 bg-white border border-[#E8B4B8]/30 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="bg-[#E8B4B8]/20 text-[#8B5E3C] p-2 rounded-full">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest leading-none font-bold">Latest Edition</p>
                  <p className="font-serif text-sm font-semibold text-[#8B5E3C] leading-tight font-medium">Pastel Blush Botanical</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
