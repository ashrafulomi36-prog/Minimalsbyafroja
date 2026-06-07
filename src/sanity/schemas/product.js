/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// This is the production-ready Sanity CMS Product Schema as requested.
// You can directly copy-paste this file into your Sanity Studio schema declarations (e.g., schemaTypes/product.js).

export default {
  name: 'product',
  title: 'Cake Business Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'In Stock' },
          { title: 'Pre-order Only', value: 'Pre-order' },
          { title: 'Out of Stock', value: 'Out of Stock' },
        ],
      },
      initialValue: 'Pre-order',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cake', value: 'Cake' },
          { title: 'Ice Cream', value: 'Ice Cream' },
          { title: 'Brownies', value: 'Brownies' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Card Description',
      type: 'string',
      description: 'Used on catalog cards and lists.',
      validation: (Rule) => Rule.required().max(160),
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'text',
      description: 'Full specifications visible on details page.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'basePrice',
      title: 'Base Price (BDT)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'images',
      title: 'Product Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload 1, 2, 5, or 10 images. They will form an image gallery / thumbnail slider.',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'flavours',
      title: 'Flavour Pricing Configuration',
      type: 'array',
      description: 'Add list of available flavours. Prices will feed the dynamic calculator.',
      of: [
        {
          type: 'object',
          name: 'flavourOption',
          title: 'Flavour Option',
          fields: [
            {
              name: 'flavourName',
              title: 'Flavour Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'pricePerPound',
              title: 'Rate/Price Per Pound (BDT)',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
        },
      ],
    },
    {
      name: 'ingredients',
      title: 'Key Ingredients List',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'deliveryTime',
      title: 'Preparation & Delivery Time',
      type: 'string',
      initialValue: 'Requires 24-48 hours pre-order',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featuredProduct',
      title: 'Featured (Boolean)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'createdDate',
      title: 'Created Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    },
  ],
};
