/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from '../types';

// Let's declare the generated asset URLs as static strings
const minimalCakeImage = '/src/assets/images/minimal_cake_1780848316131.png';

export const products: Product[] = [
  {
    id: '1',
    title: 'Signature Minimal Pink Floral Cake',
    slug: 'signature-minimal-pink-floral',
    category: 'Cake',
    shortDescription: 'Elegant, ultra-premium minimal cake with gentle pastel blush pink frosting and real organic botanicals. Perfect for intimate celebrations.',
    description: 'Our signature masterpiece. Handcrafted with exquisite precision, this minimal floral cake embodies elegant luxury. The cake features three layers of fluffy sponge paired with our silky signature buttercream frosting, organic botanicals, and high-end gold flakes. Crafted with the finest local and imported cream to melt in your mouth in every bite. Designed specifically for sophisticated aesthetics.',
    basePrice: 1200,
    flavours: [
      { flavourName: 'Vanilla Dream', pricePerPound: 1200 },
      { flavourName: 'Classic Chocolate Fudge', pricePerPound: 1350 },
      { flavourName: 'Luxe Red Velvet', pricePerPound: 1500 },
      { flavourName: 'Salted Caramel', pricePerPound: 1400 },
    ],
    ingredients: ['Premium Imported Dairy Cream', 'Organic Vanilla Pods', 'Pasture-raised Eggs', 'Organic Edible Florals', 'Gold Dust', 'Belgian Cocoa Power'],
    deliveryTime: 'Requires 24-48 hours pre-order',
    availabilityStatus: 'Pre-order',
    featuredProduct: true,
    createdDate: '2026-06-01',
    images: [
      minimalCakeImage,
      'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464349118118-206cb3c25ba4?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '2',
    title: 'Belgian Double Chocolate Fudge Cake',
    slug: 'belgian-double-chocolate-fudge',
    category: 'Cake',
    shortDescription: 'Unapologetically rich and decadent. Three layers of moist Belgian chocolate cake layered with bittersweet chocolate ganache.',
    description: 'For true chocolate connoisseurs. We import pure Belgian Couverture chocolate containing 70% cocoa solids to construct a cake that defines luxurious decadence. Layered with silky smooth dark chocolate fudge frosting and finished with hand-piped Belgian truffles. This is the ultimate birthday and anniversary delight for Dhaka\'s elite cake lovers.',
    basePrice: 1300,
    flavours: [
      { flavourName: 'Dark Chocolate Ganache', pricePerPound: 1300 },
      { flavourName: 'Chocolate Hazelnut Praline', pricePerPound: 1450 },
      { flavourName: 'Mocha Espresso Fudge', pricePerPound: 1350 }
    ],
    ingredients: ['70% Belgian Dark Couverture Chocolate', 'Imported Butter', 'Espresso Powder', 'French Cocoa Powder', 'Organic Flour'],
    deliveryTime: 'Requires 24 hours pre-order',
    availabilityStatus: 'In Stock',
    featuredProduct: true,
    createdDate: '2026-06-02',
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '3',
    title: 'Minimal Red Velvet Luxe',
    slug: 'minimal-red-velvet-luxe',
    category: 'Cake',
    shortDescription: 'Classic velvet sponge with a delicate cocoa undertone, combined with sweet and tangy imported cream cheese frosting.',
    description: 'Striking red beauty wrapped in minimal elegance. Our Red Velvet Luxe features gorgeous rich crimson crumbs with an extraordinarily soft, velvety crumb structure. We fuse high-grade imported cream cheese and pure vanilla extract to make a frosting that perfectly contrasts the subtle cocoa notes of the sponge. A gorgeous choice for proposals, weddings, or treating yourself.',
    basePrice: 1400,
    flavours: [
      { flavourName: 'Signature Cream Cheese', pricePerPound: 1400 },
      { flavourName: 'White Chocolate Velvet', pricePerPound: 1550 }
    ],
    ingredients: ['Imported Philadelphia Cream Cheese', 'Buttermilk', 'Belgian White Chocolate', 'Organic Red Beet Reduction', 'Vanilla Extract'],
    deliveryTime: 'Requires 24 hours pre-order',
    availabilityStatus: 'In Stock',
    featuredProduct: true,
    createdDate: '2026-06-03',
    images: [
      'https://images.unsplash.com/photo-1616260841546-742f1b8c85a2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586985289688-ca9cf47d3e6e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '4',
    title: 'Artisanal Madagascan Vanilla Ice Cream',
    slug: 'artisanal-madagascan-vanilla-ice-cream',
    category: 'Ice Cream',
    shortDescription: 'Premium small-batch ice cream infused with real Madagascan vanilla bean flecks and fresh organic double cream.',
    description: 'This is not your average vanilla. Made with 100% natural double cream from local Bangladeshi farms and slow-steeped with whole Madagascan gourmet vanilla pods. Zero artificial flavorings, preservatives, or stabilizers. It is double-churned to achieve a ridiculously smooth texture that melts beautifully, releasing rich, floral vanilla notes in every spoonful.',
    basePrice: 650,
    flavours: [
      { flavourName: 'Madagascan Bourbon Vanilla', pricePerPound: 650 },
      { flavourName: 'Vanilla Almond Praline', pricePerPound: 750 }
    ],
    ingredients: ['Madagascan Vanilla Beans', 'Fresh Organic Double Cream', 'Full Cream Milk', 'Organic Sugar Cane', 'Egg Yolks'],
    deliveryTime: 'Same day delivery available',
    availabilityStatus: 'In Stock',
    featuredProduct: false,
    createdDate: '2026-06-04',
    images: [
      'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501443710936-21df4f6663f0?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '5',
    title: 'Dark Belgian Fudgy Brownie Pack',
    slug: 'dark-belgian-fudgy-brownie-pack',
    category: 'Brownies',
    shortDescription: 'A luxury box of ultra-fudgy brownies with a shiny crinkle top and dense, rich center, baked with real dark couverture.',
    description: 'Our legendary crinkle-top chocolate brownies. Crispy on the outer edges, but intensely fudgy, chewy, and dense in the center. We pack each batch with chunks of hand-molded Belgian dark chocolate that create beautiful molten pockets of chocolate when warmed slightly. Comes in a beautiful luxury matte-finish pink gift box.',
    basePrice: 700,
    flavours: [
      { flavourName: 'Classic Double Chocolate Fudgy', pricePerPound: 700 },
      { flavourName: 'Sea Salt & Espresso Brownie', pricePerPound: 750 },
      { flavourName: 'Salted Caramel Drizzle', pricePerPound: 800 }
    ],
    ingredients: ['70% Dark Chocolate Chunks', 'Pure Cocoa Butter', 'Dark Brown Sugar', 'Free-range Eggs', 'Fleur de Sel'],
    deliveryTime: 'Same day or 12h pre-order',
    availabilityStatus: 'In Stock',
    featuredProduct: true,
    createdDate: '2026-06-05',
    images: [
      'https://images.unsplash.com/photo-1564355808536-25dda9700b1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '6',
    title: 'Gourmet Roasted Pistachio Ice Cream',
    slug: 'gourmet-roasted-pistachio-ice-cream',
    category: 'Ice Cream',
    shortDescription: 'Exquisite, vibrant premium ice cream made using 100% pure roasted Sicilian pistachio paste and crunchy nut bits.',
    description: 'Pure green gold. We source authentic premium pistachios, roast them slowly to release their natural oils, and stone-grind them into a smooth, decadent paste. Churned with rich, organic dairy cream to create an ice cream that is aromatic, salty-sweet, and full of luxurious texture. Generously dotted with hand-chopped roasted pistachio fragments.',
    basePrice: 850,
    flavours: [
      { flavourName: 'Vibrant Sicilian Pistachio', pricePerPound: 850 },
      { flavourName: 'Pistachio White Chocolate', pricePerPound: 950 }
    ],
    ingredients: ['Vibrant Sicilian Pistachio Paste', 'Fresh Double Cream', 'Hand-chopped Pistachios', 'Milk Solids', 'Salt'],
    deliveryTime: 'Same day delivery available',
    availabilityStatus: 'In Stock',
    featuredProduct: false,
    createdDate: '2026-06-06',
    images: [
      'https://images.unsplash.com/photo-1501443710936-21df4f6663f0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580890310255-d57abc1635ed?auto=format&fit=crop&w=800&q=80'
    ]
  }
];
