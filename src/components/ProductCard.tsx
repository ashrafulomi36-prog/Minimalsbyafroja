/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from '../types';
import { ArrowUpRight, Sparkles, AlertCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onNavigate: (page: string) => void;
  key?: string | number;
}

export default function ProductCard({ product, onNavigate }: ProductCardProps) {
  // Safe calculation of minimum flavor price or fallback to base price
  const startingPrice = product.flavours && product.flavours.length > 0
    ? Math.min(...product.flavours.map((f) => f.pricePerPound))
    : product.basePrice;

  const handleCardClick = () => {
    onNavigate(`product/${product.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id={`product-card-${product.slug}`}
      onClick={handleCardClick}
      className="group bg-white rounded-3xl overflow-hidden border border-[#E8B4B8]/30 shadow-sm hover:shadow-xl transition-all duration-305 hover:-translate-y-1.5 cursor-pointer relative flex flex-col h-full"
    >
      {/* Category Ribbon */}
      <span className="absolute top-4 left-4 z-10 bg-[#FFF5F5]/90 backdrop-blur-md text-[#8B5E3C] text-[9px] tracking-[0.15em] uppercase font-bold border border-[#E8B4B8]/40 px-3 py-1 rounded-full flex items-center gap-1">
        <Sparkles className="h-3 w-3 text-[#E8B4B8] animate-pulse" />
        {product.category}
      </span>

      {/* Product Image Section */}
      <div className="relative aspect-[4/3] bg-secondary/30 overflow-hidden shrink-0">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient shadow on the card bottom inside the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Product Information Section */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-lg font-bold text-bakery-text group-hover:text-[#8B5E3C] transition-colors leading-tight line-clamp-1">
              {product.title}
            </h3>
            <div className="p-1 rounded-full bg-[#E8B4B8]/10 group-hover:bg-[#E8B4B8] group-hover:text-white transition-all text-[#8B5E3C] shrink-0">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          
          <p className="font-sans text-xs text-gray-500 font-light italic leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Price and Action Section */}
        <div className="mt-5 pt-4 border-t border-[#E8B4B8]/20 flex items-center justify-between">
          <div>
            <span className="text-[9px] text-[#E8B4B8] uppercase tracking-[0.15em] block leading-none font-bold">Starting from</span>
            <span className="font-serif text-lg font-bold text-[#8B5E3C] block mt-1">
              ৳ {startingPrice.toLocaleString('en-US')}
              <span className="text-[10px] font-sans text-gray-400 font-normal"> / lb</span>
            </span>
          </div>

          <span
            className={`text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
              product.availabilityStatus === 'In Stock'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                : 'bg-amber-50 text-amber-700 border border-amber-100'
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>
      </div>
    </div>
  );
}
