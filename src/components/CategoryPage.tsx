/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, CategoryType } from '../types';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  categorySlug: string; // 'cakes' | 'ice-cream' | 'brownies'
  onNavigate: (page: string) => void;
}

export default function CategoryPage({ categorySlug, onNavigate }: CategoryPageProps) {
  // Map route slugs to actual schema category types
  const categoryMapping: { [key: string]: { label: string; type: CategoryType; desc: string } } = {
    cakes: {
      label: 'Signature Cakes',
      type: 'Cake',
      desc: 'Premium multilayer buttercream designs, luxurious chocolate fudge structures, and signature botanical velvet cakes made to order.'
    },
    'ice-cream': {
      label: 'Artisanal Ice Creams',
      type: 'Ice Cream',
      desc: 'Small-batch premium whipped ice creams infused with whole botanical pods, pure fruits, and dairy-pure farm fresh cream.'
    },
    brownies: {
      label: 'Fudgy Brownies',
      type: 'Brownies',
      desc: 'Crisp crinkle-top chocolate brownie boxes with rich dense fudgy centers baked with high cocoa Belgian couverture chocolate.'
    }
  };

  const selectedCategory = categoryMapping[categorySlug];
  
  if (!selectedCategory) {
    return (
      <div className="text-center py-20 max-w-md mx-auto space-y-4">
        <h3 className="font-serif text-xl font-bold">Category Not Found</h3>
        <button
          onClick={() => onNavigate('home')}
          className="bg-bakery-accent text-white hover:bg-bakery-accent/95 px-5 py-2.5 rounded-xl font-medium transition-colors cursor-pointer"
        >
          Return Home
        </button>
      </div>
    );
  }

  const filteredProducts = products.filter((p) => p.category === selectedCategory.type);

  return (
    <div id="category-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Return Home link */}
      <div className="mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-bakery-accent transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Category Headline */}
      <div className="border-b border-[#E8B4B8]/30 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[#E8B4B8] uppercase text-[10px] font-bold tracking-[3px]">
            <span className="h-[1px] w-8 bg-[#E8B4B8]"></span> Minimals Collection
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-bakery-text">
            {selectedCategory.label}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            {selectedCategory.desc}
          </p>
        </div>

        <div className="bg-[#FFF5F5] border border-[#E8B4B8]/30 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#8B5E3C] shrink-0 shadow-sm">
          Showing {filteredProducts.length} Premium Options
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white border border-primary/10 rounded-2xl p-16 text-center max-w-md mx-auto space-y-3">
          <p className="font-serif text-lg font-bold text-gray-655 text-bakery-text">Baking in progress!</p>
          <p className="text-xs text-gray-400">Our chefs are preparing fresh recipes for this category. Please check back soon or consult WhatsApp help Desk!</p>
        </div>
      ) : (
        <div id="category-products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} onNavigate={onNavigate} />
          ))}
        </div>
      )}

    </div>
  );
}
