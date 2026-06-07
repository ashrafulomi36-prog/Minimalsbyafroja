/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert('Please fill out the required Name and Message fields.');
      return;
    }
    // Perform simulated form dispatch, then set success message
    setIsSuccess(true);
    // Perfect state resets
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id="contact-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Editorial Title */}
      <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 text-[#E8B4B8] uppercase text-[10px] font-bold tracking-[3px] justify-center">
          <span className="h-[1px] w-6 bg-[#E8B4B8]"></span> Get In Touch
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-bakery-text">Let's Celebrate Sweetness</h2>
        <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
          Need a completely bespoke cake design or have questions regarding deliveries? Our digital doors are always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Business Info Metas */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-primary/20 rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-bakery-text">Direct Contact details</h3>
            <p className="text-xs text-gray-400 font-light">Get in touch via official social links or help lines.</p>

            <div className="space-y-6 pt-2">
              
              {/* WhatsApp direct details */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 text-bakery-accent p-3 rounded-2xl shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">WhatsApp & Call Help desk</p>
                  <a
                    href="https://wa.me/8801879906873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base font-bold text-bakery-accent hover:underline"
                  >
                    +88 01879 906873
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5 leading-tight">Available from 9:00 AM - 10:00 PM everyday.</p>
                </div>
              </div>

              {/* Delivery Boundary details */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 text-bakery-accent p-3 rounded-2xl shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Our Location Area</p>
                  <p className="font-serif text-base font-bold text-bakery-accent">Dhaka, Bangladesh</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">Delivering beautiful cakes right to home doors safely in custom insulated cake boxes.</p>
                </div>
              </div>

              {/* Mail inquiries */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 text-bakery-accent p-3 rounded-2xl shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Customer Relations Email</p>
                  <p className="font-serif text-base font-bold text-bakery-accent">hello@minimalsbyafroja.com</p>
                </div>
              </div>

            </div>

            {/* Luxurious social media clickables */}
            <div className="pt-6 border-t border-primary/10">
              <p className="text-xs font-semibold text-gray-700 tracking-wider uppercase mb-3">Connect on Socials</p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61569368551164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-[#FFF5F5] hover:bg-primary/20 border border-primary/25 rounded-2xl p-3 text-bakery-accent transition-all duration-300"
                >
                  <Facebook className="h-4.5 w-4.5 text-[#1877F2]" />
                  <span className="text-xs font-bold font-sans">Facebook</span>
                </a>
                
                <a
                  href="https://www.instagram.com/minimalsbyafroja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-[#FFF5F5] hover:bg-primary/20 border border-primary/25 rounded-2xl p-3 text-bakery-accent transition-all duration-300"
                >
                  <Instagram className="h-4.5 w-4.5 text-[#ee2a7b]" />
                  <span className="text-xs font-bold font-sans">Instagram</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Inquiry Form UI */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-primary/20 rounded-3xl p-8 shadow-md">
            {isSuccess ? (
              <div id="contact-success-block" className="text-center py-12 space-y-4">
                <div className="inline-flex bg-emerald-50 text-emerald-600 p-4 rounded-full border border-emerald-100 mb-2">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-bakery-text">Inquiry Received beautifully</h3>
                <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed font-light">
                  Thank you for reaching out to Minimals By Afroja! We have logged your request and our relations team will reply shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-primary/20 hover:bg-primary/30 text-bakery-accent font-semibold text-xs py-2.5 px-6 rounded-xl transition-all uppercase tracking-widest cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-lg font-bold text-bakery-text">Send Us an Instant Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-gray-600 tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-secondary/10 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-bakery-accent font-medium"
                      placeholder="e.g. Omi Ahmed"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-gray-600 tracking-wider">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-secondary/10 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-bakery-accent font-medium"
                      placeholder="e.g. omi@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase text-gray-600 tracking-wider">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-secondary/10 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-bakery-accent font-medium"
                    placeholder="e.g. Buttercream custom request"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase text-gray-600 tracking-wider">Your Message *</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-secondary/10 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-bakery-accent font-medium"
                    placeholder="Type details about your dream cake decoration or question..."
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full bg-bakery-accent hover:bg-bakery-accent/90 text-white font-semibold uppercase tracking-wider py-4 rounded-xl shadow-md transition-all hover:scale-[1.01] flex items-center justify-center space-x-2.5 cursor-pointer text-xs"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Message</span>
                </button>

              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
