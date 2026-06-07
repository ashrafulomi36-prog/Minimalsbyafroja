/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, MouseEvent } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GallerySliderProps {
  images: string[];
  productTitle: string;
}

export default function GallerySlider({ images, productTitle }: GallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: '0% 0%' });
  const activeImageRef = useRef<HTMLImageElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Magnifying Glass Hover Effect on the primary image
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const img = activeImageRef.current;
    if (!img) return;

    const { left, top, width, height } = img.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none', backgroundPosition: '0% 0%' });
  };

  return (
    <div id="gallery-component" className="space-y-4">
      {/* Primary Display Frame with Zoom */}
      <div className="relative aspect-square sm:aspect-[4/3] md:aspect-square rounded-2xl bg-secondary/20 overflow-hidden border border-primary/20 shadow-sm group">
        
        {/* Interactive Main Image */}
        <div
          id="main-image-viewport"
          className="w-full h-full cursor-zoom-in relative select-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            ref={activeImageRef}
            src={images[activeIndex]}
            alt={`${productTitle} - Image ${activeIndex + 1}`}
            className="w-full h-full object-cover transition-all"
            referrerPolicy="no-referrer"
          />

          {/* Zoom Lens Overlay Display */}
          <div
            id="zoom-lens"
            style={{
              ...zoomStyle,
              backgroundImage: `url(${images[activeIndex]})`,
              backgroundSize: '200%',
              backgroundRepeat: 'no-repeat',
            }}
            className="absolute inset-0 pointer-events-none hidden md:block rounded-2xl shadow-inner border border-primary/40"
          />
        </div>

        {/* Floating action overlays */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            id="gallery-zoom-button"
            onClick={() => setIsLightboxOpen(true)}
            className="bg-white/80 hover:bg-white text-bakery-accent p-2.5 rounded-full backdrop-blur-md shadow-md hover:scale-105 transition-all"
            title="Open Fullscreen Lightbox"
          >
            <Maximize2 className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Carousel Slide Overlay Arrows */}
        {images.length > 1 && (
          <>
            <button
              id="gallery-prev-arrow"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-bakery-accent p-2 rounded-full shadow hover:scale-105 transition-all backdrop-blur-sm"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              id="gallery-next-arrow"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-bakery-accent p-2 rounded-full shadow hover:scale-105 transition-all backdrop-blur-sm"
              aria-label="Next Image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Rows underneath */}
      {images.length > 1 && (
        <div id="gallery-thumbnails" className="flex items-center gap-3 overflow-x-auto py-1 scrollbar-thin">
          {images.map((img, index) => (
            <button
              key={index}
              id={`thumbnail-item-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-20 aspect-square rounded-lg overflow-hidden border-2 transition-all p-0.5 bg-white ${
                index === activeIndex
                  ? 'border-bakery-accent scale-102 shadow-md'
                  : 'border-primary/10 opacity-70 hover:opacity-100 hover:border-primary/50'
              }`}
            >
              <img
                src={img}
                alt={`${productTitle} thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>
      )}

      {/* LIGHTBOX MODAL PORTAL */}
      {isLightboxOpen && (
        <div
          id="lightbox-portal"
          className="fixed inset-0 z-100 bg-black/95 flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top header navigation */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-110">
            <span className="font-serif text-sm tracking-wider font-light">
              {productTitle} ({activeIndex + 1} / {images.length})
            </span>
            <button
              id="close-lightbox"
              onClick={() => setIsLightboxOpen(false)}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Core Lightbox Image Frame Container */}
          <div
            className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex]}
              alt={productTitle}
              className="max-w-full max-h-[80vh] object-contain rounded-xl select-none"
              referrerPolicy="no-referrer"
            />

            {/* Left Nav in Lightbox */}
            {images.length > 1 && (
              <>
                <button
                  id="lightbox-prev"
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 hover:scale-105 hover:text-primary text-white p-3 rounded-full transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  id="lightbox-next"
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 hover:scale-105 hover:text-primary text-white p-3 rounded-full transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail strip in lightbox modal */}
          {images.length > 1 && (
            <div className="absolute bottom-6 flex space-x-2.5 max-w-full overflow-x-auto px-4 z-110" onClick={(e) => e.stopPropagation()}>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  id={`lightbox-thumb-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-shrink-0 w-14 aspect-square rounded-md overflow-hidden border transition-all ${
                    idx === activeIndex
                      ? 'border-primary ring-2 ring-primary scale-105'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt="gallery thumbnail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
