/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Flavour {
  flavourName: string;
  pricePerPound: number;
}

export type CategoryType = 'Cake' | 'Ice Cream' | 'Brownies';

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: CategoryType;
  description: string;
  shortDescription: string;
  basePrice: number;
  flavours: Flavour[];
  ingredients: string[];
  deliveryTime: string;
  availabilityStatus: 'In Stock' | 'Pre-order' | 'Out of Stock';
  featuredProduct: boolean;
  createdDate: string;
  images: string[];
}

export interface InquiryFormInput {
  name: string;
  phoneNumber: string;
  message: string;
}

export interface OrderFormInput {
  customerName: string;
  mobileNumber: string;
  location: string;
  cakeWeight: number; // in pounds
  flavour: string;
  additionalNotes: string;
}
