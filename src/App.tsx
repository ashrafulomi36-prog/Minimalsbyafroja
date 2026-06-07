/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CategoryPage from './components/CategoryPage';
import ProductDetails from './components/ProductDetails';
import ContactPage from './components/ContactPage';
import QueriesPage from './components/QueriesPage';
import { products } from './data/products';
import { ChefHat, Flame, Shield, Truck, Sparkles, Facebook, Instagram, Heart, ArrowRight } from 'lucide-react';

export default function App() {
  // Navigation / Routing State based on URL hash
  const [route, setRoute] = useState({ page: 'home', param: '' });

  // Function to parse the hash URL
  const parseHash = () => {
    const hash = window.location.hash || '#';
    if (hash === '#' || hash === '#home') {
      setRoute({ page: 'home', param: '' });
    } else if (hash.startsWith('#category/')) {
      const cat = hash.replace('#category/', '');
      setRoute({ page: 'category', param: cat });
    } else if (hash.startsWith('#product/')) {
      const slug = hash.replace('#product/', '');
      setRoute({ page: 'product', param: slug });
    } else if (hash === '#contact') {
      setRoute({ page: 'contact', param: '' });
    } else if (hash === '#queries') {
      setRoute({ page: 'queries', param: '' });
    } else {
      setRoute({ page: 'home', param: '' });
    }
  };

  useEffect(() => {
    // Parse initially
    parseHash();

    // Listen to route changes (Back/Forward browser buttons)
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Soft navigation trigger
  const navigateTo = (target: string) => {
    window.location.hash = target === 'home' ? '#' : target;
  };

  // Filter featured products for Home Page
  const featuredProducts = products.filter((p) => p.featuredProduct);

  const whyChooseUsInfo = [
    {
      title: 'Fresh Premium Dairy',
      desc: 'Formulated using 100% real dairy milk, imported farm cream, and organic vanilla pods. Zero compound oils.',
      icon: <ChefHat className="h-6 w-6 text-bakery-accent" />,
    },
    {
      title: 'Artistic Custom Designs',
      desc: "Styled individually by Afroja using actual flora, custom buttercream palettes, and gorgeous minimal layouts.",
      icon: <Sparkles className="h-6 w-6 text-bakery-accent" />,
    },
    {
      title: 'Safely Delivery Chilled',
      desc: 'Transported within Dhaka city using insulated cake boxes, avoiding cream melts or structural damage.',
      icon: <Truck className="h-6 w-6 text-bakery-accent" />,
    },
    {
      title: 'Decadent Taste Guarantee',
      desc: 'Moist layers paired with sweet cream cheese frosting or pure Belgian cocoa fudge that lingers nicely on the tongue.',
      icon: <Shield className="h-6 w-6 text-bakery-accent" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5F5] text-bakery-text">
      
      {/* Sticky Premium Header */}
      <Header
        currentPage={route.page === 'category' ? `category/${route.param}` : route.page}
        onNavigate={navigateTo}
      />

      {/* Main Screen Switcher */}
      <main className="flex-grow pt-20">
        
        {/* HOME SCREEN */}
        {route.page === 'home' && (
          <div className="space-y-16 md:space-y-24">
            
            {/* Elegant Hero Segment */}
            <Hero onNavigate={navigateTo} />

            {/* FEATURED CATEGORIES SECTION (Cakes, Ice Cream, Brownies) */}
            <section id="featured-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4scroll-mt-24">
              <div className="text-center max-w-xl mx-auto mb-12 md:mb-16 space-y-3">
                <span className="text-[11px] font-bold text-bakery-accent tracking-[0.25em] uppercase block">Baked with Love</span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-bakery-text">Bespoke Collections</h2>
                <p className="text-sm text-gray-550 leading-relaxed font-light">
                  Whether you enjoy multilayer buttercream cakes, refreshing fruit gelato, or gooey Belgian brownies - we bake memories.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* 1. Cakes Categoric showcase */}
                <div className="bg-white border border-primary/20 hover:border-primary rounded-3xl p-6 flex flex-col h-full justify-between items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/10 mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=600&q=80"
                      alt="Signature Cakes"
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-3 mb-6">
                    <h3 className="font-serif text-xl font-bold text-bakery-text">Signature Cakes</h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed max-w-sm">
                      Individually designed buttercream, minimal botanical and luxurious layered chocolate cakes for elite milestones in Dhaka.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('category/cakes')}
                    className="inline-flex items-center space-x-2 bg-secondary text-bakery-accent border border-primary/30 hover:bg-primary/20 text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Browse Cakes</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* 2. Ice Cream Categoric showcase */}
                <div className="bg-white border border-primary/20 hover:border-primary rounded-3xl p-6 flex flex-col h-full justify-between items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/10 mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1501443710936-21df4f6663f0?auto=format&fit=crop&w=600&q=80"
                      alt="Artisanal Ice Cream"
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-3 mb-6">
                    <h3 className="font-serif text-xl font-bold text-bakery-text">Artisanal Ice Cream</h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed max-w-sm">
                      Cream-pure small batches whipped continuously with real botanical vanilla kernels or organic stone ground pistachios.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('category/ice-cream')}
                    className="inline-flex items-center space-x-2 bg-secondary text-bakery-accent border border-primary/30 hover:bg-primary/20 text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Browse Gelato</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* 3. Brownies Categoric showcase */}
                <div className="bg-white border border-primary/20 hover:border-primary rounded-3xl p-6 flex flex-col h-full justify-between items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/10 mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
                      alt="Premium Brownies"
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-3 mb-6">
                    <h3 className="font-serif text-xl font-bold text-bakery-text">Belgian fudgy Brownies</h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed max-w-sm">
                      The famous high-crinkle top box treats. Loaded with real pieces of melted Belgian truffles and flaky sea salt specs.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('category/brownies')}
                    className="inline-flex items-center space-x-2 bg-secondary text-bakery-accent border border-primary/30 hover:bg-primary/20 text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Browse Brownies</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            </section>

            {/* DYNAMIC FEATURED PRODUCTS SECTION */}
            <section className="bg-secondary/20 border-y border-primary/10 py-16 md:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-bakery-accent tracking-[0.25em] uppercase block">Sanity Driven Catalog</span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-bakery-text">Most Loved Masterpieces</h2>
                  </div>
                  <button
                    onClick={() => navigateTo('category/cakes')}
                    className="text-sm font-semibold text-bakery-accent hover:text-bakery-accent/80 transition-colors flex items-center gap-1 focus:outline-none cursor-pointer"
                  >
                    <span>View all bakery items</span>
                    <span>→</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredProducts.map((prod) => (
                    <ProductCard key={prod.id} product={prod} onNavigate={navigateTo} />
                  ))}
                </div>

              </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left col trust descriptors */}
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-[11px] font-bold text-bakery-accent tracking-[0.25em] uppercase block">Our Quality Vows</span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold text-bakery-text leading-tight">
                    Pure Dairy cream. <br />No compound replacements.
                  </h2>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    At Minimals By Afroja, we prioritize flavor depth and sensory indulgence above mass factory scales. We operate under zero simulated components, ensuring that what you buy is 100% wholesome premium food.
                  </p>
                  
                  {/* Decorative badge layout */}
                  <div className="bg-[#FFF5F5] border border-primary/20 rounded-2xl p-5 flex items-center space-x-3 max-w-sm">
                    <Heart className="h-5 w-5 fill-red-400 text-red-400 shrink-0 animate-pulse" />
                    <p className="text-xs font-medium text-bakery-accent font-serif">Made in Bangladesh with uncompromising elite global ingredients.</p>
                  </div>
                </div>

                {/* Right col core bento features list */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whyChooseUsInfo.map((choose) => (
                    <div
                      key={choose.title}
                      className="bg-white rounded-2xl p-6 border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="bg-primary/25 p-3 rounded-xl inline-block text-bakery-accent mb-4">
                        {choose.icon}
                      </div>
                      <h4 className="font-serif text-lg font-bold text-bakery-text mb-2">{choose.title}</h4>
                      <p className="text-xs text-gray-500 font-light leading-relaxed">{choose.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* FACEBOOK & INSTAGRAM CONNECTIVITY CARD GRID */}
            <section className="bg-white border-t border-primary/10 py-16 md:py-20 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFF5F5] rounded-full blur-[100px] pointer-events-none" />
              
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
                <span className="text-[11px] font-bold text-bakery-accent tracking-[0.25em] uppercase block">Social Hub</span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-bakery-text">Follow Our Sweet Journey</h2>
                <p className="text-sm text-gray-500 max-w-md mx-auto font-light leading-relaxed">
                  We upload behind-the-scenes icing piping sessions, cake cuts, and newly crafted botanical schemas on our accounts ежедневно!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-6">
                  
                  {/* Facebook official card */}
                  <a
                    id="connect-facebook"
                    href="https://www.facebook.com/profile.php?id=61569368551164"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border border-primary/20 hover:border-primary/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 text-left">
                      <div className="bg-[#1877F2]/10 text-[#1877F2] p-2.5 rounded-xl">
                        <Facebook className="h-5 w-5 fill-[#1877F2] text-transparent" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-bakery-text">Facebook Page</h4>
                        <p className="text-[10px] text-gray-400">@minimalsbyafroja</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Instagram official card */}
                  <a
                    id="connect-instagram"
                    href="https://www.instagram.com/minimalsbyafroja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border border-primary/20 hover:border-primary/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 text-left">
                      <div className="bg-[#ee2a7b]/10 text-[#ee2a7b] p-2.5 rounded-xl">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-bakery-text">Instagram Media</h4>
                        <p className="text-[10px] text-gray-400">@minimalsbyafroja</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </a>

                </div>
              </div>
            </section>

          </div>
        )}

        {/* CATEGORY CATALOG SCREEN */}
        {route.page === 'category' && (
          <CategoryPage categorySlug={route.param} onNavigate={navigateTo} />
        )}

        {/* DYNAMIC PRODUCT SPEC SCREEN */}
        {route.page === 'product' && (
          <ProductDetails productSlug={route.param} onNavigate={navigateTo} />
        )}

        {/* CONTACT INFORMATION SCREEN */}
        {route.page === 'contact' && (
          <ContactPage />
        )}

        {/* QUERIES HELPE CENTER SCREEN */}
        {route.page === 'queries' && (
          <QueriesPage />
        )}

      </main>

      {/* Styled Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
