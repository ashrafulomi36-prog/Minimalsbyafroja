/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { MessageCircle, HelpCircle, ArrowUpRight, AlertCircle, Sparkles } from 'lucide-react';

export default function QueriesPage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Please enter your beautiful name.';
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else {
      const bdPhoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
      if (!bdPhoneRegex.test(phoneNumber.trim().replace(/\s+/g, ''))) {
        newErrors.phoneNumber = 'Please enter a valid Bangladeshi mobile number (e.g. 01879906873).';
      }
    }
    if (!message.trim()) newErrors.message = 'Please type out your inquiry details.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleQuerySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Beautifully styled WhatsApp query template
    const header = 'Hello Minimals By Afroja,\n\nI have an inquiry:\n\n';
    const body = `Name:\n${name}\n\nPhone Number:\n${phoneNumber}\n\nInquiry / Message:\n${message}\n\n`;
    const footer = 'Please reply to my query when you are free. Thank you.';

    const fullMessage = `${header}${body}${footer}`;
    const encoded = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/8801879906873?text=${encoded}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const popularFaqs = [
    {
      q: 'Do you offer customized designs for themed parties?',
      a: 'Yes, we are highly specialized in custom minimal, rustic, floral, and modern artistic designs. Simply attach a styling mock in your inquiry!',
    },
    {
      q: 'How far in advance should I place my order?',
      a: 'For signature custom cakes, we require a 24-48 hours pre-order window. For standard brownies or classic ice creams, same-day delivery option is open within Dhaka city.',
    },
    {
      q: 'Are your ingredients pure dairy butter and cream?',
      a: 'Absolutely! We never compromise on dairy. We use only high quality premium imports. We do not use mock hydrogenated fat or compound substitutes.',
    },
  ];

  return (
    <div id="queries-page-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 text-[#E8B4B8] uppercase text-[10px] font-bold tracking-[3px] justify-center">
          <span className="h-[1px] w-6 bg-[#E8B4B8]"></span> Assistance Center
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-bakery-text">Inquiries & Queries</h2>
        <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
          Have doubts about ingredients, pricing options, custom boxes, or corporate party bundles? Ask us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: FAQ Quick reference accordion */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FFF5F5] border border-primary/20 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-bakery-accent animate-spin-slow" />
              <h3 className="font-serif text-lg font-bold text-bakery-text">Frequently Asked Questions</h3>
            </div>

            <div className="divide-y divide-primary/10">
              {popularFaqs.map((faq, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                  <span className="text-xs font-semibold text-bakery-accent uppercase tracking-wider block">Q: {faq.q}</span>
                  <p className="text-xs text-gray-650 leading-relaxed font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form redirecting to WhatsApp */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-primary/20 rounded-3xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/20 text-bakery-accent p-2 rounded-xl">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-bakery-text">Submit an Inquiry</h3>
                <p className="text-xs text-gray-400 font-light mt-0.5">Submit instantly to WhatsApp for prompt support.</p>
              </div>
            </div>

            <form id="queries-whatsapp-form" onSubmit={handleQuerySubmit} className="space-y-5">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all bg-secondary/5 focus:outline-none focus:ring-2 focus:bg-white ${
                    errors.name
                      ? 'border-red-300 focus:ring-red-200'
                      : 'border-primary/20 focus:ring-primary/40 focus:border-bakery-accent'
                  }`}
                  placeholder="e.g. Afroja Preeta"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">Mobile Phone Number *</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all bg-secondary/5 focus:outline-none focus:ring-2 focus:bg-white ${
                    errors.phoneNumber
                      ? 'border-red-300 focus:ring-red-200'
                      : 'border-primary/20 focus:ring-primary/40 focus:border-bakery-accent'
                  }`}
                  placeholder="e.g. 01879906873"
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">Detail Query / Message *</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all bg-secondary/5 focus:outline-none focus:ring-2 focus:bg-white ${
                    errors.message
                      ? 'border-red-300 focus:ring-red-200'
                      : 'border-primary/20 focus:ring-primary/40 focus:border-bakery-accent'
                  }`}
                  placeholder="e.g., Do you offer a delivery box containing custom dry ice for out of Dhaka orders? What are the cake sizes available?"
                />
                {errors.message && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit to WhatsApp */}
              <button
                type="submit"
                id="btn-submit-query"
                className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center space-x-2.5 cursor-pointer text-xs"
              >
                <MessageCircle className="h-5 w-5 fill-white text-transparent" />
                <span>Submit Query to WhatsApp</span>
              </button>

            </form>
          </div>
        </div>

      </div>

    </div>
  );
}
