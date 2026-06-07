/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Product, Flavour } from '../types';
import { ShoppingBag, MessageSquare, AlertCircle, Sparkles, Check } from 'lucide-react';

interface OrderFormProps {
  product: Product;
}

export default function OrderForm({ product }: OrderFormProps) {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [cakeWeight, setCakeWeight] = useState(1); // Default to 1 Pound
  const [selectedFlavour, setSelectedFlavour] = useState<Flavour | null>(null);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Initialize flavour dropdown from first available flavour
  useEffect(() => {
    if (product.flavours && product.flavours.length > 0) {
      setSelectedFlavour(product.flavours[0]);
    } else {
      setSelectedFlavour({ flavourName: 'Standard', pricePerPound: product.basePrice });
    }
  }, [product]);

  // Handle dynamic pricing calculation
  useEffect(() => {
    if (selectedFlavour) {
      const price = selectedFlavour.pricePerPound * cakeWeight;
      setEstimatedPrice(price);
    } else {
      setEstimatedPrice(product.basePrice * cakeWeight);
    }
  }, [selectedFlavour, cakeWeight, product]);

  const handleFlavourChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const flavourMatch = product.flavours.find((f) => f.flavourName === selectedName);
    if (flavourMatch) {
      setSelectedFlavour(flavourMatch);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!customerName.trim()) {
      newErrors.customerName = 'Please enter your full name.';
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required.';
    } else {
      const bdPhoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
      if (!bdPhoneRegex.test(mobileNumber.trim().replace(/\s+/g, ''))) {
        newErrors.mobileNumber = 'Please enter a valid Bangladeshi mobile number (e.g., 01879906873).';
      }
    }

    if (!location.trim()) {
      newErrors.location = 'Please share your delivery address or area in Dhaka.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Find the first error block and scroll into view smoothly
      const errorKey = Object.keys(errors)[0];
      const errorElement = document.getElementById(`form-group-${errorKey}`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const finalFlavourName = selectedFlavour ? selectedFlavour.flavourName : 'Default';

    // Form template exactly as defined in USER_REQUEST
    const greeting = 'Hello Minimals By Afroja,\n\nI would like to order:\n\n';
    const body = `Product:\n${product.title}\n\nWeight:\n${cakeWeight} Pound\n\nFlavour:\n${finalFlavourName}\n\nPrice:\n৳${estimatedPrice.toLocaleString('en-US')}\n\nCustomer Name:\n${customerName}\n\nMobile Number:\n${mobileNumber}\n\nLocation:\n${location}\n\nAdditional Notes:\n${additionalNotes || 'None'}\n\n`;
    const closing = 'Please confirm my order.';

    const fullMessage = `${greeting}${body}${closing}`;

    // Properly URL encode the WhatsApp message text
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/8801879906873?text=${encodedMessage}`;

    // Open WhatsApp in a safe manner
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="buy-now-section"
      className="bg-white rounded-3xl p-6 sm:p-8 border border-primary/25 shadow-xl relative overflow-hidden"
    >
      {/* Decorative luxury gradient ribbons */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />

      <div className="flex items-center space-x-3 pb-6 border-b border-primary/15 mb-6">
        <div className="bg-primary/20 text-bakery-accent p-2 rounded-xl">
          <ShoppingBag className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-bakery-text">Instant Order Form</h3>
          <p className="text-xs text-gray-500 font-light mt-0.5">Perfect BDT calculator & fast WhatsApp checkout.</p>
        </div>
      </div>

      <form id="order-submit-form" onSubmit={handleOrderSubmit} className="space-y-5">
        
        {/* Customer Name */}
        <div id="form-group-customerName" className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">Your Full Name *</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all bg-secondary/5 focus:outline-none focus:ring-2 focus:bg-white ${
              errors.customerName
                ? 'border-red-300 focus:ring-red-200'
                : 'border-primary/20 focus:ring-primary/40 focus:border-bakery-accent'
            }`}
            placeholder="e.g. Afroja Rahman"
          />
          {errors.customerName && (
            <p className="text-xs text-red-500 font-medium flex items-center gap-1">
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.customerName}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div id="form-group-mobileNumber" className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">Mobile Number *</label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all bg-secondary/5 focus:outline-none focus:ring-2 focus:bg-white ${
              errors.mobileNumber
                ? 'border-red-300 focus:ring-red-200'
                : 'border-primary/20 focus:ring-primary/40 focus:border-bakery-accent'
            }`}
            placeholder="e.g. 01879906873"
          />
          {errors.mobileNumber && (
            <p className="text-xs text-red-500 font-medium flex items-center gap-1">
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.mobileNumber}
            </p>
          )}
        </div>

        {/* Location Address */}
        <div id="form-group-location" className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">Delivery Location (Dhaka) *</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all bg-secondary/5 focus:outline-none focus:ring-2 focus:bg-white ${
              errors.location
                ? 'border-red-300 focus:ring-red-200'
                : 'border-primary/20 focus:ring-primary/40 focus:border-bakery-accent'
            }`}
            placeholder="Flat 4B, House 12, Road 5, Dhanmondi, Dhaka"
          />
          {errors.location && (
            <p className="text-xs text-red-500 font-medium flex items-center gap-1">
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.location}
            </p>
          )}
        </div>

        {/* Dynamic Flavour Selection */}
        <div id="form-group-flavour" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 font-sans">
              Selected Flavour *
            </label>
            <div className="relative">
              <select
                id="flavour-dropdown-selector"
                value={selectedFlavour?.flavourName || ''}
                onChange={handleFlavourChange}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-secondary/5 text-sm font-medium font-sans focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white focus:border-bakery-accent appearance-none cursor-pointer"
              >
                {product.flavours.map((flv) => (
                  <option key={flv.flavourName} value={flv.flavourName}>
                    {flv.flavourName} — ৳{flv.pricePerPound}/lb
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Cake Weight Selection (Pound) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 font-sans">
              Cake Weight (Pound)
            </label>
            <div className="grid grid-cols-5 bg-secondary/20 p-1 rounded-xl border border-primary/10">
              {[1, 2, 3, 4, 5].map((lb) => (
                <button
                  key={lb}
                  type="button"
                  id={`btn-select-weight-${lb}`}
                  onClick={() => setCakeWeight(lb)}
                  className={`py-2 text-xs font-bold font-sans rounded-lg transition-all ${
                    cakeWeight === lb
                      ? 'bg-bakery-accent text-white shadow-md'
                      : 'text-gray-600 hover:bg-primary/20'
                  }`}
                >
                  {lb} lb
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div id="form-group-additionalNotes" className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">Special Requests / Custom Notes</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-secondary/5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white focus:border-bakery-accent"
            placeholder="e.g., Write 'Happy Birthday Sarah' on the cake board, pastel tones, cream icing preferred..."
          />
        </div>

        {/* Estimated Dynamic Pricing Block */}
        <div id="dynamic-price-calculator" className="bg-[#FFF5F5] rounded-2xl p-5 border border-primary/30 space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-widest font-semibold pb-2 border-b border-primary/10">
            <span>Billing Detail</span>
            <span>Est. Rate</span>
          </div>
          <div className="flex items-center justify-between text-sm py-1 font-medium">
            <span className="text-gray-600 font-light flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-600" />
              {selectedFlavour?.flavourName || 'Base'}
            </span>
            <span className="text-gray-800">৳{(selectedFlavour?.pricePerPound || product.basePrice).toLocaleString('en-US')} × {cakeWeight} lb</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-serif text-base font-bold text-bakery-text">Estimated Total:</span>
            <span className="font-serif text-2xl font-bold text-bakery-accent flex items-center gap-1.5">
              ৳ {estimatedPrice.toLocaleString('en-US')}
              <Sparkles className="h-4.5 w-4.5 text-primary shrink-0 animate-bounce" />
            </span>
          </div>
        </div>

        {/* Submit order */}
        <button
          type="submit"
          id="btn-confirm-whatsapp-order"
          className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center space-x-2.5 cursor-pointer text-sm"
        >
          <MessageSquare className="h-5 w-5 fill-white text-transparent" />
          <span>Confirm on WhatsApp</span>
        </button>

        <p className="text-[11px] text-gray-400 text-center leading-relaxed font-light mt-2">
          Upon submission, you will be redirected to WhatsApp instantly with prefilled details. Afroja will finalize the delivery schedules directly with you.
        </p>

      </form>
    </div>
  );
}
