/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from '../types';
import GallerySlider from './GallerySlider';
import OrderForm from './OrderForm';
import { ArrowLeft, CheckCircle, Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface ProductDetailsProps {
  productSlug: string;
  onNavigate: (page: string) => void;
  products: Product[];
}

export default function ProductDetails({ productSlug, onNavigate, products }: ProductDetailsProps) {
  // Safe find from slugs
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold text-bakery-text">Product Not Found</h3>
        <p className="text-gray-500 font-light">The recipe you requested could not be located in our bakery inventory.</p>
        <button
          onClick={() => onNavigate('home')}
          className="bg-bakery-accent text-white px-6 py-2.5 rounded-xl font-medium transition-colors cursor-pointer"
        >
          Return to home
        </button>
      </div>
    );
  }

  return (
    <div id={`product-details-${product.slug}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in-up">
      
      {/* Dynamic Breadcrumbs / Back navigation link */}
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={() => onNavigate(`category/${product.category.toLowerCase().replace(' ', '-')}`)}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-bakery-accent transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to {product.category} Series</span>
        </button>

        <span className="text-xs text-gray-400 font-light font-sans bg-secondary/35 border border-primary/10 px-3 py-1 rounded-full">
          Gourmet Cake Code: #{product.id}
        </span>
      </div>

      {/* Main product presentation grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Image gallery and product metadata */}
        <div className="lg:col-span-6 space-y-8">
          <GallerySlider images={product.images} productTitle={product.title} />

          {/* Luxury core selling badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-primary/10">
            <div className="flex items-start space-x-3 bg-white p-4 border border-primary/10 rounded-2xl">
              <Clock className="h-5 w-5 text-bakery-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-bakery-text uppercase tracking-wide leading-none">Fresh Butter</h4>
                <p className="text-[11px] text-gray-500 mt-1">Baked only on-demand.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-white p-4 border border-primary/10 rounded-2xl">
              <ShieldCheck className="h-5 w-5 text-bakery-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-bakery-text uppercase tracking-wide leading-none">No Compound Fat</h4>
                <p className="text-[11px] text-gray-500 mt-1">Double churned cream.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-white p-4 border border-primary/10 rounded-2xl">
              <Heart className="h-5 w-5 text-bakery-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-bakery-text uppercase tracking-wide leading-none">Safe Delivery</h4>
                <p className="text-[11px] text-gray-500 mt-1">Custom insulated box.</p>
              </div>
            </div>
          </div>

          {/* Extended descriptive segment and botanical info */}
          <div className="bg-[#FFF5F5]/45 border border-primary/15 rounded-3xl p-6 sm:p-8 space-y-4">
            <h4 className="font-serif text-lg font-bold text-bakery-text flex items-center gap-1.5">
              <Sparkles className="h-4.5 w-4.5 text-bakery-accent animate-spin-slow" />
              Baker Premium Notes
            </h4>
            <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
              Each cake order receives specialized styling attention from Afroja. Floral designs utilize actual non-toxic botanical stems safely insulated, organic fruits for purées, and genuine imported chocolates. We strictly guarantee zero vegetable compound fat or stabilizers.
            </p>
          </div>

        </div>

        {/* Right Column: Product descriptions & form */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          
          <div className="space-y-4">
            <span className="text-[10px] font-semibold text-bakery-text bg-primary/20 tracking-widest uppercase border border-primary/30 px-3.5 py-1.5 rounded-full inline-block leading-none">
              {product.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-bakery-text">
              {product.title}
            </h1>
            
            {/* Short specs list */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
              <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-md border border-emerald-100">
                <CheckCircle className="h-3.5 w-3.5" />
                {product.availabilityStatus}
              </span>
              <span className="flex items-center gap-1 bg-amber-50 text-amber-800 px-3 py-1 rounded-md border border-amber-100">
                <Clock className="h-3.5 w-3.5" />
                {product.deliveryTime}
              </span>
            </div>
          </div>

          {/* Tabular detail segments */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-bakery-text">Product Description</h3>
            <p className="text-sm text-gray-650 leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          {/* List of Ingredients */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-700">Artisanal Ingredients Used:</h4>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="bg-white border border-primary/20 text-bakery-accent text-[11px] font-medium px-3.5 py-1.5 rounded-xl block font-sans"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="pt-4 border-t border-primary/10">
            <OrderForm product={product} />
          </div>

        </div>

      </div>

    </div>
  );
}
