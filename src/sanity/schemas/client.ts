/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Product } from '../types';

// Read configuration from environment variables
const projectId = (import.meta as any).env?.VITE_SANITY_PROJECT_ID || 'qz6c392v'; // Use custom project ID or fallback
const dataset = (import.meta as any).env?.VITE_SANITY_DATASET || 'production';
const apiVersion = '2023-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// Helper to get image URLs from Sanity image asset references
export function urlFor(source: any): string {
  if (!source) return '';
  return builder.image(source).url();
}

/**
 * Fetches all products from Sanity CMS and maps them to the frontend Product type.
 */
export async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] | order(createdDate desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    shortDescription,
    basePrice,
    images,
    flavours[] {
      flavourName,
      pricePerPound
    },
    ingredients,
    deliveryTime,
    availabilityStatus,
    featuredProduct,
    createdDate
  }`;

  try {
    const sanityProducts = await client.fetch(query);
    
    if (!sanityProducts || !Array.isArray(sanityProducts)) {
      return [];
    }

    return sanityProducts.map((p: any) => {
      // Map images safely
      let imageUrls: string[] = [];
      if (p.images && Array.isArray(p.images)) {
        imageUrls = p.images.map((img: any) => urlFor(img)).filter(Boolean);
      }

      // Fallback for missing category case
      let finalCategory = p.category;
      if (p.category === 'cake' || p.category === 'Cakes') finalCategory = 'Cake';
      if (p.category === 'ice-cream' || p.category === 'Ice cream') finalCategory = 'Ice Cream';
      if (p.category === 'brownie' || p.category === 'Brownie' || p.category === 'Brownies') finalCategory = 'Brownies';

      return {
        id: p._id,
        title: p.title || '',
        slug: p.slug || '',
        category: finalCategory || 'Cake',
        description: p.description || '',
        shortDescription: p.shortDescription || '',
        basePrice: typeof p.basePrice === 'number' ? p.basePrice : 0,
        flavours: (p.flavours || []).map((f: any) => ({
          flavourName: f.flavourName || '',
          pricePerPound: typeof f.pricePerPound === 'number' ? f.pricePerPound : 0
        })),
        ingredients: Array.isArray(p.ingredients) ? p.ingredients : [],
        deliveryTime: p.deliveryTime || 'Requires 24-48 hours pre-order',
        availabilityStatus: p.availabilityStatus || 'Pre-order',
        featuredProduct: !!p.featuredProduct,
        createdDate: p.createdDate || new Date().toISOString().split('T')[0],
        images: imageUrls
      };
    });
  } catch (error) {
    console.error('Error fetching products from Sanity:', error);
    throw error; // Re-throw to let the caller handle it (e.g., fallback to mock data)
  }
}
